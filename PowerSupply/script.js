/**
 * Power Supply Interactive Learning Module — ENGEE160 Electronics
 * Comprehensive Theory, IEEE/IEC Standard Schematics & Real-Time Animated Virtual Labs
 * Topics:
 * 1. overview: ภาพรวมระบบแหล่งจ่ายไฟ 4 ขั้นตอน (Transformer, Rectifier, Filter, Regulator)
 * 2. rectifier: วงจรเรียงกระแส (Half-Wave, Center-Tap Full-Wave & Bridge Rectifier)
 * 3. filter: วงจรกรองแรงดันกระเพื่อม (Capacitor Filter, Ripple Voltage & Surge Current)
 * 4. linear-reg: วงจรควบคุมแรงดันเชิงเส้น (Zener, LM78xx/79xx, LM317 & Thermal Dissipation)
 * 5. smps: แหล่งจ่ายไฟแบบสวิตชิ่ง (SMPS: Buck, Boost & PWM Duty Cycle)
 * 6. protection: การเปรียบเทียบ Linear vs SMPS และวงจรป้องกัน (OVP Crowbar, OCP, Reverse Polarity)
 * 7. quiz: แบบทดสอบวัดผล 10 ข้อ จากคลัง 30 ข้อ พร้อมใบประกาศนียบัตร
 */

const topics = {
    'overview': {
        title: 'ภาพรวมระบบแหล่งจ่ายไฟกระแสตรง 4 ขั้นตอน (DC Power Supply Overview)',
        desc: `อุปกรณ์อิเล็กทรอนิกส์เกือบทุกชนิดต้องการ <b>แรงดันไฟตรงที่นิ่งและสะอาด (Regulated DC Voltage)</b> ในขณะที่ไฟบ้านเป็นไฟฟ้ากระแสสลับความถี่ต่ำ (<span class="math-badge">220\\text{ V}_{\\text{rms}},\\ 50\\text{ Hz}</span>) ระบบแหล่งจ่ายไฟเชิงเส้นจึงต้องทำงานต่อเนื่องเป็น <b>4 ขั้นตอนหลัก</b>:<br><br>
        1. <b>หม้อแปลงไฟฟ้า (Transformer):</b> ลดระดับแรงดัน AC ลงให้เหมาะสมและแยกกราวด์ทางไฟฟ้าเพื่อความปลอดภัย (Galvanic Isolation)<br>
        2. <b>วงจรเรียงกระแส (Rectifier):</b> ใช้ไดโอดแปลงไฟฟ้าสลับ 2 ทิศทางให้เป็นไฟฟ้ากระแสตรงแบบมีคลื่นกระเพื่อม (Pulsating DC)<br>
        3. <b>วงจรกรองสัญญาณ (Filter):</b> ใช้ตัวเก็บประจุค่าสูงกักเก็บประจุและคายประจุเพื่อลดระลอกคลื่นกระเพื่อม (Ripple Voltage)<br>
        4. <b>วงจรควบคุมแรงดัน (Voltage Regulator):</b> รักษาแรงดันขาออก $V_{out}$ ให้คงที่แม่นยำ แม้แรงดันไฟบ้านหรือกระแสโหลดจะเปลี่ยนแปลง`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📐 ดัชนีชี้วัดสมรรถนะของแหล่งจ่ายไฟ (Power Supply Metrics)</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.2rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #38bdf8; padding: 0.9rem; border-radius: 6px; line-height: 1.8;">
                    <b style="color: #38bdf8;">Load Regulation (%LR):</b><br>
                    วัดการตกของแรงดันเมื่อจ่ายโหลดเต็มพิกัดเทียบกับไม่มีโหลด:<br>
                    <span class="math-badge" style="margin-top: 0.4rem;">\\%LR = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\times 100\\%</span><br>
                    ค่าที่ดีควรต่ำกว่า <b>0.1% ถึง 1%</b>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #4ade80; padding: 0.9rem; border-radius: 6px; line-height: 1.8;">
                    <b style="color: #4ade80;">Line Regulation:</b><br>
                    วัดการเปลี่ยนแปลงของ $V_{out}$ เมื่อไฟบ้านขาเข้าเปลี่ยน:<br>
                    <span class="math-badge" style="margin-top: 0.4rem;">\\%\\text{Line Reg} = \\frac{\\Delta V_{out} / V_{out}}{\\Delta V_{in} / V_{in}} \\times 100\\%</span><br>
                    ช่วยยืนยันว่าไฟตก/ไฟเกินไม่กระทบวงจรดิจิทัล
                </div>
            </div>
            <div style="background: rgba(249, 115, 22, 0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚡ <b>ความสัมพันธ์ระหว่าง $V_{rms}$ และ $V_p$ ของหม้อแปลง:</b><br>
                หม้อแปลง 220V เป็น 9V AC หมายถึงแรงดัน RMS ($V_{rms} = 9\\text{ V}$) แต่แรงดันยอดที่แท้จริงคือ
                <span class="math-badge">V_p = \\sqrt{2} \\times V_{rms} \\approx 1.414 \\times 9 = 12.73\\text{ V}</span>
                ซึ่งเป็นแรงดันสูงสุดที่จะถูกส่งไปประจุลงตัวเก็บประจุในขั้นตอนถัดไป!
            </div>
        `,
        controls: true
    },
    'rectifier': {
        title: 'วงจรเรียงกระแส (Half-Wave, Center-Tap Full-Wave & Bridge Rectifier)',
        desc: `<b>วงจรเรียงกระแส (Rectifier)</b> ทำหน้าที่แปลงไฟฟ้ากระแสสลับ (AC) ให้ไหลผ่านโหลด $R_L$ ในทิศทางเดียว (Unidirectional DC) โดยมีโครงสร้างมาตรฐาน 3 แบบ:<br><br>
        1. <b>Half-Wave Rectifier (ครึ่งคลื่น):</b> ใช้ไดโอด 1 ตัว ปล่อยผ่านเฉพาะซีกบวก ความถี่เอาต์พุต $f_{out} = f_{in} = 50\\text{ Hz}$ ค่าเฉลี่ยต่ำ <span class="math-badge">V_{DC} = \\frac{V_{p(out)}}{\\pi} \\approx 0.318\\,V_{p(out)}</span><br>
        2. <b>Center-Tap Full-Wave (เต็มคลื่นแบบหม้อแปลงจุดกึ่งกลาง):</b> ใช้ไดโอด 2 ตัว สลับกันนำกระแสคนละครึ่งคาบ ได้ $f_{out} = 2f_{in} = 100\\text{ Hz}$ แต่ไดโอดต้องทนแรงดันย้อนกลับสูงถึง <span class="math-badge">PIV = 2\\,V_p</span><br>
        3. <b>Bridge Rectifier (เต็มคลื่นแบบบริดจ์):</b> นิยมใช้สูงสุด! ใช้ไดโอด 4 ตัว ไม่ต้องใช้หม้อแปลง Center-Tap ไดโอดทน <span class="math-badge">PIV = V_p</span> แต่เสียแรงดันตกคร่อมไดโอด 2 ตัว (<span class="math-badge">2 \\times 0.7\\text{V} = 1.4\\text{V}</span>)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 ตารางเปรียบเทียบวงจรเรียงกระแสทั้ง 3 รูปแบบ (อินพุต 50 Hz)</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.2rem;">
                <thead>
                    <tr>
                        <th style="text-align: left;">พารามิเตอร์ทางวิศวกรรม</th>
                        <th style="text-align: center;">Half-Wave</th>
                        <th style="text-align: center;">Center-Tap Full-Wave</th>
                        <th style="text-align: center;">Bridge Rectifier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>จำนวนไดโอดที่ใช้</b></td>
                        <td style="text-align: center;">1 ตัว</td>
                        <td style="text-align: center;">2 ตัว (ต้องมีขด Center-Tap)</td>
                        <td style="text-align: center; color: #4ade80; font-weight: bold;">4 ตัว (หม้อแปลงธรรมดา)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td><b>แรงดันยอดเอาต์พุต ($V_{p(out)}$)</b></td>
                        <td style="text-align: center;">$V_{p(in)} - 0.7\\text{V}$</td>
                        <td style="text-align: center;">$V_{p(in)} - 0.7\\text{V}$ (ต่อซีก)</td>
                        <td style="text-align: center; color: #fbbf24;">$V_{p(in)} - 1.4\\text{V}$</td>
                    </tr>
                    <tr>
                        <td><b>แรงดันไฟตรงเฉลี่ย ($V_{DC}$)</b></td>
                        <td style="text-align: center;">$0.318\\,V_{p(out)}$</td>
                        <td style="text-align: center;">$0.637\\,V_{p(out)}$</td>
                        <td style="text-align: center; color: #4ade80; font-weight: bold;">$0.637\\,V_{p(out)}$</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td><b>ความถี่ระลอกคลื่น ($f_{out}$)</b></td>
                        <td style="text-align: center;">$50\\text{ Hz}\\ (f_{in})$</td>
                        <td style="text-align: center; color: #38bdf8;">$100\\text{ Hz}\\ (2f_{in})$</td>
                        <td style="text-align: center; color: #38bdf8;">$100\\text{ Hz}\\ (2f_{in})$</td>
                    </tr>
                    <tr>
                        <td><b>พิกัดแรงดันย้อนกลับ (PIV)</b></td>
                        <td style="text-align: center;">$V_{p(in)}$</td>
                        <td style="text-align: center; color: #f87171;">$2\\,V_{p(in)}$</td>
                        <td style="text-align: center; color: #4ade80;">$V_{p(in)}$</td>
                    </tr>
                </tbody>
            </table>
            <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid var(--cyan); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                💡 <b>เหตุใด Bridge Rectifier จึงเป็นมาตรฐานอุตสาหกรรม?</b><br>
                1) ใช้ขดลวดหม้อแปลงได้อย่างคุ้มค่าเต็มที่ 100% (Transformer Utilization Factor สูง) ไม่ต้องมีขด Center-Tap<br>
                2) ไดโอดแต่ละตัวรับแรงดันย้อนกลับ PIV น้อยกว่าแบบ Center-Tap ถึงครึ่งหนึ่ง และมีไอซีรวมแบบ Bridge สำเร็จรูป 4 ขาใช้งานสะดวก
            </div>
        `,
        controls: true
    },
    'filter': {
        title: 'วงจรกรองแรงดันกระเพื่อมและกระแสกระชาก (Capacitor Filter & Ripple)',
        desc: `แรงดันที่ได้จากวงจรเรียงกระแสยังแกว่งตกลงถึง 0V ทุกครึ่งคาบ จึงต้องต่อ <b>ตัวเก็บประจุกรองกระแส (Filter Capacitor: $C$)</b> ขนานกับโหลด $R_L$ เพื่อกักเก็บประจุไว้ที่ยอดคลื่นและคายประจุเลี้ยงโหลดอย่างต่อเนื่อง:<br><br>
        <b>📐 สมการออกแบบตัวเก็บประจุกรองกระแส:</b><br>
        • <b>แรงดันกระเพื่อมยอด-ถึง-ยอด (Peak-to-Peak Ripple):</b> <span class="math-block">V_{r(pp)} \\approx \\frac{I_{DC}}{f_r \\cdot C}</span>
        • <b>แรงดันไฟตรงเฉลี่ยหลังกรอง:</b> <span class="math-badge">V_{DC} \\approx V_{p(out)} - \\frac{V_{r(pp)}}{2}</span><br>
        • <b>ตัวประกอบกระเพื่อม (Ripple Factor):</b> <span class="math-badge">r = \\frac{V_{r(rms)}}{V_{DC}} = \\frac{V_{r(pp)}}{2\\sqrt{3}\\,V_{DC}} \\approx \\frac{0.289\\,V_{r(pp)}}{V_{DC}}</span><br>
        โดย $f_r = 50\\text{ Hz}$ สำหรับ Half-Wave และ $f_r = 100\\text{ Hz}$ สำหรับ Full-Wave/Bridge`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚠️ ข้อควรระวังเรื่องมุมนำกระแสแคบและกระแสกระชาก (Diode Surge Current)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                1. <b>ช่วงเวลาประจุไฟที่สั้นมาก (Narrow Conduction Angle):</b> ไดโอดจะนำกระแสเฉพาะช่วงสั้นๆ ที่แรงดันหม้อแปลงสูงกว่าแรงดันค้างบนตัวเก็บประจุ $C$ เท่านั้น ยิ่ง $C$ มีค่าใหญ่ ช่วงเวลาที่ไดโอดนำกระแสยิ่งแคบลง แต่ต้องส่งประจุทั้งหมดเข้า $C$ ให้ทันเวลา ทำให้เกิด <b>ยอดพัลส์กระแสไดโอด ($I_{peak}$) สูงกว่ากระแสโหลด $I_{DC}$ ถึง 5–15 เท่า!</b><br>
                2. <b>กระแสกระชากขณะเปิดเครื่อง (Inrush Current):</b> ขณะเปิดสวิตช์ครั้งแรก ตัวเก็บประจุยังไม่มีประจุ ($V_C = 0\\text{V}$) เปรียบเสมือนการลัดวงจรชั่วขณะ ไดโอดต้องทนค่า $I_{FSM}$ (Non-repetitive Peak Surge Current) ได้สูงพอ หรืออาจใส่ NTC Thermistor จำกัดกระแส
            </p>
            <div style="background: rgba(251, 191, 36, 0.08); border-left: 4px solid var(--yellow); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                🎯 <b>เกณฑ์การเลือกค่า $C$ ในทางปฏิบัติ:</b><br>
                โดยทั่วไปวิศวกรจะเลือกค่า $C$ ให้แรงดันกระเพื่อม $V_{r(pp)}$ ต่ำกว่า <b>10% ของ $V_{DC}$</b> (หรือต่ำกว่า 1–2 $V_{pp}$) และต้องตรวจเช็กว่าแรงดันต่ำสุดของระลอกคลื่น (<span class="math-badge">V_{min} = V_{p(out)} - V_{r(pp)}</span>) ยังสูงกว่าเกณฑ์ Dropout ของ Regulator ขั้นถัดไปเสมอ
            </div>
        `,
        controls: true
    },
    'linear-reg': {
        title: 'วงจรควบคุมแรงดันเชิงเส้น (Zener, LM78xx/79xx & LM317 Regulator)',
        desc: `<b>วงจรควบคุมแรงดันเชิงเส้น (Linear Voltage Regulator)</b> ทำหน้าที่ตัดแต่งแรงดันส่วนเกินและระลอกคลื่น Ripple ทิ้งไปเพื่อให้ได้แรงดันเอาต์พุต $V_{out}$ ที่นิ่งสนิท:<br><br>
        1. <b>Zener Shunt Regulator:</b> ใช้ Zener Diode ต่อขนานกับโหลด เหมาะกับกระแสต่ำ (< 50 mA) โดยมีตัวต้านทาน $R_S$ จำกัดกระแส<br>
        2. <b>ไอซีคงที่ตระกูล LM78xx (+) และ LM79xx (−):</b> ใช้งานง่าย 3 ขา (In, GND, Out) เช่น LM7805 (+5V), LM7812 (+12V), LM7912 (-12V) มีระบบป้องกันกระแสเกินและความร้อนในตัว<br>
        3. <b>ไอซีปรับค่าได้ LM317:</b> รักษาแรงดันอ้างอิง $V_{ref} = 1.25\\text{ V}$ ระหว่างขา Out และ Adj กำหนดแรงดันเอาต์พุตได้ตั้งแต่ 1.25V ถึง 37V ด้วยสมการ:<br>
        <span class="math-block">V_{out} = 1.25 \\left( 1 + \\frac{R_2}{R_1} \\right) + I_{ADJ} R_2 \\approx 1.25 \\left( 1 + \\frac{R_2}{R_1} \\right)</span>`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔥 แรงดันตกคร่อมต่ำสุด (Dropout Voltage) และความร้อนสะสม ($P_D$)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>Dropout Voltage ($V_{DO}$):</b> ไอซีตระกูล LM78xx และ LM317 ต้องมีแรงดันอินพุตสูงกว่าเอาต์พุตอย่างน้อยประมาณ <b>2.0 V</b> (<span class="math-badge">V_{in(min)} \\ge V_{out} + 2\\text{V}</span>) มิฉะนั้นทรานซิสเตอร์ส่งผ่านภายในจะหยุดควบคุม ทำให้ Ripple ทะลุออกไปยังเอาต์พุต (หากต้องการ $V_{DO}$ ต่ำกว่า 0.3V–0.5V ต้องใช้ไอซีกลุ่ม <b>LDO: Low-Dropout Regulator</b> เช่น AMS1117)<br>
                • <b>กำลังสูญเสียเป็นความร้อน:</b> <span class="math-block">P_D = (V_{in} - V_{out}) \\times I_L</span>
                • <b>ประสิทธิภาพเชิงเส้น:</b> <span class="math-badge">\\eta \\approx \\frac{V_{out}}{V_{in}} \\times 100\\%</span> (ยิ่ง $V_{in}$ สูงกว่า $V_{out}$ มาก ยิ่งร้อนจัดและประสิทธิภาพต่ำ!)
            </p>
            <div style="background: rgba(248, 113, 113, 0.08); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚠️ <b>กฎทองการระบายความร้อนตัวถัง TO-220 (LM7805 / LM317):</b><br>
                ตัวถัง TO-220 เปล่าๆ หากไม่ติดแผ่นระบายความร้อน (Heatsink) จะทนกำลังงานได้เพียงประมาณ <b>1.5 W – 2 W</b> เท่านั้น หาก $P_D > 2\\text{ W}$ ต้องติด Heatsink อลูมิเนียมเสมอ มิฉะนั้นระบบ Thermal Shutdown จะตัดไฟอัตโนมัติ
            </div>
        `,
        controls: true
    },
    'smps': {
        title: 'แหล่งจ่ายไฟแบบสวิตชิ่ง (SMPS: Buck, Boost & PWM Control)',
        desc: `<b>แหล่งจ่ายไฟแบบสวิตชิ่ง (Switching Mode Power Supply: SMPS)</b> แก้ปัญหาความร้อนและขนาดใหญ่ของ Linear Regulator โดยใช้สวิตช์อิเล็กทรอนิกส์ (MOSFET/BJT) เปิด-ปิดด้วยความถี่สูงระดับ <b>50 kHz – 1 MHz+</b> ผ่านสัญญาณ <b>PWM (Pulse Width Modulation)</b> เพื่อส่งผ่านพลังงานผ่านตัวเหนี่ยวนำ $L$ และตัวเก็บประจุ $C$:<br><br>
        1. <b>Buck Converter (วงจรลดแรงดัน Step-Down):</b> แรงดันเอาต์พุตต่ำกว่าอินพุตเสมอในโหมดนำกระแสต่อเนื่อง (CCM):<br>
        <span class="math-block">V_{out} = D \\cdot V_{in} \\quad \\left( \\text{โดย } D = \\frac{t_{on}}{T_s} \\in (0, 1) \\right)</span>
        2. <b>Boost Converter (วงจรเพิ่มแรงดัน Step-Up):</b> อาศัยแรงดันเหนี่ยวนำจากขดลวด $L$ มาบวกเสริมกับ $V_{in}$ ทำให้เอาต์พุตสูงกว่าอินพุต:<br>
        <span class="math-block">V_{out} = \\frac{V_{in}}{1 - D}</span>`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚡ ทำไม SMPS จึงมีประสิทธิภาพสูงถึง 85% – 95%?</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>หลักการสูญเสียน้อยที่สุดของสวิตช์:</b> ในขณะสวิตช์ <b>ON (อิ่มตัว)</b> แรงดันตกคร่อม $V_{DS} \\approx 0$ ส่วนในขณะสวิตช์ <b>OFF (ตัดขาด)</b> กระแส $I_D = 0$ ดังนั้นกำลังสูญเสีย $P = V \\times I \\approx 0$ ทั้งสองสถานะ!<br>
                • <b>สมดุลโวลต์-วินาทีของตัวเหนี่ยวนำ (Inductor Volt-Second Balance):</b> ในสภาวะคงตัว แรงดันเฉลี่ยตกคร่อมตัวเหนี่ยวนำ $L$ ตลอด 1 คาบสวิตชิ่งต้องเป็นศูนย์ (<span class="math-badge">\\int_0^{T_s} v_L(t)\\,dt = 0</span>) ซึ่งใช้พิสูจน์สมการ Buck และ Boost ได้โดยตรง<br>
                • <b>ขนาดกะทัดรัด:</b> เพราะทำงานที่ความถี่สูงหลายแสนเฮิรตซ์ (แทน 50 Hz) ค่า $L$ และ $C$ ที่ต้องใช้กักเก็บพลังงานจึงเล็กลงหลายร้อยเท่า!
            </p>
            <div style="background: rgba(74, 222, 128, 0.08); border-left: 4px solid var(--green); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                💎 <b>ข้อควรรู้สำหรับ Buck-Boost และ Flyback:</b><br>
                หากต้องการแปลงแรงดันทั้งขึ้นและลงในวงจรเดียว สามารถใช้โครงสร้าง <b>Buck-Boost</b> (<span class="math-badge">V_{out} = -V_{in}\\frac{D}{1-D}</span>) หรือในอะแดปเตอร์ไฟบ้าน 220V ที่ต้องการหม้อแปลงแยกกราวด์ขนาดจิ๋ว นิยมใช้วงจร <b>Flyback Converter</b> ซึ่งเป็นหัวใจของอะแดปเตอร์ชาร์จมือถือและโน้ตบุ๊กยุคใหม่ (GaN Charger)
            </div>
        `,
        controls: true
    },
    'protection': {
        title: 'เปรียบเทียบ Linear vs SMPS และระบบป้องกันแหล่งจ่ายไฟ (Protection Systems)',
        desc: `การออกแบบแหล่งจ่ายไฟระดับวิศวกรรมต้องเลือกสถาปัตยกรรมให้เหมาะกับงาน และติดตั้งระบบป้องกันความเสียหายทั้งฝั่งแหล่งจ่ายและฝั่งโหลด (เช่น ไมโครคอนโทรลเลอร์ราคาแพง):<br><br>
        • <b>Over-Current / Short-Circuit Protection (OCP):</b> ใช้ฟิวส์ (Fuse / Resettable PTC Polyfuse) หรือวงจรจำกัดกระแส (Current Limiting / Foldback)<br>
        • <b>Over-Voltage Protection (OVP - Crowbar):</b> ใช้ Zener Diode ตรวจจับแรงดันเกินแล้วทริก <b>SCR</b> ให้ช็อตขั้วบวกลงกราวด์ทันทีเพื่อให้ฟิวส์ขาดตัดวงจรภายในไมโครวินาที<br>
        • <b>Reverse Polarity Protection:</b> ป้องกันการต่อแบตเตอรี่กลับขั้วด้วยไดโอดอนุกรม (สูญเสีย $0.7\\text{V}$) หรือ <b>MOSFET</b> ที่สูญเสียพลังงานต่ำมาก ($R_{DS(on)}$ หลักมิลลิโอห์ม)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 ตารางเปรียบเทียบ Linear Power Supply vs SMPS</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.2rem;">
                <thead>
                    <tr>
                        <th style="text-align: left;">หัวข้อเปรียบเทียบ</th>
                        <th style="text-align: center;">Linear Power Supply</th>
                        <th style="text-align: center;">Switching Power Supply (SMPS)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>ประสิทธิภาพ (Efficiency)</b></td>
                        <td style="text-align: center; color: #f87171;">ต่ำ (30% – 60%) สูญเสียเป็นความร้อนมาก</td>
                        <td style="text-align: center; color: #4ade80; font-weight: bold;">สูงมาก (85% – 95%+)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td><b>ขนาดและน้ำหนัก (ที่กำลังเท่ากัน)</b></td>
                        <td style="text-align: center;">ใหญ่และหนัก (หม้อแปลง 50Hz + Heatsink)</td>
                        <td style="text-align: center; color: #4ade80;">เล็กและเบามาก (ความถี่สูง kHz–MHz)</td>
                    </tr>
                    <tr>
                        <td><b>สัญญาณรบกวน / Ripple / EMI</b></td>
                        <td style="text-align: center; color: #4ade80; font-weight: bold;">ต่ำมาก! ไฟสะอาด นิ่งสนิท (Low Noise)</td>
                        <td style="text-align: center; color: #fbbf24;">มี Switching Ripple และ EMI ต้องกรองเพิ่ม</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td><b>การแปลงแรงดัน</b></td>
                        <td style="text-align: center;">ลดแรงดันลงได้เท่านั้น ($V_{in} > V_{out}$)</td>
                        <td style="text-align: center; color: #38bdf8;">ทำได้ทั้งลด (Buck) เพิ่ม (Boost) และกลับขั้ว</td>
                    </tr>
                    <tr>
                        <td><b>งานที่เหมาะสมที่สุด</b></td>
                        <td style="text-align: center;">เครื่องเสียง Hi-Fi, เซนเซอร์อนาล็อก, RF</td>
                        <td style="text-align: center;">คอมพิวเตอร์, มือถือ, EV, ระบบกำลังสูง</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: true
    },
    'quiz': {
        title: '📝 แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ (Quiz & Certification)',
        desc: 'แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ เรื่อง โมดูลแหล่งจ่ายไฟ (สุ่ม 10 ข้อจากคลังข้อสอบ 30 ข้อ สลับตัวเลือกทุกข้อ พร้อมระบบออกใบประกาศนียบัตรดิจิทัลมาตรฐาน)',
        extra: `
            <div id="quiz-container" style="background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            </div>
        `,
        controls: false
    }
};

let currentTopic = 'overview';

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    loadTopic('overview');
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '<div class="sidebar-label">📚 หัวข้อบทเรียน Power Supply</div>';
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

    if (topicKey === 'overview') {
        initOverviewSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'rectifier') {
        initRectifierSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'filter') {
        initFilterSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'linear-reg') {
        initLinearRegSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'smps') {
        initSMPSSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'protection') {
        initProtectionSimulator(canvasContainer, controlsContainer);
    }
}

function renderQuiz() {
    if (typeof QuizEngine !== 'undefined' && typeof powerSupplyQuizQuestions !== 'undefined') {
        QuizEngine.init({
            containerId: 'quiz-container',
            lessonTitle: 'โมดูลแหล่งจ่ายไฟ (Power Supply Systems)',
            questionBank: powerSupplyQuizQuestions,
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
   HELPERS: ANIMATED CURRENT DOTS & IEEE COMPONENTS
   ========================================================================= */
function drawFlowDots(pathD, count, durSec, color, radius = 3.2) {
    if (!durSec || durSec <= 0 || count <= 0) return '';
    let out = '';
    for (let i = 0; i < count; i++) {
        const begin = (-i * (durSec / count)).toFixed(2);
        out += `
            <circle r="${radius}" fill="${color}" opacity="0.95">
                <animateMotion dur="${durSec.toFixed(2)}s" begin="${begin}s" repeatCount="indefinite" path="${pathD}"/>
            </circle>
        `;
    }
    return out;
}

function drawDiodeH(x, y, dir = 1, active = true, colorOn = '#4ade80') {
    // Horizontal diode centered at (x,y), length 24px (x-12 to x+12)
    const stroke = active ? colorOn : '#475569';
    const fill = active ? colorOn : '#1e293b';
    if (dir >= 0) {
        return `
            <polygon points="${x - 10},${y - 9} ${x - 10},${y + 9} ${x + 9},${y}" fill="${fill}" fill-opacity="${active ? 0.35 : 0.6}" stroke="${stroke}" stroke-width="2"/>
            <line x1="${x + 9}" y1="${y - 9}" x2="${x + 9}" y2="${y + 9}" stroke="${stroke}" stroke-width="2.4"/>
        `;
    }
    return `
        <polygon points="${x + 10},${y - 9} ${x + 10},${y + 9} ${x - 9},${y}" fill="${fill}" fill-opacity="${active ? 0.35 : 0.6}" stroke="${stroke}" stroke-width="2"/>
        <line x1="${x - 9}" y1="${y - 9}" x2="${x - 9}" y2="${y + 9}" stroke="${stroke}" stroke-width="2.4"/>
    `;
}

/* =========================================================================
   1. OVERVIEW SIMULATOR: 4-Stage Pipeline & Live Signal Probe
   ========================================================================= */
function initOverviewSimulator(canvas, controls) {
    let stage = 4; // 1=Transformer AC, 2=Rectified DC, 3=Filtered DC, 4=Regulated 5V
    let cap_uF = 1000;
    let load_mA = 300;
    let animId = null;
    let phase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill" id="btn-ov-s1">1. Transformer</button>
            <button class="toggle-pill" id="btn-ov-s2">2. Rectifier</button>
            <button class="toggle-pill" id="btn-ov-s3">3. Filter (C)</button>
            <button class="toggle-pill active" id="btn-ov-s4">4. Regulator (5V)</button>
        </div>
        <div class="ctrl-group">
            <label>C:</label>
            <input type="range" id="sl-ov-c" min="100" max="3300" step="100" value="${cap_uF}">
            <span class="val-badge" id="val-ov-c">${cap_uF} µF</span>
        </div>
        <div class="ctrl-group">
            <label>โหลด ($I_L$):</label>
            <input type="range" id="sl-ov-il" min="50" max="800" step="50" value="${load_mA}">
            <span class="val-badge" id="val-ov-il">${load_mA} mA</span>
        </div>
    `;
    renderMath();

    const btns = [
        document.getElementById('btn-ov-s1'),
        document.getElementById('btn-ov-s2'),
        document.getElementById('btn-ov-s3'),
        document.getElementById('btn-ov-s4')
    ];

    btns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            stage = idx + 1;
            btns.forEach((b, j) => b.classList.toggle('active', j === idx));
            render();
        });
    });

    document.getElementById('sl-ov-c').addEventListener('input', e => {
        cap_uF = parseInt(e.target.value, 10);
        document.getElementById('val-ov-c').innerText = `${cap_uF} µF`;
        render();
    });

    document.getElementById('sl-ov-il').addEventListener('input', e => {
        load_mA = parseInt(e.target.value, 10);
        document.getElementById('val-ov-il').innerText = `${load_mA} mA`;
        render();
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        // 9Vrms secondary -> Vp = 12.73V -> after Bridge (1.4V) Vp_rect = 11.33V
        const Vp_sec = 12.73;
        const Vp_rect = Vp_sec - 1.4; // 11.33V
        const C_F = cap_uF * 1e-6;
        const I_A = load_mA / 1000;
        const Vr_pp = Math.min(Vp_rect, I_A / (100 * C_F));
        const V_min_filt = Vp_rect - Vr_pp;
        const V_dc_filt = Vp_rect - Vr_pp / 2;
        const isDropout = V_min_filt < 7.0; // LM7805 needs >= 7.0V
        const V_reg_out = isDropout ? Math.max(0, V_min_filt - 2.0) : 5.00;
        const effPct = ((5.0 / Math.max(5.5, V_dc_filt)) * 100);

        const stageNames = [
            '1) หม้อแปลงลดแรงดัน (AC 9Vrms / ±12.7V)',
            '2) วงจรเรียงกระแส Bridge (Pulsating DC 100Hz)',
            '3) ตัวเก็บประจุกรองกระแส (Filtered DC + Ripple)',
            '4) ไอซีควบคุมแรงดัน LM7805 (Pure Regulated +5V)'
        ];
        const stageColors = ['#38bdf8', '#fbbf24', '#c084fc', isDropout ? '#f87171' : '#4ade80'];
        const activeColor = stageColors[stage - 1];

        const blocks = [
            { id: 1, x: 34, y: 82, w: 190, h: 92, title: '1. Transformer', sub: '220V ➔ 9V AC', val: 'Vp = 12.7 V', col: '#38bdf8' },
            { id: 2, x: 266, y: 82, w: 190, h: 92, title: '2. Bridge Rectifier', sub: 'AC ➔ Pulsating DC', val: 'Vp(out) = 11.3 V', col: '#fbbf24' },
            { id: 3, x: 266, y: 222, w: 190, h: 92, title: '3. Filter Capacitor', sub: `C = ${cap_uF} µF`, val: `Vr = ${Vr_pp.toFixed(2)} Vpp`, col: '#c084fc' },
            { id: 4, x: 34, y: 222, w: 190, h: 92, title: '4. LM7805 Regulator', sub: 'รักษาระดับคงที่', val: `Vout = ${isDropout ? 'Dropout!' : '5.00 V'}`, col: isDropout ? '#f87171' : '#4ade80' }
        ];

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- LEFT PANEL: 4-STAGE POWER PIPELINE -->
                <rect x="16" y="16" width="460" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="246" y="42" fill="#fb923c" font-size="14" font-weight="700" text-anchor="middle">บล็อกไดอะแกรมแหล่งจ่ายไฟ DC 4 ขั้นตอน</text>
                <text x="246" y="62" fill="#94a3b8" font-size="11.5" text-anchor="middle">คลิกเลือกขั้นตอนด้านบนเพื่อส่องรูปคลื่นสัญญาณจริงในแต่ละจุด</text>

                <!-- Pipeline Flow Wires -->
                <line x1="224" y1="128" x2="266" y2="128" stroke="#475569" stroke-width="3"/>
                <line x1="361" y1="174" x2="361" y2="222" stroke="#475569" stroke-width="3"/>
                <line x1="266" y1="268" x2="224" y2="268" stroke="#475569" stroke-width="3"/>
                ${drawFlowDots('M 224 128 L 266 128', 2, 1.0, '#fbbf24', 3.2)}
                ${drawFlowDots('M 361 174 L 361 222', 2, 1.0, '#c084fc', 3.2)}
                ${drawFlowDots('M 266 268 L 224 268', 2, 1.0, isDropout ? '#f87171' : '#4ade80', 3.2)}

                ${blocks.map(b => {
                    const isSel = stage === b.id;
                    return `
                        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="10"
                              fill="${isSel ? 'rgba(249, 115, 22, 0.14)' : 'rgba(15, 23, 42, 0.88)'}"
                              stroke="${isSel ? b.col : '#334155'}" stroke-width="${isSel ? 2.4 : 1.4}"/>
                        <text x="${b.x + b.w / 2}" y="${b.y + 26}" fill="${b.col}" font-size="13.5" font-weight="700" text-anchor="middle">${b.title}</text>
                        <text x="${b.x + b.w / 2}" y="${b.y + 49}" fill="#cbd5e1" font-size="11.5" text-anchor="middle">${b.sub}</text>
                        <rect x="${b.x + 20}" y="${b.y + 60}" width="${b.w - 40}" height="22" rx="5" fill="rgba(8, 15, 30, 0.85)" stroke="#1e293b"/>
                        <text x="${b.x + b.w / 2}" y="${b.y + 75}" fill="#f1f5f9" font-size="11" font-weight="700" text-anchor="middle">${b.val}</text>
                    `;
                }).join('')}

                <!-- Stage Summary Card -->
                <rect x="34" y="332" width="424" height="78" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="#334155"/>
                <text x="48" y="355" fill="${activeColor}" font-size="12.5" font-weight="700">📡 กำลังวัด: ${stageNames[stage - 1]}</text>
                <text x="48" y="377" fill="#cbd5e1" font-size="11.5">กระแสโหลด: ${load_mA} mA  |  Ripple หลังกรอง: ${Vr_pp.toFixed(2)} Vpp  |  η ≈ ${effPct.toFixed(1)}%</text>
                <text x="48" y="398" fill="${isDropout ? '#f87171' : '#4ade80'}" font-size="11.5" font-weight="700">
                    ${isDropout ? '⚠️ Ripple สูงเกินไป! V_min < 7V เกิด Dropout ที่ขาออก 7805' : '✅ V_min เพียงพอ (≥ 7V): LM7805 จ่ายไฟ +5.00 V นิ่งสมบูรณ์'}
                </text>

                <!-- RIGHT PANEL: LIVE OSCILLOSCOPE & METRICS -->
                <rect x="490" y="16" width="394" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                <text x="687" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">ออสซิลโลสโคปวัดสัญญาณจริง</text>

                <!-- Scope Box with Dedicated Header -->
                <rect x="506" y="56" width="362" height="228" rx="8" fill="#02050c" stroke="#1e293b"/>
                <rect x="506" y="56" width="362" height="26" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="518" y="73" fill="${activeColor}" font-size="11.5" font-weight="700">Probe: Stage ${stage}</text>
                <text x="856" y="73" fill="#cbd5e1" font-size="11" text-anchor="end">f_in = 50 Hz</text>

                <!-- Reference 0V & +5V lines -->
                <line x1="506" y1="184" x2="868" y2="184" stroke="#334155" stroke-dasharray="3,3"/>
                <text x="514" y="180" fill="#64748b" font-size="9.5">0V</text>
                <line x1="506" y1="150" x2="868" y2="150" stroke="rgba(74, 222, 128, 0.28)" stroke-dasharray="2,3"/>
                <text x="860" y="146" fill="#4ade80" font-size="9.5" text-anchor="end">+5V</text>

                <path id="ov-wave-path" d="" fill="none" stroke="${activeColor}" stroke-width="2.6"/>

                <!-- Live Readout Card below Scope -->
                <rect x="506" y="296" width="362" height="114" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
                <text x="520" y="320" fill="#fbbf24" font-size="12.5" font-weight="700">📊 ค่าพารามิเตอร์ที่วัดได้จริง:</text>
                <text x="520" y="344" fill="#cbd5e1" font-size="12">แรงดันเฉลี่ย V_DC (Filter): <tspan fill="#c084fc" font-weight="700">${V_dc_filt.toFixed(2)} V</tspan></text>
                <text x="520" y="368" fill="#cbd5e1" font-size="12">แรงดันต่ำสุดยอดคลื่น V_min: <tspan fill="${isDropout ? '#f87171' : '#38bdf8'}" font-weight="700">${V_min_filt.toFixed(2)} V</tspan></text>
                <text x="520" y="392" fill="#cbd5e1" font-size="12">แรงดันเอาต์พุตสุดท้าย V_out: <tspan fill="${isDropout ? '#f87171' : '#4ade80'}" font-weight="700">${isDropout ? `${V_reg_out.toFixed(2)}V (มี Ripple!)` : '5.00 V (Pure DC)'}</tspan></text>
            </svg>
        `;

        const wavePath = document.getElementById('ov-wave-path');
        let isRunning = true;

        function animOverview() {
            if (!isRunning) return;
            phase += 0.05;

            const x0 = 508;
            const w = 358;
            const y0 = 184; // 0V line (scale: 6.8 px per Volt -> 12.7V = 86px up/down)
            const pxPerV = 6.8;
            let d = '';

            for (let i = 0; i <= w; i += 3) {
                const ang = (i / w) * 4 * Math.PI + phase; // 2 full 50Hz cycles
                const sinVal = Math.sin(ang);
                let v = 0;
                if (stage === 1) {
                    v = sinVal * Vp_sec;
                } else if (stage === 2) {
                    v = Math.max(0, Math.abs(sinVal) * Vp_sec - 1.4);
                } else if (stage === 3) {
                    const rectV = Math.max(0, Math.abs(sinVal) * Vp_sec - 1.4);
                    // Half-cycle sawtooth phase [0, 1)
                    const cycPos = ((ang % Math.PI) + Math.PI) % Math.PI;
                    const sawDrop = (cycPos / Math.PI) * Vr_pp;
                    v = Math.max(rectV, Vp_rect - sawDrop);
                } else {
                    const rectV = Math.max(0, Math.abs(sinVal) * Vp_sec - 1.4);
                    const cycPos = ((ang % Math.PI) + Math.PI) % Math.PI;
                    const sawDrop = (cycPos / Math.PI) * Vr_pp;
                    const filtV = Math.max(rectV, Vp_rect - sawDrop);
                    v = filtV >= 7.0 ? 5.0 : Math.max(0, filtV - 2.0);
                }

                const py = y0 - v * pxPerV;
                d += (i === 0 ? `M ${x0 + i} ${py.toFixed(1)}` : ` L ${x0 + i} ${py.toFixed(1)}`);
            }

            if (wavePath) wavePath.setAttribute('d', d);
            animId = requestAnimationFrame(animOverview);
        }

        animId = requestAnimationFrame(animOverview);
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
   2. RECTIFIER SIMULATOR: Half-Wave, Center-Tap & Bridge Rectifier
   ========================================================================= */
function initRectifierSimulator(canvas, controls) {
    let topo = 'bridge'; // 'half' | 'centertap' | 'bridge'
    let vpIn = 15.0;
    let isPlaying = true;
    let acPhase = 0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill" id="btn-rec-half">Half-Wave (1D)</button>
            <button class="toggle-pill" id="btn-rec-ct">Center-Tap (2D)</button>
            <button class="toggle-pill active" id="btn-rec-br">Bridge Rectifier (4D)</button>
        </div>
        <div class="ctrl-group">
            <label>แรงดันยอดอินพุต ($V_p$):</label>
            <input type="range" id="sl-rec-vp" min="6" max="24" step="1" value="${vpIn}">
            <span class="val-badge" id="val-rec-vp">${vpIn.toFixed(0)} V</span>
        </div>
        <button class="btn-control active" id="btn-rec-play" style="margin-left:auto;">⏸ หยุดชั่วคราว (ดูครึ่งคาบ)</button>
    `;
    renderMath();

    const btnHalf = document.getElementById('btn-rec-half');
    const btnCT = document.getElementById('btn-rec-ct');
    const btnBr = document.getElementById('btn-rec-br');
    const slVp = document.getElementById('sl-rec-vp');
    const btnPlay = document.getElementById('btn-rec-play');

    function setTopo(t) {
        topo = t;
        btnHalf.classList.toggle('active', t === 'half');
        btnCT.classList.toggle('active', t === 'centertap');
        btnBr.classList.toggle('active', t === 'bridge');
        render();
    }

    btnHalf.addEventListener('click', () => setTopo('half'));
    btnCT.addEventListener('click', () => setTopo('centertap'));
    btnBr.addEventListener('click', () => setTopo('bridge'));

    slVp.addEventListener('input', e => {
        vpIn = parseFloat(e.target.value);
        document.getElementById('val-rec-vp').innerText = `${vpIn.toFixed(0)} V`;
        render();
    });

    btnPlay.addEventListener('click', () => {
        isPlaying = !isPlaying;
        btnPlay.innerText = isPlaying ? '⏸ หยุดชั่วคราว (ดูครึ่งคาบ)' : '▶ เล่นต่อ (Play)';
        btnPlay.classList.toggle('active', isPlaying);
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        const diodeDrop = topo === 'bridge' ? 1.4 : 0.7;
        const vpOut = Math.max(0, vpIn - diodeDrop);
        const vDC = topo === 'half' ? (vpOut / Math.PI) : ((2 * vpOut) / Math.PI);
        const piv = topo === 'centertap' ? (2 * vpIn) : vpIn;
        const fOut = topo === 'half' ? 50 : 100;

        let schematicSvg = '';
        if (topo === 'half') {
            schematicSvg = `
                <!-- Half-Wave Schematic -->
                <circle cx="72" cy="180" r="24" fill="#0c1427" stroke="#38bdf8" stroke-width="2"/>
                <path d="M 60 180 Q 66 168 72 180 T 84 180" stroke="#38bdf8" stroke-width="2" fill="none"/>
                <text x="72" y="220" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">AC ${vpIn}Vp</text>

                <line x1="72" y1="156" x2="72" y2="118" stroke="#cbd5e1" stroke-width="2.2"/>
                <line x1="72" y1="118" x2="176" y2="118" stroke="#cbd5e1" stroke-width="2.2"/>
                <g id="hw-d1">${drawDiodeH(190, 118, 1, true, '#4ade80')}</g>
                <text x="190" y="98" fill="#cbd5e1" font-size="11.5" font-weight="700" text-anchor="middle">D₁</text>
                <line x1="204" y1="118" x2="340" y2="118" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Load RL -->
                <line x1="340" y1="118" x2="340" y2="152" stroke="#cbd5e1" stroke-width="2.2"/>
                <rect x="330" y="152" width="20" height="56" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.6"/>
                <text x="360" y="184" fill="#fbbf24" font-size="12" font-weight="700">R_L</text>
                <text x="360" y="200" fill="#4ade80" font-size="11" font-weight="700">+ V_out −</text>
                <line x1="340" y1="208" x2="340" y2="246" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Return wire -->
                <line x1="72" y1="204" x2="72" y2="246" stroke="#cbd5e1" stroke-width="2.2"/>
                <line x1="72" y1="246" x2="340" y2="246" stroke="#cbd5e1" stroke-width="2.2"/>

                <g id="rec-flow-pos">${drawFlowDots('M 72 156 L 72 118 L 340 118 L 340 246 L 72 246 L 72 204', 4, 1.5, '#4ade80', 3.4)}</g>
                <g id="rec-flow-neg" style="display:none;"></g>
            `;
        } else if (topo === 'centertap') {
            schematicSvg = `
                <!-- Center-Tap Transformer Secondary -->
                <rect x="44" y="96" width="54" height="172" rx="6" fill="rgba(56,189,248,0.06)" stroke="#334155"/>
                <path d="M 86 106 Q 98 114 86 122 Q 98 130 86 138 Q 98 146 86 154 Q 98 162 86 170" stroke="#38bdf8" stroke-width="2" fill="none"/>
                <path d="M 86 194 Q 98 202 86 210 Q 98 218 86 226 Q 98 234 86 242 Q 98 250 86 258" stroke="#38bdf8" stroke-width="2" fill="none"/>
                <text x="64" y="138" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">${vpIn}V</text>
                <text x="64" y="232" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">${vpIn}V</text>

                <!-- Top & Bottom Diodes -->
                <line x1="86" y1="106" x2="176" y2="106" stroke="#cbd5e1" stroke-width="2"/>
                <g id="ct-d1">${drawDiodeH(190, 106, 1, true, '#4ade80')}</g>
                <text x="190" y="90" fill="#cbd5e1" font-size="11" font-weight="700" text-anchor="middle">D₁</text>
                <line x1="204" y1="106" x2="275" y2="106" stroke="#cbd5e1" stroke-width="2"/>

                <line x1="86" y1="258" x2="176" y2="258" stroke="#cbd5e1" stroke-width="2"/>
                <g id="ct-d2">${drawDiodeH(190, 258, 1, true, '#38bdf8')}</g>
                <text x="190" y="280" fill="#cbd5e1" font-size="11" font-weight="700" text-anchor="middle">D₂</text>
                <line x1="204" y1="258" x2="275" y2="258" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Join node to Load RL -->
                <line x1="275" y1="106" x2="275" y2="258" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="275" cy="182" r="4" fill="#fbbf24"/>
                <line x1="275" y1="182" x2="360" y2="182" stroke="#cbd5e1" stroke-width="2.2"/>
                <rect x="350" y="196" width="20" height="44" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.6"/>
                <text x="378" y="222" fill="#fbbf24" font-size="11.5" font-weight="700">R_L</text>
                <line x1="360" y1="182" x2="360" y2="196" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="360" y1="240" x2="360" y2="262" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Center Tap Ground Return -->
                <line x1="86" y1="182" x2="132" y2="182" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="132" cy="182" r="3.5" fill="#94a3b8"/>
                <text x="132" y="168" fill="#94a3b8" font-size="10" text-anchor="middle">CT (0V)</text>
                <line x1="132" y1="182" x2="132" y2="292" stroke="#64748b" stroke-width="1.8" stroke-dasharray="3,2"/>
                <line x1="132" y1="292" x2="360" y2="292" stroke="#64748b" stroke-width="1.8"/>
                <line x1="360" y1="262" x2="360" y2="292" stroke="#cbd5e1" stroke-width="2"/>

                <g id="rec-flow-pos">${drawFlowDots('M 86 106 L 275 106 L 275 182 L 360 182 L 360 292 L 132 292 L 132 182', 4, 1.4, '#4ade80', 3.4)}</g>
                <g id="rec-flow-neg">${drawFlowDots('M 86 258 L 275 258 L 275 182 L 360 182 L 360 292 L 132 292 L 132 182', 4, 1.4, '#38bdf8', 3.4)}</g>
            `;
        } else {
            // Bridge Rectifier (Diamond orientation: Left=(148,182), Top=(214,116), Right=(280,182), Bottom=(214,248))
            schematicSvg = `
                <circle cx="62" cy="182" r="22" fill="#0c1427" stroke="#38bdf8" stroke-width="2"/>
                <path d="M 52 182 Q 57 172 62 182 T 72 182" stroke="#38bdf8" stroke-width="1.8" fill="none"/>
                <text x="62" y="218" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">AC ${vpIn}Vp</text>

                <!-- AC Top to Bridge Top (214,116) and AC Bottom to Bridge Bottom (214,248) -->
                <line x1="62" y1="160" x2="62" y2="116" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="62" y1="116" x2="214" y2="116" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="62" y1="204" x2="62" y2="248" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="62" y1="248" x2="214" y2="248" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Bridge Diamond Wires -->
                <line x1="148" y1="182" x2="214" y2="116" stroke="#475569" stroke-width="2"/>
                <line x1="214" y1="116" x2="280" y2="182" stroke="#475569" stroke-width="2"/>
                <line x1="148" y1="182" x2="214" y2="248" stroke="#475569" stroke-width="2"/>
                <line x1="214" y1="248" x2="280" y2="182" stroke="#475569" stroke-width="2"/>

                <!-- Diodes D1 (top-right), D2 (bottom-left), D3 (top-left), D4 (bottom-right) -->
                <g id="br-d1" transform="rotate(45 247 149)">${drawDiodeH(247, 149, 1, true, '#4ade80')}</g>
                <g id="br-d2" transform="rotate(45 181 215)">${drawDiodeH(181, 215, 1, true, '#4ade80')}</g>
                <g id="br-d3" transform="rotate(-45 181 149)">${drawDiodeH(181, 149, 1, true, '#38bdf8')}</g>
                <g id="br-d4" transform="rotate(-45 247 215)">${drawDiodeH(247, 215, 1, true, '#38bdf8')}</g>

                <text x="262" y="132" fill="#cbd5e1" font-size="10.5" font-weight="700">D₁</text>
                <text x="160" y="232" fill="#cbd5e1" font-size="10.5" font-weight="700">D₂</text>
                <text x="160" y="132" fill="#cbd5e1" font-size="10.5" font-weight="700">D₃</text>
                <text x="262" y="232" fill="#cbd5e1" font-size="10.5" font-weight="700">D₄</text>

                <!-- Bridge Nodes -->
                <circle cx="214" cy="116" r="4" fill="#fbbf24"/>
                <circle cx="214" cy="248" r="4" fill="#fbbf24"/>
                <circle cx="280" cy="182" r="4.5" fill="#4ade80"/>
                <circle cx="148" cy="182" r="4.5" fill="#94a3b8"/>

                <!-- DC Output to RL: (+) from Right(280,182) -> RL -> (-) return to Left(148,182) -->
                <line x1="280" y1="182" x2="365" y2="182" stroke="#4ade80" stroke-width="2.2"/>
                <text x="330" y="172" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">+ V_out</text>
                <line x1="365" y1="182" x2="365" y2="205" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="355" y="205" width="20" height="44" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.6"/>
                <text x="383" y="231" fill="#fbbf24" font-size="11.5" font-weight="700">R_L</text>
                <line x1="365" y1="249" x2="365" y2="282" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="365" y1="282" x2="148" y2="282" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="148" y1="282" x2="148" y2="182" stroke="#cbd5e1" stroke-width="2"/>

                <g id="rec-flow-pos">${drawFlowDots('M 62 116 L 214 116 L 280 182 L 365 182 L 365 282 L 148 282 L 148 182 L 214 248 L 62 248', 5, 1.8, '#4ade80', 3.4)}</g>
                <g id="rec-flow-neg">${drawFlowDots('M 62 248 L 214 248 L 280 182 L 365 182 L 365 282 L 148 282 L 148 182 L 214 116 L 62 116', 5, 1.8, '#38bdf8', 3.4)}</g>
            `;
        }

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- LEFT PANEL: RECTIFIER SCHEMATIC -->
                <rect x="16" y="16" width="446" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="239" y="42" fill="#fb923c" font-size="14" font-weight="700" text-anchor="middle">
                    ${topo === 'half' ? 'วงจรเรียงกระแสครึ่งคลื่น (Half-Wave)' : topo === 'centertap' ? 'วงจรเต็มคลื่น Center-Tap (2 Diodes)' : 'วงจรเรียงกระแสแบบบริดจ์ (Bridge 4 Diodes)'}
                </text>
                <text id="rec-cycle-badge" x="239" y="66" fill="#4ade80" font-size="12" font-weight="700" text-anchor="middle">
                    ซีกบวก (+ Half-Cycle): ไดโอดนำกระแส
                </text>

                ${schematicSvg}

                <rect x="32" y="318" width="414" height="90" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="#334155"/>
                <text x="46" y="341" fill="#cbd5e1" font-size="12">แรงดันยอดเอาต์พุต: <tspan fill="#4ade80" font-weight="700">${vpOut.toFixed(1)} V</tspan> (ตกคร่อมไดโอด ${diodeDrop.toFixed(1)} V)</text>
                <text x="46" y="365" fill="#cbd5e1" font-size="12">แรงดันไฟตรงเฉลี่ย V_DC: <tspan fill="#fbbf24" font-weight="700">${vDC.toFixed(2)} V</tspan>  |  f_out = <tspan fill="#38bdf8" font-weight="700">${fOut} Hz</tspan></text>
                <text x="46" y="390" fill="#cbd5e1" font-size="12">พิกัดแรงดันย้อนกลับ PIV ขั้นต่ำ: <tspan fill="#f43f5e" font-weight="700">${piv.toFixed(1)} V</tspan></text>

                <!-- RIGHT PANEL: DUAL OSCILLOSCOPE -->
                <rect x="476" y="16" width="408" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                <text x="680" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">ออสซิลโลสโคปเปรียบเทียบคลื่น AC → DC</text>

                <!-- CH1: AC Input -->
                <rect x="492" y="56" width="376" height="162" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="56" width="376" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="72" fill="#38bdf8" font-size="11.5" font-weight="700">CH1: v_in (AC Secondary 50 Hz)</text>
                <text x="856" y="72" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">±${vpIn.toFixed(0)} V</text>
                <line x1="492" y1="149" x2="868" y2="149" stroke="#334155" stroke-dasharray="2,2"/>
                <path id="rec-trace-in" d="" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
                <circle id="rec-dot-in" cx="586" cy="149" r="4.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.2"/>

                <!-- CH2: Rectified DC Output -->
                <rect x="492" y="230" width="376" height="178" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="230" width="376" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="246" fill="#4ade80" font-size="11.5" font-weight="700">CH2: v_out (Pulsating DC ${fOut} Hz)</text>
                <text x="856" y="246" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">V_DC = ${vDC.toFixed(2)}V</text>

                <!-- 0V Base and V_DC Avg Dashed Line -->
                <line x1="492" y1="382" x2="868" y2="382" stroke="#334155" stroke-dasharray="2,2"/>
                <text x="500" y="378" fill="#64748b" font-size="9.5">0V</text>
                <line x1="492" y1="${(382 - vDC * 4.5).toFixed(1)}" x2="868" y2="${(382 - vDC * 4.5).toFixed(1)}" stroke="#fbbf24" stroke-dasharray="4,3" stroke-width="1.3"/>

                <path id="rec-trace-out" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>
                <circle id="rec-dot-out" cx="586" cy="382" r="4.5" fill="#4ade80" stroke="#ffffff" stroke-width="1.2"/>
            </svg>
        `;

        const trIn = document.getElementById('rec-trace-in');
        const trOut = document.getElementById('rec-trace-out');
        const dotIn = document.getElementById('rec-dot-in');
        const dotOut = document.getElementById('rec-dot-out');
        const cycleBadge = document.getElementById('rec-cycle-badge');
        const flowPos = document.getElementById('rec-flow-pos');
        const flowNeg = document.getElementById('rec-flow-neg');
        let isRunning = true;

        function animRectifier() {
            if (!isRunning) return;
            if (isPlaying) acPhase += 0.04;

            const w = 376;
            const x0 = 492;
            const y0In = 149;
            const y0Out = 382;
            const scaleIn = 2.4; // 24V -> 57.6px
            const scaleOut = 4.5; // 22.6V -> 101px

            let dIn = '';
            let dOut = '';
            let curSin = 0;
            let curOutV = 0;

            for (let i = 0; i <= w; i += 3) {
                const ang = (i / w) * 4 * Math.PI + acPhase;
                const sVal = Math.sin(ang);
                const vin = sVal * vpIn;
                let vout = 0;
                if (topo === 'half') {
                    vout = Math.max(0, vin - 0.7);
                } else {
                    vout = Math.max(0, Math.abs(vin) - diodeDrop);
                }

                const pyIn = y0In - vin * scaleIn;
                const pyOut = y0Out - vout * scaleOut;
                if (i === 0) {
                    dIn = `M ${x0 + i} ${pyIn.toFixed(1)}`;
                    dOut = `M ${x0 + i} ${pyOut.toFixed(1)}`;
                } else {
                    dIn += ` L ${x0 + i} ${pyIn.toFixed(1)}`;
                    dOut += ` L ${x0 + i} ${pyOut.toFixed(1)}`;
                }
                if (Math.abs((x0 + i) - 586) <= 2) {
                    curSin = sVal;
                    curOutV = vout;
                }
            }

            if (trIn) trIn.setAttribute('d', dIn);
            if (trOut) trOut.setAttribute('d', dOut);
            if (dotIn) dotIn.setAttribute('cy', (y0In - curSin * vpIn * scaleIn).toFixed(1));
            if (dotOut) dotOut.setAttribute('cy', (y0Out - curOutV * scaleOut).toFixed(1));

            const isPosHalf = curSin >= 0;
            if (flowPos) flowPos.style.display = isPosHalf ? 'inline' : 'none';
            if (flowNeg) flowNeg.style.display = (!isPosHalf && topo !== 'half') ? 'inline' : 'none';
            if (cycleBadge) {
                if (isPosHalf) {
                    cycleBadge.textContent = topo === 'bridge' ? 'ซีกบวก (+): D₁ และ D₂ นำกระแส (ไหลไปทางขวาผ่าน R_L)' : 'ซีกบวก (+): D₁ นำกระแสผ่านโหลด R_L';
                    cycleBadge.setAttribute('fill', '#4ade80');
                } else {
                    cycleBadge.textContent = topo === 'half'
                        ? 'ซีกลบ (−): D₁ ไบแอสกลับ (OFF) — ไม่มีกระแสไหลผ่าน R_L!'
                        : topo === 'centertap'
                        ? 'ซีกลบ (−): D₂ นำกระแสแทน — กระแสผ่าน R_L ทิศเดิม!'
                        : 'ซีกลบ (−): D₃ และ D₄ นำกระแส — กระแสผ่าน R_L ทิศเดิม!';
                    cycleBadge.setAttribute('fill', topo === 'half' ? '#f87171' : '#38bdf8');
                }
            }

            animId = requestAnimationFrame(animRectifier);
        }

        animId = requestAnimationFrame(animRectifier);
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
   3. CAPACITOR FILTER SIMULATOR: Ripple Sawtooth & Diode Conduction Spike
   ========================================================================= */
function initFilterSimulator(canvas, controls) {
    let rectType = 'full'; // 'half' | 'full'
    let cap_uF = 1000;
    let load_mA = 300;
    let phase = 0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill" id="btn-flt-half">Half-Wave (f_r = 50 Hz)</button>
            <button class="toggle-pill active" id="btn-flt-full">Full-Wave Bridge (f_r = 100 Hz)</button>
        </div>
        <div class="ctrl-group">
            <label>ตัวเก็บประจุ (C):</label>
            <input type="range" id="sl-flt-c" min="100" max="4700" step="100" value="${cap_uF}">
            <span class="val-badge" id="val-flt-c">${cap_uF} µF</span>
        </div>
        <div class="ctrl-group">
            <label>โหลด ($I_{DC}$):</label>
            <input type="range" id="sl-flt-il" min="50" max="1000" step="50" value="${load_mA}">
            <span class="val-badge" id="val-flt-il">${load_mA} mA</span>
        </div>
    `;
    renderMath();

    const btnHalf = document.getElementById('btn-flt-half');
    const btnFull = document.getElementById('btn-flt-full');

    btnHalf.addEventListener('click', () => {
        rectType = 'half';
        btnHalf.classList.add('active');
        btnFull.classList.remove('active');
        render();
    });
    btnFull.addEventListener('click', () => {
        rectType = 'full';
        btnFull.classList.add('active');
        btnHalf.classList.remove('active');
        render();
    });
    document.getElementById('sl-flt-c').addEventListener('input', e => {
        cap_uF = parseInt(e.target.value, 10);
        document.getElementById('val-flt-c').innerText = `${cap_uF} µF`;
        render();
    });
    document.getElementById('sl-flt-il').addEventListener('input', e => {
        load_mA = parseInt(e.target.value, 10);
        document.getElementById('val-flt-il').innerText = `${load_mA} mA`;
        render();
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        const Vp_out = 15.6; // e.g. 12Vrms * 1.414 - 1.4 = 15.57V
        const fr = rectType === 'full' ? 100 : 50;
        const Vr_pp = Math.min(Vp_out, (load_mA / 1000) / (fr * cap_uF * 1e-6));
        const V_dc = Math.max(0, Vp_out - Vr_pp / 2);
        const ripplePct = V_dc > 0.5 ? ((Vr_pp * 0.289) / V_dc) * 100 : 100;
        const isHighRipple = Vr_pp > 2.5;

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- LEFT PANEL: FILTER CIRCUIT & ENERGY TANK -->
                <rect x="16" y="16" width="446" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="239" y="42" fill="#fb923c" font-size="14" font-weight="700" text-anchor="middle">วงจรกรองสัญญาณ Capacitor-Input Filter</text>
                <text id="flt-phase-txt" x="239" y="64" fill="#4ade80" font-size="12" font-weight="700" text-anchor="middle">ช่วงอัดประจุ (Charging)</text>

                <!-- Rectifier Block -->
                <rect x="38" y="114" width="108" height="72" rx="8" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.6"/>
                <text x="92" y="144" fill="#38bdf8" font-size="12.5" font-weight="700" text-anchor="middle">${rectType === 'full' ? 'Bridge' : 'Half-Wave'}</text>
                <text x="92" y="164" fill="#cbd5e1" font-size="11" text-anchor="middle">f_r = ${fr} Hz</text>
                <text x="92" y="180" fill="#94a3b8" font-size="10" text-anchor="middle">Vp = ${Vp_out.toFixed(1)}V</text>

                <!-- Top DC Bus & Ground Bus -->
                <line x1="146" y1="132" x2="386" y2="132" stroke="#4ade80" stroke-width="2.5"/>
                <line x1="146" y1="264" x2="386" y2="264" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Filter Capacitor C -->
                <circle cx="240" cy="132" r="4" fill="#c084fc"/>
                <line x1="240" y1="132" x2="240" y2="188" stroke="#c084fc" stroke-width="2.2"/>
                <line x1="220" y1="188" x2="260" y2="188" stroke="#c084fc" stroke-width="3.2"/>
                <line x1="220" y1="198" x2="260" y2="198" stroke="#c084fc" stroke-width="3.2"/>
                <line x1="240" y1="198" x2="240" y2="264" stroke="#c084fc" stroke-width="2.2"/>
                <text x="210" y="188" fill="#c084fc" font-size="12" font-weight="700" text-anchor="end">C</text>
                <text x="210" y="204" fill="#c4b5fd" font-size="10.5" text-anchor="end">${cap_uF} µF</text>

                <!-- Animated Charge Tank Bar next to C -->
                <rect x="272" y="156" width="22" height="84" rx="4" fill="#0f172a" stroke="#475569"/>
                <rect id="flt-tank-bar" x="274" y="164" width="18" height="74" rx="2" fill="#c084fc"/>
                <text x="283" y="254" fill="#c4b5fd" font-size="9.5" text-anchor="middle">V_C</text>

                <!-- Load RL -->
                <line x1="386" y1="132" x2="386" y2="168" stroke="#cbd5e1" stroke-width="2.2"/>
                <rect x="376" y="168" width="20" height="54" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.6"/>
                <text x="404" y="192" fill="#fbbf24" font-size="12" font-weight="700">R_L</text>
                <text x="404" y="210" fill="#cbd5e1" font-size="10.5">${load_mA} mA</text>
                <line x1="386" y1="222" x2="386" y2="264" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Charge vs Discharge Animated Loops -->
                <g id="flt-charge-dots">
                    ${drawFlowDots('M 146 132 L 240 132 L 240 185', 3, 0.7, '#4ade80', 3.4)}
                    ${drawFlowDots('M 146 132 L 386 132 L 386 264 L 146 264', 4, 1.2, '#fbbf24', 3.2)}
                </g>
                <g id="flt-discharge-dots" style="display:none;">
                    ${drawFlowDots('M 240 185 L 240 132 L 386 132 L 386 264 L 240 264', 4, 1.3, '#c084fc', 3.3)}
                </g>

                <!-- Summary Box -->
                <rect x="32" y="294" width="414" height="114" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="#334155"/>
                <text x="46" y="318" fill="#cbd5e1" font-size="12">แรงดันกระเพื่อม V_r(pp) ≈ I_DC / (f_r · C) = <tspan fill="${isHighRipple ? '#f87171' : '#c084fc'}" font-weight="700">${Vr_pp.toFixed(2)} Vpp</tspan></text>
                <text x="46" y="342" fill="#cbd5e1" font-size="12">แรงดันไฟตรงเฉลี่ย V_DC = <tspan fill="#4ade80" font-weight="700">${V_dc.toFixed(2)} V</tspan>  |  Ripple Factor = <tspan fill="#fbbf24" font-weight="700">${ripplePct.toFixed(1)}%</tspan></text>
                <text x="46" y="366" fill="#94a3b8" font-size="11">เมื่อ C ใหญ่ขึ้น ➔ Ripple ลดลง แต่มุมนำกระแสไดโอดจะแคบลง (I_peak สูง)</text>
                <text x="46" y="390" fill="${isHighRipple ? '#f87171' : '#4ade80'}" font-size="11.5" font-weight="700">
                    ${isHighRipple ? '⚠️ Ripple สูงมาก! ควรเพิ่มค่า C หรือเปลี่ยนเป็น Full-Wave' : '✅ การกรองเรียบดี เหมาะสำหรับส่งต่อให้ Linear Regulator'}
                </text>

                <!-- RIGHT PANEL: RIPPLE & DIODE SURGE OSCILLOSCOPE -->
                <rect x="476" y="16" width="408" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                <text x="680" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">กราฟแรงดันกระเพื่อม V_r(pp) &amp; กระแสไดโอด</text>

                <!-- CH1: Filtered Voltage Waveform -->
                <rect x="492" y="56" width="376" height="194" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="56" width="376" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="72" fill="#c084fc" font-size="11.5" font-weight="700">CH1: แรงดัน V_C(t) บนตัวเก็บประจุ</text>
                <text x="856" y="72" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">V_r(pp): ${Vr_pp.toFixed(2)} V</text>

                <line x1="492" y1="230" x2="868" y2="230" stroke="#334155" stroke-dasharray="2,2"/>
                <text x="500" y="226" fill="#64748b" font-size="9.5">0V</text>
                <path id="flt-rect-bg" d="" fill="none" stroke="#334155" stroke-width="1.4" stroke-dasharray="3,3"/>
                <path id="flt-vc-trace" d="" fill="none" stroke="#c084fc" stroke-width="2.6"/>

                <!-- CH2: Diode Conduction Current Pulses -->
                <rect x="492" y="262" width="376" height="146" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="262" width="376" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="278" fill="#4ade80" font-size="11.5" font-weight="700">CH2: พัลส์กระแสไดโอด I_D(t) ช่วงอัดประจุ</text>
                <text x="856" y="278" fill="#94a3b8" font-size="10.5" text-anchor="end">Narrow Pulse!</text>
                <line x1="492" y1="392" x2="868" y2="392" stroke="#334155" stroke-dasharray="2,2"/>
                <path id="flt-id-trace" d="" fill="none" stroke="#4ade80" stroke-width="2.2"/>
            </svg>
        `;

        const rectBg = document.getElementById('flt-rect-bg');
        const vcTrace = document.getElementById('flt-vc-trace');
        const idTrace = document.getElementById('flt-id-trace');
        const tankBar = document.getElementById('flt-tank-bar');
        const phaseTxt = document.getElementById('flt-phase-txt');
        const chgDots = document.getElementById('flt-charge-dots');
        const disDots = document.getElementById('flt-discharge-dots');

        let isRunning = true;

        function animFilter() {
            if (!isRunning) return;
            phase += 0.038;

            const x0 = 492;
            const w = 376;
            const y0V = 230;
            const y0I = 392;
            const pxPerV = 8.4; // 15.6V -> 131px up

            const period = rectType === 'full' ? Math.PI : 2 * Math.PI;
            let dBg = '';
            let dVc = '';
            let dId = '';
            let probeCharging = false;
            let probeV = V_dc;

            for (let i = 0; i <= w; i += 2) {
                const ang = (i / w) * 4 * Math.PI + phase;
                const rawSin = Math.sin(ang);
                const rectV = rectType === 'full'
                    ? Math.max(0, Math.abs(rawSin) * (Vp_out + 1.4) - 1.4)
                    : Math.max(0, rawSin * (Vp_out + 0.7) - 0.7);

                // Sawtooth discharge approximation anchored to peaks
                const peakOffset = rectType === 'full' ? Math.PI / 2 : Math.PI / 2;
                const cyc = (((ang - peakOffset) % period) + period) % period;
                const capDecay = Vp_out - (cyc / period) * Vr_pp;
                const vc = Math.max(rectV, capDecay);
                const isCharging = rectV >= capDecay && rectV > 1.0 && (cyc > period * 0.65 || cyc < 0.25);

                // Narrow surge current pulse during charging
                const idPulse = isCharging ? Math.min(92, (12 + cap_uF / 55) * Math.max(0.2, (rectV - (Vp_out - Vr_pp)) / Math.max(0.4, Vr_pp))) : 0;

                const pyBg = y0V - rectV * pxPerV;
                const pyVc = y0V - vc * pxPerV;
                const pyId = y0I - idPulse;

                if (i === 0) {
                    dBg = `M ${x0 + i} ${pyBg.toFixed(1)}`;
                    dVc = `M ${x0 + i} ${pyVc.toFixed(1)}`;
                    dId = `M ${x0 + i} ${pyId.toFixed(1)}`;
                } else {
                    dBg += ` L ${x0 + i} ${pyBg.toFixed(1)}`;
                    dVc += ` L ${x0 + i} ${pyVc.toFixed(1)}`;
                    dId += ` L ${x0 + i} ${pyId.toFixed(1)}`;
                }
                if (i === 180) {
                    probeCharging = isCharging;
                    probeV = vc;
                }
            }

            if (rectBg) rectBg.setAttribute('d', dBg);
            if (vcTrace) vcTrace.setAttribute('d', dVc);
            if (idTrace) idTrace.setAttribute('d', dId);

            if (tankBar) {
                const h = Math.max(6, Math.min(76, (probeV / Vp_out) * 76));
                tankBar.setAttribute('y', (238 - h).toFixed(1));
                tankBar.setAttribute('height', h.toFixed(1));
            }
            if (chgDots) chgDots.style.display = probeCharging ? 'inline' : 'none';
            if (disDots) disDots.style.display = probeCharging ? 'none' : 'inline';
            if (phaseTxt) {
                phaseTxt.textContent = probeCharging
                    ? '⚡ ช่วงอัดประจุ (Charging): ไดโอดนำกระแสอัดไฟเข้า C และจ่าย R_L'
                    : '🔋 ช่วงคายประจุ (Discharging): ไดโอดหยุดนำ • C คายไฟเลี้ยง R_L';
                phaseTxt.setAttribute('fill', probeCharging ? '#4ade80' : '#c084fc');
            }

            animId = requestAnimationFrame(animFilter);
        }

        animId = requestAnimationFrame(animFilter);
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
   4. LINEAR REGULATOR SIMULATOR: LM7805, LM317, Zener, Dropout & Thermal Heat
   ========================================================================= */
function initLinearRegSimulator(canvas, controls) {
    let regMode = '7805'; // '7805' | '317' | 'zener'
    let vin = 12.0;
    let load_mA = 400;
    let r2_ohm = 720; // R1 = 240 ohm -> Vout = 1.25 * (1 + 720/240) = 5.0V
    let phase = 0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-lr-7805">LM7805 (+5V)</button>
            <button class="toggle-pill" id="btn-lr-317">LM317 (ปรับค่าได้)</button>
            <button class="toggle-pill" id="btn-lr-zen">Zener Shunt (5.1V)</button>
        </div>
        <div class="ctrl-group">
            <label>$V_{in}$:</label>
            <input type="range" id="sl-lr-vin" min="5.5" max="18.0" step="0.5" value="${vin}">
            <span class="val-badge" id="val-lr-vin">${vin.toFixed(1)} V</span>
        </div>
        <div class="ctrl-group">
            <label>โหลด ($I_L$):</label>
            <input type="range" id="sl-lr-il" min="50" max="1000" step="50" value="${load_mA}">
            <span class="val-badge" id="val-lr-il">${load_mA} mA</span>
        </div>
        <div class="ctrl-group" id="grp-lr-r2" style="opacity:0.4;">
            <label>$R_2$ (LM317):</label>
            <input type="range" id="sl-lr-r2" min="240" max="2400" step="120" value="${r2_ohm}" disabled>
            <span class="val-badge" id="val-lr-r2">${r2_ohm} Ω</span>
        </div>
    `;
    renderMath();

    const btn7805 = document.getElementById('btn-lr-7805');
    const btn317 = document.getElementById('btn-lr-317');
    const btnZen = document.getElementById('btn-lr-zen');
    const slR2 = document.getElementById('sl-lr-r2');
    const grpR2 = document.getElementById('grp-lr-r2');

    function setRegMode(m) {
        regMode = m;
        btn7805.classList.toggle('active', m === '7805');
        btn317.classList.toggle('active', m === '317');
        btnZen.classList.toggle('active', m === 'zener');
        slR2.disabled = m !== '317';
        grpR2.style.opacity = m === '317' ? '1' : '0.4';
        render();
    }

    btn7805.addEventListener('click', () => setRegMode('7805'));
    btn317.addEventListener('click', () => setRegMode('317'));
    btnZen.addEventListener('click', () => setRegMode('zener'));

    document.getElementById('sl-lr-vin').addEventListener('input', e => {
        vin = parseFloat(e.target.value);
        document.getElementById('val-lr-vin').innerText = `${vin.toFixed(1)} V`;
        render();
    });
    document.getElementById('sl-lr-il').addEventListener('input', e => {
        load_mA = parseInt(e.target.value, 10);
        document.getElementById('val-lr-il').innerText = `${load_mA} mA`;
        render();
    });
    slR2.addEventListener('input', e => {
        r2_ohm = parseInt(e.target.value, 10);
        document.getElementById('val-lr-r2').innerText = `${r2_ohm} Ω`;
        render();
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        const targetV = regMode === '7805' ? 5.0 : regMode === '317' ? 1.25 * (1 + r2_ohm / 240) : 5.1;
        const vDropOut = regMode === 'zener' ? 0.8 : 2.0;
        const vinRipple = 0.6;
        const vinMin = vin - vinRipple;
        const isDropout = vinMin < (targetV + vDropOut);
        const actualVout = isDropout ? Math.max(0.5, vin - vDropOut) : targetV;

        const il_A = load_mA / 1000;
        const pd_W = regMode === 'zener'
            ? (vin - actualVout) * il_A + actualVout * 0.03
            : Math.max(0, (vin - actualVout) * il_A);
        const effPct = (actualVout / Math.max(actualVout + 0.1, vin)) * 100;
        const heatPct = 100 - effPct;

        const heatColor = pd_W > 3.5 ? '#f87171' : pd_W > 1.8 ? '#fbbf24' : '#4ade80';
        const heatNote = pd_W > 3.5 ? '🔥 ร้อนจัด! ต้องติด Heatsink ใหญ่' : pd_W > 1.8 ? '🌡️ อุ่นขึ้น ควรติด Heatsink' : '❄️ เย็นปกติ (ไม่ต้องติด Heatsink)';

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- LEFT PANEL: REGULATOR SCHEMATIC & THERMAL PACKAGE -->
                <rect x="16" y="16" width="446" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="239" y="42" fill="#fb923c" font-size="14" font-weight="700" text-anchor="middle">
                    ${regMode === '7805' ? 'วงจร LM7805 (+5V Fixed Regulator)' : regMode === '317' ? 'วงจร LM317 (Adjustable Regulator)' : 'วงจร Zener Shunt Regulator (5.1V)'}
                </text>

                <!-- Input Source -->
                <rect x="34" y="138" width="66" height="44" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.6"/>
                <text x="67" y="158" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">${vin.toFixed(1)}V</text>
                <text x="67" y="174" fill="#94a3b8" font-size="9.5" text-anchor="middle">±0.6V Rip</text>

                <line x1="100" y1="160" x2="178" y2="160" stroke="#cbd5e1" stroke-width="2.4"/>

                ${regMode !== 'zener' ? `
                    <!-- Input Bypass Cap 0.33uF -->
                    <line x1="138" y1="160" x2="138" y2="196" stroke="#cbd5e1" stroke-width="1.8"/>
                    <line x1="128" y1="196" x2="148" y2="196" stroke="#38bdf8" stroke-width="2.4"/>
                    <line x1="128" y1="202" x2="148" y2="202" stroke="#38bdf8" stroke-width="2.4"/>
                    <text x="122" y="203" fill="#38bdf8" font-size="10" text-anchor="end">0.33µF</text>
                    <line x1="138" y1="202" x2="138" y2="262" stroke="#cbd5e1" stroke-width="1.8"/>

                    <!-- IC Package with Live Thermal Glow -->
                    <rect x="178" y="122" width="116" height="76" rx="8" fill="${heatColor}" fill-opacity="0.16" stroke="${heatColor}" stroke-width="2.2"/>
                    <text x="236" y="150" fill="#f1f5f9" font-size="14" font-weight="800" text-anchor="middle">${regMode === '7805' ? 'LM7805' : 'LM317'}</text>
                    <text x="236" y="170" fill="${heatColor}" font-size="11.5" font-weight="700" text-anchor="middle">P_D = ${pd_W.toFixed(2)} W</text>
                    <text x="236" y="188" fill="#cbd5e1" font-size="10" text-anchor="middle">V_DO ≈ 2.0V</text>

                    <!-- GND / ADJ Pin -->
                    <line x1="236" y1="198" x2="236" y2="262" stroke="#cbd5e1" stroke-width="2"/>
                    ${regMode === '317' ? `
                        <!-- R1 between Out(322) and Adj(236), R2 to GND -->
                        <line x1="322" y1="160" x2="322" y2="218" stroke="#cbd5e1" stroke-width="1.8"/>
                        <line x1="322" y1="218" x2="288" y2="218" stroke="#cbd5e1" stroke-width="1.8"/>
                        <rect x="258" y="210" width="30" height="16" rx="2" fill="#1e293b" stroke="#fbbf24"/>
                        <text x="273" y="205" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">R₁=240Ω</text>
                        <line x1="258" y1="218" x2="236" y2="218" stroke="#cbd5e1" stroke-width="1.8"/>
                        <circle cx="236" cy="218" r="3.5" fill="#fbbf24"/>
                        <rect x="228" y="226" width="16" height="28" rx="2" fill="#1e293b" stroke="#fbbf24"/>
                        <text x="252" y="244" fill="#fbbf24" font-size="9.5" font-weight="700">R₂=${r2_ohm}Ω</text>
                    ` : `
                        <text x="246" y="232" fill="#94a3b8" font-size="10.5">GND</text>
                    `}

                    <!-- Output Wire & 0.1uF Cap -->
                    <line x1="294" y1="160" x2="394" y2="160" stroke="#4ade80" stroke-width="2.4"/>
                    <line x1="350" y1="160" x2="350" y2="196" stroke="#cbd5e1" stroke-width="1.8"/>
                    <line x1="340" y1="196" x2="360" y2="196" stroke="#4ade80" stroke-width="2.4"/>
                    <line x1="340" y1="202" x2="360" y2="202" stroke="#4ade80" stroke-width="2.4"/>
                    <text x="336" y="203" fill="#4ade80" font-size="9.5" text-anchor="end">0.1µF</text>
                    <line x1="350" y1="202" x2="350" y2="262" stroke="#cbd5e1" stroke-width="1.8"/>
                ` : `
                    <!-- Zener Shunt Schematic -->
                    <rect x="134" y="150" width="46" height="20" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.6"/>
                    <text x="157" y="142" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">R_S</text>
                    <line x1="180" y1="160" x2="394" y2="160" stroke="#4ade80" stroke-width="2.4"/>

                    <!-- Zener Diode Shunt at x=255 -->
                    <circle cx="255" cy="160" r="4" fill="#fbbf24"/>
                    <line x1="255" y1="160" x2="255" y2="196" stroke="#cbd5e1" stroke-width="2"/>
                    <polygon points="244,218 266,218 255,198" fill="#fbbf24" fill-opacity="0.35" stroke="#fbbf24" stroke-width="2"/>
                    <path d="M 243 202 L 246 198 L 264 198 L 267 194" stroke="#fbbf24" stroke-width="2.2" fill="none"/>
                    <text x="274" y="212" fill="#fbbf24" font-size="11" font-weight="700">Zener 5.1V</text>
                    <line x1="255" y1="218" x2="255" y2="262" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <!-- Load RL -->
                <line x1="394" y1="160" x2="394" y2="184" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="386" y="184" width="16" height="44" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
                <text x="410" y="208" fill="#4ade80" font-size="11" font-weight="700">R_L</text>
                <text x="410" y="156" fill="#4ade80" font-size="11.5" font-weight="700">V_out</text>
                <line x1="394" y1="228" x2="394" y2="262" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Ground Bus -->
                <line x1="115" y1="262" x2="412" y2="262" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="260" y1="262" x2="260" y2="274" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="246" y1="274" x2="274" y2="274" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="251" y1="279" x2="269" y2="279" stroke="#cbd5e1" stroke-width="1.5"/>

                ${drawFlowDots('M 100 160 L 178 160', 2, 1.0, '#38bdf8', 3)}
                ${drawFlowDots('M 294 160 L 394 160 L 394 262', 3, 1.1, '#4ade80', 3.2)}

                <!-- Thermal & Status Box -->
                <rect x="32" y="298" width="414" height="110" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="#334155"/>
                <text x="46" y="322" fill="${isDropout ? '#f87171' : '#4ade80'}" font-size="12.5" font-weight="700">
                    ${isDropout ? `⚠️ Dropout! V_in (${vin.toFixed(1)}V) < V_out + ${vDropOut}V` : `✅ Regulated Output = ${actualVout.toFixed(2)} V (นิ่งสนิท)`}
                </text>
                <text x="46" y="346" fill="#cbd5e1" font-size="12">กำลังสูญเสียความร้อน P_D = <tspan fill="${heatColor}" font-weight="700">${pd_W.toFixed(2)} W</tspan>  |  ประสิทธิภาพ η = <tspan fill="#38bdf8" font-weight="700">${effPct.toFixed(1)}%</tspan></text>
                <text x="46" y="370" fill="${heatColor}" font-size="11.5" font-weight="700">${heatNote}</text>
                <text x="46" y="394" fill="#94a3b8" font-size="11">หมายเหตุ: Linear Regulator เผาแรงดันส่วนเกิน (V_in − V_out) เป็นความร้อนทั้งหมด</text>

                <!-- RIGHT PANEL: OUTPUT RIPPLE LEAKAGE & EFFICIENCY BAR -->
                <rect x="476" y="16" width="408" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                <text x="680" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">การรักษาแรงดัน &amp; สัดส่วนสูญเสียความร้อน</text>

                <!-- Scope: Input (with Ripple) vs Output -->
                <rect x="492" y="56" width="376" height="178" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="56" width="376" height="36" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="72" fill="#38bdf8" font-size="11" font-weight="700">━━  V_in(t) (มี Ripple ±0.6V)</text>
                <text x="504" y="87" fill="${isDropout ? '#f87171' : '#4ade80'}" font-size="11" font-weight="700">━━  V_out(t) (${isDropout ? 'เกิด Dropout Ripple รั่ว!' : `คงที่ ${actualVout.toFixed(2)}V`})</text>

                <!-- Dropout Threshold Dashed Line -->
                <line x1="492" y1="${(224 - (targetV + vDropOut) * 8.2).toFixed(1)}" x2="868" y2="${(224 - (targetV + vDropOut) * 8.2).toFixed(1)}" stroke="#fbbf24" stroke-dasharray="4,3" stroke-width="1.1"/>
                <text x="860" y="${(220 - (targetV + vDropOut) * 8.2).toFixed(1)}" fill="#fbbf24" font-size="9.5" text-anchor="end">Min V_in (${(targetV + vDropOut).toFixed(1)}V)</text>

                <path id="lr-vin-trace" d="" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4,2"/>
                <path id="lr-vout-trace" d="" fill="none" stroke="${isDropout ? '#f87171' : '#4ade80'}" stroke-width="2.6"/>

                <!-- Efficiency vs Heat Loss Visual Bar -->
                <rect x="492" y="248" width="376" height="82" rx="8" fill="rgba(15, 23, 42, 0.88)" stroke="#334155"/>
                <text x="506" y="270" fill="#cbd5e1" font-size="12" font-weight="700">สัดส่วนพลังงานขาเข้า (Useful Output vs Heat Loss)</text>
                <rect x="506" y="282" width="348" height="20" rx="5" fill="#1e293b" stroke="#334155"/>
                <rect x="506" y="282" width="${Math.max(8, (effPct / 100) * 348).toFixed(1)}" height="20" rx="5" fill="#4ade80"/>
                <rect x="${506 + (effPct / 100) * 348}" y="282" width="${Math.max(0, (heatPct / 100) * 348).toFixed(1)}" height="20" rx="3" fill="#f87171" fill-opacity="0.85"/>
                <text x="506" y="319" fill="#4ade80" font-size="11" font-weight="700">ส่งออกโหลด: ${effPct.toFixed(1)}%</text>
                <text x="854" y="319" fill="#f87171" font-size="11" font-weight="700" text-anchor="end">สูญเสียความร้อน: ${heatPct.toFixed(1)}%</text>

                <!-- Tip Card -->
                <rect x="492" y="340" width="376" height="68" rx="8" fill="rgba(249, 115, 22, 0.08)" stroke="#f97316"/>
                <text x="506" y="364" fill="#fb923c" font-size="12" font-weight="700">💡 ทดลองสังเกต:</text>
                <text x="506" y="384" fill="#cbd5e1" font-size="11">1) ลด V_in ต่ำกว่า ${(targetV + vDropOut).toFixed(1)}V จะเห็นคลื่นขรุขระรั่วออกขาเอาต์พุตทันที</text>
                <text x="506" y="400" fill="#cbd5e1" font-size="11">2) เพิ่ม V_in และ I_L สูงๆ เพื่อดูความร้อน P_D พุ่งสูงเกินพิกัดตัวถัง</text>
            </svg>
        `;

        const trIn = document.getElementById('lr-vin-trace');
        const trOut = document.getElementById('lr-vout-trace');
        let isRunning = true;

        function animLR() {
            if (!isRunning) return;
            phase += 0.05;

            const x0 = 492;
            const w = 376;
            const yBase = 224; // 0V
            const pxPerV = 6.2; // 18.6V -> 115px up (well below header at y=92!)

            let dIn = '';
            let dOut = '';

            for (let i = 0; i <= w; i += 3) {
                const ang = (i / w) * 4 * Math.PI + phase;
                const cyc = ((ang % Math.PI) + Math.PI) % Math.PI;
                const vInInst = vin + 0.6 - (cyc / Math.PI) * 1.2;
                const vOutInst = vInInst >= (targetV + vDropOut) ? targetV : Math.max(0.2, vInInst - vDropOut);

                const pyIn = yBase - vInInst * pxPerV;
                const pyOut = yBase - vOutInst * pxPerV;

                if (i === 0) {
                    dIn = `M ${x0 + i} ${pyIn.toFixed(1)}`;
                    dOut = `M ${x0 + i} ${pyOut.toFixed(1)}`;
                } else {
                    dIn += ` L ${x0 + i} ${pyIn.toFixed(1)}`;
                    dOut += ` L ${x0 + i} ${pyOut.toFixed(1)}`;
                }
            }

            if (trIn) trIn.setAttribute('d', dIn);
            if (trOut) trOut.setAttribute('d', dOut);
            animId = requestAnimationFrame(animLR);
        }

        animId = requestAnimationFrame(animLR);
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
   5. SMPS SIMULATOR: Buck & Boost Converters with Live PWM & Inductor Wave
   ========================================================================= */
function initSMPSSimulator(canvas, controls) {
    let smpsMode = 'buck'; // 'buck' | 'boost'
    let vin = 12.0;
    let duty = 50; // 15..85 %
    let phase = 0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-smps-buck">⚡ Buck Converter (ลดแรงดัน)</button>
            <button class="toggle-pill" id="btn-smps-boost">⚡ Boost Converter (เพิ่มแรงดัน)</button>
        </div>
        <div class="ctrl-group">
            <label>$V_{in}$:</label>
            <input type="range" id="sl-smps-vin" min="5" max="24" step="1" value="${vin}">
            <span class="val-badge" id="val-smps-vin">${vin.toFixed(0)} V</span>
        </div>
        <div class="ctrl-group">
            <label>Duty Cycle (D):</label>
            <input type="range" id="sl-smps-d" min="15" max="85" step="5" value="${duty}">
            <span class="val-badge" id="val-smps-d">${duty}%</span>
        </div>
    `;
    renderMath();

    const btnBuck = document.getElementById('btn-smps-buck');
    const btnBoost = document.getElementById('btn-smps-boost');

    btnBuck.addEventListener('click', () => {
        smpsMode = 'buck';
        btnBuck.classList.add('active');
        btnBoost.classList.remove('active');
        render();
    });
    btnBoost.addEventListener('click', () => {
        smpsMode = 'boost';
        btnBoost.classList.add('active');
        btnBuck.classList.remove('active');
        render();
    });
    document.getElementById('sl-smps-vin').addEventListener('input', e => {
        vin = parseFloat(e.target.value);
        document.getElementById('val-smps-vin').innerText = `${vin.toFixed(0)} V`;
        render();
    });
    document.getElementById('sl-smps-d').addEventListener('input', e => {
        duty = parseInt(e.target.value, 10);
        document.getElementById('val-smps-d').innerText = `${duty}%`;
        render();
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        const D = duty / 100;
        const vout = smpsMode === 'buck' ? (D * vin) : (vin / (1 - D));
        const smpsEff = 91.5;
        const linearEff = smpsMode === 'buck' ? ((vout / vin) * 100).toFixed(1) + '%' : 'ทำไม่ได้ (Step-Up)';

        let schSvg = '';
        if (smpsMode === 'buck') {
            schSvg = `
                <!-- Input Source -->
                <rect x="34" y="138" width="54" height="44" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.6"/>
                <text x="61" y="164" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">${vin.toFixed(0)}V</text>
                <line x1="61" y1="138" x2="61" y2="112" stroke="#cbd5e1" stroke-width="2.2"/>
                <line x1="61" y1="112" x2="118" y2="112" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- PWM MOSFET Switch (x=118..164, y=112) -->
                <rect x="118" y="96" width="46" height="32" rx="5" fill="#1e293b" stroke="#fb923c" stroke-width="1.8"/>
                <text x="141" y="116" fill="#fb923c" font-size="11.5" font-weight="700" text-anchor="middle">SW Q₁</text>
                <line x1="164" y1="112" x2="215" y2="112" stroke="#cbd5e1" stroke-width="2.2"/>
                <circle cx="200" cy="112" r="4" fill="#fbbf24"/>

                <!-- Freewheeling Diode D1 to GND at x=200 -->
                <line x1="200" y1="112" x2="200" y2="156" stroke="#cbd5e1" stroke-width="2"/>
                <polygon points="189,182 211,182 200,162" fill="#38bdf8" fill-opacity="0.35" stroke="#38bdf8" stroke-width="2"/>
                <line x1="189" y1="162" x2="211" y2="162" stroke="#38bdf8" stroke-width="2.2"/>
                <text x="180" y="176" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">D₁</text>
                <line x1="200" y1="182" x2="200" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Inductor L (x=215..295, y=112) -->
                <path d="M 215 112 Q 225 94 235 112 Q 245 94 255 112 Q 265 94 275 112 Q 285 94 295 112" stroke="#4ade80" stroke-width="2.6" fill="none"/>
                <text x="255" y="90" fill="#4ade80" font-size="11.5" font-weight="700" text-anchor="middle">Inductor L</text>
                <line x1="295" y1="112" x2="404" y2="112" stroke="#4ade80" stroke-width="2.2"/>

                <!-- Output Capacitor C & Load RL -->
                <circle cx="332" cy="112" r="4" fill="#c084fc"/>
                <line x1="332" y1="112" x2="332" y2="164" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="318" y1="164" x2="346" y2="164" stroke="#c084fc" stroke-width="2.8"/>
                <line x1="318" y1="172" x2="346" y2="172" stroke="#c084fc" stroke-width="2.8"/>
                <text x="312" y="172" fill="#c084fc" font-size="11" font-weight="700" text-anchor="end">C</text>
                <line x1="332" y1="172" x2="332" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <line x1="404" y1="112" x2="404" y2="146" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="395" y="146" width="18" height="46" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.6"/>
                <text x="420" y="173" fill="#4ade80" font-size="11" font-weight="700">R_L</text>
                <line x1="404" y1="192" x2="404" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Ground Bus -->
                <line x1="61" y1="182" x2="61" y2="232" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="61" y1="232" x2="404" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Animated Phase 1 (SW ON) & Phase 2 (SW OFF Freewheel) Loops -->
                <g id="smps-on-loop">
                    ${drawFlowDots('M 61 112 L 404 112 L 404 232 L 61 232', 5, 1.3, '#4ade80', 3.4)}
                </g>
                <g id="smps-off-loop" style="display:none;">
                    ${drawFlowDots('M 200 232 L 200 112 L 404 112 L 404 232 Z', 4, 1.2, '#38bdf8', 3.4)}
                </g>
            `;
        } else {
            // Boost Converter
            schSvg = `
                <!-- Input Source -->
                <rect x="34" y="138" width="54" height="44" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.6"/>
                <text x="61" y="164" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">${vin.toFixed(0)}V</text>
                <line x1="61" y1="138" x2="61" y2="112" stroke="#cbd5e1" stroke-width="2.2"/>
                <line x1="61" y1="112" x2="108" y2="112" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Inductor L (x=108..188, y=112) -->
                <path d="M 108 112 Q 118 94 128 112 Q 138 94 148 112 Q 158 94 168 112 Q 178 94 188 112" stroke="#4ade80" stroke-width="2.6" fill="none"/>
                <text x="148" y="90" fill="#4ade80" font-size="11.5" font-weight="700" text-anchor="middle">Inductor L</text>
                <line x1="188" y1="112" x2="248" y2="112" stroke="#cbd5e1" stroke-width="2.2"/>
                <circle cx="212" cy="112" r="4" fill="#fbbf24"/>

                <!-- Shunt PWM MOSFET Switch to GND at x=212 -->
                <line x1="212" y1="112" x2="212" y2="152" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="188" y="152" width="48" height="32" rx="5" fill="#1e293b" stroke="#fb923c" stroke-width="1.8"/>
                <text x="212" y="172" fill="#fb923c" font-size="11" font-weight="700" text-anchor="middle">SW Q₁</text>
                <line x1="212" y1="184" x2="212" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Boost Diode D1 (x=264, y=112) -->
                ${drawDiodeH(264, 112, 1, true, '#38bdf8')}
                <text x="264" y="92" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">D₁</text>
                <line x1="278" y1="112" x2="404" y2="112" stroke="#4ade80" stroke-width="2.2"/>

                <!-- Output Capacitor C & Load RL -->
                <circle cx="332" cy="112" r="4" fill="#c084fc"/>
                <line x1="332" y1="112" x2="332" y2="164" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="318" y1="164" x2="346" y2="164" stroke="#c084fc" stroke-width="2.8"/>
                <line x1="318" y1="172" x2="346" y2="172" stroke="#c084fc" stroke-width="2.8"/>
                <text x="312" y="172" fill="#c084fc" font-size="11" font-weight="700" text-anchor="end">C</text>
                <line x1="332" y1="172" x2="332" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <line x1="404" y1="112" x2="404" y2="146" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="395" y="146" width="18" height="46" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.6"/>
                <text x="420" y="173" fill="#4ade80" font-size="11" font-weight="700">R_L</text>
                <line x1="404" y1="192" x2="404" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Ground Bus -->
                <line x1="61" y1="182" x2="61" y2="232" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="61" y1="232" x2="404" y2="232" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Phase 1 (SW ON charges L to GND) & Phase 2 (SW OFF discharges L+Vin through D1 to Load) -->
                <g id="smps-on-loop">
                    ${drawFlowDots('M 61 112 L 212 112 L 212 232 L 61 232', 4, 1.0, '#fb923c', 3.4)}
                </g>
                <g id="smps-off-loop" style="display:none;">
                    ${drawFlowDots('M 61 112 L 404 112 L 404 232 L 61 232', 5, 1.3, '#4ade80', 3.4)}
                </g>
            `;
        }

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- LEFT PANEL: SMPS SCHEMATIC -->
                <rect x="16" y="16" width="446" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="239" y="42" fill="#fb923c" font-size="14" font-weight="700" text-anchor="middle">
                    ${smpsMode === 'buck' ? 'วงจร Buck Converter (V_out = D · V_in)' : 'วงจร Boost Converter (V_out = V_in / (1 − D))'}
                </text>
                <text id="smps-phase-txt" x="239" y="66" fill="#4ade80" font-size="12" font-weight="700" text-anchor="middle">
                    Phase 1: Switch ON — สะสมพลังงานแม่เหล็กใน L
                </text>

                ${schSvg}

                <!-- Formula & Output Box -->
                <rect x="32" y="266" width="414" height="142" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="#334155"/>
                <text x="46" y="290" fill="#cbd5e1" font-size="12">แรงดันเอาต์พุต V_out: <tspan fill="#4ade80" font-size="15" font-weight="800">${vout.toFixed(2)} V</tspan>  (Duty Cycle D = ${duty}%)</text>
                <text x="46" y="316" fill="#cbd5e1" font-size="12">ประสิทธิภาพ SMPS: <tspan fill="#38bdf8" font-weight="700">≈ ${smpsEff}%</tspan>  |  เทียบกับ Linear: <tspan fill="#f87171">${linearEff}</tspan></text>
                <line x1="46" y1="330" x2="432" y2="330" stroke="#1e293b"/>
                <text x="46" y="352" fill="#fbbf24" font-size="11.5" font-weight="700">⚡ กลไกการทำงานสลับ 2 เฟส (ความถี่สวิตชิ่งสูง):</text>
                <text x="46" y="373" fill="#cbd5e1" font-size="11">• <tspan fill="#4ade80" font-weight="700">ช่วง ON:</tspan> สวิตช์ปิดวงจร กระแสพุ่งผ่านขดลวด L สะสมพลังงานแม่เหล็ก</text>
                <text x="46" y="393" fill="#cbd5e1" font-size="11">• <tspan fill="#38bdf8" font-weight="700">ช่วง OFF:</tspan> ${smpsMode === 'buck' ? 'ไดโอด D₁ นำกระแสปล่อยพลังงานจาก L จ่ายโหลดต่อเนื่อง' : 'แรงดันจาก V_in + ขดลวด L รวมกันผ่าน D₁ ยกแรงดันสูงขึ้น!'}</text>

                <!-- RIGHT PANEL: PWM & INDUCTOR CURRENT OSCILLOSCOPE -->
                <rect x="476" y="16" width="408" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                <text x="680" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">สัญญาณ PWM Gate &amp; กระแสขดลวด I_L(t)</text>

                <!-- CH1: PWM Square Wave -->
                <rect x="492" y="56" width="376" height="148" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="56" width="376" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="72" fill="#fb923c" font-size="11.5" font-weight="700">CH1: สัญญาณขับสวิตช์ PWM (V_GS)</text>
                <text x="856" y="72" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">D = ${duty}%</text>
                <line x1="492" y1="184" x2="868" y2="184" stroke="#334155" stroke-dasharray="2,2"/>
                <path id="smps-pwm-trace" d="" fill="none" stroke="#fb923c" stroke-width="2.4"/>

                <!-- CH2: Inductor Triangle Current -->
                <rect x="492" y="216" width="376" height="192" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="492" y="216" width="376" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="504" y="232" fill="#4ade80" font-size="11.5" font-weight="700">CH2: กระแสในขดลวด I_L(t) (โหมด CCM)</text>
                <text x="856" y="232" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">Ramp Up/Down</text>
                <line x1="492" y1="382" x2="868" y2="382" stroke="#334155" stroke-dasharray="2,2"/>
                <text x="500" y="378" fill="#64748b" font-size="9.5">0 A</text>
                <path id="smps-il-trace" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>
            </svg>
        `;

        const trPwm = document.getElementById('smps-pwm-trace');
        const trIl = document.getElementById('smps-il-trace');
        const onLoop = document.getElementById('smps-on-loop');
        const offLoop = document.getElementById('smps-off-loop');
        const phTxt = document.getElementById('smps-phase-txt');

        let isRunning = true;

        function animSMPS() {
            if (!isRunning) return;
            phase = (phase + 0.012) % 1.0;

            const x0 = 492;
            const w = 376;
            const cycles = 3;
            const cycW = w / cycles;

            let dPwm = '';
            let dIl = '';
            const yLowPwm = 184;
            const yHighPwm = 104;
            const yMinIl = 342;
            const yMaxIl = 264;

            for (let i = 0; i <= w; i += 2) {
                const pos = (((i / cycW) + phase) % 1.0 + 1.0) % 1.0;
                const isOn = pos < D;
                const pyPwm = isOn ? yHighPwm : yLowPwm;
                const tri = isOn ? (pos / D) : (1 - (pos - D) / (1 - D));
                const pyIl = yMinIl - tri * (yMinIl - yMaxIl);

                if (i === 0) {
                    dPwm = `M ${x0 + i} ${pyPwm}`;
                    dIl = `M ${x0 + i} ${pyIl.toFixed(1)}`;
                } else {
                    dPwm += ` L ${x0 + i} ${pyPwm}`;
                    dIl += ` L ${x0 + i} ${pyIl.toFixed(1)}`;
                }
            }

            if (trPwm) trPwm.setAttribute('d', dPwm);
            if (trIl) trIl.setAttribute('d', dIl);

            const curOn = phase < D;
            if (onLoop) onLoop.style.display = curOn ? 'inline' : 'none';
            if (offLoop) offLoop.style.display = curOn ? 'none' : 'inline';
            if (phTxt) {
                phTxt.textContent = curOn
                    ? '⚡ Phase 1: Switch ON — กระแสไหลสะสมพลังงานในขดลวด L'
                    : '🔄 Phase 2: Switch OFF — ไดโอด D₁ นำกระแสปล่อยพลังงานจาก L';
                phTxt.setAttribute('fill', curOn ? '#4ade80' : '#38bdf8');
            }

            animId = requestAnimationFrame(animSMPS);
        }

        animId = requestAnimationFrame(animSMPS);
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
   6. PROTECTION SIMULATOR: OCP, OVP Crowbar, Reverse Polarity & Comparison
   ========================================================================= */
function initProtectionSimulator(canvas, controls) {
    let fault = 'normal'; // 'normal' | 'short' | 'ovp' | 'reverse'
    let protEnabled = true;
    let phase = 0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-pr-norm">✅ ปกติ (Normal)</button>
            <button class="toggle-pill" id="btn-pr-short">⚡ ลัดวงจร (Short/OCP)</button>
            <button class="toggle-pill" id="btn-pr-ovp">💥 แรงดันเกิน (OVP)</button>
            <button class="toggle-pill" id="btn-pr-rev">🔄 ต่อกลับขั้ว (Reverse)</button>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-pr-en">🛡️ ระบบป้องกัน: [ON]</button>
        </div>
    `;

    const bNorm = document.getElementById('btn-pr-norm');
    const bShort = document.getElementById('btn-pr-short');
    const bOvp = document.getElementById('btn-pr-ovp');
    const bRev = document.getElementById('btn-pr-rev');
    const bEn = document.getElementById('btn-pr-en');

    function setFault(f) {
        fault = f;
        bNorm.classList.toggle('active', f === 'normal');
        bShort.classList.toggle('active', f === 'short');
        bOvp.classList.toggle('active', f === 'ovp');
        bRev.classList.toggle('active', f === 'reverse');
        render();
    }

    bNorm.addEventListener('click', () => setFault('normal'));
    bShort.addEventListener('click', () => setFault('short'));
    bOvp.addEventListener('click', () => setFault('ovp'));
    bRev.addEventListener('click', () => setFault('reverse'));

    bEn.addEventListener('click', () => {
        protEnabled = !protEnabled;
        bEn.classList.toggle('active', protEnabled);
        bEn.innerText = `🛡️ ระบบป้องกัน: [${protEnabled ? 'ON' : 'OFF - ทดสอบพัง!'}]`;
        bEn.style.borderColor = protEnabled ? '#4ade80' : '#f87171';
        render();
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        const isFault = fault !== 'normal';
        const isSaved = !isFault || protEnabled;

        let statusTitle = '✅ ระบบทำงานปกติ (+5.00 V / 0.50 A)';
        let statusColor = '#4ade80';
        let loadV = '+5.00 V';
        let loadI = '0.50 A';
        let mechLine1 = 'ไฟเลี้ยงผ่านฟิวส์, MOSFET กันกลับขั้ว และตัวจำกัดกระแสอย่างราบรื่น';
        let mechLine2 = 'โหลด MCU/เซนเซอร์ ทำงานปลอดภัย 100%';
        let fuseIntact = true;
        let crowbarActive = false;

        if (fault === 'short') {
            if (protEnabled) {
                statusTitle = '🛡️ OCP ทำงาน! ตัด/จำกัดกระแสลัดวงจรทันเวลา';
                statusColor = '#fbbf24';
                loadV = '0.00 V (Protected)';
                loadI = '0.00 A (Tripped)';
                fuseIntact = false;
                mechLine1 = 'กระแสพุ่งเกินพิกัด ➔ Polyfuse/OCP ตัดวงจรทันที';
                mechLine2 = 'ป้องกันสายไฟไหม้และหม้อแปลงช็อตเสียหายได้สำเร็จ';
            } else {
                statusTitle = '🔥 อันตราย! กระแสลัดวงจร > 15 A ไหม้เสียหาย!';
                statusColor = '#f87171';
                loadV = '0.00 V';
                loadI = '15.0+ A (SURGE!)';
                mechLine1 = 'ไม่มีฟิวส์/OCP ➔ กระแสช็อตไหลเต็มพิกัดทำให้ลายวงจรไหม้';
                mechLine2 = 'ทรานซิสเตอร์และหม้อแปลงพังเสียหายถาวร!';
            }
        } else if (fault === 'ovp') {
            if (protEnabled) {
                statusTitle = '🛡️ Crowbar OVP ทำงาน! ลัด SCR ให้ฟิวส์ขาดปกป้องโหลด';
                statusColor = '#fbbf24';
                loadV = '0.00 V (Clamped)';
                loadI = '0.00 A (Fuse Blown)';
                fuseIntact = false;
                crowbarActive = true;
                mechLine1 = 'อินพุตพุ่ง +18V ➔ Zener ทริก SCR ช็อตลงกราวด์ + ฟิวส์ขาด';
                mechLine2 = 'โหลด 5V ปลอดภัย ไม่โดนไฟเกิน +18V ทำลาย!';
            } else {
                statusTitle = '💥 วิกฤต! ไฟ +18V ทะลุเข้าโหลด 5V พังทันที!';
                statusColor = '#f87171';
                loadV = '+18.0 V (OVER!)';
                loadI = '3.60 A (DESTROY!)';
                mechLine1 = 'ไม่มี Crowbar OVP ➔ แรงดัน +18V พุ่งตรงเข้าชิปโหลด 5V';
                mechLine2 = 'ไมโครคอนโทรลเลอร์และไอซีปลายทางช็อตไหม้ทันที!';
            }
        } else if (fault === 'reverse') {
            if (protEnabled) {
                statusTitle = '🛡️ Reverse Blocking ทำงาน! MOSFET ปิดกั้นไฟกลับขั้ว';
                statusColor = '#38bdf8';
                loadV = '0.00 V (Blocked)';
                loadI = '0.00 A';
                mechLine1 = 'ต่อสายแบตเตอรี่กลับขั้ว (−12V) ➔ P-MOSFET ปิดกั้นไม่ให้ผ่าน';
                mechLine2 = 'ไม่มีแรงดันตกคร่อม 0.7V เหมือนไดโอด และปลอดภัย 100%';
            } else {
                statusTitle = '💥 พังทลาย! ไฟกลับขั้ว (−12V) ไหลย้อนเข้าโหลด!';
                statusColor = '#f87171';
                loadV = '−12.0 V (REVERSE!)';
                loadI = '−8.0 A (DAMAGE!)';
                mechLine1 = 'ไม่มีระบบป้องกันกลับขั้ว ➔ ไฟลบพุ่งย้อนเข้าคาปาซิเตอร์และชิป';
                mechLine2 = 'ตัวเก็บประจุอิเล็กโทรไลต์ระเบิดและชิปเสียหาย!';
            }
        }

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- LEFT PANEL: PROTECTED POWER RAIL SCHEMATIC -->
                <rect x="16" y="16" width="460" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="246" y="42" fill="#fb923c" font-size="14" font-weight="700" text-anchor="middle">สถาปัตยกรรมระบบป้องกันแหล่งจ่ายไฟ (Protection Rail)</text>

                <!-- Input Source -->
                <rect x="28" y="128" width="66" height="48" rx="6" fill="#1e1b4b" stroke="${fault === 'ovp' || fault === 'reverse' ? '#f87171' : '#38bdf8'}" stroke-width="1.8"/>
                <text x="61" y="150" fill="${fault === 'ovp' || fault === 'reverse' ? '#f87171' : '#38bdf8'}" font-size="12" font-weight="700" text-anchor="middle">
                    ${fault === 'ovp' ? '+18V!' : fault === 'reverse' ? '−12V!' : '+5.0V'}
                </text>
                <text x="61" y="167" fill="#94a3b8" font-size="9.5" text-anchor="middle">Source</text>
                <line x1="94" y1="152" x2="124" y2="152" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Block 1: Fuse / OCP -->
                <rect x="124" y="132" width="68" height="40" rx="6" fill="#1e293b" stroke="${protEnabled ? (fuseIntact ? '#4ade80' : '#fbbf24') : '#475569'}" stroke-width="1.6"/>
                <text x="158" y="124" fill="#cbd5e1" font-size="10.5" font-weight="700" text-anchor="middle">Fuse / OCP</text>
                ${protEnabled ? (fuseIntact
                    ? `<path d="M 134 152 Q 146 140 158 152 Q 170 164 182 152" stroke="#4ade80" stroke-width="2" fill="none"/>`
                    : `<line x1="134" y1="152" x2="148" y2="152" stroke="#fbbf24" stroke-width="2"/><line x1="168" y1="152" x2="182" y2="152" stroke="#fbbf24" stroke-width="2"/><text x="158" y="156" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">ขาด!</text>`
                ) : `<line x1="132" y1="152" x2="184" y2="152" stroke="#64748b" stroke-width="2" stroke-dasharray="3,2"/>`}

                <line x1="192" y1="152" x2="222" y2="152" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Block 2: Reverse Polarity MOSFET -->
                <rect x="222" y="132" width="76" height="40" rx="6" fill="#1e293b" stroke="${protEnabled ? (fault === 'reverse' ? '#38bdf8' : '#4ade80') : '#475569'}" stroke-width="1.6"/>
                <text x="260" y="124" fill="#cbd5e1" font-size="10.5" font-weight="700" text-anchor="middle">Rev-MOSFET</text>
                <text x="260" y="156" fill="${protEnabled ? (fault === 'reverse' ? '#38bdf8' : '#4ade80') : '#64748b'}" font-size="10.5" font-weight="700" text-anchor="middle">
                    ${!protEnabled ? 'Bypass' : fault === 'reverse' ? '⛔ Block' : 'ON'}
                </text>

                <line x1="298" y1="152" x2="394" y2="152" stroke="#cbd5e1" stroke-width="2.2"/>

                <!-- Block 3: Crowbar OVP Shunt (Zener + SCR) at x=342 -->
                <circle cx="342" cy="152" r="4" fill="#fbbf24"/>
                <line x1="342" y1="152" x2="342" y2="192" stroke="${crowbarActive ? '#fbbf24' : '#64748b'}" stroke-width="2"/>
                <rect x="310" y="192" width="64" height="42" rx="6" fill="${crowbarActive ? 'rgba(251, 191, 36, 0.22)' : '#1e293b'}" stroke="${protEnabled ? '#fbbf24' : '#475569'}" stroke-width="1.6"/>
                <text x="342" y="211" fill="${protEnabled ? '#fbbf24' : '#64748b'}" font-size="10.5" font-weight="700" text-anchor="middle">Crowbar</text>
                <text x="342" y="226" fill="#cbd5e1" font-size="9.5" text-anchor="middle">${!protEnabled ? 'OFF' : crowbarActive ? '⚡ Clamp!' : 'Zener+SCR'}</text>
                <line x1="342" y1="234" x2="342" y2="268" stroke="#64748b" stroke-width="2"/>

                <!-- Load Block at x=394 -->
                <rect x="394" y="132" width="64" height="64" rx="8" fill="${isSaved ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.2)'}" stroke="${isSaved ? '#4ade80' : '#f87171'}" stroke-width="2"/>
                <text x="426" y="156" fill="#f1f5f9" font-size="12" font-weight="700" text-anchor="middle">Load</text>
                <text x="426" y="174" fill="${isSaved ? '#4ade80' : '#f87171'}" font-size="10.5" font-weight="700" text-anchor="middle">${isSaved ? (fault === 'normal' ? '5V OK' : 'SAFE!') : '🔥 พัง!'}</text>
                <line x1="426" y1="196" x2="426" y2="268" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Ground Bus -->
                <line x1="61" y1="176" x2="61" y2="268" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="61" y1="268" x2="426" y2="268" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Animated Current Flow according to scenario -->
                ${fault === 'normal' ? drawFlowDots('M 94 152 L 426 152 L 426 268 L 61 268', 5, 1.4, '#4ade80', 3.4) : ''}
                ${crowbarActive ? drawFlowDots('M 94 152 L 342 152 L 342 268 L 61 268', 4, 0.8, '#fbbf24', 3.4) : ''}
                ${!isSaved ? drawFlowDots('M 94 152 L 426 152 L 426 268 L 61 268', 6, 0.65, '#f87171', 3.8) : ''}

                <!-- Protection Mechanism Summary -->
                <rect x="32" y="294" width="428" height="114" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="${statusColor}" stroke-width="1.5"/>
                <text x="46" y="318" fill="${statusColor}" font-size="12.5" font-weight="700">${statusTitle}</text>
                <line x1="46" y1="330" x2="446" y2="330" stroke="#1e293b"/>
                <text x="46" y="354" fill="#cbd5e1" font-size="11.5">${mechLine1}</text>
                <text x="46" y="376" fill="#94a3b8" font-size="11.5">${mechLine2}</text>
                <text x="46" y="398" fill="#fbbf24" font-size="11" font-weight="700">โหลดได้รับ: V_L = ${loadV}  |  I_L = ${loadI}</text>

                <!-- RIGHT PANEL: MONITOR & LINEAR vs SMPS SUMMARY -->
                <rect x="490" y="16" width="394" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                <text x="687" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">กราฟเฝ้าระวังแรงดันขาออก V_Load(t)</text>

                <!-- Output Voltage Scope -->
                <rect x="506" y="56" width="362" height="156" rx="6" fill="#02050c" stroke="#1e293b"/>
                <rect x="506" y="56" width="362" height="24" rx="6" fill="rgba(15, 23, 42, 0.92)"/>
                <text x="518" y="72" fill="${statusColor}" font-size="11" font-weight="700">V_Load Monitor: ${loadV}</text>
                <text x="856" y="72" fill="#cbd5e1" font-size="10.5" text-anchor="end">Safe Limit: ≤ 5.5V</text>

                <line x1="506" y1="158" x2="868" y2="158" stroke="#334155" stroke-dasharray="2,2"/>
                <text x="514" y="154" fill="#64748b" font-size="9">0V</text>
                <line x1="506" y1="130" x2="868" y2="130" stroke="rgba(74,222,128,0.35)" stroke-dasharray="3,2"/>
                <text x="860" y="126" fill="#4ade80" font-size="9" text-anchor="end">+5.0V</text>

                <path id="pr-vload-trace" d="" fill="none" stroke="${statusColor}" stroke-width="2.6"/>

                <!-- Linear vs SMPS Comparison Card -->
                <rect x="506" y="224" width="362" height="186" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
                <text x="520" y="248" fill="#fb923c" font-size="12.5" font-weight="700">⚖️ สรุปการเลือกใช้ Linear vs SMPS:</text>
                <text x="520" y="272" fill="#4ade80" font-size="11.5" font-weight="700">• Linear (LM78xx / LDO):</text>
                <text x="530" y="290" fill="#cbd5e1" font-size="11">สัญญาณรบกวนต่ำมาก เหมาะกับภาคขยายเสียง/อนาล็อก</text>
                <text x="520" y="314" fill="#38bdf8" font-size="11.5" font-weight="700">• Switching (SMPS Buck/Boost):</text>
                <text x="530" y="332" fill="#cbd5e1" font-size="11">ประสิทธิภาพสูง 85–95% ตัวเล็ก ไม่ร้อน เหมาะกับโหลดกำลังสูง</text>
                <line x1="520" y1="346" x2="854" y2="346" stroke="#1e293b"/>
                <text x="520" y="368" fill="#fbbf24" font-size="11.5" font-weight="700">🛡️ กฎความปลอดภัย: <tspan fill="#cbd5e1" font-weight="400">ต่อ Fuse + Reverse Protection</tspan></text>
                <text x="520" y="388" fill="#cbd5e1" font-size="11">และ TVS/Crowbar OVP เสมอเมื่อจ่ายไฟให้ระบบไมโครคอนโทรลเลอร์</text>
            </svg>
        `;

        const trLoad = document.getElementById('pr-vload-trace');
        let isRunning = true;

        function animProt() {
            if (!isRunning) return;
            phase += 0.08;

            const x0 = 508;
            const w = 358;
            const y0V = 158;
            let d = '';

            for (let i = 0; i <= w; i += 4) {
                let y = y0V;
                if (fault === 'normal') {
                    y = 130 + Math.sin(i * 0.1 + phase) * 0.8;
                } else if (protEnabled) {
                    // Protected: tripped to 0V
                    y = y0V;
                } else {
                    // Unprotected damage
                    if (fault === 'ovp') y = 92 + Math.sin(i * 0.4 + phase * 3) * 4;
                    else if (fault === 'reverse') y = 196;
                    else y = y0V + Math.sin(i * 0.6 + phase * 4) * 3;
                }
                d += (i === 0 ? `M ${x0 + i} ${y.toFixed(1)}` : ` L ${x0 + i} ${y.toFixed(1)}`);
            }

            if (trLoad) trLoad.setAttribute('d', d);
            animId = requestAnimationFrame(animProt);
        }

        animId = requestAnimationFrame(animProt);
        window.activeSim = {
            stop: () => {
                isRunning = false;
                if (animId) cancelAnimationFrame(animId);
            }
        };
    }

    render();
}
