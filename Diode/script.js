const topics = {
    'pn-junction': {
        title: 'รอยต่อ P-N (P-N Junction)',
        desc: `<b>ไดโอด (Diode)</b> สร้างขึ้นจากการนำสารกึ่งตัวนำชนิด <b>P-Type</b> (เจือสารกลุ่ม III เช่น โบรอน ทำให้มีโฮลเป็นพาหะข้างมาก) และ <b>N-Type</b> (เจือสารกลุ่ม V เช่น ฟอสฟอรัส ทำให้มีอิเล็กตรอนอิสระเป็นพาหะข้างมาก) มาประสานในผลึกชิ้นเดียวกัน เกิดเป็น <b>รอยต่อ P-N (P-N Junction)</b><br><br>
<b>🔬 กลไกการเกิด Depletion Region และสภาวะสมดุล:</b><br>
1. <b>การแพร่ของพาหะ (Diffusion):</b> เนื่องจากความเข้มข้นของอิเล็กตรอนในฝั่ง N สูงกว่าฝั่ง P อิเล็กตรอนอิสระจาก N จึงแพร่ข้ามรอยต่อเข้าสู่ P และโฮลจาก P แพร่ข้ามเข้าสู่ N<br>
2. <b>การรวมตัวกัน (Recombination):</b> บริเวณใกล้รอยต่อ อิเล็กตรอนและโฮลรวมตัวกันและหักล้างความเป็นอิสระ<br>
3. <b>เกิดไอออนตรึงแน่น (Uncompensated Immobile Ions):</b><br>
   • ฝั่ง P สูญเสียโฮล → เกิดไอออนลบ (Negative Acceptor Ions: N<sub>A</sub><sup>−</sup>) ตรึงอยู่กับที่<br>
   • ฝั่ง N สูญเสียอิเล็กตรอน → เกิดไอออนบวก (Positive Donor Ions: N<sub>D</sub><sup>+</sup>) ตรึงอยู่กับที่<br>
4. <b>สนามไฟฟ้าภายใน (Built-in Electric Field: E<sub>bi</sub>):</b> ไอออนเหล่านี้สร้างสนามไฟฟ้าชี้จาก N ไป P ซึ่งก่อให้เกิด <b>กระแสดริฟต์ (Drift Current)</b> สวนทางกับกระแสแพร่ จนกระทั่ง <b>I<sub>diff</sub> = I<sub>drift</sub></b> เข้าสู่สภาวะสมดุล (Thermal Equilibrium)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚡ Barrier Potential (ศักย์ไฟฟ้าต้านกลับ) และพลังงาน</h3>
            <p style="margin-bottom: 1rem; line-height: 1.9;">สนามไฟฟ้าภายในทำให้เกิดความต่างศักย์ไฟฟ้าต้านข้ามรอยต่อ เรียกว่า <b>Barrier Potential (V₀ หรือ V<sub>bi</sub>)</b> ซึ่งทำหน้าที่เสมือน "กำแพงพลังงาน" ป้องกันไม่ให้พาหะข้างมากแพร่ข้ามรอยต่อไปได้อีกตามสมการ:<br>
            <span style="display:block; text-align:center; padding:0.6rem; background:rgba(6,182,212,0.1); border-radius:6px; font-family:monospace; margin:0.5rem 0; color:#38bdf8;">
                V₀ = V<sub>T</sub> · ln( N<sub>A</sub> · N<sub>D</sub> / n<sub>i</sub>² )
            </span>
            โดย V<sub>T</sub> = kT/q ≈ 26 mV ที่อุณหภูมิห้อง (300K), n<sub>i</sub> คือความหนาแน่นพาหะในสารบริสุทธิ์</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                <thead>
                    <tr style="background: rgba(6,182,212,0.15);">
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: left;">วัสดุสารกึ่งตัวนำ</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">Barrier Potential (V₀)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">Bandgap Energy (Eg)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: left;">คุณสมบัติเด่นและการใช้งาน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;"><b>Silicon (Si)</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #06b6d4; font-weight: bold;">≈ 0.7 V</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">1.12 eV</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">นิยมใช้มากที่สุด ทนอุณหภูมิได้สูงถึง 175°C กระแสรั่วไหลต่ำมาก</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;"><b>Germanium (Ge)</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #8b5cf6; font-weight: bold;">≈ 0.3 V</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">0.66 eV</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">แรงดันตกคร่อมต่ำ สูญเสียกำลังน้อย แต่กระแสรั่วไหลสูงและไวต่อความร้อน</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;"><b>GaAs (แกลเลียม อาร์เซไนด์)</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center; color: #f87171; font-weight: bold;">≈ 1.2 V</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155; text-align: center;">1.42 eV</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #334155;">Direct bandgap นิยมสร้าง LED, เลเซอร์ไดโอด และวงจรความถี่สูงระดับ GHz</td>
                    </tr>
                </tbody>
            </table>
            <div style="background: rgba(6,182,212,0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px;">
                💡 <b>สรุปหลักการฟิสิกส์:</b> Depletion Region ทำหน้าที่เป็นฉนวนกั้นกลาง (ไม่มีพาหะอิสระ) และ Barrier Potential คือกำแพงพลังงานที่แรงดันภายนอกต้องเอาชนะ เพื่อบีบให้ Depletion Region หายไปและเปิดทางให้กระแสไฟฟ้าไหล
            </div>
        `,
        controls: true,
        viewBox: '0 0 820 370',
        svg: `
            <defs>
                <filter id="glow-pn-red" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-pn-green" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-pn-cyan" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <marker id="arrow-pn-left" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="8 0, 0 3, 8 6" fill="#06b6d4"/>
                </marker>
                <marker id="arrow-pn-diff" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                    <polygon points="0 0, 7 2.5, 0 5" fill="#fbbf24"/>
                </marker>
            </defs>

            <!-- TOP HUD / STATUS BAR -->
            <rect x="15" y="8" width="790" height="34" rx="8" fill="rgba(15, 23, 42, 0.75)" stroke="#334155" stroke-width="1"/>
            <g id="pn-mat-badge">
                <rect x="23" y="13" width="270" height="24" rx="6" fill="rgba(6, 182, 212, 0.18)" stroke="#06b6d4" stroke-width="1"/>
                <circle cx="37" cy="25" r="4" fill="#06b6d4"><animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite"/></circle>
                <text id="pn-hud-material" x="48" y="29" fill="#38bdf8" font-size="11.5" font-weight="bold">💎 Silicon (Si): V₀ ≈ 0.70 V | W ≈ 0.5 µm</text>
            </g>
            <text id="pn-hud-state" x="315" y="29" fill="#4ade80" font-size="12" font-weight="600">⚖️ สภาวะสมดุลทางความร้อน (Thermal Equilibrium)</text>
            <text id="pn-hud-current" x="650" y="29" fill="#cbd5e1" font-size="11.5" font-family="'JetBrains Mono', monospace">I_diff = I_drift ➔ I = 0 A</text>

            <!-- MAIN JUNCTION CONTAINER -->
            <rect x="20" y="48" width="780" height="170" rx="10" fill="#091122" stroke="#334155" stroke-width="1.5"/>

            <!-- P-Type Block (Left) -->
            <rect id="pn-p-block" x="20" y="48" width="300" height="170" rx="10" fill="rgba(248, 113, 113, 0.12)" stroke="#f87171" stroke-width="1.5"/>
            <text id="pn-p-label" x="160" y="72" fill="#f87171" font-size="14" font-weight="bold" text-anchor="middle">สาร P-Type (โฮล h⁺ เป็นพาหะข้างมาก)</text>
            <text x="160" y="88" fill="#fca5a5" font-size="10" text-anchor="middle">ไอออนลบ Na⁻ ตรึงอยู่กับที่ + โฮลอิสระเคลื่อนที่ได้</text>

            <!-- N-Type Block (Right) -->
            <rect id="pn-n-block" x="500" y="48" width="300" height="170" rx="10" fill="rgba(74, 222, 128, 0.12)" stroke="#4ade80" stroke-width="1.5"/>
            <text id="pn-n-label" x="660" y="72" fill="#4ade80" font-size="14" font-weight="bold" text-anchor="middle">สาร N-Type (อิเล็กตรอน e⁻ เป็นพาหะข้างมาก)</text>
            <text x="660" y="88" fill="#86efac" font-size="10" text-anchor="middle">ไอออนบวก Nd⁺ ตรึงอยู่กับที่ + อิเล็กตรอนอิสระเคลื่อนที่ได้</text>

            <!-- Depletion Region (Center) -->
            <rect id="pn-dep-box" x="320" y="48" width="180" height="170" fill="rgba(30, 41, 59, 0.75)" stroke="#06b6d4" stroke-width="1.8" stroke-dasharray="5,3"/>
            <text id="pn-dep-label" x="410" y="68" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">⚡ Depletion Region (ปลอดพาหะ)</text>

            <!-- Immobile Acceptor Ions (P-side of depletion) -->
            <g id="pn-ions-p">
                <circle cx="348" cy="102" r="13" fill="rgba(248,113,113,0.3)" stroke="#f87171" stroke-width="1.5"/>
                <text x="348" y="107" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="348" cy="140" r="13" fill="rgba(248,113,113,0.3)" stroke="#f87171" stroke-width="1.5"/>
                <text x="348" y="145" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="348" cy="178" r="13" fill="rgba(248,113,113,0.3)" stroke="#f87171" stroke-width="1.5"/>
                <text x="348" y="183" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">−</text>

                <circle cx="385" cy="102" r="13" fill="rgba(248,113,113,0.3)" stroke="#f87171" stroke-width="1.5"/>
                <text x="385" y="107" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="385" cy="140" r="13" fill="rgba(248,113,113,0.3)" stroke="#f87171" stroke-width="1.5"/>
                <text x="385" y="145" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="385" cy="178" r="13" fill="rgba(248,113,113,0.3)" stroke="#f87171" stroke-width="1.5"/>
                <text x="385" y="183" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">−</text>
            </g>

            <!-- Immobile Donor Ions (N-side of depletion) -->
            <g id="pn-ions-n">
                <circle cx="435" cy="102" r="13" fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="435" y="107" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="435" cy="140" r="13" fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="435" y="145" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="435" cy="178" r="13" fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="435" y="183" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">+</text>

                <circle cx="472" cy="102" r="13" fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="472" y="107" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="472" cy="140" r="13" fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="472" y="145" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="472" cy="178" r="13" fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="472" y="183" fill="#4ade80" font-size="15" font-weight="bold" text-anchor="middle">+</text>
            </g>

            <!-- Built-in Electric Field Vector (Points from N to P) -->
            <line id="pn-field-line" x1="475" y1="204" x2="345" y2="204" stroke="#06b6d4" stroke-width="3" marker-end="url(#arrow-pn-left)" filter="url(#glow-pn-cyan)"/>
            <text id="pn-field-txt" x="410" y="215" fill="#06b6d4" font-size="10.5" font-weight="bold" text-anchor="middle">สนามไฟฟ้าภายใน E_bi (ต้านการแพร่)</text>

            <!-- Mobile Holes in P Region (Red Glowing +) -->
            <g id="pn-holes-grp">
                <circle cx="65" cy="115" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="65" y="120" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="125" cy="105" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="125" y="110" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="195" cy="115" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="195" y="120" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="265" cy="108" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="265" y="113" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>

                <circle cx="85" cy="165" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="85" y="170" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="155" cy="160" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="155" y="165" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="225" cy="168" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="225" y="173" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
                <circle cx="285" cy="160" r="11" fill="none" stroke="#f87171" stroke-width="2.5" filter="url(#glow-pn-red)"/>
                <text x="285" y="165" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">+</text>
            </g>

            <!-- Mobile Electrons in N Region (Green Glowing -) -->
            <g id="pn-electrons-grp">
                <circle cx="535" cy="115" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="535" y="119" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="605" cy="105" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="605" y="109" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="675" cy="115" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="675" y="119" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="745" cy="108" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="745" y="112" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>

                <circle cx="555" cy="165" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="555" y="169" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="625" cy="160" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="625" y="164" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="695" cy="168" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="695" y="172" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
                <circle cx="760" cy="160" r="10" fill="#4ade80" filter="url(#glow-pn-green)"/>
                <text x="760" y="164" fill="#0b1220" font-size="14" font-weight="bold" text-anchor="middle">−</text>
            </g>

            <!-- POTENTIAL HILL CURVE (Barrier Potential Hill V(x)) -->
            <rect x="20" y="226" width="780" height="74" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="35" y="244" fill="#94a3b8" font-size="11" font-weight="bold">กราฟกำแพงศักย์ไฟฟ้า V(x)</text>
            <line x1="120" y1="285" x2="770" y2="285" stroke="#334155" stroke-dasharray="3,3"/>
            <text x="110" y="288" fill="#64748b" font-size="10" text-anchor="end">0V (P-side)</text>

            <path id="pn-hill-curve" d="M 120 285 L 320 285 C 370 285, 450 248, 500 248 L 770 248" fill="none" stroke="#38bdf8" stroke-width="2.6" filter="url(#glow-pn-cyan)"/>
            <line id="pn-hill-top-line" x1="120" y1="248" x2="770" y2="248" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2" opacity="0.4"/>
            <text id="pn-hill-label" x="770" y="244" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="end">V₀ = 0.70 V (Silicon Barrier Height)</text>
            <text x="410" y="295" fill="#fca5a5" font-size="10" text-anchor="middle">← กำแพงศักย์นี้กั้นไม่ให้โฮลจาก P และอิเล็กตรอนจาก N แพร่ข้ามไปได้อีก →</text>

            <!-- DYNAMIC LIVE EXPLANATION PANEL -->
            <rect x="20" y="306" width="780" height="56" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
            <rect id="pn-expl-accent" x="20" y="306" width="5" height="56" rx="2" fill="#06b6d4"/>
            <text id="pn-expl-title" x="35" y="324" fill="#38bdf8" font-size="11.5" font-weight="bold">⚡ สถานะ: สมดุลทางความร้อน (Thermal Equilibrium — ไม่มีแรงดันภายนอก)</text>
            <text id="pn-expl-line1" x="35" y="340" fill="#f1f5f9" font-size="11">พาหะข้างมากหยุดการแพร่เนื่องจากถูกสนามไฟฟ้าภายใน E_bi ขวางไว้ ทำให้กระแสรวม I = 0 A</text>
            <text id="pn-expl-line2" x="35" y="354" fill="#94a3b8" font-size="10.5">หากต้องการให้มีกระแสไหล ต้องจ่ายแรงดัน Forward Bias ภายนอกมากกว่า V₀ (0.7V สำหรับ Si) เพื่อทลายกำแพงศักย์นี้</text>
        `
    },
    'bias': {
        title: 'การไบแอส (Forward / Reverse Bias)',
        desc: `<b>การไบแอส (Biasing)</b> คือการจ่ายแรงดันไฟฟ้ากระแสตรง (DC) จากภายนอกให้กับไดโอด เพื่อควบคุมความกว้างของ Depletion Region และกำหนดพฤติกรรมการไหลของกระแสไฟฟ้า มี 2 รูปแบบหลัก:<br><br>
<b>🟢 1. Forward Bias (ไบแอสตรง):</b><br>
• ต่อขั้ว <b>บวก (+)</b> ของแหล่งจ่ายเข้าที่ <b>ขั้วแอโนด (Anode / P)</b> และขั้ว <b>ลบ (−)</b> เข้าที่ <b>ขั้วแคโทด (Cathode / N)</b><br>
• สนามไฟฟ้าภายนอกจะหักล้างกับสนามไฟฟ้าภายใน (E<sub>ext</sub> ต่อต้าน E<sub>bi</sub>) ส่งผลให้ Depletion Region <b>แคบลงอย่างรวดเร็ว</b><br>
• เมื่อแรงดันภายนอกสูงกว่า Cut-in Voltage (V<sub>γ</sub> ≈ 0.7V สำหรับ Si, 0.3V สำหรับ Ge) กำแพงศักย์จะพังทลายลง พาหะข้างมากไหลข้ามรอยต่อได้อย่างอิสระ ทำให้กระแส I<sub>D</sub> พุ่งขึ้นแบบเอกซ์โพเนนเชียล<br><br>
<b>🔴 2. Reverse Bias (ไบแอสกลับ):</b><br>
• ต่อขั้ว <b>บวก (+)</b> เข้าที่ <b>ขั้วแคโทด (N)</b> และขั้ว <b>ลบ (−)</b> เข้าที่ <b>ขั้วแอโนด (P)</b><br>
• ขั้วบวกดึงดูดอิเล็กตรอนออกจากรอยต่อ และขั้วลบดึงดูดโฮลออกจากรอยต่อ ทำให้ Depletion Region <b>ขยายตัวกว้างขึ้นอย่างมาก</b><br>
• สนามภายนอกเสริมสนามภายใน กำแพงศักย์สูงขึ้นมาก พาหะข้างมากไม่สามารถข้ามได้ กระแสเกือบเป็นศูนย์ (มีเพียงกระแสรั่วไหลย้อนกลับ I₀ ขนาด nA ที่เกิดจากพาหะข้างน้อย)<br>
• หากเพิ่มแรงดันย้อนกลับจนถึง <b>Breakdown Voltage (V<sub>BR</sub>)</b> จะเกิดการพังทลายของพันธะ (Avalanche / Zener) กระแสจะพุ่งสูงทันที`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 เปรียบเทียบสภาวะ Forward Bias vs Reverse Bias</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div style="padding: 1.1rem; background: rgba(16,185,129,0.1); border: 1px solid #10b981; border-radius: 8px;">
                    <b style="color: #10b981; font-size: 1.1rem;">✅ Forward Bias (ไบแอสตรง)</b>
                    <ul style="margin-top: 0.6rem; color: #cbd5e1; line-height: 1.9; padding-left: 1.2rem;">
                        <li>ขั้วต่อ: <b>+ ต่อ P (Anode)</b>, <b>− ต่อ N (Cathode)</b></li>
                        <li>Depletion Region: <b>แคบลงจนแทบหายไป</b></li>
                        <li>Barrier Potential: <b>ลดลงเกือบเหลือ 0V</b></li>
                        <li>สถานะ: <b>นำกระแส (ON / Closed Switch)</b></li>
                        <li>แรงดันตกคร่อมไดโอด: <b>V<sub>D</sub> ≈ 0.7 V</b> (Silicon)</li>
                        <li>ความต้านทานไดโอด: <b>ต่ำมาก (r<sub>d</sub> ≈ 10–25 Ω)</b></li>
                    </ul>
                </div>
                <div style="padding: 1.1rem; background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 8px;">
                    <b style="color: #ef4444; font-size: 1.1rem;">❌ Reverse Bias (ไบแอสกลับ)</b>
                    <ul style="margin-top: 0.6rem; color: #cbd5e1; line-height: 1.9; padding-left: 1.2rem;">
                        <li>ขั้วต่อ: <b>+ ต่อ N (Cathode)</b>, <b>− ต่อ P (Anode)</b></li>
                        <li>Depletion Region: <b>ขยายกว้างขึ้นมาก</b></li>
                        <li>Barrier Potential: <b>เพิ่มสูงขึ้นมาก (V₀ + V<sub>R</sub>)</b></li>
                        <li>สถานะ: <b>บล็อกกระแส (OFF / Open Switch)</b></li>
                        <li>แรงดันตกคร่อมไดโอด: <b>V<sub>D</sub> ≈ V<sub>Source</sub></b> (รับแรงดันเต็มๆ)</li>
                        <li>กระแสรั่วไหล: <b>น้อยมาก (I₀ ≈ pA ถึง nA)</b></li>
                    </ul>
                </div>
            </div>
            <div style="background: rgba(251,191,36,0.1); border-left: 4px solid #fbbf24; padding: 1rem; border-radius: 4px;">
                <b>⚠️ ข้อควรระวังในการทดลอง:</b> ในการต่อ Forward Bias ต้องมี <b>ตัวต้านทานจำกัดกระแส (Current-Limiting Resistor)</b> อนุกรมอยู่ในวงจรเสมอ เพราะหากต่อไดโอดตรงกับแหล่งจ่ายไฟ เมื่อ V > 0.7V กระแสจะพุ่งสูงเกินพิกัดและทำให้ไดโอดไหม้เสียหายทันที!
            </div>
        `,
        controls: true,
        viewBox: '0 0 820 370',
        svg: `
            <defs>
                <filter id="glow-bias-green" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-bias-amber" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-bias-red" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <marker id="arrow-bias-dir" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#10b981"/>
                </marker>
            </defs>

            <!-- TOP HUD / STATUS BAR -->
            <rect x="15" y="8" width="790" height="34" rx="8" fill="rgba(15, 23, 42, 0.75)" stroke="#334155" stroke-width="1"/>
            <g id="bias-badge-grp">
                <rect id="bias-badge-box" x="23" y="13" width="235" height="24" rx="6" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="1"/>
                <circle id="bias-badge-dot" cx="37" cy="25" r="4" fill="#10b981"><animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/></circle>
                <text id="bias-badge-txt" x="48" y="29" fill="#4ade80" font-size="11.5" font-weight="bold">🟢 Forward Bias (ไบแอสตรง)</text>
            </g>
            <text id="bias-vsource-txt" x="275" y="29" fill="#fbbf24" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">V_in = +0.70 V</text>
            <text id="bias-vdiode-txt" x="405" y="29" fill="#38bdf8" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">V_D = +0.70 V</text>
            <text id="bias-idiode-txt" x="535" y="29" fill="#4ade80" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">I_D = 15.2 mA</text>
            <text id="bias-state-txt" x="665" y="29" fill="#34d399" font-size="11.5" font-weight="bold">D: ON (นำกระแส)</text>

            <!-- LEFT PANEL: PHYSICAL P-N JUNCTION -->
            <rect x="15" y="48" width="385" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="27" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">1. พฤติกรรมทางกายภาพ (P-N Crystal)</text>
            <text id="bias-phys-sub" x="27" y="83" fill="#06b6d4" font-size="10">Depletion Region แคบลง ➔ พาหะไหลข้ามรอยต่อ</text>

            <!-- P & N Blocks -->
            <rect x="25" y="94" width="160" height="135" rx="6" fill="rgba(248, 113, 113, 0.15)" stroke="#f87171" stroke-width="1.2"/>
            <text x="105" y="112" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">P (Anode)</text>

            <rect x="225" y="94" width="165" height="135" rx="6" fill="rgba(74, 222, 128, 0.15)" stroke="#4ade80" stroke-width="1.2"/>
            <text x="307" y="112" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">N (Cathode)</text>

            <!-- Dynamic Depletion Box -->
            <rect id="bias-phys-dep" x="175" y="94" width="60" height="135" fill="rgba(30, 41, 59, 0.85)" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="4,2"/>
            <text id="bias-dep-width-txt" x="205" y="165" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">แคบมาก</text>

            <!-- Physical Mobile Carrier Streams (Forward: crossing) -->
            <g id="bias-phys-flows">
                <path id="bias-flow-holes" d="M 80 145 L 340 145" fill="none" stroke="#f87171" stroke-width="2.5" stroke-dasharray="6,4"/>
                <text x="105" y="140" fill="#f87171" font-size="9.5">โฮล h⁺ ➔</text>
                <path id="bias-flow-electrons" d="M 340 185 L 80 185" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="6,4"/>
                <text x="305" y="180" fill="#4ade80" font-size="9.5">☚ อิเล็กตรอน e⁻</text>
            </g>

            <text id="bias-phys-field-txt" x="205" y="242" fill="#94a3b8" font-size="10" text-anchor="middle">E_ext หักล้าง E_bi ➔ กำแพงศักย์พังลง</text>

            <!-- RIGHT PANEL: ACTUAL ELECTRICAL CIRCUIT & METERS -->
            <rect x="410" y="48" width="395" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="422" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">2. วงจรไฟฟ้าจริง &amp; เครื่องวัด (Schematic &amp; Meters)</text>
            <text x="422" y="83" fill="#94a3b8" font-size="10">แหล่งจ่ายไฟตรง DC + ตัวต้านทานจำกัดกระแส R = 220 Ω</text>

            <!-- Circuit Wires -->
            <path d="M 445 160 L 445 110 L 530 110" fill="none" stroke="#64748b" stroke-width="2.2"/>
            <path d="M 580 110 L 635 110" fill="none" stroke="#64748b" stroke-width="2.2"/>
            <path d="M 685 110 L 760 110 L 760 210 L 445 210 L 445 180" fill="none" stroke="#64748b" stroke-width="2.2"/>

            <!-- Current Flow Animation Stroke -->
            <path id="bias-wire-flow" d="M 445 160 L 445 110 L 530 110 L 580 110 L 635 110 L 685 110 L 760 110 L 760 210 L 445 210 L 445 180" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="7,5"/>

            <!-- DC Source (Left of circuit) -->
            <circle cx="445" cy="170" r="18" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
            <text id="bias-bat-plus" x="445" y="160" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">+</text>
            <text id="bias-bat-minus" x="445" y="184" fill="#f87171" font-size="14" font-weight="bold" text-anchor="middle">−</text>
            <text id="bias-src-label" x="445" y="200" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">Vin</text>

            <!-- Series Resistor R = 220 Ohm (Top middle) -->
            <rect x="530" y="103" width="50" height="14" rx="2" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="555" y="97" fill="#f59e0b" font-size="10.5" font-weight="bold" text-anchor="middle">R = 220 Ω</text>
            <text id="bias-vr-drop" x="555" y="130" fill="#94a3b8" font-size="9" text-anchor="middle">VR = 0.0V</text>

            <!-- Diode Symbol (Top Right) -->
            <g id="bias-diode-symbol" transform="translate(640, 110)">
                <line x1="-15" y1="0" x2="0" y2="0" stroke="#64748b" stroke-width="2"/>
                <polygon id="bias-diode-tri" points="0,-12 0,12 20,0" fill="#10b981" stroke="#34d399" stroke-width="1.8" filter="url(#glow-bias-green)"/>
                <line id="bias-diode-bar" x1="20" y1="-12" x2="20" y2="12" stroke="#34d399" stroke-width="2.2"/>
                <line x1="20" y1="0" x2="35" y2="0" stroke="#64748b" stroke-width="2"/>
                <text x="0" y="-16" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">A</text>
                <text x="20" y="-16" fill="#4ade80" font-size="10" font-weight="bold" text-anchor="middle">K</text>
                <text id="bias-diode-name" x="10" y="24" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">1N4148</text>
            </g>

            <!-- Digital Multimeter (Voltmeter across Diode) -->
            <rect x="625" y="145" width="85" height="42" rx="5" fill="#070e1b" stroke="#38bdf8" stroke-width="1.2"/>
            <text x="667" y="159" fill="#94a3b8" font-size="9" text-anchor="middle">VOLTMETER (VD)</text>
            <text id="bias-disp-volts" x="667" y="178" fill="#38bdf8" font-size="13" font-family="'JetBrains Mono', monospace" font-weight="bold" text-anchor="middle">+0.70 V</text>
            <line x1="640" y1="110" x2="640" y2="145" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="685" y1="110" x2="685" y2="145" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>

            <!-- Digital Ammeter (In series at bottom wire) -->
            <rect x="545" y="195" width="85" height="36" rx="5" fill="#070e1b" stroke="#10b981" stroke-width="1.2"/>
            <text x="587" y="208" fill="#94a3b8" font-size="8.5" text-anchor="middle">AMMETER (ID)</text>
            <text id="bias-disp-amps" x="587" y="224" fill="#4ade80" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="bold" text-anchor="middle">15.2 mA</text>

            <!-- DYNAMIC LIVE EXPLANATION PANEL -->
            <rect x="15" y="268" width="790" height="92" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
            <rect id="bias-expl-accent" x="15" y="268" width="5" height="92" rx="2" fill="#10b981"/>
            <text id="bias-expl-title" x="32" y="290" fill="#38bdf8" font-size="12" font-weight="bold">⚡ สถานะ: ไบแอสตรง (Forward Bias) — ไดโอดนำกระแสสมบูรณ์</text>
            <text id="bias-expl-line1" x="32" y="312" fill="#f1f5f9" font-size="11.5">ขั้วบวก (+) ต่อเข้าแอโนด และขั้วลบ (−) ต่อเข้าแคโทด ➔ สนามไฟฟ้าภายนอกหักล้างสนามภายใน</text>
            <text id="bias-expl-line2" x="32" y="331" fill="#94a3b8" font-size="10.5">Depletion Region แคบลงจนกำแพงศักย์พังลง ➔ พาหะข้างมากไหลข้ามรอยต่อได้อย่างอิสระ กระแสพุ่งสูง</text>
            <text id="bias-expl-line3" x="32" y="350" fill="#64748b" font-size="10">แรงดันตกคร่อมไดโอดจะคงที่ประมาณ 0.7V (Silicon) ส่วนแรงดันที่เหลือจะตกคร่อมตัวต้านทาน R</text>
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
        viewBox: '0 0 820 370',
        svg: `
            <defs>
                <filter id="glow-r-green" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-r-amber" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-r-cyan" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>

            <!-- TOP HUD / STATUS BAR -->
            <rect x="15" y="8" width="790" height="34" rx="8" fill="rgba(15, 23, 42, 0.75)" stroke="#334155" stroke-width="1"/>
            
            <g id="status-badge-pos">
                <rect x="23" y="13" width="245" height="24" rx="6" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="1"/>
                <circle cx="37" cy="25" r="4" fill="#10b981"><animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/></circle>
                <text x="48" y="29" fill="#4ade80" font-size="11" font-weight="bold">🟢 ซีกบวก (+ Half Cycle): Vin &gt; 0V</text>
            </g>

            <g id="status-badge-neg" style="display:none;">
                <rect x="23" y="13" width="245" height="24" rx="6" fill="rgba(99, 102, 241, 0.18)" stroke="#6366f1" stroke-width="1"/>
                <circle cx="37" cy="25" r="4" fill="#818cf8"><animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/></circle>
                <text x="48" y="29" fill="#818cf8" font-size="11" font-weight="bold">🔵 ซีกลบ (− Half Cycle): Vin &lt; 0V</text>
            </g>

            <text id="live-vin" x="305" y="29" fill="#fbbf24" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">Vin = +12.0 V</text>
            <text id="live-vout" x="440" y="29" fill="#4ade80" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">Vout = +11.3 V</text>
            <text id="live-diode-state" x="575" y="29" fill="#38bdf8" font-size="11.5" font-weight="bold">D: ON (Forward Bias)</text>

            <!-- 1. VIN INPUT PANEL -->
            <rect x="15" y="48" width="205" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="27" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">1. สัญญาณอินพุต (Vin)</text>
            <text x="27" y="83" fill="#94a3b8" font-size="10">ไฟฟ้ากระแสสลับ AC (Sine Wave)</text>

            <rect x="23" y="92" width="188" height="142" rx="6" fill="#070e1b"/>
            <line x1="23" y1="163" x2="211" y2="163" stroke="#475569" stroke-dasharray="3,3"/>
            <line x1="23" y1="118" x2="211" y2="118" stroke="#334155" stroke-dasharray="2,2"/>
            <line x1="23" y1="208" x2="211" y2="208" stroke="#334155" stroke-dasharray="2,2"/>
            <text x="207" y="122" fill="#fbbf24" font-size="9" text-anchor="end">+Vm</text>
            <text x="207" y="167" fill="#64748b" font-size="9" text-anchor="end">0V</text>
            <text x="207" y="212" fill="#fbbf24" font-size="9" text-anchor="end">−Vm</text>

            <!-- Sine Lobes Fill -->
            <path d="M 32 163 C 44 103, 62 103, 74.5 163 Z M 117 163 C 129.5 103, 147.5 103, 159.5 163 Z" fill="rgba(251, 191, 36, 0.1)"/>
            <path d="M 74.5 163 C 87 223, 105 223, 117 163 Z M 159.5 163 C 172 223, 190 223, 202 163 Z" fill="rgba(129, 140, 248, 0.08)"/>
            <!-- Sine Wave Curve -->
            <path d="M 32 163 C 44 103, 62 103, 74.5 163 C 87 223, 105 223, 117 163 C 129.5 103, 147.5 103, 159.5 163 C 172 223, 190 223, 202 163" fill="none" stroke="#fbbf24" stroke-width="2.2"/>
            <!-- Scanning Cursor -->
            <line id="vin-scan-line" x1="32" y1="92" x2="32" y2="234" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8"/>
            <circle id="vin-scan-dot" cx="32" cy="163" r="4.5" fill="#fbbf24" filter="url(#glow-r-amber)"/>

            <!-- 2. CIRCUIT PANEL -->
            <rect x="228" y="48" width="364" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text id="ckt-header-title" x="410" y="68" fill="#f1f5f9" font-size="12" font-weight="bold" text-anchor="middle">2. วงจร Half-Wave Rectifier</text>
            <text id="ckt-header-sub" x="410" y="83" fill="#38bdf8" font-size="10" text-anchor="middle">ไดโอด 1 ตัว — นำกระแสเฉพาะซีกบวก</text>

            <!-- CKT 1: HALF WAVE -->
            <g id="ckt-half">
                <!-- Base Wires -->
                <path d="M 275 147 L 275 130 L 345 130" fill="none" stroke="#64748b" stroke-width="2"/>
                <path d="M 375 130 L 475 130 L 475 148" fill="none" stroke="#64748b" stroke-width="2"/>
                <path d="M 475 186 L 475 200 L 275 200 L 275 183" fill="none" stroke="#64748b" stroke-width="2"/>

                <!-- AC Source -->
                <circle cx="275" cy="165" r="18" fill="#141f35" stroke="#94a3b8" stroke-width="2"/>
                <text x="275" y="171" fill="#fbbf24" font-size="19" font-weight="bold" text-anchor="middle">~</text>
                <text id="hw-pol-top" x="275" y="142" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">+</text>
                <text id="hw-pol-bot" x="275" y="198" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">−</text>
                <text x="275" y="213" fill="#64748b" font-size="9" text-anchor="middle">Vin (AC)</text>

                <!-- Diode D -->
                <polygon id="hw-diode-tri" points="345,120 375,130 345,140" fill="#10b981" stroke="#34d399" stroke-width="1.5" filter="url(#glow-r-green)"/>
                <line id="hw-diode-bar" x1="375" y1="118" x2="375" y2="142" stroke="#34d399" stroke-width="2.5"/>
                <text x="360" y="149" fill="#06b6d4" font-size="10" font-weight="bold" text-anchor="middle">D</text>

                <!-- Diode Badge -->
                <rect id="hw-badge-box" x="325" y="100" width="70" height="16" rx="4" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="1"/>
                <text id="hw-badge-txt" x="360" y="112" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">D: ON</text>

                <!-- Load Resistor RL -->
                <rect x="466" y="148" width="18" height="38" rx="3" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="495" y="171" fill="#38bdf8" font-size="11" font-weight="bold">RL</text>
                <text id="hw-vout-plus" x="453" y="144" fill="#10b981" font-size="12" font-weight="bold">+</text>
                <text id="hw-vout-minus" x="453" y="196" fill="#94a3b8" font-size="12" font-weight="bold">−</text>
                <text x="518" y="171" fill="#4ade80" font-size="10" font-weight="bold">(Vout)</text>

                <!-- Ground symbol -->
                <line x1="375" y1="200" x2="375" y2="208" stroke="#64748b" stroke-width="1.5"/>
                <line x1="367" y1="208" x2="383" y2="208" stroke="#64748b" stroke-width="1.5"/>
                <line x1="370" y1="212" x2="380" y2="212" stroke="#64748b" stroke-width="1.5"/>
                <line x1="373" y1="216" x2="377" y2="216" stroke="#64748b" stroke-width="1.5"/>

                <!-- Animated Current Flow -->
                <path id="hw-current-flow" d="M 275 130 L 345 130 L 375 130 L 475 130 L 475 200 L 275 200 Z" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6,4" stroke-linecap="round"/>
            </g>

            <!-- CKT 2: FULL WAVE CENTER TAP -->
            <g id="ckt-ct" style="display:none;">
                <!-- Transformer Primary & Core -->
                <circle cx="252" cy="165" r="14" fill="#141f35" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="252" y="170" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">~</text>
                <!-- Primary wire -->
                <path d="M 252 151 L 252 140 L 270 140 L 270 190 L 252 190 L 252 179" fill="none" stroke="#64748b" stroke-width="1.5"/>
                <line x1="284" y1="110" x2="284" y2="220" stroke="#64748b" stroke-width="1.5"/>
                <line x1="288" y1="110" x2="288" y2="220" stroke="#64748b" stroke-width="1.5"/>

                <!-- Secondary Winding & Center Tap -->
                <line x1="302" y1="118" x2="345" y2="118" stroke="#64748b" stroke-width="2"/>
                <line x1="302" y1="212" x2="345" y2="212" stroke="#64748b" stroke-width="2"/>
                <!-- Center Tap wire to ground -->
                <line x1="302" y1="165" x2="340" y2="165" stroke="#64748b" stroke-width="2"/>
                <circle cx="302" cy="165" r="3" fill="#64748b"/>
                <text x="328" y="160" fill="#94a3b8" font-size="9" text-anchor="middle">CT (0V)</text>
                <!-- CT Ground -->
                <line x1="340" y1="165" x2="340" y2="173" stroke="#64748b" stroke-width="1.5"/>
                <line x1="334" y1="173" x2="346" y2="173" stroke="#64748b" stroke-width="1.5"/>
                <line x1="336" y1="176" x2="344" y2="176" stroke="#64748b" stroke-width="1.5"/>

                <text id="ct-pol-top" x="302" y="110" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">+</text>
                <text id="ct-pol-bot" x="302" y="228" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">−</text>

                <!-- Diode D1 (Upper) -->
                <polygon id="ct-d1-tri" points="345,109 375,118 345,127" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
                <line id="ct-d1-bar" x1="375" y1="107" x2="375" y2="129" stroke="#34d399" stroke-width="2.5"/>
                <text id="ct-d1-badge" x="360" y="103" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">D1: ON</text>

                <!-- Diode D2 (Lower) -->
                <polygon id="ct-d2-tri" points="345,203 375,212 345,221" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
                <line id="ct-d2-bar" x1="375" y1="201" x2="375" y2="223" stroke="#64748b" stroke-width="2.5"/>
                <text id="ct-d2-badge" x="360" y="234" fill="#64748b" font-size="9" font-weight="bold" text-anchor="middle">D2: OFF</text>

                <!-- Junction wires to RL -->
                <path d="M 375 118 L 415 165 L 475 165 L 475 145" fill="none" stroke="#64748b" stroke-width="2"/>
                <path d="M 375 212 L 415 165" fill="none" stroke="#64748b" stroke-width="2"/>
                <circle cx="415" cy="165" r="3.5" fill="#38bdf8"/>

                <!-- Load Resistor RL -->
                <rect x="466" y="145" width="18" height="38" rx="3" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" stroke-width="1.5"/>
                <text x="495" y="168" fill="#06b6d4" font-size="11" font-weight="bold">RL</text>
                <!-- Wire from RL bottom to Common Ground -->
                <line x1="475" y1="183" x2="475" y2="195" stroke="#64748b" stroke-width="2"/>
                <line x1="469" y1="195" x2="481" y2="195" stroke="#64748b" stroke-width="1.5"/>
                <line x1="471" y1="198" x2="479" y2="198" stroke="#64748b" stroke-width="1.5"/>
                <text x="518" y="168" fill="#06b6d4" font-size="10" font-weight="bold">(Vout)</text>

                <!-- Dynamic Current Paths -->
                <path id="ct-flow-d1" d="M 302 118 L 375 118 L 415 165 L 475 145 L 475 183 L 475 195" fill="none" stroke="#06b6d4" stroke-width="2.5" stroke-dasharray="6,4"/>
                <path id="ct-flow-d2" d="M 302 212 L 375 212 L 415 165 L 475 145 L 475 183 L 475 195" fill="none" stroke="#06b6d4" stroke-width="2.5" stroke-dasharray="6,4" style="opacity:0;"/>
            </g>

            <!-- CKT 3: FULL WAVE BRIDGE -->
            <g id="ckt-bridge" style="display:none;">
                <!-- Bridge AC source -->
                <circle cx="250" cy="165" r="14" fill="#141f35" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="250" y="170" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">~</text>
                <text id="br-pol-left" x="250" y="146" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">+</text>
                <text id="br-pol-right" x="250" y="188" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">−</text>

                <!-- AC wires to Bridge Left & Right vertices -->
                <path d="M 250 151 L 250 135 L 315 135 L 315 165" fill="none" stroke="#64748b" stroke-width="1.8"/>
                <path d="M 250 179 L 250 195 L 425 195 L 425 165" fill="none" stroke="#64748b" stroke-width="1.8"/>

                <!-- Diamond Wires -->
                <polygon points="315,165 370,115 425,165 370,215" fill="none" stroke="#475569" stroke-width="2"/>

                <!-- Diode 1 (Left to Top) -->
                <polygon id="br-d1-tri" points="334,151 353,133 343,158" fill="#06b6d4" stroke="#38bdf8" stroke-width="1.2"/>
                <line id="br-d1-bar" x1="347" y1="128" x2="359" y2="140" stroke="#38bdf8" stroke-width="2.2"/>
                <text x="333" y="137" fill="#94a3b8" font-size="8.5" font-weight="bold">D1</text>

                <!-- Diode 3 (Right to Top) -->
                <polygon id="br-d3-tri" points="406,151 387,133 397,158" fill="#334155" stroke="#64748b" stroke-width="1.2"/>
                <line id="br-d3-bar" x1="393" y1="128" x2="381" y2="140" stroke="#64748b" stroke-width="2.2"/>
                <text x="407" y="137" fill="#94a3b8" font-size="8.5" font-weight="bold">D3</text>

                <!-- Diode 4 (Bottom to Left) -->
                <polygon id="br-d4-tri" points="351,206 333,188 358,197" fill="#334155" stroke="#64748b" stroke-width="1.2"/>
                <line id="br-d4-bar" x1="327" y1="194" x2="339" y2="182" stroke="#64748b" stroke-width="2.2"/>
                <text x="333" y="210" fill="#94a3b8" font-size="8.5" font-weight="bold">D4</text>

                <!-- Diode 2 (Bottom to Right) -->
                <polygon id="br-d2-tri" points="389,206 407,188 382,197" fill="#06b6d4" stroke="#38bdf8" stroke-width="1.2"/>
                <line id="br-d2-bar" x1="413" y1="194" x2="401" y2="182" stroke="#38bdf8" stroke-width="2.2"/>
                <text x="407" y="210" fill="#94a3b8" font-size="8.5" font-weight="bold">D2</text>

                <!-- Top & Bottom Output nodes to RL -->
                <path d="M 370 115 L 485 115 L 485 145" fill="none" stroke="#64748b" stroke-width="2"/>
                <path d="M 370 215 L 485 215 L 485 183" fill="none" stroke="#64748b" stroke-width="2"/>
                <circle cx="370" cy="115" r="3.5" fill="#10b981"/>
                <circle cx="370" cy="215" r="3.5" fill="#f87171"/>

                <!-- Load Resistor RL -->
                <rect x="476" y="145" width="18" height="38" rx="3" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="505" y="168" fill="#f59e0b" font-size="11" font-weight="bold">RL</text>
                <text x="465" y="142" fill="#10b981" font-size="11" font-weight="bold">+</text>
                <text x="465" y="193" fill="#f87171" font-size="11" font-weight="bold">−</text>
                <text x="528" y="168" fill="#f59e0b" font-size="10" font-weight="bold">(Vout)</text>

                <text id="br-status-txt" x="370" y="98" fill="#06b6d4" font-size="10" font-weight="bold" text-anchor="middle">D1, D2 นำกระแส (ON)</text>

                <!-- Animated Flows -->
                <path id="br-flow-pos" d="M 315 165 L 370 115 L 485 115 L 485 215 L 370 215 L 425 165" fill="none" stroke="#06b6d4" stroke-width="2.5" stroke-dasharray="6,4"/>
                <path id="br-flow-neg" d="M 425 165 L 370 115 L 485 115 L 485 215 L 370 215 L 315 165" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4" style="opacity:0;"/>
            </g>

            <!-- 3. VOUT OUTPUT PANEL -->
            <rect x="598" y="48" width="207" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text id="vout-panel-title" x="610" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">3. สัญญาณเอาต์พุต (Vout)</text>
            <text id="vout-panel-sub" x="610" y="83" fill="#4ade80" font-size="10">แรงดันตกคร่อมโหลด RL</text>

            <rect x="606" y="92" width="191" height="142" rx="6" fill="#070e1b"/>
            <line x1="606" y1="163" x2="797" y2="163" stroke="#475569" stroke-dasharray="3,3"/>
            <line x1="606" y1="118" x2="797" y2="118" stroke="#334155" stroke-dasharray="2,2"/>
            <text x="793" y="122" fill="#4ade80" font-size="9" text-anchor="end" id="vout-peak-lbl">+Vm</text>
            <text x="793" y="167" fill="#64748b" font-size="9" text-anchor="end">0V</text>

            <!-- Average DC Line -->
            <line id="vout-avg-line" x1="606" y1="149" x2="797" y2="149" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text id="vout-avg-label" x="793" y="145" fill="#f87171" font-size="9" text-anchor="end">Avg = 0.318 Vm</text>

            <!-- Half-Wave Output Path (Default) -->
            <g id="hw-vout-group">
                <path id="hw-vout-shade" d="M 615 163 C 627 105, 645 105, 657.5 163 Z M 700 163 C 712.5 105, 730.5 105, 742.5 163 Z" fill="rgba(74, 222, 128, 0.12)"/>
                <path id="hw-vout-path" d="M 615 163 C 627 105, 645 105, 657.5 163 L 700 163 C 712.5 105, 730.5 105, 742.5 163 L 785 163" fill="none" stroke="#4ade80" stroke-width="2.4" filter="url(#glow-r-green)"/>
            </g>

            <!-- Full-Wave CT Output Path -->
            <g id="ct-vout-group" style="display:none;">
                <path d="M 615 163 C 627 105, 645 105, 657.5 163 Z M 657.5 163 C 670 105, 688 105, 700 163 Z M 700 163 C 712.5 105, 730.5 105, 742.5 163 Z M 742.5 163 C 755 105, 773 105, 785 163 Z" fill="rgba(6, 182, 212, 0.12)"/>
                <path id="ct-vout-path" d="M 615 163 C 627 105, 645 105, 657.5 163 C 670 105, 688 105, 700 163 C 712.5 105, 730.5 105, 742.5 163 C 755 105, 773 105, 785 163" fill="none" stroke="#06b6d4" stroke-width="2.4" filter="url(#glow-r-cyan)"/>
            </g>

            <!-- Full-Wave Bridge Output Path -->
            <g id="bridge-vout-group" style="display:none;">
                <path d="M 615 163 C 627 111, 645 111, 657.5 163 Z M 657.5 163 C 670 111, 688 111, 700 163 Z M 700 163 C 712.5 111, 730.5 111, 742.5 163 Z M 742.5 163 C 755 111, 773 111, 785 163 Z" fill="rgba(245, 158, 11, 0.12)"/>
                <path id="bridge-vout-path" d="M 615 163 C 627 111, 645 111, 657.5 163 C 670 111, 688 111, 700 163 C 712.5 111, 730.5 111, 742.5 163 C 755 111, 773 111, 785 163" fill="none" stroke="#f59e0b" stroke-width="2.4" filter="url(#glow-r-amber)"/>
            </g>

            <!-- Vout Scanning Cursor -->
            <line id="vout-scan-line" x1="615" y1="92" x2="615" y2="234" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8"/>
            <circle id="vout-scan-dot" cx="615" cy="163" r="4.5" fill="#4ade80" filter="url(#glow-r-green)"/>

            <!-- 4. DYNAMIC LIVE EXPLANATION PANEL -->
            <rect x="15" y="268" width="790" height="92" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
            <rect id="expl-accent" x="15" y="268" width="5" height="92" rx="2" fill="#10b981"/>
            <text id="expl-title" x="32" y="290" fill="#38bdf8" font-size="12" font-weight="bold">⚡ สถานะการทำงานแบบ Real-time</text>
            <text id="expl-line1" x="32" y="313" fill="#f1f5f9" font-size="11.5">ซีกบวก (+) : ไดโอด D ได้รับแรงดันไบแอสตรง (Forward Bias) ➔ ไดโอดนำกระแส</text>
            <text id="expl-line2" x="32" y="333" fill="#94a3b8" font-size="10.5">กระแสไฟฟ้าไหลผ่านตัวต้านทานโหลด RL ➔ เกิดแรงดันตกคร่อม Vout = Vin − 0.7V ตามรูปคลื่นซีกบวก</text>
            <text id="expl-line3" x="32" y="350" fill="#64748b" font-size="10">สูตรแรงดันเฉลี่ย: Vout(avg) = Vm / π ≈ 0.318 × Vm | ความถี่ริปเปิล = f</text>
        `
    },
    'clipper-clamper': {
        title: 'Clipper และ Clamper',
        desc: `<b>🔪 วงจรขลิบสัญญาณ (Clipper / Limiter):</b><br>
ทำหน้าที่ <b>"ตัด" (Clip)</b> รูปคลื่นส่วนที่เกินหรือต่ำกว่าระดับแรงดันอ้างอิงที่กำหนดออกไป โดยไม่สร้างความเสียหายหรือบิดเบือนรูปคลื่นส่วนที่เหลือ นิยมใช้ป้องกันแรงดันเกิน (Overvoltage Protection) หรือแปลง Sine wave ให้เป็นรูปคลื่นสี่เหลี่ยม<br>
• <b>Positive Clipper:</b> ตัดครึ่งคลื่นซีกบวกทิ้ง → แรงดันขาออกจะไม่เกิน V<sub>clip</sub> (≈ 0.7V หรือ V<sub>ref</sub> + 0.7V)<br>
• <b>Negative Clipper:</b> ตัดครึ่งคลื่นซีกลบทิ้ง → แรงดันขาออกจะไม่ต่ำกว่า −V<sub>clip</sub><br>
• <b>Biased Clipper:</b> ต่อแบตเตอรี่ไฟตรง V<sub>ref</sub> อนุกรมกับไดโอด เพื่อกำหนดระดับแรงดันตัดที่แม่นยำตามต้องการ<br><br>
<b>🔼 วงจรเลื่อนระดับแรงดัน (Clamper / DC Restorer):</b><br>
ทำหน้าที่ <b>"ยก" (Shift Up)</b> หรือ <b>"กด" (Shift Down)</b> ระดับแรงดันไฟตรง (DC Level) ของสัญญาณทั้งคลื่น โดยคงรูปคลื่นเดิมไว้ทุกประการ (Peak-to-Peak คงเดิม 2V<sub>m</sub>)<br>
• อาศัย <b>Capacitor (C)</b> ประจุแรงดันไฟตรงไว้เท่ากับ V<sub>m</sub> ในครึ่งรอบแรก แล้วทำหน้าที่เสมือนแบตเตอรี่อนุกรมในครึ่งรอบถัดไป<br>
• <b>Positive Clamper:</b> ไดโอดต่อชี้ลงกราวด์ → ยกสัญญาณขึ้นทั้งลูก จนจุดต่ำสุดแตะ 0V (แกว่งระหว่าง 0 ถึง +2V<sub>m</sub>)<br>
• <b>Negative Clamper:</b> ไดโอดต่อชี้ขึ้นกราวด์ → กดสัญญาณลงทั้งลูก จนจุดสูงสุดแตะ 0V (แกว่งระหว่าง 0 ถึง −2V<sub>m</sub>)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔬 การวิเคราะห์ทางวิศวกรรมและการออกแบบวงจร</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div style="padding: 1.1rem; background: rgba(245,158,11,0.1); border: 1px solid #f59e0b; border-radius: 8px;">
                    <b style="color: #f59e0b; font-size: 1.05rem;">✂️ กฎการวิเคราะห์วงจร Clipper</b>
                    <ol style="margin-top: 0.6rem; color: #cbd5e1; line-height: 1.9; padding-left: 1.2rem;">
                        <li>หาจุดเปลี่ยนสถานะ (Transition Point): กำหนด V<sub>D</sub> = 0.7V</li>
                        <li>เมื่อไดโอด <b>ON (นำกระแส)</b>: ไดโอดทำหน้าที่เป็น Short Circuit (มี V<sub>D</sub>=0.7V) → V<sub>out</sub> จะถูก "ล็อค" ติดกับระดับแรงดันกิ่งนั้น</li>
                        <li>เมื่อไดโอด <b>OFF (ไม่นำกระแส)</b>: ไดโอดเป็น Open Circuit → ไม่มีกระแสไหลผ่าน R (V<sub>R</sub>=0) → V<sub>out</sub> = V<sub>in</sub></li>
                    </ol>
                </div>
                <div style="padding: 1.1rem; background: rgba(59,130,246,0.1); border: 1px solid #3b82f6; border-radius: 8px;">
                    <b style="color: #3b82f6; font-size: 1.05rem;">⚡ กฎการวิเคราะห์วงจร Clamper</b>
                    <ol style="margin-top: 0.6rem; color: #cbd5e1; line-height: 1.9; padding-left: 1.2rem;">
                        <li>พิจารณาครึ่งรอบที่ไดโอด <b>Forward Bias ก่อนเสมอ</b> เพื่อให้ C ประจุแรงดันจนเต็ม V<sub>C</sub> = V<sub>m</sub> − 0.7V</li>
                        <li>เงื่อนไขค่าเวลา: <b>R<sub>L</sub>·C &gt;&gt; 5·T</b> (ค่าคงที่เวลาต้องยาวกว่าคาบสัญญาณมาก เพื่อไม่ให้ C คายประจุในครึ่งรอบถัดไป)</li>
                        <li>แรงดัน Peak-to-Peak ของเอาต์พุตจะต้องเท่ากับอินพุตเสมอ: <b>V<sub>p-p(out)</sub> = V<sub>p-p(in)</sub> = 2·V<sub>m</sub></b></li>
                    </ol>
                </div>
            </div>
            <div style="background: rgba(6,182,212,0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px;">
                💡 <b>จำง่ายๆ:</b> <b>Clipper</b> = "กรรไกร" (ตัดยอดคลื่นทิ้ง รูปร่างเปลี่ยน V<sub>p-p</sub> ลดลง) | <b>Clamper</b> = "ลิฟต์" (ขนสัญญาณทั้งลูกขึ้นหรือลง รูปร่างและ V<sub>p-p</sub> เหมือนเดิมเป๊ะ!)
            </div>
        `,
        controls: true,
        viewBox: '0 0 820 370',
        svg: `
            <defs>
                <filter id="glow-clip-green" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-clip-amber" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-clip-blue" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>

            <!-- TOP HUD / STATUS BAR -->
            <rect x="15" y="8" width="790" height="34" rx="8" fill="rgba(15, 23, 42, 0.75)" stroke="#334155" stroke-width="1"/>
            <g id="clip-hud-badge">
                <rect id="clip-badge-box" x="23" y="13" width="245" height="24" rx="6" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" stroke-width="1"/>
                <circle cx="37" cy="25" r="4" fill="#f59e0b"><animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/></circle>
                <text id="clip-badge-txt" x="48" y="29" fill="#fbbf24" font-size="11.5" font-weight="bold">✂️ Positive Clipper (ตัดซีกบวก)</text>
            </g>
            <text id="clip-live-vin" x="295" y="29" fill="#fbbf24" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">Vin = +8.5 V</text>
            <text id="clip-live-vout" x="440" y="29" fill="#4ade80" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">Vout = +0.7 V</text>
            <text id="clip-live-state" x="585" y="29" fill="#38bdf8" font-size="11.5" font-weight="bold">D: ON (ชอร์ตลงกราวด์)</text>

            <!-- 1. VIN INPUT PANEL -->
            <rect x="15" y="48" width="205" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="27" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">1. สัญญาณอินพุต (Vin)</text>
            <text x="27" y="83" fill="#94a3b8" font-size="10">Sine Wave ±10V Peak</text>

            <rect x="23" y="92" width="189" height="142" rx="6" fill="#070e1b"/>
            <line x1="23" y1="163" x2="212" y2="163" stroke="#475569" stroke-dasharray="3,3"/>
            <line x1="23" y1="118" x2="212" y2="118" stroke="#334155" stroke-dasharray="2,2"/>
            <line x1="23" y1="208" x2="212" y2="208" stroke="#334155" stroke-dasharray="2,2"/>
            <text x="208" y="122" fill="#fbbf24" font-size="9" text-anchor="end">+10V</text>
            <text x="208" y="167" fill="#64748b" font-size="9" text-anchor="end">0V</text>
            <text x="208" y="212" fill="#818cf8" font-size="9" text-anchor="end">−10V</text>

            <!-- Input Sine Path (2 full cycles) -->
            <path d="M 32 163 C 44 105, 62 105, 74.5 163 C 87 221, 105 221, 117 163 C 129.5 105, 147.5 105, 159.5 163 C 172 221, 190 221, 202 163" fill="none" stroke="#fbbf24" stroke-width="2.4" filter="url(#glow-clip-amber)"/>

            <!-- Input Scan Line & Dot -->
            <line id="clip-vin-scan-line" x1="32" y1="92" x2="32" y2="234" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8"/>
            <circle id="clip-vin-scan-dot" cx="32" cy="163" r="4.5" fill="#fbbf24" filter="url(#glow-clip-amber)"/>

            <!-- 2. CIRCUIT SCHEMATIC PANEL -->
            <rect x="228" y="48" width="362" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text id="clip-ckt-title" x="240" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">2. วงจร Positive Clipper</text>
            <text id="clip-ckt-sub" x="240" y="83" fill="#38bdf8" font-size="10">ขลิบยอดคลื่นซีกบวกเกิน 0.7V ทิ้งลงกราวด์</text>

            <!-- AC Generator (Left) -->
            <circle cx="265" cy="163" r="15" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
            <path d="M 256 163 Q 260.5 156, 265 163 T 274 163" fill="none" stroke="#fbbf24" stroke-width="1.8"/>
            <text x="265" y="190" fill="#fbbf24" font-size="9.5" font-weight="bold" text-anchor="middle">Vin (AC)</text>

            <!-- Ground at AC Generator -->
            <line x1="265" y1="178" x2="265" y2="215" stroke="#64748b" stroke-width="2"/>
            <line x1="255" y1="215" x2="275" y2="215" stroke="#64748b" stroke-width="2"/>
            <line x1="259" y1="219" x2="271" y2="219" stroke="#64748b" stroke-width="1.5"/>

            <!-- Wire from Generator to Series Element -->
            <line x1="265" y1="148" x2="265" y2="120" stroke="#64748b" stroke-width="2"/>
            <line x1="265" y1="120" x2="320" y2="120" stroke="#64748b" stroke-width="2"/>

            <!-- Series Resistor R (Used in Clippers) -->
            <g id="clip-series-r-grp">
                <rect x="320" y="113" width="45" height="14" rx="2" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="342" y="107" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">R = 1 kΩ</text>
            </g>

            <!-- Series Capacitor C (Used in Clampers) -->
            <g id="clip-series-c-grp" style="display:none;">
                <line x1="335" y1="110" x2="335" y2="130" stroke="#38bdf8" stroke-width="2.5"/>
                <line x1="345" y1="110" x2="345" y2="130" stroke="#38bdf8" stroke-width="2.5"/>
                <text x="340" y="104" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">C = 10 µF</text>
                <text id="clip-cap-pol-left" x="325" y="125" fill="#10b981" font-size="10" font-weight="bold">+</text>
                <text id="clip-cap-pol-right" x="355" y="125" fill="#f87171" font-size="10" font-weight="bold">−</text>
            </g>

            <!-- Wire from Series element to Node A -->
            <line x1="365" y1="120" x2="425" y2="120" stroke="#64748b" stroke-width="2"/>
            <circle cx="425" cy="120" r="4" fill="#06b6d4"/>

            <!-- Wire from Node A to Output -->
            <line x1="425" y1="120" x2="555" y2="120" stroke="#64748b" stroke-width="2"/>
            <circle cx="555" cy="120" r="3" fill="#4ade80"/>
            <text x="568" y="124" fill="#4ade80" font-size="11" font-weight="bold">+</text>

            <!-- Bottom Ground Rail -->
            <line x1="265" y1="215" x2="555" y2="215" stroke="#64748b" stroke-width="2"/>
            <circle cx="555" cy="215" r="3" fill="#64748b"/>
            <text x="568" y="219" fill="#94a3b8" font-size="11" font-weight="bold">−</text>
            <text x="565" y="172" fill="#4ade80" font-size="11" font-weight="bold">Vout</text>

            <!-- Shunt Diode Branch (Center at x=425) -->
            <g id="clip-shunt-branch">
                <line x1="425" y1="120" x2="425" y2="142" stroke="#64748b" stroke-width="2"/>
                
                <!-- Diode Symbol (Default: Pos Clipper, pointing DOWN) -->
                <g id="clip-diode-symbol" transform="translate(425, 155)">
                    <polygon id="clip-diode-tri" points="-10,-10 10,-10 0,10" fill="#10b981" stroke="#34d399" stroke-width="1.8" filter="url(#glow-clip-green)"/>
                    <line id="clip-diode-bar" x1="-10" y1="10" x2="10" y2="10" stroke="#34d399" stroke-width="2.2"/>
                    <text id="clip-d-state-badge" x="18" y="5" fill="#34d399" font-size="9" font-weight="bold">D: ON</text>
                </g>

                <!-- Biased Battery (for Biased Clipper mode) -->
                <g id="clip-bias-bat" style="display:none;" transform="translate(425, 185)">
                    <line x1="0" y1="-10" x2="0" y2="0" stroke="#64748b" stroke-width="2"/>
                    <line x1="-10" y1="0" x2="10" y2="0" stroke="#fbbf24" stroke-width="2.5"/>
                    <line x1="-6" y1="6" x2="6" y2="6" stroke="#94a3b8" stroke-width="2"/>
                    <text x="16" y="5" fill="#fbbf24" font-size="9" font-weight="bold">Vref = +3V</text>
                    <line x1="0" y1="6" x2="0" y2="30" stroke="#64748b" stroke-width="2"/>
                </g>

                <!-- Wire down to ground -->
                <line id="clip-diode-bot-wire" x1="425" y1="175" x2="425" y2="215" stroke="#64748b" stroke-width="2"/>
                <circle cx="425" cy="215" r="3.5" fill="#64748b"/>
            </g>

            <!-- Shunt Load Resistor RL (For Clampers) -->
            <g id="clip-shunt-load" style="display:none;" transform="translate(500, 120)">
                <line x1="0" y1="0" x2="0" y2="30" stroke="#64748b" stroke-width="2"/>
                <rect x="-8" y="30" width="16" height="35" rx="2" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="15" y="52" fill="#f59e0b" font-size="9.5" font-weight="bold">RL</text>
                <line x1="0" y1="65" x2="0" y2="95" stroke="#64748b" stroke-width="2"/>
                <circle cx="0" cy="95" r="3" fill="#64748b"/>
            </g>

            <!-- Animated Current Flow Path -->
            <path id="clip-current-flow" d="M 265 120 L 425 120 L 425 215" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6,4"/>

            <!-- 3. VOUT OUTPUT PANEL -->
            <rect x="598" y="48" width="207" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text id="clip-vout-title" x="610" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">3. สัญญาณเอาต์พุต (Vout)</text>
            <text id="clip-vout-sub" x="610" y="83" fill="#4ade80" font-size="10">ยอดบวกถูกขลิบติดที่ +0.7V</text>

            <rect x="606" y="92" width="191" height="142" rx="6" fill="#070e1b"/>
            <line x1="606" y1="163" x2="797" y2="163" stroke="#475569" stroke-dasharray="3,3"/>
            <text x="793" y="167" fill="#64748b" font-size="9" text-anchor="end">0V</text>

            <!-- Reference Clip/Clamp Line -->
            <line id="clip-ref-line" x1="606" y1="159" x2="797" y2="159" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text id="clip-ref-label" x="793" y="155" fill="#f87171" font-size="9" text-anchor="end">Vclip = +0.7V</text>

            <!-- Waveform paths for all modes -->
            <!-- 1. Positive Clipper Path (Default) -->
            <path id="clip-path-pos" d="M 615 163 C 621 160, 626 159, 632 159 L 642 159 C 648 159, 653 160, 657.5 163 C 670 221, 688 221, 700 163 C 706 160, 711 159, 717 159 L 727 159 C 733 159, 738 160, 742.5 163 C 755 221, 773 221, 785 163" fill="none" stroke="#4ade80" stroke-width="2.4" filter="url(#glow-clip-green)"/>

            <!-- 2. Negative Clipper Path -->
            <path id="clip-path-neg" style="display:none;" d="M 615 163 C 627 105, 645 105, 657.5 163 C 663 166, 668 167, 674 167 L 684 167 C 690 167, 695 166, 700 163 C 712.5 105, 730.5 105, 742.5 163 C 748 166, 753 167, 759 167 L 769 167 C 775 167, 780 166, 785 163" fill="none" stroke="#4ade80" stroke-width="2.4" filter="url(#glow-clip-green)"/>

            <!-- 3. Biased Clipper Path (+3.7V) -->
            <path id="clip-path-bias" style="display:none;" d="M 615 163 C 624 148, 628 145, 634 145 L 640 145 C 646 145, 650 148, 657.5 163 C 670 221, 688 221, 700 163 C 709 148, 713 145, 719 145 L 725 145 C 731 145, 735 148, 742.5 163 C 755 221, 773 221, 785 163" fill="none" stroke="#f59e0b" stroke-width="2.4" filter="url(#glow-clip-amber)"/>

            <!-- 4. Positive Clamper Path (Shifted UP) -->
            <path id="clip-path-clamp-pos" style="display:none;" d="M 615 163 C 627 105, 645 105, 657.5 163 C 670 221, 688 221, 700 163 C 712.5 105, 730.5 105, 742.5 163 C 755 221, 773 221, 785 163" transform="translate(0, -45)" fill="none" stroke="#38bdf8" stroke-width="2.4" filter="url(#glow-clip-blue)"/>

            <!-- 5. Negative Clamper Path (Shifted DOWN) -->
            <path id="clip-path-clamp-neg" style="display:none;" d="M 615 163 C 627 105, 645 105, 657.5 163 C 670 221, 688 221, 700 163 C 712.5 105, 730.5 105, 742.5 163 C 755 221, 773 221, 785 163" transform="translate(0, 45)" fill="none" stroke="#a78bfa" stroke-width="2.4" filter="url(#glow-clip-blue)"/>

            <!-- Output Scan Line & Dot -->
            <line id="clip-vout-scan-line" x1="615" y1="92" x2="615" y2="234" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8"/>
            <circle id="clip-vout-scan-dot" cx="615" cy="163" r="4.5" fill="#4ade80" filter="url(#glow-clip-green)"/>

            <!-- DYNAMIC LIVE EXPLANATION PANEL -->
            <rect x="15" y="268" width="790" height="92" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
            <rect id="clip-expl-accent" x="15" y="268" width="5" height="92" rx="2" fill="#f59e0b"/>
            <text id="clip-expl-title" x="32" y="290" fill="#38bdf8" font-size="12" font-weight="bold">⚡ สถานะการทำงาน: ซีกบวก (+) ➔ ไดโอดนำกระแส (ON)</text>
            <text id="clip-expl-line1" x="32" y="313" fill="#f1f5f9" font-size="11.5">เมื่อ Vin &gt; 0.7V ไดโอดได้รับไบแอสตรง นำกระแสชอร์ตแรงดันส่วนเกินลงกราวด์ ➔ Vout ถูกจำกัดที่ +0.7V</text>
            <text id="clip-expl-line2" x="32" y="333" fill="#94a3b8" font-size="10.5">ในซีกลบ (−) ไดโอดได้รับไบแอสกลับ (OFF) เสมือนเปิดวงจร ➔ สัญญาณซีกลบจึงผ่านออกไปได้สมบูรณ์ (Vout = Vin)</text>
            <text id="clip-expl-line3" x="32" y="350" fill="#64748b" font-size="10">สูตร: ซีกบวก Vout = 0.7V | ซีกลบ Vout = Vin (Peak-to-Peak ลดลงเหลือ Vm + 0.7V)</text>
        `
    },
    'zener': {
        title: 'ซีเนอร์ไดโอด (Zener Diode)',
        desc: `<b>ซีเนอร์ไดโอด (Zener Diode)</b> คือไดโอดสารกึ่งตัวนำชนิดพิเศษที่เจือสารหน่วงความเข้มข้นสูง (Heavily Doped) ถูกออกแบบมาเป็นพิเศษเพื่อให้ทำงานได้อย่างปลอดภัยและมีเสถียรภาพในสภาวะ <b>Reverse Breakdown</b> นิยมนำไปทำเป็น <b>วงจรควบคุมแรงดันให้คงที่ (Voltage Regulator)</b> และสร้างแรงดันอ้างอิง (Reference Voltage)<br><br>
<b>⚙️ กลไกการเกิด Breakdown ทางฟิสิกส์ 2 รูปแบบ:</b><br>
1. <b>Zener Breakdown (V<sub>Z</sub> &lt; 5.0 V):</b> เกิดจากสารเจือเข้มข้นมาก ทำให้ Depletion Region บางมาก (&lt; 10 nm) แม้จ่ายแรงดันต่ำแต่เกิดสนามไฟฟ้าแรงสูงระดับ 10⁶ V/cm ดึงอิเล็กตรอนออกจากพันธะโควาเลนต์โดยตรงด้วยปรากฏการณ์ <b>Quantum Tunneling</b> (มีสัมประสิทธิ์อุณหภูมิเป็นลบ Negative Temp Coeff)<br>
2. <b>Avalanche Breakdown (V<sub>Z</sub> &gt; 5.6 V):</b> เกิดจากการเร่งความเร็วของอิเล็กตรอนด้วยสนามไฟฟ้าจนมีพลังงานจลน์สูง พุ่งชนอะตอมในผลึกแล้วปลดปล่อยพาหะคู่อิเล็กตรอน-โฮลใหม่อย่างทวีคูณ (Impact Ionization) (มีสัมประสิทธิ์อุณหภูมิเป็นบวก Positive Temp Coeff)<br>
• <b>ช่วง V<sub>Z</sub> ≈ 5.1–5.6 V:</b> สองกลไกนี้จะหักล้างกันพอดี ทำให้ซีเนอร์ช่วงนี้มีเสถียรภาพต่ออุณหภูมิสูงที่สุดในโลก!`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📐 การวิเคราะห์และออกแบบวงจร Zener Voltage Regulator</h3>
            <div style="background: rgba(16,185,129,0.08); border: 1px solid #10b981; border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem;">
                <b style="color: #10b981; font-size: 1.05rem;">สูตรและขั้นตอนการคำนวณวงจรจริง:</b>
                <div style="margin-top: 0.75rem; background: rgba(0,0,0,0.25); padding: 1rem; border-radius: 6px; font-family: monospace; line-height: 2;">
                    1. แรงดันตกคร่อมตัวต้านทานอนุกรม: <b>V<sub>Rs</sub> = V<sub>in</sub> − V<sub>Z</sub></b><br>
                    2. กระแสรวมจากแหล่งจ่าย: <b>I<sub>S</sub> = V<sub>Rs</sub> / R<sub>s</sub></b><br>
                    3. กระแสที่ไหลเข้าโหลด: <b>I<sub>L</sub> = V<sub>Z</sub> / R<sub>L</sub></b><br>
                    4. กระแสซีเนอร์ (ตามกฎ Kirchhoff KCL): <b>I<sub>Z</sub> = I<sub>S</sub> − I<sub>L</sub></b><br>
                    5. กำลังสูญเสียที่ซีเนอร์: <b>P<sub>Z</sub> = V<sub>Z</sub> · I<sub>Z</sub> ≤ P<sub>Z(max)</sub></b>
                </div>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                <thead>
                    <tr style="background: rgba(6,182,212,0.15);">
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: left;">สภาวะการทำงาน</th>
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: center;">พฤติกรรมของวงจร</th>
                        <th style="padding: 0.6rem; border: 1px solid #334155; text-align: left;">ผลลัพธ์ที่โหลด (Vout)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;"><b>V<sub>in</sub> &lt; V<sub>Z</sub></b></td>
                        <td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #f87171;">ซีเนอร์ยังไม่ Breakdown (OFF)</td>
                        <td style="padding: 0.5rem; border: 1px solid #334155;">ไม่ควบคุม! V<sub>out</sub> เป็นไปตาม Voltage Divider ของ Rs และ RL</td>
                    </tr>
                    <tr style="background:rgba(255,255,255,0.02);">
                        <td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;"><b>V<sub>in</sub> &gt; V<sub>Z</sub> (ปกติ)</b></td>
                        <td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #4ade80;">ซีเนอร์เกิด Breakdown (ON)</td>
                        <td style="padding: 0.5rem; border: 1px solid #334155; color: #4ade80; font-weight: bold;">ควบคุมแรงดันคงที่ V<sub>out</sub> = V<sub>Z</sub> = 5.1 V เสมอ ✓</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem 0.6rem; border: 1px solid #334155;"><b>V<sub>in</sub> เพิ่มสูงขึ้น</b></td>
                        <td style="padding: 0.5rem; border: 1px solid #334155; text-align: center; color: #06b6d4;">I<sub>Z</sub> เพิ่มขึ้น เพื่อดูดซับแรงดันเกินตกคร่อม Rs</td>
                        <td style="padding: 0.5rem; border: 1px solid #334155;">V<sub>out</sub> ยังคงที่ 5.1 V (แรงดันส่วนเกินไปตกที่ Rs แทน)</td>
                    </tr>
                </tbody>
            </table>
            <div style="background: rgba(6,182,212,0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px;">
                💡 <b>สรุปหลักการทำงาน:</b> ซีเนอร์ไดโอดทำหน้าที่เหมือน "สปริงเกลอร์ระบายน้ำส่วนเกิน" เมื่อแรงดันน้ำ (V<sub>in</sub>) มากเกินไประดับที่ตั้งไว้ ซีเนอร์จะยอมให้น้ำไหลผ่านตัวมันเองทิ้งลงกราวด์ (I<sub>Z</sub> เพิ่ม) เพื่อรักษาระดับน้ำที่ปลายท่อ (V<sub>out</sub>) ให้คงที่เสมอ
            </div>
        `,
        controls: true,
        viewBox: '0 0 820 370',
        svg: `
            <defs>
                <filter id="glow-z-cyan" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-z-green" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-z-amber" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>

            <!-- TOP HUD / STATUS BAR -->
            <rect x="15" y="8" width="790" height="34" rx="8" fill="rgba(15, 23, 42, 0.75)" stroke="#334155" stroke-width="1"/>
            <g id="zener-badge-grp">
                <rect id="zener-badge-box" x="23" y="13" width="235" height="24" rx="6" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="1"/>
                <circle cx="37" cy="25" r="4" fill="#10b981"><animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/></circle>
                <text id="zener-badge-txt" x="48" y="29" fill="#4ade80" font-size="11.5" font-weight="bold">🟢 ควบคุมคงที่: Vout = 5.10 V</text>
            </g>
            <text id="zener-hud-vin" x="275" y="29" fill="#fbbf24" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">Vin = 12.0 V</text>
            <text id="zener-hud-vrs" x="390" y="29" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">VRs = 6.9 V</text>
            <text id="zener-hud-iz" x="500" y="29" fill="#06b6d4" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="600">Iz = 21.2 mA</text>
            <text id="zener-hud-il" x="615" y="29" fill="#a78bfa" font-size="12" font-family="'JetBrains Mono', monospace">IL = 10.2 mA</text>
            <text id="zener-hud-vout" x="720" y="29" fill="#4ade80" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="bold">5.10 V</text>

            <!-- LEFT/CENTER PANEL: CIRCUIT SCHEMATIC -->
            <rect x="15" y="48" width="495" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="27" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">1. วงจรควบคุมแรงดันซีเนอร์ (Zener Regulator)</text>
            <text x="27" y="83" fill="#94a3b8" font-size="10">Rs จำกัดกระแส + ซีเนอร์ต่อ Reverse Breakdown ขนานกับโหลด RL</text>

            <!-- DC Source (Left) -->
            <circle cx="55" cy="165" r="18" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
            <text id="zener-src-lbl" x="55" y="160" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">DC</text>
            <text id="zener-src-val" x="55" y="174" fill="#fbbf24" font-size="9" font-family="'JetBrains Mono', monospace" font-weight="bold" text-anchor="middle">12V</text>
            <text x="55" y="137" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">+</text>
            <text x="55" y="197" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">−</text>

            <!-- Wire from Source to Top Rail -->
            <line x1="55" y1="147" x2="55" y2="115" stroke="#64748b" stroke-width="2.2"/>
            <line x1="55" y1="115" x2="115" y2="115" stroke="#64748b" stroke-width="2.2"/>

            <!-- Series Resistor Rs = 220 Ohm -->
            <g id="zener-rs-grp">
                <rect x="115" y="107" width="65" height="16" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="147" y="100" fill="#f59e0b" font-size="10.5" font-weight="bold" text-anchor="middle">Rs = 220 Ω</text>
                <text id="zener-vrs-txt" x="147" y="136" fill="#fbbf24" font-size="9" text-anchor="middle">VRs = 6.9 V</text>
                <text id="zener-prs-txt" x="147" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">0.22 W</text>
            </g>

            <!-- Wire to Node A -->
            <line x1="180" y1="115" x2="250" y2="115" stroke="#64748b" stroke-width="2.2"/>
            <circle cx="250" cy="115" r="4.5" fill="#06b6d4"/>
            <text id="zener-kcl-txt" x="250" y="100" fill="#06b6d4" font-size="9.5" font-weight="bold" text-anchor="middle">Is = Iz + IL</text>

            <!-- Wire from Node A to Load -->
            <line x1="250" y1="115" x2="400" y2="115" stroke="#64748b" stroke-width="2.2"/>
            <circle cx="400" cy="115" r="4" fill="#a78bfa"/>

            <!-- Bottom Ground Wire -->
            <line x1="55" y1="183" x2="55" y2="215" stroke="#64748b" stroke-width="2.2"/>
            <line x1="55" y1="215" x2="400" y2="215" stroke="#64748b" stroke-width="2.2"/>
            <circle cx="250" cy="215" r="4" fill="#64748b"/>
            <circle cx="400" cy="215" r="4" fill="#64748b"/>
            <line x1="250" y1="215" x2="250" y2="225" stroke="#64748b" stroke-width="1.8"/>
            <line x1="242" y1="225" x2="258" y2="225" stroke="#64748b" stroke-width="1.8"/>
            <line x1="246" y1="229" x2="254" y2="229" stroke="#64748b" stroke-width="1.2"/>

            <!-- Zener Diode Branch (Center at x=250) -->
            <!-- In reverse breakdown, Cathode is connected to positive rail (TOP), Anode to ground (BOTTOM) -->
            <g id="zener-branch" transform="translate(250, 0)">
                <line x1="0" y1="115" x2="0" y2="145" stroke="#06b6d4" stroke-width="2"/>
                
                <!-- Zener Symbol -->
                <g id="zener-sym" transform="translate(0, 165)">
                    <!-- Cathode Bar with Zener bent wings at top (pointing up/down) -->
                    <path d="M -12,-12 L 12,-12 L 16,-6 M -12,-12 L -16,-18" fill="none" stroke="#06b6d4" stroke-width="2.2"/>
                    <!-- Diode Triangle pointing UP to cathode -->
                    <polygon id="zener-tri" points="-12,10 12,10 0,-12" fill="#06b6d4" stroke="#38bdf8" stroke-width="1.8" filter="url(#glow-z-cyan)"/>
                    <text x="22" y="-2" fill="#06b6d4" font-size="10.5" font-weight="bold">Vz = 5.1V</text>
                    <text id="zener-iz-txt" x="22" y="12" fill="#38bdf8" font-size="9.5" font-weight="bold">Iz = 21.2 mA</text>
                </g>

                <line x1="0" y1="175" x2="0" y2="215" stroke="#06b6d4" stroke-width="2"/>
            </g>

            <!-- Load Resistor Branch (Right at x=400) -->
            <g id="zener-load-branch" transform="translate(400, 0)">
                <line x1="0" y1="115" x2="0" y2="140" stroke="#a78bfa" stroke-width="2"/>
                <rect x="-10" y="140" width="20" height="42" rx="3" fill="rgba(167, 139, 250, 0.2)" stroke="#a78bfa" stroke-width="1.5"/>
                <text id="zener-rl-txt" x="18" y="157" fill="#a78bfa" font-size="10.5" font-weight="bold">RL = 500 Ω</text>
                <text id="zener-il-txt" x="18" y="172" fill="#cbd5e1" font-size="9.5">IL = 10.2 mA</text>
                <text id="zener-vout-txt" x="18" y="187" fill="#4ade80" font-size="10.5" font-weight="bold">Vout = 5.10 V</text>
                <line x1="0" y1="182" x2="0" y2="215" stroke="#a78bfa" stroke-width="2"/>
            </g>

            <!-- Output probe nodes -->
            <path d="M 400 115 L 460 115" fill="none" stroke="#64748b" stroke-width="1.8"/>
            <path d="M 400 215 L 460 215" fill="none" stroke="#64748b" stroke-width="1.8"/>
            <circle cx="460" cy="115" r="3" fill="#4ade80"/>
            <circle cx="460" cy="215" r="3" fill="#64748b"/>
            <text x="472" y="119" fill="#4ade80" font-size="10" font-weight="bold">+</text>
            <text x="472" y="219" fill="#94a3b8" font-size="10" font-weight="bold">−</text>
            <text x="472" y="168" fill="#4ade80" font-size="11" font-weight="bold">Vout</text>

            <!-- Animated Current Flow Lines -->
            <path id="zener-flow-is" d="M 55 115 L 250 115" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6,4"/>
            <path id="zener-flow-iz" d="M 250 115 L 250 215" fill="none" stroke="#06b6d4" stroke-width="2.5" stroke-dasharray="6,4"/>
            <path id="zener-flow-il" d="M 250 115 L 400 115 L 400 215" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-dasharray="6,4"/>

            <!-- RIGHT PANEL: OSCILLOSCOPE DUAL-TRACE (Vin vs Vout) -->
            <rect x="520" y="48" width="285" height="214" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="#1e293b"/>
            <text x="532" y="68" fill="#f1f5f9" font-size="12" font-weight="bold">2. จอเปรียบเทียบ Vin vs Vout</text>
            <text id="zener-scope-sub" x="532" y="83" fill="#4ade80" font-size="10">Vin มีระลอกกระเพื่อม ➔ แต่ Vout คงที่ 5.1V สมบูรณ์</text>

            <rect x="528" y="92" width="269" height="142" rx="6" fill="#070e1b"/>
            <!-- Grid Lines -->
            <line x1="528" y1="215" x2="797" y2="215" stroke="#475569" stroke-dasharray="3,3"/>
            <text x="793" y="219" fill="#64748b" font-size="8.5" text-anchor="end">0V</text>

            <line x1="528" y1="164" x2="797" y2="164" stroke="#334155" stroke-dasharray="2,2"/>
            <text x="793" y="168" fill="#4ade80" font-size="8.5" text-anchor="end">5V (Vz)</text>

            <line x1="528" y1="113" x2="797" y2="113" stroke="#334155" stroke-dasharray="2,2"/>
            <text x="793" y="117" fill="#fbbf24" font-size="8.5" text-anchor="end">10V</text>

            <line x1="528" y1="94" x2="797" y2="94" stroke="#334155" stroke-dasharray="2,2"/>
            <text x="793" y="98" fill="#fbbf24" font-size="8.5" text-anchor="end">15V</text>

            <!-- Trace 1: Vin (Amber, can show ripple or level) -->
            <path id="zener-trace-vin" d="M 535 105 C 560 95, 580 115, 605 105 C 630 95, 650 115, 675 105 C 700 95, 720 115, 745 105 C 765 95, 780 110, 790 105" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2" filter="url(#glow-z-amber)"/>

            <!-- Trace 2: Vout (Emerald, perfectly flat regulated line at 5.1V) -->
            <path id="zener-trace-vout" d="M 535 163 L 790 163" fill="none" stroke="#4ade80" stroke-width="2.6" filter="url(#glow-z-green)"/>

            <!-- Scanning Cursor -->
            <line id="zener-scan-line" x1="535" y1="92" x2="535" y2="234" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8"/>
            <circle id="zener-dot-vin" cx="535" cy="105" r="4" fill="#fbbf24" filter="url(#glow-z-amber)"/>
            <circle id="zener-dot-vout" cx="535" cy="163" r="4.5" fill="#4ade80" filter="url(#glow-z-green)"/>

            <!-- DYNAMIC LIVE EXPLANATION PANEL -->
            <rect x="15" y="268" width="790" height="92" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
            <rect id="zener-expl-accent" x="15" y="268" width="5" height="92" rx="2" fill="#10b981"/>
            <text id="zener-expl-title" x="32" y="290" fill="#38bdf8" font-size="12" font-weight="bold">⚡ สถานะ: ควบคุมแรงดันคงที่สมบูรณ์ (Voltage Regulating Mode)</text>
            <text id="zener-expl-line1" x="32" y="313" fill="#f1f5f9" font-size="11.5">Vin (12V) &gt; Vz (5.1V) ➔ ซีเนอร์ทำงานในสภาวะ Reverse Breakdown รักษาระดับแรงดันตกคร่อมไว้ที่ 5.10 V เสมอ</text>
            <text id="zener-expl-line2" x="32" y="333" fill="#94a3b8" font-size="10.5">แรงดันส่วนเกิน (12V − 5.1V = 6.9V) จะถูกผลักไปตกคร่อมตัวต้านทาน Rs ทั้งหมด โดยซีเนอร์ยอมให้กระแส Iz ปรับตัวตามภาระ</text>
            <text id="zener-expl-line3" x="32" y="350" fill="#64748b" font-size="10">กฎกระแสเคอร์ชอฟฟ์: Is (31.4 mA) = Iz (21.2 mA) + IL (10.2 mA) | Vout = Vz = 5.1 V คงที่</text>
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

function renderQuiz() {
    if (typeof QuizEngine !== 'undefined' && typeof diodeQuizQuestions !== 'undefined') {
        QuizEngine.init({
            containerId: 'quiz-container',
            lessonTitle: 'ไดโอดและวงจรประยุกต์ (Diode & Applications)',
            questionBank: diodeQuizQuestions,
            count: 10
        });
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

    if (window.activeSim && typeof window.activeSim.stop === 'function') {
        window.activeSim.stop();
        window.activeSim = null;
    }
    if (window.rectifierAnim) {
        window.rectifierAnim.stop();
        window.rectifierAnim = null;
    }

    const canvasContainer = document.getElementById('canvas-container');
    if (data.svg) {
        const vb = data.viewBox || "0 0 600 350";
        canvasContainer.innerHTML = `
            <svg viewBox="${vb}" id="anim-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge>
                            <feMergeNode in="blur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                ${data.svg}
            </svg>
        `;
    } else {
        canvasContainer.innerHTML = '';
    }

    const controlsContainer = document.getElementById('sim-controls');
    controlsContainer.innerHTML = '';
    controlsContainer.style.display = 'flex';

    if (topicKey === 'pn-junction') {
        initPNJunctionSimulator(controlsContainer);
    } else if (topicKey === 'bias') {
        initBiasSimulator(controlsContainer);
    } else if (topicKey === 'iv-curve') {
        initIVCurveSimulator(controlsContainer);
    } else if (topicKey === 'rectifier') {
        initRectifierSimulator(controlsContainer);
    } else if (topicKey === 'clipper-clamper') {
        initClipperClamperSimulator(controlsContainer);
    } else if (topicKey === 'zener') {
        initZenerSimulator(controlsContainer);
    } else if (!data.controls) {
        controlsContainer.style.display = 'none';
    }
}

function initRectifierSimulator(controlsContainer) {
    let currentMode = 'half'; // 'half', 'fw-ct', 'fw-bridge'
    let isPlaying = true;
    let speed = 1.0;
    let phase = 0; // 0 to 4*Math.PI
    let animId = null;

    // Elements
    const statusPos = document.getElementById('status-badge-pos');
    const statusNeg = document.getElementById('status-badge-neg');
    const liveVin = document.getElementById('live-vin');
    const liveVout = document.getElementById('live-vout');
    const liveDiodeState = document.getElementById('live-diode-state');

    const vinScanLine = document.getElementById('vin-scan-line');
    const vinScanDot = document.getElementById('vin-scan-dot');

    const voutScanLine = document.getElementById('vout-scan-line');
    const voutScanDot = document.getElementById('vout-scan-dot');

    const cktHeaderTitle = document.getElementById('ckt-header-title');
    const cktHeaderSub = document.getElementById('ckt-header-sub');
    const cktHalf = document.getElementById('ckt-half');
    const cktCt = document.getElementById('ckt-ct');
    const cktBridge = document.getElementById('ckt-bridge');

    const hwVoutGroup = document.getElementById('hw-vout-group');
    const ctVoutGroup = document.getElementById('ct-vout-group');
    const bridgeVoutGroup = document.getElementById('bridge-vout-group');

    const voutPanelTitle = document.getElementById('vout-panel-title');
    const voutPanelSub = document.getElementById('vout-panel-sub');
    const voutPeakLbl = document.getElementById('vout-peak-lbl');
    const voutAvgLine = document.getElementById('vout-avg-line');
    const voutAvgLabel = document.getElementById('vout-avg-label');

    const explAccent = document.getElementById('expl-accent');
    const explLine1 = document.getElementById('expl-line1');
    const explLine2 = document.getElementById('expl-line2');
    const explLine3 = document.getElementById('expl-line3');

    // Sub-elements for Half-Wave
    const hwDiodeTri = document.getElementById('hw-diode-tri');
    const hwDiodeBar = document.getElementById('hw-diode-bar');
    const hwBadgeBox = document.getElementById('hw-badge-box');
    const hwBadgeTxt = document.getElementById('hw-badge-txt');
    const hwCurrentFlow = document.getElementById('hw-current-flow');
    const hwPolTop = document.getElementById('hw-pol-top');
    const hwPolBot = document.getElementById('hw-pol-bot');
    const hwVoutPlus = document.getElementById('hw-vout-plus');
    const hwVoutMinus = document.getElementById('hw-vout-minus');

    // Sub-elements for CT
    const ctD1Tri = document.getElementById('ct-d1-tri');
    const ctD1Bar = document.getElementById('ct-d1-bar');
    const ctD1Badge = document.getElementById('ct-d1-badge');
    const ctD2Tri = document.getElementById('ct-d2-tri');
    const ctD2Bar = document.getElementById('ct-d2-bar');
    const ctD2Badge = document.getElementById('ct-d2-badge');
    const ctFlowD1 = document.getElementById('ct-flow-d1');
    const ctFlowD2 = document.getElementById('ct-flow-d2');
    const ctPolTop = document.getElementById('ct-pol-top');
    const ctPolBot = document.getElementById('ct-pol-bot');

    // Sub-elements for Bridge
    const brD1Tri = document.getElementById('br-d1-tri');
    const brD2Tri = document.getElementById('br-d2-tri');
    const brD3Tri = document.getElementById('br-d3-tri');
    const brD4Tri = document.getElementById('br-d4-tri');
    const brD1Bar = document.getElementById('br-d1-bar');
    const brD2Bar = document.getElementById('br-d2-bar');
    const brD3Bar = document.getElementById('br-d3-bar');
    const brD4Bar = document.getElementById('br-d4-bar');
    const brStatusTxt = document.getElementById('br-status-txt');
    const brFlowPos = document.getElementById('br-flow-pos');
    const brFlowNeg = document.getElementById('br-flow-neg');
    const brPolLeft = document.getElementById('br-pol-left');
    const brPolRight = document.getElementById('br-pol-right');

    // UI Buttons
    controlsContainer.innerHTML = '';

    const btnHalf = document.createElement('button');
    btnHalf.className = 'btn-control active';
    btnHalf.innerText = '⚡ Half-Wave';

    const btnCt = document.createElement('button');
    btnCt.className = 'btn-control';
    btnCt.innerText = '🔁 Full-Wave CT';

    const btnBridge = document.createElement('button');
    btnBridge.className = 'btn-control';
    btnBridge.innerText = '🌉 Full-Wave Bridge';

    const btnPlayPause = document.createElement('button');
    btnPlayPause.className = 'btn-control';
    btnPlayPause.innerText = '⏸ พักภาพ';

    const btnStepPos = document.createElement('button');
    btnStepPos.className = 'btn-control';
    btnStepPos.innerText = '🟢 จังหวะซีกบวก (+)';

    const btnStepNeg = document.createElement('button');
    btnStepNeg.className = 'btn-control';
    btnStepNeg.innerText = '🔵 จังหวะซีกลบ (−)';

    const btnSpeed = document.createElement('button');
    btnSpeed.className = 'btn-control';
    btnSpeed.innerText = '⏱️ สปีด: 1x';

    controlsContainer.appendChild(btnHalf);
    controlsContainer.appendChild(btnCt);
    controlsContainer.appendChild(btnBridge);
    controlsContainer.appendChild(btnPlayPause);
    controlsContainer.appendChild(btnStepPos);
    controlsContainer.appendChild(btnStepNeg);
    controlsContainer.appendChild(btnSpeed);

    function setMode(mode) {
        currentMode = mode;
        btnHalf.classList.toggle('active', mode === 'half');
        btnCt.classList.toggle('active', mode === 'fw-ct');
        btnBridge.classList.toggle('active', mode === 'fw-bridge');

        if (cktHalf) cktHalf.style.display = (mode === 'half') ? 'block' : 'none';
        if (cktCt) cktCt.style.display = (mode === 'fw-ct') ? 'block' : 'none';
        if (cktBridge) cktBridge.style.display = (mode === 'fw-bridge') ? 'block' : 'none';

        if (hwVoutGroup) hwVoutGroup.style.display = (mode === 'half') ? 'block' : 'none';
        if (ctVoutGroup) ctVoutGroup.style.display = (mode === 'fw-ct') ? 'block' : 'none';
        if (bridgeVoutGroup) bridgeVoutGroup.style.display = (mode === 'fw-bridge') ? 'block' : 'none';

        if (mode === 'half') {
            if (cktHeaderTitle) cktHeaderTitle.textContent = '2. วงจร Half-Wave Rectifier';
            if (cktHeaderSub) cktHeaderSub.textContent = 'ไดโอด 1 ตัว — นำกระแสเฉพาะซีกบวก';
            if (voutPanelTitle) voutPanelTitle.textContent = '3. สัญญาณเอาต์พุต (Half-Wave)';
            if (voutPanelSub) voutPanelSub.textContent = 'แรงดัน DC ครึ่งคลื่น ตกคร่อมโหลด RL';
            if (voutPeakLbl) voutPeakLbl.textContent = '+Vm (11.3V)';
            if (voutAvgLine) { voutAvgLine.setAttribute('y1', '149'); voutAvgLine.setAttribute('y2', '149'); voutAvgLine.setAttribute('stroke', '#4ade80'); }
            if (voutAvgLabel) { voutAvgLabel.textContent = 'Avg = 0.318 Vm'; voutAvgLabel.setAttribute('y', '145'); voutAvgLabel.setAttribute('fill', '#4ade80'); }
            if (explLine3) explLine3.textContent = 'สูตรแรงดันเฉลี่ย: Vout(avg) = Vm / π ≈ 0.318 × Vm | ความถี่ริปเปิล = f';
        } else if (mode === 'fw-ct') {
            if (cktHeaderTitle) cktHeaderTitle.textContent = '2. วงจร Full-Wave Center-Tap';
            if (cktHeaderSub) cktHeaderSub.textContent = 'ไดโอด 2 ตัว + หม้อแปลงแทปกลาง (Center Tap)';
            if (voutPanelTitle) voutPanelTitle.textContent = '3. สัญญาณเอาต์พุต (Full-Wave CT)';
            if (voutPanelSub) voutPanelSub.textContent = 'แรงดัน DC เต็มคลื่น ตกคร่อมโหลด RL';
            if (voutPeakLbl) voutPeakLbl.textContent = '+Vm (11.3V)';
            if (voutAvgLine) { voutAvgLine.setAttribute('y1', '135'); voutAvgLine.setAttribute('y2', '135'); voutAvgLine.setAttribute('stroke', '#06b6d4'); }
            if (voutAvgLabel) { voutAvgLabel.textContent = 'Avg = 0.636 Vm'; voutAvgLabel.setAttribute('y', '131'); voutAvgLabel.setAttribute('fill', '#06b6d4'); }
            if (explLine3) explLine3.textContent = 'สูตรแรงดันเฉลี่ย: Vout(avg) = 2Vm / π ≈ 0.636 × Vm | ความถี่ริปเปิล = 2f';
        } else if (mode === 'fw-bridge') {
            if (cktHeaderTitle) cktHeaderTitle.textContent = '2. วงจร Full-Wave Bridge Rectifier';
            if (cktHeaderSub) cktHeaderSub.textContent = 'ไดโอด 4 ตัว สะพานบริดจ์ — นิยมใช้งานมากที่สุด';
            if (voutPanelTitle) voutPanelTitle.textContent = '3. สัญญาณเอาต์พุต (Full-Wave Bridge)';
            if (voutPanelSub) voutPanelSub.textContent = 'แรงดัน DC เต็มคลื่น ตกคร่อมโหลด RL';
            if (voutPeakLbl) voutPeakLbl.textContent = '+Vm (−1.4V)';
            if (voutAvgLine) { voutAvgLine.setAttribute('y1', '138'); voutAvgLine.setAttribute('y2', '138'); voutAvgLine.setAttribute('stroke', '#f59e0b'); }
            if (voutAvgLabel) { voutAvgLabel.textContent = 'Avg = 0.636 Vm (−1.4V)'; voutAvgLabel.setAttribute('y', '134'); voutAvgLabel.setAttribute('fill', '#f59e0b'); }
            if (explLine3) explLine3.textContent = 'สูตรแรงดันเฉลี่ย: Vout(avg) = 2(Vm − 1.4V) / π ≈ 0.636 × (Vm − 1.4V) | ความถี่ริปเปิล = 2f';
        }
        renderFrame(phase);
    }

    btnHalf.onclick = () => setMode('half');
    btnCt.onclick = () => setMode('fw-ct');
    btnBridge.onclick = () => setMode('fw-bridge');

    btnPlayPause.onclick = () => {
        isPlaying = !isPlaying;
        btnPlayPause.innerText = isPlaying ? '⏸ พักภาพ' : '▶ เล่นต่อ';
    };

    btnStepPos.onclick = () => {
        isPlaying = false;
        btnPlayPause.innerText = '▶ เล่นต่อ';
        phase = Math.PI / 2; // Peak of positive half-cycle
        renderFrame(phase);
    };

    btnStepNeg.onclick = () => {
        isPlaying = false;
        btnPlayPause.innerText = '▶ เล่นต่อ';
        phase = (3 * Math.PI) / 2; // Peak of negative half-cycle
        renderFrame(phase);
    };

    btnSpeed.onclick = () => {
        if (speed === 1.0) {
            speed = 0.35;
            btnSpeed.innerText = '⏱️ สโลว์: 0.35x';
        } else {
            speed = 1.0;
            btnSpeed.innerText = '⚡ สปีด: 1x';
        }
    };

    function renderFrame(currentPhase) {
        const twoPi = 2 * Math.PI;
        const theta = currentPhase % twoPi;
        const isPos = theta < Math.PI;
        const sinVal = Math.sin(currentPhase);
        const vinVolts = (sinVal * 12.0).toFixed(1);

        // Scan cursor math (width 170px for 2 full cycles: 0 to 4*pi)
        const phaseRatio = (currentPhase % (4 * Math.PI)) / (4 * Math.PI);
        const scanX_in = 32 + phaseRatio * 170;
        const scanY_in = 163 - sinVal * 45;

        const scanX_out = 615 + phaseRatio * 170;
        let scanY_out = 163;
        let voutVolts = "0.0";

        if (currentMode === 'half') {
            if (isPos) {
                voutVolts = Math.max(0, (sinVal * 12.0 - 0.7)).toFixed(1);
                scanY_out = 163 - Math.max(0, sinVal * 45 - 2.5);
            } else {
                voutVolts = "0.0";
                scanY_out = 163; // Pinned directly at 0V line!
            }
        } else if (currentMode === 'fw-ct') {
            voutVolts = Math.max(0, (Math.abs(sinVal) * 12.0 - 0.7)).toFixed(1);
            scanY_out = 163 - Math.max(0, Math.abs(sinVal) * 45 - 2.5);
        } else if (currentMode === 'fw-bridge') {
            voutVolts = Math.max(0, (Math.abs(sinVal) * 12.0 - 1.4)).toFixed(1);
            scanY_out = 163 - Math.max(0, Math.abs(sinVal) * 45 - 5.0);
        }

        // 1. Update Top HUD
        if (statusPos) statusPos.style.display = isPos ? 'block' : 'none';
        if (statusNeg) statusNeg.style.display = isPos ? 'none' : 'block';
        if (liveVin) liveVin.textContent = 'Vin = ' + (sinVal >= 0 ? '+' : '') + vinVolts + ' V';
        if (liveVout) liveVout.textContent = 'Vout = +' + voutVolts + ' V';

        // 2. Update Input Scan cursor
        if (vinScanLine) {
            vinScanLine.setAttribute('x1', scanX_in);
            vinScanLine.setAttribute('x2', scanX_in);
        }
        if (vinScanDot) {
            vinScanDot.setAttribute('cx', scanX_in);
            vinScanDot.setAttribute('cy', scanY_in);
        }

        // 3. Update Output Scan cursor
        if (voutScanLine) {
            voutScanLine.setAttribute('x1', scanX_out);
            voutScanLine.setAttribute('x2', scanX_out);
        }
        if (voutScanDot) {
            voutScanDot.setAttribute('cx', scanX_out);
            voutScanDot.setAttribute('cy', scanY_out);
            if (currentMode === 'half' && !isPos) {
                voutScanDot.setAttribute('fill', '#f87171');
            } else {
                voutScanDot.setAttribute('fill', currentMode === 'half' ? '#4ade80' : (currentMode === 'fw-ct' ? '#06b6d4' : '#f59e0b'));
            }
        }

        // 4. Update Circuit Status & Current Flow
        const dashOffset = (-(currentPhase * 25)).toString();

        if (currentMode === 'half') {
            if (isPos) {
                if (hwDiodeTri) { hwDiodeTri.setAttribute('fill', '#10b981'); hwDiodeTri.setAttribute('stroke', '#34d399'); }
                if (hwDiodeBar) hwDiodeBar.setAttribute('stroke', '#34d399');
                if (hwBadgeBox) { hwBadgeBox.setAttribute('fill', 'rgba(16, 185, 129, 0.25)'); hwBadgeBox.setAttribute('stroke', '#10b981'); }
                if (hwBadgeTxt) { hwBadgeTxt.textContent = 'D: ON (นำกระแส)'; hwBadgeTxt.setAttribute('fill', '#4ade80'); }
                if (liveDiodeState) { liveDiodeState.textContent = 'D: ON (Forward Bias — นำกระแส)'; liveDiodeState.setAttribute('fill', '#4ade80'); }
                if (hwPolTop) { hwPolTop.textContent = '+'; hwPolTop.setAttribute('fill', '#10b981'); }
                if (hwPolBot) { hwPolBot.textContent = '−'; hwPolBot.setAttribute('fill', '#f87171'); }
                if (hwVoutPlus) hwVoutPlus.setAttribute('fill', '#10b981');
                if (hwVoutMinus) hwVoutMinus.setAttribute('fill', '#94a3b8');
                if (hwCurrentFlow) {
                    hwCurrentFlow.style.opacity = '1';
                    hwCurrentFlow.setAttribute('stroke', '#10b981');
                    hwCurrentFlow.style.strokeDashoffset = dashOffset;
                }
                if (explAccent) explAccent.setAttribute('fill', '#10b981');
                if (explLine1) explLine1.textContent = '🟢 ซีกบวก (+) : ขั้วบวกเข้าที่แอโนด ไดโอด D ได้รับไบแอสตรง (Forward Bias) ➔ ไดโอดนำกระแส';
                if (explLine2) explLine2.textContent = 'กระแสไฟฟ้าไหลผ่านโหลด RL ลงสู่ขั้วลบ ➔ เกิดแรงดันขาออก Vout = Vin − 0.7V ตามรูปคลื่นซีกบวก';
            } else {
                if (hwDiodeTri) { hwDiodeTri.setAttribute('fill', '#334155'); hwDiodeTri.setAttribute('stroke', '#f87171'); }
                if (hwDiodeBar) hwDiodeBar.setAttribute('stroke', '#f87171');
                if (hwBadgeBox) { hwBadgeBox.setAttribute('fill', 'rgba(248, 113, 113, 0.2)'); hwBadgeBox.setAttribute('stroke', '#f87171'); }
                if (hwBadgeTxt) { hwBadgeTxt.textContent = 'D: OFF (บล็อกคลื่น)'; hwBadgeTxt.setAttribute('fill', '#f87171'); }
                if (liveDiodeState) { liveDiodeState.textContent = 'D: OFF (Reverse Bias — บล็อกสัญญาณ)'; liveDiodeState.setAttribute('fill', '#f87171'); }
                if (hwPolTop) { hwPolTop.textContent = '−'; hwPolTop.setAttribute('fill', '#f87171'); }
                if (hwPolBot) { hwPolBot.textContent = '+'; hwPolBot.setAttribute('fill', '#10b981'); }
                if (hwVoutPlus) hwVoutPlus.setAttribute('fill', '#64748b');
                if (hwVoutMinus) hwVoutMinus.setAttribute('fill', '#64748b');
                if (hwCurrentFlow) {
                    hwCurrentFlow.style.opacity = '0'; // Current completely stopped
                }
                if (explAccent) explAccent.setAttribute('fill', '#f87171');
                if (explLine1) explLine1.textContent = '🔵 ซีกลบ (−) : ขั้วลบเข้าที่แอโนด ไดโอด D ได้รับไบแอสย้อนกลับ (Reverse Bias) ➔ ไดโอดไม่นำกระแส';
                if (explLine2) explLine2.textContent = 'ไดโอดปิดกั้นไม่ยอมให้กระแสไหล (I = 0A) ➔ แรงดันตกคร่อมโหลด RL จึงเป็น 0 โวลต์ (Vout = 0V) เป็นเส้นตรง';
            }
        } else if (currentMode === 'fw-ct') {
            if (isPos) {
                if (ctD1Tri) { ctD1Tri.setAttribute('fill', '#10b981'); ctD1Tri.setAttribute('stroke', '#34d399'); }
                if (ctD1Bar) ctD1Bar.setAttribute('stroke', '#34d399');
                if (ctD1Badge) { ctD1Badge.textContent = 'D1: ON (นำกระแส)'; ctD1Badge.setAttribute('fill', '#4ade80'); }
                if (ctD2Tri) { ctD2Tri.setAttribute('fill', '#334155'); ctD2Tri.setAttribute('stroke', '#64748b'); }
                if (ctD2Bar) ctD2Bar.setAttribute('stroke', '#64748b');
                if (ctD2Badge) { ctD2Badge.textContent = 'D2: OFF (บล็อก)'; ctD2Badge.setAttribute('fill', '#64748b'); }
                if (ctPolTop) { ctPolTop.textContent = '+'; ctPolTop.setAttribute('fill', '#10b981'); }
                if (ctPolBot) { ctPolBot.textContent = '−'; ctPolBot.setAttribute('fill', '#f87171'); }
                if (ctFlowD1) { ctFlowD1.style.opacity = '1'; ctFlowD1.style.strokeDashoffset = dashOffset; }
                if (ctFlowD2) ctFlowD2.style.opacity = '0';
                if (liveDiodeState) { liveDiodeState.textContent = 'D1: ON | D2: OFF (ซีกบวก)'; liveDiodeState.setAttribute('fill', '#06b6d4'); }
                if (explAccent) explAccent.setAttribute('fill', '#06b6d4');
                if (explLine1) explLine1.textContent = '🟢 ซีกบวก : ขดลวดบนเป็น (+) เทียบกับแทปกลาง ➔ ไดโอด D1 นำกระแส (ON) ขณะที่ D2 ถูกบล็อก (OFF)';
                if (explLine2) explLine2.textContent = 'กระแสไหลผ่าน D1 ➔ ไหลผ่านโหลด RL ลงสู่กราวด์แทปกลาง ➔ เกิดรูปคลื่นบวกลูกแรก';
            } else {
                if (ctD1Tri) { ctD1Tri.setAttribute('fill', '#334155'); ctD1Tri.setAttribute('stroke', '#64748b'); }
                if (ctD1Bar) ctD1Bar.setAttribute('stroke', '#64748b');
                if (ctD1Badge) { ctD1Badge.textContent = 'D1: OFF (บล็อก)'; ctD1Badge.setAttribute('fill', '#64748b'); }
                if (ctD2Tri) { ctD2Tri.setAttribute('fill', '#10b981'); ctD2Tri.setAttribute('stroke', '#34d399'); }
                if (ctD2Bar) ctD2Bar.setAttribute('stroke', '#34d399');
                if (ctD2Badge) { ctD2Badge.textContent = 'D2: ON (นำกระแส)'; ctD2Badge.setAttribute('fill', '#4ade80'); }
                if (ctPolTop) { ctPolTop.textContent = '−'; ctPolTop.setAttribute('fill', '#f87171'); }
                if (ctPolBot) { ctPolBot.textContent = '+'; ctPolBot.setAttribute('fill', '#10b981'); }
                if (ctFlowD1) ctFlowD1.style.opacity = '0';
                if (ctFlowD2) { ctFlowD2.style.opacity = '1'; ctFlowD2.style.strokeDashoffset = dashOffset; }
                if (liveDiodeState) { liveDiodeState.textContent = 'D1: OFF | D2: ON (ซีกลบ)'; liveDiodeState.setAttribute('fill', '#06b6d4'); }
                if (explAccent) explAccent.setAttribute('fill', '#06b6d4');
                if (explLine1) explLine1.textContent = '🔵 ซีกลบ : ขดลวดล่างกลับเป็น (+) เทียบกับแทปกลาง ➔ ไดโอด D2 นำกระแส (ON) ขณะที่ D1 ถูกบล็อก (OFF)';
                if (explLine2) explLine2.textContent = 'กระแสไหลผ่าน D2 ➔ ไหลผ่านโหลด RL ในทิศทางเดิม! ➔ เกิดรูปคลื่นบวกลูกที่สอง (เต็มคลื่นสมบูรณ์)';
            }
        } else if (currentMode === 'fw-bridge') {
            if (isPos) {
                if (brD1Tri) { brD1Tri.setAttribute('fill', '#06b6d4'); brD1Tri.setAttribute('stroke', '#38bdf8'); }
                if (brD1Bar) brD1Bar.setAttribute('stroke', '#38bdf8');
                if (brD2Tri) { brD2Tri.setAttribute('fill', '#06b6d4'); brD2Tri.setAttribute('stroke', '#38bdf8'); }
                if (brD2Bar) brD2Bar.setAttribute('stroke', '#38bdf8');
                if (brD3Tri) { brD3Tri.setAttribute('fill', '#334155'); brD3Tri.setAttribute('stroke', '#64748b'); }
                if (brD3Bar) brD3Bar.setAttribute('stroke', '#64748b');
                if (brD4Tri) { brD4Tri.setAttribute('fill', '#334155'); brD4Tri.setAttribute('stroke', '#64748b'); }
                if (brD4Bar) brD4Bar.setAttribute('stroke', '#64748b');
                if (brPolLeft) { brPolLeft.textContent = '+'; brPolLeft.setAttribute('fill', '#10b981'); }
                if (brPolRight) { brPolRight.textContent = '−'; brPolRight.setAttribute('fill', '#f87171'); }
                if (brStatusTxt) { brStatusTxt.textContent = 'D1, D2 นำกระแส (ON) | D3, D4 บล็อก (OFF)'; brStatusTxt.setAttribute('fill', '#06b6d4'); }
                if (brFlowPos) { brFlowPos.style.opacity = '1'; brFlowPos.style.strokeDashoffset = dashOffset; }
                if (brFlowNeg) brFlowNeg.style.opacity = '0';
                if (liveDiodeState) { liveDiodeState.textContent = 'D1, D2: ON | D3, D4: OFF'; liveDiodeState.setAttribute('fill', '#f59e0b'); }
                if (explAccent) explAccent.setAttribute('fill', '#f59e0b');
                if (explLine1) explLine1.textContent = '🟢 ซีกบวก : ขั้วบวกเข้าฝั่งซ้าย ➔ ไดโอดคู่ D1 และ D2 นำกระแส (Forward Bias) ขณะที่ D3, D4 บล็อก';
                if (explLine2) explLine2.textContent = 'กระแสไหลผ่าน D1 ➔ ไหลเข้าขั้วบนของ RL ➔ ผ่าน D2 กลับขั้วลบ ➔ เกิดรูปคลื่นบวกลูกแรก (Vout = Vm − 1.4V)';
            } else {
                if (brD1Tri) { brD1Tri.setAttribute('fill', '#334155'); brD1Tri.setAttribute('stroke', '#64748b'); }
                if (brD1Bar) brD1Bar.setAttribute('stroke', '#64748b');
                if (brD2Tri) { brD2Tri.setAttribute('fill', '#334155'); brD2Tri.setAttribute('stroke', '#64748b'); }
                if (brD2Bar) brD2Bar.setAttribute('stroke', '#64748b');
                if (brD3Tri) { brD3Tri.setAttribute('fill', '#f59e0b'); brD3Tri.setAttribute('stroke', '#fbbf24'); }
                if (brD3Bar) brD3Bar.setAttribute('stroke', '#fbbf24');
                if (brD4Tri) { brD4Tri.setAttribute('fill', '#f59e0b'); brD4Tri.setAttribute('stroke', '#fbbf24'); }
                if (brD4Bar) brD4Bar.setAttribute('stroke', '#fbbf24');
                if (brPolLeft) { brPolLeft.textContent = '−'; brPolLeft.setAttribute('fill', '#f87171'); }
                if (brPolRight) { brPolRight.textContent = '+'; brPolRight.setAttribute('fill', '#10b981'); }
                if (brStatusTxt) { brStatusTxt.textContent = 'D3, D4 นำกระแส (ON) | D1, D2 บล็อก (OFF)'; brStatusTxt.setAttribute('fill', '#f59e0b'); }
                if (brFlowPos) brFlowPos.style.opacity = '0';
                if (brFlowNeg) { brFlowNeg.style.opacity = '1'; brFlowNeg.style.strokeDashoffset = dashOffset; }
                if (liveDiodeState) { liveDiodeState.textContent = 'D3, D4: ON | D1, D2: OFF'; liveDiodeState.setAttribute('fill', '#f59e0b'); }
                if (explAccent) explAccent.setAttribute('fill', '#f59e0b');
                if (explLine1) explLine1.textContent = '🔵 ซีกลบ : ขั้วไฟฟ้าสลับด้าน (ขวาเป็นบวก ซ้ายเป็นลบ) ➔ ไดโอดคู่ D3 และ D4 นำกระแส (Forward Bias)';
                if (explLine2) explLine2.textContent = 'กระแสไหลผ่าน D3 ➔ ไหลเข้าขั้วบนของ RL (ทิศเดิม!) ➔ ผ่าน D4 กลับขั้วลบ ➔ เกิดรูปคลื่นบวกลูกที่สอง';
            }
        }
    }

    function animate() {
        if (isPlaying) {
            phase = (phase + 0.038 * speed) % (4 * Math.PI);
            renderFrame(phase);
        }
        animId = requestAnimationFrame(animate);
    }

    window.activeSim = {
        stop: () => {
            if (animId) cancelAnimationFrame(animId);
        }
    };
    window.rectifierAnim = window.activeSim;

    setMode('half');
    animId = requestAnimationFrame(animate);
}

function initIVCurveSimulator(controlsContainer) {
    const btnAnimate = document.createElement('button');
    btnAnimate.className = 'btn-control active';
    btnAnimate.innerText = '▶ วาดกราฟใหม่';
    btnAnimate.onclick = () => {
        const canvasContainer = document.getElementById('canvas-container');
        if (!canvasContainer) return;
        canvasContainer.innerHTML = '';
        setTimeout(() => {
            const data = topics['iv-curve'];
            canvasContainer.innerHTML = `
                <svg viewBox="0 0 600 350" id="anim-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feMerge>
                                <feMergeNode in="blur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    ${data.svg}
                </svg>
            `;
        }, 50);
    };
    controlsContainer.appendChild(btnAnimate);
}

function initPNJunctionSimulator(controlsContainer) {
    let currentMat = 'si'; // 'si', 'ge', 'gaas'
    let isPlaying = true;
    let isDiffusing = false;
    let animId = null;
    let time = 0;

    // Elements
    const hudMat = document.getElementById('pn-hud-material');
    const hudState = document.getElementById('pn-hud-state');
    const hudCurrent = document.getElementById('pn-hud-current');
    const depBox = document.getElementById('pn-dep-box');
    const depLabel = document.getElementById('pn-dep-label');
    const fieldLine = document.getElementById('pn-field-line');
    const fieldTxt = document.getElementById('pn-field-txt');
    const pBlock = document.getElementById('pn-p-block');
    const nBlock = document.getElementById('pn-n-block');
    const ionsP = document.getElementById('pn-ions-p');
    const ionsN = document.getElementById('pn-ions-n');
    const holesGrp = document.getElementById('pn-holes-grp');
    const electronsGrp = document.getElementById('pn-electrons-grp');
    const hillCurve = document.getElementById('pn-hill-curve');
    const hillTopLine = document.getElementById('pn-hill-top-line');
    const hillLabel = document.getElementById('pn-hill-label');
    const explAccent = document.getElementById('pn-expl-accent');
    const explTitle = document.getElementById('pn-expl-title');
    const explLine1 = document.getElementById('pn-expl-line1');
    const explLine2 = document.getElementById('pn-expl-line2');

    // Controls buttons
    controlsContainer.innerHTML = '';

    const btnSi = document.createElement('button');
    btnSi.className = 'btn-control active';
    btnSi.innerText = '💎 Silicon (0.7V)';

    const btnGe = document.createElement('button');
    btnGe.className = 'btn-control';
    btnGe.innerText = '⚡ Germanium (0.3V)';

    const btnGaAs = document.createElement('button');
    btnGaAs.className = 'btn-control';
    btnGaAs.innerText = '🚀 GaAs (1.2V)';

    const btnDiff = document.createElement('button');
    btnDiff.className = 'btn-control';
    btnDiff.innerText = '🔄 จำลองกระบวนการแพร่ (Diffusion)';

    const btnPlayPause = document.createElement('button');
    btnPlayPause.className = 'btn-control';
    btnPlayPause.innerText = '⏸ พักภาพ';

    controlsContainer.appendChild(btnSi);
    controlsContainer.appendChild(btnGe);
    controlsContainer.appendChild(btnGaAs);
    controlsContainer.appendChild(btnDiff);
    controlsContainer.appendChild(btnPlayPause);

    const materials = {
        'si': {
            name: 'Silicon (Si)',
            v0: '0.70 V',
            width: 180,
            left: 320,
            yHill: 248,
            desc: '💎 Silicon (Si): V₀ ≈ 0.70 V | W ≈ 0.5 µm',
            color: '#06b6d4',
            expl1: 'พาหะหยุดการแพร่เนื่องจากกำแพงศักย์ 0.70V ขวางไว้ ➔ กระแสแพร่เท่ากับกระแสดริฟต์พอดี (I_net = 0 A)',
            expl2: 'ต้องใช้แรงดัน Forward Bias ภายนอกมากกว่า 0.7V จึงจะเอาชนะกำแพงศักย์และทำให้กระแสไหล'
        },
        'ge': {
            name: 'Germanium (Ge)',
            v0: '0.30 V',
            width: 110,
            left: 355,
            yHill: 268,
            desc: '⚡ Germanium (Ge): V₀ ≈ 0.30 V | W ≈ 0.3 µm',
            color: '#8b5cf6',
            expl1: 'Germanium มีกำแพงศักย์ต่ำเพียง 0.30V ทำให้ Depletion Region แคบกว่าซิลิกอน',
            expl2: 'นำกระแสได้ง่ายที่แรงดันต่ำกว่า แต่มีข้อเสียคือก่อให้เกิด Reverse Leakage Current สูงกว่าซิลิกอนมาก'
        },
        'gaas': {
            name: 'Gallium Arsenide (GaAs)',
            v0: '1.20 V',
            width: 250,
            left: 285,
            yHill: 232,
            desc: '🚀 GaAs (แกลเลียม อาร์เซไนด์): V₀ ≈ 1.20 V | W ≈ 0.7 µm',
            color: '#f87171',
            expl1: 'GaAs มี Bandgap กว้าง 1.42 eV ทำให้มี Barrier Potential สูงถึง 1.20 V และ Depletion Region กว้างที่สุด',
            expl2: 'นิยมนำไปทำ LED สีต่างๆ และอุปกรณ์ความถี่สูงมาก (High Electron Mobility)'
        }
    };

    function setMaterial(matKey) {
        currentMat = matKey;
        btnSi.classList.toggle('active', matKey === 'si');
        btnGe.classList.toggle('active', matKey === 'ge');
        btnGaAs.classList.toggle('active', matKey === 'gaas');

        const m = materials[matKey];
        if (hudMat) hudMat.textContent = m.desc;
        if (depBox) {
            depBox.setAttribute('x', m.left);
            depBox.setAttribute('width', m.width);
            depBox.setAttribute('stroke', m.color);
        }
        if (depLabel) depLabel.setAttribute('x', m.left + m.width / 2);
        if (fieldLine) {
            fieldLine.setAttribute('x1', m.left + m.width - 25);
            fieldLine.setAttribute('x2', m.left + 25);
            fieldLine.setAttribute('stroke', m.color);
        }
        if (fieldTxt) {
            fieldTxt.setAttribute('x', m.left + m.width / 2);
            fieldTxt.setAttribute('fill', m.color);
        }
        if (pBlock) pBlock.setAttribute('width', m.left - 20);
        if (nBlock) {
            nBlock.setAttribute('x', m.left + m.width);
            nBlock.setAttribute('width', 800 - (m.left + m.width));
        }
        if (hillCurve) {
            const pX = m.left;
            const nX = m.left + m.width;
            hillCurve.setAttribute('d', `M 120 285 L ${pX} 285 C ${pX + 30} 285, ${nX - 30} ${m.yHill}, ${nX} ${m.yHill} L 770 ${m.yHill}`);
            hillCurve.setAttribute('stroke', m.color);
        }
        if (hillTopLine) {
            hillTopLine.setAttribute('y1', m.yHill);
            hillTopLine.setAttribute('y2', m.yHill);
            hillTopLine.setAttribute('stroke', m.color);
        }
        if (hillLabel) {
            hillLabel.textContent = `V₀ = ${m.v0} (${m.name} Barrier Height)`;
            hillLabel.setAttribute('y', m.yHill - 4);
            hillLabel.setAttribute('fill', m.color);
        }
        if (explAccent) explAccent.setAttribute('fill', m.color);
        if (explTitle) explTitle.textContent = `⚡ สถานะ: สมดุลทางความร้อน — สารกึ่งตัวนำ ${m.name} (V₀ = ${m.v0})`;
        if (explLine1) explLine1.textContent = m.expl1;
        if (explLine2) explLine2.textContent = m.expl2;

        // Position ions inside depletion region
        if (ionsP && ionsN) {
            const leftCol = m.left + 22;
            const leftCol2 = m.left + (m.width / 2) - 20;
            const rightCol1 = m.left + (m.width / 2) + 20;
            const rightCol2 = m.left + m.width - 22;

            const pCircles = ionsP.querySelectorAll('circle');
            const pTexts = ionsP.querySelectorAll('text');
            if (pCircles.length >= 6) {
                pCircles[0].setAttribute('cx', leftCol); pTexts[0].setAttribute('x', leftCol);
                pCircles[1].setAttribute('cx', leftCol); pTexts[1].setAttribute('x', leftCol);
                pCircles[2].setAttribute('cx', leftCol); pTexts[2].setAttribute('x', leftCol);
                pCircles[3].setAttribute('cx', leftCol2); pTexts[3].setAttribute('x', leftCol2);
                pCircles[4].setAttribute('cx', leftCol2); pTexts[4].setAttribute('x', leftCol2);
                pCircles[5].setAttribute('cx', leftCol2); pTexts[5].setAttribute('x', leftCol2);
            }
            const nCircles = ionsN.querySelectorAll('circle');
            const nTexts = ionsN.querySelectorAll('text');
            if (nCircles.length >= 6) {
                nCircles[0].setAttribute('cx', rightCol1); nTexts[0].setAttribute('x', rightCol1);
                nCircles[1].setAttribute('cx', rightCol1); nTexts[1].setAttribute('x', rightCol1);
                nCircles[2].setAttribute('cx', rightCol1); nTexts[2].setAttribute('x', rightCol1);
                nCircles[3].setAttribute('cx', rightCol2); nTexts[3].setAttribute('x', rightCol2);
                nCircles[4].setAttribute('cx', rightCol2); nTexts[4].setAttribute('x', rightCol2);
                nCircles[5].setAttribute('cx', rightCol2); nTexts[5].setAttribute('x', rightCol2);
            }
        }
    }

    btnSi.onclick = () => setMaterial('si');
    btnGe.onclick = () => setMaterial('ge');
    btnGaAs.onclick = () => setMaterial('gaas');

    btnPlayPause.onclick = () => {
        isPlaying = !isPlaying;
        btnPlayPause.innerText = isPlaying ? '⏸ พักภาพ' : '▶ เล่นต่อ';
    };

    btnDiff.onclick = () => {
        isDiffusing = true;
        btnDiff.innerText = '⏳ กำลังจำลองการแพร่...';
        btnDiff.disabled = true;

        let step = 0;
        const totalSteps = 60;
        const origWidth = materials[currentMat].width;
        const origLeft = materials[currentMat].left;
        const midPoint = origLeft + origWidth / 2;

        function stepDiff() {
            step++;
            const progress = step / totalSteps;
            const currentW = Math.max(10, origWidth * progress);
            const currentL = midPoint - currentW / 2;

            if (depBox) {
                depBox.setAttribute('x', currentL);
                depBox.setAttribute('width', currentW);
            }
            if (pBlock) pBlock.setAttribute('width', currentL - 20);
            if (nBlock) {
                nBlock.setAttribute('x', currentL + currentW);
                nBlock.setAttribute('width', 800 - (currentL + currentW));
            }
            if (fieldLine) {
                fieldLine.setAttribute('x1', currentL + currentW - 15);
                fieldLine.setAttribute('x2', currentL + 15);
                fieldLine.style.opacity = progress;
            }
            if (hillCurve) {
                const yH = 285 - (285 - materials[currentMat].yHill) * progress;
                hillCurve.setAttribute('d', `M 120 285 L ${currentL} 285 C ${currentL + 20} 285, ${currentL + currentW - 20} ${yH}, ${currentL + currentW} ${yH} L 770 ${yH}`);
            }
            if (explTitle) {
                explTitle.textContent = `🔄 กำลังแพร่: อิเล็กตรอนและโฮลรวมตัวกันใกล้รอยต่อ ➔ เกิดไอออนตรึงแน่น (${Math.round(progress * 100)}%)`;
            }

            if (step < totalSteps) {
                requestAnimationFrame(stepDiff);
            } else {
                isDiffusing = false;
                btnDiff.innerText = '🔄 จำลองกระบวนการแพร่ (Diffusion)';
                btnDiff.disabled = false;
                setMaterial(currentMat);
            }
        }
        requestAnimationFrame(stepDiff);
    };

    function animateCarriers() {
        if (isPlaying && !isDiffusing) {
            time += 0.05;
            if (holesGrp) {
                const circles = holesGrp.querySelectorAll('circle');
                const texts = holesGrp.querySelectorAll('text');
                circles.forEach((c, idx) => {
                    const dx = Math.sin(time + idx * 1.5) * 3.5;
                    const dy = Math.cos(time + idx * 2.1) * 3.5;
                    c.style.transform = `translate(${dx}px, ${dy}px)`;
                    if (texts[idx]) texts[idx].style.transform = `translate(${dx}px, ${dy}px)`;
                });
            }
            if (electronsGrp) {
                const circles = electronsGrp.querySelectorAll('circle');
                const texts = electronsGrp.querySelectorAll('text');
                circles.forEach((c, idx) => {
                    const dx = Math.cos(time + idx * 1.7) * 3.5;
                    const dy = Math.sin(time + idx * 2.3) * 3.5;
                    c.style.transform = `translate(${dx}px, ${dy}px)`;
                    if (texts[idx]) texts[idx].style.transform = `translate(${dx}px, ${dy}px)`;
                });
            }
        }
        animId = requestAnimationFrame(animateCarriers);
    }

    setMaterial('si');
    animId = requestAnimationFrame(animateCarriers);

    window.activeSim = {
        stop: () => {
            if (animId) cancelAnimationFrame(animId);
        }
    };
}

function initBiasSimulator(controlsContainer) {
    let mode = 'forward'; // 'forward' or 'reverse'
    let currentV = 0.7;
    let isPlaying = true;
    let animId = null;
    let flowPhase = 0;

    // Elements
    const badgeBox = document.getElementById('bias-badge-box');
    const badgeTxt = document.getElementById('bias-badge-txt');
    const badgeDot = document.getElementById('bias-badge-dot');
    const vSourceTxt = document.getElementById('bias-vsource-txt');
    const vDiodeTxt = document.getElementById('bias-vdiode-txt');
    const iDiodeTxt = document.getElementById('bias-idiode-txt');
    const stateTxt = document.getElementById('bias-state-txt');
    const physDep = document.getElementById('bias-phys-dep');
    const depWidthTxt = document.getElementById('bias-dep-width-txt');
    const physSub = document.getElementById('bias-phys-sub');
    const physFieldTxt = document.getElementById('bias-phys-field-txt');
    const physFlows = document.getElementById('bias-phys-flows');
    const batPlus = document.getElementById('bias-bat-plus');
    const batMinus = document.getElementById('bias-bat-minus');
    const vrDrop = document.getElementById('bias-vr-drop');
    const diodeTri = document.getElementById('bias-diode-tri');
    const diodeBar = document.getElementById('bias-diode-bar');
    const dispVolts = document.getElementById('bias-disp-volts');
    const dispAmps = document.getElementById('bias-disp-amps');
    const wireFlow = document.getElementById('bias-wire-flow');
    const explAccent = document.getElementById('bias-expl-accent');
    const explTitle = document.getElementById('bias-expl-title');
    const explLine1 = document.getElementById('bias-expl-line1');
    const explLine2 = document.getElementById('bias-expl-line2');
    const explLine3 = document.getElementById('bias-expl-line3');

    // Controls
    controlsContainer.innerHTML = '';

    const btnFwd = document.createElement('button');
    btnFwd.className = 'btn-control active';
    btnFwd.innerText = '🟢 Forward Bias';

    const btnRev = document.createElement('button');
    btnRev.className = 'btn-control';
    btnRev.innerText = '🔴 Reverse Bias';

    const btnV1 = document.createElement('button');
    btnV1.className = 'btn-control';
    btnV1.innerText = '0.0 V (No Bias)';

    const btnV2 = document.createElement('button');
    btnV2.className = 'btn-control';
    btnV2.innerText = '0.4 V (< Cut-in)';

    const btnV3 = document.createElement('button');
    btnV3.className = 'btn-control active';
    btnV3.innerText = '0.7 V (Cut-in)';

    const btnV4 = document.createElement('button');
    btnV4.className = 'btn-control';
    btnV4.innerText = '1.2 V (Conduction)';

    const btnPlayPause = document.createElement('button');
    btnPlayPause.className = 'btn-control';
    btnPlayPause.innerText = '⏸ พักภาพ';

    controlsContainer.appendChild(btnFwd);
    controlsContainer.appendChild(btnRev);
    controlsContainer.appendChild(btnV1);
    controlsContainer.appendChild(btnV2);
    controlsContainer.appendChild(btnV3);
    controlsContainer.appendChild(btnV4);
    controlsContainer.appendChild(btnPlayPause);

    function updateVoltButtons() {
        if (mode === 'forward') {
            btnV1.innerText = '0.0 V (No Bias)';
            btnV2.innerText = '0.4 V (< Cut-in)';
            btnV3.innerText = '0.7 V (Cut-in)';
            btnV4.innerText = '1.2 V (Conduction)';
            btnV1.onclick = () => setVoltage(0.0);
            btnV2.onclick = () => setVoltage(0.4);
            btnV3.onclick = () => setVoltage(0.7);
            btnV4.onclick = () => setVoltage(1.2);
        } else {
            btnV1.innerText = '−1.0 V (Block)';
            btnV2.innerText = '−10.0 V (Block)';
            btnV3.innerText = '−30.0 V (High VR)';
            btnV4.innerText = '💥 −50.0 V (Breakdown)';
            btnV1.onclick = () => setVoltage(-1.0);
            btnV2.onclick = () => setVoltage(-10.0);
            btnV3.onclick = () => setVoltage(-30.0);
            btnV4.onclick = () => setVoltage(-50.0);
        }
    }

    function setMode(m) {
        mode = m;
        btnFwd.classList.toggle('active', m === 'forward');
        btnRev.classList.toggle('active', m === 'reverse');
        updateVoltButtons();
        if (m === 'forward') {
            setVoltage(0.7);
        } else {
            setVoltage(-10.0);
        }
    }

    btnFwd.onclick = () => setMode('forward');
    btnRev.onclick = () => setMode('reverse');

    btnPlayPause.onclick = () => {
        isPlaying = !isPlaying;
        btnPlayPause.innerText = isPlaying ? '⏸ พักภาพ' : '▶ เล่นต่อ';
    };

    function setVoltage(v) {
        currentV = v;

        [btnV1, btnV2, btnV3, btnV4].forEach(b => b.classList.remove('active'));
        if (mode === 'forward') {
            if (v === 0.0) btnV1.classList.add('active');
            else if (v === 0.4) btnV2.classList.add('active');
            else if (v === 0.7) btnV3.classList.add('active');
            else if (v === 1.2) btnV4.classList.add('active');
        } else {
            if (v === -1.0) btnV1.classList.add('active');
            else if (v === -10.0) btnV2.classList.add('active');
            else if (v === -30.0) btnV3.classList.add('active');
            else if (v === -50.0) btnV4.classList.add('active');
        }

        let vD = 0;
        let vR = 0;
        let iD_mA = 0;
        let isConducting = false;
        let isBreakdown = false;

        if (mode === 'forward') {
            if (v <= 0) {
                vD = 0; vR = 0; iD_mA = 0; isConducting = false;
            } else if (v < 0.7) {
                vD = v; vR = 0; iD_mA = (v * 0.05).toFixed(2); isConducting = false;
            } else {
                vD = 0.70;
                vR = v - 0.70;
                iD_mA = ((vR / 220) * 1000).toFixed(1);
                isConducting = true;
            }
        } else {
            if (v === -50.0) {
                vD = -50.0;
                vR = 0;
                iD_mA = 120.0;
                isBreakdown = true;
                isConducting = true;
            } else {
                vD = v;
                vR = 0;
                iD_mA = 0.0;
                isConducting = false;
            }
        }

        if (vSourceTxt) vSourceTxt.textContent = `V_in = ${v >= 0 ? '+' : ''}${v.toFixed(1)} V`;
        if (vDiodeTxt) vDiodeTxt.textContent = `V_D = ${vD >= 0 ? '+' : ''}${vD.toFixed(2)} V`;
        if (iDiodeTxt) iDiodeTxt.textContent = `I_D = ${iD_mA} mA`;

        if (mode === 'forward') {
            if (badgeBox) { badgeBox.setAttribute('fill', 'rgba(16, 185, 129, 0.18)'); badgeBox.setAttribute('stroke', '#10b981'); }
            if (badgeTxt) { badgeTxt.textContent = '🟢 Forward Bias (ไบแอสตรง)'; badgeTxt.setAttribute('fill', '#4ade80'); }
            if (badgeDot) badgeDot.setAttribute('fill', '#10b981');
            if (stateTxt) {
                stateTxt.textContent = isConducting ? 'D: ON (นำกระแส)' : (v === 0 ? 'D: OFF (No Bias)' : 'D: OFF (รอข้าม 0.7V)');
                stateTxt.setAttribute('fill', isConducting ? '#34d399' : '#fbbf24');
            }
            if (batPlus) { batPlus.textContent = '+'; batPlus.setAttribute('fill', '#10b981'); }
            if (batMinus) { batMinus.textContent = '−'; batMinus.setAttribute('fill', '#f87171'); }
        } else {
            if (isBreakdown) {
                if (badgeBox) { badgeBox.setAttribute('fill', 'rgba(239, 68, 68, 0.25)'); badgeBox.setAttribute('stroke', '#ef4444'); }
                if (badgeTxt) { badgeTxt.textContent = '💥 Reverse Breakdown (พังทลาย!)'; badgeTxt.setAttribute('fill', '#f87171'); }
                if (badgeDot) badgeDot.setAttribute('fill', '#ef4444');
                if (stateTxt) { stateTxt.textContent = 'D: BREAKDOWN (กระแสพุ่งสูง)'; stateTxt.setAttribute('fill', '#f87171'); }
            } else {
                if (badgeBox) { badgeBox.setAttribute('fill', 'rgba(239, 68, 68, 0.18)'); badgeBox.setAttribute('stroke', '#ef4444'); }
                if (badgeTxt) { badgeTxt.textContent = '🔴 Reverse Bias (ไบแอสกลับ)'; badgeTxt.setAttribute('fill', '#f87171'); }
                if (badgeDot) badgeDot.setAttribute('fill', '#ef4444');
                if (stateTxt) { stateTxt.textContent = 'D: OFF (บล็อกกระแส)'; stateTxt.setAttribute('fill', '#64748b'); }
            }
            if (batPlus) { batPlus.textContent = '−'; batPlus.setAttribute('fill', '#f87171'); }
            if (batMinus) { batMinus.textContent = '+'; batMinus.setAttribute('fill', '#10b981'); }
        }

        if (physDep) {
            let depW = 60;
            let depL = 175;
            if (mode === 'forward') {
                if (v === 0) { depW = 60; depL = 175; }
                else if (v === 0.4) { depW = 40; depL = 185; }
                else { depW = 18; depL = 196; }
                physDep.setAttribute('x', depL);
                physDep.setAttribute('width', depW);
                physDep.setAttribute('stroke', isConducting ? '#10b981' : '#06b6d4');
            } else {
                if (isBreakdown) { depW = 12; depL = 199; physDep.setAttribute('stroke', '#ef4444'); }
                else {
                    depW = Math.min(150, 60 + Math.abs(v) * 3);
                    depL = 205 - depW / 2;
                    physDep.setAttribute('stroke', '#f87171');
                }
                physDep.setAttribute('x', depL);
                physDep.setAttribute('width', depW);
            }
        }
        if (depWidthTxt) {
            if (mode === 'forward') {
                depWidthTxt.textContent = isConducting ? 'แคบมาก (~0 µm)' : (v === 0 ? 'ความกว้างปกติ' : 'แคบลง');
                depWidthTxt.setAttribute('fill', isConducting ? '#4ade80' : '#38bdf8');
            } else {
                depWidthTxt.textContent = isBreakdown ? 'พังทลาย (Breakdown)' : `กว้างมาก (~${(0.5 + Math.abs(v)*0.08).toFixed(1)} µm)`;
                depWidthTxt.setAttribute('fill', '#f87171');
            }
        }
        if (physSub) {
            if (mode === 'forward') {
                physSub.textContent = isConducting ? 'Depletion Region ยุบตัวสมบูรณ์ ➔ โฮลและอิเล็กตรอนไหลข้ามรอยต่อ' : 'สนามไฟฟ้าภายนอกเริ่มบีบ Depletion Region ให้แคบลง';
                physSub.setAttribute('fill', isConducting ? '#4ade80' : '#06b6d4');
            } else {
                physSub.textContent = isBreakdown ? 'สนามไฟฟ้าสูงเกินทน ➔ เกิด Avalanche Breakdown กระแสทะลัก' : 'ขั้วบวกดึงอิเล็กตรอน ขั้วลบดึงโฮล ➔ Depletion ขยายกว้างมาก';
                physSub.setAttribute('fill', '#f87171');
            }
        }
        if (physFieldTxt) {
            if (mode === 'forward') {
                physFieldTxt.textContent = isConducting ? 'E_ext ชนะ E_bi ➔ กำแพงศักย์พังทลายลงสิ้นเชิง' : 'E_ext ต่อต้าน E_bi (ยังไม่พอทลายกำแพง 0.7V)';
            } else {
                physFieldTxt.textContent = isBreakdown ? 'สนามไฟฟ้าสูงระดับล้านโวลต์/เมตร ทำลายพันธะผลึก' : 'E_ext เสริม E_bi ➔ กำแพงศักย์สูงขึ้นมาก (V0 + |VR|)';
            }
        }
        if (physFlows) {
            physFlows.style.display = isConducting ? 'block' : 'none';
        }

        if (vrDrop) vrDrop.textContent = `VR = ${vR.toFixed(2)} V`;
        if (dispVolts) {
            dispVolts.textContent = `${vD >= 0 ? '+' : ''}${vD.toFixed(2)} V`;
            dispVolts.setAttribute('fill', mode === 'forward' ? '#38bdf8' : '#f87171');
        }
        if (dispAmps) {
            dispAmps.textContent = `${iD_mA} mA`;
            dispAmps.setAttribute('fill', isConducting ? '#4ade80' : '#64748b');
        }
        if (diodeTri && diodeBar) {
            if (isConducting && !isBreakdown) {
                diodeTri.setAttribute('fill', '#10b981'); diodeTri.setAttribute('stroke', '#34d399');
                diodeBar.setAttribute('stroke', '#34d399');
            } else if (isBreakdown) {
                diodeTri.setAttribute('fill', '#ef4444'); diodeTri.setAttribute('stroke', '#f87171');
                diodeBar.setAttribute('stroke', '#f87171');
            } else {
                diodeTri.setAttribute('fill', '#334155'); diodeTri.setAttribute('stroke', '#64748b');
                diodeBar.setAttribute('stroke', '#64748b');
            }
        }

        if (explAccent) explAccent.setAttribute('fill', mode === 'forward' ? '#10b981' : '#f87171');
        if (mode === 'forward') {
            if (isConducting) {
                if (explTitle) explTitle.textContent = '⚡ สถานะ: ไบแอสตรง (Forward Bias) — ไดโอดนำกระแสสมบูรณ์';
                if (explLine1) explLine1.textContent = `แรงดัน Vin (${v.toFixed(1)}V) ชนะ Cut-in Voltage (0.7V) ➔ ไดโอดเปรียบเสมือนสวิตช์ปิด (Closed Switch)`;
                if (explLine2) explLine2.textContent = `แรงดันตกคร่อมไดโอดจะถูกล็อคไว้คงที่ที่ ≈ 0.70 V ส่วนแรงดันที่เหลือ (${vR.toFixed(1)}V) ตกคร่อมตัวต้านทาน R`;
                if (explLine3) explLine3.textContent = `กระแส ID = VR / R = ${vR.toFixed(1)}V / 220Ω = ${iD_mA} mA ไหลเวียนตามเข็มนาฬิกา`;
            } else {
                if (explTitle) explTitle.textContent = '⚡ สถานะ: ไบแอสตรงต่ำกว่า Cut-in Voltage (ยังไม่นำกระแส)';
                if (explLine1) explLine1.textContent = `แรงดัน Vin (${v.toFixed(1)}V) ยังไม่สามารถเอาชนะ Barrier Potential (0.7V) ของซิลิกอนได้`;
                if (explLine2) explLine2.textContent = 'Depletion Region เริ่มแคบลงแต่กำแพงศักย์ยังไม่พัง ➔ กระแสไหลน้อยมากเกือบเป็น 0 A';
                if (explLine3) explLine3.textContent = 'แรงดันอินพุตทั้งหมดไปตกคร่อมไดโอด VD = Vin และ VR ≈ 0V';
            }
        } else {
            if (isBreakdown) {
                if (explTitle) explTitle.textContent = '💥 สถานะ: พังทลายย้อนกลับ (Reverse Breakdown / Avalanche)';
                if (explLine1) explLine1.textContent = 'แรงดันย้อนกลับสูงเกินพิกัดความทนทาน (VBR = 50V) ➔ พันธะโควาเลนต์ในผลึกแตกตัว';
                if (explLine2) explLine2.textContent = 'อิเล็กตรอนความเร็วสูงพุ่งชนอะตอมแบบลูกโซ่ (Impact Ionization) ➔ กระแสย้อนกลับพุ่งสูงทำลายไดโอดทันที!';
                if (explLine3) explLine3.textContent = 'ข้อควรระวัง: ไดโอดทั่วไปห้ามใช้งานในย่านนี้เด็ดขาด (ยกเว้น Zener Diode ที่ถูกออกแบบมาโดยเฉพาะ)';
            } else {
                if (explTitle) explTitle.textContent = '⚡ สถานะ: ไบแอสกลับ (Reverse Bias) — บล็อกกระแสสมบูรณ์';
                if (explLine1) explLine1.textContent = `ขั้วบวกต่อแคโทด (N) และขั้วลบต่อแอโนด (P) ➔ ดึงดูดพาหะออกจากรอยต่อ Depletion กว้างขึ้น`;
                if (explLine2) explLine2.textContent = 'กำแพงศักย์เพิ่มสูงขึ้นเป็น (V0 + |VR|) ➔ พาหะข้างมากไม่สามารถไหลผ่านได้ (ไดโอดเสมือนสวิตช์เปิด Open Switch)';
                if (explLine3) explLine3.textContent = `กระแส ID ≈ 0 A (มีเพียงกระแสรั่วไหล I0 ~ nA) แรงดันอินพุตทั้งหมด (${Math.abs(v).toFixed(1)}V) ตกคร่อมไดโอดเต็มๆ`;
            }
        }
    }

    updateVoltButtons();
    setMode('forward');

    function animateWire() {
        if (isPlaying) {
            let isConducting = (mode === 'forward' && currentV >= 0.7) || (mode === 'reverse' && currentV === -50.0);
            if (wireFlow) {
                if (isConducting) {
                    wireFlow.style.opacity = '1';
                    flowPhase = (flowPhase + 0.5) % 30;
                    wireFlow.style.strokeDashoffset = (-flowPhase).toString();
                } else {
                    wireFlow.style.opacity = '0';
                }
            }
        }
        animId = requestAnimationFrame(animateWire);
    }
    animId = requestAnimationFrame(animateWire);

    window.activeSim = {
        stop: () => {
            if (animId) cancelAnimationFrame(animId);
        }
    };
}

function initClipperClamperSimulator(controlsContainer) {
    let mode = 'clip-pos'; // 'clip-pos', 'clip-neg', 'clip-bias', 'clamp-pos', 'clamp-neg'
    let isPlaying = true;
    let speed = 1.0;
    let phase = 0;
    let animId = null;

    // Elements
    const hudBadgeTxt = document.getElementById('clip-badge-txt');
    const liveVin = document.getElementById('clip-live-vin');
    const liveVout = document.getElementById('clip-live-vout');
    const liveState = document.getElementById('clip-live-state');

    const vinScanLine = document.getElementById('clip-vin-scan-line');
    const vinScanDot = document.getElementById('clip-vin-scan-dot');

    const cktTitle = document.getElementById('clip-ckt-title');
    const cktSub = document.getElementById('clip-ckt-sub');
    const seriesRGrp = document.getElementById('clip-series-r-grp');
    const seriesCGrp = document.getElementById('clip-series-c-grp');
    const shuntLoad = document.getElementById('clip-shunt-load');
    const biasBat = document.getElementById('clip-bias-bat');
    const diodeSym = document.getElementById('clip-diode-symbol');
    const diodeTri = document.getElementById('clip-diode-tri');
    const diodeBar = document.getElementById('clip-diode-bar');
    const diodeBotWire = document.getElementById('clip-diode-bot-wire');
    const dStateBadge = document.getElementById('clip-d-state-badge');
    const currentFlow = document.getElementById('clip-current-flow');

    const voutTitle = document.getElementById('clip-vout-title');
    const voutSub = document.getElementById('clip-vout-sub');
    const refLine = document.getElementById('clip-ref-line');
    const refLabel = document.getElementById('clip-ref-label');

    const pathPos = document.getElementById('clip-path-pos');
    const pathNeg = document.getElementById('clip-path-neg');
    const pathBias = document.getElementById('clip-path-bias');
    const pathClampPos = document.getElementById('clip-path-clamp-pos');
    const pathClampNeg = document.getElementById('clip-path-clamp-neg');

    const voutScanLine = document.getElementById('clip-vout-scan-line');
    const voutScanDot = document.getElementById('clip-vout-scan-dot');

    const explAccent = document.getElementById('clip-expl-accent');
    const explTitle = document.getElementById('clip-expl-title');
    const explLine1 = document.getElementById('clip-expl-line1');
    const explLine2 = document.getElementById('clip-expl-line2');
    const explLine3 = document.getElementById('clip-expl-line3');

    // Controls
    controlsContainer.innerHTML = '';

    const btnPosClip = document.createElement('button');
    btnPosClip.className = 'btn-control active';
    btnPosClip.innerText = '✂️ Positive Clipper';

    const btnNegClip = document.createElement('button');
    btnNegClip.className = 'btn-control';
    btnNegClip.innerText = '✂️ Negative Clipper';

    const btnBiasClip = document.createElement('button');
    btnBiasClip.className = 'btn-control';
    btnBiasClip.innerText = '🔋 Biased Clipper (+3V)';

    const btnPosClamp = document.createElement('button');
    btnPosClamp.className = 'btn-control';
    btnPosClamp.innerText = '🔼 Positive Clamper';

    const btnNegClamp = document.createElement('button');
    btnNegClamp.className = 'btn-control';
    btnNegClamp.innerText = '🔽 Negative Clamper';

    const btnPlayPause = document.createElement('button');
    btnPlayPause.className = 'btn-control';
    btnPlayPause.innerText = '⏸ พักภาพ';

    const btnStepPos = document.createElement('button');
    btnStepPos.className = 'btn-control';
    btnStepPos.innerText = '🟢 ซีกบวก (+)';

    const btnStepNeg = document.createElement('button');
    btnStepNeg.className = 'btn-control';
    btnStepNeg.innerText = '🔵 ซีกลบ (−)';

    const btnSpeed = document.createElement('button');
    btnSpeed.className = 'btn-control';
    btnSpeed.innerText = '⏱️ สปีด: 1x';

    controlsContainer.appendChild(btnPosClip);
    controlsContainer.appendChild(btnNegClip);
    controlsContainer.appendChild(btnBiasClip);
    controlsContainer.appendChild(btnPosClamp);
    controlsContainer.appendChild(btnNegClamp);
    controlsContainer.appendChild(btnPlayPause);
    controlsContainer.appendChild(btnStepPos);
    controlsContainer.appendChild(btnStepNeg);
    controlsContainer.appendChild(btnSpeed);

    function setMode(m) {
        mode = m;
        btnPosClip.classList.toggle('active', m === 'clip-pos');
        btnNegClip.classList.toggle('active', m === 'clip-neg');
        btnBiasClip.classList.toggle('active', m === 'clip-bias');
        btnPosClamp.classList.toggle('active', m === 'clamp-pos');
        btnNegClamp.classList.toggle('active', m === 'clamp-neg');

        const isClamper = m.startsWith('clamp');
        if (seriesRGrp) seriesRGrp.style.display = isClamper ? 'none' : 'block';
        if (seriesCGrp) seriesCGrp.style.display = isClamper ? 'block' : 'none';
        if (shuntLoad) shuntLoad.style.display = isClamper ? 'block' : 'none';
        if (biasBat) biasBat.style.display = (m === 'clip-bias') ? 'block' : 'none';

        if (diodeSym) {
            if (m === 'clip-pos' || m === 'clamp-neg') {
                diodeSym.setAttribute('transform', 'translate(425, 155)');
                if (diodeTri) diodeTri.setAttribute('points', '-10,-10 10,-10 0,10');
                if (diodeBar) { diodeBar.setAttribute('x1', '-10'); diodeBar.setAttribute('y1', '10'); diodeBar.setAttribute('x2', '10'); diodeBar.setAttribute('y2', '10'); }
            } else if (m === 'clip-neg' || m === 'clamp-pos') {
                diodeSym.setAttribute('transform', 'translate(425, 155)');
                if (diodeTri) diodeTri.setAttribute('points', '-10,10 10,10 0,-10');
                if (diodeBar) { diodeBar.setAttribute('x1', '-10'); diodeBar.setAttribute('y1', '-10'); diodeBar.setAttribute('x2', '10'); diodeBar.setAttribute('y2', '-10'); }
            } else if (m === 'clip-bias') {
                diodeSym.setAttribute('transform', 'translate(425, 140)');
                if (diodeTri) diodeTri.setAttribute('points', '-10,-10 10,-10 0,10');
                if (diodeBar) { diodeBar.setAttribute('x1', '-10'); diodeBar.setAttribute('y1', '10'); diodeBar.setAttribute('x2', '10'); diodeBar.setAttribute('y2', '10'); }
            }
        }
        if (diodeBotWire) {
            diodeBotWire.setAttribute('y1', m === 'clip-bias' ? '215' : '175');
        }

        if (pathPos) pathPos.style.display = (m === 'clip-pos') ? 'block' : 'none';
        if (pathNeg) pathNeg.style.display = (m === 'clip-neg') ? 'block' : 'none';
        if (pathBias) pathBias.style.display = (m === 'clip-bias') ? 'block' : 'none';
        if (pathClampPos) pathClampPos.style.display = (m === 'clamp-pos') ? 'block' : 'none';
        if (pathClampNeg) pathClampNeg.style.display = (m === 'clamp-neg') ? 'block' : 'none';

        if (m === 'clip-pos') {
            if (hudBadgeTxt) hudBadgeTxt.textContent = '✂️ Positive Clipper (ตัดซีกบวก)';
            if (cktTitle) cktTitle.textContent = '2. วงจร Positive Clipper';
            if (cktSub) cktSub.textContent = 'ไดโอดขนานตัดยอดบวกเกิน +0.7V ทิ้งลงกราวด์';
            if (voutTitle) voutTitle.textContent = '3. สัญญาณเอาต์พุต (Positive Clipper)';
            if (voutSub) voutSub.textContent = 'ยอดบวกถูกขลิบติดที่ +0.7V | ซีกลบผ่านปกติ';
            if (refLine) { refLine.setAttribute('y1', '159'); refLine.setAttribute('y2', '159'); refLine.style.display = 'block'; }
            if (refLabel) { refLabel.textContent = 'Vclip = +0.7V'; refLabel.setAttribute('y', '155'); refLabel.style.display = 'block'; }
        } else if (m === 'clip-neg') {
            if (hudBadgeTxt) hudBadgeTxt.textContent = '✂️ Negative Clipper (ตัดซีกลบ)';
            if (cktTitle) cktTitle.textContent = '2. วงจร Negative Clipper';
            if (cktSub) cktSub.textContent = 'ไดโอดหงายขึ้น ตัดยอดลบต่ำกว่า −0.7V ทิ้งลงกราวด์';
            if (voutTitle) voutTitle.textContent = '3. สัญญาณเอาต์พุต (Negative Clipper)';
            if (voutSub) voutSub.textContent = 'ยอดลบถูกขลิบติดที่ −0.7V | ซีกบวกผ่านปกติ';
            if (refLine) { refLine.setAttribute('y1', '167'); refLine.setAttribute('y2', '167'); refLine.style.display = 'block'; }
            if (refLabel) { refLabel.textContent = 'Vclip = −0.7V'; refLabel.setAttribute('y', '178'); refLabel.style.display = 'block'; }
        } else if (m === 'clip-bias') {
            if (hudBadgeTxt) hudBadgeTxt.textContent = '🔋 Biased Clipper (ตัดที่ระดับ +3.7V)';
            if (cktTitle) cktTitle.textContent = '2. วงจร Biased Clipper (+3V Ref)';
            if (cktSub) cktSub.textContent = 'ไดโอดอนุกรมกับแบตเตอรี่อ้างอิง 3V (ตัดที่ 3V + 0.7V = 3.7V)';
            if (voutTitle) voutTitle.textContent = '3. สัญญาณเอาต์พุต (Biased Clipper)';
            if (voutSub) voutSub.textContent = 'ขลิบที่ระดับแม่นยำ +3.7V ตามแหล่งจ่ายอ้างอิง';
            if (refLine) { refLine.setAttribute('y1', '145'); refLine.setAttribute('y2', '145'); refLine.style.display = 'block'; }
            if (refLabel) { refLabel.textContent = 'Vclip = +3.7V'; refLabel.setAttribute('y', '141'); refLabel.style.display = 'block'; }
        } else if (m === 'clamp-pos') {
            if (hudBadgeTxt) hudBadgeTxt.textContent = '🔼 Positive Clamper (ยกระดับสัญญาณขึ้น)';
            if (cktTitle) cktTitle.textContent = '2. วงจร Positive Clamper';
            if (cktSub) cktSub.textContent = 'Capacitor C ชาร์จประจุจนเต็มในซีกลบ ➔ ยกสัญญาณทั้งคลื่นขึ้น';
            if (voutTitle) voutTitle.textContent = '3. สัญญาณเอาต์พุต (Positive Clamped)';
            if (voutSub) voutSub.textContent = 'ฐานต่ำสุดแตะ 0V | ยอดพุ่งสูงสุดแตะ +20V (2Vm)';
            if (refLine) { refLine.setAttribute('y1', '163'); refLine.setAttribute('y2', '163'); refLine.style.display = 'block'; }
            if (refLabel) { refLabel.textContent = '0V Baseline Floor'; refLabel.setAttribute('y', '160'); refLabel.style.display = 'block'; }
        } else if (m === 'clamp-neg') {
            if (hudBadgeTxt) hudBadgeTxt.textContent = '🔽 Negative Clamper (กดระดับสัญญาณลง)';
            if (cktTitle) cktTitle.textContent = '2. วงจร Negative Clamper';
            if (cktSub) cktSub.textContent = 'Capacitor C ชาร์จประจุจนเต็มในซีกบวก ➔ กดสัญญาณทั้งคลื่นลง';
            if (voutTitle) voutTitle.textContent = '3. สัญญาณเอาต์พุต (Negative Clamped)';
            if (voutSub) voutSub.textContent = 'ยอดสูงสุดแตะ 0V | ฐานจมลึกสุดแตะ −20V (−2Vm)';
            if (refLine) { refLine.setAttribute('y1', '163'); refLine.setAttribute('y2', '163'); refLine.style.display = 'block'; }
            if (refLabel) { refLabel.textContent = '0V Baseline Ceiling'; refLabel.setAttribute('y', '160'); refLabel.style.display = 'block'; }
        }

        renderFrame(phase);
    }

    btnPosClip.onclick = () => setMode('clip-pos');
    btnNegClip.onclick = () => setMode('clip-neg');
    btnBiasClip.onclick = () => setMode('clip-bias');
    btnPosClamp.onclick = () => setMode('clamp-pos');
    btnNegClamp.onclick = () => setMode('clamp-neg');

    btnPlayPause.onclick = () => {
        isPlaying = !isPlaying;
        btnPlayPause.innerText = isPlaying ? '⏸ พักภาพ' : '▶ เล่นต่อ';
    };

    btnStepPos.onclick = () => {
        isPlaying = false;
        btnPlayPause.innerText = '▶ เล่นต่อ';
        phase = Math.PI / 2;
        renderFrame(phase);
    };

    btnStepNeg.onclick = () => {
        isPlaying = false;
        btnPlayPause.innerText = '▶ เล่นต่อ';
        phase = (3 * Math.PI) / 2;
        renderFrame(phase);
    };

    btnSpeed.onclick = () => {
        if (speed === 1.0) {
            speed = 0.35;
            btnSpeed.innerText = '⏱️ สโลว์: 0.35x';
        } else {
            speed = 1.0;
            btnSpeed.innerText = '⚡ สปีด: 1x';
        }
    };

    function renderFrame(curPhase) {
        const sinVal = Math.sin(curPhase);
        const vinV = sinVal * 10.0;
        const phaseRatio = (curPhase % (4 * Math.PI)) / (4 * Math.PI);

        const scanX_in = 32 + phaseRatio * 170;
        const scanY_in = 163 - sinVal * 58;

        if (vinScanLine) { vinScanLine.setAttribute('x1', scanX_in); vinScanLine.setAttribute('x2', scanX_in); }
        if (vinScanDot) { vinScanDot.setAttribute('cx', scanX_in); vinScanDot.setAttribute('cy', scanY_in); }

        let voutV = 0;
        let scanY_out = 163;
        let isDiodeOn = false;

        if (mode === 'clip-pos') {
            if (vinV > 0.7) {
                voutV = 0.7;
                scanY_out = 159;
                isDiodeOn = true;
            } else {
                voutV = vinV;
                scanY_out = 163 - (vinV / 10.0) * 58;
                isDiodeOn = false;
            }
        } else if (mode === 'clip-neg') {
            if (vinV < -0.7) {
                voutV = -0.7;
                scanY_out = 167;
                isDiodeOn = true;
            } else {
                voutV = vinV;
                scanY_out = 163 - (vinV / 10.0) * 58;
                isDiodeOn = false;
            }
        } else if (mode === 'clip-bias') {
            const vClip = 3.7;
            if (vinV > vClip) {
                voutV = vClip;
                scanY_out = 145;
                isDiodeOn = true;
            } else {
                voutV = vinV;
                scanY_out = 163 - (vinV / 10.0) * 58;
                isDiodeOn = false;
            }
        } else if (mode === 'clamp-pos') {
            voutV = vinV + 10.0;
            scanY_out = (163 - (vinV / 10.0) * 58) - 45;
            isDiodeOn = (vinV <= -9.3);
        } else if (mode === 'clamp-neg') {
            voutV = vinV - 10.0;
            scanY_out = (163 - (vinV / 10.0) * 58) + 45;
            isDiodeOn = (vinV >= 9.3);
        }

        const scanX_out = 615 + phaseRatio * 170;
        if (voutScanLine) { voutScanLine.setAttribute('x1', scanX_out); voutScanLine.setAttribute('x2', scanX_out); }
        if (voutScanDot) {
            voutScanDot.setAttribute('cx', scanX_out);
            voutScanDot.setAttribute('cy', scanY_out);
            voutScanDot.setAttribute('fill', isDiodeOn ? '#f59e0b' : '#4ade80');
        }

        if (liveVin) liveVin.textContent = `Vin = ${vinV >= 0 ? '+' : ''}${vinV.toFixed(1)} V`;
        if (liveVout) liveVout.textContent = `Vout = ${voutV >= 0 ? '+' : ''}${voutV.toFixed(1)} V`;
        if (liveState) {
            liveState.textContent = isDiodeOn ? 'D: ON (ชอร์ตนำกระแส)' : 'D: OFF (เปิดวงจร)';
            liveState.setAttribute('fill', isDiodeOn ? '#fbbf24' : '#64748b');
        }

        if (dStateBadge) {
            dStateBadge.textContent = isDiodeOn ? 'D: ON' : 'D: OFF';
            dStateBadge.setAttribute('fill', isDiodeOn ? '#4ade80' : '#64748b');
        }
        if (diodeTri && diodeBar) {
            diodeTri.setAttribute('fill', isDiodeOn ? '#10b981' : '#334155');
            diodeTri.setAttribute('stroke', isDiodeOn ? '#34d399' : '#64748b');
            diodeBar.setAttribute('stroke', isDiodeOn ? '#34d399' : '#64748b');
        }
        if (currentFlow) {
            currentFlow.style.opacity = isDiodeOn ? '1' : '0';
            currentFlow.style.strokeDashoffset = (-(curPhase * 20)).toString();
        }

        if (explAccent) explAccent.setAttribute('fill', isDiodeOn ? '#f59e0b' : '#10b981');
        if (mode === 'clip-pos') {
            if (isDiodeOn) {
                if (explTitle) explTitle.textContent = '⚡ จังหวะยอดซีกบวก (Vin > 0.7V) : ไดโอดไบแอสตรง นำกระแส (ON)';
                if (explLine1) explLine1.textContent = 'ไดโอดเสมือน Short Circuit ชอร์ตแรงดันส่วนเกินลงกราวด์ ➔ Vout ถูกจำกัดคงที่ที่ +0.7V ทันที';
                if (explLine2) explLine2.textContent = 'แรงดันส่วนเกิน (Vin − 0.7V) จะตกคร่อมตัวต้านทาน R แทน เพื่อป้องกันไม่ให้ไดโอดเสียหาย';
            } else {
                if (explTitle) explTitle.textContent = '⚡ จังหวะ Vin < 0.7V และซีกลบ : ไดโอดไบแอสกลับ (OFF)';
                if (explLine1) explLine1.textContent = 'ไดโอดเสมือน Open Circuit ไม่มีกระแสไหลผ่าน R (VR = 0) ➔ สัญญาณผ่านออกสู่ Vout โดยไม่ถูกตัด';
                if (explLine2) explLine2.textContent = 'ผลลัพธ์: คลื่นซีกบวกถูกตัดยอดทิ้ง แต่คลื่นซีกลบส่งผ่านได้ 100% เต็มลูก';
            }
        } else if (mode === 'clip-neg') {
            if (isDiodeOn) {
                if (explTitle) explTitle.textContent = '⚡ จังหวะยอดซีกลบ (Vin < −0.7V) : ไดโอดนำกระแส (ON)';
                if (explLine1) explLine1.textContent = 'ไดโอดหงายขั้วขึ้น ได้รับ Forward Bias ในซีกลบ ➔ ตัดแรงดันซีกลบไม่ให้ต่ำกว่า −0.7V';
                if (explLine2) explLine2.textContent = 'แรงดันส่วนเกินที่ต่ำกว่า −0.7V จะตกคร่อมตัวต้านทาน R';
            } else {
                if (explTitle) explTitle.textContent = '⚡ จังหวะซีกบวก : ไดโอดปิดกั้น (OFF)';
                if (explLine1) explLine1.textContent = 'ไดโอดได้รับ Reverse Bias ➔ สัญญาณซีกบวกทั้งหมดผ่านไปยังเอาต์พุตได้ตามปกติ (Vout = Vin)';
                if (explLine2) explLine2.textContent = 'ผลลัพธ์: คลื่นซีกลบถูกตัดทิ้ง แต่คลื่นซีกบวกส่งผ่านได้สมบูรณ์';
            }
        } else if (mode === 'clip-bias') {
            if (isDiodeOn) {
                if (explTitle) explTitle.textContent = '⚡ จังหวะ Vin > 3.7V : ไดโอดและแบตเตอรี่อ้างอิงนำกระแส (ON)';
                if (explLine1) explLine1.textContent = 'แรงดันอินพุตชนะทั้งแบตเตอรี่ 3V และแรงดันตกไดโอด 0.7V ➔ Vout ถูกขลิบที่ 3.0V + 0.7V = +3.7V';
                if (explLine2) explLine2.textContent = 'วงจรนี้นิยมใช้ตั้งค่าระดับแรงดันตัดที่แม่นยำ (Reference Clipping Level)';
            } else {
                if (explTitle) explTitle.textContent = '⚡ จังหวะ Vin < 3.7V : ไดโอดเปิดวงจร (OFF)';
                if (explLine1) explLine1.textContent = 'แรงดันไม่พอเปิดไดโอด ➔ สัญญาณทั้งหมดผ่านไปยังเอาต์พุต Vout = Vin';
                if (explLine2) explLine2.textContent = 'รูปคลื่นส่วนล่างยังคงสภาพเดิมทุกประการ';
            }
        } else if (mode === 'clamp-pos') {
            if (isDiodeOn) {
                if (explTitle) explTitle.textContent = '⚡ จังหวะยอดซีกลบ : ไดโอดนำกระแส ชาร์จประจุเข้า Capacitor C';
                if (explLine1) explLine1.textContent = 'Capacitor ถูกชาร์จจนมีแรงดันคงที่ VC = Vm = 10V (ขั้วบวกอยู่ฝั่งขวา)';
                if (explLine2) explLine2.textContent = 'จากนั้นตัวเก็บประจุจะทำหน้าที่เสมือนแบตเตอรี่ไฟตรง 10V ต่ออนุกรมกับสัญญาณอินพุตตลอดเวลา';
            } else {
                if (explTitle) explTitle.textContent = '⚡ วงจรทำงานปกติ : สัญญาณถูกยกขึ้นทั้งลูก (Shift Up)';
                if (explLine1) explLine1.textContent = 'Vout = Vin + VC = Vin + 10V ➔ ฐานต่ำสุดแตะที่ 0V และยอดสูงสุดพุ่งขึ้นเป็น +20V (2Vm)';
                if (explLine2) explLine2.textContent = 'Peak-to-Peak ยังคงเท่าเดิม 20V ไม่ถูกตัดยอดคลื่นเลยแม้แต่น้อย';
            }
        } else if (mode === 'clamp-neg') {
            if (isDiodeOn) {
                if (explTitle) explTitle.textContent = '⚡ จังหวะยอดซีกบวก : ไดโอดนำกระแส ชาร์จประจุเข้า Capacitor C';
                if (explLine1) explLine1.textContent = 'Capacitor ถูกชาร์จจนมีแรงดันคงที่ VC = Vm = 10V (ขั้วลบอยู่ฝั่งขวา)';
                if (explLine2) explLine2.textContent = 'จากนั้นตัวเก็บประจุทำหน้าที่เสมือนแบตเตอรี่อนุกรมกดสัญญาณลง 10V ตลอดเวลา';
            } else {
                if (explTitle) explTitle.textContent = '⚡ วงจรทำงานปกติ : สัญญาณถูกกดลงทั้งลูก (Shift Down)';
                if (explLine1) explLine1.textContent = 'Vout = Vin − VC = Vin − 10V ➔ ยอดสูงสุดแตะที่ 0V และฐานต่ำสุดจมลึกเป็น −20V (−2Vm)';
                if (explLine2) explLine2.textContent = 'Peak-to-Peak ยังคงเท่าเดิม 20V รูปคลื่นไม่บิดเบี้ยว';
            }
        }
    }

    function animate() {
        if (isPlaying) {
            phase = (phase + 0.038 * speed) % (4 * Math.PI);
            renderFrame(phase);
        }
        animId = requestAnimationFrame(animate);
    }

    setMode('clip-pos');
    animId = requestAnimationFrame(animate);

    window.activeSim = {
        stop: () => {
            if (animId) cancelAnimationFrame(animId);
        }
    };
}

function initZenerSimulator(controlsContainer) {
    let vinLevel = 12.0;
    let hasRipple = true;
    let rlValue = 500; // 250, 500, 1000, or Infinity
    let isPlaying = true;
    let phase = 0;
    let animId = null;

    // Elements
    const badgeBox = document.getElementById('zener-badge-box');
    const badgeTxt = document.getElementById('zener-badge-txt');
    const hudVin = document.getElementById('zener-hud-vin');
    const hudVrs = document.getElementById('zener-hud-vrs');
    const hudIz = document.getElementById('zener-hud-iz');
    const hudIl = document.getElementById('zener-hud-il');
    const hudVout = document.getElementById('zener-hud-vout');

    const srcVal = document.getElementById('zener-src-val');
    const vrsTxt = document.getElementById('zener-vrs-txt');
    const prsTxt = document.getElementById('zener-prs-txt');
    const zenerIzTxt = document.getElementById('zener-iz-txt');
    const zenerTri = document.getElementById('zener-tri');
    const rlTxt = document.getElementById('zener-rl-txt');
    const ilTxt = document.getElementById('zener-il-txt');
    const voutTxt = document.getElementById('zener-vout-txt');

    const flowIs = document.getElementById('zener-flow-is');
    const flowIz = document.getElementById('zener-flow-iz');
    const flowIl = document.getElementById('zener-flow-il');

    const traceVin = document.getElementById('zener-trace-vin');
    const traceVout = document.getElementById('zener-trace-vout');
    const scanLine = document.getElementById('zener-scan-line');
    const dotVin = document.getElementById('zener-dot-vin');
    const dotVout = document.getElementById('zener-dot-vout');
    const scopeSub = document.getElementById('zener-scope-sub');

    const explAccent = document.getElementById('zener-expl-accent');
    const explTitle = document.getElementById('zener-expl-title');
    const explLine1 = document.getElementById('zener-expl-line1');
    const explLine2 = document.getElementById('zener-expl-line2');
    const explLine3 = document.getElementById('zener-expl-line3');

    // Controls
    controlsContainer.innerHTML = '';

    const btnV4 = document.createElement('button');
    btnV4.className = 'btn-control';
    btnV4.innerText = '4.0 V (< Vz)';

    const btnV9 = document.createElement('button');
    btnV9.className = 'btn-control';
    btnV9.innerText = '9.0 V';

    const btnV12 = document.createElement('button');
    btnV12.className = 'btn-control active';
    btnV12.innerText = '12.0 V (แนะนำ)';

    const btnV16 = document.createElement('button');
    btnV16.className = 'btn-control';
    btnV16.innerText = '16.0 V (แรงดันสูง)';

    const btnRipple = document.createElement('button');
    btnRipple.className = 'btn-control active';
    btnRipple.innerText = '〰️ AC Ripple: เปิด';

    const btnRl = document.createElement('button');
    btnRl.className = 'btn-control';
    btnRl.innerText = 'โหลด RL: 500 Ω';

    const btnPlayPause = document.createElement('button');
    btnPlayPause.className = 'btn-control';
    btnPlayPause.innerText = '⏸ พักภาพ';

    controlsContainer.appendChild(btnV4);
    controlsContainer.appendChild(btnV9);
    controlsContainer.appendChild(btnV12);
    controlsContainer.appendChild(btnV16);
    controlsContainer.appendChild(btnRipple);
    controlsContainer.appendChild(btnRl);
    controlsContainer.appendChild(btnPlayPause);

    function setVin(v) {
        vinLevel = v;
        btnV4.classList.toggle('active', v === 4.0);
        btnV9.classList.toggle('active', v === 9.0);
        btnV12.classList.toggle('active', v === 12.0);
        btnV16.classList.toggle('active', v === 16.0);
        updateCalculations(phase);
    }

    btnV4.onclick = () => setVin(4.0);
    btnV9.onclick = () => setVin(9.0);
    btnV12.onclick = () => setVin(12.0);
    btnV16.onclick = () => setVin(16.0);

    btnRipple.onclick = () => {
        hasRipple = !hasRipple;
        btnRipple.classList.toggle('active', hasRipple);
        btnRipple.innerText = hasRipple ? '〰️ AC Ripple: เปิด' : '⚡ DC เรียบ: เปิด';
        updateCalculations(phase);
    };

    btnRl.onclick = () => {
        if (rlValue === 500) {
            rlValue = 250;
            btnRl.innerText = 'โหลด RL: 250 Ω (ดึงกระแสมาก)';
        } else if (rlValue === 250) {
            rlValue = 1000;
            btnRl.innerText = 'โหลด RL: 1 kΩ (ดึงกระแสน้อย)';
        } else if (rlValue === 1000) {
            rlValue = Infinity;
            btnRl.innerText = 'โหลด RL: Open (ไม่ต่อโหลด)';
        } else {
            rlValue = 500;
            btnRl.innerText = 'โหลด RL: 500 Ω';
        }
        updateCalculations(phase);
    };

    btnPlayPause.onclick = () => {
        isPlaying = !isPlaying;
        btnPlayPause.innerText = isPlaying ? '⏸ พักภาพ' : '▶ เล่นต่อ';
    };

    function updateCalculations(curPhase) {
        const vz = 5.1;
        const rs = 220;
        const rippleAmp = hasRipple ? 1.5 : 0.0;
        const instantVin = vinLevel + Math.sin(curPhase * 2) * rippleAmp;

        let vout = 0;
        let isRegulated = false;
        let vrs = 0;
        let is_mA = 0;
        let il_mA = 0;
        let iz_mA = 0;

        if (instantVin > vz) {
            isRegulated = true;
            vout = vz;
            vrs = instantVin - vout;
            is_mA = (vrs / rs) * 1000;
            il_mA = rlValue === Infinity ? 0 : (vout / rlValue) * 1000;
            iz_mA = Math.max(0, is_mA - il_mA);
        } else {
            isRegulated = false;
            if (rlValue === Infinity) {
                vout = instantVin;
                vrs = 0;
                is_mA = 0;
                il_mA = 0;
                iz_mA = 0;
            } else {
                vout = instantVin * (rlValue / (rs + rlValue));
                vrs = instantVin - vout;
                is_mA = (vrs / rs) * 1000;
                il_mA = is_mA;
                iz_mA = 0;
            }
        }

        const prs_W = (vrs * vrs) / rs;

        if (hudVin) hudVin.textContent = `Vin = ${instantVin.toFixed(1)} V`;
        if (hudVrs) hudVrs.textContent = `VRs = ${vrs.toFixed(1)} V`;
        if (hudIz) hudIz.textContent = `Iz = ${iz_mA.toFixed(1)} mA`;
        if (hudIl) hudIl.textContent = `IL = ${il_mA.toFixed(1)} mA`;
        if (hudVout) {
            hudVout.textContent = `${vout.toFixed(2)} V`;
            hudVout.setAttribute('fill', isRegulated ? '#4ade80' : '#f87171');
        }

        if (badgeBox && badgeTxt) {
            if (isRegulated) {
                badgeBox.setAttribute('fill', 'rgba(16, 185, 129, 0.18)');
                badgeBox.setAttribute('stroke', '#10b981');
                badgeTxt.textContent = `🟢 ควบคุมคงที่: Vout = ${vz.toFixed(2)} V`;
                badgeTxt.setAttribute('fill', '#4ade80');
            } else {
                badgeBox.setAttribute('fill', 'rgba(239, 68, 68, 0.18)');
                badgeBox.setAttribute('stroke', '#ef4444');
                badgeTxt.textContent = '⚠️ ไม่ควบคุม! (Vin < Vz)';
                badgeTxt.setAttribute('fill', '#f87171');
            }
        }

        if (srcVal) srcVal.textContent = `${instantVin.toFixed(1)}V`;
        if (vrsTxt) vrsTxt.textContent = `VRs = ${vrs.toFixed(1)} V`;
        if (prsTxt) prsTxt.textContent = `${prs_W.toFixed(2)} W`;
        if (zenerIzTxt) zenerIzTxt.textContent = `Iz = ${iz_mA.toFixed(1)} mA`;
        if (rlTxt) rlTxt.textContent = rlValue === Infinity ? 'RL = Open (∞)' : `RL = ${rlValue} Ω`;
        if (ilTxt) ilTxt.textContent = `IL = ${il_mA.toFixed(1)} mA`;
        if (voutTxt) {
            voutTxt.textContent = `Vout = ${vout.toFixed(2)} V`;
            voutTxt.setAttribute('fill', isRegulated ? '#4ade80' : '#f87171');
        }

        if (zenerTri) {
            zenerTri.setAttribute('fill', isRegulated ? '#06b6d4' : '#334155');
            zenerTri.setAttribute('stroke', isRegulated ? '#38bdf8' : '#64748b');
        }

        const dashOffset = (-(curPhase * 25)).toString();
        if (flowIs) {
            flowIs.style.opacity = is_mA > 0 ? '1' : '0';
            flowIs.style.strokeDashoffset = dashOffset;
        }
        if (flowIz) {
            flowIz.style.opacity = iz_mA > 0 ? '1' : '0';
            flowIz.style.strokeDashoffset = dashOffset;
        }
        if (flowIl) {
            flowIl.style.opacity = il_mA > 0 ? '1' : '0';
            flowIl.style.strokeDashoffset = dashOffset;
        }

        const phaseRatio = (curPhase % (4 * Math.PI)) / (4 * Math.PI);
        const scanX = 535 + phaseRatio * 255;

        const y_vin = 215 - instantVin * 10.2;
        const y_vout = 215 - vout * 10.2;

        if (scanLine) { scanLine.setAttribute('x1', scanX); scanLine.setAttribute('x2', scanX); }
        if (dotVin) { dotVin.setAttribute('cx', scanX); dotVin.setAttribute('cy', y_vin); }
        if (dotVout) {
            dotVout.setAttribute('cx', scanX);
            dotVout.setAttribute('cy', y_vout);
            dotVout.setAttribute('fill', isRegulated ? '#4ade80' : '#f87171');
        }

        if (hasRipple) {
            if (traceVin) {
                const base = 215 - vinLevel * 10.2;
                traceVin.setAttribute('d', `M 535 ${base} C 560 ${base - 15}, 580 ${base + 15}, 605 ${base} C 630 ${base - 15}, 650 ${base + 15}, 675 ${base} C 700 ${base - 15}, 720 ${base + 15}, 745 ${base} C 765 ${base - 15}, 780 ${base + 10}, 790 ${base}`);
            }
            if (scopeSub) scopeSub.textContent = isRegulated ? 'Vin มีระลอกกระเพื่อม ➔ แต่ Vout คงที่ 5.1V สมบูรณ์' : 'Vin ต่ำเกินไป ➔ ซีเนอร์ไม่นำกระแส Vout ตก';
        } else {
            if (traceVin) {
                const base = 215 - vinLevel * 10.2;
                traceVin.setAttribute('d', `M 535 ${base} L 790 ${base}`);
            }
            if (scopeSub) scopeSub.textContent = isRegulated ? `Vin = ${vinLevel}V นิ่ง ➔ Vout = 5.10 V คงที่สมบูรณ์` : 'Vin ต่ำกว่า 5.1V ➔ ซีเนอร์ไม่ควบคุม';
        }

        if (traceVout) {
            const voutY = 215 - vout * 10.2;
            traceVout.setAttribute('d', `M 535 ${voutY} L 790 ${voutY}`);
            traceVout.setAttribute('stroke', isRegulated ? '#4ade80' : '#f87171');
        }

        if (explAccent) explAccent.setAttribute('fill', isRegulated ? '#10b981' : '#f87171');
        if (isRegulated) {
            if (explTitle) explTitle.textContent = '⚡ สถานะ: ควบคุมแรงดันคงที่สมบูรณ์ (Zener Breakdown Mode)';
            if (explLine1) explLine1.textContent = `Vin (${instantVin.toFixed(1)}V) > Vz (5.1V) ➔ ซีเนอร์ล็อกแรงดันเอาต์พุตไว้ที่ 5.10 V เสมอ`;
            if (explLine2) explLine2.textContent = `แรงดันส่วนเกิน (${vrs.toFixed(1)}V) ถูกผลักไปตกคร่อมตัวต้านทาน Rs (ใช้กำลังไฟ ${prs_W.toFixed(2)}W) โดยซีเนอร์ดูดซับกระแส Iz = ${iz_mA.toFixed(1)} mA`;
            if (explLine3) explLine3.textContent = `กฎกระแสเคอร์ชอฟฟ์: Is (${is_mA.toFixed(1)} mA) = Iz (${iz_mA.toFixed(1)} mA) + IL (${il_mA.toFixed(1)} mA) | Vout = 5.10 V คงที่`;
        } else {
            if (explTitle) explTitle.textContent = '⚠️ สถานะ: แรงดันอินพุตต่ำกว่าแรงดันซีเนอร์ (Unregulated)';
            if (explLine1) explLine1.textContent = `Vin (${instantVin.toFixed(1)}V) < Vz (5.1V) ➔ ซีเนอร์ยังไม่ถึงจุด Breakdown จึงทำหน้าที่เสมือนเปิดวงจร (Iz = 0 mA)`;
            if (explLine2) explLine2.textContent = 'วงจรกลายเป็นตัวแบ่งแรงดันธรรมดา (Voltage Divider) ระหว่าง Rs และ RL';
            if (explLine3) explLine3.textContent = `แรงดันเอาต์พุต Vout ตกเหลือเพียง ${vout.toFixed(2)} V ไม่สามารถรักษาแรงดันคงที่ได้`;
        }
    }

    function animate() {
        if (isPlaying) {
            phase = (phase + 0.038) % (4 * Math.PI);
            updateCalculations(phase);
        }
        animId = requestAnimationFrame(animate);
    }

    setVin(12.0);
    animId = requestAnimationFrame(animate);

    window.activeSim = {
        stop: () => {
            if (animId) cancelAnimationFrame(animId);
        }
    };
}


