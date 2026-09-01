const topics = {
    'pn-junction': {
        title: 'รอยต่อ P-N (P-N Junction)',
        desc: `<b>ไดโอด (Diode)</b> คืออุปกรณ์สารกึ่งตัวนำที่มีขั้ว 2 ขั้ว เกิดจากการนำสาร P (มีโฮลเป็นพาหะข้างมาก) และสาร N (มีอิเล็กตรอนเป็นพาหะข้างมาก) มาประสานกัน เรียกบริเวณนี้ว่า <b>รอยต่อ P-N (P-N Junction)</b><br><br>
<b>🔬 กระบวนการสร้าง Depletion Region</b><br>
เมื่อสาร P และ N มาสัมผัสกัน อิเล็กตรอนอิสระจากฝั่ง N จะ <b>แพร่ (Diffuse)</b> ข้ามรอยต่อไปรวมกับโฮลในฝั่ง P ทำให้เกิด:<br>
• ฝั่ง P: สูญเสียโฮล → เกิดไอออนลบ (Negative Ion) ที่ตรึงอยู่กับที่<br>
• ฝั่ง N: สูญเสียอิเล็กตรอน → เกิดไอออนบวก (Positive Ion) ที่ตรึงอยู่กับที่<br><br>
บริเวณที่ไม่มีพาหะอิสระนี้เรียกว่า <b>Depletion Region</b> และไอออนที่ตรึงอยู่จะสร้างสนามไฟฟ้าภายใน (Built-in Electric Field) ต้านการแพร่ต่อไปจนเกิดสมดุล`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚡ Barrier Potential (ศักย์ไฟฟ้าต้านกลับ)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.9;">สนามไฟฟ้าภายในในรอยต่อสร้าง <b>Barrier Potential (V₀)</b> ขึ้นมา ซึ่งทำหน้าที่เป็น "กำแพงพลังงาน" ป้องกันไม่ให้พาหะส่วนมากแพร่ผ่านได้อีก ค่าความต้านนี้ขึ้นอยู่กับวัสดุ:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                <thead>
                    <tr style="background: rgba(6,182,212,0.15);">
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: left;">วัสดุ</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">Barrier Potential (V₀)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: left;">การใช้งาน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;"><b>Silicon (Si)</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #06b6d4; font-weight: bold;">≈ 0.7 V</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">นิยมมากที่สุด ทนความร้อนสูง</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;"><b>Germanium (Ge)</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #8b5cf6; font-weight: bold;">≈ 0.3 V</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">สูญเสียพลังงานน้อย แต่ไวต่ออุณหภูมิ</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;"><b>GaAs (แกเลียม อาร์เซไนด์)</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #f87171; font-weight: bold;">≈ 1.2 V</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">ใช้ใน LED และวงจรความเร็วสูง</td>
                    </tr>
                </tbody>
            </table>
            <div style="background: rgba(6,182,212,0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px;">
                💡 <b>สรุปง่ายๆ:</b> Depletion Region คือ "โซนห้ามผ่าน" ของพาหะ และ Barrier Potential คือ "ค่าธรรมเนียมผ่านทาง" ที่ต้องใช้แรงดันภายนอกชนะก่อนไดโอดจะยอมให้กระแสไหล
            </div>
        `,
        controls: true,
        svg: `
            <defs>
                <filter id="glow-d" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <radialGradient id="p-grad" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#fca5a5"/>
                    <stop offset="100%" stop-color="#991b1b"/>
                </radialGradient>
                <radialGradient id="n-grad" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#86efac"/>
                    <stop offset="100%" stop-color="#14532d"/>
                </radialGradient>
                <marker id="arrow-d" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#06b6d4"/>
                </marker>
            </defs>
            <g transform="translate(50, 70)">
                <!-- P-Type Block -->
                <rect x="0" y="0" width="190" height="220" rx="8" fill="rgba(248,113,113,0.12)" stroke="#f87171" stroke-width="2"/>
                <text x="95" y="-12" fill="#f87171" font-size="16" font-weight="bold" text-anchor="middle">P-Type</text>
                <text x="95" y="-28" fill="#f87171" font-size="11" text-anchor="middle">(Holes เป็นพาหะหลัก)</text>

                <!-- N-Type Block -->
                <rect x="310" y="0" width="190" height="220" rx="8" fill="rgba(74,222,128,0.12)" stroke="#4ade80" stroke-width="2"/>
                <text x="405" y="-12" fill="#4ade80" font-size="16" font-weight="bold" text-anchor="middle">N-Type</text>
                <text x="405" y="-28" fill="#4ade80" font-size="11" text-anchor="middle">(Electrons เป็นพาหะหลัก)</text>

                <!-- Depletion Region -->
                <rect x="190" y="0" width="120" height="220" rx="0" fill="rgba(148,163,184,0.08)" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>
                <text x="250" y="248" fill="#94a3b8" font-size="12" text-anchor="middle">Depletion Region</text>

                <!-- P-side Holes (open circles) -->
                <circle cx="40" cy="40" r="10" fill="transparent" stroke="#f87171" stroke-width="2.5" filter="url(#glow-d)"/>
                <text x="40" y="45" fill="#f87171" font-size="14" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="110" cy="30" r="10" fill="transparent" stroke="#f87171" stroke-width="2.5" filter="url(#glow-d)"/>
                <text x="110" y="35" fill="#f87171" font-size="14" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="55" cy="100" r="10" fill="transparent" stroke="#f87171" stroke-width="2.5" filter="url(#glow-d)"/>
                <text x="55" y="105" fill="#f87171" font-size="14" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="140" cy="80" r="10" fill="transparent" stroke="#f87171" stroke-width="2.5" filter="url(#glow-d)"/>
                <text x="140" y="85" fill="#f87171" font-size="14" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="70" cy="170" r="10" fill="transparent" stroke="#f87171" stroke-width="2.5" filter="url(#glow-d)"/>
                <text x="70" y="175" fill="#f87171" font-size="14" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="130" cy="160" r="10" fill="transparent" stroke="#f87171" stroke-width="2.5" filter="url(#glow-d)"/>
                <text x="130" y="165" fill="#f87171" font-size="14" text-anchor="middle" font-weight="bold">+</text>

                <!-- N-side Free Electrons -->
                <circle cx="360" cy="35" r="8" fill="#4ade80" filter="url(#glow-d)">
                    <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="420" cy="60" r="8" fill="#4ade80" filter="url(#glow-d)">
                    <animate attributeName="r" values="8;10;8" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="380" cy="130" r="8" fill="#4ade80" filter="url(#glow-d)">
                    <animate attributeName="r" values="8;10;8" dur="1.8s" begin="0.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="460" cy="110" r="8" fill="#4ade80" filter="url(#glow-d)">
                    <animate attributeName="r" values="8;10;8" dur="2.2s" begin="0.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="350" cy="180" r="8" fill="#4ade80" filter="url(#glow-d)">
                    <animate attributeName="r" values="8;10;8" dur="2.8s" begin="1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="460" cy="175" r="8" fill="#4ade80" filter="url(#glow-d)">
                    <animate attributeName="r" values="8;10;8" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                </circle>

                <!-- Depletion Region Ions: P-side negative -->
                <circle cx="215" cy="45" r="11" fill="rgba(248,113,113,0.5)" stroke="#f87171" stroke-width="1.5"/>
                <text x="215" y="50" fill="white" font-size="16" text-anchor="middle" font-weight="bold">−</text>
                <circle cx="215" cy="110" r="11" fill="rgba(248,113,113,0.5)" stroke="#f87171" stroke-width="1.5"/>
                <text x="215" y="115" fill="white" font-size="16" text-anchor="middle" font-weight="bold">−</text>
                <circle cx="215" cy="175" r="11" fill="rgba(248,113,113,0.5)" stroke="#f87171" stroke-width="1.5"/>
                <text x="215" y="180" fill="white" font-size="16" text-anchor="middle" font-weight="bold">−</text>

                <!-- Depletion Region Ions: N-side positive -->
                <circle cx="285" cy="45" r="11" fill="rgba(74,222,128,0.5)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="285" y="50" fill="white" font-size="16" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="285" cy="110" r="11" fill="rgba(74,222,128,0.5)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="285" y="115" fill="white" font-size="16" text-anchor="middle" font-weight="bold">+</text>
                <circle cx="285" cy="175" r="11" fill="rgba(74,222,128,0.5)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="285" y="180" fill="white" font-size="16" text-anchor="middle" font-weight="bold">+</text>

                <!-- Electric Field Arrow -->
                <line x1="285" y1="260" x2="215" y2="260" stroke="#06b6d4" stroke-width="2.5" marker-end="url(#arrow-d)" filter="url(#glow-d)"/>
                <text x="250" y="285" fill="#06b6d4" font-size="13" text-anchor="middle" font-weight="bold">⚡ Built-in E-Field</text>

                <!-- Diffusion Arrows (subtle) -->
                <path d="M 170 60 Q 200 55 220 50" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.6"/>
                <text x="170" y="55" fill="#94a3b8" font-size="10" text-anchor="end">e⁻ Diffuse</text>
                <path d="M 295 60 Q 270 55 245 50" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.6"/>
                <text x="300" y="55" fill="#f87171" font-size="10" text-anchor="start">h⁺ Diffuse</text>
            </g>
        `
    },
    'bias': {
        title: 'การไบแอส (Forward / Reverse Bias)',
        desc: `การนำแรงดันไฟฟ้าภายนอกมาต่อกับไดโอดเรียกว่า <b>การไบแอส (Biasing)</b> มี 2 รูปแบบ:<br><br>
<b>🟢 Forward Bias (ไบแอสตรง)</b><br>
ต่อขั้ว <b>บวก (+)</b> ของแหล่งจ่ายเข้า <b>ขั้ว P (Anode)</b> และขั้ว <b>ลบ (−)</b> เข้าขั้ว <b>N (Cathode)</b><br>
• สนามไฟฟ้าภายนอกสวนทางกับ Built-in Field → Depletion Region <b>แคบลง</b><br>
• เมื่อ V > V₀ (0.7V สำหรับ Si) → กระแสไหลได้อย่างอิสระ (แบบ Exponential)<br>
• ใช้สัญลักษณ์: Diode model = แรงดันตก ≈ 0.7V<br><br>
<b>🔴 Reverse Bias (ไบแอสกลับ)</b><br>
ต่อขั้ว <b>บวก (+)</b> เข้า <b>ขั้ว N</b> และขั้ว <b>ลบ (−)</b> เข้า <b>ขั้ว P</b><br>
• สนามไฟฟ้าภายนอกเสริม Built-in Field → Depletion Region <b>กว้างขึ้น</b><br>
• กระแสส่วนมากไม่สามารถผ่านได้ (มีเพียง Reverse Saturation Current I₀ ที่น้อยมากๆ ~nA)<br>
• หากแรงดันถึงจุด Breakdown (VBR) → กระแสพุ่งสูงอย่างรวดเร็ว`,
        extra: `
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div style="padding: 1rem; background: rgba(16,185,129,0.1); border: 1px solid #10b981; border-radius: 8px;">
                    <b style="color: #10b981; font-size: 1.05rem;">✅ Forward Bias</b><br>
                    <div style="margin-top: 0.5rem; color: #cbd5e1; line-height: 1.8;">
                        เปรียบเหมือน "เปิดวาล์วน้ำ"<br>
                        กระแสไหลได้ปกติ<br>
                        แรงดันตก ≈ 0.7V (Si)
                    </div>
                </div>
                <div style="padding: 1rem; background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 8px;">
                    <b style="color: #ef4444; font-size: 1.05rem;">❌ Reverse Bias</b><br>
                    <div style="margin-top: 0.5rem; color: #cbd5e1; line-height: 1.8;">
                        เปรียบเหมือน "ปิดวาล์วน้ำ"<br>
                        กระแสเกือบเป็น 0 (มีแค่ I₀)<br>
                        หากถึง VBR อาจพัง!
                    </div>
                </div>
            </div>
            <div style="background: rgba(251,191,36,0.1); border-left: 4px solid #fbbf24; padding: 1rem; border-radius: 4px;">
                <b>⚠️ Ideal Diode Model:</b> ในการวิเคราะห์วงจรเบื้องต้น มักสมมติว่าไดโอดเป็นสวิตช์สมบูรณ์ คือ Forward Bias → Vf = 0V, Reverse Bias → กระแส = 0A เพื่อให้คำนวณง่ายขึ้น
            </div>
        `,
        controls: true,
        svg: `
            <defs>
                <filter id="glow-b" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <marker id="arrow-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#fbbf24"/>
                </marker>
            </defs>
            <g transform="translate(80, 60)">
                <!-- State Label -->
                <rect x="130" y="270" width="200" height="35" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" id="state-box"/>
                <text id="state-label" x="230" y="292" fill="#10b981" font-size="15" font-weight="bold" text-anchor="middle">⚡ Forward Bias — กระแสไหล</text>

                <!-- Battery (bottom) -->
                <g id="battery-grp">
                    <!-- wire bottom left -->
                    <line x1="0" y1="230" x2="0" y2="260" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="0" y1="260" x2="130" y2="260" stroke="#94a3b8" stroke-width="2"/>
                    <!-- battery body -->
                    <rect x="130" y="248" width="200" height="24" rx="4" fill="none" stroke="#94a3b8" stroke-width="2"/>
                    <!-- + and - terminals -->
                    <text id="bat-plus" x="155" y="265" fill="#10b981" font-size="20" font-weight="bold">+</text>
                    <text id="bat-minus" x="310" y="265" fill="#f87171" font-size="20" font-weight="bold">−</text>
                    <!-- wire bottom right -->
                    <line x1="330" y1="260" x2="460" y2="260" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="460" y1="260" x2="460" y2="230" stroke="#94a3b8" stroke-width="2"/>
                </g>

                <!-- Diode P block -->
                <rect x="0" y="30" width="190" height="200" rx="8" fill="rgba(248,113,113,0.18)" stroke="#f87171" stroke-width="2"/>
                <text x="95" y="20" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">P (Anode)</text>

                <!-- Diode N block -->
                <rect x="270" y="30" width="190" height="200" rx="8" fill="rgba(74,222,128,0.18)" stroke="#4ade80" stroke-width="2"/>
                <text x="365" y="20" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">N (Cathode)</text>

                <!-- Depletion region (animated width) -->
                <rect id="dep-region" x="190" y="30" width="80" height="200" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
                <text id="dep-text" x="230" y="140" fill="#94a3b8" font-size="11" text-anchor="middle" font-style="italic">Depletion</text>
                <text id="dep-text2" x="230" y="155" fill="#94a3b8" font-size="11" text-anchor="middle" font-style="italic">Region</text>
                <text id="dep-width-label" x="230" y="320" fill="#06b6d4" font-size="12" text-anchor="middle">ความกว้าง: แคบ</text>

                <!-- Current flow electrons (animated) -->
                <g id="current-electrons">
                    <circle r="7" fill="#fbbf24" filter="url(#glow-b)" opacity="0.9">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 460,130 L 5,130"/>
                        <animate attributeName="opacity" values="0;1;1;1;0" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="7" fill="#fbbf24" filter="url(#glow-b)" opacity="0.9">
                        <animateMotion dur="2.5s" begin="0.8s" repeatCount="indefinite" path="M 460,130 L 5,130"/>
                        <animate attributeName="opacity" values="0;1;1;1;0" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="7" fill="#fbbf24" filter="url(#glow-b)" opacity="0.9">
                        <animateMotion dur="2.5s" begin="1.6s" repeatCount="indefinite" path="M 460,130 L 5,130"/>
                        <animate attributeName="opacity" values="0;1;1;1;0" dur="2.5s" begin="1.6s" repeatCount="indefinite"/>
                    </circle>
                </g>

                <!-- Current label -->
                <text id="current-label" x="230" y="340" fill="#fbbf24" font-size="13" text-anchor="middle" font-weight="bold">→ กระแส I ไหลจาก P → N</text>

                <!-- Wire top left -->
                <line x1="0" y1="0" x2="0" y2="30" stroke="#94a3b8" stroke-width="2"/>
                <!-- Wire top right -->
                <line x1="460" y1="0" x2="460" y2="30" stroke="#94a3b8" stroke-width="2"/>
                <!-- Top wire -->
                <line x1="0" y1="0" x2="460" y2="0" stroke="#94a3b8" stroke-width="2"/>
            </g>
        `
    },
    'iv-curve': {
        title: 'กราฟลักษณะสมบัติ (I-V Curve)',
        desc: `กราฟ I-V Curve แสดงความสัมพันธ์ระหว่างแรงดัน V (แกน X) และกระแส I (แกน Y) ของไดโอด ซึ่งเป็นพฤติกรรม <b>Non-linear</b> ตามสมการ Shockley:<br><br>
<div style="text-align:center; font-size: 1.2rem; background: rgba(6,182,212,0.1); padding: 0.75rem; border-radius: 8px; margin: 0.5rem 0; font-family: monospace; letter-spacing: 1px;">
    I = I₀ (e<sup>V/nVₜ</sup> − 1)
</div>
โดย: <b>I₀</b> = Reverse Saturation Current, <b>n</b> = Ideality Factor (1–2), <b>Vₜ</b> = Thermal Voltage ≈ 26mV ที่อุณหภูมิห้อง<br><br>
<b>บริเวณสำคัญ 3 ส่วน:</b><br>
• <b>Forward Region (V > 0):</b> กระแสเพิ่มแบบ Exponential หลังผ่าน Cut-in Voltage<br>
• <b>Reverse Region (V < 0):</b> กระแสน้อยมาก (≈ I₀ = pA ถึง μA)<br>
• <b>Breakdown Region:</b> เมื่อ |V| > VBR กระแสพุ่งสูงอย่างรวดเร็ว อาจทำลายไดโอดได้`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 ค่าพารามิเตอร์สำคัญของไดโอด</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(6,182,212,0.15);">
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: left;">พารามิเตอร์</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">Silicon (Si)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">Germanium (Ge)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">Cut-in Voltage (Vγ)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #06b6d4;"><b>≈ 0.7 V</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #8b5cf6;"><b>≈ 0.3 V</b></td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">Reverse Saturation Current (I₀)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">~ 1 nA</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">~ 1 μA</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">Breakdown Voltage (VBR)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">50–200 V (ทั่วไป)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">10–100 V</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">ช่วงอุณหภูมิทำงาน</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">−65 ถึง +175°C</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">−65 ถึง +75°C</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 1rem; background: rgba(248,113,113,0.1); border-left: 4px solid #f87171; padding: 1rem; border-radius: 4px;">
                ⚠️ <b>อุณหภูมิส่งผล:</b> เมื่ออุณหภูมิเพิ่มขึ้น 10°C ค่า I₀ จะเพิ่มประมาณ 2 เท่า และ Vf จะลดลงประมาณ 2.5 mV/°C ทำให้ต้องระวังในวงจรที่ต้องการความแม่นยำสูง
            </div>
        `,
        controls: true,
        svg: `
            <defs>
                <filter id="glow-iv" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            <g transform="translate(80, 200)">
                <!-- Grid background lines -->
                <line x1="-60" y1="-20" x2="-60" y2="20" stroke="#334155" stroke-width="1"/>
                <line x1="-120" y1="-20" x2="-120" y2="20" stroke="#334155" stroke-width="1"/>
                <line x1="-180" y1="-20" x2="-180" y2="20" stroke="#334155" stroke-width="1"/>
                <line x1="60" y1="-100" x2="60" y2="20" stroke="#334155" stroke-width="1"/>
                <line x1="120" y1="-150" x2="120" y2="20" stroke="#334155" stroke-width="1"/>

                <!-- Axes -->
                <line x1="-240" y1="0" x2="280" y2="0" stroke="#475569" stroke-width="2"/>
                <line x1="0" y1="-190" x2="0" y2="110" stroke="#475569" stroke-width="2"/>

                <!-- Axis labels -->
                <text x="260" y="-8" fill="#94a3b8" font-size="13" text-anchor="middle">V (V)</text>
                <text x="15" y="-175" fill="#94a3b8" font-size="13">I (mA)</text>
                <text x="3" y="15" fill="#475569" font-size="12">0</text>

                <!-- Voltage tick marks -->
                <text x="-180" y="18" fill="#64748b" font-size="11" text-anchor="middle">−3</text>
                <text x="-120" y="18" fill="#64748b" font-size="11" text-anchor="middle">−2</text>
                <text x="-60" y="18" fill="#64748b" font-size="11" text-anchor="middle">−1</text>
                <text x="60" y="18" fill="#64748b" font-size="11" text-anchor="middle">0.5</text>
                <text x="95" y="18" fill="#06b6d4" font-size="11" text-anchor="middle" font-weight="bold">0.7</text>
                <text x="135" y="18" fill="#64748b" font-size="11" text-anchor="middle">1.0</text>

                <!-- Si I-V Curve (animated draw) -->
                <path d="M -220 6 L -200 6 L -40 5.5 C -20 5.5 0 5 20 5 C 50 5 60 3 80 -20 C 90 -50 100 -90 110 -155" 
                      fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#glow-iv)"
                      stroke-dasharray="600" stroke-dashoffset="600">
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.5s" fill="freeze"/>
                </path>
                <text x="125" y="-155" fill="#06b6d4" font-weight="bold" font-size="13">Silicon</text>
                <text x="125" y="-140" fill="#06b6d4" font-size="11">(0.7V)</text>

                <!-- Ge I-V Curve (animated draw) -->
                <path d="M -220 6 L -40 5.5 C -20 5.5 0 5 20 5 C 35 5 42 0 50 -30 C 58 -70 65 -110 70 -155"
                      fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="4,3" filter="url(#glow-iv)"
                      stroke-dasharray="600" stroke-dashoffset="600">
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.5s" begin="0.5s" fill="freeze"/>
                </path>
                <text x="75" y="-155" fill="#8b5cf6" font-weight="bold" font-size="13">Germanium</text>
                <text x="75" y="-140" fill="#8b5cf6" font-size="11">(0.3V)</text>

                <!-- Breakdown for Si -->
                <path d="M -200 6 C -210 20, -215 60, -220 90" fill="none" stroke="#f87171" stroke-width="2.5" stroke-dasharray="600" stroke-dashoffset="600">
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2s" begin="2s" fill="freeze"/>
                </path>
                <text x="-235" y="70" fill="#f87171" font-size="12" text-anchor="end">Breakdown</text>
                <line x1="-200" y1="-10" x2="-200" y2="10" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,2"/>
                <text x="-200" y="-18" fill="#f87171" font-size="11" text-anchor="middle">−VBR</text>

                <!-- Cut-in marker Si -->
                <circle cx="95" cy="0" r="5" fill="#06b6d4" filter="url(#glow-iv)">
                    <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <line x1="95" y1="0" x2="95" y2="-80" stroke="#06b6d4" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>

                <!-- Reverse saturation level line -->
                <line x1="-230" y1="5.5" x2="0" y2="5.5" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
                <text x="-115" y="3" fill="#64748b" font-size="11" text-anchor="middle">−I₀ (reverse sat.)</text>

                <!-- Region Labels -->
                <text x="-130" y="-15" fill="#94a3b8" font-size="12">← Reverse Region</text>
                <text x="100" y="-15" fill="#94a3b8" font-size="12">Forward →</text>
            </g>
        `
    },
    'rectifier': {
        title: 'วงจรเรียงกระแส (Rectifier)',
        desc: `วงจรเรียงกระแสใช้ไดโอดแปลงไฟสลับ <b>AC (Alternating Current)</b> ซึ่งกลับทิศทางตลอดเวลา ให้เป็นไฟตรง <b>DC (Direct Current)</b> ที่ไหลทิศเดียว มี 3 รูปแบบหลัก:<br><br>
<b>1️⃣ Half-Wave Rectifier (เรียงกระแสครึ่งคลื่น)</b><br>
ใช้ไดโอด <b>1 ตัว</b> ยอมให้ครึ่งรอบบวก (Positive Half Cycle) ผ่านเท่านั้น ครึ่งรอบลบถูกบล็อก<br>
• Vout(avg) = Vm/π ≈ 0.318 × Vm | ประสิทธิภาพต่ำ แต่วงจรง่ายที่สุด<br><br>
<b>2️⃣ Full-Wave Center-Tap (เรียงกระแสเต็มคลื่นแบบ Center-Tap)</b><br>
ใช้ไดโอด <b>2 ตัว</b> + หม้อแปลงที่มีแทปกลาง ได้คลื่นเต็มใบทั้งสองครึ่งรอบ<br>
• Vout(avg) = 2Vm/π ≈ 0.636 × Vm | ประสิทธิภาพดีขึ้น แต่ต้องใช้หม้อแปลงพิเศษ<br><br>
<b>3️⃣ Full-Wave Bridge Rectifier (สะพานไดโอด)</b><br>
ใช้ไดโอด <b>4 ตัว</b> ต่อแบบสะพาน ไม่ต้องการหม้อแปลงแทปกลาง เป็นที่นิยมมากที่สุด<br>
• Vout(avg) = 2Vm/π | แรงดันตก = 2×0.7V = 1.4V เนื่องจากผ่านไดโอด 2 ตัว`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 เปรียบเทียบวงจรเรียงกระแส 3 แบบ</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                <thead>
                    <tr style="background: rgba(6,182,212,0.15);">
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: left;">คุณสมบัติ</th>
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: center;">Half-Wave</th>
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: center;">Full-Wave CT</th>
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: center;">Full-Wave Bridge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;">จำนวนไดโอด</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">1</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">2</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #4ade80; font-weight:bold;">4</td></tr>
                    <tr style="background:rgba(255,255,255,0.02);"><td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;">Vout (avg)</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">0.318Vm</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">0.636Vm</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #06b6d4; font-weight:bold;">0.636Vm</td></tr>
                    <tr><td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;">Ripple Frequency</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">f</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">2f</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #06b6d4; font-weight:bold;">2f</td></tr>
                    <tr style="background:rgba(255,255,255,0.02);"><td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;">ต้องการ CT Transformer</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">ไม่</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #f87171;">ใช่</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #4ade80;">ไม่</td></tr>
                    <tr><td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;">นิยมใช้งาน</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">น้อย</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center;">ปานกลาง</td><td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #4ade80; font-weight:bold;">มากที่สุด ⭐</td></tr>
                </tbody>
            </table>
            <div style="background: rgba(251,191,36,0.1); border-left: 4px solid #fbbf24; padding: 1rem; border-radius: 4px;">
                <b>🔧 Capacitor Filter:</b> ผลลัพธ์ที่ได้ยังเป็น Pulsating DC ที่กระเพื่อม (Ripple) ต้องใส่ <b>Capacitor (C)</b> ขนานกับโหลดเพื่อ "กรอง" ให้ไฟเรียบ ยิ่ง C มาก Ripple ยิ่งน้อย ยิ่งเรียบ
            </div>
        `,
        controls: true,
        svg: `
            <defs>
                <filter id="glow-r" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            <g transform="translate(30, 50)">
                <!-- Input AC Sine Wave -->
                <text x="0" y="-10" fill="#94a3b8" font-size="12" font-weight="bold">Vin: AC Input</text>
                <line x1="0" y1="80" x2="180" y2="80" stroke="#334155" stroke-width="1"/>
                <!-- Full sine wave (positive = cyan, negative = purple) -->
                <path d="M 0 80 Q 22 20 45 80 Q 67 140 90 80 Q 112 20 135 80 Q 157 140 180 80" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="90" y="160" fill="#fbbf24" font-size="11" text-anchor="middle">60Hz Sine Wave</text>

                <!-- Arrow Diode Symbol -->
                <line x1="210" y1="80" x2="250" y2="80" stroke="#94a3b8" stroke-width="2"/>
                <polygon points="250,74 270,80 250,86" fill="#06b6d4" filter="url(#glow-r)"/>
                <line x1="270" y1="73" x2="270" y2="87" stroke="#06b6d4" stroke-width="2.5"/>
                <line x1="290" y1="80" x2="330" y2="80" stroke="#94a3b8" stroke-width="2"/>
                <text x="260" y="100" fill="#06b6d4" font-size="11" text-anchor="middle">D</text>

                <!-- Output Waveform Area -->
                <text id="out-label" x="400" y="-10" fill="#94a3b8" font-size="12" font-weight="bold">Vout: Half-Wave</text>
                <line x1="340" y1="80" x2="550" y2="80" stroke="#334155" stroke-width="1"/>

                <!-- Half-wave output (default, shown) -->
                <path id="hw-output" d="M 340 80 Q 362 20 385 80 L 430 80 Q 452 20 475 80 L 550 80" fill="none" stroke="#4ade80" stroke-width="2.5" filter="url(#glow-r)"/>

                <!-- Full-wave output (hidden by default) -->
                <path id="fw-output" d="M 340 80 Q 362 20 385 80 Q 407 20 430 80 Q 452 20 475 80 Q 497 20 520 80 L 550 80" fill="none" stroke="#06b6d4" stroke-width="2.5" filter="url(#glow-r)" style="display:none;"/>

                <!-- Bridge full-wave output (hidden) -->
                <path id="bfw-output" d="M 340 80 Q 362 15 385 80 Q 407 15 430 80 Q 452 15 475 80 Q 497 15 520 80" fill="none" stroke="#f59e0b" stroke-width="2.5" filter="url(#glow-r)" style="display:none;"/>

                <!-- Ripple highlight -->
                <path id="ripple-fill" d="M 340 80 Q 362 20 385 80 L 430 80 Q 452 20 475 80 Z" fill="rgba(74,222,128,0.1)" style="display:none;"/>

                <!-- Avg line -->
                <line id="avg-line" x1="340" y1="60" x2="550" y2="60" stroke="#f87171" stroke-width="1.5" stroke-dasharray="5,3" style="display:none;"/>
                <text id="avg-text" x="555" y="64" fill="#f87171" font-size="11">Avg</text>

                <!-- Level labels -->
                <text x="90" y="78" fill="#94a3b8" font-size="10">0V</text>
                <text x="90" y="22" fill="#fbbf24" font-size="10">+Vm</text>
                <text x="90" y="142" fill="#fbbf24" font-size="10">−Vm</text>
            </g>
        `
    },
    'clipper-clamper': {
        title: 'Clipper และ Clamper',
        desc: `<b>🔪 วงจรขลิบสัญญาณ (Clipper / Limiter)</b><br>
ทำหน้าที่ <b>"ตัด"</b> รูปคลื่นส่วนที่อยู่เหนือหรือต่ำกว่าระดับแรงดันอ้างอิง (Clipping Level) ออกไป โดยไม่เปลี่ยนแปลงส่วนที่เหลือ<br>
• <b>Positive Clipper:</b> ตัดครึ่งบวกของคลื่นทิ้ง → Vout ≤ Vclip<br>
• <b>Negative Clipper:</b> ตัดครึ่งลบของคลื่นทิ้ง → Vout ≥ −Vclip<br>
• <b>Biased Clipper:</b> ใช้แบตเตอรี่อ้างอิง เพื่อกำหนดระดับการตัดที่แน่นอน<br>
• <b>Double Clipper:</b> ตัดทั้งบนและล่าง → ได้รูปคลื่นสี่เหลี่ยม (Square Wave)<br><br>
<b>🔼 วงจรเลื่อนระดับแรงดัน (Clamper / DC Restorer)</b><br>
ใช้ <b>Capacitor (C)</b> และ <b>Diode</b> เพื่อ <b>"ยก"</b> หรือ <b>"กด"</b> ระดับแรงดัน DC ของสัญญาณ โดยไม่เปลี่ยนรูปคลื่น<br>
• ไม่ตัดสัญญาณ แค่เลื่อนฐานขึ้นหรือลง<br>
• Positive Clamper: เลื่อนสัญญาณขึ้น → ส่วนต่ำสุด = 0V<br>
• Negative Clamper: เลื่อนสัญญาณลง → ส่วนสูงสุด = 0V`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔧 การประยุกต์ใช้งานจริง</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div style="padding: 1rem; background: rgba(245,158,11,0.1); border: 1px solid #f59e0b; border-radius: 8px;">
                    <b style="color: #f59e0b;">Clipper ใช้ใน:</b>
                    <ul style="margin-top: 0.5rem; color: #cbd5e1; line-height: 1.9; padding-left: 1.2rem;">
                        <li>ป้องกันแรงดันเกิน (Overvoltage Protection)</li>
                        <li>สร้างสัญญาณสี่เหลี่ยม (Square Wave)</li>
                        <li>วงจรสแควร์คลื่นสัญญาณเสียง FM</li>
                        <li>ESD Protection ในวงจร IC</li>
                    </ul>
                </div>
                <div style="padding: 1rem; background: rgba(59,130,246,0.1); border: 1px solid #3b82f6; border-radius: 8px;">
                    <b style="color: #3b82f6;">Clamper ใช้ใน:</b>
                    <ul style="margin-top: 0.5rem; color: #cbd5e1; line-height: 1.9; padding-left: 1.2rem;">
                        <li>วงจร DC Restore ในจอทีวีอนาล็อก</li>
                        <li>สร้าง Voltage Multiplier</li>
                        <li>ปรับ Baseline ของสัญญาณวิดีโอ</li>
                        <li>วงจรตรวจจับ Peak Level</li>
                    </ul>
                </div>
            </div>
            <div style="background: rgba(6,182,212,0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px;">
                💡 <b>จำง่ายๆ:</b> <b>Clipper</b> = "กรรไกร" ตัดสัญญาณ | <b>Clamper</b> = "ลิฟต์" ยกระดับสัญญาณ
            </div>
        `,
        controls: true,
        svg: `
            <defs>
                <filter id="glow-c" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            <g transform="translate(30, 70)">
                <!-- Clipper Section -->
                <text x="130" y="-35" fill="#94a3b8" font-size="13" font-weight="bold" text-anchor="middle">CLIPPER</text>

                <!-- Input signal -->
                <text x="0" y="-15" fill="#64748b" font-size="11">Input:</text>
                <line x1="0" y1="60" x2="240" y2="60" stroke="#334155" stroke-width="1"/>
                <path d="M 0 60 Q 30 -20 60 60 Q 90 140 120 60 Q 150 -20 180 60 Q 210 140 240 60" fill="none" stroke="#94a3b8" stroke-width="2"/>

                <!-- Clip level line -->
                <line x1="0" y1="20" x2="240" y2="20" stroke="#f87171" stroke-width="1.5" stroke-dasharray="5,3"/>
                <text x="245" y="25" fill="#f87171" font-size="11">Clip</text>

                <!-- Clipped output -->
                <text x="0" y="160" fill="#64748b" font-size="11">Output:</text>
                <line x1="0" y1="225" x2="240" y2="225" stroke="#334155" stroke-width="1"/>
                <path id="clip-output-path" d="M 0 225 C 8 205, 15 185, 20 185 L 40 185 C 45 185, 52 205, 60 225 Q 90 305 120 225 C 128 205, 135 185, 140 185 L 160 185 C 165 185, 172 205, 180 225 Q 210 305 240 225" fill="none" stroke="#f59e0b" stroke-width="2.5" filter="url(#glow-c)"/>
                <!-- Clip level line on output -->
                <line x1="0" y1="185" x2="240" y2="185" stroke="#f87171" stroke-width="1.5" stroke-dasharray="5,3"/>

                <!-- Clamper Section -->
                <text x="430" y="-35" fill="#94a3b8" font-size="13" font-weight="bold" text-anchor="middle">CLAMPER</text>

                <!-- Input signal -->
                <text x="310" y="-15" fill="#64748b" font-size="11">Input (centered):</text>
                <line x1="310" y1="60" x2="550" y2="60" stroke="#334155" stroke-width="1"/>
                <path d="M 310 60 Q 340 -20 370 60 Q 400 140 430 60 Q 460 -20 490 60 Q 520 140 550 60" fill="none" stroke="#94a3b8" stroke-width="2"/>

                <!-- Output Clamped signal (shifted up) -->
                <text x="310" y="160" fill="#64748b" font-size="11">Output (clamped up):</text>
                <line x1="310" y1="225" x2="550" y2="225" stroke="#334155" stroke-width="1"/>
                <!-- Clamped so bottom = 0, shifted up by 80 -->
                <path id="clamp-output-path" d="M 310 145 Q 340 65 370 145 Q 400 225 430 145 Q 460 65 490 145 Q 520 225 550 145" fill="none" stroke="#3b82f6" stroke-width="2.5" filter="url(#glow-c)"/>
                <!-- 0V reference = 225 level -->
                <line x1="310" y1="225" x2="550" y2="225" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="5,3"/>
                <text x="555" y="229" fill="#4ade80" font-size="10">0V ref</text>

                <!-- Shift arrows -->
                <path d="M 430 65 L 430 150" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-shift)"/>
                <text x="448" y="115" fill="#3b82f6" font-size="11">DC Shift</text>
                <defs>
                    <marker id="arrow-shift" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
                    </marker>
                </defs>
            </g>
        `
    },
    'zener': {
        title: 'ซีเนอร์ไดโอด (Zener Diode)',
        desc: `<b>Zener Diode</b> คือไดโอดชนิดพิเศษที่ถูกออกแบบมาให้ทำงานอย่างปลอดภัยในสภาวะ <b>Reverse Breakdown</b> โดยควบคุมปรากฏการณ์ Breakdown ให้เกิดที่แรงดันที่กำหนดแน่นอน (Zener Voltage: Vz)<br><br>
<b>⚙️ กลไกการเกิด Breakdown 2 แบบ:</b><br>
• <b>Zener Effect:</b> เกิดเมื่อ Vz &lt; 5V — สนามไฟฟ้าแรงสูงดึงอิเล็กตรอนออกจากพันธะโดยตรง (Quantum Tunneling)<br>
• <b>Avalanche Effect:</b> เกิดเมื่อ Vz &gt; 7V — อิเล็กตรอนความเร็วสูงชนแล้วเกิดพาหะใหม่ต่อเนื่อง (Impact Ionization)<br>
• ช่วง 5–7V: เกิดทั้ง 2 กลไก<br><br>
<b>📐 วงจรควบคุมแรงดัน (Voltage Regulator):</b><br>
ต่อ Zener แบบ Reverse Bias ขนานกับโหลด (RL) และมี <b>ตัวต้านทานอนุกรม Rs</b> จำกัดกระแส<br>
• เงื่อนไข: Vin &gt; Vz เสมอ → Vout = Vz = คงที่<br>
• สมการ: Rs = (Vin − Vz) / (Iz + IL)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚡ การออกแบบวงจร Voltage Regulator</h3>
            <div style="background: rgba(16,185,129,0.08); border: 1px solid #10b981; border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem;">
                <b style="color: #10b981;">ตัวอย่างการคำนวณ:</b>
                <div style="margin-top: 0.75rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 6px; font-family: monospace; line-height: 2;">
                    กำหนด: Vin = 12V, Vz = 5.1V, IL = 20mA, Iz(min) = 5mA<br>
                    Rs = (Vin − Vz) / (Iz + IL) = (12 − 5.1) / (5 + 20) mA<br>
                    <span style="color: #4ade80; font-weight: bold;">Rs = 6.9V / 25mA = 276 Ω → เลือก 270Ω</span><br>
                    กำลังไฟของ Rs = Vs² / Rs = (6.9)² / 270 ≈ <span style="color: #fbbf24;">0.18 W → เลือก 0.5W</span>
                </div>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(6,182,212,0.15);">
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: left;">ข้อดี</th>
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: left;">ข้อจำกัด</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #334155; color: #4ade80;">✅ ราคาถูกมาก<br>✅ วงจรง่าย<br>✅ ตอบสนองเร็ว</td>
                        <td style="padding: 0.6rem; border: 1px solid #334155; color: #f87171;">❌ ประสิทธิภาพต่ำ (เปลืองพลังงานที่ Rs)<br>❌ กระแสจ่ายได้น้อย (< 100mA ทั่วไป)<br>❌ ควบคุมได้แม่นยำน้อยกว่า IC Regulator</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: true,
        svg: `
            <defs>
                <filter id="glow-z" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <marker id="arrow-z" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#fbbf24"/>
                </marker>
            </defs>
            <g transform="translate(60, 60)">
                <!-- Top wire -->
                <line x1="0" y1="0" x2="450" y2="0" stroke="#94a3b8" stroke-width="2.5"/>
                <!-- Bottom wire -->
                <line x1="0" y1="200" x2="450" y2="200" stroke="#94a3b8" stroke-width="2.5"/>

                <!-- Vin Source (left) -->
                <circle cx="0" cy="100" r="22" fill="none" stroke="#fbbf24" stroke-width="2.5" filter="url(#glow-z)"/>
                <text x="0" y="95" fill="#fbbf24" font-size="14" text-anchor="middle">AC</text>
                <text x="0" y="110" fill="#fbbf24" font-size="14" text-anchor="middle">Vin</text>
                <line x1="0" y1="0" x2="0" y2="78" stroke="#94a3b8" stroke-width="2.5"/>
                <line x1="0" y1="122" x2="0" y2="200" stroke="#94a3b8" stroke-width="2.5"/>

                <!-- Resistor Rs (top) -->
                <line x1="30" y1="0" x2="80" y2="0" stroke="#94a3b8" stroke-width="2.5"/>
                <path d="M 80 0 L 87 -12 L 101 12 L 115 -12 L 129 12 L 143 -12 L 150 0" fill="none" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="150" y1="0" x2="200" y2="0" stroke="#94a3b8" stroke-width="2.5"/>
                <text x="115" y="-20" fill="#cbd5e1" font-size="13" text-anchor="middle" font-weight="bold">Rs</text>
                <text x="115" y="-35" fill="#64748b" font-size="11" text-anchor="middle">(จำกัดกระแส)</text>

                <!-- Voltage Rs drop label -->
                <text x="115" y="20" fill="#f87171" font-size="11" text-anchor="middle">− Vs +</text>

                <!-- Node A (junction between Rs and Zener/Load) -->
                <circle cx="200" cy="0" r="5" fill="#06b6d4"/>
                <circle cx="200" cy="200" r="5" fill="#06b6d4"/>

                <!-- Zener Diode branch (left parallel) -->
                <line x1="250" y1="0" x2="250" y2="55" stroke="#06b6d4" stroke-width="2.5"/>
                <!-- Zener symbol: anode on top (connected to + rail) -->
                <polygon points="235,80 265,80 250,55" fill="#06b6d4" filter="url(#glow-z)"/>
                <!-- Cathode bar with Zener flares -->
                <path d="M 230 80 L 270 80 L 275 68 M 230 80 L 225 92" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
                <line x1="250" y1="80" x2="250" y2="200" stroke="#06b6d4" stroke-width="2.5"/>
                <text x="283" y="72" fill="#06b6d4" font-size="13" font-weight="bold">Vz</text>
                <text x="200" y="220" fill="#06b6d4" font-size="11" text-anchor="middle">ซีเนอร์ไดโอด</text>

                <!-- Load Resistor (right parallel) -->
                <line x1="350" y1="0" x2="350" y2="50" stroke="#94a3b8" stroke-width="2.5"/>
                <path d="M 350 50 L 338 57 L 362 71 L 338 85 L 362 99 L 338 113 L 350 120" fill="none" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="350" y1="120" x2="350" y2="200" stroke="#94a3b8" stroke-width="2.5"/>
                <text x="380" y="88" fill="#cbd5e1" font-size="13" font-weight="bold">RL</text>
                <text x="380" y="103" fill="#64748b" font-size="11">(Load)</text>

                <!-- Vout labels -->
                <text x="350" y="-18" fill="#10b981" font-size="14" text-anchor="middle" font-weight="bold">Vout = Vz ✓</text>
                <line x1="200" y1="0" x2="450" y2="0" stroke="#94a3b8" stroke-width="2"/>
                <line x1="200" y1="200" x2="450" y2="200" stroke="#94a3b8" stroke-width="2"/>

                <!-- Animated current flow: Iz through Zener -->
                <circle r="5" fill="#06b6d4" filter="url(#glow-z)" opacity="0">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 250,0 L 250,200"/>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle r="5" fill="#06b6d4" filter="url(#glow-z)" opacity="0">
                    <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 250,0 L 250,200"/>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1s" repeatCount="indefinite"/>
                </circle>

                <!-- Iz label with glow -->
                <text x="215" y="105" fill="#06b6d4" font-size="12" font-style="italic">← Iz</text>
            </g>
        `
    },
    'quiz': {
        title: '📝 คำถามท้ายบท (Quiz)',
        desc: 'ทดสอบความเข้าใจเกี่ยวกับไดโอดและการประยุกต์ใช้งาน',
        extra: `
            <div id="quiz-container" style="background: rgba(15, 23, 42, 0.6); padding: 2rem; border-radius: 12px; border: 1px solid var(--border);">
            </div>
        `,
        controls: false,
        svg: ''
    }
};

const quizQuestions = [
    {
        q: '1. หากต้องการให้ไดโอดซิลิกอนนำกระแส ต้องจ่ายแรงดัน Forward Bias อย่างน้อยกี่โวลต์?',
        choices: ['ก. 0.3V', 'ข. 0.7V', 'ค. 1.2V', 'ง. 5.0V'],
        a: 1,
        explain: 'ไดโอดซิลิกอนมี Barrier Potential ≈ 0.7V ต้องจ่ายแรงดัน Forward Bias อย่างน้อย 0.7V จึงจะนำกระแสได้'
    },
    {
        q: '2. Depletion Region เกิดจากอะไร และเกิดขึ้นที่ใด?',
        choices: ['ก. เกิดจากการชนของอิเล็กตรอน อยู่ในบริเวณ N-Type', 'ข. เกิดจากการแพร่ของพาหะ อยู่ที่บริเวณรอยต่อ P-N', 'ค. เกิดจากการจ่ายกระแสภายนอก อยู่ในบริเวณ P-Type', 'ง. เกิดจากอุณหภูมิ อยู่ทั่วทั้งชิ้นสาร'],
        a: 1,
        explain: 'Depletion Region เกิดจากการที่อิเล็กตรอนจาก N แพร่ไปรวมกับโฮลใน P บริเวณรอยต่อ ทำให้เกิดโซนที่ไม่มีพาหะอิสระ'
    },
    {
        q: '3. วงจร Full-Wave Bridge Rectifier ใช้ไดโอดกี่ตัว?',
        choices: ['ก. 1 ตัว', 'ข. 2 ตัว', 'ค. 3 ตัว', 'ง. 4 ตัว'],
        a: 3,
        explain: 'Bridge Rectifier ใช้ไดโอด 4 ตัวต่อแบบสะพาน สลับกันนำกระแสในแต่ละครึ่งรอบ ทำให้ได้คลื่นเต็มใบ'
    },
    {
        q: '4. Zener Diode ทำงานปกติในโหมดไบแอสแบบใด?',
        choices: ['ก. Forward Bias (ไบแอสตรง)', 'ข. ไม่ต้องมีแหล่งจ่าย', 'ค. Reverse Bias (ไบแอสกลับ) ในสภาวะ Breakdown', 'ง. Zero Bias'],
        a: 2,
        explain: 'Zener Diode ถูกออกแบบให้ทำงานในสภาวะ Reverse Bias Breakdown อย่างปลอดภัย เพื่อรักษาแรงดัน Vz ให้คงที่'
    },
    {
        q: '5. วงจร Clamper แตกต่างจาก Clipper อย่างไร?',
        choices: ['ก. Clamper ใช้ไดโอดมากกว่า', 'ข. Clamper ตัดสัญญาณทิ้ง ส่วน Clipper เลื่อนระดับสัญญาณ', 'ค. Clamper เลื่อนระดับ DC ของสัญญาณ โดยไม่ตัดรูปคลื่น', 'ง. ไม่มีความแตกต่าง ทำหน้าที่เหมือนกัน'],
        a: 2,
        explain: 'Clamper เลื่อน (Shift) ระดับแรงดัน DC ของสัญญาณทั้งคลื่น ขึ้นหรือลง โดยไม่ตัดส่วนใดของคลื่นทิ้ง ต่างจาก Clipper ที่ตัดส่วนเกินออก'
    }
];

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    let html = '<h3 style="color: var(--primary); margin-bottom: 1.5rem; font-size: 1.3rem;">🎯 แบบทดสอบความเข้าใจ — ไดโอด (Diode)</h3>';
    quizQuestions.forEach((item, index) => {
        html += `
            <div class="quiz-question" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid var(--border);">
                <h3 style="margin-bottom: 0.8rem; font-size: 1.05rem; color: var(--text); line-height: 1.6;">${item.q}</h3>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    ${item.choices.map((choice, i) => `
                        <label style="cursor: pointer; padding: 0.75rem 1rem; background: rgba(255,255,255,0.04); border-radius: 8px; border: 1px solid var(--border); transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem;" class="quiz-opt-${index}" onmouseover="this.style.borderColor='var(--primary)'; this.style.background='rgba(6,182,212,0.1)'" onmouseout="this.style.borderColor='var(--border)'; this.style.background='rgba(255,255,255,0.04)'">
                            <input type="radio" name="q${index}" value="${i}" style="accent-color: var(--primary); width:16px; height:16px;"> <span>${choice}</span>
                        </label>
                    `).join('')}
                </div>
                <div id="feedback-${index}" style="margin-top: 0.75rem; font-size: 0.95rem;"></div>
            </div>
        `;
    });
    
    html += `<button onclick="checkQuiz()" style="background: var(--primary); color: white; border: none; padding: 0.85rem 2rem; border-radius: 10px; font-size: 1.05rem; font-family: 'Sarabun', sans-serif; cursor: pointer; margin-top: 0.5rem; font-weight: 700; box-shadow: 0 0 20px rgba(6,182,212,0.4); transition: all 0.2s; display: block; width: 100%;" onmouseover="this.style.background='var(--primary-dark)'; this.style.transform='translateY(-1px)'" onmouseout="this.style.background='var(--primary)'; this.style.transform='translateY(0)'">✅ ส่งคำตอบ</button>`;
    html += `<div id="quiz-result" style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: bold; text-align: center; padding: 1.25rem; border-radius: 10px;"></div>`;
    
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
                feedback.innerHTML = `<div style="color: #4ade80; background: rgba(74,222,128,0.1); padding: 0.5rem 0.75rem; border-radius: 6px; border-left: 3px solid #4ade80;">✅ ถูกต้อง! — ${item.explain}</div>`;
            } else {
                feedback.innerHTML = `<div style="color: #f87171; background: rgba(248,113,113,0.1); padding: 0.5rem 0.75rem; border-radius: 6px; border-left: 3px solid #f87171;">❌ ผิด — คำตอบที่ถูกคือ: <b>${item.choices[item.a]}</b><br><span style="color: #94a3b8; font-size: 0.9rem;">${item.explain}</span></div>`;
            }
        } else {
            feedback.innerHTML = `<div style="color: #fbbf24; background: rgba(251,191,36,0.1); padding: 0.5rem 0.75rem; border-radius: 6px; border-left: 3px solid #fbbf24;">⚠️ กรุณาเลือกคำตอบ</div>`;
        }
    });
    
    const resultBox = document.getElementById('quiz-result');
    const pct = Math.round((score / quizQuestions.length) * 100);
    let grade = score === quizQuestions.length ? '🏆 ยอดเยี่ยม! ผ่านเกณฑ์ 100%' :
                score >= 4 ? '👍 ดีมาก! เกือบสมบูรณ์' :
                score >= 3 ? '📚 พอใช้ได้ ควรทบทวนอีกครั้ง' : '🔄 ต้องศึกษาเพิ่มเติม';
    resultBox.innerHTML = `คะแนน: ${score} / ${quizQuestions.length} (${pct}%) — ${grade}`;
    if(score >= 4) {
        resultBox.style.background = 'rgba(74,222,128,0.15)'; resultBox.style.color = '#4ade80'; resultBox.style.border = '1px solid #4ade80';
    } else if(score >= 3) {
        resultBox.style.background = 'rgba(251,191,36,0.15)'; resultBox.style.color = '#fbbf24'; resultBox.style.border = '1px solid #fbbf24';
    } else {
        resultBox.style.background = 'rgba(248,113,113,0.15)'; resultBox.style.color = '#f87171'; resultBox.style.border = '1px solid #f87171';
    }
}

let currentTopic = 'pn-junction';

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    loadTopic('pn-junction');
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
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
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav-${topicKey}`).classList.add('active');

    document.getElementById('topic-title').innerText = data.title;
    document.getElementById('topic-desc').innerHTML = data.desc;
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
    controlsContainer.style.display = 'flex';

    if (topicKey === 'bias') {
        let isForward = true;
        const btnToggle = document.createElement('button');
        btnToggle.className = 'btn-control';
        btnToggle.innerText = '🔄 เปลี่ยนเป็น Reverse Bias';
        btnToggle.onclick = () => {
            isForward = !isForward;
            const depRegion = document.getElementById('dep-region');
            const depText = document.getElementById('dep-text');
            const depText2 = document.getElementById('dep-text2');
            const depWidthLabel = document.getElementById('dep-width-label');
            const stateLabel = document.getElementById('state-label');
            const stateBox = document.getElementById('state-box');
            const currentElectrons = document.getElementById('current-electrons');
            const currentLabel = document.getElementById('current-label');
            const batPlus = document.getElementById('bat-plus');
            const batMinus = document.getElementById('bat-minus');

            if(isForward) {
                btnToggle.innerText = '🔄 เปลี่ยนเป็น Reverse Bias';
                depRegion.setAttribute('x', '190'); depRegion.setAttribute('width', '80');
                depText.setAttribute('x', '230'); depText2.setAttribute('x', '230');
                depWidthLabel.innerHTML = 'ความกว้าง: แคบ'; depWidthLabel.setAttribute('fill', '#06b6d4');
                stateLabel.innerHTML = '⚡ Forward Bias — กระแสไหล'; stateLabel.setAttribute('fill', '#10b981');
                stateBox.setAttribute('stroke', '#10b981'); stateBox.setAttribute('fill', 'rgba(16,185,129,0.2)');
                currentElectrons.style.display = 'block'; currentLabel.style.display = 'block';
                batPlus.innerHTML = '+'; batPlus.setAttribute('fill', '#10b981');
                batMinus.innerHTML = '−'; batMinus.setAttribute('fill', '#f87171');
            } else {
                btnToggle.innerText = '🔄 เปลี่ยนเป็น Forward Bias';
                depRegion.setAttribute('x', '140'); depRegion.setAttribute('width', '180');
                depText.setAttribute('x', '230'); depText2.setAttribute('x', '230');
                depWidthLabel.innerHTML = 'ความกว้าง: กว้างมาก'; depWidthLabel.setAttribute('fill', '#f87171');
                stateLabel.innerHTML = '🚫 Reverse Bias — กระแสไม่ไหล'; stateLabel.setAttribute('fill', '#f87171');
                stateBox.setAttribute('stroke', '#f87171'); stateBox.setAttribute('fill', 'rgba(248,113,113,0.2)');
                currentElectrons.style.display = 'none'; currentLabel.style.display = 'none';
                batPlus.innerHTML = '−'; batPlus.setAttribute('fill', '#f87171');
                batMinus.innerHTML = '+'; batMinus.setAttribute('fill', '#10b981');
            }
        };
        controlsContainer.appendChild(btnToggle);

    } else if (topicKey === 'iv-curve') {
        const btnAnimate = document.createElement('button');
        btnAnimate.className = 'btn-control';
        btnAnimate.innerText = '▶ วาดกราฟใหม่';
        btnAnimate.onclick = () => {
            // Re-trigger SVG animation by re-loading the svg
            document.getElementById('svg-container').innerHTML = '';
            setTimeout(() => {
                document.getElementById('svg-container').innerHTML = data.svg;
            }, 50);
        };
        controlsContainer.appendChild(btnAnimate);

    } else if (topicKey === 'rectifier') {
        const modeData = {
            'half': { path: 'hw-output', label: 'Vout: Half-Wave (ครึ่งคลื่น)', color: '#4ade80', 
                       avgY: 42, avgLabel: 'Avg = 0.318Vm',
                       desc: 'ไดโอด 1 ตัว — ยอมให้ครึ่งรอบบวกผ่าน' },
            'fw-ct': { path: 'fw-output', label: 'Vout: Full-Wave Center-Tap', color: '#06b6d4',
                       avgY: 30, avgLabel: 'Avg = 0.636Vm',
                       desc: 'ไดโอด 2 ตัว + CT Transformer' },
            'fw-bridge': { path: 'bfw-output', label: 'Vout: Full-Wave Bridge', color: '#f59e0b',
                           avgY: 25, avgLabel: 'Avg = 0.636Vm (−1.4V จากไดโอด)',
                           desc: 'ไดโอด 4 ตัว Bridge — นิยมที่สุด' }
        };

        const makeBtn = (key, label) => {
            const btn = document.createElement('button');
            btn.className = 'btn-control';
            btn.innerText = label;
            btn.onclick = () => {
                ['hw-output', 'fw-output', 'bfw-output'].forEach(id => {
                    const el = document.getElementById(id);
                    if(el) el.style.display = 'none';
                });
                const m = modeData[key];
                const el = document.getElementById(m.path);
                if(el) el.style.display = 'block';
                const outLabel = document.getElementById('out-label');
                if(outLabel) { outLabel.innerHTML = m.label; outLabel.setAttribute('fill', m.color); }
                const avgLine = document.getElementById('avg-line');
                if(avgLine) { avgLine.style.display = 'block'; avgLine.setAttribute('y1', m.avgY); avgLine.setAttribute('y2', m.avgY); avgLine.setAttribute('stroke', m.color); }
                const avgText = document.getElementById('avg-text');
                if(avgText) { avgText.innerHTML = m.avgLabel; avgText.setAttribute('fill', m.color); avgText.setAttribute('y', m.avgY + 4); }
            };
            return btn;
        };

        controlsContainer.appendChild(makeBtn('half', '½ Half-Wave'));
        controlsContainer.appendChild(makeBtn('fw-ct', '🔁 Full-Wave CT'));
        controlsContainer.appendChild(makeBtn('fw-bridge', '🌉 Full-Wave Bridge'));

    } else if (topicKey === 'clipper-clamper') {
        const btnClip = document.createElement('button');
        btnClip.className = 'btn-control';
        btnClip.innerText = '✂️ แสดง Clipper';
        let clipLevel = 185;
        btnClip.onclick = () => {
            clipLevel = clipLevel === 185 ? 200 : 185;
            const path = document.getElementById('clip-output-path');
            if(path) {
                path.setAttribute('d', clipLevel === 185
                    ? 'M 0 225 C 8 205, 15 185, 20 185 L 40 185 C 45 185, 52 205, 60 225 Q 90 305 120 225 C 128 205, 135 185, 140 185 L 160 185 C 165 185, 172 205, 180 225 Q 210 305 240 225'
                    : 'M 0 225 C 8 205, 15 195, 20 200 L 40 200 C 45 200, 52 210, 60 225 Q 90 305 120 225 C 128 205, 135 195, 140 200 L 160 200 C 165 200, 172 210, 180 225 Q 210 305 240 225');
            }
            btnClip.innerText = clipLevel === 185 ? '✂️ ลด Clip Level' : '✂️ เพิ่ม Clip Level';
        };
        controlsContainer.appendChild(btnClip);

    } else if (topicKey === 'zener') {
        const btnVin = document.createElement('button');
        btnVin.className = 'btn-control';
        btnVin.innerText = '⬆️ เพิ่ม Vin';
        let vinLevel = 12;
        btnVin.onclick = () => {
            vinLevel = vinLevel === 12 ? 6 : 12;
            const label = document.querySelector('#anim-svg text');
            if(label) label.innerHTML = `Vin = ${vinLevel}V`;
            btnVin.innerText = vinLevel === 12 ? '⬆️ เพิ่ม Vin (12V)' : '⬇️ ลด Vin (6V → ใกล้ Vz!)';
        };
        controlsContainer.appendChild(btnVin);

    } else if (!data.controls) {
        controlsContainer.style.display = 'none';
    }
}
