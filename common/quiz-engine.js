/**
 * Quiz Engine for ENGEE160 Engineering Electronics
 * Handles:
 * - Sampling 10 questions from 30+ question bank
 * - Shuffling choices for each question
 * - Instant grading: <5 retry, 5=D, 6=C, 7=B, 8-10=A
 * - Interactive answer explanations
 * - Digital Certificate unlock & live preview (.PNG download)
 */

const QuizEngine = {
    // Current quiz session state
    state: {
        containerId: 'quiz-container',
        lessonTitle: '',
        questionBank: [],
        currentQuestions: [],
        userAnswers: {},
        isSubmitted: false,
        score: 0,
        grade: '',
        studentName: '',
        timestamp: null,
        certId: ''
    },

    /**
     * Initializes and starts a new quiz attempt.
     */
    init(config) {
        this.state.containerId = config.containerId || 'quiz-container';
        this.state.lessonTitle = config.lessonTitle || 'บทเรียน';
        this.state.questionBank = config.questionBank || [];
        this.state.userAnswers = {};
        this.state.isSubmitted = false;
        this.state.score = 0;
        this.state.grade = '';
        this.state.studentName = '';
        this.state.timestamp = null;
        this.state.certId = '';

        this.sampleQuestions(config.count || 10);
        this.render();
    },

    /**
     * Samples N unique questions and shuffles their choices.
     */
    sampleQuestions(count = 10) {
        const bank = [...this.state.questionBank];
        if (bank.length === 0) {
            this.state.currentQuestions = [];
            return;
        }

        // Fisher-Yates shuffle on bank
        for (let i = bank.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [bank[i], bank[j]] = [bank[j], bank[i]];
        }

        const selected = bank.slice(0, Math.min(count, bank.length));

        // For each question, shuffle its choices while maintaining the correct answer index
        this.state.currentQuestions = selected.map((item, qIdx) => {
            const choicesWithOrigIndex = item.choices.map((text, cIdx) => ({
                text,
                isCorrect: cIdx === item.a
            }));

            // Shuffle choices
            for (let i = choicesWithOrigIndex.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [choicesWithOrigIndex[i], choicesWithOrigIndex[j]] = [choicesWithOrigIndex[j], choicesWithOrigIndex[i]];
            }

            const shuffledChoices = choicesWithOrigIndex.map(c => c.text);
            const newCorrectIndex = choicesWithOrigIndex.findIndex(c => c.isCorrect);

            return {
                qIdx,
                q: item.q,
                choices: shuffledChoices,
                a: newCorrectIndex,
                explain: item.explain || 'ไม่มีคำอธิบายเพิ่มเติม'
            };
        });
    },

    /**
     * Handles radio button change.
     */
    selectChoice(qIndex, choiceIndex) {
        if (this.state.isSubmitted) return;
        this.state.userAnswers[qIndex] = choiceIndex;
        this.updateProgress();
    },

    /**
     * Updates the answer progress badge.
     */
    updateProgress() {
        const total = this.state.currentQuestions.length;
        const answered = Object.keys(this.state.userAnswers).length;
        const progressEl = document.getElementById('quiz-progress-text');
        if (progressEl) {
            progressEl.textContent = `ตอบแล้ว ${answered} / ${total} ข้อ`;
            progressEl.style.color = (answered === total) ? '#4ade80' : '#fbbf24';
        }
    },

    /**
     * Submits the quiz, checks answers, grades, and displays feedback.
     */
    submit() {
        const total = this.state.currentQuestions.length;
        const answeredCount = Object.keys(this.state.userAnswers).length;

        if (answeredCount < total) {
            const confirmSubmit = confirm(`คุณยังตอบไม่ครบ (ตอบไปแล้ว ${answeredCount} จาก ${total} ข้อ)\nต้องการส่งคำตอบทันทีหรือไม่?`);
            if (!confirmSubmit) return;
        }

        this.state.isSubmitted = true;
        let score = 0;

        this.state.currentQuestions.forEach((q, idx) => {
            const userChoice = this.state.userAnswers[idx];
            if (userChoice !== undefined && userChoice === q.a) {
                score++;
            }
        });

        this.state.score = score;
        this.state.timestamp = new Date();
        this.state.certId = `CERT-ENGEE160-${Date.now().toString().slice(-6)}`;

        // Grading Scale
        // < 5 : Fail (เริ่มทำใหม่)
        // 5 : D
        // 6 : C
        // 7 : B
        // 8-10 : A
        if (score >= 8) {
            this.state.grade = 'A';
        } else if (score === 7) {
            this.state.grade = 'B';
        } else if (score === 6) {
            this.state.grade = 'C';
        } else if (score === 5) {
            this.state.grade = 'D';
        } else {
            this.state.grade = 'F';
        }

        this.render();

        // Scroll to results
        setTimeout(() => {
            const resultBox = document.getElementById('quiz-result-section');
            if (resultBox) {
                resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    },

    /**
     * Renders the complete Quiz UI.
     */
    render() {
        const container = document.getElementById(this.state.containerId);
        if (!container) return;

        const total = this.state.currentQuestions.length;
        const answeredCount = Object.keys(this.state.userAnswers).length;
        const isSubmitted = this.state.isSubmitted;
        const score = this.state.score;
        const grade = this.state.grade;

        let html = `
            <div class="quiz-wrapper" style="max-width: 900px; margin: 0 auto;">
                <!-- Header Card -->
                <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; margin-bottom: 2rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
                    <div>
                        <h2 style="color: var(--primary); font-size: 1.4rem; font-weight: 700; margin-bottom: 0.3rem;">
                            📝 แบบทดสอบวัดผลสัมฤทธิ์ — ${this.state.lessonTitle}
                        </h2>
                        <p style="color: var(--muted); font-size: 0.95rem;">
                            ระบบสุ่มคำถาม 10 ข้อจากคลังข้อสอบ • สลับตัวเลือกทุกข้อ • เกณฑ์การผ่าน: 5 ข้อขึ้นไป (เกรด A - D)
                        </p>
                    </div>
                    <div style="text-align: right;">
                        <span id="quiz-progress-text" style="display: inline-block; padding: 0.4rem 1rem; border-radius: 999px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); font-size: 0.9rem; font-weight: 600; color: ${answeredCount === total ? '#4ade80' : '#fbbf24'};">
                            ตอบแล้ว ${answeredCount} / ${total} ข้อ
                        </span>
                    </div>
                </div>
        `;

        // Render Questions List
        this.state.currentQuestions.forEach((q, idx) => {
            const userChoice = this.state.userAnswers[idx];
            const isCorrect = userChoice === q.a;
            const isAnswered = userChoice !== undefined;

            let questionCardBorder = 'var(--border)';
            let questionCardBg = 'rgba(15, 23, 42, 0.6)';

            if (isSubmitted) {
                if (isCorrect) {
                    questionCardBorder = 'rgba(74, 222, 128, 0.5)';
                    questionCardBg = 'rgba(20, 83, 45, 0.15)';
                } else {
                    questionCardBorder = 'rgba(248, 113, 113, 0.5)';
                    questionCardBg = 'rgba(127, 29, 29, 0.15)';
                }
            }

            html += `
                <div class="quiz-card" style="background: ${questionCardBg}; border: 1px solid ${questionCardBorder}; border-radius: 12px; padding: 1.4rem; margin-bottom: 1.5rem; transition: all 0.2s;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; gap: 1rem;">
                        <div style="font-size: 1.08rem; font-weight: 600; color: #f1f5f9; line-height: 1.6;">
                            <span style="color: var(--primary); font-weight: 700; margin-right: 0.4rem;">ข้อที่ ${idx + 1}.</span>
                            ${q.q}
                        </div>
                        ${isSubmitted ? (
                            isCorrect ? 
                            `<span style="background: rgba(74,222,128,0.2); color: #4ade80; border: 1px solid #4ade80; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem; font-weight: 700; white-space: nowrap;">✅ ถูกต้อง (+1)</span>` :
                            `<span style="background: rgba(248,113,113,0.2); color: #f87171; border: 1px solid #f87171; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem; font-weight: 700; white-space: nowrap;">❌ ไม่ถูกต้อง (0)</span>`
                        ) : ''}
                    </div>

                    <!-- Choices List -->
                    <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                        ${q.choices.map((choiceText, cIdx) => {
                            const isSelected = userChoice === cIdx;
                            let choiceBg = 'rgba(255, 255, 255, 0.03)';
                            let choiceBorder = 'var(--border)';
                            let choiceColor = '#cbd5e1';

                            if (isSelected) {
                                choiceBg = 'rgba(6, 182, 212, 0.15)';
                                choiceBorder = 'var(--primary)';
                                choiceColor = '#ffffff';
                            }

                            if (isSubmitted) {
                                if (cIdx === q.a) {
                                    // Correct answer
                                    choiceBg = 'rgba(34, 197, 94, 0.25)';
                                    choiceBorder = '#22c55e';
                                    choiceColor = '#4ade80';
                                } else if (isSelected && !isCorrect) {
                                    // Wrong choice selected
                                    choiceBg = 'rgba(239, 68, 68, 0.25)';
                                    choiceBorder = '#ef4444';
                                    choiceColor = '#f87171';
                                }
                            }

                            const choiceLabels = ['ก.', 'ข.', 'ค.', 'ง.'];
                            const label = choiceLabels[cIdx] || `${cIdx + 1}.`;

                            return `
                                <label style="cursor: ${isSubmitted ? 'default' : 'pointer'}; padding: 0.8rem 1.1rem; background: ${choiceBg}; border: 1px solid ${choiceBorder}; border-radius: 8px; display: flex; align-items: center; gap: 0.85rem; color: ${choiceColor}; transition: all 0.15s;"
                                    ${!isSubmitted ? `onmouseover="if(!this.querySelector('input').checked){this.style.background='rgba(255,255,255,0.07)'; this.style.borderColor='var(--primary)';}" onmouseout="if(!this.querySelector('input').checked){this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='var(--border)';}"` : ''}>
                                    <input type="radio" name="question-${idx}" value="${cIdx}" 
                                        ${isSelected ? 'checked' : ''} 
                                        ${isSubmitted ? 'disabled' : ''} 
                                        onchange="QuizEngine.selectChoice(${idx}, ${cIdx})" 
                                        style="accent-color: var(--primary); width: 18px; height: 18px; cursor: ${isSubmitted ? 'default' : 'pointer'};">
                                    <span style="font-weight: 700; color: var(--primary);">${label}</span>
                                    <span style="font-size: 1rem; line-height: 1.5;">${choiceText}</span>
                                </label>
                            `;
                        }).join('')}
                    </div>

                    <!-- Post-submit explanation -->
                    ${isSubmitted ? `
                        <div style="margin-top: 1rem; padding: 0.9rem 1.1rem; border-radius: 8px; font-size: 0.95rem; line-height: 1.6; background: ${isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left: 4px solid ${isCorrect ? '#22c55e' : '#ef4444'};">
                            <strong style="color: ${isCorrect ? '#4ade80' : '#f87171'};">
                                ${isCorrect ? '💡 คำอธิบายเฉลย:' : `💡 เฉลยที่ถูกต้อง: ${choiceLabels[q.a] || ''} ${q.choices[q.a]}<br>คำอธิบายเชิงวิชาการ:`}
                            </strong>
                            <div style="color: #e2e8f0; margin-top: 0.3rem;">${q.explain}</div>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        // Submit Button (Visible only before submitting)
        if (!isSubmitted) {
            html += `
                <div style="margin-top: 2rem; text-align: center;">
                    <button onclick="QuizEngine.submit()" style="background: linear-gradient(135deg, var(--primary), #0284c7); color: white; border: none; padding: 1rem 3rem; border-radius: 12px; font-size: 1.15rem; font-weight: 700; font-family: 'Sarabun', sans-serif; cursor: pointer; box-shadow: 0 4px 25px var(--primary-glow); transition: all 0.2s;"
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 30px var(--primary-glow)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 25px var(--primary-glow)';">
                        ✅ ส่งคำตอบและประเมินผล
                    </button>
                </div>
            `;
        } else {
            // Results and Grade Card
            const isPassed = grade !== 'F';
            const gradeInfo = {
                'A': { title: 'เกรด A (ดีเยี่ยม)', color: '#4ade80', bg: 'rgba(34, 197, 94, 0.15)', border: '#22c55e' },
                'B': { title: 'เกรด B (ดี)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: '#0284c7' },
                'C': { title: 'เกรด C (ปานกลาง)', color: '#fbbf24', bg: 'rgba(245, 158, 11, 0.15)', border: '#d97706' },
                'D': { title: 'เกรด D (ผ่านเกณฑ์ขั้นต่ำ)', color: '#fb923c', bg: 'rgba(249, 115, 22, 0.15)', border: '#ea580c' },
                'F': { title: 'ไม่ผ่านเกณฑ์ (ต่ำกว่า 5 ข้อ)', color: '#f87171', bg: 'rgba(239, 68, 68, 0.15)', border: '#ef4444' }
            }[grade];

            html += `
                <div id="quiz-result-section" style="background: ${gradeInfo.bg}; border: 2px solid ${gradeInfo.border}; border-radius: 16px; padding: 2rem; margin-top: 2.5rem; text-align: center;">
                    <div style="font-size: 2.8rem; margin-bottom: 0.5rem;">
                        ${isPassed ? (grade === 'A' ? '🏆' : '🎉') : '🔄'}
                    </div>
                    <h2 style="color: ${gradeInfo.color}; font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">
                        ${isPassed ? `ยินดีด้วย! คุณสอบผ่าน — ${gradeInfo.title}` : 'ผลการสอบ: ยังไม่ผ่านเกณฑ์'}
                    </h2>
                    <p style="font-size: 1.25rem; color: #f1f5f9; margin-bottom: 1rem;">
                        คุณได้คะแนน <strong>${score}</strong> จาก <strong>${total}</strong> ข้อ (คิดเป็น <strong>${Math.round((score / total) * 100)}%</strong>)
                    </p>

                    ${!isPassed ? `
                        <div style="max-width: 600px; margin: 0 auto 1.5rem; color: #cbd5e1; font-size: 1rem; line-height: 1.7; background: rgba(0,0,0,0.25); padding: 1rem; border-radius: 10px;">
                            ⚠️ ตามเกณฑ์ของรายวิชา ต้องได้คะแนนตั้งแต่ <strong>5 ข้อขึ้นไป (เกรด D)</strong> จึงจะผ่านการประเมินและได้รับใบประกาศนียบัตรดิจิทัล<br>
                            กรุณาทบทวนบทเรียนด้านบน แล้วกดปุ่มด้านล่างเพื่อเริ่มทำข้อสอบชุดใหม่อีกครั้ง
                        </div>
                        <button onclick="QuizEngine.retry()" style="background: #ef4444; color: white; border: none; padding: 0.9rem 2.5rem; border-radius: 10px; font-size: 1.1rem; font-weight: 700; font-family: 'Sarabun', sans-serif; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 20px rgba(239,68,68,0.4);"
                            onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">
                            🔄 เริ่มทำข้อสอบชุดใหม่ (สุ่ม 10 ข้อใหม่)
                        </button>
                    ` : `
                        <div style="max-width: 650px; margin: 0 auto 1.5rem; color: #cbd5e1; font-size: 1rem; line-height: 1.7;">
                            คุณได้รับสิทธิ์รับ <strong>ใบประกาศนียบัตรดิจิทัล (Digital Certificate)</strong> ประจำบทเรียนนี้!<br>
                            กรุณากรอกชื่อ-นามสกุลของคุณด้านล่าง เพื่อพิมพ์ลงบนใบประกาศและดาวน์โหลดเป็นไฟล์ภาพ .PNG
                        </div>

                        <!-- Certificate Form & Preview Section -->
                        <div style="background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border); border-radius: 14px; padding: 1.75rem; max-width: 780px; margin: 0 auto 1.5rem; text-align: left;">
                            <label style="display: block; font-size: 1.05rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.6rem;">
                                👤 กรอกชื่อ - นามสกุล (สำหรับระบุในใบประกาศ):
                            </label>
                            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
                                <input type="text" id="cert-student-name" placeholder="เช่น นายสมชาย ใจดี หรือ สมหญิง รักเรียน" value="${this.state.studentName}"
                                    oninput="QuizEngine.updateStudentName(this.value)"
                                    style="flex: 1; min-width: 250px; padding: 0.8rem 1.2rem; background: rgba(0,0,0,0.4); border: 1px solid var(--primary); border-radius: 8px; color: white; font-size: 1.05rem; font-family: 'Sarabun', sans-serif; outline: none;">
                                <button onclick="QuizEngine.downloadCertificate()" style="background: #10b981; color: white; border: none; padding: 0.8rem 1.8rem; border-radius: 8px; font-size: 1.05rem; font-weight: 700; font-family: 'Sarabun', sans-serif; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; transition: all 0.2s; box-shadow: 0 4px 15px rgba(16,185,129,0.35);"
                                    onmouseover="this.style.background='#059669';" onmouseout="this.style.background='#10b981';">
                                    📥 ดาวน์โหลดใบประกาศ (.PNG)
                                </button>
                            </div>
                            <div style="font-size: 0.85rem; color: #94a3b8; margin-top: 0.5rem;">
                                * เมื่อพิมพ์ชื่อ ระบบจะอัปเดตลงบนตัวอย่างใบประกาศนียบัตรด้านล่างโดยอัตโนมัติ
                            </div>
                        </div>

                        <!-- Live Certificate Canvas Preview -->
                        <div style="margin: 1.5rem auto; max-width: 820px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6); border: 1px solid #334155;">
                            <canvas id="certificate-canvas" style="width: 100%; height: auto; display: block; background: #0b1220;"></canvas>
                        </div>

                        <div style="margin-top: 1.5rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                            <button onclick="QuizEngine.downloadCertificate()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; padding: 0.9rem 2.2rem; border-radius: 10px; font-size: 1.1rem; font-weight: 700; font-family: 'Sarabun', sans-serif; cursor: pointer; box-shadow: 0 4px 20px rgba(16,185,129,0.4);">
                                📥 บันทึกภาพใบประกาศ (.PNG)
                            </button>
                            <button onclick="QuizEngine.retry()" style="background: rgba(255,255,255,0.08); color: #cbd5e1; border: 1px solid var(--border); padding: 0.9rem 1.8rem; border-radius: 10px; font-size: 1rem; font-weight: 600; font-family: 'Sarabun', sans-serif; cursor: pointer;"
                                onmouseover="this.style.background='rgba(255,255,255,0.15)';" onmouseout="this.style.background='rgba(255,255,255,0.08)';">
                                🔄 ทำข้อสอบอีกครั้งเพื่อปรับปรุงคะแนน
                            </button>
                        </div>
                    `}
                </div>
            `;
        }

        html += `</div>`;
        container.innerHTML = html;

        // If passed, render the certificate canvas
        if (isSubmitted && grade !== 'F') {
            this.renderCertificateCanvas();
        }
    },

    /**
     * Updates student name and re-renders the certificate preview.
     */
    updateStudentName(name) {
        this.state.studentName = name;
        this.renderCertificateCanvas();
    },

    /**
     * Renders the Certificate on the HTML5 Canvas via CertificateEngine.
     */
    renderCertificateCanvas() {
        const canvas = document.getElementById('certificate-canvas');
        if (!canvas || typeof CertificateEngine === 'undefined') return;

        const defaultName = this.state.studentName.trim() || 'ชื่อ - นามสกุล ของคุณ';

        CertificateEngine.render(canvas, {
            studentName: defaultName,
            lessonTitle: this.state.lessonTitle,
            score: this.state.score,
            total: this.state.currentQuestions.length,
            grade: this.state.grade,
            timestamp: this.state.timestamp,
            certId: this.state.certId
        });
    },

    /**
     * Downloads the certificate as PNG.
     */
    downloadCertificate() {
        const canvas = document.getElementById('certificate-canvas');
        if (!canvas || typeof CertificateEngine === 'undefined') {
            alert('ไม่พบ Canvas ใบประกาศนียบัตร');
            return;
        }

        const rawName = this.state.studentName.trim() || 'Student';
        const cleanName = rawName.replace(/[^a-zA-Z0-9ก-๙]/g, '_');
        const cleanLesson = this.state.lessonTitle.replace(/[^a-zA-Z0-9ก-๙]/g, '_');
        const filename = `Certificate_ENGEE160_${cleanLesson}_${cleanName}.png`;

        CertificateEngine.downloadPNG(canvas, filename);
    },

    /**
     * Retries the quiz with a new random batch of 10 questions.
     */
    retry() {
        this.init({
            containerId: this.state.containerId,
            lessonTitle: this.state.lessonTitle,
            questionBank: this.state.questionBank,
            count: 10
        });

        // Scroll smoothly to top of quiz
        setTimeout(() => {
            const container = document.getElementById(this.state.containerId);
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
};

// Export to window
if (typeof window !== 'undefined') {
    window.QuizEngine = QuizEngine;
}
