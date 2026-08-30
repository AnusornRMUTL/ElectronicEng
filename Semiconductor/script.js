const topics = {
    history: {
        title: 'ที่มาและความสำคัญของสารกึ่งตัวนำ',
        desc: `ก่อนยุคสารกึ่งตัวนำ อุปกรณ์อิเล็กทรอนิกส์ทั้งหมดต้องพึ่งพา "หลอดสุญญากาศ (Vacuum Tube)" ซึ่งมีขนาดใหญ่เท่ากำปั้น กินไฟมหาศาล ร้อนจัด และเสียง่าย — คอมพิวเตอร์เครื่องหนึ่งในยุคนั้น (ENIAC, 1946) ใช้หลอดสุญญากาศ 17,468 หลอด หนัก 27 ตัน กินไฟ 150 kW ใช้พื้นที่เท่าห้องเรียนทั้งห้อง!

ทุกอย่างเปลี่ยนไปในปี ค.ศ. 1947 เมื่อนักวิทยาศาสตร์ 3 คนจาก Bell Labs ค้นพบว่าผลึกเจอร์เมเนียม (สารกึ่งตัวนำ) สามารถขยายสัญญาณไฟฟ้าได้ — นี่คือจุดกำเนิดของ "ทรานซิสเตอร์ (Transistor)" ซึ่งทำงานเหมือนหลอดสุญญากาศ แต่เล็กกว่า เร็วกว่า ทนทานกว่า และกินไฟน้อยกว่าหลายเท่า

จากจุดเริ่มต้นเล็กๆ นั้น ในเวลาไม่ถึง 80 ปี มนุษย์พัฒนาเทคโนโลยีนี้จนสามารถบรรจุทรานซิสเตอร์มากกว่า 100,000 ล้านตัว ลงในชิปขนาดเท่าเล็บมือ — สร้างสมาร์ทโฟน, CPU, GPU และระบบปัญญาประดิษฐ์ (AI) ที่เปลี่ยนโฉมอารยธรรมมนุษย์ไปตลอดกาล`,
        extra: `
            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">🏆</span> <b style="font-size: 1.15rem;">ทำไม Semiconductor ถึง "เปลี่ยนโลก"?</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                สิ่งที่ทำให้สารกึ่งตัวนำพิเศษกว่าวัสดุอื่นคือ เราสามารถ <b>"ควบคุม"</b> การนำไฟฟ้าของมันได้อย่างแม่นยำ — ทำให้มันเป็นสวิตช์เปิด-ปิดขนาดจิ๋วที่ทำงานได้เร็วหลายพันล้านครั้งต่อวินาที นี่คือหัวใจของคอมพิวเตอร์ทุกเครื่อง
            </p>

            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">📐</span> <b style="font-size: 1.15rem;">กฎของมัวร์ (Moore's Law)</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                ในปี 1965 Gordon Moore ผู้ร่วมก่อตั้ง Intel ทำนายว่า <i>"จำนวนทรานซิสเตอร์บนชิปจะเพิ่มขึ้นเป็น 2 เท่า ทุกๆ 2 ปี"</i> — คำทำนายนี้เป็นจริงมาเกือบ 60 ปี!
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 0.75rem; font-size: 0.95rem;">
                <thead>
                    <tr style="background: rgba(139, 92, 246, 0.25);">
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">ปี</th>
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">เหตุการณ์สำคัญ</th>
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">จำนวนทรานซิสเตอร์</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600; color: #fbbf24;">1947</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">ทรานซิสเตอร์ตัวแรกของโลก (Bell Labs)</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">1 ตัว</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600; color: #fbbf24;">1958</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">วงจรรวม IC ตัวแรก (Jack Kilby)</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">~10 ตัว</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600; color: #fbbf24;">1971</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">CPU ตัวแรก — Intel 4004</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">2,300 ตัว</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600; color: #fbbf24;">2007</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">iPhone เครื่องแรก — ยุคสมาร์ทโฟน</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">~120 ล้านตัว</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600; color: #fbbf24;">2024</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">NVIDIA B200 (GPU สำหรับ AI)</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;"><b style="color: #4ade80;">208,000 ล้านตัว</b></td>
                    </tr>
                </tbody>
            </table>
            <p style="margin-top: 1rem; color: #94a3b8; font-size: 0.95rem;">
                📌 จาก 1 ตัว → 208,000 ล้านตัว ในเวลา 77 ปี — นี่คือการเติบโตแบบ Exponential ที่ไม่เคยเกิดขึ้นกับเทคโนโลยีใดในประวัติศาสตร์มนุษยชาติ
            </p>
            <p style="margin-top: 0.75rem; color: #c4b5fd; font-size: 0.95rem;">
                🤖 <b>ยุค AI ในปัจจุบัน</b> — ChatGPT, Gemini, Stable Diffusion ล้วนทำงานบน GPU ที่มีทรานซิสเตอร์นับแสนล้านตัว ซึ่งทั้งหมดนี้เริ่มต้นจากการค้นพบคุณสมบัติพิเศษของ "สารกึ่งตัวนำ" ชิ้นเล็กๆ ในห้องแล็บเมื่อปี 1947
            </p>`,
        controls: false,
        svg: `
            <!-- Timeline Title -->
            <text x="300" y="28" fill="#c4b5fd" font-size="15px" text-anchor="middle" font-weight="bold" font-family="sans-serif">เส้นเวลาแห่งการปฏิวัติ: จากทรานซิสเตอร์ตัวแรก สู่ยุค AI</text>

            <!-- Main Timeline Line -->
            <defs>
                <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#6d28d9"/>
                    <stop offset="50%" stop-color="#8b5cf6"/>
                    <stop offset="100%" stop-color="#c4b5fd"/>
                </linearGradient>
                <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Timeline backbone -->
            <line x1="60" y1="200" x2="540" y2="200" stroke="url(#timeline-grad)" stroke-width="4" stroke-linecap="round"/>

            <!-- Decorative pulses along timeline -->
            <circle cx="60" cy="200" r="6" fill="#6d28d9" opacity="0.3">
                <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="540" cy="200" r="6" fill="#c4b5fd" opacity="0.3">
                <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            <!-- ===== Node 1: 1947 — First Transistor ===== -->
            <g transform="translate(60, 200)">
                <!-- Connector line up -->
                <line x1="0" y1="0" x2="0" y2="-70" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 3"/>
                <!-- Node dot -->
                <circle cx="0" cy="0" r="10" fill="#1e293b" stroke="#fbbf24" stroke-width="3" filter="url(#node-glow)"/>
                <text x="0" y="4" fill="#fbbf24" font-size="9px" text-anchor="middle" font-weight="bold" font-family="sans-serif">1</text>
                <!-- Card above -->
                <rect x="-52" y="-140" width="104" height="65" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5" opacity="0.95"/>
                <text x="0" y="-118" fill="#fbbf24" font-size="14px" text-anchor="middle" font-weight="bold" font-family="sans-serif">1947</text>
                <text x="0" y="-102" fill="#e2e8f0" font-size="9px" text-anchor="middle" font-family="sans-serif">ทรานซิสเตอร์ตัวแรก</text>
                <text x="0" y="-89" fill="#94a3b8" font-size="8px" text-anchor="middle" font-family="sans-serif">Bell Labs 🔬</text>
            </g>

            <!-- ===== Node 2: 1958 — IC ===== -->
            <g transform="translate(180, 200)">
                <!-- Connector line down -->
                <line x1="0" y1="0" x2="0" y2="70" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4 3"/>
                <!-- Node dot -->
                <circle cx="0" cy="0" r="10" fill="#1e293b" stroke="#60a5fa" stroke-width="3" filter="url(#node-glow)"/>
                <text x="0" y="4" fill="#60a5fa" font-size="9px" text-anchor="middle" font-weight="bold" font-family="sans-serif">2</text>
                <!-- Card below -->
                <rect x="-52" y="75" width="104" height="65" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5" opacity="0.95"/>
                <text x="0" y="97" fill="#60a5fa" font-size="14px" text-anchor="middle" font-weight="bold" font-family="sans-serif">1958</text>
                <text x="0" y="113" fill="#e2e8f0" font-size="9px" text-anchor="middle" font-family="sans-serif">วงจรรวม IC ตัวแรก</text>
                <text x="0" y="126" fill="#94a3b8" font-size="8px" text-anchor="middle" font-family="sans-serif">Jack Kilby 🏅</text>
            </g>

            <!-- ===== Node 3: 1971 — First CPU ===== -->
            <g transform="translate(300, 200)">
                <!-- Connector line up -->
                <line x1="0" y1="0" x2="0" y2="-70" stroke="#4ade80" stroke-width="2" stroke-dasharray="4 3"/>
                <!-- Node dot -->
                <circle cx="0" cy="0" r="10" fill="#1e293b" stroke="#4ade80" stroke-width="3" filter="url(#node-glow)"/>
                <text x="0" y="4" fill="#4ade80" font-size="9px" text-anchor="middle" font-weight="bold" font-family="sans-serif">3</text>
                <!-- Card above -->
                <rect x="-52" y="-140" width="104" height="65" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5" opacity="0.95"/>
                <text x="0" y="-118" fill="#4ade80" font-size="14px" text-anchor="middle" font-weight="bold" font-family="sans-serif">1971</text>
                <text x="0" y="-102" fill="#e2e8f0" font-size="9px" text-anchor="middle" font-family="sans-serif">CPU ตัวแรก</text>
                <text x="0" y="-89" fill="#94a3b8" font-size="8px" text-anchor="middle" font-family="sans-serif">Intel 4004 💻</text>
            </g>

            <!-- ===== Node 4: 2007 — Smartphone ===== -->
            <g transform="translate(420, 200)">
                <!-- Connector line down -->
                <line x1="0" y1="0" x2="0" y2="70" stroke="#f472b6" stroke-width="2" stroke-dasharray="4 3"/>
                <!-- Node dot -->
                <circle cx="0" cy="0" r="10" fill="#1e293b" stroke="#f472b6" stroke-width="3" filter="url(#node-glow)"/>
                <text x="0" y="4" fill="#f472b6" font-size="9px" text-anchor="middle" font-weight="bold" font-family="sans-serif">4</text>
                <!-- Card below -->
                <rect x="-52" y="75" width="104" height="65" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="1.5" opacity="0.95"/>
                <text x="0" y="97" fill="#f472b6" font-size="14px" text-anchor="middle" font-weight="bold" font-family="sans-serif">2007</text>
                <text x="0" y="113" fill="#e2e8f0" font-size="9px" text-anchor="middle" font-family="sans-serif">ยุคสมาร์ทโฟน</text>
                <text x="0" y="126" fill="#94a3b8" font-size="8px" text-anchor="middle" font-family="sans-serif">iPhone 📱</text>
            </g>

            <!-- ===== Node 5: 2024 — AI Era ===== -->
            <g transform="translate(540, 200)">
                <!-- Connector line up -->
                <line x1="0" y1="0" x2="0" y2="-70" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4 3"/>
                <!-- Node dot with pulse -->
                <circle cx="0" cy="0" r="14" fill="#6d28d9" stroke="#c4b5fd" stroke-width="3" filter="url(#node-glow)"/>
                <circle cx="0" cy="0" r="14" fill="none" stroke="#c4b5fd" stroke-width="1" opacity="0.6">
                    <animate attributeName="r" values="14;24;14" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="0" y="5" fill="#ffffff" font-size="9px" text-anchor="middle" font-weight="bold" font-family="sans-serif">AI</text>
                <!-- Card above -->
                <rect x="-58" y="-145" width="116" height="70" rx="8" fill="rgba(109, 40, 217, 0.4)" stroke="#c4b5fd" stroke-width="2" opacity="0.95"/>
                <text x="0" y="-120" fill="#c4b5fd" font-size="15px" text-anchor="middle" font-weight="bold" font-family="sans-serif">2024</text>
                <text x="0" y="-103" fill="#ffffff" font-size="10px" text-anchor="middle" font-weight="bold" font-family="sans-serif">🤖 ยุค AI</text>
                <text x="0" y="-89" fill="#a5b4fc" font-size="8px" text-anchor="middle" font-family="sans-serif">208B transistors</text>
            </g>

            <!-- Bottom: Exponential Growth Arrow -->
            <g transform="translate(60, 350)">
                <!-- Exponential curve -->
                <path d="M 0,30 Q 120,28 240,20 Q 360,5 480,-30" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6 3" opacity="0.6"/>
                <!-- Arrow head -->
                <polygon points="478,-32 488,-28 480,-22" fill="#8b5cf6" opacity="0.6"/>
                <text x="240" y="50" fill="#94a3b8" font-size="10px" text-anchor="middle" font-family="sans-serif">📈 จำนวนทรานซิสเตอร์เพิ่มขึ้นแบบ Exponential (กฎของมัวร์)</text>
            </g>

            <!-- Top corner label -->
            <text x="300" y="395" fill="#475569" font-size="9px" text-anchor="middle" font-family="sans-serif">จาก 1 ตัว → 208,000,000,000 ตัว  ·  ในเวลาเพียง 77 ปี</text>
        `
    },
    intro: {
        title: 'โครงสร้างอะตอมและตารางธาตุ',
        desc: `สารกึ่งตัวนำ (Semiconductor) เป็นหัวใจสำคัญของอุปกรณ์อิเล็กทรอนิกส์ทุกชนิดในปัจจุบัน ตั้งแต่สมาร์ทโฟน คอมพิวเตอร์ ไปจนถึงรถยนต์ไฟฟ้า

สารกึ่งตัวนำที่นิยมใช้มากที่สุดคือ "ซิลิกอน (Silicon — Si)" ซึ่งเป็นธาตุในหมู่ IV ของตารางธาตุ มีเวเลนซ์อิเล็กตรอน (Valence Electrons — อิเล็กตรอนวงนอกสุด) จำนวน 4 ตัว ซึ่งเป็นจำนวนที่พอดีสำหรับการสร้างพันธะโคเวเลนต์กับอะตอมข้างเคียง

ในตารางธาตุด้านล่าง สังเกตว่าธาตุหมู่ III (3 อิเล็กตรอน) และหมู่ V (5 อิเล็กตรอน) จะถูกนำมาใช้เป็น "สารเจือ (Dopant)" เพื่อเปลี่ยนคุณสมบัติการนำไฟฟ้าของซิลิกอน`,
        extra: `
            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">💡</span> <b style="font-size: 1.15rem;">สารกึ่งตัวนำคืออะไร?</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                คือวัสดุที่มีความสามารถในการนำไฟฟ้า <b>อยู่ระหว่างตัวนำและฉนวน</b> — ในสภาวะปกติ (อุณหภูมิต่ำ) จะ <u>ไม่นำไฟฟ้า</u> เหมือนฉนวน แต่เมื่อได้รับ <b>พลังงาน</b> เช่น ความร้อน แสงสว่าง หรือแรงดันไฟฟ้า อิเล็กตรอนจะหลุดจากพันธะโคเวเลนต์ กลายเป็นอิเล็กตรอนอิสระที่สามารถเคลื่อนที่และนำไฟฟ้าได้
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 0.75rem; font-size: 1rem;">
                <thead>
                    <tr style="background: rgba(139, 92, 246, 0.25);">
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">คุณสมบัติ</th>
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">🔴 ฉนวน (Insulator)</th>
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">🟡 สารกึ่งตัวนำ (Semiconductor)</th>
                        <th style="padding: 0.6rem; border: 1px solid #475569; text-align: center;">🟢 ตัวนำ (Conductor)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600;">ตัวอย่าง</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">พลาสติก, แก้ว, ยาง</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">ซิลิกอน (Si), เจอร์เมเนียม (Ge)</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">ทองแดง (Cu), เงิน (Ag)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600;">Band Gap</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;"> > 4 eV (กว้างมาก)</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">~0.7–1.1 eV (พอดี)</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">~0 eV (แทบไม่มี)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center; font-weight: 600;">การนำไฟฟ้า</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">ไม่นำไฟฟ้า</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">ควบคุมได้ด้วยการ Doping</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569; text-align: center;">นำไฟฟ้าได้ดีมาก</td>
                    </tr>
                </tbody>
            </table>
            <p style="margin-top: 1rem; color: #94a3b8; font-size: 0.95rem;">
                📌 <b>Band Gap</b> คือช่องว่างพลังงานระหว่าง Valence Band กับ Conduction Band — ยิ่งแคบ อิเล็กตรอนยิ่งหลุดง่าย → นำไฟฟ้าได้ดีขึ้น
            </p>`,
        controls: false,
        svg: `
            <!-- Title -->
            <text x="300" y="30" fill="#c4b5fd" font-size="16px" text-anchor="middle" font-weight="bold" font-family="sans-serif">ธาตุที่สำคัญในงานสารกึ่งตัวนำ (ตารางธาตุบางส่วน)</text>

            <!-- Conductivity Spectrum Bar -->
            <g transform="translate(50, 340)">
                <defs>
                    <linearGradient id="cond-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#ef4444"/>
                        <stop offset="50%" stop-color="#eab308"/>
                        <stop offset="100%" stop-color="#22c55e"/>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="500" height="12" rx="6" fill="url(#cond-grad)" opacity="0.8"/>
                <text x="0" y="30" fill="#f87171" font-size="11px" text-anchor="start" font-family="sans-serif">ฉนวน (Insulator)</text>
                <text x="250" y="30" fill="#eab308" font-size="11px" text-anchor="middle" font-weight="bold" font-family="sans-serif">▲ สารกึ่งตัวนำ (Semiconductor)</text>
                <text x="500" y="30" fill="#4ade80" font-size="11px" text-anchor="end" font-family="sans-serif">ตัวนำ (Conductor)</text>
                <text x="250" y="-8" fill="#94a3b8" font-size="10px" text-anchor="middle" font-family="sans-serif">ระดับความสามารถในการนำไฟฟ้า →</text>
            </g>

            <!-- Group III (Dopant P-Type) -->
            <g transform="translate(55, 50)">
                <rect x="0" y="0" width="130" height="270" rx="10" class="pt-group highlight-iii"/>
                <text x="65" y="28" class="pt-text" font-weight="bold" font-size="15px">หมู่ III</text>
                <text x="65" y="46" class="pt-sub" font-size="10px">เวเลนซ์ e⁻ = 3</text>
                <text x="65" y="62" fill="#f87171" font-size="9px" text-anchor="middle" font-family="sans-serif">ใช้เป็นสารเจือ P-Type</text>

                <rect x="10" y="76" width="110" height="55" fill="#334155" rx="6"/>
                <text x="30" y="94" fill="#f87171" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">B</text>
                <text x="30" y="109" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">5</text>
                <text x="85" y="96" class="pt-text" font-size="12px">Boron</text>
                <text x="85" y="112" class="pt-sub" font-size="10px">โบรอน</text>

                <rect x="10" y="140" width="110" height="55" fill="#334155" rx="6"/>
                <text x="30" y="158" fill="#f87171" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">Al</text>
                <text x="30" y="173" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">13</text>
                <text x="85" y="160" class="pt-text" font-size="12px">Aluminium</text>
                <text x="85" y="176" class="pt-sub" font-size="10px">อะลูมิเนียม</text>

                <rect x="10" y="204" width="110" height="55" fill="#334155" rx="6"/>
                <text x="30" y="222" fill="#f87171" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">Ga</text>
                <text x="30" y="237" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">31</text>
                <text x="85" y="224" class="pt-text" font-size="12px">Gallium</text>
                <text x="85" y="240" class="pt-sub" font-size="10px">แกลเลียม</text>
            </g>

            <!-- Group IV (Semiconductor) -->
            <g transform="translate(210, 42)">
                <rect x="0" y="0" width="160" height="286" rx="10" class="pt-group highlight-iv"/>
                <text x="80" y="28" class="pt-text" font-weight="bold" font-size="15px">หมู่ IV</text>
                <text x="80" y="46" class="pt-sub" font-size="10px">เวเลนซ์ e⁻ = 4</text>
                <text x="80" y="62" fill="#60a5fa" font-size="9px" text-anchor="middle" font-weight="bold" font-family="sans-serif">★ กลุ่มสารกึ่งตัวนำ</text>

                <!-- Silicon - Highlighted -->
                <rect x="15" y="76" width="130" height="65" fill="url(#atom-grad)" rx="6" filter="url(#glow)"/>
                <text x="40" y="100" fill="white" font-size="24px" font-weight="bold" text-anchor="middle" font-family="sans-serif">Si</text>
                <text x="40" y="118" fill="#93c5fd" font-size="9px" text-anchor="middle" font-family="sans-serif">14</text>
                <text x="105" y="100" class="pt-text" font-size="13px" font-weight="bold">Silicon</text>
                <text x="105" y="118" class="pt-text" font-size="11px">ซิลิกอน</text>
                <!-- Star indicator -->
                <text x="140" y="80" fill="#fbbf24" font-size="12px" text-anchor="middle">⭐</text>

                <!-- Germanium -->
                <rect x="15" y="150" width="130" height="55" fill="#334155" rx="6"/>
                <text x="40" y="172" fill="#60a5fa" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">Ge</text>
                <text x="40" y="187" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">32</text>
                <text x="105" y="174" class="pt-text" font-size="12px">Germanium</text>
                <text x="105" y="190" class="pt-sub" font-size="10px">เจอร์เมเนียม</text>

                <!-- Carbon -->
                <rect x="15" y="214" width="130" height="55" fill="#334155" rx="6"/>
                <text x="40" y="236" fill="#60a5fa" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">C</text>
                <text x="40" y="251" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">6</text>
                <text x="105" y="238" class="pt-text" font-size="12px">Carbon</text>
                <text x="105" y="254" class="pt-sub" font-size="10px">คาร์บอน</text>
            </g>

            <!-- Group V (Dopant N-Type) -->
            <g transform="translate(395, 50)">
                <rect x="0" y="0" width="150" height="270" rx="10" class="pt-group highlight-v"/>
                <text x="75" y="28" class="pt-text" font-weight="bold" font-size="15px">หมู่ V</text>
                <text x="75" y="46" class="pt-sub" font-size="10px">เวเลนซ์ e⁻ = 5</text>
                <text x="75" y="62" fill="#4ade80" font-size="9px" text-anchor="middle" font-family="sans-serif">ใช้เป็นสารเจือ N-Type</text>

                <rect x="10" y="76" width="130" height="55" fill="#334155" rx="6"/>
                <text x="35" y="94" fill="#4ade80" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">P</text>
                <text x="35" y="109" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">15</text>
                <text x="95" y="96" class="pt-text" font-size="12px">Phosphorus</text>
                <text x="95" y="112" class="pt-sub" font-size="10px">ฟอสฟอรัส</text>

                <rect x="10" y="140" width="130" height="55" fill="#334155" rx="6"/>
                <text x="35" y="158" fill="#4ade80" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">As</text>
                <text x="35" y="173" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">33</text>
                <text x="95" y="160" class="pt-text" font-size="12px">Arsenic</text>
                <text x="95" y="176" class="pt-sub" font-size="10px">สารหนู</text>

                <rect x="10" y="204" width="130" height="55" fill="#334155" rx="6"/>
                <text x="35" y="222" fill="#4ade80" font-size="20px" font-weight="bold" text-anchor="middle" font-family="sans-serif">Sb</text>
                <text x="35" y="237" fill="#94a3b8" font-size="9px" text-anchor="middle" font-family="sans-serif">51</text>
                <text x="95" y="224" class="pt-text" font-size="12px">Antimony</text>
                <text x="95" y="240" class="pt-sub" font-size="10px">พลวง</text>
            </g>

            <!-- Arrows connecting groups to center -->
            <line x1="185" y1="195" x2="210" y2="195" stroke="#f87171" stroke-width="2" stroke-dasharray="4 3" opacity="0.6"/>
            <line x1="370" y1="195" x2="395" y2="195" stroke="#4ade80" stroke-width="2" stroke-dasharray="4 3" opacity="0.6"/>
        `
    },
    silicon: {
        title: 'โครงสร้างอะตอมซิลิกอน (Silicon Atom)',
        desc: `ซิลิกอน (Si) มีเลขอะตอม 14 หมายความว่ามีอิเล็กตรอนทั้งหมด 14 ตัว จัดเรียงตัวในวงโคจร 3 ชั้น คือ 2, 8, 4 ตามลำดับ

อิเล็กตรอน 4 ตัวในวงโคจรชั้นนอกสุด (Valence Shell) เรียกว่า "เวเลนซ์อิเล็กตรอน" ซึ่งเป็นส่วนที่สำคัญที่สุด เพราะทำหน้าที่สร้างพันธะทางเคมีกับอะตอมข้างเคียง 

ในธรรมชาติ ซิลิกอนจะพยายามทำให้วงโคจรนอกสุดของมันเสถียร (มีอิเล็กตรอนครบ 8 ตัวตามกฎออกเตต) โดยการจับมือแชร์อิเล็กตรอนกับอะตอมของซิลิกอนตัวอื่นๆ อีก 4 ตัว เกิดเป็นโครงสร้างผลึกที่แข็งแรงเรียกว่า "พันธะโคเวเลนต์ (Covalent Bond)"`,
        extra: `
            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">💡</span> <b style="font-size: 1.15rem;">ความสำคัญของพันธะโคเวเลนต์</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                เมื่ออะตอมซิลิกอนจับตัวกันเป็นผลึกบริสุทธิ์ (Intrinsic Semiconductor) อิเล็กตรอนทุกตัวจะถูกตรึงแน่นอยู่ในพันธะ ไม่มีอิเล็กตรอนอิสระเหลืออยู่เลย ดังนั้นที่อุณหภูมิห้อง <b>ซิลิกอนบริสุทธิ์จึงมีคุณสมบัติคล้ายฉนวน (Insulator)</b> ไม่ค่อยยอมให้กระแสไฟฟ้าไหลผ่าน
            </p>
            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">🔥</span> <b style="font-size: 1.15rem;">ผลของความร้อน</b>
            </div>
            <p style="line-height: 1.8;">
                หากเราเพิ่มอุณหภูมิ ความร้อนจะให้พลังงานแก่อิเล็กตรอน ทำให้บางตัวมีพลังงานมากพอที่จะหลุดออกจากพันธะกลายเป็นอิเล็กตรอนอิสระ (Free Electron) และทิ้งช่องว่างเรียกว่า "โฮล (Hole)" เอาไว้ ทำให้ซิลิกอนเริ่มนำไฟฟ้าได้บ้าง แต่นั่นก็ยังไม่เพียงพอต่อการใช้งานจริงในวงจรอิเล็กทรอนิกส์ จึงต้องมีการเติมสารเจือ (Doping)
            </p>
        `,
        controls: true,
        svg: `
            <g id="silicon-atom">
                <!-- Orbits -->
                <circle cx="300" cy="200" r="50" class="orbit-path" />
                <circle cx="300" cy="200" r="100" class="orbit-path" />
                <circle cx="300" cy="200" r="150" class="orbit-path" />
                
                <!-- Nucleus -->
                <circle cx="300" cy="200" r="25" fill="url(#atom-grad)" class="nucleus"/>
                <text x="300" y="200" class="nucleus-text">Si</text>
                <text x="300" y="235" fill="#60a5fa" font-size="12px" text-anchor="middle">+14</text>

                <!-- Shell 1 (2 electrons) -->
                <g class="spin-fast">
                    <circle cx="300" cy="150" r="5" class="electron" />
                    <circle cx="300" cy="250" r="5" class="electron" />
                </g>

                <!-- Shell 2 (8 electrons) -->
                <g class="spin-medium">
                    <circle cx="300" cy="100" r="5" class="electron" />
                    <circle cx="370" cy="130" r="5" class="electron" />
                    <circle cx="400" cy="200" r="5" class="electron" />
                    <circle cx="370" cy="270" r="5" class="electron" />
                    <circle cx="300" cy="300" r="5" class="electron" />
                    <circle cx="230" cy="270" r="5" class="electron" />
                    <circle cx="200" cy="200" r="5" class="electron" />
                    <circle cx="230" cy="130" r="5" class="electron" />
                </g>

                <!-- Shell 3 - Valence (4 electrons) -->
                <g class="spin-slow">
                    <circle cx="300" cy="50" r="6" class="electron" fill="#ef4444" />
                    <circle cx="450" cy="200" r="6" class="electron" fill="#ef4444" />
                    <circle cx="300" cy="350" r="6" class="electron" fill="#ef4444" />
                    <circle cx="150" cy="200" r="6" class="electron" fill="#ef4444" />
                </g>
                <text x="300" y="25" fill="#ef4444" font-size="14px" text-anchor="middle">Valence Electrons (4)</text>
            </g>
        `
    },
    ntype: {
        title: 'การโดปเป็นสารกึ่งตัวนำชนิด N (N-Type)',
        desc: `สารกึ่งตัวนำชนิด N สร้างขึ้นโดยกระบวนการ "โดปปิ้ง (Doping)" ซึ่งเป็นการเติมสิ่งเจือปนลงไปในซิลิกอนบริสุทธิ์ 

สำหรับชนิด N จะใช้การเติม <b>ธาตุหมู่ 5</b> (เช่น ฟอสฟอรัส P, สารหนู As, หรือพลวง Sb) ซึ่งมีเวเลนซ์อิเล็กตรอน 5 ตัว ลงไปในโครงสร้างผลึกซิลิกอน (ที่มีเวเลนซ์อิเล็กตรอน 4 ตัว)

เมื่ออะตอมของธาตุหมู่ 5 เข้าไปแทนที่ซิลิกอน อิเล็กตรอน 4 ตัวจะจับคู่กับซิลิกอนรอบๆ เกิดเป็นพันธะโคเวเลนต์ที่สมบูรณ์ <b>ส่งผลให้อิเล็กตรอนตัวที่ 5 ไม่มีคู่จับพันธะ</b> กลายเป็น "อิเล็กตรอนอิสระ (Free Electron)" ที่หลุดจากพันธะได้ง่ายมากแม้อยู่ในอุณหภูมิห้อง`,
        extra: `
            <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">💡</span> <b style="font-size: 1.15rem;">N ย่อมาจาก Negative (ประจุลบ)</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                การเติมธาตุหมู่ 5 จำนวนเล็กน้อย (เช่น 1 อะตอมต่อซิลิกอน 100 ล้านอะตอม) ก็เพียงพอที่จะสร้างอิเล็กตรอนอิสระจำนวนมหาศาล ทำให้การนำไฟฟ้าสูงขึ้นอย่างมาก 
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 0.75rem; font-size: 1rem;">
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(139, 92, 246, 0.1);">พาหะส่วนมาก (Majority Carrier)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;"><b>อิเล็กตรอน (Electron)</b> ซึ่งมีประจุไฟฟ้าเป็นลบ (-)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(139, 92, 246, 0.1);">พาหะส่วนน้อย (Minority Carrier)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;"><b>โฮล (Hole)</b> ซึ่งเกิดขึ้นเองตามธรรมชาติจากความร้อน</td>
                    </tr>
                    <tr>
                         <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(139, 92, 246, 0.1);">สารเจือ (Dopant Type)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;"><b>ผู้ให้ (Donor)</b> เพราะให้อิเล็กตรอนอิสระแก่ระบบ</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: false,
        svg: `
            <g transform="translate(150, 50)">
                <!-- Bonds -->
                <!-- Center to Top/Bottom/Left/Right -->
                <line x1="150" y1="150" x2="150" y2="50" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                <line x1="150" y1="150" x2="150" y2="250" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                <line x1="150" y1="150" x2="50" y2="150" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                <line x1="150" y1="150" x2="250" y2="150" stroke="#334155" stroke-width="8" stroke-linecap="round"/>

                <!-- Silicon Atoms (Surrounding) -->
                <circle cx="150" cy="50" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="150" y="50" class="nucleus-text">Si</text>
                
                <circle cx="150" cy="250" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="150" y="250" class="nucleus-text">Si</text>
                
                <circle cx="50" cy="150" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="50" y="150" class="nucleus-text">Si</text>
                
                <circle cx="250" cy="150" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="250" y="150" class="nucleus-text">Si</text>

                <!-- Center Dopant Atom (Phosphorus - Group 5) -->
                <circle cx="150" cy="150" r="26" fill="url(#dopant-n-grad)" class="nucleus"/>
                <text x="150" y="150" class="nucleus-text">P</text>
                <text x="150" y="195" fill="#4ade80" font-size="12px" text-anchor="middle">Phosphorus</text>

                <!-- Bound Electrons in Covalent Bonds -->
                <circle cx="135" cy="100" r="5" class="electron" />
                <circle cx="165" cy="100" r="5" class="electron" />
                
                <circle cx="135" cy="200" r="5" class="electron" />
                <circle cx="165" cy="200" r="5" class="electron" />
                
                <circle cx="100" cy="135" r="5" class="electron" />
                <circle cx="100" cy="165" r="5" class="electron" />
                
                <circle cx="200" cy="135" r="5" class="electron" />
                <circle cx="200" cy="165" r="5" class="electron" />

                <!-- 5th Free Electron (Animated) -->
                <circle cx="180" cy="110" r="6" fill="#fbbf24" class="free-electron" filter="url(#glow)"/>
                
                <text x="230" y="80" fill="#fbbf24" font-size="14px" font-weight="bold">Free Electron (e⁻)</text>
                <!-- Line pointing to free electron -->
                <path d="M 230 85 Q 200 85 190 100" fill="transparent" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2 2" marker-end="url(#arrow)"/>
            </g>
        `
    },
    ptype: {
        title: 'การโดปเป็นสารกึ่งตัวนำชนิด P (P-Type)',
        desc: `ในทางตรงกันข้าม สารกึ่งตัวนำชนิด P สร้างขึ้นโดยการเติม <b>ธาตุหมู่ 3</b> (เช่น โบรอน B, อะลูมิเนียม Al, หรือแกลเลียม Ga) ซึ่งมีเวเลนซ์อิเล็กตรอนเพียง 3 ตัว ลงไปในโครงสร้างผลึกซิลิกอน

เมื่ออะตอมธาตุหมู่ 3 เข้าไปสร้างพันธะกับซิลิกอน 4 ตัวรอบๆ มันจะมีอิเล็กตรอนไม่พอสำหรับสร้างพันธะที่ 4 ทำให้เกิด "ที่ว่าง" ขึ้นในโครงสร้างผลึก เราเรียกที่ว่างนี้ว่า <b>"โฮล (Hole)"</b>

โฮลนี้เปรียบเสมือน "ที่นั่งว่าง" ในโรงหนัง เมื่ออิเล็กตรอนตัวข้างเคียงได้รับพลังงานและกระโดดเข้ามานั่งแทนที่ มันก็จะทิ้งที่นั่งเก่าให้กลายเป็นโฮลใหม่ การสลับที่กันไปเรื่อยๆ นี้เอง ทำให้ดูเหมือนว่า "โฮล" สามารถเคลื่อนที่นำไฟฟ้าได้ ราวกับว่ามันมีประจุบวก`,
        extra: `
             <div style="margin-bottom: 1rem;">
                <span style="font-size: 1.3rem;">💡</span> <b style="font-size: 1.15rem;">P ย่อมาจาก Positive (ประจุบวก)</b>
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.8;">
                แม้จริงๆ แล้วสิ่งที่วิ่งคืออิเล็กตรอน แต่การมองว่า "โฮล" วิ่งสวนทางกับอิเล็กตรอน ทำให้วิเคราะห์วงจรได้ง่ายกว่ามาก โฮลจึงถือเป็นพาหะนำประจุไฟฟ้าที่มีค่าเทียบเท่ากับโปรตอน (ประจุบวก)
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 0.75rem; font-size: 1rem;">
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(139, 92, 246, 0.1);">พาหะส่วนมาก (Majority Carrier)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;"><b>โฮล (Hole)</b> ซึ่งมีสถานะเปรียบเสมือนประจุบวก (+)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(139, 92, 246, 0.1);">พาหะส่วนน้อย (Minority Carrier)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;"><b>อิเล็กตรอน (Electron)</b> ซึ่งเกิดขึ้นเองตามธรรมชาติจากความร้อน</td>
                    </tr>
                    <tr>
                         <td style="padding: 0.6rem; border: 1px solid #475569; width: 40%; font-weight: bold; background: rgba(139, 92, 246, 0.1);">สารเจือ (Dopant Type)</td>
                        <td style="padding: 0.6rem; border: 1px solid #475569;"><b>ผู้รับ (Acceptor)</b> เพราะโฮลพร้อมที่จะรับอิเล็กตรอนเข้ามา</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: true,
        svg: `
            <g transform="translate(150, 50)">
                <!-- Bonds -->
                <!-- Center to Top/Bottom/Left/Right -->
                <line x1="150" y1="150" x2="150" y2="50" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                <line x1="150" y1="150" x2="150" y2="250" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                <line x1="150" y1="150" x2="50" y2="150" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                <line x1="150" y1="150" x2="250" y2="150" stroke="#334155" stroke-width="8" stroke-linecap="round"/>

                <!-- Silicon Atoms (Surrounding) -->
                <circle cx="150" cy="50" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="150" y="50" class="nucleus-text">Si</text>
                
                <circle cx="150" cy="250" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="150" y="250" class="nucleus-text">Si</text>
                
                <circle cx="50" cy="150" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="50" y="150" class="nucleus-text">Si</text>
                
                <circle cx="250" cy="150" r="22" fill="url(#atom-grad)" class="nucleus"/>
                <text x="250" y="150" class="nucleus-text">Si</text>

                <!-- Center Dopant Atom (Boron - Group 3) -->
                <circle cx="150" cy="150" r="26" fill="url(#dopant-p-grad)" class="nucleus"/>
                <text x="150" y="150" class="nucleus-text">B</text>
                <text x="150" y="195" fill="#f87171" font-size="12px" text-anchor="middle">Boron</text>

                <!-- Bound Electrons -->
                <circle cx="135" cy="100" r="5" class="electron" />
                <circle cx="165" cy="100" r="5" class="electron" />
                
                <circle cx="135" cy="200" r="5" class="electron" />
                <circle cx="165" cy="200" r="5" class="electron" />
                
                <!-- Left Bond: 2 electrons -->
                <circle cx="100" cy="135" r="5" class="electron" />
                <circle cx="100" cy="165" r="5" class="electron" />
                
                <!-- Right Bond: 1 electron from Si, 1 Hole from B -->
                <circle cx="200" cy="165" r="5" class="electron" /> <!-- Si electron -->
                <!-- The Hole -->
                <circle cx="200" cy="135" r="5" class="hole" /> 
                <text x="240" y="110" fill="#ffffff" font-size="14px" font-weight="bold">Hole (h⁺)</text>
                <path d="M 240 115 Q 220 115 210 130" fill="transparent" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2"/>

                <!-- Animated Jumping Electron from Left Bond into the Hole -->
                <!-- Visualizing hole movement to the left -->
                <g class="jumping-electron-container" id="p-anim-group" style="display:none;">
                    <!-- Electron jumps right -->
                    <circle cx="100" cy="135" r="5" fill="#fbbf24" class="jumping-electron" filter="url(#glow)"/>
                    <!-- Hole appears left as electron leaves -->
                    <circle cx="100" cy="135" r="5" class="hole jumping-hole" />
                </g>
            </g>
        `
    },
    quiz: {
        title: '📝 คำถามท้ายบท (Quiz)',
        desc: 'ทดสอบความเข้าใจพื้นฐานเกี่ยวกับ Semiconductor',
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
        q: '1. วัสดุใดที่นิยมนำมาสร้างเป็นสารกึ่งตัวนำมากที่สุด?',
        choices: ['ก. ทองแดง (Copper)', 'ข. ซิลิกอน (Silicon)', 'ค. เจอร์เมเนียม (Germanium)', 'ง. คาร์บอน (Carbon)'],
        a: 1
    },
    {
        q: '2. สารกึ่งตัวนำชนิด N (N-Type) มีพาหะส่วนมาก (Majority Carrier) คืออะไร?',
        choices: ['ก. โฮล (Holes)', 'ข. โปรตอน (Protons)', 'ค. อิเล็กตรอน (Electrons)', 'ง. นิวตรอน (Neutrons)'],
        a: 2
    },
    {
        q: '3. การโดป (Doping) สารกึ่งตัวนำชนิด P (P-Type) ต้องใช้ธาตุเจือปนในหมู่ใด?',
        choices: ['ก. หมู่ 3 (เช่น โบรอน)', 'ข. หมู่ 4 (เช่น คาร์บอน)', 'ค. หมู่ 5 (เช่น ฟอสฟอรัส)', 'ง. หมู่ 6 (เช่น ออกซิเจน)'],
        a: 0
    }
];

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    let html = '';
    quizQuestions.forEach((item, index) => {
        html += `
            <div class="quiz-question" style="margin-bottom: 1.5rem;">
                <h3 style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--primary-light, #c4b5fd);">${item.q}</h3>
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

let currentTopic = 'history';

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    loadTopic('history');
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
    
    // Update Navigation Active State
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav-${topicKey}`).classList.add('active');

    // Update Text Content
    document.getElementById('topic-title').innerText = data.title;
    document.getElementById('topic-desc').innerHTML = data.desc.replace(/\n/g, '<br>');
    document.getElementById('topic-extra').innerHTML = data.extra;

    // Handle Quiz UI specific logic
    const simulatorCard = document.querySelector('.simulator-card');
    if (topicKey === 'quiz') {
        if(simulatorCard) simulatorCard.style.display = 'none';
        renderQuiz();
    } else {
        if(simulatorCard) simulatorCard.style.display = 'block';
    }

    // Update SVG
    document.getElementById('svg-container').innerHTML = data.svg;

    // Update Controls
    const controlsContainer = document.getElementById('sim-controls');
    controlsContainer.innerHTML = ''; // Clear previous

    if (topicKey === 'silicon') {
        const btnToggle = document.createElement('button');
        btnToggle.className = 'btn-control';
        btnToggle.innerText = 'หยุด/เล่น อนิเมชั่นวงโคจร';
        let isPlaying = true;
        btnToggle.onclick = () => {
            isPlaying = !isPlaying;
            const state = isPlaying ? 'running' : 'paused';
            document.querySelectorAll('.spin-slow, .spin-medium, .spin-fast').forEach(el => {
                el.style.animationPlayState = state;
            });
        };
        controlsContainer.appendChild(btnToggle);
    } else if (topicKey === 'ptype') {
        const btnTrigger = document.createElement('button');
        btnTrigger.className = 'btn-control';
        btnTrigger.innerText = 'จำลองการเคลื่อนที่ของ Hole';
        btnTrigger.onclick = () => {
            const animGroup = document.getElementById('p-anim-group');
            if (animGroup.style.display === 'none') {
                animGroup.style.display = 'block';
                btnTrigger.innerText = 'หยุดจำลอง';
            } else {
                animGroup.style.display = 'none';
                btnTrigger.innerText = 'จำลองการเคลื่อนที่ของ Hole';
            }
        };
        controlsContainer.appendChild(btnTrigger);
    } else if (!data.controls) {
        // Invisible placeholder to keep spacing if needed, or just let flexbox handle it
        controlsContainer.style.display = 'none';
    }

    if (data.controls) {
        controlsContainer.style.display = 'flex';
    }
}
