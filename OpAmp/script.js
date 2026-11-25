/**
 * Op-Amp Interactive Learning Module — ENGEE160 Electronics
 * Comprehensive Theory, IEEE/IEC Standard Schematics & Real-Time Animated Virtual Labs
 * Topics:
 * 1. ideal-basics: คุณสมบัติ Op-Amp อุดมคติ vs ของจริง และกฎเหล็ก (Golden Rules & Virtual Short)
 * 2. inverting: วงจรขยายแบบกลับเฟส (Inverting Amplifier & 180° Inversion & Clipping)
 * 3. non-inverting: วงจรขยายแบบไม่กลับเฟสและบัฟเฟอร์ (Non-Inverting & Loading Effect Buffer)
 * 4. summing-diff: วงจรรวมสัญญาณและวงจรหาผลต่าง (Summing & Difference Amplifier / CMRR)
 * 5. integrator-diff: วงจรรวมการและหาอนุพันธ์ (Integrator, Differentiator & Waveform Shaping)
 * 6. comparator-schmitt: วงจรเปรียบเทียบแรงดันและชมิตต์ทริกเกอร์ (Comparator & Schmitt Trigger Hysteresis)
 * 7. quiz: แบบทดสอบวัดผลสัมฤทธิ์ 10 ข้อ จากคลัง 30 ข้อ พร้อมใบประกาศนียบัตร
 */

const topics = {
    'ideal-basics': {
        title: 'คุณสมบัติ Op-Amp อุดมคติ vs ของจริง และกฎเหล็ก (Ideal vs Practical & Golden Rules)',
        desc: `<b>ออปแอมป์ (Operational Amplifier: Op-Amp)</b> เป็นวงจรรวม (IC) ขยายสัญญาณไฟฟ้ากระแสตรงและกระแสสลับที่มีอัตราขยายสูงมาก มีขั้วอินพุต 2 ขั้ว คือ <b>ขั้วกลับเฟส Inverting Input (-)</b> และ <b>ขั้วไม่กลับเฟส Non-inverting Input (+)</b> พร้อมขั้วจ่ายไฟเลี้ยงคู่ (<span class="math-badge">+V_{CC} \\text{ และ } -V_{EE}</span>)<br><br>
        <b>👑 กฎเหล็ก 2 ข้อของ Op-Amp ในย่านเชิงเส้น (The 2 Golden Rules):</b><br>
        1. <b>กฎกระแสอินพุตเป็นศูนย์:</b> <span class="math-badge">I_+ = I_- \\approx 0\\text{ A}</span><br>
        เนื่องจากความต้านทานอินพุตของ Op-Amp สูงมากจนเป็นอนันต์ (<span class="math-badge">Z_{in} = \\infty</span>) จึงไม่มีกระแสไฟฟ้าไหลเข้าสู่ขั้วอินพุตทั้งสองเลย<br>
        2. <b>กฎแรงดันช็อตเสมือน (Virtual Short):</b> <span class="math-badge">V_+ \\approx V_-</span> หรือ <span class="math-badge">V_d = V_+ - V_- \\approx 0\\text{ V}</span><br>
        เมื่อมีการต่อวงจรป้อนกลับแบบลบ (Negative Feedback) อัตราขยายมหาศาลจะบังคับให้ศักย์ไฟฟ้าที่ขั้วทั้งสองมีค่าเท่ากันเสมอ เสมือนมีสายไฟลัดวงจรกันอยู่ (หากขาหนึ่งต่อลงกราวด์ อีกขาหนึ่งจะกลายเป็น <b>Virtual Ground</b> ทันที)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 เปรียบเทียบ Op-Amp ในอุดมคติ vs ออปแอมป์จริง (LM741 / TL081)</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.2rem;">
                <thead>
                    <tr style="background: rgba(236, 72, 153, 0.15);">
                        <th style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: left;">พารามิเตอร์ทางวิศวกรรม</th>
                        <th style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">Op-Amp ในอุดมคติ</th>
                        <th style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">Op-Amp จริง (LM741 / TL081)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554;"><b>อัตราขยายวงรอบเปิด ($A_{OL}$)</b></td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center; color: #4ade80; font-weight: bold;">อนันต์ (∞)</td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">$10^5$ ถึง $2 \times 10^5$ (100 - 106 dB)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554;"><b>ความต้านทานอินพุต ($Z_{in}$)</b></td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center; color: #4ade80; font-weight: bold;">อนันต์ (∞)</td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">$2\text{ M}\Omega$ (BJT 741) / $10^{12}\Omega$ (JFET TL081)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554;"><b>ความต้านทานเอาต์พุต ($Z_{out}$)</b></td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center; color: #4ade80; font-weight: bold;">ศูนย์ ($0\,\Omega$)</td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">ประมาณ $50\,\Omega - 75\,\Omega$</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554;"><b>แถบความถี่ตอบสนอง ($BW$)</b></td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center; color: #4ade80; font-weight: bold;">อนันต์ (∞)</td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">$GBW \approx 1\text{ MHz} - 4\text{ MHz}$</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554;"><b>Common-Mode Rejection ($CMRR$)</b></td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center; color: #4ade80; font-weight: bold;">อนันต์ (∞)</td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">$70\text{ dB} - 100\text{ dB}$</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554;"><b>Slew Rate ($SR = dv/dt$)</b></td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center; color: #4ade80; font-weight: bold;">อนันต์ (∞)</td>
                        <td style="padding: 0.6rem 0.9rem; border: 1px solid #223554; text-align: center;">$0.5\text{ V/}\mu\text{s}$ (741) / $13\text{ V/}\mu\text{s}$ (TL081)</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(236, 72, 153, 0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚡ <b>ทำไม Op-Amp ถึงต้องต่อ Negative Feedback เสมอในการขยายสัญญาณเชิงเส้น?</b><br>
                เนื่องจากอัตราขยายวงรอบเปิด $A_{OL}$ มีค่าสูงถึง $200,000$ เท่า หากเราป้อนความต่างศักย์เพียง $\pm 100\,\mu\text{V}$ ($0.0001\text{V}$) แรงดันเอาต์พุตตามทฤษฎี $v_{out} = A_{OL}(V_+ - V_-)$ จะพุ่งเกิน $\pm 20\text{V}$ ซึ่งชนขอบเขตแรงดันอิ่มตัวของไฟเลี้ยง ($\pm V_{sat}$) ทันที ดังนั้นจึงไม่สามารถขยายสัญญาณแบบเป็นสัดส่วนได้หากไม่มี <b>Negative Feedback</b> มาจำกัดอัตราขยายให้คงที่และควบคุมได้
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 410',
        svg: ''
    },
    'inverting': {
        title: 'วงจรขยายแบบกลับเฟส (Inverting Amplifier)',
        desc: `<b>วงจรขยายแบบกลับเฟส (Inverting Amplifier)</b> เป็นวงจรพื้นฐานที่ป้อนสัญญาณอินพุตเข้าที่ขั้ว Inverting (-) ผ่านตัวต้านทาน $R_{in}$ และใช้ตัวต้านทาน $R_f$ ดึงสัญญาณเอาต์พุตป้อนกลับมาที่ขั้วเดิม ส่วนขั้ว Non-inverting (+) ต่อลงกราวด์ ($0\\text{V}$)<br><br>
        <b>📐 การพิสูจน์สมการอัตราขยายจากกฎกระแสของเคอร์ชอฟฟ์ (KCL):</b><br>
        1. ขั้ว (+) ต่อกราวด์ ส่งผลให้ขั้ว (-) มีศักย์ไฟฟ้าเป็น <b>กราวด์เสมือน (Virtual Ground: $V_- = 0\\text{V}$)</b><br>
        2. กระแสไหลผ่านอินพุต: <span class="math-badge">I_{in} = \\frac{v_{in} - V_-}{R_{in}} = \\frac{v_{in}}{R_{in}}</span><br>
        3. กระแสไหลผ่านตัวต้านทานป้อนกลับ: <span class="math-badge">I_f = \\frac{V_- - v_{out}}{R_f} = \\frac{- v_{out}}{R_f}</span><br>
        4. เนื่องจาก $I_- = 0$ ดังนั้น $I_{in} = I_f \\Rightarrow \\frac{v_{in}}{R_{in}} = \\frac{- v_{out}}{R_f}$<br>
        <span class="math-block">A_v = \\frac{v_{out}}{v_{in}} = - \\frac{R_f}{R_{in}}</span>
        เครื่องหมายลบแสดงถึง <b>การกลับเฟส 180 องศา (Phase Inversion)</b> อย่างสมบูรณ์แบบ`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚡ อิมพีแดนซ์และการตัดยอดคลื่น (Saturation Clipping)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>ความต้านทานอินพุตของวงจร:</b> <span class="math-badge">Z_{in} = R_{in}</span> (กระแสอินพุตทั้งหมดไหลผ่าน $R_{in}$ ลงสู่ Virtual Ground)<br>
                • <b>ความต้านทานเอาต์พุตของวงจร:</b> <span class="math-badge">Z_{out} \\approx 0\\,\\Omega</span> (ควบคุมด้วย Negative Feedback ทำให้จ่ายกระแสได้ดี)<br>
                • <b>ขอบเขตการขยายเชิงเส้น (Linear Dynamic Range):</b> แรงดันเอาต์พุตจะไม่สามารถขยายเกินพิกัดรางจ่ายไฟอิ่มตัว <span class="math-badge">\\pm V_{sat} \\approx \\pm (V_{CC} - 1.5\\text{V})</span> หากแอมพลิจูดอินพุตสูงเกินไป ยอดคลื่นไซน์ทั้งซีกบวกและซีกลบจะถูกตัดเรียบแบน (Clipping Distortion)
            </p>

            <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚠️ <b>ข้อควรพิจารณาในการเลือกค่า $R_{in}$ และ $R_f$:</b><br>
                - ไม่ควรเลือก $R_{in}$ ต่ำเกินไป (เช่น ต่ำกว่า $1\\text{ k}\\Omega$) เพราะจะทำให้วงจรดึงกระแสจากแหล่งสัญญาณมากเกินไป (Loading Effect)<br>
                - ไม่ควรเลือก $R_f$ สูงเกินไป (เช่น เกิน $1\\text{ M}\\Omega$) เพราะสัญญาณรบกวน (Thermal Noise) และกระแสไบแอส $I_B$ ภายในจะเริ่มสร้างความผิดเพี้ยนของแรงดันออฟเซต
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'non-inverting': {
        title: 'วงจรขยายแบบไม่กลับเฟสและบัฟเฟอร์ (Non-Inverting Amplifier & Voltage Follower)',
        desc: `<b>วงจรขยายแบบไม่กลับเฟส (Non-Inverting Amplifier)</b> ป้อนสัญญาณอินพุตเข้าที่ขั้วบวก (+) โดยตรง ทำให้มีความต้านทานอินพุตสูงมหาศาล (<span class="math-badge">Z_{in} \\approx \\infty</span>) และสัญญาณเอาต์พุตที่ได้จะมี <b>เฟสตรงกับอินพุต (0° ไม่มีเครื่องหมายลบ)</b><br><br>
        <b>📐 การวิเคราะห์หาอัตราขยายแรงดัน:</b><br>
        • เครือข่ายตัวต้านทาน $R_1$ และ $R_f$ ทำหน้าที่แบ่งแรงดันเอาต์พุตป้อนกลับมาที่ขั้ว (-): <span class="math-badge">V_- = v_{out} \\times \\left[ \\frac{R_1}{R_1 + R_f} \\right]</span><br>
        • จากกฎ Virtual Short: $V_- = V_+ = v_{in}$ แทนค่าจะได้:<br>
        <span class="math-block">v_{in} = v_{out} \\left[ \\frac{R_1}{R_1 + R_f} \\right] \\implies A_v = \\frac{v_{out}}{v_{in}} = 1 + \\frac{R_f}{R_1}</span>
        อัตราขยายของวงจรไม่กลับเฟสจะมีค่า <b>มากกว่าหรือเท่ากับ 1 เสมอ ($A_v \\ge 1$)</b>`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">💎 วงจรตามแรงดัน (Voltage Follower / Unity-Gain Buffer)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                เมื่อเราเลือกค่า <span class="math-badge">R_f = 0\\,\\Omega</span> (ต่อสายไฟตรงจากเอาต์พุตมาที่ขา -) และ <span class="math-badge">R_1 = \\infty</span> (เปิดวงจรไม่ต่อลงกราวด์) จะได้อัตราขยาย:<br>
                <span class="math-block">A_v = 1 + \\frac{0}{\\infty} = 1 \\implies v_{out} = v_{in}</span>
                สัญญาณเอาต์พุตจะ <i>"ตาม (Follow)"</i> แรงดันอินพุตอย่างแม่นยำ 100% โดยไม่กลับเฟส
            </p>

            <div style="background: rgba(74, 222, 128, 0.08); border-left: 4px solid var(--green); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                🎯 <b>ประโยชน์มหาศาลในการแก้ปัญหาการสูญเสียแรงดัน (Loading Effect):</b><br>
                เมื่อแหล่งกำเนิดสัญญาณมีอิมพีแดนซ์ภายในสูง (เช่น หัววัด pH, ไมโครโฟน Piezo, หรือวงจรแบ่งแรงดันเซนเซอร์) หากต่อเข้ากับโหลดความต้านทานต่ำ $R_L$ แรงดันจะตกลงเกือบหมด<br>
                การคั่นด้วย <b>Voltage Follower</b> ซึ่งมี $Z_{in} \\approx 10^{12}\\,\\Omega$ จะไม่ดึงกระแสจากเซนเซอร์เลย และอาศัย $Z_{out} \\approx 0.01\\,\\Omega$ จ่ายกระแสขับโหลดได้อย่างเต็มพิกัดโดยแรงดันไม่ตกเลยแม้แต่น้อย
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'summing-diff': {
        title: 'วงจรรวมสัญญาณและวงจรหาผลต่าง (Summing & Difference Amplifier)',
        desc: `คุณสมบัติกราวด์เสมือน (Virtual Ground) ของ Op-Amp ทำให้เราสามารถนำสัญญาณไฟฟ้าหลายชุดมารวมกันทางคณิตศาสตร์ได้โดยแต่ละช่องสัญญาณไม่รบกวนซึ่งกันและกัน (Isolation):<br><br>
        1. <b>วงจรรวมสัญญาณ (Summing Amplifier / Audio Mixer):</b><br>
        <span class="math-block">v_{out} = - \\left[ \\frac{R_f}{R_1} v_1 + \\frac{R_f}{R_2} v_2 + \\frac{R_f}{R_3} v_3 \\right]</span>
        หากกำหนด $R_1 = R_2 = R_3 = R$ จะได้ $v_{out} = - \\frac{R_f}{R}(v_1 + v_2 + v_3)$ นำไปประยุกต์ทำ <i>มิกเซอร์ผสมเสียง</i> และวงจรแปลงสัญญาณดิจิทัลเป็นอนาล็อก (DAC - Weighted Adder)<br><br>
        2. <b>วงจรขยายผลต่าง (Difference / Differential Amplifier):</b><br>
        ขยายเฉพาะผลต่างของแรงดันระหว่างขั้วทั้งสอง ($v_2 - v_1$) และตัดทอนแรงดันร่วมทิ้งไป:<br>
        <span class="math-block">v_{out} = \\frac{R_2}{R_1} (v_2 - v_1) \\quad \\left( \\text{เมื่อกำหนดให้อัตราส่วน } \\frac{R_2}{R_1} = \\frac{R_4}{R_3} \\right)</span>`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🛡️ การตัดสัญญาณรบกวนโหมดร่วม (Common-Mode Noise Rejection)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                ในสายส่งสัญญาณอุตสาหกรรม สัญญาณคลื่นวิทยุหรือฮัม 50Hz จากสายส่งไฟบ้านมักจะเหนี่ยวนำเข้ามาบนสายไฟทั้งสองเส้นเท่าๆ กัน เรียกว่า <b>Common-Mode Noise ($v_{noise}$)</b><br>
                เมื่อสัญญาณเข้าสู่ Difference Amplifier:<br>
                • ขั้วบวกได้รับ: $v_2 + v_{noise}$<br>
                • ขั้วลบได้รับ: $v_1 + v_{noise}$<br>
                • ผลลัพธ์เอาต์พุต: $v_{out} = A_d [(v_2 + v_{noise}) - (v_1 + v_{noise})] = A_d (v_2 - v_1)$<br>
                สัญญาณรบกวน $v_{noise}$ จะถูกลบหักล้างหายไปจนหมดสิ้น เหลือเพียงสัญญาณจริงที่ต้องการวัดเท่านั้น
            </p>

            <div style="background: rgba(139, 92, 246, 0.08); border-left: 4px solid var(--accent); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                💎 <b>วงจรขยายเครื่องมือวัด (Instrumentation Amplifier: In-Amp):</b><br>
                เพื่อแก้ข้อจำกัดของวงจร Difference ธรรมดาที่มีความต้านทานอินพุตไม่สูงมาก วิศวกรจึงพัฒนาเป็นวงจร In-Amp (เช่น เบอร์ AD620) โดยใช้ Op-Amp 3 ตัวร่วมกัน เพื่อให้อิมพีแดนซ์อินพุตทั้งสองข้างสูงระดับกิกะโอห์ม และปรับอัตราขยายด้วยตัวต้านทานภายนอกเพียงตัวเดียว ($R_G$)
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'integrator-diff': {
        title: 'วงจรอินทิเกรเตอร์และดิฟเฟอเรนชิเอเตอร์ (Integrator, Differentiator & Waveform Shaping)',
        desc: `เมื่อเปลี่ยนตัวต้านทานป้อนกลับหรืออินพุตให้เป็น <b>ตัวเก็บประจุ (Capacitor: C)</b> Op-Amp จะทำหน้าที่คำนวณทางแคลคูลัสแบบอนาล็อกในโดเมนเวลาทันที:<br><br>
        1. <b>วงจรอินทิเกรเตอร์ (Op-Amp Integrator):</b><br>
        ใช้ตัวต้านทาน $R$ ที่อินพุต และตัวเก็บประจุ $C$ ในสายป้อนกลับ ได้สมการแรงดันเอาต์พุต:<br>
        <span class="math-block">v_{out}(t) = - \\frac{1}{R C} \\int_0^t v_{in}(\\tau) d\\tau + V_C(0)</span>
        • <b>Waveform Shaping:</b> เปลี่ยนคลื่นสี่เหลี่ยม (Square Wave) เป็น <b>คลื่นสามเหลี่ยม (Triangle Wave)</b><br>
        • ทำหน้าที่เป็นฟิลเตอร์กรองความถี่ต่ำ (Active Low-Pass Filter: LPF)<br><br>
        2. <b>วงจรดิฟเฟอเรนชิเอเตอร์ (Op-Amp Differentiator):</b><br>
        ใช้ตัวเก็บประจุ $C$ ที่อินพุต และตัวต้านทาน $R$ ในสายป้อนกลับ ได้สมการแรงดันเอาต์พุต:<br>
        <span class="math-block">v_{out}(t) = - R C \\frac{d v_{in}(t)}{dt}</span>
        • <b>Waveform Shaping:</b> เปลี่ยนคลื่นสามเหลี่ยมเป็นคลื่นสี่เหลี่ยม หรือสร้างพัลส์เข็มแหลมตรวจจับขอบสัญญาณ (Edge Detector)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔬 ปัญหาในทางปฏิบัติและการแก้เสถียรภาพ</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #38bdf8; padding: 0.9rem; border-radius: 6px; line-height: 1.8;">
                    <b style="color: #38bdf8;">ปัญหาของ Integrator:</b><br>
                    ที่ความถี่ 0 Hz (DC) ตัวเก็บประจุ $C$ มีค่า $X_C = \\infty$ ทำให้ Op-Amp ทำงานแบบ Open-Loop แรงดัน Offset DC เล็กน้อยจะถูกอินทิเกรตสะสมจนเอาต์พุตชนรางไฟเลี้ยงอิ่มตัวค้าง<br>
                    ➔ <b>วิธีแก้:</b> ต่อตัวต้านทาน $R_f$ ขนาดใหญ่ (~100k - 1M) ขนานคร่อม $C$ เพื่อจำกัดอัตราขยาย DC
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #f43f5e; padding: 0.9rem; border-radius: 6px; line-height: 1.8;">
                    <b style="color: #f43f5e;">ปัญหาของ Differentiator:</b><br>
                    ที่ความถี่สูง $X_C \\rightarrow 0$ อัตราขยาย $A_v \\propto f$ พุ่งสูงมหาศาล ทำให้ขยายสัญญาณรบกวนความถี่สูง (High-Freq Noise) จนวงจรแกว่งสั่น (Oscillate)<br>
                    ➔ <b>วิธีแก้:</b> ต่อตัวต้านทาน $R_s$ ค่าเล็กๆ อนุกรมกับ $C$ ที่ทางเข้า เพื่อจำกัดอัตราขยายความถี่สูง
                </div>
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'comparator-schmitt': {
        title: 'วงจรเปรียบเทียบแรงดันและชมิตต์ทริกเกอร์ (Comparator & Schmitt Trigger with Hysteresis)',
        desc: `1. <b>วงจรเปรียบเทียบแรงดัน (Voltage Comparator):</b><br>
        ทำงานในสภาวะวงรอบเปิด (Open-Loop) ปราศจากการป้อนกลับ เพื่อเปรียบเทียบแรงดันระหว่าง $v_{in}$ กับแรงดันอ้างอิง $V_{ref}$:<br>
        • หาก <span class="math-badge">V_+ > V_-</span> เอาต์พุตจะถูกดึงขึ้นชนรางบวกทันที: <span class="math-badge">v_{out} = + V_{sat}</span> (Logic '1')<br>
        • หาก <span class="math-badge">V_+ < V_-</span> เอาต์พุตจะถูกดึงลงชนรางลบทันที: <span class="math-badge">v_{out} = - V_{sat}</span> (Logic '0')<br><br>
        ⚠️ <b>ปัญหาใหญ่:</b> หากสัญญาณอินพุตมี <i>สัญญาณรบกวน (Noise)</i> ขณะที่คลื่นกำลังข้ามระดับ $V_{ref}$ เอาต์พุตจะเกิดการสั่นกระตุกรัวๆ (Chattering) นับร้อยครั้ง<br><br>
        2. <b>ชมิตต์ทริกเกอร์ (Schmitt Trigger):</b><br>
        แก้ปัญหาโดยใช้ <b>การป้อนกลับแบบบวก (Positive Feedback)</b> สร้างจุดตัดแรงดัน 2 ระดับ คือ <b>จุดตัดบน (UTP)</b> และ <b>จุดตัดล่าง (LTP)</b> เกิดเป็นแถบความกว้างฮิสเทอรีซิส (<span class="math-badge">V_H = UTP - LTP</span>) ช่วยกำจัดสัญญาณกระตุกได้อย่างสมบูรณ์แบบ`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📐 การคำนวณจุดทริกเกอร์ UTP และ LTP ของ Schmitt Trigger</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                สำหรับวงจร Non-Inverting Schmitt Trigger ที่มีตัวต้านทาน $R_1$ และตัวต้านทานป้อนกลับบวก $R_2$:<br>
                • <b>Upper Trigger Point (จุดสวิตช์ขึ้น):</b> <span class="math-badge">UTP = + V_{sat} \\times \\frac{R_1}{R_2}</span><br>
                • <b>Lower Trigger Point (จุดสวิตช์ลง):</b> <span class="math-badge">LTP = - V_{sat} \\times \\frac{R_1}{R_2}</span><br>
                • <b>Hysteresis Voltage Window:</b> <span class="math-badge">V_H = UTP - LTP = 2 V_{sat} \\left( \\frac{R_1}{R_2} \\right)</span>
            </p>

            <div style="background: rgba(74, 222, 128, 0.08); border-left: 4px solid var(--green); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                🛡️ <b>ภูมิคุ้มกันสัญญาณรบกวน (Noise Immunity):</b><br>
                เมื่อสัญญาณอินพุตวิ่งขึ้นทะลุ UTP เอาต์พุตจะสวิตช์เป็น $+V_{sat}$ และจะ <b>"ไม่ยอมสลับกลับ"</b> แม้จะมี Noise รบกวนตกลงมา ตราบใดที่สัญญาณยังไม่ตกลงไปต่ำกว่าจุด LTP ทำให้สัญญาณดิจิทัลที่ได้สะอาด เรียบคม และเชื่อถือได้สูงสุดในระบบไมโครคอนโทรลเลอร์
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'quiz': {
        title: '📝 แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ (Quiz & Certification)',
        desc: 'แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ เรื่อง Op-Amp และการประยุกต์ใช้งาน (สุ่ม 10 ข้อจากคลังข้อสอบ 30 ข้อ สลับตัวเลือกทุกข้อ พร้อมระบบออกใบประกาศนียบัตรดิจิทัลมาตรฐาน)',
        extra: `
            <div id="quiz-container" style="background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            </div>
        `,
        controls: false,
        svg: ''
    }
};

let currentTopic = 'ideal-basics';

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    loadTopic('ideal-basics');
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '<div class="sidebar-label">📚 หัวข้อบทเรียน Op-Amp</div>';
    Object.keys(topics).forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.id = `nav-${key}`;
        btn.innerText = topics[key].title;
        btn.addEventListener('click', () => loadTopic(key));
        sidebar.appendChild(btn);
    });
}

function loadTopic(topicKey) {
    currentTopic = topicKey;
    const data = topics[topicKey];
    if (!data) return;

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`nav-${topicKey}`);
    if (activeBtn) activeBtn.classList.add('active');

    document.getElementById('topic-title').innerText = data.title;
    document.getElementById('topic-desc').innerHTML = data.desc;
    document.getElementById('topic-extra').innerHTML = data.extra;
    renderMath();

    const simCard = document.getElementById('sim-card');
    if (topicKey === 'quiz') {
        if (simCard) simCard.style.display = 'none';
        renderQuiz();
    } else {
        if (simCard) simCard.style.display = 'block';
    }

    if (window.activeSim && typeof window.activeSim.stop === 'function') {
        window.activeSim.stop();
        window.activeSim = null;
    }

    const controlsContainer = document.getElementById('sim-controls');
    const canvasContainer = document.getElementById('canvas-container');
    if (controlsContainer) {
        controlsContainer.innerHTML = '';
        controlsContainer.style.display = data.controls ? 'flex' : 'none';
    }

    // Call topic-specific simulators
    if (topicKey === 'ideal-basics') {
        initIdealBasicsSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'inverting') {
        initInvertingSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'non-inverting') {
        initNonInvertingSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'summing-diff') {
        initSummingDiffSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'integrator-diff') {
        initIntegratorDiffSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'comparator-schmitt') {
        initComparatorSchmittSimulator(canvasContainer, controlsContainer);
    }
}

function renderQuiz() {
    if (typeof QuizEngine !== 'undefined' && typeof opampQuizQuestions !== 'undefined') {
        QuizEngine.init({
            containerId: 'quiz-container',
            lessonTitle: 'ออปแอมป์และการประยุกต์ใช้งาน (Operational Amplifier: Op-Amp)',
            questionBank: opampQuizQuestions,
            count: 10
        });
    }
}

let katexRetryCount = 0;
function renderMath() {
    if (typeof katex === 'undefined') {
        if (katexRetryCount < 15) {
            katexRetryCount++;
            setTimeout(renderMath, 120);
        }
        return;
    }

    // Render all .math-badge spans as inline math
    document.querySelectorAll('.math-badge').forEach(el => {
        if (!el.dataset.katexDone) {
            const raw = el.textContent || el.innerText || '';
            try {
                katex.render(raw.trim(), el, { throwOnError: false, displayMode: false });
                el.dataset.katexDone = 'true';
            } catch (err) {
                // Keep raw fallback
            }
        }
    });

    // Render all .math-block divs/spans as display math
    document.querySelectorAll('.math-block').forEach(el => {
        if (!el.dataset.katexDone) {
            const raw = el.textContent || el.innerText || '';
            try {
                katex.render(raw.trim(), el, { throwOnError: false, displayMode: true });
                el.dataset.katexDone = 'true';
            } catch (err) {
                // Keep raw fallback
            }
        }
    });

    // Auto-render any $...$ and $$...$$ inside desc and extra
    if (typeof renderMathInElement === 'function') {
        const descEl = document.getElementById('topic-desc');
        const extraEl = document.getElementById('topic-extra');
        const opts = {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false,
            ignoredClasses: ['math-badge', 'math-block', 'katex']
        };
        if (descEl) renderMathInElement(descEl, opts);
        if (extraEl) renderMathInElement(extraEl, opts);
    }
}

window.addEventListener('load', renderMath);

/* =========================================================================
   HELPER: SVG IEEE STANDARD OP-AMP TRIANGLE COMPONENT
   ========================================================================= */
function drawIEEE_OpAmp(x, y, scale = 1.0, options = {}) {
    // Standard IEEE 315 Operational Amplifier Triangle
    const showRails = options.showRails !== false;
    const invTop = options.invTop !== false; // if true, (-) is at top, (+) at bottom
    const label = options.label || 'Op-Amp';

    const topSymbol = invTop ? '−' : '+';
    const btmSymbol = invTop ? '+' : '−';
    const topColor = invTop ? '#f43f5e' : '#38bdf8';
    const btmColor = invTop ? '#38bdf8' : '#f43f5e';

    return `
        <g transform="translate(${x}, ${y}) scale(${scale})">
            <!-- Main Triangle Body -->
            <polygon points="-50,-45 50,0 -50,45" fill="#0f1b33" stroke="#ec4899" stroke-width="2.5" stroke-linejoin="round"/>
            
            <!-- Inverting & Non-inverting Labels inside Triangle -->
            <text x="-40" y="-18" fill="${topColor}" font-size="20" font-weight="bold" text-anchor="middle">${topSymbol}</text>
            <text x="-40" y="26" fill="${btmColor}" font-size="18" font-weight="bold" text-anchor="middle">${btmSymbol}</text>

            <!-- Lead Terminal Dots & Extensions -->
            <!-- Top Input Pin -->
            <line x1="-70" y1="-22" x2="-50" y2="-22" stroke="#cbd5e1" stroke-width="2.5"/>
            <circle cx="-70" cy="-22" r="3.5" fill="${topColor}"/>

            <!-- Bottom Input Pin -->
            <line x1="-70" y1="22" x2="-50" y2="22" stroke="#cbd5e1" stroke-width="2.5"/>
            <circle cx="-70" cy="22" r="3.5" fill="${btmColor}"/>

            <!-- Output Pin -->
            <line x1="50" y1="0" x2="75" y2="0" stroke="#cbd5e1" stroke-width="2.5"/>
            <circle cx="75" cy="0" r="3.5" fill="#4ade80"/>

            <!-- Power Supply Rails (Optional) -->
            ${showRails ? `
                <!-- +VCC Pin (Top) -->
                <line x1="0" y1="-23" x2="0" y2="-45" stroke="#f43f5e" stroke-width="2"/>
                <circle cx="0" cy="-45" r="3" fill="#f43f5e"/>
                <text x="0" y="-50" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">+V_CC</text>

                <!-- -VEE Pin (Bottom) -->
                <line x1="0" y1="23" x2="0" y2="45" stroke="#38bdf8" stroke-width="2"/>
                <circle cx="0" cy="45" r="3" fill="#38bdf8"/>
                <text x="0" y="58" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">-V_EE</text>
            ` : ''}

            <text x="-15" y="4" fill="#94a3b8" font-size="10" font-weight="bold">${label}</text>
        </g>
    `;
}

/* =========================================================================
   1. IDEAL BASICS SIMULATOR: Open-Loop vs Negative Feedback & Virtual Short
   ========================================================================= */
function initIdealBasicsSimulator(canvas, controls) {
    let mode = 'closed'; // 'closed' (Negative Feedback) vs 'open' (Open-Loop)
    let Vplus = 2.0;    // Volts (0 to 5)

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-ib-closed">⚡ Negative Feedback (ย่านขยายเชิงเส้น)</button>
            <button class="toggle-pill" id="btn-ib-open">⚡ Open-Loop (วงรอบเปิด - ชนรางอิ่มตัว)</button>
        </div>
        <div class="ctrl-group">
            <label>แรงดันขา Non-inverting (V₊):</label>
            <input type="range" id="sl-ib-vp" min="-5.0" max="5.0" step="0.2" value="${Vplus}">
            <span class="val-badge" id="val-ib-vp">${Vplus.toFixed(1)} V</span>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            💎 สังเกต<b>กฎเหล็ก Virtual Short</b>: ขา $V_-$ จะถูกดึงให้เท่ากับ $V_+$ เสมอ
        </div>
    `;

    const btnClosed = document.getElementById('btn-ib-closed');
    const btnOpen = document.getElementById('btn-ib-open');
    const slVp = document.getElementById('sl-ib-vp');

    btnClosed.addEventListener('click', () => {
        mode = 'closed';
        btnClosed.classList.add('active');
        btnOpen.classList.remove('active');
        render();
    });

    btnOpen.addEventListener('click', () => {
        mode = 'open';
        btnOpen.classList.add('active');
        btnClosed.classList.remove('active');
        render();
    });

    slVp.addEventListener('input', e => {
        Vplus = parseFloat(e.target.value);
        document.getElementById('val-ib-vp').innerText = `${Vplus.toFixed(1)} V`;
        render();
    });

    function render() {
        const isClosed = mode === 'closed';
        let Vminus = 0;
        let Vout = 0;
        let vDiff_uV = 0;
        let stateText = '';
        let stateColor = '#4ade80';

        if (isClosed) {
            // Negative feedback buffer: V- = Vout = V+
            Vminus = Vplus;
            Vout = Vplus;
            vDiff_uV = (Vout / 200000) * 1e6; // tiny microvolts needed in reality
            stateText = 'Linear Active Region (V₊ ≈ V₋ เสมือน Short กัน)';
            stateColor = '#4ade80';
        } else {
            // Open loop: V- grounded (0V)
            Vminus = 0.0;
            const diff = Vplus - Vminus;
            vDiff_uV = diff * 1e6;
            if (diff > 0.0001) {
                Vout = 13.5; // +Vsat
                stateText = 'Positive Saturation (+V_sat ชนรางบวก)';
                stateColor = '#f43f5e';
            } else if (diff < -0.0001) {
                Vout = -13.5; // -Vsat
                stateText = 'Negative Saturation (-V_sat ชนรางลบ)';
                stateColor = '#38bdf8';
            } else {
                Vout = 0.0;
                stateText = 'Zero Crossing Threshold';
                stateColor = '#fbbf24';
            }
        }

        canvas.innerHTML = `
            <svg viewBox="0 0 880 400" id="anim-svg">
                <!-- TOP STATUS HUD -->
                <rect x="20" y="10" width="840" height="34" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#223554"/>
                <text x="35" y="32" fill="${stateColor}" font-size="13" font-weight="700">🔍 โหมด: ${stateText}</text>
                <text x="540" y="32" fill="#cbd5e1" font-size="12">ผลต่างแรงดัน V_d = (V₊ - V₋) = <tspan fill="#f472b6" font-weight="bold">${isClosed ? '≈ 0.00 µV' : (vDiff_uV/1e3).toFixed(1) + ' mV'}</tspan></text>

                <!-- SECTION 1: SCHEMATIC (Left) -->
                <rect x="20" y="55" width="480" height="325" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                <text x="260" y="80" fill="#cbd5e1" font-size="13.5" font-weight="700" text-anchor="middle">
                    ${isClosed ? 'วงจร Negative Feedback (กฎ Virtual Short สมบูรณ์)' : 'วงจร Open-Loop (ปราศจากป้อนกลับ - ชนรางอิ่มตัว)'}
                </text>

                <!-- Op-Amp Symbol in Center of Left Box -->
                ${drawIEEE_OpAmp(260, 185, 1.25, { invTop: true, showRails: true })}

                <!-- Input V+ Source (Connected to (+) terminal at y = 185 + 27.5 = 212.5) -->
                <line x1="60" y1="212.5" x2="172" y2="212.5" stroke="#38bdf8" stroke-width="2.5"/>
                <circle cx="60" cy="212.5" r="4" fill="#38bdf8"/>
                <rect x="40" y="225" width="75" height="30" rx="6" fill="#1e1b4b" stroke="#38bdf8"/>
                <text x="77" y="245" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">V₊ = ${Vplus.toFixed(1)}V</text>

                <!-- Inverting Terminal (-) at y = 185 - 27.5 = 157.5 -->
                ${isClosed ? `
                    <!-- Feedback loop wire from Output (353.75, 185) to (-) (172, 157.5) -->
                    <line x1="353.75" y1="185" x2="390" y2="185" stroke="#4ade80" stroke-width="2.5"/>
                    <line x1="390" y1="185" x2="390" y2="110" stroke="#4ade80" stroke-width="2.5"/>
                    <line x1="390" y1="110" x2="172" y2="110" stroke="#4ade80" stroke-width="2.5"/>
                    <line x1="172" y1="110" x2="172" y2="157.5" stroke="#4ade80" stroke-width="2.5"/>
                    <circle cx="353.75" cy="185" r="4" fill="#4ade80"/>
                    <text x="280" y="103" fill="#4ade80" font-size="11" font-weight="bold">สายป้อนกลับลบ (Negative Feedback Path)</text>
                    
                    <!-- Virtual Short Sparkle between terminals -->
                    <line x1="172" y1="157.5" x2="172" y2="212.5" stroke="#f472b6" stroke-width="2" stroke-dasharray="3,3"/>
                    <text x="182" y="188" fill="#f472b6" font-size="10" font-weight="bold">Virtual Short</text>
                ` : `
                    <!-- Open Loop: (-) grounded -->
                    <line x1="172" y1="157.5" x2="120" y2="157.5" stroke="#cbd5e1" stroke-width="2.5"/>
                    <line x1="120" y1="157.5" x2="120" y2="185" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="105" y1="185" x2="135" y2="185" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="110" y1="190" x2="130" y2="190" stroke="#cbd5e1" stroke-width="1.5"/>
                    <text x="120" y="148" fill="#94a3b8" font-size="10" text-anchor="middle">GND (0V)</text>
                `}

                <!-- Output Terminal (Right side of OpAmp) -->
                <line x1="353.75" y1="185" x2="440" y2="185" stroke="#cbd5e1" stroke-width="2.5"/>
                <circle cx="440" cy="185" r="5" fill="#4ade80"/>
                <text x="450" y="190" fill="#4ade80" font-size="12" font-weight="bold">v_out</text>

                <!-- Readout Badges inside Schematic -->
                <rect x="35" y="295" width="450" height="70" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
                <text x="50" y="318" fill="#cbd5e1" font-size="12">แรงดันขั้วบวก: V₊ = <tspan fill="#38bdf8" font-weight="bold">${Vplus.toFixed(2)} V</tspan>  |  ขั้วลบ: V₋ = <tspan fill="#f472b6" font-weight="bold">${Vminus.toFixed(2)} V</tspan></text>
                <text x="50" y="338" fill="#cbd5e1" font-size="12">แรงดันเอาต์พุต: v_out = <tspan fill="#4ade80" font-weight="bold">${Vout.toFixed(2)} V</tspan>  (รางไฟเลี้ยง ±15V, V_sat = ±13.5V)</text>
                <text x="50" y="356" fill="${stateColor}" font-size="11.5" font-weight="bold">ผลลัพธ์: ${isClosed ? 'ศักย์ไฟฟ้า V₋ ถูกดึงให้เท่ากับ V₊ เสมอตามกฎข้อ 2' : 'ผลต่างแรงดันเกิน 0.1mV ขับเอาต์พุตชนขอบอิ่มตัวทันที'}</text>

                <!-- SECTION 2: TRANSFER CHARACTERISTIC GRAPH (Right) -->
                <rect x="520" y="55" width="340" height="325" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                <text x="690" y="80" fill="#cbd5e1" font-size="13.5" font-weight="700" text-anchor="middle">กราฟคุณลักษณะถ่ายโอน (V_out vs V_in)</text>

                <!-- Axes Center (690, 215) -->
                <line x1="550" y1="215" x2="830" y2="215" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="825" y="230" fill="#94a3b8" font-size="10">V_in (V)</text>
                <line x1="690" y1="320" x2="690" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="670" y="105" fill="#94a3b8" font-size="10">V_out</text>

                <!-- Saturation Rails (Top: y=130, Bottom: y=300) -->
                <line x1="550" y1="135" x2="830" y2="135" stroke="#f43f5e" stroke-dasharray="3,3"/>
                <text x="555" y="130" fill="#f87171" font-size="9.5">+V_sat (+13.5V)</text>
                <line x1="550" y1="295" x2="830" y2="295" stroke="#38bdf8" stroke-dasharray="3,3"/>
                <text x="555" y="308" fill="#38bdf8" font-size="9.5">-V_sat (-13.5V)</text>

                ${isClosed ? `
                    <!-- Linear Transfer Line: slope = 1 (45 deg) -->
                    <line x1="590" y1="315" x2="790" y2="115" stroke="#4ade80" stroke-width="2.5"/>
                    <text x="760" y="160" fill="#4ade80" font-size="11" font-weight="bold">ความชัน A_v = 1</text>
                ` : `
                    <!-- Open Loop: Almost vertical step function at Vd = 0 -->
                    <line x1="550" y1="295" x2="689" y2="295" stroke="#f472b6" stroke-width="2.5"/>
                    <line x1="689" y1="295" x2="691" y2="135" stroke="#f472b6" stroke-width="3"/>
                    <line x1="691" y1="135" x2="830" y2="135" stroke="#f472b6" stroke-width="2.5"/>
                    <text x="715" y="180" fill="#f472b6" font-size="11" font-weight="bold">ความชัน A_OL = 200,000</text>
                `}

                <!-- Live Operating Point Dot on Graph -->
                ${(() => {
                    const plotX = 690 + (Vplus / 5.0) * 110;
                    const plotY = 215 - (Vout / 13.5) * 80;
                    return `
                        <circle cx="${plotX}" cy="${plotY}" r="7" fill="${stateColor}">
                            <animate attributeName="r" values="6;9;6" dur="1.2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="${plotX}" cy="${plotY}" r="3" fill="#ffffff"/>
                        <rect x="${Math.min(710, plotX + 10)}" y="${Math.max(90, plotY - 25)}" width="115" height="26" rx="4" fill="rgba(15,23,42,0.95)" stroke="${stateColor}"/>
                        <text x="${Math.min(710, plotX + 10) + 57}" y="${Math.max(90, plotY - 25) + 17}" fill="${stateColor}" font-size="11" font-weight="bold" text-anchor="middle">(${Vplus.toFixed(1)}V, ${Vout.toFixed(1)}V)</text>
                    `;
                })()}
            </svg>
        `;
    }

    render();
}

/* =========================================================================
   2. INVERTING AMPLIFIER SIMULATOR: Real-Time Dual Oscilloscope & Clipping
   ========================================================================= */
function initInvertingSimulator(canvas, controls) {
    let Rin = 10;   // kOhm (1 to 50)
    let Rf = 47;    // kOhm (5 to 150)
    let VinPeak = 1.0; // Volts (0.1 to 4.0)
    let animId = null;
    let timePhase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <label>R_in:</label>
            <input type="range" id="sl-inv-rin" min="2" max="40" step="1" value="${Rin}">
            <span class="val-badge" id="val-inv-rin">${Rin} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>R_f:</label>
            <input type="range" id="sl-inv-rf" min="5" max="150" step="5" value="${Rf}">
            <span class="val-badge" id="val-inv-rf">${Rf} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>แอมพลิจูดอินพุต (v_in):</label>
            <input type="range" id="sl-inv-vin" min="0.2" max="4.0" step="0.2" value="${VinPeak}">
            <span class="val-badge" id="val-inv-vin">${VinPeak.toFixed(1)} V</span>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            ⚡ เอาต์พุต (สีเขียว) <b>กลับเฟส 180°</b> และจะตัดยอดคลื่นเมื่อชนราง ±13.5V
        </div>
    `;

    const slRin = document.getElementById('sl-inv-rin');
    const slRf = document.getElementById('sl-inv-rf');
    const slVin = document.getElementById('sl-inv-vin');

    slRin.addEventListener('input', e => {
        Rin = parseFloat(e.target.value);
        document.getElementById('val-inv-rin').innerText = `${Rin} kΩ`;
    });

    slRf.addEventListener('input', e => {
        Rf = parseFloat(e.target.value);
        document.getElementById('val-inv-rf').innerText = `${Rf} kΩ`;
    });

    slVin.addEventListener('input', e => {
        VinPeak = parseFloat(e.target.value);
        document.getElementById('val-inv-vin').innerText = `${VinPeak.toFixed(1)} V`;
    });

    canvas.innerHTML = `
        <svg viewBox="0 0 880 410" id="anim-svg">
            <!-- SECTION 1: INVERTING SCHEMATIC (Left) -->
            <rect x="20" y="20" width="440" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
            <text x="240" y="45" fill="#f472b6" font-size="14" font-weight="700" text-anchor="middle">วงจรขยายแบบกลับเฟส (Inverting Amplifier)</text>

            <!-- Op-Amp in Left Box (Center at x=280, y=200) -->
            ${drawIEEE_OpAmp(280, 200, 1.25, { invTop: true, showRails: true })}

            <!-- Input branch: AC Source -> Rin -> (-) Pin (x=192.5, y=172.5) -->
            <circle cx="55" cy="172.5" r="14" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
            <path d="M 47 172.5 Q 51 166.5 55 172.5 T 63 172.5" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
            <text x="55" y="198" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">v_in (AC)</text>
            <line x1="69" y1="172.5" x2="105" y2="172.5" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Resistor Rin -->
            <rect x="105" y="163" width="36" height="18" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text id="sch-rin-txt" x="123" y="156" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">R_in</text>
            <line x1="141" y1="172.5" x2="192.5" y2="172.5" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Virtual Ground Node at Inverting Pin -->
            <circle cx="192.5" cy="172.5" r="4" fill="#f43f5e"/>
            <text x="180" y="160" fill="#f472b6" font-size="9.5" font-weight="bold">Virtual Ground (0V)</text>

            <!-- Non-Inverting (+) Pin at (192.5, 227.5) connected to real Ground -->
            <line x1="192.5" y1="227.5" x2="140" y2="227.5" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="140" y1="227.5" x2="140" y2="250" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="125" y1="250" x2="155" y2="250" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="130" y1="255" x2="150" y2="255" stroke="#cbd5e1" stroke-width="1.5"/>

            <!-- Feedback Resistor Rf Loop: (-) node up to y=105 over to Output (x=373.75) -->
            <line x1="192.5" y1="172.5" x2="192.5" y2="105" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="192.5" y1="105" x2="255" y2="105" stroke="#cbd5e1" stroke-width="2"/>
            <!-- Rf -->
            <rect x="255" y="96" width="40" height="18" fill="#1e293b" stroke="#f472b6" stroke-width="1.5"/>
            <text id="sch-rf-txt" x="275" y="90" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">R_f</text>
            <line x1="295" y1="105" x2="390" y2="105" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="390" y1="105" x2="390" y2="200" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="373.75" y1="200" x2="425" y2="200" stroke="#cbd5e1" stroke-width="2.5"/>
            <circle cx="373.75" cy="200" r="4" fill="#4ade80"/>
            <circle cx="425" cy="200" r="4.5" fill="#4ade80"/>
            <text x="430" y="218" fill="#4ade80" font-size="11" font-weight="bold">v_out</text>

            <!-- Formula & Values Box -->
            <rect x="35" y="305" width="410" height="70" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
            <text id="inv-gain-txt" x="45" y="327" fill="#cbd5e1" font-size="12">อัตราขยาย: A_v = - (R_f / R_in) = -4.7x</text>
            <text id="inv-zin-txt" x="45" y="347" fill="#cbd5e1" font-size="11.5">Z_in = R_in = 10 kΩ  |  Z_out ≈ 0 Ω  |  เฟส: กลับ 180°</text>
            <text id="inv-clip-txt" x="45" y="365" fill="#4ade80" font-size="11.5" font-weight="bold">สถานะรูปคลื่น: ขยายเชิงเส้นสมบูรณ์ (No Distortion)</text>

            <!-- SECTION 2: DUAL OSCILLOSCOPE (Right) -->
            <rect x="475" y="20" width="385" height="370" rx="12" fill="#040812" stroke="#223554" stroke-width="1.5"/>
            <text x="667" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">ออสซิลโลสโคปเปรียบเทียบเฟสอินพุต/เอาต์พุต</text>

            <!-- CH1: Input (Cyan) -->
            <rect x="490" y="60" width="355" height="135" rx="6" fill="#02050c" stroke="#1e293b"/>
            <line x1="490" y1="127" x2="845" y2="127" stroke="#1e293b" stroke-dasharray="2,2"/>
            <path id="inv-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
            <text x="505" y="80" fill="#38bdf8" font-size="11.5" font-weight="bold">CH1: v_in (Input Signal)</text>
            <text id="inv-vin-vpp" x="830" y="80" fill="#38bdf8" font-size="11" text-anchor="end">V_p: 1.0 V</text>

            <!-- CH2: Output (Lime Green, Inverted 180° with Clipping) -->
            <rect x="490" y="210" width="355" height="165" rx="6" fill="#02050c" stroke="#1e293b"/>
            <line x1="490" y1="292" x2="845" y2="292" stroke="#1e293b" stroke-dasharray="2,2"/>
            <!-- Saturation limit rails -->
            <line x1="490" y1="232" x2="845" y2="232" stroke="#f43f5e" stroke-dasharray="3,3"/>
            <text x="835" y="228" fill="#f87171" font-size="9" text-anchor="end">+V_sat (+13.5V)</text>
            <line x1="490" y1="352" x2="845" y2="352" stroke="#f43f5e" stroke-dasharray="3,3"/>
            <text x="835" y="365" fill="#f87171" font-size="9" text-anchor="end">-V_sat (-13.5V)</text>

            <path id="inv-trace-vout" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>
            <text x="505" y="230" fill="#4ade80" font-size="11.5" font-weight="bold">CH2: v_out (Inverted 180°)</text>
            <text id="inv-vout-vpp" x="720" y="230" fill="#4ade80" font-size="11" text-anchor="end">V_p: 4.7 V</text>
        </svg>
    `;

    const trVin = document.getElementById('inv-trace-vin');
    const trVout = document.getElementById('inv-trace-vout');
    const rinTxt = document.getElementById('sch-rin-txt');
    const rfTxt = document.getElementById('sch-rf-txt');
    const gainTxt = document.getElementById('inv-gain-txt');
    const zinTxt = document.getElementById('inv-zin-txt');
    const clipTxt = document.getElementById('inv-clip-txt');
    const vinVpp = document.getElementById('inv-vin-vpp');
    const voutVpp = document.getElementById('inv-vout-vpp');

    let isRunning = true;

    function animate() {
        if (!isRunning) return;
        timePhase += 0.045;

        const Av = - (Rf / Rin);
        const idealVoutPeak = Math.abs(Av) * VinPeak;
        const Vsat = 13.5;
        const isClipped = idealVoutPeak > Vsat;

        if (rinTxt) rinTxt.innerText = `R_in=${Rin}k`;
        if (rfTxt) rfTxt.innerText = `R_f=${Rf}k`;
        if (gainTxt) gainTxt.innerText = `อัตราขยาย: A_v = - (R_f / R_in) = ${Av.toFixed(2)}x (กลับเฟส 180°)`;
        if (zinTxt) zinTxt.innerText = `Z_in = R_in = ${Rin} kΩ  |  Z_out ≈ 0 Ω  |  เฟส: 180°`;
        if (vinVpp) vinVpp.innerText = `V_p: ${VinPeak.toFixed(1)} V`;
        if (voutVpp) voutVpp.innerText = `V_p: ${Math.min(Vsat, idealVoutPeak).toFixed(1)} V`;

        if (clipTxt) {
            if (isClipped) {
                clipTxt.innerHTML = `<tspan fill="#f87171" font-weight="bold">⚠️ เกิด Saturation Clipping! สัญญาณถูกตัดยอดที่ ±13.5V</tspan>`;
            } else {
                clipTxt.innerHTML = `<tspan fill="#4ade80" font-weight="bold">สถานะรูปคลื่น: ขยายเชิงเส้นสมบูรณ์ (Linear Undistorted)</tspan>`;
            }
        }

        const w = 355;
        const x0 = 490;
        const y0_in = 127;
        const y0_out = 292;

        let dIn = '';
        let dOut = '';

        for (let i = 0; i <= w; i += 3) {
            const ang = (i / w) * 4 * Math.PI + timePhase;
            const sinVal = Math.sin(ang);

            // Input wave
            const yIn = y0_in - sinVal * (VinPeak * 11);

            // Output wave: Inverted (Av is negative, so sign flips -> plus sinVal)
            let outOffset = sinVal * (idealVoutPeak * 4.4);
            // Clamp to +/- 60 px (representing +/- 13.5V rail)
            const maxPixel = 58;
            if (outOffset > maxPixel) outOffset = maxPixel;
            if (outOffset < -maxPixel) outOffset = -maxPixel;

            const yOut = y0_out + outOffset;

            if (i === 0) {
                dIn = `M ${x0 + i} ${yIn}`;
                dOut = `M ${x0 + i} ${yOut}`;
            } else {
                dIn += ` L ${x0 + i} ${yIn}`;
                dOut += ` L ${x0 + i} ${yOut}`;
            }
        }

        if (trVin) trVin.setAttribute('d', dIn);
        if (trVout) {
            trVout.setAttribute('d', dOut);
            trVout.setAttribute('stroke', isClipped ? '#f87171' : '#4ade80');
        }

        animId = requestAnimationFrame(animate);
    }

    if (window.activeSim && typeof window.activeSim.stop === 'function') {
        window.activeSim.stop();
    }

    animId = requestAnimationFrame(animate);

    window.activeSim = {
        stop: () => {
            isRunning = false;
            if (animId) cancelAnimationFrame(animId);
        }
    };
}

/* =========================================================================
   3. NON-INVERTING & BUFFER SIMULATOR: Loading Effect & Lab
   ========================================================================= */
function initNonInvertingSimulator(canvas, controls) {
    let mode = 'non-inv'; // 'non-inv' vs 'buffer'
    let R1 = 10;   // kOhm
    let Rf = 20;   // kOhm
    let RL = 1.0;  // kOhm (0.05 to 10)
    let VinPeak = 1.0;
    let animId = null;
    let timePhase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-ni-amp">⚡ Non-Inverting Amp (ขยายเฟสตรง)</button>
            <button class="toggle-pill" id="btn-ni-buf">💎 Voltage Follower (Buffer บัฟเฟอร์)</button>
        </div>
        <div class="ctrl-group">
            <label>R₁:</label>
            <input type="range" id="sl-ni-r1" min="2" max="30" step="1" value="${R1}">
            <span class="val-badge" id="val-ni-r1">${R1} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>R_f:</label>
            <input type="range" id="sl-ni-rf" min="0" max="100" step="5" value="${Rf}">
            <span class="val-badge" id="val-ni-rf">${Rf} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>โหลด (R_L):</label>
            <input type="range" id="sl-ni-rl" min="0.05" max="10" step="0.1" value="${RL}">
            <span class="val-badge" id="val-ni-rl">${RL >= 1 ? RL.toFixed(1) + ' kΩ' : (RL*1000).toFixed(0) + ' Ω'}</span>
        </div>
    `;

    const btnAmp = document.getElementById('btn-ni-amp');
    const btnBuf = document.getElementById('btn-ni-buf');
    const slR1 = document.getElementById('sl-ni-r1');
    const slRf = document.getElementById('sl-ni-rf');
    const slRL = document.getElementById('sl-ni-rl');

    btnAmp.addEventListener('click', () => {
        mode = 'non-inv';
        btnAmp.classList.add('active');
        btnBuf.classList.remove('active');
        slRf.disabled = false;
        slR1.disabled = false;
        render();
    });

    btnBuf.addEventListener('click', () => {
        mode = 'buffer';
        btnBuf.classList.add('active');
        btnAmp.classList.remove('active');
        slRf.disabled = true;
        slR1.disabled = true;
        render();
    });

    slR1.addEventListener('input', e => {
        R1 = parseFloat(e.target.value);
        document.getElementById('val-ni-r1').innerText = `${R1} kΩ`;
    });

    slRf.addEventListener('input', e => {
        Rf = parseFloat(e.target.value);
        document.getElementById('val-ni-rf').innerText = `${Rf} kΩ`;
    });

    slRL.addEventListener('input', e => {
        RL = parseFloat(e.target.value);
        document.getElementById('val-ni-rl').innerText = RL >= 1 ? RL.toFixed(1) + ' kΩ' : (RL*1000).toFixed(0) + ' Ω';
    });

    function render() {
        const isBuffer = mode === 'buffer';

        canvas.innerHTML = `
            <svg viewBox="0 0 880 410" id="anim-svg">
                <!-- SECTION 1: SCHEMATIC (Left) -->
                <rect x="20" y="20" width="440" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                <text x="240" y="45" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">
                    ${isBuffer ? 'วงจร Voltage Follower (Unity-Gain Buffer)' : 'วงจร Non-Inverting Amplifier (เฟสตรงกัน 0°)'}
                </text>

                <!-- Op-Amp in Center (x=270, y=195, invTop: true) -->
                ${drawIEEE_OpAmp(270, 195, 1.25, { invTop: true, showRails: true })}

                <!-- Non-Inverting (+) Input: Directly from source (Pin at x=182.5, y=222.5) -->
                <circle cx="55" cy="222.5" r="14" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
                <path d="M 47 222.5 Q 51 216.5 55 222.5 T 63 222.5" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
                <text x="55" y="248" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">v_in (AC)</text>
                <line x1="69" y1="222.5" x2="182.5" y2="222.5" stroke="#38bdf8" stroke-width="2.5"/>
                <circle cx="182.5" cy="222.5" r="3.5" fill="#38bdf8"/>

                <!-- Inverting (-) Pin at (182.5, 167.5) -->
                ${isBuffer ? `
                    <!-- Buffer: Direct wire from output to (-) -->
                    <line x1="182.5" y1="167.5" x2="182.5" y2="105" stroke="#4ade80" stroke-width="2.5"/>
                    <line x1="182.5" y1="105" x2="380" y2="105" stroke="#4ade80" stroke-width="2.5"/>
                    <line x1="380" y1="105" x2="380" y2="195" stroke="#4ade80" stroke-width="2.5"/>
                    <text x="280" y="95" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">สายป้อนกลับตรง R_f = 0 Ω (A_v = 1)</text>
                ` : `
                    <!-- Non-Inv Amp: R1 to Ground, Rf to Output -->
                    <!-- Node at (-) -->
                    <circle cx="182.5" cy="167.5" r="3.5" fill="#f43f5e"/>
                    <!-- R1 down to ground -->
                    <line x1="182.5" y1="167.5" x2="140" y2="167.5" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="140" y1="167.5" x2="140" y2="190" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="131" y="190" width="18" height="34" fill="#1e293b" stroke="#38bdf8"/>
                    <text id="ni-r1-txt" x="120" y="210" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="end">R₁</text>
                    <line x1="140" y1="224" x2="140" y2="245" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="125" y1="245" x2="155" y2="245" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="130" y1="250" x2="150" y2="250" stroke="#cbd5e1" stroke-width="1.5"/>

                    <!-- Rf loop -->
                    <line x1="182.5" y1="167.5" x2="182.5" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="182.5" y1="105" x2="250" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="250" y="96" width="40" height="18" fill="#1e293b" stroke="#f472b6"/>
                    <text id="ni-rf-txt" x="270" y="90" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">R_f</text>
                    <line x1="290" y1="105" x2="380" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="380" y1="105" x2="380" y2="195" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <!-- Output Terminal (363.75, 195) to Load RL -->
                <line x1="363.75" y1="195" x2="415" y2="195" stroke="#4ade80" stroke-width="2.5"/>
                <circle cx="415" cy="195" r="4" fill="#4ade80"/>
                <line x1="415" y1="195" x2="415" y2="225" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="407" y="225" width="16" height="34" fill="#1e293b" stroke="#4ade80"/>
                <text id="ni-rl-txt" x="430" y="245" fill="#4ade80" font-size="10" font-weight="bold">R_L</text>
                <line x1="415" y1="259" x2="415" y2="280" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="400" y1="280" x2="430" y2="280" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Readout Box -->
                <rect x="35" y="305" width="410" height="74" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
                <text id="ni-gain-txt" x="45" y="324" fill="#cbd5e1" font-size="11.5">อัตราขยาย: A_v = 1 + (R_f / R₁) = 3.0x</text>
                <text id="ni-load-txt" x="45" y="343" fill="#cbd5e1" font-size="11">V_load (มี Op-Amp) = 1.00 V  vs  V_direct (ไม่มี Op-Amp) = 0.09 V</text>
                <text id="ni-loading-status" x="45" y="364" fill="#4ade80" font-size="11.5" font-weight="bold">🛡️ Op-Amp ขจัด Loading Effect ได้ 100%! กระแสโหลด I_L = 1.0 mA</text>

                <!-- SECTION 2: OSCILLOSCOPE (Right) -->
                <rect x="475" y="20" width="385" height="370" rx="12" fill="#040812" stroke="#223554" stroke-width="1.5"/>
                <text x="667" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">การเปรียบเทียบสัญญาณ & ขจัด Loading Effect</text>

                <rect x="490" y="60" width="355" height="180" rx="6" fill="#02050c" stroke="#1e293b"/>
                <line x1="490" y1="150" x2="845" y2="150" stroke="#1e293b" stroke-dasharray="2,2"/>
                <path id="ni-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
                <path id="ni-trace-vout" d="" fill="none" stroke="#4ade80" stroke-width="2.4"/>
                <path id="ni-trace-direct" d="" fill="none" stroke="#f87171" stroke-width="1.8" stroke-dasharray="3,2"/>
                <text x="505" y="78" fill="#38bdf8" font-size="10.5" font-weight="bold">● v_in (แหล่งกำเนิด R_s=10kΩ: 1.0 Vpk)</text>
                <text x="505" y="94" fill="#4ade80" font-size="10.5" font-weight="bold">● v_load (ผ่าน Op-Amp: ไม่ตก ยอดคลื่นเต็ม)</text>
                <text x="505" y="110" fill="#f87171" font-size="10.5" font-weight="bold" id="ni-trace-direct-lbl">● v_direct (ต่อตรงไม่ผ่าน Op-Amp: สัญญาณตกยวบ)</text>

                <!-- Specs Card -->
                <rect x="490" y="255" width="355" height="120" rx="8" fill="rgba(15,23,42,0.85)" stroke="#334155"/>
                <text x="505" y="278" fill="#fbbf24" font-size="12" font-weight="bold">🎯 การประยุกต์ใช้งานเด่นของ Non-Inverting & Buffer:</text>
                <text x="505" y="300" fill="#cbd5e1" font-size="11.5">• <b>เชื่อมต่อเซนเซอร์อิมพีแดนซ์สูง:</b> Piezo, pH probe, Thermocouple</text>
                <text x="505" y="322" fill="#cbd5e1" font-size="11.5">• <b>วงจรขับสัญญาณข้ามสายเคเบิลยาว (Line Driver):</b> ป้องกันสัญญาณสูญเสีย</text>
                <text x="505" y="344" fill="#cbd5e1" font-size="11.5">• <b>อินพุตสเตจของเครื่องมือวัด (High-Z Input of DMM & Scope)</b></text>
            </svg>
        `;

        const trVin = document.getElementById('ni-trace-vin');
        const trVout = document.getElementById('ni-trace-vout');
        const trDirect = document.getElementById('ni-trace-direct');
        const directLbl = document.getElementById('ni-trace-direct-lbl');
        const gainTxt = document.getElementById('ni-gain-txt');
        const loadTxt = document.getElementById('ni-load-txt');
        const loadStatus = document.getElementById('ni-loading-status');
        const r1Txt = document.getElementById('ni-r1-txt');
        const rfTxt = document.getElementById('ni-rf-txt');
        const rlTxt = document.getElementById('ni-rl-txt');

        let isRunning = true;
        function anim() {
            if (!isRunning) return;
            timePhase += 0.05;

            const Rs = 10.0; // Assume transducer Rs = 10 kOhm
            const sagRatio = RL / (Rs + RL); // Direct connection voltage divider ratio
            const Av = isBuffer ? 1.0 : (1.0 + (Rf / R1));
            const vOutPeak = Math.min(10.0, VinPeak * Av);
            const vDirectPeak = VinPeak * sagRatio;
            const dropPct = ((1 - sagRatio) * 100).toFixed(0);
            const iLoadMA = (vOutPeak / RL).toFixed(2);

            if (gainTxt) gainTxt.innerText = isBuffer ? 'อัตราขยาย: A_v = 1.0x (Voltage Follower / Unity-Gain Buffer)' : `อัตราขยาย: A_v = 1 + (${Rf}/${R1}) = ${Av.toFixed(2)}x (เฟสตรงกัน 0°)`;
            if (r1Txt) r1Txt.innerText = `R₁=${R1}k`;
            if (rfTxt) rfTxt.innerText = `R_f=${Rf}k`;
            if (rlTxt) rlTxt.innerText = `R_L=${RL >= 1 ? RL.toFixed(1) + 'k' : (RL*1000).toFixed(0) + 'Ω'}`;
            if (loadTxt) loadTxt.innerText = `V_load (มี Op-Amp) = ${vOutPeak.toFixed(2)}V | V_direct (ไม่มี Op-Amp) = ${vDirectPeak.toFixed(2)}V (สูญเสีย ${dropPct}%)`;
            if (loadStatus) loadStatus.innerText = `🛡️ Op-Amp Z_out≈0Ω ขจัด Loading Effect ได้ 100%! กระแสโหลด I_L = ${iLoadMA} mA`;
            if (directLbl) directLbl.innerText = `● v_direct (ต่อตรงไม่มี Op-Amp: ฮวบเหลือ ${vDirectPeak.toFixed(2)}V หรือ ${(sagRatio*100).toFixed(0)}%)`;

            const w = 355;
            const x0 = 490;
            const y0 = 150;
            let dIn = '';
            let dOut = '';
            let dDirect = '';

            for (let i = 0; i <= w; i += 4) {
                const ang = (i / w) * 4 * Math.PI + timePhase;
                const sinVal = Math.sin(ang);
                const yIn = y0 - sinVal * 28;

                // Clamped output for Op-Amp
                let voutPix = sinVal * (28 * Math.min(3.5, Av));
                if (voutPix > 60) voutPix = 60;
                if (voutPix < -60) voutPix = -60;
                const yOut = y0 - voutPix;

                // Sagged wave without Op-Amp
                const yDir = y0 - sinVal * (28 * sagRatio);

                if (i === 0) {
                    dIn = `M ${x0 + i} ${yIn}`;
                    dOut = `M ${x0 + i} ${yOut}`;
                    dDirect = `M ${x0 + i} ${yDir}`;
                } else {
                    dIn += ` L ${x0 + i} ${yIn}`;
                    dOut += ` L ${x0 + i} ${yOut}`;
                    dDirect += ` L ${x0 + i} ${yDir}`;
                }
            }

            if (trVin) trVin.setAttribute('d', dIn);
            if (trVout) trVout.setAttribute('d', dOut);
            if (trDirect) trDirect.setAttribute('d', dDirect);

            animId = requestAnimationFrame(anim);
        }

        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        animId = requestAnimationFrame(anim);

        window.activeSim = {
            stop: () => {
                isRunning = false;
                if (animId) cancelAnimationFrame(animId);
            }
        };
    }

    render();
}

/* =========================================================================
   4. SUMMING & DIFFERENCE SIMULATOR: Multi-Channel Mixer & CMRR Lab
   ========================================================================= */
function initSummingDiffSimulator(canvas, controls) {
    let mode = 'summing'; // 'summing' vs 'diff'
    let v1 = 1.0;
    let v2 = 2.0;
    let v3 = -1.5;
    let hasNoise = true;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-sd-sum">⚡ Summing Amplifier (วงจรมิกเซอร์)</button>
            <button class="toggle-pill" id="btn-sd-diff">🛡️ Difference Amplifier (ตัด Noise CMRR)</button>
        </div>
        <div class="ctrl-group">
            <label>V₁:</label>
            <input type="range" id="sl-sd-v1" min="-3" max="3" step="0.5" value="${v1}">
            <span class="val-badge" id="val-sd-v1">${v1.toFixed(1)} V</span>
        </div>
        <div class="ctrl-group">
            <label>V₂:</label>
            <input type="range" id="sl-sd-v2" min="-3" max="3" step="0.5" value="${v2}">
            <span class="val-badge" id="val-sd-v2">${v2.toFixed(1)} V</span>
        </div>
        <div class="ctrl-group" id="group-v3">
            <label>V₃:</label>
            <input type="range" id="sl-sd-v3" min="-3" max="3" step="0.5" value="${v3}">
            <span class="val-badge" id="val-sd-v3">${v3.toFixed(1)} V</span>
        </div>
    `;

    const btnSum = document.getElementById('btn-sd-sum');
    const btnDiff = document.getElementById('btn-sd-diff');
    const slV1 = document.getElementById('sl-sd-v1');
    const slV2 = document.getElementById('sl-sd-v2');
    const slV3 = document.getElementById('sl-sd-v3');
    const grpV3 = document.getElementById('group-v3');

    btnSum.addEventListener('click', () => {
        mode = 'summing';
        btnSum.classList.add('active');
        btnDiff.classList.remove('active');
        grpV3.style.display = 'flex';
        render();
    });

    btnDiff.addEventListener('click', () => {
        mode = 'diff';
        btnDiff.classList.add('active');
        btnSum.classList.remove('active');
        grpV3.style.display = 'none';
        render();
    });

    slV1.addEventListener('input', e => { v1 = parseFloat(e.target.value); document.getElementById('val-sd-v1').innerText = `${v1.toFixed(1)} V`; render(); });
    slV2.addEventListener('input', e => { v2 = parseFloat(e.target.value); document.getElementById('val-sd-v2').innerText = `${v2.toFixed(1)} V`; render(); });
    slV3.addEventListener('input', e => { v3 = parseFloat(e.target.value); document.getElementById('val-sd-v3').innerText = `${v3.toFixed(1)} V`; render(); });

    function render() {
        if (mode === 'summing') {
            const vout = - (v1 + v2 + v3);
            canvas.innerHTML = `
                <svg viewBox="0 0 880 410" id="anim-svg">
                    <rect x="20" y="20" width="460" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                    <text x="250" y="45" fill="#f472b6" font-size="14" font-weight="700" text-anchor="middle">วงจรรวมสัญญาณเสียง 3 ช่อง (3-Channel Inverting Summing)</text>

                    ${drawIEEE_OpAmp(300, 210, 1.2, { invTop: true, showRails: true })}

                    <!-- Inputs V1, V2, V3 through R1, R2, R3 -->
                    <!-- V1 -->
                    <line x1="50" y1="130" x2="110" y2="130" stroke="#38bdf8" stroke-width="2"/>
                    <rect x="110" y="122" width="30" height="16" fill="#1e293b" stroke="#38bdf8"/>
                    <text x="125" y="116" fill="#38bdf8" font-size="9.5" text-anchor="middle">R₁=10k</text>
                    <line x1="140" y1="130" x2="216" y2="183.6" stroke="#cbd5e1" stroke-width="2"/>
                    <text x="40" y="134" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="end">V₁=${v1.toFixed(1)}V</text>

                    <!-- V2 -->
                    <line x1="50" y1="183.6" x2="110" y2="183.6" stroke="#4ade80" stroke-width="2"/>
                    <rect x="110" y="175.6" width="30" height="16" fill="#1e293b" stroke="#4ade80"/>
                    <text x="125" y="170" fill="#4ade80" font-size="9.5" text-anchor="middle">R₂=10k</text>
                    <line x1="140" y1="183.6" x2="216" y2="183.6" stroke="#cbd5e1" stroke-width="2"/>
                    <text x="40" y="188" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="end">V₂=${v2.toFixed(1)}V</text>

                    <!-- V3 -->
                    <line x1="50" y1="237.2" x2="110" y2="237.2" stroke="#fbbf24" stroke-width="2"/>
                    <rect x="110" y="229.2" width="30" height="16" fill="#1e293b" stroke="#fbbf24"/>
                    <text x="125" y="223" fill="#fbbf24" font-size="9.5" text-anchor="middle">R₃=10k</text>
                    <line x1="140" y1="237.2" x2="216" y2="183.6" stroke="#cbd5e1" stroke-width="2"/>
                    <text x="40" y="242" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="end">V₃=${v3.toFixed(1)}V</text>

                    <!-- Virtual Ground Summing Junction -->
                    <circle cx="216" cy="183.6" r="4.5" fill="#f43f5e"/>
                    <text x="216" y="172" fill="#f472b6" font-size="9.5" font-weight="bold" text-anchor="middle">Summing Node (0V)</text>

                    <!-- Feedback Resistor Rf (10k) -->
                    <line x1="216" y1="183.6" x2="216" y2="110" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="216" y1="110" x2="280" y2="110" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="280" y="102" width="36" height="16" fill="#1e293b" stroke="#f472b6"/>
                    <text x="298" y="96" fill="#f472b6" font-size="9.5" font-weight="bold" text-anchor="middle">R_f=10k</text>
                    <line x1="316" y1="110" x2="400" y2="110" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="400" y1="110" x2="400" y2="210" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="390" y1="210" x2="435" y2="210" stroke="#cbd5e1" stroke-width="2.5"/>
                    <circle cx="435" cy="210" r="4.5" fill="#4ade80"/>
                    <text x="442" y="215" fill="#4ade80" font-size="12" font-weight="bold">v_out</text>

                    <!-- Non-inv (+) to ground -->
                    <line x1="216" y1="236.4" x2="180" y2="236.4" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="180" y1="236.4" x2="180" y2="260" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="168" y1="260" x2="192" y2="260" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Result Card inside Schematic -->
                    <rect x="35" y="310" width="430" height="65" rx="8" fill="rgba(15,23,42,0.95)" stroke="#334155"/>
                    <text x="45" y="333" fill="#cbd5e1" font-size="12">สูตรคำนวณ: v_out = - [ (R_f/R₁)V₁ + (R_f/R₂)V₂ + (R_f/R₃)V₃ ]</text>
                    <text x="45" y="357" fill="#4ade80" font-size="13" font-weight="bold">v_out = - [ (${v1.toFixed(1)}) + (${v2.toFixed(1)}) + (${v3.toFixed(1)}) ] = <tspan fill="#f472b6">${vout.toFixed(2)} V</tspan></text>

                    <!-- SECTION 2: BAR GRAPH VISUALIZER (Right) -->
                    <rect x="500" y="20" width="360" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                    <text x="680" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">ระดับแรงดันแต่ละช่องสัญญาณ & ผลรวมเอาต์พุต</text>

                    <!-- Zero Axis and Reference Lines -->
                    <line x1="515" y1="200" x2="845" y2="200" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <text x="510" y="204" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="end">0V</text>
                    <text x="510" y="75" fill="#64748b" font-size="9" text-anchor="end">+V</text>
                    <text x="510" y="325" fill="#64748b" font-size="9" text-anchor="end">-V</text>

                    ${(() => {
                        const makeBar = (x, w, val, scale, color, label) => {
                            const isNeg = val < 0;
                            const barH = Math.max(3, Math.abs(val * scale));
                            const barY = isNeg ? 200 : (200 - barH);
                            const textY = isNeg ? (200 + barH + 14) : (200 - barH - 6);
                            return `
                                <rect x="${x}" y="${barY}" width="${w}" height="${barH}" fill="${color}" rx="4" opacity="0.88"/>
                                <text x="${x + w/2}" y="${textY}" fill="${color}" font-size="10.5" font-weight="bold" text-anchor="middle">${val >= 0 ? '+' : ''}${val.toFixed(1)}V</text>
                                <rect x="${x - 2}" y="350" width="${w + 4}" height="20" rx="4" fill="#0f172a" stroke="${color}" stroke-width="1.2"/>
                                <text x="${x + w/2}" y="364" fill="${color}" font-size="10.5" font-weight="bold" text-anchor="middle">${label}</text>
                            `;
                        };
                        return `
                            ${makeBar(530, 36, v1, 24, '#38bdf8', 'V₁')}
                            ${makeBar(585, 36, v2, 24, '#4ade80', 'V₂')}
                            ${makeBar(640, 36, v3, 24, '#fbbf24', 'V₃')}
                            <text x="700" y="206" fill="#cbd5e1" font-size="20" font-weight="bold" text-anchor="middle">➔</text>
                            ${makeBar(735, 46, vout, 12, '#ec4899', 'v_out')}
                        `;
                    })()}
                </svg>
            `;
        } else {
            // Difference Amplifier
            const vdiff = v2 - v1;
            canvas.innerHTML = `
                <svg viewBox="0 0 880 410" id="anim-svg">
                    <rect x="20" y="20" width="460" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                    <text x="250" y="45" fill="#4ade80" font-size="14" font-weight="700" text-anchor="middle">วงจรขยายผลต่าง (Difference Amplifier & CMRR)</text>

                    ${drawIEEE_OpAmp(280, 200, 1.25, { invTop: true, showRails: true })}

                    <!-- V1 to Inverting (-) through R1 -->
                    <text x="40" y="176" fill="#38bdf8" font-size="11" font-weight="bold">V₁=${v1.toFixed(1)}V</text>
                    <line x1="90" y1="172.5" x2="130" y2="172.5" stroke="#38bdf8" stroke-width="2"/>
                    <rect x="130" y="164" width="30" height="17" fill="#1e293b" stroke="#38bdf8"/>
                    <text x="145" y="157" fill="#38bdf8" font-size="9.5" text-anchor="middle">R₁</text>
                    <line x1="160" y1="172.5" x2="192.5" y2="172.5" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Feedback R2 to Out -->
                    <line x1="192.5" y1="172.5" x2="192.5" y2="110" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="192.5" y1="110" x2="260" y2="110" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="260" y="102" width="36" height="16" fill="#1e293b" stroke="#f472b6"/>
                    <text x="278" y="95" fill="#f472b6" font-size="9.5" font-weight="bold" text-anchor="middle">R₂</text>
                    <line x1="296" y1="110" x2="380" y2="110" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="380" y1="110" x2="380" y2="200" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="373.75" y1="200" x2="420" y2="200" stroke="#cbd5e1" stroke-width="2.5"/>
                    <circle cx="420" cy="200" r="4.5" fill="#4ade80"/>
                    <text x="430" y="205" fill="#4ade80" font-size="12" font-weight="bold">v_out</text>

                    <!-- V2 to Non-inverting (+) through R3 and R4 to ground -->
                    <text x="40" y="232" fill="#4ade80" font-size="11" font-weight="bold">V₂=${v2.toFixed(1)}V</text>
                    <line x1="90" y1="227.5" x2="130" y2="227.5" stroke="#4ade80" stroke-width="2"/>
                    <rect x="130" y="219" width="30" height="17" fill="#1e293b" stroke="#4ade80"/>
                    <text x="145" y="212" fill="#4ade80" font-size="9.5" text-anchor="middle">R₃</text>
                    <line x1="160" y1="227.5" x2="192.5" y2="227.5" stroke="#cbd5e1" stroke-width="2"/>
                    <!-- R4 down to ground -->
                    <circle cx="192.5" cy="227.5" r="3.5" fill="#4ade80"/>
                    <line x1="192.5" y1="227.5" x2="192.5" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="184" y="250" width="17" height="30" fill="#1e293b" stroke="#a78bfa"/>
                    <text x="210" y="268" fill="#a78bfa" font-size="9.5">R₄</text>
                    <line x1="192.5" y1="280" x2="192.5" y2="295" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="182" y1="295" x2="203" y2="295" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Summary Box in Schematic -->
                    <rect x="35" y="315" width="430" height="60" rx="8" fill="rgba(15,23,42,0.95)" stroke="#334155"/>
                    <text x="45" y="337" fill="#cbd5e1" font-size="12">เงื่อนไขสมดุล: R₂/R₁ = R₄/R₃ = 1 ➔ v_out = (V₂ - V₁)</text>
                    <text x="45" y="358" fill="#4ade80" font-size="13" font-weight="bold">v_out = (${v2.toFixed(1)}) - (${v1.toFixed(1)}) = <tspan fill="#f472b6">${vdiff.toFixed(2)} V</tspan></text>

                    <!-- SECTION 2: NOISE REJECTION DEMO (Right) -->
                    <rect x="500" y="20" width="360" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                    <text x="680" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">การตัดสัญญาณรบกวนร่วม (CMRR Demo)</text>

                    <rect x="520" y="70" width="320" height="75" rx="8" fill="rgba(74,222,128,0.08)" stroke="#4ade80"/>
                    <text x="535" y="95" fill="#4ade80" font-size="12.5" font-weight="bold">🛡️ Common-Mode Noise Cancellation:</text>
                    <text x="535" y="118" fill="#cbd5e1" font-size="11.5">หากมีสัญญาณฮัม 50Hz รบกวนเข้ามาบนสายทั้งสองพร้อมกัน</text>
                    <text x="535" y="135" fill="#38bdf8" font-size="11.5">v_out = (V₂ + V_noise) - (V₁ + V_noise) = (V₂ - V₁) สะอาด 100%</text>

                    <rect x="520" y="160" width="320" height="120" rx="8" fill="rgba(15,23,42,0.85)" stroke="#334155"/>
                    <text x="535" y="185" fill="#fbbf24" font-size="12.5" font-weight="bold">🎯 การประยุกต์ใช้งานเด่น:</text>
                    <text x="535" y="208" fill="#cbd5e1" font-size="11.5">• <b>เซนเซอร์สะพานบริดจ์ (Wheatstone Bridge):</b> สเตรนเกจชั่งน้ำหนัก</text>
                    <text x="535" y="230" fill="#cbd5e1" font-size="11.5">• <b>สัญญาณชีวการแพทย์ (ECG / EEG / EMG):</b> สัญญาณระดับไมโครโวลต์</text>
                    <text x="535" y="252" fill="#cbd5e1" font-size="11.5">• <b>สายสัญญาณเสียงแบบ Balanced (XLR Microphone):</b> ตัดเสียงฮัม</text>
                </svg>
            `;
        }
    }

    render();
}

/* =========================================================================
   5. INTEGRATOR & DIFFERENTIATOR SIMULATOR: Waveform Shaping
   ========================================================================= */
function initIntegratorDiffSimulator(canvas, controls) {
    let mode = 'integrator'; // 'integrator' vs 'diff'
    let waveType = 'square'; // 'square', 'sine', 'triangle'
    let animId = null;
    let timePhase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-wf-int">⚡ Integrator (อินทิเกรเตอร์)</button>
            <button class="toggle-pill" id="btn-wf-diff">⚡ Differentiator (ดิฟเฟอเรนชิเอเตอร์)</button>
        </div>
        <div class="ctrl-group">
            <label>รูปคลื่นอินพุต:</label>
            <button class="toggle-pill active" id="btn-wave-sq">Square (สี่เหลี่ยม)</button>
            <button class="toggle-pill" id="btn-wave-tri">Triangle (สามเหลี่ยม)</button>
            <button class="toggle-pill" id="btn-wave-sin">Sine (ไซน์)</button>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            💎 สังเกต <b>Waveform Shaping</b>: สี่เหลี่ยมอินทิเกรตกลายเป็นสามเหลี่ยม
        </div>
    `;

    const btnInt = document.getElementById('btn-wf-int');
    const btnDiff = document.getElementById('btn-wf-diff');
    const btnSq = document.getElementById('btn-wave-sq');
    const btnTri = document.getElementById('btn-wave-tri');
    const btnSin = document.getElementById('btn-wave-sin');

    btnInt.addEventListener('click', () => { mode = 'integrator'; updatePills(); render(); });
    btnDiff.addEventListener('click', () => { mode = 'diff'; updatePills(); render(); });

    btnSq.addEventListener('click', () => { waveType = 'square'; updateWavePills(); render(); });
    btnTri.addEventListener('click', () => { waveType = 'triangle'; updateWavePills(); render(); });
    btnSin.addEventListener('click', () => { waveType = 'sine'; updateWavePills(); render(); });

    function updatePills() {
        btnInt.classList.toggle('active', mode === 'integrator');
        btnDiff.classList.toggle('active', mode === 'diff');
    }

    function updateWavePills() {
        btnSq.classList.toggle('active', waveType === 'square');
        btnTri.classList.toggle('active', waveType === 'triangle');
        btnSin.classList.toggle('active', waveType === 'sine');
    }

    function render() {
        const isInt = mode === 'integrator';

        const waveNameTH = {
            square: 'Square (คลื่นสี่เหลี่ยม)',
            triangle: 'Triangle (คลื่นสามเหลี่ยม)',
            sine: 'Sine (คลื่นไซน์)'
        }[waveType];

        const waveResultDesc = isInt
            ? (waveType === 'square'
                ? 'ผลลัพธ์: คลื่นสี่เหลี่ยมถูกอินทิเกรตกลายเป็นคลื่นสามเหลี่ยมเชิงเส้น (Linear Triangle Wave)'
                : (waveType === 'triangle'
                    ? 'ผลลัพธ์: คลื่นสามเหลี่ยมถูกอินทิเกรตกลายเป็นคลื่นพาราโบลิก/ไซน์เรียบ (Parabolic Smoothing)'
                    : 'ผลลัพธ์: คลื่นไซน์ถูกอินทิเกรตกลายเป็นคลื่นโคไซน์ (เฟสนำหน้า 90° จากการกลับเฟส)'))
            : (waveType === 'square'
                ? 'ผลลัพธ์: ตรวจจับขอบความชัน (Edge Detection / Spike Impulses ขอบขึ้นได้พัลส์ลบ ขอบลงได้พัลส์บวก)'
                : (waveType === 'triangle'
                    ? 'ผลลัพธ์: ความชันคงที่ของคลื่นสามเหลี่ยมถูกดิฟเฟอเรนชิเอตกลายเป็นคลื่นสี่เหลี่ยม (Square Wave)'
                    : 'ผลลัพธ์: คลื่นไซน์ถูกดิฟเฟอเรนชิเอตกลายเป็นคลื่นลบคอส (เฟสล้าหลัง 90° จากการกลับเฟส)'));

        const ch2Label = isInt
            ? (waveType === 'square' ? 'INTEGRATED TRIANGLE' : (waveType === 'triangle' ? 'PARABOLIC SINE-LIKE' : 'INTEGRATED COSINE'))
            : (waveType === 'square' ? 'SPIKE IMPULSES (EDGES)' : (waveType === 'triangle' ? 'DIFFERENTIATED SQUARE' : '-COSINE WAVE'));

        canvas.innerHTML = `
            <svg viewBox="0 0 880 410" id="anim-svg">
                <!-- SECTION 1: SCHEMATIC (Left) -->
                <rect x="20" y="20" width="440" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                <text x="240" y="45" fill="#f472b6" font-size="14" font-weight="700" text-anchor="middle">
                    ${isInt ? 'วงจรอินทิเกรเตอร์ (Op-Amp Integrator)' : 'วงจรดิฟเฟอเรนชิเอเตอร์ (Op-Amp Differentiator)'}
                </text>

                ${drawIEEE_OpAmp(270, 200, 1.25, { invTop: true, showRails: true })}

                <!-- Input Component: R (Integrator) or C (Differentiator) -->
                <circle cx="55" cy="172.5" r="14" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
                <path d="M 47 172.5 Q 51 166.5 55 172.5 T 63 172.5" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
                <text x="55" y="198" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">v_in</text>
                <line x1="69" y1="172.5" x2="105" y2="172.5" stroke="#cbd5e1" stroke-width="2"/>

                ${isInt ? `
                    <!-- Resistor R at input -->
                    <rect x="105" y="164" width="35" height="17" fill="#1e293b" stroke="#38bdf8"/>
                    <text x="122" y="157" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">R</text>
                    <line x1="140" y1="172.5" x2="182.5" y2="172.5" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Capacitor C in feedback -->
                    <line x1="182.5" y1="172.5" x2="182.5" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="182.5" y1="105" x2="265" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <!-- C plates -->
                    <line x1="265" y1="95" x2="265" y2="115" stroke="#4ade80" stroke-width="2.5"/>
                    <line x1="271" y1="95" x2="271" y2="115" stroke="#4ade80" stroke-width="2.5"/>
                    <text x="268" y="88" fill="#4ade80" font-size="10" font-weight="bold" text-anchor="middle">C</text>
                    <line x1="271" y1="105" x2="380" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                ` : `
                    <!-- Capacitor C at input -->
                    <line x1="105" y1="162.5" x2="105" y2="182.5" stroke="#38bdf8" stroke-width="2.5"/>
                    <line x1="111" y1="162.5" x2="111" y2="182.5" stroke="#38bdf8" stroke-width="2.5"/>
                    <text x="108" y="155" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">C</text>
                    <line x1="111" y1="172.5" x2="182.5" y2="172.5" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Resistor R in feedback -->
                    <line x1="182.5" y1="172.5" x2="182.5" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="182.5" y1="105" x2="250" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="250" y="96" width="40" height="18" fill="#1e293b" stroke="#f472b6"/>
                    <text x="270" y="90" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">R</text>
                    <line x1="290" y1="105" x2="380" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <line x1="380" y1="105" x2="380" y2="200" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="363.75" y1="200" x2="425" y2="200" stroke="#cbd5e1" stroke-width="2.5"/>
                <circle cx="425" cy="200" r="4.5" fill="#4ade80"/>
                <text x="430" y="218" fill="#4ade80" font-size="11" font-weight="bold">v_out</text>

                <!-- Non-inv (+) to ground -->
                <line x1="182.5" y1="227.5" x2="150" y2="227.5" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="150" y1="227.5" x2="150" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="135" y1="250" x2="165" y2="250" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Readout Box -->
                <rect x="35" y="305" width="410" height="70" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
                <text x="45" y="327" fill="#cbd5e1" font-size="12">${isInt ? 'สมการ: v_out(t) = - (1 / RC) ∫ v_in(t) dt' : 'สมการ: v_out(t) = - RC · (d v_in(t) / dt)'}</text>
                <text x="45" y="347" fill="#38bdf8" font-size="11.5">รูปคลื่นอินพุตปัจจุบัน: <tspan fill="#fbbf24" font-weight="bold">${waveNameTH}</tspan></text>
                <text x="45" y="365" fill="#4ade80" font-size="11.5" font-weight="bold">${waveResultDesc}</text>

                <!-- SECTION 2: DUAL REAL-TIME OSCILLOSCOPE (Right) -->
                <rect x="475" y="20" width="385" height="370" rx="12" fill="#040812" stroke="#223554" stroke-width="1.5"/>
                <text x="667" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">การแปลงรูปคลื่น (Waveform Transformation)</text>

                <!-- CH1 Screen -->
                <rect x="490" y="60" width="355" height="135" rx="6" fill="#02050c" stroke="#1e293b"/>
                <line x1="490" y1="127" x2="845" y2="127" stroke="#1e293b" stroke-dasharray="2,2"/>
                <path id="wf-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
                <text x="505" y="80" fill="#38bdf8" font-size="11.5" font-weight="bold">CH1: v_in (${waveType.toUpperCase()})</text>

                <!-- CH2 Screen -->
                <rect x="490" y="210" width="355" height="165" rx="6" fill="#02050c" stroke="#1e293b"/>
                <line x1="490" y1="292" x2="845" y2="292" stroke="#1e293b" stroke-dasharray="2,2"/>
                <path id="wf-trace-vout" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>
                <text x="505" y="230" fill="#4ade80" font-size="11.5" font-weight="bold">CH2: v_out (${ch2Label})</text>
            </svg>
        `;

        const trVin = document.getElementById('wf-trace-vin');
        const trVout = document.getElementById('wf-trace-vout');

        let isRunning = true;
        function animWave() {
            if (!isRunning) return;
            timePhase += 0.04;

            const w = 355;
            const x0 = 490;
            const y0_in = 127;
            const y0_out = 292;

            let dIn = '';
            let dOut = '';

            for (let i = 0; i <= w; i += 3) {
                const ang = (i / w) * 4 * Math.PI + timePhase;
                const normAng = ((ang % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

                let valIn = 0;
                let valOut = 0;

                if (waveType === 'square') {
                    valIn = normAng < Math.PI ? 1.0 : -1.0;
                    if (isInt) {
                        // Inverting Integral of square wave: positive input yields negative slope!
                        valOut = normAng < Math.PI
                            ? 1.0 - (normAng / Math.PI) * 2.0
                            : -1.0 + ((normAng - Math.PI) / Math.PI) * 2.0;
                    } else {
                        // Inverting Derivative of square wave: rising edge -> negative spike, falling edge -> positive spike
                        if (normAng < 0.12 || normAng > (2 * Math.PI - 0.12)) {
                            valOut = -2.5;
                        } else if (Math.abs(normAng - Math.PI) < 0.12) {
                            valOut = 2.5;
                        } else {
                            valOut = 0.0;
                        }
                    }
                } else if (waveType === 'triangle') {
                    valIn = normAng < Math.PI ? -1.0 + (normAng / Math.PI) * 2.0 : 1.0 - ((normAng - Math.PI) / Math.PI) * 2.0;
                    if (isInt) {
                        // Integral of triangle is smooth parabolic/sine-like wave
                        valOut = Math.sin(normAng);
                    } else {
                        // Inverting derivative of triangle: positive slope yields negative constant voltage
                        valOut = normAng < Math.PI ? -1.0 : 1.0;
                    }
                } else {
                    // Sine wave:
                    // Inverting Integral: -∫ sin(t) dt = +cos(t)
                    // Inverting Derivative: -d(sin(t))/dt = -cos(t)
                    valIn = Math.sin(normAng);
                    valOut = isInt ? Math.cos(normAng) : - Math.cos(normAng);
                }

                const yIn = y0_in - valIn * 35;
                const yOut = y0_out - valOut * 38;

                if (i === 0) {
                    dIn = `M ${x0 + i} ${yIn}`;
                    dOut = `M ${x0 + i} ${yOut}`;
                } else {
                    dIn += ` L ${x0 + i} ${yIn}`;
                    dOut += ` L ${x0 + i} ${yOut}`;
                }
            }

            if (trVin) trVin.setAttribute('d', dIn);
            if (trVout) trVout.setAttribute('d', dOut);

            animId = requestAnimationFrame(animWave);
        }

        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        animId = requestAnimationFrame(animWave);

        window.activeSim = {
            stop: () => {
                isRunning = false;
                if (animId) cancelAnimationFrame(animId);
            }
        };
    }

    render();
}

/* =========================================================================
   6. COMPARATOR & SCHMITT TRIGGER SIMULATOR: Noise Immunity Experiment
   ========================================================================= */
function initComparatorSchmittSimulator(canvas, controls) {
    let mode = 'schmitt'; // 'schmitt' vs 'comparator'
    let hasNoise = true;
    let animId = null;
    let timePhase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-cs-schmitt">🛡️ Schmitt Trigger (Positive Feedback & Hysteresis)</button>
            <button class="toggle-pill" id="btn-cs-comp">⚠️ Open-Loop Comparator (สั่นกระตุกเมื่อมี Noise)</button>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-cs-noise">สัญญาณรบกวน (Noise): [ON]</button>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            ⚡ สังเกต<b>การป้องกัน Chattering</b> ด้วย Hysteresis Window ($UTP - LTP$)
        </div>
    `;

    const btnSchmitt = document.getElementById('btn-cs-schmitt');
    const btnComp = document.getElementById('btn-cs-comp');
    const btnNoise = document.getElementById('btn-cs-noise');

    btnSchmitt.addEventListener('click', () => {
        mode = 'schmitt';
        btnSchmitt.classList.add('active');
        btnComp.classList.remove('active');
        render();
    });

    btnComp.addEventListener('click', () => {
        mode = 'comparator';
        btnComp.classList.add('active');
        btnSchmitt.classList.remove('active');
        render();
    });

    btnNoise.addEventListener('click', () => {
        hasNoise = !hasNoise;
        btnNoise.classList.toggle('active', hasNoise);
        btnNoise.innerText = `สัญญาณรบกวน (Noise): [${hasNoise ? 'ON' : 'OFF'}]`;
    });

    function render() {
        const isSchmitt = mode === 'schmitt';

        canvas.innerHTML = `
            <svg viewBox="0 0 880 410" id="anim-svg">
                <!-- SECTION 1: SCHEMATIC (Left) -->
                <rect x="20" y="20" width="440" height="370" rx="12" fill="#080f1e" stroke="#223554" stroke-width="1.5"/>
                <text x="240" y="45" fill="#f472b6" font-size="14" font-weight="700" text-anchor="middle">
                    ${isSchmitt ? 'วงจรชมิตต์ทริกเกอร์ (Schmitt Trigger with Hysteresis)' : 'วงจรเปรียบเทียบแรงดันเปิดลูป (Standard Open-Loop Comparator)'}
                </text>

                <!-- Op-Amp Symbol in Center (invTop: true so (-) is at top, (+) at bottom) -->
                ${drawIEEE_OpAmp(270, 200, 1.25, { invTop: true, showRails: true })}

                <!-- Input signal to Inverting (-) terminal -->
                <circle cx="55" cy="172.5" r="14" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
                <path d="M 47 172.5 Q 51 166.5 55 172.5 T 63 172.5" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
                <text x="55" y="198" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">v_in (Noisy)</text>
                <line x1="69" y1="172.5" x2="182.5" y2="172.5" stroke="#38bdf8" stroke-width="2.5"/>
                <circle cx="182.5" cy="172.5" r="3.5" fill="#38bdf8"/>

                <!-- Non-Inverting (+) Pin at (182.5, 227.5) -->
                ${isSchmitt ? `
                    <!-- Schmitt Trigger: Positive feedback from Output to (+) -->
                    <!-- Node at (+) -->
                    <circle cx="182.5" cy="227.5" r="3.5" fill="#f472b6"/>
                    <!-- R1 down to ground -->
                    <line x1="182.5" y1="227.5" x2="140" y2="227.5" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="140" y1="227.5" x2="140" y2="245" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="131" y="245" width="18" height="30" fill="#1e293b" stroke="#38bdf8"/>
                    <text x="120" y="262" fill="#38bdf8" font-size="9.5">R₁=10k</text>
                    <line x1="140" y1="275" x2="140" y2="290" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="125" y1="290" x2="155" y2="290" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- R2 positive feedback to output -->
                    <line x1="182.5" y1="227.5" x2="182.5" y2="105" stroke="#f472b6" stroke-width="2"/>
                    <line x1="182.5" y1="105" x2="250" y2="105" stroke="#f472b6" stroke-width="2"/>
                    <rect x="250" y="96" width="40" height="18" fill="#1e293b" stroke="#f472b6"/>
                    <text x="270" y="90" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">R₂=90k</text>
                    <line x1="290" y1="105" x2="380" y2="105" stroke="#f472b6" stroke-width="2"/>
                    <line x1="380" y1="105" x2="380" y2="200" stroke="#f472b6" stroke-width="2"/>
                    <text x="280" y="125" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">ป้อนกลับบวก (Positive Feedback)</text>
                ` : `
                    <!-- Standard Comparator: (+) connected to Vref = 0V -->
                    <line x1="182.5" y1="227.5" x2="140" y2="227.5" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="140" y1="227.5" x2="140" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="125" y1="250" x2="155" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                    <text x="140" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">V_ref = 0V</text>
                `}

                <line x1="363.75" y1="200" x2="425" y2="200" stroke="#4ade80" stroke-width="2.5"/>
                <circle cx="425" cy="200" r="4.5" fill="#4ade80"/>
                <text x="430" y="218" fill="#4ade80" font-size="11" font-weight="bold">v_out</text>

                <!-- Readout Box -->
                <rect x="35" y="305" width="410" height="70" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
                <text x="45" y="327" fill="#cbd5e1" font-size="12">${isSchmitt ? 'จุดทริกเกอร์: UTP = +1.35 V  |  LTP = -1.35 V' : 'จุดตัดเปรียบเทียบ: V_ref = 0.00 V (จุดเดียว ไร้ Hysteresis)'}</text>
                <text x="45" y="347" fill="#f472b6" font-size="11.5">${isSchmitt ? 'Hysteresis Window: V_H = UTP - LTP = 2.70 V' : 'ความกว้าง Hysteresis = 0 V (ไวต่อ Noise มาก)'}</text>
                <text x="45" y="365" fill="${isSchmitt ? '#4ade80' : '#f87171'}" font-size="11.5" font-weight="bold">
                    ${isSchmitt ? '🛡️ มีภูมิคุ้มกันสัญญาณรบกวน 100% สัญญาณดิจิทัลสะอาด ไร้การสั่นกระตุก' : '⚠️ วิกฤต: เกิด Chattering สวิตช์สั่นกระตุกรัวๆ เมื่อมีสัญญาณรบกวน!'}
                </text>

                <!-- SECTION 2: LIVE OSCILLOSCOPE (Right) -->
                <rect x="475" y="20" width="385" height="370" rx="12" fill="#040812" stroke="#223554" stroke-width="1.5"/>
                <text x="667" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">การเปรียบเทียบรูปคลื่นเมื่อมีสัญญาณรบกวน (Noise)</text>

                <rect x="490" y="60" width="355" height="135" rx="6" fill="#02050c" stroke="#1e293b"/>
                <line x1="490" y1="127" x2="845" y2="127" stroke="#1e293b" stroke-dasharray="2,2"/>
                ${isSchmitt ? `
                    <!-- UTP and LTP trigger lines -->
                    <line x1="490" y1="108" x2="845" y2="108" stroke="#f472b6" stroke-dasharray="2,2"/>
                    <text x="835" y="104" fill="#f472b6" font-size="9" text-anchor="end">UTP (+1.35V)</text>
                    <line x1="490" y1="146" x2="845" y2="146" stroke="#38bdf8" stroke-dasharray="2,2"/>
                    <text x="835" y="157" fill="#38bdf8" font-size="9" text-anchor="end">LTP (-1.35V)</text>
                ` : `
                    <text x="835" y="123" fill="#64748b" font-size="9" text-anchor="end">V_ref = 0V</text>
                `}
                <path id="cs-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="2"/>
                <text x="505" y="80" fill="#38bdf8" font-size="11.5" font-weight="bold">CH1: v_in (Noisy Analog Sine)</text>

                <rect x="490" y="210" width="355" height="165" rx="6" fill="#02050c" stroke="#1e293b"/>
                <line x1="490" y1="292" x2="845" y2="292" stroke="#1e293b" stroke-dasharray="2,2"/>
                <path id="cs-trace-vout" d="" fill="none" stroke="${isSchmitt ? '#4ade80' : '#f87171'}" stroke-width="2.5"/>
                <text x="505" y="230" fill="${isSchmitt ? '#4ade80' : '#f87171'}" font-size="11.5" font-weight="bold">
                    CH2: v_out (${isSchmitt ? 'CLEAN DIGITAL SQUARE' : 'CHATTERING GLITCHES!'})
                </text>
            </svg>
        `;

        const trVin = document.getElementById('cs-trace-vin');
        const trVout = document.getElementById('cs-trace-vout');

        let isRunning = true;
        let lastSchmittState = -1; // -1 or +1

        function animScope() {
            if (!isRunning) return;
            timePhase += 0.045;

            const w = 355;
            const x0 = 490;
            const y0_in = 127;
            const y0_out = 292;

            let dIn = '';
            let dOut = '';

            for (let i = 0; i <= w; i += 3) {
                const ang = (i / w) * 4 * Math.PI + timePhase;
                // Pure sine
                let sineVal = Math.sin(ang) * 2.5;
                // Noise addition
                if (hasNoise) {
                    const noise = (Math.sin(ang * 13) + Math.cos(ang * 23)) * 0.45;
                    sineVal += noise;
                }

                let outLevel = 1;
                if (isSchmitt) {
                    // Hysteresis UTP = +1.35, LTP = -1.35
                    if (sineVal > 1.35) {
                        lastSchmittState = -1; // Inverting Schmitt: high input -> low output
                    } else if (sineVal < -1.35) {
                        lastSchmittState = 1;
                    }
                    outLevel = lastSchmittState;
                } else {
                    // Comparator chatter: switches directly at 0V
                    outLevel = sineVal > 0 ? -1 : 1;
                }

                const yIn = y0_in - sineVal * 16;
                const yOut = y0_out - outLevel * 50;

                if (i === 0) {
                    dIn = `M ${x0 + i} ${yIn}`;
                    dOut = `M ${x0 + i} ${yOut}`;
                } else {
                    dIn += ` L ${x0 + i} ${yIn}`;
                    dOut += ` L ${x0 + i} ${yOut}`;
                }
            }

            if (trVin) trVin.setAttribute('d', dIn);
            if (trVout) trVout.setAttribute('d', dOut);

            animId = requestAnimationFrame(animScope);
        }

        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        animId = requestAnimationFrame(animScope);

        window.activeSim = {
            stop: () => {
                isRunning = false;
                if (animId) cancelAnimationFrame(animId);
            }
        };
    }

    render();
}
