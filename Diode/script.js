const topics = {
    'pn-junction': {
        title: 'รอยต่อ P-N (P-N Junction)',
        desc: `เมื่อนำสารกึ่งตัวนำชนิด P (มีโฮลเป็นพาหะข้างมาก) และสารชนิด N (มีอิเล็กตรอนเป็นพาหะข้างมาก) มาต่อประสานกัน จะเกิดบริเวณรอยต่อขึ้น (Junction)\n\nณ บริเวณนี้ อิเล็กตรอนอิสระจากฝั่ง N จะแพร่ (Diffuse) ข้ามรอยต่อไปรวมกับโฮลในฝั่ง P ทำให้สูญเสียพาหะนำประจุไป เกิดเป็นพื้นที่ที่ไม่มีพาหะอิสระ เรียกว่า "Depletion Region" (บริเวณปลอดพาหะ)`,
        extra: `
            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">💡</span> <b style="font-size: 1.15rem;">ศักย์ไฟฟ้าต้านกลับ (Barrier Potential)</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                เมื่ออิเล็กตรอนจาก N ย้ายไป P ทำให้ฝั่ง N มีประจุสุทธิเป็นบวก และฝั่ง P มีประจุสุทธิเป็นลบ เกิดเป็นสนามไฟฟ้าต้านไม่ให้อิเล็กตรอนแพร่ข้ามไปอีก แรงดันต้านนี้เรียกว่า <b>Barrier Potential</b> (ประมาณ 0.7V สำหรับซิลิกอน)
            </p>
        `,
        controls: false,
        svg: `
            <g transform="translate(100, 100)">
                <!-- P Type Block -->
                <rect x="0" y="0" width="150" height="200" fill="rgba(248, 113, 113, 0.2)" stroke="#f87171" stroke-width="2"/>
                <text x="75" y="-15" fill="#f87171" font-size="18px" font-weight="bold" text-anchor="middle">P-Type</text>
                
                <!-- N Type Block -->
                <rect x="250" y="0" width="150" height="200" fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" stroke-width="2"/>
                <text x="325" y="-15" fill="#4ade80" font-size="18px" font-weight="bold" text-anchor="middle">N-Type</text>
                
                <!-- Depletion Region -->
                <rect x="150" y="0" width="100" height="200" fill="rgba(255, 255, 255, 0.1)" stroke="#cbd5e1" stroke-width="2"/>
                <text x="200" y="230" fill="#cbd5e1" font-size="14px" text-anchor="middle">Depletion Region</text>
                
                <!-- P-type Holes -->
                <circle cx="30" cy="40" r="6" fill="transparent" stroke="#f87171" stroke-width="2"/>
                <circle cx="80" cy="70" r="6" fill="transparent" stroke="#f87171" stroke-width="2"/>
                <circle cx="40" cy="120" r="6" fill="transparent" stroke="#f87171" stroke-width="2"/>
                <circle cx="100" cy="160" r="6" fill="transparent" stroke="#f87171" stroke-width="2"/>
                
                <!-- N-type Electrons -->
                <circle cx="280" cy="50" r="6" fill="#4ade80"/>
                <circle cx="340" cy="90" r="6" fill="#4ade80"/>
                <circle cx="310" cy="140" r="6" fill="#4ade80"/>
                <circle cx="370" cy="170" r="6" fill="#4ade80"/>

                <!-- Ions in Depletion Region -->
                <!-- P-side Negative Ions -->
                <circle cx="170" cy="50" r="8" fill="rgba(248,113,113,0.5)"/>
                <text x="170" y="54" fill="white" font-size="10px" text-anchor="middle">-</text>
                <circle cx="170" cy="100" r="8" fill="rgba(248,113,113,0.5)"/>
                <text x="170" y="104" fill="white" font-size="10px" text-anchor="middle">-</text>
                <circle cx="170" cy="150" r="8" fill="rgba(248,113,113,0.5)"/>
                <text x="170" y="154" fill="white" font-size="10px" text-anchor="middle">-</text>
                
                <!-- N-side Positive Ions -->
                <circle cx="230" cy="50" r="8" fill="rgba(74,222,128,0.5)"/>
                <text x="230" y="54" fill="white" font-size="10px" text-anchor="middle">+</text>
                <circle cx="230" cy="100" r="8" fill="rgba(74,222,128,0.5)"/>
                <text x="230" y="104" fill="white" font-size="10px" text-anchor="middle">+</text>
                <circle cx="230" cy="150" r="8" fill="rgba(74,222,128,0.5)"/>
                <text x="230" y="154" fill="white" font-size="10px" text-anchor="middle">+</text>

                <!-- Electric Field Vector -->
                <path d="M 220 20 L 180 20" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="200" y="10" fill="#06b6d4" font-size="12px" text-anchor="middle">E-Field</text>

                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4"/>
                    </marker>
                </defs>
            </g>
        `
    },
    'bias': {
        title: 'การไบแอส (Forward / Reverse Bias)',
        desc: `การจ่ายไฟให้ไดโอดมี 2 แบบ:\n1. **Forward Bias (ไบแอสตรง):** จ่ายบวกเข้า P ลบเข้า N ทำให้ Depletion Region แคบลง และถ้าแรงดันมากกว่า 0.7V กระแสจะไหลผ่านไดโอดได้\n2. **Reverse Bias (ไบแอสกลับ):** จ่ายบวกเข้า N ลบเข้า P ทำให้ Depletion Region กว้างขึ้น กระแสไหลผ่านไม่ได้ (เกิดสภาพเป็นฉนวน)`,
        extra: `
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <div style="flex: 1; padding: 1rem; background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 8px;">
                    <b style="color: #10b981;">Forward Bias</b><br>เหมือนการ "เปิดวาล์วน้ำ" ให้น้ำไหลผ่าน
                </div>
                <div flex: 1; padding: 1rem; background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: 8px;">
                    <b style="color: #ef4444;">Reverse Bias</b><br>เหมือนการ "ปิดวาล์วน้ำ" ปิดกั้นการไหล
                </div>
            </div>
        `,
        controls: true,
        svg: `
            <g transform="translate(100, 80)">
                <!-- Battery Source -->
                <g id="battery-fwd">
                    <rect x="150" y="240" width="100" height="40" fill="none" stroke="#cbd5e1" stroke-width="2"/>
                    <text x="170" y="265" fill="#f87171" font-size="18px" font-weight="bold">+</text>
                    <text x="230" y="265" fill="#4ade80" font-size="18px" font-weight="bold">-</text>
                    <path d="M 150 260 L 50 260 L 50 100" stroke="#cbd5e1" stroke-width="2" fill="none"/>
                    <path d="M 250 260 L 350 260 L 350 100" stroke="#cbd5e1" stroke-width="2" fill="none"/>
                    <text x="200" y="295" fill="#cbd5e1" font-size="14px" text-anchor="middle">Forward Bias State</text>
                </g>

                <!-- Diode Block -->
                <rect x="50" y="50" width="300" height="100" fill="none" stroke="#cbd5e1" stroke-width="2"/>
                
                <rect x="50" y="50" width="130" height="100" fill="rgba(248, 113, 113, 0.2)"/>
                <text x="115" y="40" fill="#f87171" font-weight="bold">P</text>
                
                <rect x="220" y="50" width="130" height="100" fill="rgba(74, 222, 128, 0.2)"/>
                <text x="285" y="40" fill="#4ade80" font-weight="bold">N</text>
                
                <!-- Depletion Region Animated (Forward is narrow) -->
                <rect id="depletion-rect" x="180" y="50" width="40" height="100" fill="rgba(255, 255, 255, 0.15)"/>
                <text id="depletion-text" x="200" y="105" fill="#cbd5e1" font-size="12px" text-anchor="middle">Narrow</text>

                <!-- Current Flow Animation -->
                <g id="current-anim" style="display:block;">
                    <circle cx="50" cy="100" r="4" fill="#fbbf24">
                        <animate attributeName="cx" from="50" to="350" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="100" r="4" fill="#fbbf24">
                        <animate attributeName="cx" from="50" to="350" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                </g>
            </g>
        `
    },
    'iv-curve': {
        title: 'กราฟลักษณะสมบัติ (I-V Curve)',
        desc: `กราฟแสดงความสัมพันธ์ระหว่างแรงดัน (V) และกระแส (I) ของไดโอด\n- เมื่อ V > 0 (Forward) กระแสจะเริ่มไหลเพิ่มขึ้นอย่างรวดเร็วที่แรงดัน Cut-in (ประมาณ 0.7V สำหรับ Si)\n- เมื่อ V < 0 (Reverse) จะมีกระแสรั่วไหล (Leakage Current) น้อยมาก จนกว่าจะถึงจุด Breakdown Voltage กระแสจึงจะพุ่งสูงปรี๊ด ซึ่งอาจทำให้ไดโอดพังได้`,
        extra: `
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;">
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(6, 182, 212, 0.1);">Si (ซิลิกอน)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;">แรงดัน Cut-in ≈ 0.7V (นิยมใช้ที่สุด ทนความร้อนสูง)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(6, 182, 212, 0.1);">Ge (เจอร์เมเนียม)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;">แรงดัน Cut-in ≈ 0.3V (สูญเสียพลังงานน้อย แต่นำกระแสรั่วไหลง่าย)</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: false,
        svg: `
            <g transform="translate(300, 200)">
                <!-- Grid Lines -->
                <line x1="-250" y1="0" x2="250" y2="0" stroke="#334155" stroke-width="2"/> <!-- X Axis -->
                <line x1="0" y1="-150" x2="0" y2="150" stroke="#334155" stroke-width="2"/> <!-- Y Axis -->
                
                <text x="230" y="-10" fill="#cbd5e1" font-size="14px">V (Volts)</text>
                <text x="10" y="-130" fill="#cbd5e1" font-size="14px">I (mA)</text>

                <!-- Si Curve -->
                <path d="M -200 130 C -200 130, -50 130, 0 130 C 50 130, 70 130, 80 -120" fill="none" stroke="#06b6d4" stroke-width="3"/>
                <text x="90" y="-100" fill="#06b6d4" font-weight="bold">Silicon</text>
                
                <!-- Ge Curve -->
                <path d="M -200 130 C -200 130, -50 130, 0 130 C 20 130, 30 130, 40 -120" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4"/>
                <text x="45" y="-100" fill="#8b5cf6" font-weight="bold">Germanium</text>

                <!-- Markers -->
                <!-- Cut-in V -->
                <circle cx="70" cy="0" r="4" fill="#f87171"/>
                <text x="75" y="20" fill="#f87171" font-size="12px">0.7V</text>

                <!-- Breakdown V -->
                <circle cx="-190" cy="0" r="4" fill="#f87171"/>
                <text x="-210" y="-10" fill="#f87171" font-size="12px">-VBR</text>
                <path d="M -190 0 C -190 50, -195 100, -200 130" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="2"/>
                <text x="-250" y="100" fill="#f87171" font-size="12px">Breakdown</text>
            </g>
        `
    },
    'rectifier': {
        title: 'วงจรเรียงกระแส (Rectifier)',
        desc: `ไดโอดทำหน้าที่แปลงไฟสลับ (AC) เป็นไฟตรง (DC) มี 3 รูปแบบหลัก:\n1. **Half-Wave:** ใช้ไดโอด 1 ตัว ยอมให้คลื่นบวกผ่าน คลื่นลบถูกตัดทิ้ง\n2. **Full-Wave Center-Tap:** ใช้หม้อแปลงมีแทปกลาง และไดโอด 2 ตัว ได้คลื่นเต็มใบ\n3. **Full-Wave Bridge:** ใช้ไดโอด 4 ตัวต่อแบบสะพาน ได้คลื่นเต็มใบโดยไม่ต้องใช้หม้อแปลงแทปกลาง`,
        extra: `
            <div style="padding: 1rem; background: rgba(251, 191, 36, 0.1); border-left: 4px solid #fbbf24; border-radius: 4px; margin-top: 1rem;">
                <b>คลื่นที่ได้ยังไม่เรียบ (Pulsating DC)</b><br>
                วงจรนี้ทำให้กระแสไหลทิศทางเดียว แต่ระดับแรงดันยังกระเพื่อม (Ripple) จึงต้องใช้ <b>Capacitor (ตัวเก็บประจุ)</b> มาทำหน้าที่ Filter เพื่อให้ไฟเรียบขึ้นในขั้นตอนถัดไป
            </div>
        `,
        controls: true,
        svg: `
            <g transform="translate(50, 100)">
                <!-- Input AC Wave -->
                <text x="0" y="-30" fill="#cbd5e1" font-weight="bold">Input AC (Sine Wave)</text>
                <line x1="0" y1="0" x2="150" y2="0" stroke="#334155" stroke-width="1"/>
                <path d="M 0 0 Q 37.5 -80 75 0 T 150 0" fill="none" stroke="#fbbf24" stroke-width="3"/>

                <!-- Arrow -->
                <path d="M 180 0 L 220 0" stroke="#cbd5e1" stroke-width="2" marker-end="url(#arrowhead)"/>
                
                <!-- Output Half Wave -->
                <text x="250" y="-30" fill="#cbd5e1" font-weight="bold">Output (Half-Wave)</text>
                <line x1="250" y1="0" x2="400" y2="0" stroke="#334155" stroke-width="1"/>
                <path id="hw-path" d="M 250 0 Q 287.5 -80 325 0 L 400 0" fill="none" stroke="#4ade80" stroke-width="3"/>
                
                <!-- Output Full Wave (Hidden by default) -->
                <path id="fw-path" d="M 250 0 Q 287.5 -80 325 0 Q 362.5 -80 400 0" fill="none" stroke="#06b6d4" stroke-width="3" style="display:none;"/>
            </g>
        `
    },
    'clipper-clamper': {
        title: 'Clipper และ Clamper',
        desc: `**วงจรขลิบสัญญาณ (Clipper):** ทำหน้าที่ตัดรูปคลื่นส่วนที่ไม่ต้องการออก (เช่น ตัดยอดคลื่นเพื่อป้องกันแรงดันเกิน)\n**วงจรเลื่อนระดับแรงดัน (Clamper):** ใช้ตัวเก็บประจุ (C) ร่วมกับไดโอด เพื่อย้ายแกน 0V ของสัญญาณให้สูงขึ้นหรือต่ำลง โดยไม่เสียรูปคลื่นเดิม (ใช้ในการแทรกแรงดัน DC เข้าไปใน AC)`,
        extra: `
            <div style="margin-top: 1rem; line-height: 1.8;">
                วงจร Clipper นิยมนำไปใช้ป้องกันความเสียหายของวงจรดิจิตอลเมื่อมี Noise หรือ Spike เข้ามา<br>
                ส่วน Clamper (บางครั้งเรียกว่า DC Restorer) นิยมใช้ในวงจรประมวลผลสัญญาณทีวีอนาล็อก
            </div>
        `,
        controls: false,
        svg: `
            <g transform="translate(50, 100)">
                <!-- Clipper Example -->
                <text x="0" y="-50" fill="#cbd5e1" font-weight="bold">Positive Clipper</text>
                <line x1="0" y1="0" x2="120" y2="0" stroke="#334155" stroke-width="1"/>
                <line x1="0" y1="-30" x2="120" y2="-30" stroke="#ef4444" stroke-width="1" stroke-dasharray="4"/>
                <text x="125" y="-25" fill="#ef4444" font-size="12px">Clip Level</text>
                
                <path d="M 0 0 C 20 -100, 40 -100, 60 0 C 80 100, 100 100, 120 0" fill="none" stroke="#cbd5e1" stroke-width="1"/> <!-- Original -->
                <path d="M 0 0 C 10 -50, 15 -30, 20 -30 L 40 -30 C 45 -30, 50 -50, 60 0 C 80 100, 100 100, 120 0" fill="none" stroke="#f59e0b" stroke-width="3"/> <!-- Clipped -->

                <!-- Clamper Example -->
                <text x="250" y="-50" fill="#cbd5e1" font-weight="bold">Positive Clamper</text>
                <line x1="250" y1="0" x2="400" y2="0" stroke="#334155" stroke-width="1"/>
                <line x1="250" y1="-70" x2="400" y2="-70" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4"/>
                <text x="410" y="-65" fill="#3b82f6" font-size="12px">New DC Level</text>

                <path d="M 250 0 C 275 -100, 325 -100, 350 0 C 375 100, 425 100, 450 0" fill="none" stroke="#cbd5e1" stroke-width="1"/> <!-- Original -->
                <path d="M 250 -70 C 275 -170, 325 -170, 350 -70 C 375 30, 425 30, 450 -70" fill="none" stroke="#3b82f6" stroke-width="3"/> <!-- Clamped -->
            </g>
        `
    },
    'zener': {
        title: 'ซีเนอร์ไดโอด (Zener Diode)',
        desc: `ไดโอดทั่วไปเมื่อรับแรงดันย้อนกลับ (Reverse Bias) จนถึงจุด Breakdown จะพัง แต่ **Zener Diode** ถูกออกแบบมาให้ทำงานในสภาวะ Breakdown ได้อย่างปลอดภัย!\n\nเมื่อต่อไบแอสกลับ และแรงดันตกคร่อมสูงถึง **Vz (Zener Voltage)** ซีเนอร์จะยอมให้กระแสไหลผ่านเพื่อ "รักษาระดับแรงดัน" ให้คงที่ นิยมใช้เป็นตัวควบคุมแรงดัน (Voltage Regulator)`,
        extra: `
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 8px; padding: 1.5rem; margin-top: 1rem;">
                <h3 style="color: #10b981; margin-bottom: 0.5rem;">หลักการ Regulator</h3>
                <p>ถ้าไฟเข้า (Vin) สวิงหรือเปลี่ยนแปลงตลอดเวลา แต่ตราบใดที่ Vin > Vz ตัว Zener Diode จะรักษาระดับแรงดันตกคร่อมตัวมันและโหลด (Vout) ให้คงที่เท่ากับ Vz เสมอ (ส่วนต่างแรงดันจะไปตกคร่อมที่ตัวต้านทาน RS แทน)</p>
            </div>
        `,
        controls: false,
        svg: `
            <g transform="translate(150, 100)">
                <!-- Circuit Diagram -->
                <!-- Vin -->
                <circle cx="0" cy="50" r="15" fill="none" stroke="#fbbf24" stroke-width="2"/>
                <text x="0" y="55" fill="#fbbf24" font-weight="bold" text-anchor="middle">~</text>
                <text x="-40" y="55" fill="#cbd5e1">Vin</text>

                <!-- Resistor RS -->
                <path d="M 15 0 L 50 0 L 55 -10 L 65 10 L 75 -10 L 85 10 L 95 -10 L 100 0 L 150 0" fill="none" stroke="#cbd5e1" stroke-width="2"/>
                <text x="75" y="-20" fill="#cbd5e1" text-anchor="middle">Rs</text>

                <!-- Zener Diode -->
                <path d="M 150 0 L 150 40" fill="none" stroke="#06b6d4" stroke-width="2"/>
                <!-- Zener Cathode Line with flaps -->
                <path d="M 135 45 L 165 45 L 170 35 M 135 45 L 130 55" fill="none" stroke="#06b6d4" stroke-width="2"/>
                <polygon points="150,45 135,70 165,70" fill="#06b6d4"/>
                <path d="M 150 70 L 150 100" fill="none" stroke="#06b6d4" stroke-width="2"/>
                <text x="180" y="60" fill="#06b6d4" font-weight="bold">Vz</text>

                <!-- Load -->
                <path d="M 150 0 L 250 0 L 250 30 L 240 35 L 260 45 L 240 55 L 260 65 L 240 75 L 250 80 L 250 100 L 150 100 L 15 100" fill="none" stroke="#cbd5e1" stroke-width="2"/>
                <text x="275" y="60" fill="#cbd5e1">Load</text>

                <circle cx="250" cy="0" r="3" fill="#cbd5e1"/>
                <circle cx="250" cy="100" r="3" fill="#cbd5e1"/>
                <text x="250" y="-15" fill="#10b981" font-weight="bold" text-anchor="middle">Vout = Vz</text>
            </g>
        `
    },
    'quiz': {
        title: '📝 คำถามท้ายบท (Quiz)',
        desc: 'ทดสอบความเข้าใจเกี่ยวกับไดโอดและการประยุกต์ใช้งาน',
        extra: `
            <div id="quiz-container" style="background: rgba(15, 23, 42, 0.6); padding: 2rem; border-radius: 12px; border: 1px solid var(--border);">
                <!-- Quiz dynamically injected here -->
            </div>
        `,
        controls: false,
        svg: ''
    }
};

const quizQuestions = [
    {
        q: '1. หากต้องการให้ไดโอดนำกระแส ต้องทำการจ่ายไฟ (Bias) แบบใด?',
        choices: ['ก. ไบแอสกลับ (Reverse Bias)', 'ข. ไบแอสตรง (Forward Bias)', 'ค. จ่ายแรงดันกระแสสลับเท่านั้น', 'ง. ไม่ต้องจ่ายไฟ'],
        a: 1
    },
    {
        q: '2. ไดโอดซิลิกอน (Silicon Diode) มีแรงดันตกคร่อมขณะนำกระแส (Cut-in Voltage) ประมาณกี่โวลต์?',
        choices: ['ก. 0.3V', 'ข. 0.5V', 'ค. 0.7V', 'ง. 1.2V'],
        a: 2
    },
    {
        q: '3. วงจรใดที่ใช้แปลงไฟฟ้ากระแสสลับ (AC) เป็นไฟฟ้ากระแสตรง (DC)?',
        choices: ['ก. วงจรขยาย (Amplifier)', 'ข. วงจรตัดคลื่น (Clipper)', 'ค. วงจรเลื่อนระดับแรงดัน (Clamper)', 'ง. วงจรเรียงกระแส (Rectifier)'],
        a: 3
    },
    {
        q: '4. ไดโอดชนิดใดที่ออกแบบมาให้ทำงานในสภาวะ ไบแอสกลับ (Reverse Bias) เพื่อรักษาระดับแรงดันให้คงที่?',
        choices: ['ก. LED (Light Emitting Diode)', 'ข. Zener Diode', 'ค. Schottky Diode', 'ง. Tunnel Diode'],
        a: 1
    }
];

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    let html = '';
    quizQuestions.forEach((item, index) => {
        html += `
            <div class="quiz-question" style="margin-bottom: 1.5rem;">
                <h3 style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--primary);">${item.q}</h3>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    ${item.choices.map((choice, i) => `
                        <label style="cursor: pointer; padding: 0.75rem 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid var(--border); transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                            <input type="radio" name="q${index}" value="${i}" style="margin-right: 0.5rem; accent-color: var(--primary);"> ${choice}
                        </label>
                    `).join('')}
                </div>
                <div id="feedback-${index}" style="margin-top: 0.75rem; font-weight: bold; font-size: 0.95rem;"></div>
            </div>
        `;
    });
    
    html += `<button onclick="checkQuiz()" style="background: var(--primary); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-size: 1rem; font-family: 'Sarabun'; cursor: pointer; margin-top: 1rem; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3); transition: background 0.2s;" onmouseover="this.style.background='var(--primary-dark)'" onmouseout="this.style.background='var(--primary)'">ส่งคำตอบ (Submit)</button>`;
    html += `<div id="quiz-result" style="margin-top: 1.5rem; font-size: 1.25rem; font-weight: bold; text-align: center; padding: 1rem; border-radius: 8px;"></div>`;
    
    container.innerHTML = html;
}

function checkQuiz() {
    let score = 0;
    quizQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const feedback = document.getElementById(`feedback-${index}`);
        if (selected) {
            const val = parseInt(selected.value);
            if (val === item.a) {
                score++;
                feedback.innerHTML = '<span style="color: #4ade80;">✅ ถูกต้อง!</span>';
            } else {
                feedback.innerHTML = `<span style="color: #f87171;">❌ ผิด (คำตอบที่ถูกคือ: ${item.choices[item.a]})</span>`;
            }
        } else {
            feedback.innerHTML = '<span style="color: #fbbf24;">⚠️ กรุณาเลือกคำตอบ</span>';
        }
    });
    
    const resultBox = document.getElementById('quiz-result');
    resultBox.innerHTML = `คะแนนของคุณ: ${score} / ${quizQuestions.length}`;
    if(score === quizQuestions.length) {
        resultBox.style.background = 'rgba(74, 222, 128, 0.2)';
        resultBox.style.color = '#4ade80';
        resultBox.style.border = '1px solid #4ade80';
    } else {
        resultBox.style.background = 'rgba(251, 191, 36, 0.2)';
        resultBox.style.color = '#fbbf24';
        resultBox.style.border = '1px solid #fbbf24';
    }
}

let currentTopic = 'pn-junction';

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    loadTopic('pn-junction');
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const keys = Object.keys(topics);
    
    keys.forEach(key => {
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
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav-${topicKey}`).classList.add('active');

    document.getElementById('topic-title').innerText = data.title;
    document.getElementById('topic-desc').innerHTML = data.desc.replace(/\\n/g, '<br>');
    
    // Bold replacement for simple markdown
    document.getElementById('topic-desc').innerHTML = document.getElementById('topic-desc').innerHTML.replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>');

    document.getElementById('topic-extra').innerHTML = data.extra;

    const simulatorCard = document.querySelector('.simulator-card');
    if (topicKey === 'quiz') {
        if(simulatorCard) simulatorCard.style.display = 'none';
        renderQuiz();
    } else {
        if(simulatorCard) simulatorCard.style.display = 'block';
    }

    document.getElementById('svg-container').innerHTML = data.svg;

    const controlsContainer = document.getElementById('sim-controls');
    controlsContainer.innerHTML = '';

    if (topicKey === 'bias') {
        const btnToggle = document.createElement('button');
        btnToggle.className = 'btn-control';
        btnToggle.innerText = 'เปลี่ยนเป็น Reverse Bias';
        let isForward = true;
        btnToggle.onclick = () => {
            isForward = !isForward;
            const batText1 = document.querySelector('#battery-fwd text:nth-child(2)');
            const batText2 = document.querySelector('#battery-fwd text:nth-child(3)');
            const statusText = document.querySelector('#battery-fwd text:nth-child(6)');
            const depRect = document.getElementById('depletion-rect');
            const depText = document.getElementById('depletion-text');
            const currentAnim = document.getElementById('current-anim');
            
            if(isForward) {
                btnToggle.innerText = 'เปลี่ยนเป็น Reverse Bias';
                batText1.innerHTML = '+'; batText1.setAttribute('x', '170'); batText1.setAttribute('fill', '#f87171');
                batText2.innerHTML = '-'; batText2.setAttribute('x', '230'); batText2.setAttribute('fill', '#4ade80');
                statusText.innerHTML = 'Forward Bias State';
                depRect.setAttribute('width', '40');
                depRect.setAttribute('x', '180');
                depText.innerHTML = 'Narrow';
                currentAnim.style.display = 'block';
            } else {
                btnToggle.innerText = 'เปลี่ยนเป็น Forward Bias';
                batText1.innerHTML = '-'; batText1.setAttribute('x', '170'); batText1.setAttribute('fill', '#4ade80');
                batText2.innerHTML = '+'; batText2.setAttribute('x', '230'); batText2.setAttribute('fill', '#f87171');
                statusText.innerHTML = 'Reverse Bias State';
                depRect.setAttribute('width', '100');
                depRect.setAttribute('x', '150');
                depText.innerHTML = 'Wide (No Current)';
                currentAnim.style.display = 'none';
            }
        };
        controlsContainer.appendChild(btnToggle);
    } else if (topicKey === 'rectifier') {
        const btnHW = document.createElement('button');
        btnHW.className = 'btn-control';
        btnHW.innerText = 'ดูแบบ Half-Wave';
        
        const btnFW = document.createElement('button');
        btnFW.className = 'btn-control';
        btnFW.innerText = 'ดูแบบ Full-Wave';
        
        btnHW.onclick = () => {
            document.getElementById('hw-path').style.display = 'block';
            document.getElementById('fw-path').style.display = 'none';
            document.querySelector('#svg-container text:nth-child(5)').innerHTML = 'Output (Half-Wave)';
        };
        
        btnFW.onclick = () => {
            document.getElementById('hw-path').style.display = 'none';
            document.getElementById('fw-path').style.display = 'block';
            document.querySelector('#svg-container text:nth-child(5)').innerHTML = 'Output (Full-Wave)';
        };
        
        controlsContainer.appendChild(btnHW);
        controlsContainer.appendChild(btnFW);
    } else if (!data.controls) {
        controlsContainer.style.display = 'none';
    }

    if (data.controls) {
        controlsContainer.style.display = 'flex';
    }
}
