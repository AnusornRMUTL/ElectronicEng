/**
 * Certificate Engine for ENGEE160 Engineering Electronics
 * Generates high-resolution (1600x1000) digital certificates on HTML5 Canvas and exports to PNG.
 */

const CertificateEngine = {
    /**
     * Renders an elegant digital certificate onto the provided canvas.
     * @param {HTMLCanvasElement} canvas
     * @param {Object} data
     *   - studentName: string
     *   - lessonTitle: string
     *   - score: number
     *   - total: number
     *   - grade: string ('A', 'B', 'C', 'D')
     *   - timestamp: Date or string (optional)
     *   - certId: string (optional)
     */
    render(canvas, data) {
        if (!canvas) return;
        const width = 1600;
        const height = 1000;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const studentName = (data.studentName || 'ผู้เรียน ENGEE160').trim();
        const lessonTitle = data.lessonTitle || 'บทเรียนอิเล็กทรอนิกส์วิศวกรรม';
        const score = data.score !== undefined ? data.score : 10;
        const total = data.total || 10;
        const grade = data.grade || 'A';
        const dateObj = data.timestamp ? new Date(data.timestamp) : new Date();

        // Format Thai Date and Time
        const thaiMonths = [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ];
        const day = dateObj.getDate();
        const month = thaiMonths[dateObj.getMonth()];
        const year = dateObj.getFullYear() + 543;
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const seconds = String(dateObj.getSeconds()).padStart(2, '0');
        const dateStr = `${day} ${month} พ.ศ. ${year}`;
        const timeStr = `${hours}:${minutes}:${seconds} น.`;

        // Verification ID
        const certId = data.certId || `CERT-ENGEE160-${grade}-${Math.floor(100000 + Math.random() * 900000)}`;

        // 1. Background (Rich Dark Slate / Cyber Navy)
        const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, 900);
        bgGrad.addColorStop(0, '#0f1d36');
        bgGrad.addColorStop(0.6, '#091122');
        bgGrad.addColorStop(1, '#050914');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // 2. Subtle Circuit Pattern Watermark
        ctx.save();
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)';
        ctx.lineWidth = 1.5;
        for (let x = 80; x < width; x += 120) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = 80; y < height; y += 100) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        // Circuit nodes
        ctx.fillStyle = 'rgba(6, 182, 212, 0.07)';
        for (let x = 80; x < width; x += 240) {
            for (let y = 80; y < height; y += 200) {
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();

        // 3. Ornate Double Borders (Gold & Cyan)
        // Outer Gold Border
        ctx.save();
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 4;
        ctx.strokeRect(36, 36, width - 72, height - 72);

        // Thin Gold Accent Line
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(44, 44, width - 88, height - 88);

        // Inner Cyan Border
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2;
        ctx.strokeRect(54, 54, width - 108, height - 108);

        // Corner Ornamental Brackets
        const drawCorner = (x, y, xDir, yDir) => {
            ctx.strokeStyle = '#fbbf24';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x + xDir * 40, y);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + yDir * 40);
            ctx.stroke();

            // Diamond accent
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(x + xDir * 16, y + yDir * 16, 4, 0, Math.PI * 2);
            ctx.fill();
        };
        drawCorner(64, 64, 1, 1);
        drawCorner(width - 64, 64, -1, 1);
        drawCorner(64, height - 64, 1, -1);
        drawCorner(width - 64, height - 64, -1, -1);
        ctx.restore();

        // 4. Header: Institution & Course Branding
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // University Emblem Icon (Stylized Gear & Electron Orbit)
        ctx.save();
        ctx.fillStyle = '#fbbf24';
        ctx.font = '32px sans-serif';
        ctx.fillText('⚡', width / 2, 95);
        ctx.restore();

        // University Name
        ctx.font = '700 24px "Sarabun", sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงราย', width / 2, 136);

        // Faculty & Dept
        ctx.font = '500 18px "Sarabun", sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('คณะวิศวกรรมศาสตร์ · สาขาวิชาวิศวกรรมไฟฟ้า', width / 2, 168);

        // Course Title
        ctx.font = '600 18px "Sarabun", sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('รายวิชา ENGEE160 อิเล็กทรอนิกส์วิศวกรรม (Engineering Electronics)', width / 2, 198);

        // Horizontal Divider with Diamond in Center
        ctx.save();
        const divGrad = ctx.createLinearGradient(width / 2 - 320, 0, width / 2 + 320, 0);
        divGrad.addColorStop(0, 'transparent');
        divGrad.addColorStop(0.5, '#fbbf24');
        divGrad.addColorStop(1, 'transparent');
        ctx.strokeStyle = divGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(width / 2 - 320, 225);
        ctx.lineTo(width / 2 + 320, 225);
        ctx.stroke();

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(width / 2, 225, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 5. Main Title: CERTIFICATE OF ACHIEVEMENT
        ctx.font = '800 38px "Sarabun", sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = 'rgba(251, 191, 36, 0.45)';
        ctx.shadowBlur = 15;
        ctx.fillText('CERTIFICATE OF ACHIEVEMENT', width / 2, 275);
        ctx.shadowBlur = 0; // reset

        ctx.font = '600 20px "Sarabun", sans-serif';
        ctx.fillStyle = '#f8fafc';
        ctx.fillText('ใบประกาศนียบัตรรับรองผลการประเมินผลสัมฤทธิ์ทางการเรียนดิจิทัล', width / 2, 316);

        // 6. Presentation Phrase
        ctx.font = '400 19px "Sarabun", sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('ขอมอบใบประกาศนียบัตรฉบับนี้เพื่อแสดงว่า', width / 2, 370);

        // 7. Student Name (Big, Elegant, Prominent)
        ctx.font = '800 48px "Sarabun", sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.shadowBlur = 18;
        ctx.fillText(studentName, width / 2, 440);
        ctx.shadowBlur = 0;

        // Name Underline Bar
        const nameWidth = ctx.measureText(studentName).width;
        const barWidth = Math.max(nameWidth + 100, 360);
        ctx.save();
        const barGrad = ctx.createLinearGradient(width / 2 - barWidth / 2, 0, width / 2 + barWidth / 2, 0);
        barGrad.addColorStop(0, 'transparent');
        barGrad.addColorStop(0.5, '#06b6d4');
        barGrad.addColorStop(1, 'transparent');
        ctx.strokeStyle = barGrad;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(width / 2 - barWidth / 2, 476);
        ctx.lineTo(width / 2 + barWidth / 2, 476);
        ctx.stroke();
        ctx.restore();

        // 8. Achievement Statement & Lesson
        ctx.font = '400 20px "Sarabun", sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('ได้ผ่านการทดสอบวัดความรู้และการประเมินผลการเรียนรู้ท้ายบทเรียน', width / 2, 525);

        ctx.font = '700 28px "Sarabun", sans-serif';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(`เรื่อง: ${lessonTitle}`, width / 2, 570);

        // 9. Score & Grade Pill Badge
        const badgeY = 640;
        const gradeColors = {
            'A': { bg: 'rgba(34, 197, 94, 0.18)', border: '#22c55e', text: '#4ade80', label: 'เกรด A (ดีเยี่ยม)' },
            'B': { bg: 'rgba(56, 189, 248, 0.18)', border: '#0284c7', text: '#38bdf8', label: 'เกรด B (ดี)' },
            'C': { bg: 'rgba(245, 158, 11, 0.18)', border: '#d97706', text: '#fbbf24', label: 'เกรด C (ปานกลาง)' },
            'D': { bg: 'rgba(249, 115, 22, 0.18)', border: '#ea580c', text: '#fb923c', label: 'เกรด D (ผ่านเกณฑ์)' }
        };
        const curGrade = gradeColors[grade] || gradeColors['A'];

        ctx.save();
        // Pill background
        const pillWidth = 560;
        const pillHeight = 56;
        ctx.fillStyle = curGrade.bg;
        ctx.strokeStyle = curGrade.border;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(width / 2 - pillWidth / 2, badgeY - pillHeight / 2, pillWidth, pillHeight, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '700 22px "Sarabun", sans-serif';
        ctx.fillStyle = curGrade.text;
        ctx.fillText(`ผลการประเมิน: ได้คะแนน ${score} / ${total} ข้อ  •  ${curGrade.label}`, width / 2, badgeY);
        ctx.restore();

        // 10. Footer Section (Left: Instructor Signature | Center: Seal | Right: Student Info & Timestamp)
        const footerBaseY = 780;

        // --- LEFT SIDE: Course Instructor Signature ---
        ctx.textAlign = 'left';
        // Signature Line
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(110, footerBaseY + 60);
        ctx.lineTo(390, footerBaseY + 60);
        ctx.stroke();

        // Stylized Signature Graphic
        ctx.save();
        ctx.font = 'italic 700 26px "Sarabun", cursive, sans-serif';
        ctx.fillStyle = '#67e8f9';
        ctx.fillText('อนุสรณ์ ยอดใจเพ็ชร', 150, footerBaseY + 40);
        ctx.restore();

        // Instructor Name & Title
        ctx.font = '700 18px "Sarabun", sans-serif';
        ctx.fillStyle = '#f1f5f9';
        ctx.fillText('อาจารย์อนุสรณ์ ยอดใจเพ็ชร', 150, footerBaseY + 86);

        ctx.font = '400 15px "Sarabun", sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('อาจารย์ประจำรายวิชา ENGEE160', 150, footerBaseY + 112);
        ctx.fillText('สาขาวิชาวิศวกรรมไฟฟ้า มทร.ล้านนา เชียงราย', 150, footerBaseY + 134);

        // --- CENTER: Official Digital Achievement Seal ---
        ctx.save();
        const sealX = width / 2;
        const sealY = footerBaseY + 70;
        ctx.beginPath();
        ctx.arc(sealX, sealY, 48, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.12)';
        ctx.fill();
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Inner dashed circle
        ctx.beginPath();
        ctx.arc(sealX, sealY, 42, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.textAlign = 'center';
        ctx.font = '700 11px sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('ENGEE160', sealX, sealY - 14);
        ctx.font = '700 18px sans-serif';
        ctx.fillText('★ VERIFIED ★', sealX, sealY + 6);
        ctx.font = '600 10px sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('RMUTL CR', sealX, sealY + 24);
        ctx.restore();

        // --- RIGHT SIDE (ตามโจทย์: มีรายละเอียดชื่อ และวันที่+เวลา การได้ใบประกาศที่มุมขวา) ---
        ctx.save();
        ctx.textAlign = 'right';

        // Right bounding box for clean presentation
        const rightBoxX = width - 110;

        ctx.font = '600 15px "Sarabun", sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('ข้อมูลการออกใบประกาศนียบัตรดิจิทัล', rightBoxX, footerBaseY + 20);

        ctx.font = '700 17px "Sarabun", sans-serif';
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(`ผู้สำเร็จการประเมิน: ${studentName}`, rightBoxX, footerBaseY + 48);

        ctx.font = '500 16px "Sarabun", sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText(`วันที่สอบผ่าน: ${dateStr}`, rightBoxX, footerBaseY + 76);

        ctx.font = '500 16px "Sarabun", sans-serif';
        ctx.fillStyle = '#34d399';
        ctx.fillText(`เวลาที่บันทึกผล: ${timeStr}`, rightBoxX, footerBaseY + 104);

        ctx.font = '400 13px monospace';
        ctx.fillStyle = '#64748b';
        ctx.fillText(`รหัสรับรอง (ID): ${certId}`, rightBoxX, footerBaseY + 130);
        ctx.restore();
    },

    /**
     * Downloads the certificate canvas as a PNG file.
     * @param {HTMLCanvasElement} canvas
     * @param {string} filename
     */
    downloadPNG(canvas, filename) {
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = filename || `Certificate_ENGEE160_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// Export to window
if (typeof window !== 'undefined') {
    window.CertificateEngine = CertificateEngine;
}
