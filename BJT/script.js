/**
 * BJT Interactive Learning Module — ENGEE160 Electronics
 * Comprehensive Theory, IEEE/IEC Standard Schematics & Real-Time Animated Virtual Labs
 * Topics:
 * 1. structure: โครงสร้างทางกายภาพ ฟิสิกส์สารกึ่งตัวนำ และสัญลักษณ์ (NPN vs PNP)
 * 2. biasing: การไบแอสและจุดทำงาน (DC Load Line, Q-Point & Stability)
 * 3. operation: หลักการทำงานและ 4 ย่านการทำงาน (Active, Saturation, Cutoff, Reverse-Active)
 * 4. ce-amp: วงจรขยายแบบคอมมอนอิมิตเตอร์ (AC Small-Signal, Gain, Phase Inversion & Clipping)
 * 5. cb-cc: วงจรขยาย Common Base และ Common Collector (Emitter Follower & Loading Effect)
 * 6. switch: การประยุกต์ใช้เป็นสวิตช์ (Inductive Load, Flyback Diode & Darlington Pair)
 * 7. quiz: แบบทดสอบวัดผล 10 ข้อ จากคลัง 32 ข้อ พร้อมใบประกาศนียบัตร
 */

const topics = {
    'structure': {
        title: 'โครงสร้างทางกายภาพ ฟิสิกส์สารกึ่งตัวนำ และสัญลักษณ์ (NPN & PNP)',
        desc: `<b>ทรานซิสเตอร์แบบรอยต่อสองขั้ว (Bipolar Junction Transistor: BJT)</b> เป็นอุปกรณ์สารกึ่งตัวนำ 3 ขั้ว 3 ชั้น ประกอบด้วยรอยต่อ P-N จำนวน 2 รอยต่อชนกันแบบแซนด์วิช คำว่า <i>"Bipolar"</i> สื่อถึงการนำกระแสที่ต้องพึ่งพาพาหะไฟฟ้าทั้งสองชนิดร่วมกัน คือ <b>อิเล็กตรอนอิสระ (Free Electrons)</b> และ <b>โฮล (Holes)</b><br><br>
        <b>🔬 คุณลักษณะทางฟิสิกส์ของโครงสร้าง 3 ชั้นหลัก:</b><br>
        1. <b>Emitter (E - อิมิตเตอร์):</b> มีระดับการโดปสารเจือปนหนาแน่นที่สุดในอุปกรณ์ (<span class="math-badge">N_E^+ \\gg N_B</span>) เพื่อทำหน้าที่ <i>"ฉีด (Emit)"</i> พาหะข้างมากจำนวนมหาศาลข้ามรอยต่อเข้าสู่ชั้น Base ได้อย่างมีประสิทธิภาพสูงสุด<br>
        2. <b>Base (B - เบส):</b> มีความบางทางกายภาพอย่างยิ่ง (น้อยกว่า 1 ไมโครเมตร: <span class="math-badge">W_B \\ll L_n</span> โดย $L_n$ คือ Diffusion Length) และโดปสารเบาบางที่สุด (<span class="math-badge">N_B \\text{ ต่ำมาก}</span>) เพื่อลดโอกาสการรวมตัวกัน (Recombination) ของพาหะให้เหลือน้อยที่สุด (~1% - 2%) ทำให้พาหะเกือบทั้งหมดสามารถแพร่ทะลุผ่านไปยัง Collector ได้<br>
        3. <b>Collector (C - คอลเล็กเตอร์):</b> โดปสารระดับปานกลาง (<span class="math-badge">N_C < N_E</span>) แต่มีพื้นที่หน้าตัดทางกายภาพใหญ่ที่สุดเพื่อ <i>"รวบรวม (Collect)"</i> พาหะเกือบทั้งหมดและทำหน้าที่ระบายความร้อนที่เกิดจากกำลังไฟฟ้าสูญเสีย (<span class="math-badge">P_D = V_{CE} \\times I_C</span>)`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📐 ความสัมพันธ์ของกระแสและอัตราขยาย DC ใน BJT</h3>
            <p style="margin-bottom: 0.8rem; line-height: 1.85;">
                ตามกฎกระแสของเคอร์ชอฟฟ์ (Kirchhoff's Current Law: KCL) กระแสทั้งหมดที่ไหลผ่านทรานซิสเตอร์ต้องอนุรักษ์ประจุเสมอ:<br>
                <span class="math-block">I_E = I_B + I_C</span>
                เนื่องจากกระแสเบส $I_B$ มีขนาดเล็กมาก (เพียง ~1% - 2% ของ $I_E$) จึงประมาณการได้ว่า <span class="math-badge">I_C \\approx I_E</span>
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.2rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #38bdf8; padding: 0.9rem; border-radius: 6px;">
                    <b style="color: #38bdf8;">Alpha DC ($\\alpha_{dc}$ หรือ $h_{FB}$):</b><br>
                    อัตราส่วนระหว่างกระแส Collector ต่อกระแส Emitter:<br>
                    <span class="math-badge" style="margin-top: 0.4rem;">\\alpha_{dc} = \\frac{I_C}{I_E} = \\gamma \\times \\alpha_T</span><br>
                    โดย $\\gamma$ คือ Emitter Injection Efficiency และ $\\alpha_T$ คือ Base Transport Factor มีค่าปกติอยู่ในช่วง <b>0.980 ถึง 0.998</b>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #4ade80; padding: 0.9rem; border-radius: 6px;">
                    <b style="color: #4ade80;">Beta DC ($\\beta_{dc}$ หรือ $h_{FE}$):</b><br>
                    อัตราขยายกระแสไฟตรง (Common-Emitter Current Gain):<br>
                    <span class="math-badge" style="margin-top: 0.4rem;">\\beta_{dc} = \\frac{I_C}{I_B} = \\frac{\\alpha_{dc}}{1 - \\alpha_{dc}}</span><br>
                    มีค่าทั่วไปตั้งแต่ <b>50 ถึง 300+</b> (เช่น หาก $\\alpha = 0.99$ จะได้ $\\beta = \\frac{0.99}{1-0.99} = 99$)
                </div>
            </div>

            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔬 เปรียบเทียบโครงสร้าง NPN vs PNP</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.2rem;">
                <thead>
                    <tr style="background: rgba(139, 92, 246, 0.15);">
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: left;">คุณสมบัติทางวิศวกรรม</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">NPN Transistor</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">PNP Transistor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;"><b>การจัดเรียงชั้นสารกึ่งตัวนำ</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">N⁺ (E) — P (B) — N (C)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f43f5e; font-weight: bold;">P⁺ (E) — N (B) — P (C)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;"><b>พาหะหลักในการนำกระแส</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">อิเล็กตรอนอิสระ (Electron Mobility สูง)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">โฮล (Hole Mobility ต่ำกว่า 2.5-3 เท่า)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;"><b>สัญลักษณ์ลูกศรที่ขา Emitter</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">พุ่งออกจาก Base (Not Pointing iN)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #fbbf24; font-weight: bold;">พุ่งเข้าหา Base (Pointing iN)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;"><b>แรงดันและทิศทางกระแสปกติ</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">$V_{BE} \\approx +0.7\\text{V}$, $I_B, I_C$ ไหลเข้า, $I_E$ ไหลออก</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">$V_{EB} \\approx +0.7\\text{V}$, $I_E$ ไหลเข้า, $I_B, I_C$ ไหลออก</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;"><b>ความนิยมและเหตุผล</b></td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">นิยมสูงสุด (~90%) ตอบสนองความถี่สูง เร็วกว่า</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">ใช้จับคู่ในภาคขยายผลัก-ดึง (Push-Pull Stage)</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚠️ <b>คำถามยอดฮิตทางวิศวกรรม: ทำไมจึงสลับขา Emitter และ Collector ใช้งานแทนกันไม่ได้?</b><br>
                แม้ภายนอกจะเป็นสารชนิดเดียวกัน (N เหมือนกันใน NPN) แต่ภายในไม่สมมาตรกันโดยสิ้นเชิง:<br>
                1. <b>ความเข้มข้นของการโดปต่างกันมหาศาล:</b> $N_E^+$ โดปสูงมากเพื่อให้ฉีดพาหะได้มหาศาล ขณะที่ $N_C$ โดปต่ำกว่าเพื่อรองรับแรงดันสูง หากสลับขา ประสิทธิภาพการฉีด $\\gamma$ จะต่ำมาก ส่งผลให้ $\\beta_{rev}$ เหลือเพียง 1 ถึง 5 เท่านั้น<br>
                2. <b>แรงดันพังทลาย (Breakdown Voltage):</b> รอยต่อ B-E ถูกออกแบบให้ทนแรงดันไบแอสกลับได้ต่ำมาก ($BV_{EBO} \\approx 5\\text{V} - 7\\text{V}$) ในขณะที่รอยต่อ B-C ทนแรงดันได้สูงกว่ามาก ($BV_{CBO} \\approx 40\\text{V} - 100\\text{V}+$) หากต่อกลับด้าน ทรานซิสเตอร์อาจพังเสียหายทันทีเมื่อเจอแรงดันเกิน 5V
            </div>
        `,
        controls: true
    },
    'biasing': {
        title: 'การไบแอสและจุดทำงาน (DC Load Line & Q-Point Stability)',
        desc: `<b>การไบแอสไฟตรง (DC Biasing)</b> คือการกำหนดแรงดันและกระแสไฟตรงคงที่ในสภาวะสงบ (Quiescent State) ให้กับ BJT เพื่อสร้าง <b>จุดทำงาน Q-Point ($V_{CEQ}, I_{CQ}$)</b> บนกราฟคุณลักษณะเอาต์พุตให้อยู่ในย่าน Active อย่างมีเสถียรภาพ<br><br>
        <b>⚡ วงจร Voltage Divider Bias (Universal Bias):</b><br>
        เป็นโครงสร้างวงจรไบแอสที่นิยมสูงสุดในการออกแบบจริง เพราะช่วยแก้ปัญหาค่า $\\beta$ แปรปรวนตามอุณหภูมิและการเปลี่ยนเบอร์ทรานซิสเตอร์ได้อย่างสมบูรณ์แบบ:<br>
        • <b>Thevenin Equivalent Voltage:</b> <span class="math-badge">V_{TH} = V_{CC} \\times \\frac{R_2}{R_1 + R_2}</span><br>
        • <b>Thevenin Equivalent Resistance:</b> <span class="math-badge">R_{TH} = R_1 \\parallel R_2 = \\frac{R_1 \\times R_2}{R_1 + R_2}</span><br>
        • <b>สมการกระแสเบสจริง:</b> <span class="math-badge">I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + (\\beta + 1)R_E}</span><br>
        • <b>เกณฑ์เสถียรภาพสูงสุด (Rule of Thumb):</b> หากออกแบบให้ <span class="math-badge">\\beta R_E \\ge 10 R_2</span> จะทำให้ $I_{CQ} \\approx \\frac{V_{TH} - 0.7}{R_E}$ ซึ่งเป็นอิสระจากค่า $\\beta$ โดยสิ้นเชิง!`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 การวิเคราะห์เส้นโหลดไฟตรง (DC Load Line & Midpoint Bias)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.9;">
                จากสมการ KVL รอบลูปเอาต์พุต Collector-Emitter: <span class="math-block">V_{CC} = I_C R_C + V_{CE} + I_E R_E \\approx V_{CE} + I_C(R_C + R_E)</span>
                จัดรูปสมการเส้นตรง $I_C$ เทียบกับ $V_{CE}$ จะได้สมการเส้นโหลดไฟตรง (DC Load Line) ที่เชื่อมระหว่างจุดวิกฤต 2 จุด:<br>
                1. <b>จุดอิ่มตัว (Saturation Limit):</b> เมื่อ $V_{CE} = 0\\text{V}$ กระแสคอลเล็กเตอร์จะขึ้นไปสูงสุดที่ <span class="math-badge">I_{C(sat)} = \\frac{V_{CC}}{R_C + R_E}</span><br>
                2. <b>จุดคัตออฟ (Cutoff Limit):</b> เมื่อไม่มีกระแสเบส $I_B = 0 \\rightarrow I_C = 0\\text{A}$ แรงดันตกคร่อมจะสูงที่สุดคือ <span class="math-badge">V_{CE(cutoff)} = V_{CC}</span>
            </p>

            <div style="background: rgba(74, 222, 128, 0.08); border-left: 4px solid var(--green); padding: 1rem; border-radius: 4px; line-height: 1.85; margin-bottom: 1rem;">
                🎯 <b>Midpoint Biasing สำหรับวงจรขยายสัญญาณ AC:</b><br>
                เพื่อให้สัญญาณเอาต์พุตสามารถสวิงได้กว้างที่สุดทั้งซีกบวกและซีกลบ (Maximum Symmetrical Peak-to-Peak Dynamic Swing) โดยไม่ถูกตัดยอดคลื่น (Undistorted Swing) ผู้ออกแบบจะกำหนดจุดทำงาน Q-Point ให้อยู่กึ่งกลางของเส้นโหลดพอดี:<br>
                <span class="math-badge">V_{CEQ} \\approx \\frac{V_{CC}}{2}</span> และ <span class="math-badge">I_{CQ} \\approx \\frac{I_{C(sat)}}{2}</span>
            </div>

            <div style="background: rgba(139, 92, 246, 0.08); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                🌡️ <b>การป้องกันการพังทลายจากความร้อน (Thermal Runaway Prevention):</b><br>
                เมื่อทรานซิสเตอร์ร้อนขึ้น อุณหภูมิ $T \\uparrow$ ทำให้ $V_{BE}$ ลดลง (~$-2\\text{ mV/}^\\circ\\text{C}$) และ $\\beta \\uparrow$ ส่งผลให้กระแส $I_C \\uparrow$ หากไม่มีกลไกควบคุม ความร้อนจะยิ่งพุ่งสูงขึ้นเป็นวงจรอุบาทว์จนอุปกรณ์ไหม้ทะลุ (Thermal Runaway)<br>
                ตัวต้านทาน <b>$R_E$</b> จะทำหน้าที่ป้อนกลับเชิงลบ (Negative Feedback) ช่วยลดกระแสลงอัตโนมัติ: เมื่อ $I_E \\uparrow \\rightarrow V_E = I_E R_E \\uparrow \\rightarrow V_{BE} = V_B - V_E \\downarrow \\rightarrow I_B \\downarrow \\rightarrow I_C \\downarrow$ กลับสู่สมดุลทันที
            </div>
        `,
        controls: true
    },
    'operation': {
        title: 'หลักการทำงานและ 4 ย่านการทำงาน (4 Operation Modes & Physics)',
        desc: `ทรานซิสเตอร์ BJT มี <b>รอยต่อ P-N จำนวน 2 รอยต่อ</b> คือ Base-Emitter Junction ($J_E$) และ Base-Collector Junction ($J_C$) ทิศทางและขนาดของแรงดันไบแอสภายนอกที่ป้อนให้แก่ทั้งสองรอยต่อจะเป็นตัวกำหนด <b>4 ย่านการทำงาน (Operating Regions)</b> ตามหลักฟิสิกส์สารกึ่งตัวนำ:<br><br>
        1. <b>Forward-Active Mode (ย่านขยายเชิงเส้น):</b> $J_E$ ไบแอสตรง (Forward: $V_{BE} \\approx 0.7\\text{V}$) และ $J_C$ ไบแอสกลับ (Reverse: $V_{BC} \\le 0\\text{V}$) ➔ ใช้งานเป็น <b>วงจรขยายสัญญาณ (Linear Amplifier)</b> โดย <span class="math-badge">I_C = \\beta I_B</span><br>
        2. <b>Saturation Mode (ย่านอิ่มตัว):</b> ทั้ง $J_E$ และ $J_C$ ได้รับไบแอสตรงทั้งคู่ ➔ ใช้งานเป็น <b>สวิตช์ปิด (Closed Switch / ON)</b> แรงดันตกคร่อมลดลงต่ำสุดเหลือเพียง <span class="math-badge">V_{CE(sat)} \\approx 0.1 - 0.2\\text{V}</span><br>
        3. <b>Cutoff Mode (ย่านตัดขาด):</b> ทั้ง $J_E$ และ $J_C$ ได้รับไบแอสกลับทั้งคู่ (หรือ $V_{BE} < 0.5\\text{V}$) ➔ ใช้งานเป็น <b>สวิตช์เปิด (Open Switch / OFF)</b> ไม่มีกระแสไหล <span class="math-badge">I_C \\approx 0\\text{A}, V_{CE} = V_{CC}</span><br>
        4. <b>Reverse-Active Mode (ย่านขยายย้อนกลับ):</b> $J_E$ ไบแอสกลับ และ $J_C$ ไบแอสตรง ➔ ขั้ว Collector กลายเป็นตัวฉีดพาหะ และ Emitter ทำหน้าที่รับ อัตราขยายกระแสต่ำมาก (<span class="math-badge">\\beta_R \\approx 0.1 - 2</span>) พบในวงจรลอจิก TTL ดิจิทัล`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔬 ฟิสิกส์การเคลื่อนที่ของประจุและ Early Effect (Base-Width Modulation)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>กลไกในย่าน Forward-Active:</b> แรงดันไบแอสตรงที่รอยต่อ B-E จะลดกำแพงศักย์ลง ทำให้อิเล็กตรอนมหาศาลจาก Emitter ฉีดเข้าสู่ชั้น Base เมื่อเข้ามาแล้ว เนื่องจาก Base บางมาก อิเล็กตรอนส่วนใหญ่จึงแพร่กระจายไปถึงขอบรอยต่อ B-C ซึ่งได้รับไบแอสกลับ ที่จุดนี้จะมี <i>สนามไฟฟ้าแรงสูง (Strong Electric Field)</i> คอยกวาดดึงดูดอิเล็กตรอนเหล่านี้เข้าสู่ Collector ทันที<br>
                • <b>Early Effect (James M. Early, 1952):</b> เมื่อเราเพิ่มแรงดัน $V_{CE}$ ให้สูงขึ้น รอยต่อ B-C จะยิ่งได้รับไบแอสกลับมากขึ้น ส่งผลให้บริเวณปลอดพาหะ (Depletion Region) ขยายตัวรุกล้ำเข้าไปในชั้น Base ทำให้ความกว้างจริงของ Base แคบลง เรียกว่า <i>Base-Width Modulation</i> อิเล็กตรอนจึงรวมตัวกันน้อยลงไปอีก ทำให้กระแส $I_C$ เพิ่มขึ้นเล็กน้อย เกิดเป็นความชันบนกราฟคุณลักษณะ โดยเส้นกราฟทั้งหมดเมื่อลากย้อนกลับจะไปตัดแกน $V_{CE}$ ติดลบที่จุดแรงดัน <b>Early Voltage ($V_A \\approx 50\\text{V} - 100\\text{V}$)</b> ก่อให้เกิดความต้านทานเอาต์พุตจำกัด <span class="math-badge">r_o = \\frac{V_A + V_{CE}}{I_C}</span>
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
                <thead>
                    <tr style="background: rgba(139, 92, 246, 0.15);">
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">ย่านการทำงาน</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">รอยต่อ B-E ($J_E$)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">รอยต่อ B-C ($J_C$)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">สภาวะ $V_{CE}$ และกระแส</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: left;">การประยุกต์ใช้งาน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">Forward-Active</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward ($V_{BE} \\approx 0.7\\text{V}$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse ($V_{BC} \\le 0$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">$V_{CE} > 0.3\\text{V},\\ I_C = \\beta I_B$</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">วงจรขยายสัญญาณเสียง/วิทยุอนาล็อก</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">Saturation</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward ($V_{BE} \\approx 0.8\\text{V}$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward ($V_{BC} \\approx 0.6\\text{V}$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">$V_{CE(sat)} \\approx 0.1 - 0.2\\text{V},\\ I_C < \\beta I_B$</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">สวิตช์ปิด (Switch ON / Logic '0')</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #fbbf24; font-weight: bold;">Cutoff</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse ($V_{BE} < 0.5\\text{V}$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse ($V_{BC} \\le 0$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">$V_{CE} = V_{CC},\\ I_C \\approx 0\\text{A}$</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">สวิตช์เปิด (Switch OFF / Logic '1')</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #c084fc; font-weight: bold;">Reverse-Active</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse ($V_{BE} \\le 0$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward ($V_{BC} \\approx 0.7\\text{V}$)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">กระแสไหลย้อนกลับ, $\\beta_R < 2$</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">วงจรลอจิก TTL, สวิตช์สองทิศทางอนาล็อก</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: true
    },
    'ce-amp': {
        title: 'วงจรขยาย Common Emitter และการกลับเฟส 180° (CE Amplifier)',
        desc: `<b>วงจรขยายแบบคอมมอนอิมิตเตอร์ (Common Emitter: CE)</b> เป็นโครงแบบวงจรขยายสัญญาณที่ใช้งานแพร่หลายที่สุด เนื่องจากให้ทั้ง <b>อัตราขยายแรงดัน (Voltage Gain: $A_v$)</b> และ <b>อัตราขยายกระแส (Current Gain: $A_i$)</b> สูง ส่งผลให้อัตราขยายกำลังไฟฟ้า ($A_p = A_v \\times A_i$) สูงที่สุดในบรรดาทุกโครงแบบ<br><br>
        <b>คุณสมบัติเอกลักษณ์สำคัญ: สัญญาณเอาต์พุตกลับเฟส 180° (Phase Inversion)</b><br>
        เมื่อสัญญาณอินพุต $v_{in}$ ป้อนเข้ามาในซีกบวก ➔ แรงดัน $v_{be}$ เพิ่มขึ้น ➔ กระแสเบส $i_b$ และกระแสคอลเล็กเตอร์ $i_c$ พุ่งสูงขึ้น ➔ แรงดันตกคร่อมตัวต้านทานโหลด $R_C$ เพิ่มขึ้น (<span class="math-badge">v_{RC} = i_c R_C</span>) ➔ แรงดันเอาต์พุตที่จุดคอลเล็กเตอร์ <span class="math-badge">v_{out} = V_{CC} - i_c R_C</span> จึงถูกดึงตกลงมาในทางตรงกันข้าม เกิดการกลับเฟส 180 องศา`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📐 การวิเคราะห์สัญญาณขนาดเล็ก (AC Small-Signal $r'_e$ Model)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>ความต้านทานไดนามิกของ Emitter Junction:</b> <span class="math-badge">r'_e = \\frac{V_T}{I_{EQ}} \\approx \\frac{26\\text{ mV}}{I_{CQ}}</span> (ที่อุณหภูมิห้อง 25°C)<br>
                • <b>อัตราขยายแรงดันเมื่อต่อตัวเก็บประจุบายพาส $C_E$ คร่อม $R_E$:</b><br>
                เนื่องจาก $C_E$ ลัดวงจรสัญญาณ AC ลงกราวด์ ทำให้มองเห็นความต้านทานที่ขา E เป็นเพียง $r'_e$:<br>
                <span class="math-block">A_v = - \\frac{R_C \\parallel R_L}{r'_e} \\quad (\\text{มีค่าสูงมาก ~100 ถึง 300+})</span>
                • <b>อัตราขยายเมื่อไม่มี $C_E$ หรือแบ่งความต้านทาน (Swamped Amplifier):</b><br>
                <span class="math-block">A_v = - \\frac{R_C \\parallel R_L}{R_E + r'_e} \\approx - \\frac{R_C}{R_E}</span>
                (แม้ว่าอัตราขยายจะลดลง แต่จะมีเสถียรภาพสูงมาก ไม่แปรปรวนตามอุณหภูมิ และลดความเพี้ยนฮาร์โมนิกได้อย่างยอดเยี่ยม)<br>
                • <b>อิมพีแดนซ์อินพุตและเอาต์พุต:</b> <span class="math-badge">Z_{in} = R_1 \\parallel R_2 \\parallel [\\beta(r'_e + R_E)]</span> และ <span class="math-badge">Z_{out} \\approx R_C</span>
            </p>

            <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚠️ <b>ปรากฏการณ์ตัดยอดคลื่น (Clipping Distortion):</b><br>
                หากสัญญาณอินพุตมีแอมพลิจูดสูงเกินไป หรือจุด Q-Point ไม่ได้อยู่กึ่งกลางเส้นโหลด จะเกิดการชนขอบของรูปคลื่น:<br>
                1. <b>Saturation Clipping:</b> เมื่อสัญญาณขับดันให้ $V_{CE}$ ลดต่ำลงจนถึง $V_{CE(sat)} \\approx 0.2\\text{V}$ ยอดคลื่นซีกเอาต์พุตด้านล่างจะถูกตัดเรียบแบน<br>
                2. <b>Cutoff Clipping:</b> เมื่อสัญญาณดึงให้ $I_C = 0\\text{A}$ แรงดันเอาต์พุตจะวิ่งขึ้นไปแตะ $V_{CC}$ และยอดคลื่นซีกบนจะถูกตัดเรียบแบน
            </div>
        `,
        controls: true
    },
    'cb-cc': {
        title: 'วงจรขยาย Common Base & Common Collector (Emitter Follower)',
        desc: `นอกจากคอมมอนอิมิตเตอร์ (CE) แล้ว BJT ยังสามารถจัดวงจรได้อีก 2 โครงแบบ โดยเลือกขาที่ใช้เป็นจุดกราวด์ร่วมสำหรับสัญญาณ AC:<br><br>
        1. <b>Common Collector (CC หรือ Emitter Follower):</b><br>
        ป้อนอินพุตเข้าที่ Base และดึงเอาต์พุตออกที่ขา Emitter สัญญาณเอาต์พุตจะ <i>"เกาะติด (Follow)"</i> สัญญาณอินพุตโดย <b>เฟสตรงกัน (0°)</b> มีอัตราขยายแรงดัน <span class="math-badge">A_v \\approx 1</span> (ต่ำกว่า 1 เล็กน้อย ~0.99) แต่มีอัตราขยายกระแสสูงมาก จุดเด่นที่สุดคือ <b>ความต้านทานอินพุตสูงมาก ($Z_{in}$)</b> และ <b>ความต้านทานเอาต์พุตต่ำมาก ($Z_{out}$)</b> นิยมใช้เป็น <b>วงจรบัฟเฟอร์ (Buffer)</b> และป้องกันการสูญเสียสัญญาณจากการโหลด (Loading Effect)<br><br>
        2. <b>Common Base (CB):</b><br>
        ป้อนอินพุตเข้าที่ Emitter และดึงเอาต์พุตออกที่ Collector มีอัตราขยายกระแส <span class="math-badge">A_i \\approx \\alpha < 1</span> แต่มีอัตราขยายแรงดันสูง สัญญาณ <b>เฟสตรงกัน (0°)</b> และเนื่องจากขา Base ต่อลงกราวด์ จึงทำหน้าที่เป็นฉนวนกั้นตัด <i>Miller Capacitance</i> ออกไป ทำให้ตอบสนองความถี่สูงระดับวิทยุ (RF / UHF) ได้อย่างยอดเยี่ยม`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📊 ตารางเปรียบเทียบมาตรฐานเชิงลึก 3 โครงแบบ BJT (CE, CC, CB)</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.2rem;">
                <thead>
                    <tr style="background: rgba(139, 92, 246, 0.15);">
                        <th style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: left;">พารามิเตอร์ทางวิศวกรรม</th>
                        <th style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">Common Emitter (CE)</th>
                        <th style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">Common Collector (CC)</th>
                        <th style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">Common Base (CB)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>ขาอินพุต / ขาเอาต์พุต</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">Input: B / Output: C</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">Input: B / Output: E</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">Input: E / Output: C</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>อัตราขยายแรงดัน ($A_v$)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">สูง (~100 - 300)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #fbbf24;">$\\approx 1\\ (A_v < 1)$</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">สูง (~100 - 300)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>อัตราขยายกระแส ($A_i$)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">สูง ($\\beta \\approx 100$)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">สูงที่สุด ($\\beta + 1$)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #f87171;">ต่ำกว่า 1 ($\\alpha \\approx 0.99$)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>อัตราขยายกำลัง ($A_p$)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">สูงที่สุด (Very High)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8;">ปานกลาง (Medium)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8;">ปานกลาง (Medium)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>ความต้านทานอินพุต ($Z_{in}$)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">ปานกลาง (~1 - 5 kΩ)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">สูงมาก (~100 - 500 kΩ)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #f87171;">ต่ำมาก (~10 - 50 Ω)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>ความต้านทานเอาต์พุต ($Z_{out}$)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">ปานกลาง (~10 - 50 kΩ)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">ต่ำมาก (~10 - 50 Ω)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #f87171;">สูงมาก (~1 MΩ)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>การเลื่อนเฟสสัญญาณ</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #f43f5e; font-weight: bold;">กลับเฟส 180°</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">เฟสตรงกัน (0°)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">เฟสตรงกัน (0°)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>การประยุกต์ใช้งานเด่น</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">ขยายสัญญาณเสียง/ทั่วไป</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">บัฟเฟอร์ ขับลำโพง 4-8Ω</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">ขยายความถี่วิทยุ RF สูงสุด</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: true
    },
    'switch': {
        title: 'การประยุกต์ใช้ BJT เป็นสวิตช์อิเล็กทรอนิกส์ (BJT Switch & Protection)',
        desc: `ในวงจรอิเล็กทรอนิกส์ดิจิทัล การควบคุมอัตโนมัติ และระบบขับกำลัง BJT จะถูกควบคุมให้สลับการทำงานไปมาระหว่าง 2 สภาวะสุดขั้วเท่านั้น คือ <b>Cutoff (OFF)</b> และ <b>Hard Saturation (ON)</b> เพื่อลดกำลังงานสูญเสียในตัวอุปกรณ์ให้ต่ำที่สุด<br><br>
        <b>⚙️ กฎเกณฑ์การออกแบบให้ทรานซิสเตอร์อิ่มตัวลึก (Hard Saturation):</b><br>
        1. คำนวณกระแสคอลเล็กเตอร์เมื่ออิ่มตัว: <span class="math-badge">I_{C(sat)} = \\frac{V_{CC} - V_{CE(sat)}}{R_C} \\approx \\frac{V_{CC}}{R_C}</span><br>
        2. กำหนดกระแสเบสขั้นต่ำ: <span class="math-badge">I_{B(min)} = \\frac{I_{C(sat)}}{\\beta_{min}}</span><br>
        3. เพื่อรับประกันการอิ่มตัวลึก วิศวกรจะเผื่อค่า <b>Overdrive Factor ($ODF \\ge 2$ ถึง $5$)</b> หรือกำหนดให้ <span class="math-badge">\\beta_{forced} = 10 \\text{ ถึง } 20</span> ทำให้ได้ค่าความต้านทานที่ขาเบส:<br>
        <span class="math-block">R_B = \\frac{V_{in} - V_{BE(sat)}}{I_B} = \\frac{V_{in} - 0.8\\text{V}}{ODF \\times I_{B(min)}}</span>`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🛡️ อันตรายจากโหลดเหนี่ยวนำและบทบาทของ Flyback Diode</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                เมื่อใช้วงจรสวิตช์ขับโหลดที่มีขดลวดเหนี่ยวนำ เช่น <b>รีเลย์ (Relay Coil), มอเตอร์กระแสตรง หรือโซลินอยด์</b> ขณะที่ทรานซิสเตอร์นำกระแส สนามแม่เหล็กจะสะสมพลังงาน $E = \\frac{1}{2} L I^2$<br>
                เมื่อทรานซิสเตอร์ถูกสั่งตัดวงจรเป็น Cutoff ทันที กระแสจะพยายามลดลงเป็นศูนย์ในเวลาอันสั้น ($dt \\rightarrow 0$) สนามแม่เหล็กจะยุบตัวลงอย่างฉับพลัน ทำให้เกิดแรงดันเหนี่ยวนำย้อนกลับขนาดมหาศาล เรียกว่า <b>Back EMF Voltage Spike</b> ตามกฎของฟาราเดย์และเลนซ์:<br>
                <span class="math-block">v_L = - L \\frac{di}{dt}</span>
                แรงดันไฟพุ่งกระชากนี้อาจสูงถึง <b>หลายร้อยโวลต์</b> ขั้วบวกจะกลับทิศมาบวกทับเข้ากับ $V_{CC}$ ทะลุพิกัดพังทลาย $BV_{CEO}$ ส่งผลให้ทรานซิสเตอร์ช็อตไหม้ทะลุในเสี้ยววินาที!
            </p>

            <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; line-height: 1.85; margin-bottom: 1.2rem;">
                ⚠️ <b>วิธีป้องกันมาตรฐานอุตสาหกรรม:</b><br>
                ต้องต่อ <b>Flyback Diode (หรือ Freewheeling Diode)</b> ขนานย้อนกลับกับขดลวดเหนี่ยวนำเสมอ เมื่อทรานซิสเตอร์ตัดวงจร ไดโอดจะนำกระแสในทันที เปิดช่องทางให้กระแสเหนี่ยวนำไหลวน (Freewheel) อยู่ภายในลูป และคายพลังงานความร้อนสลายไปในความต้านทานของขดลวดอย่างปลอดภัย
            </div>

            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">⚡ การต่อแบบดาร์ลิงตัน (Darlington Pair Configuration)</h3>
            <p style="line-height: 1.85;">
                เมื่อต้องการขับโหลดที่กินกระแสสูง (เช่น มอเตอร์ 2A - 5A) โดยสั่งงานจากขาไมโครคอนโทรลเลอร์ (Arduino / ESP32) ที่จ่ายกระแสเบสได้จำกัดเพียง 5 - 10 mA เราจะนำทรานซิสเตอร์สองตัวมาต่อชนกันแบบดาร์ลิงตัน:<br>
                • <b>อัตราขยายกระแสรวมพุ่งสูงมหาศาล:</b> <span class="math-badge">\\beta_{total} \\approx \\beta_1 \\times \\beta_2</span> (เช่น $100 \\times 100 = 10,000$)<br>
                • <b>ข้อพึงระวัง:</b> แรงดันเริ่มเปิดจะเพิ่มเป็น <span class="math-badge">V_{BE(total)} \\approx 1.4\\text{V}</span> และแรงดันอิ่มตัวจะสูงขึ้นเป็น <span class="math-badge">V_{CE(sat)} \\approx 0.8\\text{V} - 1.0\\text{V}</span> ทำให้สูญเสียกำลังงานความร้อนในตัวทรานซิสเตอร์มากกว่าสวิตช์เดี่ยว
            </p>
        `,
        controls: true
    },
    'quiz': {
        title: '📝 แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ (Quiz & Certification)',
        desc: 'แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ เรื่อง ทรานซิสเตอร์แบบ BJT (สุ่ม 10 ข้อจากคลังข้อสอบ 32 ข้อ สลับตัวเลือกทุกข้อ พร้อมระบบออกใบประกาศนียบัตรดิจิทัลมาตรฐาน)',
        extra: `
            <div id="quiz-container" style="background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            </div>
        `,
        controls: false
    }
};

let currentTopic = 'structure';

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    loadTopic('structure');
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '<div class="sidebar-label">📚 หัวข้อบทเรียน BJT</div>';
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

    if (topicKey === 'structure') {
        initStructureSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'biasing') {
        initBiasingSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'operation') {
        initOperationSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'ce-amp') {
        initCEAmpSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'cb-cc') {
        initCBCCSimulator(canvasContainer, controlsContainer);
    } else if (topicKey === 'switch') {
        initSwitchSimulator(canvasContainer, controlsContainer);
    }
}

function renderQuiz() {
    if (typeof QuizEngine !== 'undefined' && typeof bjtQuizQuestions !== 'undefined') {
        QuizEngine.init({
            containerId: 'quiz-container',
            lessonTitle: 'ทรานซิสเตอร์แบบ BJT (Bipolar Junction Transistor)',
            questionBank: bjtQuizQuestions,
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
   HELPERS: IEEE 315 TRANSISTOR SYMBOL & ANIMATED CURRENT PULSE DOTS
   ========================================================================= */
/**
 * Draws an IEEE 315 standard BJT symbol.
 * pins === 'vertical' (default): Base at (-36, 0), Collector at (16, -38), Emitter at (16, 38)
 * pins === 'horizontal': Base at (-38, 0), Collector at (40, -26), Emitter at (40, 26)
 */
function drawIEEETransistor(x, y, type = 'NPN', angle = 0, scale = 1.0, options = {}) {
    const isNPN = type.toUpperCase() === 'NPN';
    const pins = options.pins || 'vertical';
    const showLabels = options.showLabels !== undefined ? options.showLabels : (pins === 'horizontal');
    const tag = options.tag || '';

    if (pins === 'horizontal') {
        return `
            <g transform="translate(${x}, ${y}) rotate(${angle}) scale(${scale})">
                <circle cx="0" cy="0" r="34" fill="rgba(139, 92, 246, 0.06)" stroke="#8b5cf6" stroke-width="2"/>
                <line x1="-14" y1="-20" x2="-14" y2="20" stroke="#f8fafc" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="-38" y1="0" x2="-14" y2="0" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="-14" y1="-10" x2="18" y2="-26" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="18" y1="-26" x2="40" y2="-26" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="-14" y1="10" x2="18" y2="26" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="18" y1="26" x2="40" y2="26" stroke="#cbd5e1" stroke-width="2.5"/>
                ${isNPN
                    ? `<polygon points="16,25 3,14 8,25" fill="#4ade80" stroke="#22c55e" stroke-width="0.6"/>`
                    : `<polygon points="-5,14 8,25 3,14" fill="#fbbf24" stroke="#f59e0b" stroke-width="0.6"/>`
                }
                <circle cx="-38" cy="0" r="3.2" fill="#a78bfa"/>
                <circle cx="40" cy="-26" r="3.2" fill="#38bdf8"/>
                <circle cx="40" cy="26" r="3.2" fill="#f43f5e"/>
                ${showLabels ? `
                    <text x="-48" y="4" fill="#a78bfa" font-size="12" font-weight="700" text-anchor="end">B</text>
                    <text x="48" y="-22" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="start">C</text>
                    <text x="48" y="30" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="start">E</text>
                ` : ''}
            </g>
        `;
    }

    // Vertical-collector / Vertical-emitter pins for clean circuit schematics
    return `
        <g transform="translate(${x}, ${y}) rotate(${angle}) scale(${scale})">
            <circle cx="0" cy="0" r="30" fill="rgba(139, 92, 246, 0.06)" stroke="#8b5cf6" stroke-width="1.8"/>
            <line x1="-12" y1="-18" x2="-12" y2="18" stroke="#f8fafc" stroke-width="4.2" stroke-linecap="round"/>
            <line x1="-36" y1="0" x2="-12" y2="0" stroke="#cbd5e1" stroke-width="2.2"/>
            <line x1="-12" y1="-9" x2="16" y2="-24" stroke="#cbd5e1" stroke-width="2.2"/>
            <line x1="16" y1="-24" x2="16" y2="-38" stroke="#cbd5e1" stroke-width="2.2"/>
            <line x1="-12" y1="9" x2="16" y2="24" stroke="#cbd5e1" stroke-width="2.2"/>
            <line x1="16" y1="24" x2="16" y2="38" stroke="#cbd5e1" stroke-width="2.2"/>
            ${isNPN
                ? `<polygon points="14,23 2,13 7,24" fill="#4ade80" stroke="#22c55e" stroke-width="0.5"/>`
                : `<polygon points="-4,13 8,23 3,12" fill="#fbbf24" stroke="#f59e0b" stroke-width="0.5"/>`
            }
            <circle cx="-36" cy="0" r="2.8" fill="#a78bfa"/>
            <circle cx="16" cy="-38" r="2.8" fill="#38bdf8"/>
            <circle cx="16" cy="38" r="2.8" fill="#f43f5e"/>
            ${showLabels ? `
                <text x="-23" y="-7" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">B</text>
                <text x="26" y="-23" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="start">C</text>
                <text x="26" y="29" fill="#f43f5e" font-size="10.5" font-weight="700" text-anchor="start">E</text>
            ` : ''}
            ${tag ? `<text x="-38" y="-22" fill="#94a3b8" font-size="10" font-weight="700" text-anchor="end">${tag}</text>` : ''}
        </g>
    `;
}

/**
 * Generates evenly staggered SVG animateMotion dots along a path for live current visualization.
 */
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

/* =========================================================================
   1. STRUCTURE SIMULATOR: Doping, Depletion Dynamics & Carrier Engine
   ========================================================================= */
function initStructureSimulator(canvas, controls) {
    let mode = 'NPN';
    let biasVBE = 0.70;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-st-npn">⚡ NPN Transistor</button>
            <button class="toggle-pill" id="btn-st-pnp">⚡ PNP Transistor</button>
        </div>
        <div class="ctrl-group">
            <label>แรงดันไบแอส B-E ($V_{BE}$ / $V_{EB}$):</label>
            <input type="range" id="sl-st-vbe" min="0.0" max="0.85" step="0.05" value="${biasVBE}">
            <span class="val-badge" id="val-st-vbe">${biasVBE.toFixed(2)} V</span>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            💡 สังเกตการฉีดพาหะข้ามรอยต่อ B-E, การรวมตัวใน Base (~1.5%) และการกวาดเข้า Collector
        </div>
    `;
    renderMath();

    const btnNPN = document.getElementById('btn-st-npn');
    const btnPNP = document.getElementById('btn-st-pnp');
    const slVBE = document.getElementById('sl-st-vbe');

    btnNPN.addEventListener('click', () => {
        mode = 'NPN';
        btnNPN.classList.add('active');
        btnPNP.classList.remove('active');
        render();
    });

    btnPNP.addEventListener('click', () => {
        mode = 'PNP';
        btnPNP.classList.add('active');
        btnNPN.classList.remove('active');
        render();
    });

    slVBE.addEventListener('input', e => {
        biasVBE = parseFloat(e.target.value);
        document.getElementById('val-st-vbe').innerText = `${biasVBE.toFixed(2)} V`;
        render();
    });

    const particles = [];
    const NUM_PARTICLES = 34;
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
            x: 48 + Math.random() * 130,
            y: 176 + Math.random() * 104,
            vx: 1.3 + Math.random() * 1.4,
            vy: (Math.random() - 0.5) * 0.7,
            recombined: false,
            flashTimer: 0
        });
    }

    function render() {
        const isNPN = mode === 'NPN';
        const majColor = isNPN ? '#38bdf8' : '#f43f5e';
        const minColor = isNPN ? '#f43f5e' : '#38bdf8';
        const majName = isNPN ? 'อิเล็กตรอนอิสระ (e⁻)' : 'โฮล (h⁺)';
        const chargeSign = isNPN ? '−' : '+';
        const baseChargeSign = isNPN ? '+' : '−';

        const isActive = biasVBE >= 0.60;
        const isThreshold = biasVBE >= 0.40 && biasVBE < 0.60;
        const depJE = Math.max(5, Math.round(28 * (1 - biasVBE / 0.90)));
        const depJC = 28;
        const injectionRate = isActive ? 'สูงมาก (Heavy Injection)' : isThreshold ? 'ปานกลาง (เริ่มเปิด)' : 'ต่ำมาก (Cutoff)';
        const injColor = isActive ? '#4ade80' : isThreshold ? '#fbbf24' : '#f87171';

        const durMain = isActive ? 1.1 : isThreshold ? 2.4 : 0;
        const durBase = isActive ? 2.2 : isThreshold ? 4.2 : 0;

        // Conventional current paths on Die bottom leads:
        // E lead: (113,292)->(113,355), B lead: (245,292)->(245,355), C lead: (405,292)->(405,355)
        const dieEPath = isNPN ? 'M 113 292 L 113 355' : 'M 113 355 L 113 292';
        const dieBPath = isNPN ? 'M 245 355 L 245 292' : 'M 245 292 L 245 355';
        const dieCPath = isNPN ? 'M 405 355 L 405 292' : 'M 405 292 L 405 355';

        // Conventional current paths on IEEE 315 symbol (center 710, 178, scale 1.25):
        // Base pin: (662.5, 178) -> (692.5, 178)
        // Collector pin: (760, 145.5) -> (732.5, 145.5)
        // Emitter pin: (732.5, 210.5) -> (760, 210.5)
        const symBPath = isNPN ? 'M 638 178 L 688 178' : 'M 688 178 L 638 178';
        const symCPath = isNPN ? 'M 776 145.5 L 730 145.5' : 'M 730 145.5 L 776 145.5';
        const symEPath = isNPN ? 'M 730 210.5 L 776 210.5' : 'M 776 210.5 L 730 210.5';

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <defs>
                    <filter id="glow-st" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="2.5" result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <marker id="arr-st-cyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#38bdf8"/>
                    </marker>
                    <marker id="arr-st-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#fbbf24"/>
                    </marker>
                </defs>

                <!-- TOP HUD STATUS BAR -->
                <rect x="16" y="10" width="868" height="36" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#28375a"/>
                <text x="32" y="33" fill="#c084fc" font-size="13" font-weight="700">📌 ชนิด: ${mode} (${isNPN ? 'n⁺-p-n' : 'p⁺-n-p'})</text>
                <text x="200" y="33" fill="${majColor}" font-size="12.5" font-weight="600">พาหะหลัก: ${majName}</text>
                <text x="455" y="33" fill="#cbd5e1" font-size="12.5">การฉีดพาหะ: <tspan fill="${injColor}" font-weight="700">${injectionRate}</tspan></text>
                <text x="868" y="33" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="end" font-family="'JetBrains Mono', monospace">${isNPN ? 'V_BE' : 'V_EB'} = ${biasVBE.toFixed(2)} V</text>

                <!-- SECTION 1: PHYSICAL SEMICONDUCTOR DIE (Left) -->
                <rect x="16" y="54" width="514" height="376" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="273" y="77" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">โครงสร้างผลึกสารกึ่งตัวนำ &amp; การเคลื่อนที่ของพาหะ</text>

                <!-- Legend Strip -->
                <circle cx="92" cy="96" r="5" fill="${majColor}"/>
                <text x="103" y="100" fill="#cbd5e1" font-size="11">${isNPN ? 'อิเล็กตรอน (e⁻)' : 'โฮล (h⁺)'}</text>
                <circle cx="235" cy="96" r="5" fill="${minColor}" fill-opacity="0.3" stroke="${minColor}" stroke-width="1.5"/>
                <text x="246" y="100" fill="#cbd5e1" font-size="11">${isNPN ? 'โฮลใน Base (h⁺)' : 'อิเล็กตรอนใน Base (e⁻)'}</text>
                <circle cx="388" cy="96" r="5.5" fill="none" stroke="#fbbf24" stroke-width="1.8"/>
                <text x="399" y="100" fill="#fbbf24" font-size="11">การรวมตัว (Recombine)</text>

                <!-- Emitter Layer (x=36..190, w=154) -->
                <rect x="36" y="112" width="154" height="180" rx="6" fill="${majColor}" fill-opacity="0.12" stroke="${majColor}" stroke-width="1.8"/>
                <text x="113" y="132" fill="${majColor}" font-size="14" font-weight="800" text-anchor="middle">Emitter (E)</text>
                <text x="113" y="148" fill="#f1f5f9" font-size="11.5" font-weight="700" text-anchor="middle">${isNPN ? 'n⁺ Type (โดปสูงสุด)' : 'p⁺ Type (โดปสูงสุด)'}</text>
                <text x="113" y="163" fill="#94a3b8" font-size="10" text-anchor="middle">N_E⁺ ~ 10¹⁹ cm⁻³</text>

                <!-- Base Layer (x=190..300, w=110) -->
                <rect x="190" y="112" width="110" height="180" fill="${minColor}" fill-opacity="0.16" stroke="${minColor}" stroke-width="1.8"/>
                <text x="245" y="132" fill="${minColor}" font-size="14" font-weight="800" text-anchor="middle">Base (B)</text>
                <text x="245" y="148" fill="#f1f5f9" font-size="11.5" font-weight="700" text-anchor="middle">${isNPN ? 'p Type (บางมาก)' : 'n Type (บางมาก)'}</text>
                <text x="245" y="163" fill="#fca5a5" font-size="10" text-anchor="middle">W_B ≪ L_n • โดปต่ำ</text>

                <!-- Collector Layer (x=300..510, w=210) -->
                <rect x="300" y="112" width="210" height="180" rx="6" fill="${majColor}" fill-opacity="0.12" stroke="${majColor}" stroke-width="1.8"/>
                <text x="405" y="132" fill="${majColor}" font-size="14" font-weight="800" text-anchor="middle">Collector (C)</text>
                <text x="405" y="148" fill="#f1f5f9" font-size="11.5" font-weight="700" text-anchor="middle">${isNPN ? 'n Type (พื้นที่ใหญ่สุด)' : 'p Type (พื้นที่ใหญ่สุด)'}</text>
                <text x="405" y="163" fill="#94a3b8" font-size="10" text-anchor="middle">ระบายความร้อน • โดปปานกลาง</text>

                <!-- Header separator line inside die -->
                <line x1="38" y1="170" x2="508" y2="170" stroke="rgba(148,163,184,0.2)" stroke-dasharray="3,3"/>

                <!-- Depletion Regions JE & JC -->
                <rect x="${190 - depJE / 2}" y="170" width="${depJE}" height="122" fill="#fbbf24" fill-opacity="0.22" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
                <rect x="${300 - depJC / 2}" y="170" width="${depJC}" height="122" fill="#fbbf24" fill-opacity="0.22" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>

                <!-- Electric Field Sweep Arrow inside JC -->
                <line x1="312" y1="278" x2="288" y2="278" stroke="#fbbf24" stroke-width="1.5" marker-end="${isNPN ? '' : 'url(#arr-st-amber)'}"/>
                <text x="190" y="308" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">J_E (${isActive ? 'แคบ' : 'กว้าง'})</text>
                <text x="300" y="308" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">J_C (ไบแอสกลับ)</text>

                <!-- Stationary minority base charges for visual context -->
                <g opacity="0.55">
                    <circle cx="220" cy="208" r="7" fill="none" stroke="${minColor}" stroke-width="1.4"/>
                    <text x="220" y="212" fill="${minColor}" font-size="10" font-weight="bold" text-anchor="middle">${baseChargeSign}</text>
                    <circle cx="268" cy="245" r="7" fill="none" stroke="${minColor}" stroke-width="1.4"/>
                    <text x="268" y="249" fill="${minColor}" font-size="10" font-weight="bold" text-anchor="middle">${baseChargeSign}</text>
                </g>

                <!-- Carrier Particles Canvas Group -->
                <g id="carrier-particles-group"></g>

                <!-- External Terminal Leads (All Cleanly Below Die) -->
                <line x1="113" y1="292" x2="113" y2="355" stroke="#cbd5e1" stroke-width="3"/>
                <circle cx="113" cy="355" r="4.5" fill="#38bdf8"/>
                <text x="113" y="375" fill="#38bdf8" font-size="12.5" font-weight="700" text-anchor="middle">ขา Emitter (E)</text>
                <text x="113" y="392" fill="#94a3b8" font-size="11" text-anchor="middle">I_E = 100%</text>

                <line x1="245" y1="292" x2="245" y2="355" stroke="#cbd5e1" stroke-width="3"/>
                <circle cx="245" cy="355" r="4.5" fill="#a78bfa"/>
                <text x="245" y="375" fill="#a78bfa" font-size="12.5" font-weight="700" text-anchor="middle">ขา Base (B)</text>
                <text x="245" y="392" fill="#fbbf24" font-size="11" text-anchor="middle">I_B ≈ 1.5%</text>

                <line x1="405" y1="292" x2="405" y2="355" stroke="#cbd5e1" stroke-width="3"/>
                <circle cx="405" cy="355" r="4.5" fill="#4ade80"/>
                <text x="405" y="375" fill="#4ade80" font-size="12.5" font-weight="700" text-anchor="middle">ขา Collector (C)</text>
                <text x="405" y="392" fill="#4ade80" font-size="11" text-anchor="middle">I_C ≈ 98.5%</text>

                <!-- Animated Conventional Current Dots on Die Leads -->
                ${durMain > 0 ? drawFlowDots(dieEPath, 3, durMain, '#38bdf8', 3.4) : ''}
                ${durBase > 0 ? drawFlowDots(dieBPath, 2, durBase, '#c084fc', 2.8) : ''}
                ${durMain > 0 ? drawFlowDots(dieCPath, 3, durMain, '#4ade80', 3.4) : ''}

                <!-- Bottom Physics Hint -->
                <text x="273" y="418" fill="${injColor}" font-size="11.5" font-weight="600" text-anchor="middle">
                    ${isActive
                        ? `✅ กำแพง J_E ลดลง: ${majName} 98.5% แพร่ผ่าน Base บางเข้าสู่ Collector`
                        : isThreshold
                        ? '⚠️ กำแพง J_E เริ่มลดลง: พาหะเริ่มข้ามรอยต่อได้เล็กน้อย'
                        : '⛔ V_BE ต่ำกว่า ~0.6V: กำแพงศักย์ J_E สูง พาหะถูกกั้นไว้ใน Emitter'}
                </text>

                <!-- SECTION 2: IEEE STANDARD SCHEMATIC SYMBOL (Right) -->
                <rect x="544" y="54" width="340" height="376" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="714" y="77" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">สัญลักษณ์ IEEE 315 &amp; กระแส KCL</text>

                <!-- Lead Extensions for Animated Current Vectors -->
                <line x1="636" y1="178" x2="665" y2="178" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2"/>
                <line x1="760" y1="145.5" x2="782" y2="145.5" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2"/>
                <line x1="760" y1="210.5" x2="782" y2="210.5" stroke="#4ade80" stroke-width="2" stroke-dasharray="3,2"/>

                ${drawIEEETransistor(710, 178, mode, 0, 1.25, { pins: 'horizontal', showLabels: true })}

                <!-- Animated Conventional Current Dots on Symbol -->
                ${durBase > 0 ? drawFlowDots(symBPath, 2, durBase, '#c084fc', 3) : ''}
                ${durMain > 0 ? drawFlowDots(symCPath, 2, durMain, '#38bdf8', 3.2) : ''}
                ${durMain > 0 ? drawFlowDots(symEPath, 2, durMain, '#4ade80', 3.2) : ''}

                <!-- Clean External Current Callouts (Never overlapping Symbol Labels B, C, E) -->
                <text x="615" y="174" fill="#c084fc" font-size="11.5" font-weight="700" text-anchor="middle">I_B</text>
                <text x="615" y="189" fill="#94a3b8" font-size="10" text-anchor="middle">${isNPN ? '(ไหลเข้า →)' : '(← ไหลออก)'}</text>

                <text x="822" y="141" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">I_C</text>
                <text x="822" y="156" fill="#94a3b8" font-size="10" text-anchor="middle">${isNPN ? '(← ไหลเข้า)' : '(ไหลออก →)'}</text>

                <text x="822" y="207" fill="#4ade80" font-size="11.5" font-weight="700" text-anchor="middle">I_E</text>
                <text x="822" y="222" fill="#94a3b8" font-size="10" text-anchor="middle">${isNPN ? '(ไหลออก →)' : '(← ไหลเข้า)'}</text>

                <text x="714" y="256" fill="#cbd5e1" font-size="11" text-anchor="middle">
                    ${isNPN ? 'ลูกศรชี้พุ่งออก (Not Pointing iN)' : 'ลูกศรชี้พุ่งเข้า (Pointing iN)'}
                </text>

                <!-- KCL Summary Box -->
                <rect x="562" y="274" width="304" height="140" rx="8" fill="rgba(15, 23, 42, 0.92)" stroke="#334155"/>
                <text x="576" y="298" fill="#e2e8f0" font-size="12.5" font-weight="700">⚡ ความสัมพันธ์กระแสตามกฎ KCL:</text>
                <text x="576" y="322" fill="#38bdf8" font-size="12">I_C = α · I_E ≈ <tspan fill="#4ade80" font-weight="700">98.5% ของ I_E</tspan></text>
                <text x="576" y="344" fill="#f43f5e" font-size="12">I_B = (1 − α) · I_E ≈ <tspan fill="#fbbf24" font-weight="700">1.5% ของ I_E</tspan></text>
                <text x="576" y="366" fill="#a78bfa" font-size="12">สมการรวม: <tspan fill="#c4b5fd" font-weight="700">I_E = I_B + I_C</tspan></text>
                <line x1="576" y1="378" x2="852" y2="378" stroke="#1e293b"/>
                <text x="576" y="399" fill="${injColor}" font-size="11.5" font-weight="700">
                    สถานะ: ${isActive ? 'นำกระแสเต็มที่ (β ≈ 65–100+)' : isThreshold ? 'กำลังเริ่มฉีดพาหะข้าม J_E' : 'Cutoff (ยังไม่ชนะกำแพงศักย์)'}
                </text>
            </svg>
        `;

        const particleGroup = document.getElementById('carrier-particles-group');
        let isRunning = true;

        function updateParticles() {
            if (!isRunning) return;
            let pSvg = '';
            const speedMult = isActive ? 1.65 : isThreshold ? 0.65 : 0.12;
            const jeBarrierX = 190 - depJE / 2;

            particles.forEach(p => {
                if (p.flashTimer > 0) p.flashTimer--;

                if (p.recombined) {
                    // Travel vertically down to Base terminal lead at y=292
                    p.x += (245 - p.x) * 0.08;
                    p.y += 2.2 * speedMult;
                    if (p.y >= 290) {
                        p.x = 46 + Math.random() * 115;
                        p.y = 178 + Math.random() * 100;
                        p.vx = 1.3 + Math.random() * 1.4;
                        p.vy = (Math.random() - 0.5) * 0.7;
                        p.recombined = false;
                        p.flashTimer = 0;
                    }
                } else {
                    if (!isActive && !isThreshold && p.x >= jeBarrierX - 6) {
                        // Bounce off high JE barrier in Cutoff
                        p.vx = -Math.abs(p.vx);
                        p.x = jeBarrierX - 7;
                    } else if (!isActive && !isThreshold && p.x < 46) {
                        p.vx = Math.abs(p.vx);
                    }

                    const fieldAccel = (p.x >= 286 && p.x <= 320 && (isActive || isThreshold)) ? 1.8 : 1.0;
                    p.x += p.vx * speedMult * fieldAccel;
                    p.y += p.vy;

                    if (p.y < 178) { p.y = 178; p.vy = Math.abs(p.vy); }
                    if (p.y > 282) { p.y = 282; p.vy = -Math.abs(p.vy); }

                    // Small recombination probability in Base (x: 198..288)
                    if ((isActive || isThreshold) && p.x >= 200 && p.x <= 284 && Math.random() < 0.018) {
                        p.recombined = true;
                        p.flashTimer = 14;
                    }

                    if (p.x > 498) {
                        p.x = 46 + Math.random() * 80;
                        p.y = 178 + Math.random() * 100;
                        p.vx = 1.3 + Math.random() * 1.4;
                        p.vy = (Math.random() - 0.5) * 0.7;
                    }
                }

                const col = p.recombined ? '#fbbf24' : majColor;
                const rad = p.recombined ? 3.8 : 4.2;
                pSvg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${rad}" fill="${col}" opacity="0.9"/>`;
                if (p.flashTimer > 0) {
                    const ringR = 5 + (14 - p.flashTimer) * 0.7;
                    pSvg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${ringR.toFixed(1)}" fill="none" stroke="#fbbf24" stroke-width="1.4" opacity="${(p.flashTimer / 14).toFixed(2)}"/>`;
                } else if (!p.recombined) {
                    pSvg += `<text x="${p.x.toFixed(1)}" y="${(p.y + 3).toFixed(1)}" fill="#080f1e" font-size="8.5" font-weight="900" text-anchor="middle">${chargeSign}</text>`;
                }
            });

            if (particleGroup) particleGroup.innerHTML = pSvg;
            animId = requestAnimationFrame(updateParticles);
        }

        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        animId = requestAnimationFrame(updateParticles);

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
   2. BIASING SIMULATOR: Topologies, Collector Family & Load Line
   ========================================================================= */
function initBiasingSimulator(canvas, controls) {
    let topology = 'divider';
    const VCC = 12.0;
    let R1 = 33.0;
    let R2 = 10.0;
    let RC = 2.2;
    let RE = 1.0;
    let beta = 100;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-topo-div">Voltage Divider</button>
            <button class="toggle-pill" id="btn-topo-fb">Collector Feedback</button>
            <button class="toggle-pill" id="btn-topo-fix">Fixed Base Bias</button>
        </div>
        <div class="ctrl-group">
            <label id="lbl-b-r1">R₁:</label>
            <input type="range" id="sl-b-r1" min="10" max="100" step="1" value="${R1}">
            <span class="val-badge" id="val-b-r1">${R1} kΩ</span>
        </div>
        <div class="ctrl-group" id="grp-b-r2">
            <label>R₂:</label>
            <input type="range" id="sl-b-r2" min="2" max="35" step="0.5" value="${R2}">
            <span class="val-badge" id="val-b-r2">${R2} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>R_C:</label>
            <input type="range" id="sl-b-rc" min="0.5" max="5.0" step="0.1" value="${RC}">
            <span class="val-badge" id="val-b-rc">${RC} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>R_E:</label>
            <input type="range" id="sl-b-re" min="0.2" max="3.0" step="0.1" value="${RE}">
            <span class="val-badge" id="val-b-re">${RE} kΩ</span>
        </div>
        <div class="ctrl-group">
            <label>β:</label>
            <input type="range" id="sl-b-beta" min="50" max="300" step="10" value="${beta}">
            <span class="val-badge" id="val-b-beta">${beta}</span>
        </div>
        <button class="btn-control" id="btn-auto-mid" style="margin-left: auto;">🎯 ตั้งกึ่งกลาง (Auto Midpoint)</button>
    `;

    const btnDiv = document.getElementById('btn-topo-div');
    const btnFb = document.getElementById('btn-topo-fb');
    const btnFix = document.getElementById('btn-topo-fix');
    const slR1 = document.getElementById('sl-b-r1');
    const slR2 = document.getElementById('sl-b-r2');
    const slRC = document.getElementById('sl-b-rc');
    const slRE = document.getElementById('sl-b-re');
    const slBeta = document.getElementById('sl-b-beta');
    const btnMid = document.getElementById('btn-auto-mid');
    const lblR1 = document.getElementById('lbl-b-r1');
    const grpR2 = document.getElementById('grp-b-r2');

    btnDiv.addEventListener('click', () => { topology = 'divider'; updatePills(); render(); });
    btnFb.addEventListener('click', () => { topology = 'feedback'; updatePills(); render(); });
    btnFix.addEventListener('click', () => { topology = 'fixed'; updatePills(); render(); });

    function updatePills() {
        btnDiv.classList.toggle('active', topology === 'divider');
        btnFb.classList.toggle('active', topology === 'feedback');
        btnFix.classList.toggle('active', topology === 'fixed');
        if (lblR1) lblR1.innerText = topology === 'divider' ? 'R₁:' : 'R_B:';
        if (grpR2) grpR2.style.opacity = topology === 'divider' ? '1' : '0.4';
        if (slR2) slR2.disabled = topology !== 'divider';
    }

    slR1.addEventListener('input', e => { R1 = parseFloat(e.target.value); document.getElementById('val-b-r1').innerText = `${R1} kΩ`; render(); });
    slR2.addEventListener('input', e => { R2 = parseFloat(e.target.value); document.getElementById('val-b-r2').innerText = `${R2} kΩ`; render(); });
    slRC.addEventListener('input', e => { RC = parseFloat(e.target.value); document.getElementById('val-b-rc').innerText = `${RC} kΩ`; render(); });
    slRE.addEventListener('input', e => { RE = parseFloat(e.target.value); document.getElementById('val-b-re').innerText = `${RE} kΩ`; render(); });
    slBeta.addEventListener('input', e => { beta = parseInt(e.target.value, 10); document.getElementById('val-b-beta').innerText = `${beta}`; render(); });

    btnMid.addEventListener('click', () => {
        topology = 'divider';
        updatePills();
        R1 = 33.0; R2 = 10.0; RC = 2.2; RE = 1.0; beta = 100;
        slR1.value = R1; document.getElementById('val-b-r1').innerText = `${R1} kΩ`;
        slR2.value = R2; document.getElementById('val-b-r2').innerText = `${R2} kΩ`;
        slRC.value = RC; document.getElementById('val-b-rc').innerText = `${RC} kΩ`;
        slRE.value = RE; document.getElementById('val-b-re').innerText = `${RE} kΩ`;
        slBeta.value = beta; document.getElementById('val-b-beta').innerText = `${beta}`;
        render();
    });

    function render() {
        let VTH = 0, RTH = 0, IB_uA = 0, ICQ_mA = 0, VCEQ = 0, VE = 0, VC = 0, VB = 0;
        const ICSat_mA = VCC / (RC + RE);
        let state = 'Active Mode';
        let stateColor = '#4ade80';

        if (topology === 'divider') {
            VTH = VCC * (R2 / (R1 + R2));
            RTH = (R1 * R2) / (R1 + R2);
            const den = RTH + (beta + 1) * RE;
            const num = VTH - 0.7;
            if (num <= 0) {
                IB_uA = 0; ICQ_mA = 0; VCEQ = VCC;
                state = 'Cutoff (V_BE < 0.7V)';
                stateColor = '#fbbf24';
            } else {
                const IB_mA = num / den;
                IB_uA = IB_mA * 1000;
                ICQ_mA = beta * IB_mA;
                VCEQ = VCC - ICQ_mA * (RC + RE);
                if (VCEQ <= 0.2) {
                    VCEQ = 0.2;
                    ICQ_mA = (VCC - 0.2) / (RC + RE);
                    state = 'Saturation (V_CE ≈ 0.2V)';
                    stateColor = '#f87171';
                }
            }
        } else if (topology === 'feedback') {
            const num = VCC - 0.7;
            const den = R1 + beta * (RC + RE);
            const IB_mA = Math.max(0, num / den);
            IB_uA = IB_mA * 1000;
            ICQ_mA = beta * IB_mA;
            VCEQ = VCC - ICQ_mA * (RC + RE);
            if (VCEQ <= 0.2) {
                VCEQ = 0.2;
                ICQ_mA = (VCC - 0.2) / (RC + RE);
                state = 'Saturation (V_CE ≈ 0.2V)';
                stateColor = '#f87171';
            }
        } else {
            const IB_mA = Math.max(0, (VCC - 0.7) / (R1 + (beta + 1) * RE));
            IB_uA = IB_mA * 1000;
            ICQ_mA = beta * IB_mA;
            VCEQ = VCC - ICQ_mA * (RC + RE);
            if (VCEQ <= 0.2) {
                VCEQ = 0.2;
                ICQ_mA = (VCC - 0.2) / (RC + RE);
                state = 'Saturation (V_CE ≈ 0.2V)';
                stateColor = '#f87171';
            }
        }

        VE = ICQ_mA * RE;
        VC = VCC - ICQ_mA * RC;
        VB = ICQ_mA > 0 ? VE + 0.7 : VTH;
        const PD_mW = VCEQ * ICQ_mA;

        // Animated current speed based on ICQ & IB
        const durIC = ICQ_mA > 0.08 ? Math.max(0.55, Math.min(3.2, 4.5 / ICQ_mA)) : 0;
        const durIB = IB_uA > 1 ? Math.max(0.9, Math.min(3.8, 60 / IB_uA)) : 0;

        // Graph mapping (padded cleanly inside Right panel x=464..884, y=16..424)
        const gx0 = 518; const gy0 = 348;
        const gW = 310;  const gH = 248;
        const maxV = 14.0;
        const maxI = Math.max(6.5, ICSat_mA * 1.22);

        const mapX = v => gx0 + (v / maxV) * gW;
        const mapY = i => gy0 - (i / maxI) * gH;

        const xSat = mapX(0);
        const ySat = mapY(ICSat_mA);
        const xCut = mapX(VCC);
        const yCut = mapY(0);
        const xQ = mapX(VCEQ);
        const yQ = mapY(ICQ_mA);

        const ibSteps = [10, 20, 30, 40, 50, 60];
        let curvePaths = '';
        ibSteps.forEach(ib => {
            const icVal = (beta * ib) / 1000;
            if (icVal > maxI * 0.96) return;
            const kneeX = mapX(0.45);
            const endX = mapX(13.5);
            const kneeY = mapY(icVal);
            const endY = mapY(icVal * 1.035);
            const pathD = `M ${gx0} ${gy0} Q ${kneeX} ${kneeY} ${endX} ${endY}`;
            const isNear = Math.abs(ib - IB_uA) < 6;
            curvePaths += `
                <path d="${pathD}" fill="none" stroke="${isNear ? '#a78bfa' : '#334155'}" stroke-width="${isNear ? 2 : 1.2}"/>
                <text x="${endX + 4}" y="${endY + 3}" fill="${isNear ? '#c4b5fd' : '#64748b'}" font-size="9.5" font-weight="${isNear ? '700' : '400'}">${ib}µA</text>
            `;
        });

        // Smart non-overlapping Q-point badge position
        const badgeW = 148;
        const badgeH = 28;
        const badgeX = (xQ > gx0 + gW - 155) ? (xQ - badgeW - 12) : (xQ + 12);
        const nearSatLabel = (Math.abs(xQ - xSat) < 155 && Math.abs(yQ - ySat) < 44);
        const badgeY = (yQ < gy0 - gH + 45 || nearSatLabel) ? (yQ + 16) : (yQ > gy0 - 44 ? yQ - 44 : yQ - 34);

        // Transistor centered at (280, 180) with vertical pins:
        // B = (244, 180), C = (296, 142), E = (296, 218)
        const basePathD = topology === 'divider'
            ? 'M 115 180 L 244 180'
            : topology === 'feedback'
            ? 'M 296 130 L 145 130 L 145 180 L 244 180'
            : 'M 115 64 L 115 180 L 244 180';

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- SECTION 1: IEEE STANDARD SCHEMATIC (Left) -->
                <rect x="16" y="16" width="434" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="233" y="42" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">
                    ${topology === 'divider' ? 'วงจร Voltage Divider Bias (สากล)' : topology === 'feedback' ? 'วงจร Collector Feedback Bias' : 'วงจร Fixed Base Bias'}
                </text>

                <!-- VCC Rail -->
                <line x1="65" y1="64" x2="365" y2="64" stroke="#f43f5e" stroke-width="2.8"/>
                <circle cx="365" cy="64" r="3.5" fill="#f43f5e"/>
                <text x="436" y="68" fill="#f43f5e" font-size="12.5" font-weight="700" text-anchor="end">+V_CC (${VCC}V)</text>

                <!-- Ground Bus -->
                <line x1="65" y1="290" x2="365" y2="290" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="205" y1="290" x2="205" y2="302" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="190" y1="302" x2="220" y2="302" stroke="#cbd5e1" stroke-width="2.4"/>
                <line x1="195" y1="307" x2="215" y2="307" stroke="#cbd5e1" stroke-width="1.8"/>
                <line x1="200" y1="312" x2="210" y2="312" stroke="#cbd5e1" stroke-width="1.4"/>

                ${topology === 'divider' ? `
                    <line x1="115" y1="64" x2="115" y2="96" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="105" y="96" width="20" height="40" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.6"/>
                    <text x="132" y="120" fill="#38bdf8" font-size="11.5" font-weight="700">R₁ = ${R1}k</text>
                    <line x1="115" y1="136" x2="115" y2="180" stroke="#cbd5e1" stroke-width="2"/>

                    <circle cx="115" cy="180" r="4" fill="#a78bfa"/>
                    <line x1="115" y1="180" x2="244" y2="180" stroke="#cbd5e1" stroke-width="2"/>

                    <line x1="115" y1="180" x2="115" y2="214" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="105" y="214" width="20" height="40" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.6"/>
                    <text x="132" y="238" fill="#38bdf8" font-size="11.5" font-weight="700">R₂ = ${R2}k</text>
                    <line x1="115" y1="254" x2="115" y2="290" stroke="#cbd5e1" stroke-width="2"/>
                ` : topology === 'feedback' ? `
                    <circle cx="296" cy="130" r="4" fill="#38bdf8"/>
                    <line x1="296" y1="130" x2="225" y2="130" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="180" y="121" width="45" height="18" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.6"/>
                    <text x="202" y="114" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">R_B = ${R1}k</text>
                    <line x1="180" y1="130" x2="135" y2="130" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="135" y1="130" x2="135" y2="180" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="135" y1="180" x2="244" y2="180" stroke="#cbd5e1" stroke-width="2"/>
                ` : `
                    <line x1="115" y1="64" x2="115" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="105" y="105" width="20" height="42" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.6"/>
                    <text x="132" y="130" fill="#38bdf8" font-size="11.5" font-weight="700">R_B = ${R1}k</text>
                    <line x1="115" y1="147" x2="115" y2="180" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="115" y1="180" x2="244" y2="180" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <!-- Resistor RC aligned at x=296 -->
                <line x1="296" y1="64" x2="296" y2="86" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="286" y="86" width="20" height="36" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.6"/>
                <text x="314" y="108" fill="#4ade80" font-size="11.5" font-weight="700">R_C = ${RC}k</text>
                <line x1="296" y1="122" x2="296" y2="142" stroke="#cbd5e1" stroke-width="2"/>

                <!-- IEEE Transistor Symbol (pins: B=(244,180), C=(296,142), E=(296,218)) -->
                ${drawIEEETransistor(280, 180, 'NPN', 0, 1.0, { pins: 'vertical', showLabels: false })}

                <!-- Resistor RE aligned at x=296 -->
                <line x1="296" y1="218" x2="296" y2="232" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="286" y="232" width="20" height="36" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.6"/>
                <text x="314" y="254" fill="#fbbf24" font-size="11.5" font-weight="700">R_E = ${RE}k</text>
                <line x1="296" y1="268" x2="296" y2="290" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Node Voltage Callouts (Cleanly spaced from resistors) -->
                <text x="234" y="168" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="end">V_B=${VB.toFixed(1)}V</text>
                <text x="314" y="146" fill="#38bdf8" font-size="10.5" font-weight="700">V_C=${VC.toFixed(1)}V</text>
                <text x="314" y="223" fill="#f43f5e" font-size="10.5" font-weight="700">V_E=${VE.toFixed(1)}V</text>

                <!-- Animated Current Flow Pulses -->
                ${durIB > 0 ? drawFlowDots(basePathD, 2, durIB, '#c084fc', 2.8) : ''}
                ${durIC > 0 ? drawFlowDots('M 296 64 L 296 142', 2, durIC, '#4ade80', 3.4) : ''}
                ${durIC > 0 ? drawFlowDots('M 296 218 L 296 290', 2, durIC, '#38bdf8', 3.4) : ''}

                <!-- Calculated Metrics Table inside Schematic -->
                <rect x="32" y="324" width="402" height="86" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
                <text x="46" y="346" fill="#cbd5e1" font-size="12">V_B = <tspan fill="#a78bfa" font-weight="700">${VB.toFixed(2)}V</tspan>  |  V_E = <tspan fill="#fbbf24">${VE.toFixed(2)}V</tspan>  |  V_C = <tspan fill="#38bdf8">${VC.toFixed(2)}V</tspan></text>
                <text x="46" y="369" fill="#cbd5e1" font-size="12">I_BQ = <tspan fill="#c084fc" font-weight="700">${IB_uA.toFixed(1)} µA</tspan>  |  I_CQ = <tspan fill="#4ade80" font-weight="700">${ICQ_mA.toFixed(2)} mA</tspan>  |  P_D = <tspan fill="#38bdf8">${PD_mW.toFixed(1)} mW</tspan></text>
                <text x="46" y="394" fill="${stateColor}" font-size="12.5" font-weight="700">จุดทำงาน: V_CEQ = ${VCEQ.toFixed(2)} V ➔ [${state}]</text>

                <!-- SECTION 2: FAMILY OF CURVES & DC LOAD LINE (Right) -->
                <rect x="464" y="16" width="420" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="674" y="42" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">กราฟคุณลักษณะเอาต์พุต &amp; เส้นโหลดไฟตรง</text>

                <!-- Saturation & Cutoff Subtle Regions -->
                <rect x="${gx0}" y="${gy0 - gH}" width="12" height="${gH}" fill="rgba(248, 113, 113, 0.08)"/>
                <rect x="${gx0}" y="${gy0 - 12}" width="${gW}" height="12" fill="rgba(251, 191, 36, 0.08)"/>

                <!-- Gridlines & Ticks -->
                <line x1="${gx0}" y1="${gy0 - gH/2}" x2="${gx0 + gW}" y2="${gy0 - gH/2}" stroke="#1e293b" stroke-dasharray="3,3"/>
                <line x1="${gx0}" y1="${gy0 - gH}" x2="${gx0 + gW}" y2="${gy0 - gH}" stroke="#1e293b" stroke-dasharray="3,3"/>
                <text x="${gx0 - 8}" y="${gy0 + 4}" fill="#64748b" font-size="10" text-anchor="end">0</text>
                <text x="${gx0 - 8}" y="${gy0 - gH/2 + 4}" fill="#64748b" font-size="10" text-anchor="end">${(maxI/2).toFixed(1)}</text>
                <text x="${gx0 - 8}" y="${gy0 - gH + 4}" fill="#64748b" font-size="10" text-anchor="end">${maxI.toFixed(1)}</text>

                ${[4, 8, 12].map(v => `
                    <line x1="${mapX(v)}" y1="${gy0}" x2="${mapX(v)}" y2="${gy0 - gH}" stroke="#1e293b" stroke-dasharray="3,3"/>
                    <text x="${mapX(v)}" y="${gy0 + 16}" fill="#64748b" font-size="10" text-anchor="middle">${v}V</text>
                `).join('')}

                <!-- Axes -->
                <line x1="${gx0}" y1="${gy0}" x2="${gx0 + gW + 12}" y2="${gy0}" stroke="#94a3b8" stroke-width="2"/>
                <text x="${gx0 + gW + 16}" y="${gy0 + 4}" fill="#94a3b8" font-size="10.5" font-weight="700" text-anchor="start">V_CE(V)</text>
                <line x1="${gx0}" y1="${gy0}" x2="${gx0}" y2="${gy0 - gH - 12}" stroke="#94a3b8" stroke-width="2"/>
                <text x="${gx0}" y="${gy0 - gH - 18}" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">I_C (mA)</text>

                <!-- Family Curves -->
                ${curvePaths}

                <!-- DC Load Line -->
                <line x1="${xSat}" y1="${ySat}" x2="${xCut}" y2="${yCut}" stroke="#f43f5e" stroke-width="2.8"/>

                <!-- Saturation & Cutoff Nodes (Non-overlapping labels) -->
                <circle cx="${xSat}" cy="${ySat}" r="5" fill="#f43f5e"/>
                <rect x="${xSat + 8}" y="${ySat - 24}" width="128" height="18" rx="4" fill="rgba(8, 15, 30, 0.9)"/>
                <text x="${xSat + 12}" y="${ySat - 11}" fill="#f87171" font-size="10.5" font-weight="700">I_C(sat) = ${ICSat_mA.toFixed(2)} mA</text>

                <circle cx="${xCut}" cy="${yCut}" r="5" fill="#fbbf24"/>
                <text x="${xCut}" y="${gy0 + 34}" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">Cutoff (${VCC}V)</text>

                <!-- Dashed helper lines for Q-Point -->
                <line x1="${gx0}" y1="${yQ}" x2="${xQ}" y2="${yQ}" stroke="#4ade80" stroke-dasharray="3,3"/>
                <line x1="${xQ}" y1="${gy0}" x2="${xQ}" y2="${yQ}" stroke="#38bdf8" stroke-dasharray="3,3"/>

                <!-- Q-Point with Glow Animation -->
                <circle cx="${xQ}" cy="${yQ}" r="8" fill="#4ade80" fill-opacity="0.35">
                    <animate attributeName="r" values="7;13;7" dur="1.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="${xQ}" cy="${yQ}" r="5.5" fill="#4ade80"/>
                <circle cx="${xQ}" cy="${yQ}" r="2.5" fill="#ffffff"/>

                <!-- Q-Point Coordinates Badge (Smart flipped positioning) -->
                <rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="6" fill="rgba(15, 23, 42, 0.96)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="${badgeX + badgeW / 2}" y="${badgeY + 18}" fill="#4ade80" font-size="11.5" font-weight="700" text-anchor="middle">
                    Q: (${VCEQ.toFixed(2)}V, ${ICQ_mA.toFixed(2)}mA)
                </text>
            </svg>
        `;
    }

    updatePills();
    render();
}

/* =========================================================================
   3. OPERATION MODES SIMULATOR: 4 Modes, Animated Particles & 4-Quadrant Plane
   ========================================================================= */
function initOperationSimulator(canvas, controls) {
    let mode = 'active';
    let vbe = 0.70;
    let vce = 6.0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-om-active">Forward-Active (ขยาย)</button>
            <button class="toggle-pill" id="btn-om-sat">Saturation (อิ่มตัว)</button>
            <button class="toggle-pill" id="btn-om-cut">Cutoff (คัตออฟ)</button>
            <button class="toggle-pill" id="btn-om-rev">Reverse-Active (ย้อนกลับ)</button>
        </div>
        <div class="ctrl-group">
            <label>V_BE:</label>
            <input type="range" id="sl-om-vbe" min="-0.5" max="0.9" step="0.05" value="${vbe}">
            <span class="val-badge" id="val-om-vbe">${vbe.toFixed(2)} V</span>
        </div>
        <div class="ctrl-group">
            <label>V_CE:</label>
            <input type="range" id="sl-om-vce" min="-2.0" max="12.0" step="0.2" value="${vce}">
            <span class="val-badge" id="val-om-vce">${vce.toFixed(1)} V</span>
        </div>
    `;

    const btnAct = document.getElementById('btn-om-active');
    const btnSat = document.getElementById('btn-om-sat');
    const btnCut = document.getElementById('btn-om-cut');
    const btnRev = document.getElementById('btn-om-rev');
    const slVBE = document.getElementById('sl-om-vbe');
    const slVCE = document.getElementById('sl-om-vce');

    function syncButtons() {
        btnAct.classList.toggle('active', mode === 'active');
        btnSat.classList.toggle('active', mode === 'sat');
        btnCut.classList.toggle('active', mode === 'cutoff');
        btnRev.classList.toggle('active', mode === 'reverse');
    }

    btnAct.addEventListener('click', () => { mode = 'active'; vbe = 0.70; vce = 6.0; syncInputs(); render(); });
    btnSat.addEventListener('click', () => { mode = 'sat'; vbe = 0.82; vce = 0.18; syncInputs(); render(); });
    btnCut.addEventListener('click', () => { mode = 'cutoff'; vbe = 0.10; vce = 12.0; syncInputs(); render(); });
    btnRev.addEventListener('click', () => { mode = 'reverse'; vbe = -0.30; vce = -1.20; syncInputs(); render(); });

    function syncInputs() {
        slVBE.value = vbe; document.getElementById('val-om-vbe').innerText = `${vbe.toFixed(2)} V`;
        slVCE.value = vce; document.getElementById('val-om-vce').innerText = `${vce.toFixed(1)} V`;
        syncButtons();
    }

    slVBE.addEventListener('input', e => {
        vbe = parseFloat(e.target.value);
        document.getElementById('val-om-vbe').innerText = `${vbe.toFixed(2)} V`;
        evaluateMode();
        render();
    });

    slVCE.addEventListener('input', e => {
        vce = parseFloat(e.target.value);
        document.getElementById('val-om-vce').innerText = `${vce.toFixed(1)} V`;
        evaluateMode();
        render();
    });

    function evaluateMode() {
        if (vbe < 0.5) {
            mode = (vbe - vce >= 0.45 && vce < 0) ? 'reverse' : 'cutoff';
        } else {
            mode = (vce <= 0.35) ? 'sat' : 'active';
        }
        syncButtons();
    }

    const particles = [];
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: 48 + Math.random() * 410,
            y: 162 + Math.random() * 88,
            vx: 1.2 + Math.random() * 1.2,
            vy: (Math.random() - 0.5) * 0.6,
            toBase: false
        });
    }

    function render() {
        const vbc = vbe - vce;
        const jeForward = vbe >= 0.50;
        const jcForward = vbc >= 0.35;

        let ic_mA = 0;
        let ib_uA = 0;
        let modeTitle = '';
        let modeColor = '#4ade80';
        let physLine1 = '';
        let physLine2 = '';

        if (mode === 'active') {
            ib_uA = Math.max(5, ((vbe - 0.5) / 0.25) * 35);
            ic_mA = (ib_uA * 100) / 1000;
            modeTitle = 'Forward-Active (ย่านขยายเชิงเส้น: I_C = β·I_B)';
            modeColor = '#4ade80';
            physLine1 = 'J_E ไบแอสตรงฉีดอิเล็กตรอนเข้า Base • J_C ไบแอสกลับกวาดประจุ';
            physLine2 = 'พาหะ ~98.5% ข้ามสู่ Collector เกิดการขยายสัญญาณเชิงเส้น';
        } else if (mode === 'sat') {
            ib_uA = 250;
            ic_mA = Math.max(1.5, Math.min(5.5, (vce / 0.3) * 5.2));
            modeTitle = 'Saturation (ย่านอิ่มตัว: สวิตช์ปิด ON, V_CE ≈ 0.2V)';
            modeColor = '#38bdf8';
            physLine1 = 'ทั้ง J_E และ J_C ไบแอสตรงทั้งคู่ กำแพงศักย์ต่ำลงทั้งสองฝั่ง';
            physLine2 = 'ประจุอัดแน่นใน Base กระแส I_C อิ่มตัวเต็มที่ V_CE ต่ำสุด';
        } else if (mode === 'cutoff') {
            ib_uA = 0;
            ic_mA = 0;
            modeTitle = 'Cutoff (ย่านตัดขาด: สวิตช์เปิด OFF, I_C ≈ 0)';
            modeColor = '#fbbf24';
            physLine1 = 'ทั้ง J_E และ J_C ไบแอสกลับ กำแพงศักย์ขยายกว้างปิดกั้นประจุ';
            physLine2 = 'ไม่มีพาหะข้ามรอยต่อ กระแส I_C ≈ 0 A และ V_CE = V_CC';
        } else {
            ib_uA = 120;
            ic_mA = -0.35;
            modeTitle = 'Reverse-Active (ย่านย้อนกลับ: C ฉีด E รับ, β_R < 2)';
            modeColor = '#c084fc';
            physLine1 = 'J_C ไบแอสตรง (Collector ฉีดกลับ) • J_E ไบแอสกลับ';
            physLine2 = 'Collector โดปต่ำและใหญ่ จึงรวมตัวใน Base สูง อัตราขยายต่ำมาก';
        }

        // Dynamic Depletion Widths (continuous die: x=38..474; E: 38..184, B: 184..290, C: 290..474)
        const depJE = jeForward ? 7 : 26;
        const depJC = jcForward ? 7 : 28;

        // 4-Quadrant Operating Plane coordinates (Panel: x=510..884, y=54..430)
        // Origin at (585, 268): V_CE range [-3, 13] -> x [528..860], I_C range [-1.2, 6.5] -> y [306..96]
        const ox = 585; const oy = 268;
        const mapVX = v => ox + (v / 13.0) * 265;
        const mapIY = i => oy - (i / 6.5) * 165;
        const cx = Math.max(528, Math.min(860, mapVX(vce)));
        const cy = Math.max(98, Math.min(312, mapIY(ic_mA)));

        // Smart Operating Point badge position (stays clear of Cutoff & Active labels)
        const opW = 124; const opH = 25;
        const opX = (cx > 725) ? (cx - opW - 10) : (cx + 10);
        const opY = (cy > 236) ? 215 : (cy < 130 ? cy + 12 : cy - 28);

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- TOP STATUS BANNER -->
                <rect x="16" y="10" width="868" height="36" rx="8" fill="rgba(15, 23, 42, 0.92)" stroke="#28375a"/>
                <text x="32" y="33" fill="${modeColor}" font-size="13" font-weight="700">🔍 ${modeTitle}</text>
                <text x="870" y="33" fill="#cbd5e1" font-size="12" text-anchor="end" font-family="'JetBrains Mono', monospace">
                    V_BE=${vbe.toFixed(2)}V  |  V_BC=${vbc.toFixed(2)}V  |  V_CE=${vce.toFixed(1)}V
                </text>

                <!-- SECTION 1: PHYSICAL JUNCTION CARRIERS (Left) -->
                <rect x="16" y="54" width="480" height="376" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="256" y="77" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">สภาวะรอยต่อทางกายภาพ &amp; กำแพงศักย์</text>

                <!-- Continuous Semiconductor Die (No empty gaps!) -->
                <!-- Emitter: x=38..184 (w=146) -->
                <rect x="38" y="96" width="146" height="162" rx="6" fill="#38bdf8" fill-opacity="0.13" stroke="#38bdf8" stroke-width="1.8"/>
                <text x="111" y="116" fill="#38bdf8" font-size="13.5" font-weight="700" text-anchor="middle">Emitter (n⁺)</text>
                <text x="111" y="133" fill="#94a3b8" font-size="10.5" text-anchor="middle">โดปหนาแน่นสูงสุด</text>

                <!-- Base: x=184..290 (w=106) -->
                <rect x="184" y="96" width="106" height="162" fill="#f43f5e" fill-opacity="0.16" stroke="#f43f5e" stroke-width="1.8"/>
                <text x="237" y="116" fill="#f43f5e" font-size="13.5" font-weight="700" text-anchor="middle">Base (p)</text>
                <text x="237" y="133" fill="#fca5a5" font-size="10.5" text-anchor="middle">บางมาก (~1µm)</text>

                <!-- Collector: x=290..474 (w=184) -->
                <rect x="290" y="96" width="184" height="162" rx="6" fill="#38bdf8" fill-opacity="0.13" stroke="#38bdf8" stroke-width="1.8"/>
                <text x="382" y="116" fill="#38bdf8" font-size="13.5" font-weight="700" text-anchor="middle">Collector (n)</text>
                <text x="382" y="133" fill="#94a3b8" font-size="10.5" text-anchor="middle">พื้นที่กว้างรองรับประจุ</text>

                <!-- Header divider inside die -->
                <line x1="40" y1="142" x2="472" y2="142" stroke="rgba(148,163,184,0.22)" stroke-dasharray="3,3"/>

                <!-- Dynamic Depletion Regions -->
                <rect x="${184 - depJE / 2}" y="142" width="${depJE}" height="116" fill="#fbbf24" fill-opacity="${jeForward ? 0.14 : 0.34}" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,2"/>
                <rect x="${290 - depJC / 2}" y="142" width="${depJC}" height="116" fill="#fbbf24" fill-opacity="${jcForward ? 0.14 : 0.34}" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,2"/>

                <!-- Animated Carrier Particles -->
                <g id="om-particles-group"></g>

                <!-- Junction Labels cleanly BELOW Die -->
                <text x="184" y="276" fill="${jeForward ? '#4ade80' : '#fbbf24'}" font-size="10.5" font-weight="700" text-anchor="middle">J_E: ${jeForward ? 'Forward' : 'Reverse'}</text>
                <text x="290" y="276" fill="${jcForward ? '#4ade80' : '#fbbf24'}" font-size="10.5" font-weight="700" text-anchor="middle">J_C: ${jcForward ? 'Forward' : 'Reverse'}</text>

                <!-- Flow Direction Caption below Die -->
                <text x="256" y="294" fill="${modeColor}" font-size="11.5" font-weight="700" text-anchor="middle">
                    ${mode === 'active'
                        ? '➔ อิเล็กตรอน 98.5% แพร่ทะลุ Base สู่ Collector (I_B ≈ 1.5%)'
                        : mode === 'sat'
                        ? '➔ ฉีดพาหะทั้ง J_E และ J_C (ประจุอิ่มตัวใน Base, V_CE ≈ 0.2V) ⬅'
                        : mode === 'cutoff'
                        ? '⛔ กำแพงศักย์สูงทั้ง 2 รอยต่อ ไม่มีพาหะข้ามได้'
                        : '⬅ Collector ฉีดพาหะย้อนกลับเข้า Base → Emitter (β_R ต่ำ)'}
                </text>

                <!-- Junction & Current Summary Card -->
                <rect x="36" y="308" width="440" height="108" rx="8" fill="rgba(15, 23, 42, 0.94)" stroke="#334155"/>
                <text x="50" y="330" fill="#cbd5e1" font-size="12">
                    J_E (B-E): <tspan fill="${jeForward ? '#4ade80' : '#f87171'}" font-weight="700">${jeForward ? 'ไบแอสตรง' : 'ไบแอสกลับ'}</tspan>
                    &nbsp;|&nbsp; J_C (B-C): <tspan fill="${jcForward ? '#4ade80' : '#f87171'}" font-weight="700">${jcForward ? 'ไบแอสตรง' : 'ไบแอสกลับ'}</tspan>
                </text>
                <text x="50" y="353" fill="#a78bfa" font-size="12" font-weight="700">
                    กระแส: I_B = ${ib_uA.toFixed(0)} µA   |   I_C = ${ic_mA.toFixed(2)} mA
                </text>
                <line x1="50" y1="364" x2="462" y2="364" stroke="#1e293b"/>
                <text x="50" y="384" fill="#cbd5e1" font-size="11">${physLine1}</text>
                <text x="50" y="403" fill="#94a3b8" font-size="11">${physLine2}</text>

                <!-- SECTION 2: 4-QUADRANT OPERATING PLANE (Right) -->
                <rect x="510" y="54" width="374" height="376" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="697" y="77" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">ระนาบ 4 ย่านการทำงาน (Operating Plane)</text>

                <!-- Region Shaded Boxes -->
                <!-- Saturation: V_CE in [0, 0.8V] -->
                <rect x="${ox}" y="102" width="22" height="146" fill="rgba(56, 189, 248, 0.16)" stroke="#38bdf8" stroke-dasharray="2,2"/>
                <text x="${ox + 11}" y="96" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Sat</text>

                <!-- Forward-Active -->
                <rect x="${ox + 22}" y="102" width="248" height="146" fill="rgba(74, 222, 128, 0.08)" stroke="#4ade80" stroke-dasharray="2,2"/>
                <text x="${ox + 146}" y="124" fill="#4ade80" font-size="12" font-weight="700" text-anchor="middle">Forward-Active (ขยายเชิงเส้น)</text>

                <!-- Cutoff -->
                <rect x="${ox}" y="248" width="270" height="20" fill="rgba(251, 191, 36, 0.14)" stroke="#fbbf24" stroke-dasharray="2,2"/>
                <text x="${ox + 146}" y="262" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">Cutoff Region (I_C ≈ 0)</text>

                <!-- Reverse-Active (Negative V_CE & Negative I_C quadrant) -->
                <rect x="528" y="268" width="${ox - 528}" height="44" fill="rgba(192, 132, 252, 0.15)" stroke="#c084fc" stroke-dasharray="2,2"/>
                <text x="556" y="328" fill="#c084fc" font-size="10" font-weight="700" text-anchor="middle">Reverse-Active</text>

                <!-- Axes -->
                <line x1="526" y1="${oy}" x2="862" y2="${oy}" stroke="#94a3b8" stroke-width="1.8"/>
                <text x="862" y="${oy + 18}" fill="#94a3b8" font-size="10.5" font-weight="700" text-anchor="end">V_CE (V)</text>
                <line x1="${ox}" y1="318" x2="${ox}" y2="96" stroke="#94a3b8" stroke-width="1.8"/>
                <text x="${ox - 8}" y="104" fill="#94a3b8" font-size="10.5" font-weight="700" text-anchor="end">I_C</text>

                <!-- Live Operating Point Dot & Smart Non-Overlapping Badge -->
                <circle cx="${cx}" cy="${cy}" r="8" fill="${modeColor}" fill-opacity="0.35">
                    <animate attributeName="r" values="7;12;7" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="${cx}" cy="${cy}" r="5.5" fill="${modeColor}"/>
                <circle cx="${cx}" cy="${cy}" r="2.2" fill="#ffffff"/>

                <rect x="${opX}" y="${opY}" width="${opW}" height="${opH}" rx="5" fill="rgba(15, 23, 42, 0.96)" stroke="${modeColor}" stroke-width="1.4"/>
                <text x="${opX + opW / 2}" y="${opY + 16.5}" fill="${modeColor}" font-size="11" font-weight="700" text-anchor="middle">(${vce.toFixed(1)}V, ${ic_mA.toFixed(2)}mA)</text>

                <!-- Bottom Application Card -->
                <rect x="528" y="348" width="338" height="68" rx="8" fill="rgba(15, 23, 42, 0.92)" stroke="#334155"/>
                <text x="542" y="372" fill="#cbd5e1" font-size="12" font-weight="700">🎯 การประยุกต์ใช้งานในโหมดนี้:</text>
                <text x="542" y="396" fill="${modeColor}" font-size="12" font-weight="700">
                    ${mode === 'active' ? '• วงจรขยายสัญญาณเสียง / วิทยุอนาล็อก (Linear Amp)' : mode === 'sat' ? '• สวิตช์ปิด ON (จ่ายกระแสขับโหลดเต็มพิกัด)' : mode === 'cutoff' ? '• สวิตช์เปิด OFF (ตัดการจ่ายไฟให้โหลด)' : '• ลอจิก TTL อินพุตหลายขา & สวิตช์สองทิศทาง'}
                </text>
            </svg>
        `;

        const pGroup = document.getElementById('om-particles-group');
        let isRunning = true;

        function animOpParticles() {
            if (!isRunning) return;
            let s = '';
            particles.forEach(p => {
                if (mode === 'active') {
                    if (p.toBase) {
                        p.x += (237 - p.x) * 0.08;
                        p.y += 2.0;
                        if (p.y > 252) {
                            p.x = 46 + Math.random() * 80;
                            p.y = 152 + Math.random() * 96;
                            p.toBase = false;
                        }
                    } else {
                        const accel = (p.x >= 276 && p.x <= 310) ? 1.8 : 1.0;
                        p.x += p.vx * 1.5 * accel;
                        p.y += p.vy;
                        if (p.x >= 195 && p.x <= 275 && Math.random() < 0.015) p.toBase = true;
                        if (p.x > 466) { p.x = 46 + Math.random() * 40; p.y = 152 + Math.random() * 96; }
                    }
                } else if (mode === 'sat') {
                    p.toBase = false;
                    // Bidirectional injection into Base from both E and C
                    p.x += p.vx * 1.1;
                    p.y += p.vy * 1.3;
                    if (p.x > 464 || p.x < 46) {
                        p.x = Math.random() < 0.65 ? (48 + Math.random() * 40) : (430 + Math.random() * 30);
                        p.vx = p.x < 240 ? (1.1 + Math.random()) : -(1.1 + Math.random());
                        p.y = 152 + Math.random() * 96;
                    }
                } else if (mode === 'cutoff') {
                    p.toBase = false;
                    // Thermal jitter trapped inside Emitter (46..168) or Collector (306..464)
                    p.x += p.vx * 0.35;
                    p.y += p.vy * 0.4;
                    if (p.x > 165 && p.x < 240) { p.vx = -Math.abs(p.vx); p.x = 165; }
                    else if (p.x >= 240 && p.x < 308) { p.vx = Math.abs(p.vx); p.x = 308; }
                    else if (p.x < 46) { p.vx = Math.abs(p.vx); p.x = 46; }
                    else if (p.x > 466) { p.vx = -Math.abs(p.vx); p.x = 466; }
                } else {
                    // Reverse-Active: Collector injects leftwards into Base/Emitter slowly
                    p.toBase = false;
                    p.x -= Math.abs(p.vx) * 0.9;
                    p.y += p.vy;
                    if (p.x < 48) {
                        p.x = 420 + Math.random() * 40;
                        p.y = 152 + Math.random() * 96;
                    }
                }
                if (p.y < 150) { p.y = 150; p.vy = Math.abs(p.vy); }
                if (p.y > 250) { p.y = 250; p.vy = -Math.abs(p.vy); }

                const pColor = p.toBase ? '#fbbf24' : (mode === 'reverse' ? '#c084fc' : '#38bdf8');
                s += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.4" fill="${pColor}" opacity="0.88"/>`;
            });
            if (pGroup) pGroup.innerHTML = s;
            animId = requestAnimationFrame(animOpParticles);
        }

        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }
        animId = requestAnimationFrame(animOpParticles);

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
   4. CE AMPLIFIER SIMULATOR: AC Small-Signal, Dual Oscilloscope & Clipping
   ========================================================================= */
function initCEAmpSimulator(canvas, controls) {
    let vinPeak = 30;
    let hasBypass = true;
    let animId = null;
    let timePhase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <label>แอมพลิจูดอินพุต ($v_{in}$):</label>
            <input type="range" id="sl-ce-vin" min="5" max="100" step="5" value="${vinPeak}">
            <span class="val-badge" id="val-ce-vin">${vinPeak} mV</span>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-ce-bypass">ตัวเก็บประจุบายพาส C_E: [ON]</button>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            ⚡ ทดลองเร่ง $v_{in}$ สูงๆ เพื่อดู<b>การตัดยอดคลื่น (Clipping Distortion)</b>
        </div>
    `;
    renderMath();

    const slVin = document.getElementById('sl-ce-vin');
    const btnBypass = document.getElementById('btn-ce-bypass');

    slVin.addEventListener('input', e => {
        vinPeak = parseFloat(e.target.value);
        document.getElementById('val-ce-vin').innerText = `${vinPeak} mV`;
    });

    btnBypass.addEventListener('click', () => {
        hasBypass = !hasBypass;
        btnBypass.classList.toggle('active', hasBypass);
        btnBypass.innerText = `ตัวเก็บประจุบายพาส C_E: [${hasBypass ? 'ON' : 'OFF'}]`;
        const bypassGrp = document.getElementById('ce-bypass-flow');
        const bypassWire = document.getElementById('ce-bypass-wire');
        if (bypassGrp) bypassGrp.style.display = hasBypass ? 'inline' : 'none';
        if (bypassWire) bypassWire.setAttribute('opacity', hasBypass ? '1' : '0.28');
    });

    // Transistor at (250, 178) vertical pins: B=(214,178), C=(266,140), E=(266,216)
    canvas.innerHTML = `
        <svg viewBox="0 0 900 440" id="anim-svg">
            <!-- SECTION 1: IEEE COMPLETE CE AMPLIFIER SCHEMATIC (Left) -->
            <rect x="16" y="16" width="434" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
            <text x="233" y="42" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">วงจรขยาย Common Emitter (IEEE Standard)</text>

            <!-- VCC Rail -->
            <line x1="65" y1="66" x2="365" y2="66" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="374" y="70" fill="#f43f5e" font-size="12" font-weight="700">+12V</text>

            <!-- Resistors R1 & R2 -->
            <line x1="115" y1="66" x2="115" y2="92" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="107" y="92" width="16" height="36" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="129" y="114" fill="#38bdf8" font-size="11" font-weight="700">R₁</text>
            <line x1="115" y1="128" x2="115" y2="178" stroke="#cbd5e1" stroke-width="2"/>

            <circle cx="115" cy="178" r="3.8" fill="#a78bfa"/>

            <line x1="115" y1="178" x2="115" y2="214" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="107" y="214" width="16" height="36" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="129" y="236" fill="#38bdf8" font-size="11" font-weight="700">R₂</text>
            <line x1="115" y1="250" x2="115" y2="288" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Input Coupling Capacitor C1 & AC Source -->
            <circle cx="46" cy="178" r="14" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
            <path d="M 38 178 Q 42 172 46 178 T 54 178" stroke="#38bdf8" stroke-width="1.6" fill="none"/>
            <text x="46" y="206" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">v_in</text>
            <line x1="60" y1="178" x2="77" y2="178" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="77" y1="168" x2="77" y2="188" stroke="#38bdf8" stroke-width="2.5"/>
            <line x1="83" y1="168" x2="83" y2="188" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="80" y="160" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">C₁</text>
            <line x1="83" y1="178" x2="214" y2="178" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Animated Input Signal Pulse -->
            ${drawFlowDots('M 62 178 L 214 178', 2, 1.5, '#38bdf8', 3)}

            <!-- Transistor IEEE Symbol (pins: B=(214,178), C=(266,140), E=(266,216)) -->
            ${drawIEEETransistor(250, 178, 'NPN', 0, 1.0, { pins: 'vertical', showLabels: false })}

            <!-- Resistor RC -->
            <line x1="266" y1="66" x2="266" y2="86" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="258" y="86" width="16" height="36" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
            <text x="282" y="108" fill="#4ade80" font-size="11" font-weight="700">R_C</text>
            <line x1="266" y1="122" x2="266" y2="140" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="266" cy="134" r="3.8" fill="#4ade80"/>

            <!-- Output Coupling Capacitor C2 -->
            <line x1="266" y1="134" x2="322" y2="134" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="322" y1="124" x2="322" y2="144" stroke="#4ade80" stroke-width="2.5"/>
            <line x1="328" y1="124" x2="328" y2="144" stroke="#4ade80" stroke-width="2.5"/>
            <text x="325" y="117" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">C₂</text>
            <line x1="328" y1="134" x2="380" y2="134" stroke="#4ade80" stroke-width="2"/>
            <circle id="ce-out-node" cx="380" cy="134" r="4.5" fill="#4ade80"/>
            <text x="390" y="138" fill="#4ade80" font-size="12" font-weight="700">v_out</text>
            ${drawFlowDots('M 266 134 L 380 134', 2, 1.3, '#4ade80', 3.2)}

            <!-- Resistor RE & Bypass Capacitor CE -->
            <line x1="266" y1="216" x2="266" y2="228" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="266" cy="228" r="3.8" fill="#fbbf24"/>

            <!-- RE Branch (Left, label cleanly on left) -->
            <line x1="266" y1="228" x2="236" y2="228" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="236" y1="228" x2="236" y2="240" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="228" y="240" width="16" height="34" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="221" y="261" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">R_E</text>
            <line x1="236" y1="274" x2="236" y2="288" stroke="#cbd5e1" stroke-width="2"/>

            <!-- CE Bypass Branch (Right, label cleanly on right) -->
            <g id="ce-bypass-wire">
                <line x1="266" y1="228" x2="306" y2="228" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="306" y1="228" x2="306" y2="251" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="297" y1="251" x2="315" y2="251" stroke="#fbbf24" stroke-width="2.5"/>
                <line x1="297" y1="257" x2="315" y2="257" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="322" y="258" fill="#fbbf24" font-size="11" font-weight="700">C_E</text>
                <line x1="306" y1="257" x2="306" y2="288" stroke="#cbd5e1" stroke-width="2"/>
            </g>
            <g id="ce-bypass-flow">
                ${drawFlowDots('M 266 228 L 306 228 L 306 288', 2, 1.2, '#fbbf24', 2.8)}
            </g>

            <!-- Ground Bus -->
            <line x1="85" y1="288" x2="340" y2="288" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="210" y1="288" x2="210" y2="300" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="196" y1="300" x2="224" y2="300" stroke="#cbd5e1" stroke-width="2.2"/>
            <line x1="201" y1="305" x2="219" y2="305" stroke="#cbd5e1" stroke-width="1.6"/>

            <!-- AC Parameters Readout HUD inside Schematic -->
            <rect x="32" y="320" width="402" height="90" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
            <text id="hud-ce-gain" x="46" y="344" fill="#cbd5e1" font-size="12" font-weight="600">อัตราขยาย: A_v = -152.8x (Bypass C_E ON)</text>
            <text id="hud-ce-imp" x="46" y="368" fill="#94a3b8" font-size="11.5">Z_in ≈ 2.1 kΩ  |  Z_out ≈ R_C = 2.2 kΩ  |  r'_e = 14.4 Ω</text>
            <text id="hud-ce-dist" x="46" y="394" fill="#4ade80" font-size="12" font-weight="700">สถานะคลื่น: สัญญาณไซน์เชิงเส้นสมบูรณ์ (No Distortion)</text>

            <!-- SECTION 2: DUAL REAL-TIME OSCILLOSCOPE (Right) -->
            <rect x="464" y="16" width="420" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
            <text x="674" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">ออสซิลโลสโคปเปรียบเทียบเฟส (Dual Trace)</text>

            <!-- CH1 Screen: Input (Dedicated Header Strip y=56..80, Wave Plot y=80..202) -->
            <rect x="480" y="56" width="388" height="146" rx="6" fill="#02050c" stroke="#1e293b"/>
            <rect x="480" y="56" width="388" height="24" rx="6" fill="rgba(15, 23, 42, 0.9)"/>
            <text x="492" y="72" fill="#38bdf8" font-size="11.5" font-weight="700">CH1: v_in (Input Signal)</text>
            <text id="ch1-vpp" x="856" y="72" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">V_pp: 60 mV</text>

            <line x1="480" y1="141" x2="868" y2="141" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="577" y1="80" x2="577" y2="202" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="674" y1="80" x2="674" y2="202" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="771" y1="80" x2="771" y2="202" stroke="#1e293b" stroke-dasharray="2,2"/>
            <path id="trace-vin-ce" d="" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
            <circle id="ce-phase-dot-in" cx="577" cy="141" r="4.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.2"/>

            <!-- CH2 Screen: Output (Dedicated Header Strip y=214..238, Wave Plot y=238..410) -->
            <rect x="480" y="214" width="388" height="196" rx="6" fill="#02050c" stroke="#1e293b"/>
            <rect x="480" y="214" width="388" height="24" rx="6" fill="rgba(15, 23, 42, 0.9)"/>
            <text x="492" y="230" fill="#4ade80" font-size="11.5" font-weight="700">CH2: v_out (กลับเฟส 180°)</text>
            <text id="ch2-vpp" x="856" y="230" fill="#4ade80" font-size="11" font-weight="700" text-anchor="end">V_pp: 5.10 V</text>

            <line x1="480" y1="324" x2="868" y2="324" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="577" y1="238" x2="577" y2="410" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="674" y1="238" x2="674" y2="410" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="771" y1="238" x2="771" y2="410" stroke="#1e293b" stroke-dasharray="2,2"/>

            <!-- Clipping Limit Lines cleanly inside CH2 plot area -->
            <line x1="480" y1="260" x2="868" y2="260" stroke="#f43f5e" stroke-dasharray="4,3" stroke-width="1.1"/>
            <rect x="742" y="242" width="120" height="15" rx="3" fill="rgba(2, 5, 12, 0.88)"/>
            <text x="858" y="253" fill="#f87171" font-size="9.5" font-weight="700" text-anchor="end">Cutoff Limit (+V_CC)</text>

            <line x1="480" y1="388" x2="868" y2="388" stroke="#f43f5e" stroke-dasharray="4,3" stroke-width="1.1"/>
            <rect x="734" y="391" width="128" height="15" rx="3" fill="rgba(2, 5, 12, 0.88)"/>
            <text x="858" y="402" fill="#f87171" font-size="9.5" font-weight="700" text-anchor="end">Saturation Limit (0.2V)</text>

            <path id="trace-vout-ce" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>
            <circle id="ce-phase-dot-out" cx="577" cy="324" r="4.5" fill="#4ade80" stroke="#ffffff" stroke-width="1.2"/>
        </svg>
    `;

    const traceVin = document.getElementById('trace-vin-ce');
    const traceVout = document.getElementById('trace-vout-ce');
    const dotIn = document.getElementById('ce-phase-dot-in');
    const dotOut = document.getElementById('ce-phase-dot-out');
    const hudGain = document.getElementById('hud-ce-gain');
    const hudImp = document.getElementById('hud-ce-imp');
    const hudDist = document.getElementById('hud-ce-dist');
    const ch1Vpp = document.getElementById('ch1-vpp');
    const ch2Vpp = document.getElementById('ch2-vpp');

    let isRunning = true;

    function animateWaveforms() {
        if (!isRunning) return;
        timePhase += 0.045;

        const rePrime = 14.4;
        const RC_val = 2200;
        const RE_val = 1000;
        const actualGain = hasBypass ? (RC_val / rePrime) : (RC_val / (RE_val + rePrime));
        const zin_k = hasBypass ? 2.1 : 8.5;

        const voutPeak_mV = vinPeak * actualGain;
        const voutPeak_V = voutPeak_mV / 1000;
        const isClipped = voutPeak_V > 5.5;

        if (ch1Vpp) ch1Vpp.textContent = `V_pp: ${(vinPeak * 2).toFixed(0)} mV`;
        if (ch2Vpp) {
            ch2Vpp.textContent = `V_pp: ${Math.min(11.8, voutPeak_V * 2).toFixed(2)} V`;
            ch2Vpp.setAttribute('fill', isClipped ? '#f87171' : '#4ade80');
        }
        if (hudGain) hudGain.textContent = `อัตราขยาย: A_v = -${actualGain.toFixed(1)}x (${hasBypass ? 'Bypass C_E ON' : 'Swamped (C_E OFF)'})`;
        if (hudImp) hudImp.textContent = `Z_in ≈ ${zin_k} kΩ  |  Z_out ≈ R_C = 2.2 kΩ  |  r'_e = 14.4 Ω`;

        if (hudDist) {
            hudDist.textContent = isClipped
                ? '⚠️ เกิด Clipping Distortion! ยอดคลื่นชนขอบ Sat/Cutoff'
                : 'สถานะคลื่น: สัญญาณไซน์เชิงเส้นสมบูรณ์ (Linear)';
            hudDist.setAttribute('fill', isClipped ? '#f87171' : '#4ade80');
        }

        const w = 388;
        const x0 = 480;
        const y0_in = 141;
        const y0_out = 324;

        let dVin = '';
        let dVout = '';
        let dotInY = y0_in;
        let dotOutY = y0_out;

        for (let i = 0; i <= w; i += 3) {
            const angle = (i / w) * 4 * Math.PI + timePhase;
            const sinVal = Math.sin(angle);
            const yIn = y0_in - sinVal * (vinPeak * 0.48);

            let outOffset = sinVal * (voutPeak_V * 11.4);
            const maxClip = 63;
            if (outOffset > maxClip) outOffset = maxClip;
            if (outOffset < -maxClip) outOffset = -maxClip;

            const yOut = y0_out + outOffset; // +outOffset = inverted 180°

            if (i === 0) {
                dVin = `M ${x0 + i} ${yIn.toFixed(1)}`;
                dVout = `M ${x0 + i} ${yOut.toFixed(1)}`;
            } else {
                dVin += ` L ${x0 + i} ${yIn.toFixed(1)}`;
                dVout += ` L ${x0 + i} ${yOut.toFixed(1)}`;
            }
            if (Math.abs((x0 + i) - 577) <= 2) {
                dotInY = yIn;
                dotOutY = yOut;
            }
        }

        if (traceVin) traceVin.setAttribute('d', dVin);
        if (traceVout) {
            traceVout.setAttribute('d', dVout);
            traceVout.setAttribute('stroke', isClipped ? '#f87171' : '#4ade80');
        }
        if (dotIn) dotIn.setAttribute('cy', dotInY.toFixed(1));
        if (dotOut) {
            dotOut.setAttribute('cy', dotOutY.toFixed(1));
            dotOut.setAttribute('fill', isClipped ? '#f87171' : '#4ade80');
        }

        animId = requestAnimationFrame(animateWaveforms);
    }

    if (window.activeSim && typeof window.activeSim.stop === 'function') {
        window.activeSim.stop();
    }

    animId = requestAnimationFrame(animateWaveforms);

    window.activeSim = {
        stop: () => {
            isRunning = false;
            if (animId) cancelAnimationFrame(animId);
        }
    };
}

/* =========================================================================
   5. CB & CC (EMITTER FOLLOWER) SIMULATOR: Loading Effect & RF Bandwidth Lab
   ========================================================================= */
function initCBCCSimulator(canvas, controls) {
    let mode = 'CC';
    let RL = 1.0;
    let animId = null;
    let timePhase = 0;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-cfg-cc">⚡ Common Collector (Emitter Follower)</button>
            <button class="toggle-pill" id="btn-cfg-cb">⚡ Common Base (CB)</button>
        </div>
        <div class="ctrl-group" id="grp-cbcc-rl">
            <label>โหลดเอาต์พุต ($R_L$):</label>
            <input type="range" id="sl-cbcc-rl" min="0.05" max="10" step="0.05" value="${RL}">
            <span class="val-badge" id="val-cbcc-rl">${RL >= 1 ? RL.toFixed(1) + ' kΩ' : (RL * 1000).toFixed(0) + ' Ω'}</span>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;" id="tip-cbcc">
            💎 สังเกต <b>Loading Effect</b>: CC ขับโหลดต่ำได้ดีเยี่ยม เทียบกับต่อตรง (เส้นประแดง)
        </div>
    `;
    renderMath();

    const btnCC = document.getElementById('btn-cfg-cc');
    const btnCB = document.getElementById('btn-cfg-cb');
    const slRL = document.getElementById('sl-cbcc-rl');
    const grpRL = document.getElementById('grp-cbcc-rl');
    const tipEl = document.getElementById('tip-cbcc');

    btnCC.addEventListener('click', () => { mode = 'CC'; updatePills(); render(); });
    btnCB.addEventListener('click', () => { mode = 'CB'; updatePills(); render(); });

    function updatePills() {
        btnCC.classList.toggle('active', mode === 'CC');
        btnCB.classList.toggle('active', mode === 'CB');
        if (grpRL) grpRL.style.opacity = mode === 'CC' ? '1' : '0.45';
        if (slRL) slRL.disabled = mode !== 'CC';
        if (tipEl) {
            tipEl.innerHTML = mode === 'CC'
                ? '💎 สังเกต <b>Loading Effect</b>: CC ขับโหลดต่ำได้ดีเยี่ยม เทียบกับต่อตรง (เส้นประแดง)'
                : '📡 สังเกต <b>Common Base</b>: เฟสตรง 0° และกำจัด Miller Effect เพื่อขยายความถี่สูง RF';
        }
    }

    slRL.addEventListener('input', e => {
        RL = parseFloat(e.target.value);
        const rlStr = RL >= 1 ? RL.toFixed(1) + ' kΩ' : (RL * 1000).toFixed(0) + ' Ω';
        document.getElementById('val-cbcc-rl').innerText = rlStr;
        const schRl = document.getElementById('cc-sch-rl');
        if (schRl) schRl.textContent = `R_L=${rlStr}`;
    });

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        if (mode === 'CC') {
            const rlText = RL >= 1 ? RL.toFixed(1) + 'kΩ' : (RL * 1000).toFixed(0) + 'Ω';
            // Transistor at (235, 174) vertical pins: B=(199,174), C=(251,136), E=(251,212)
            canvas.innerHTML = `
                <svg viewBox="0 0 900 440" id="anim-svg">
                    <!-- SECTION 1: CC SCHEMATIC (Left) -->
                    <rect x="16" y="16" width="452" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                    <text x="242" y="42" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">วงจร Common Collector (Emitter Follower)</text>

                    <line x1="65" y1="68" x2="395" y2="68" stroke="#f43f5e" stroke-width="2.5"/>
                    <text x="454" y="72" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="end">+V_CC (12V)</text>

                    <!-- Collector direct to +VCC -->
                    <line x1="251" y1="68" x2="251" y2="136" stroke="#cbd5e1" stroke-width="2.2"/>
                    <circle cx="251" cy="68" r="3.5" fill="#f43f5e"/>

                    ${drawIEEETransistor(235, 174, 'NPN', 0, 1.0, { pins: 'vertical', showLabels: false })}

                    <!-- Input v_in -> C1 -> Base (199, 174) -->
                    <circle cx="52" cy="174" r="13" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
                    <path d="M 45 174 Q 48.5 168 52 174 T 59 174" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
                    <text x="52" y="202" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">v_in</text>
                    <line x1="65" y1="174" x2="96" y2="174" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="96" y1="164" x2="96" y2="184" stroke="#38bdf8" stroke-width="2.4"/>
                    <line x1="102" y1="164" x2="102" y2="184" stroke="#38bdf8" stroke-width="2.4"/>
                    <text x="99" y="156" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">C₁</text>
                    <line x1="102" y1="174" x2="199" y2="174" stroke="#38bdf8" stroke-width="2"/>

                    <!-- Emitter -> RE & Output C2 -> RL -->
                    <line x1="251" y1="212" x2="251" y2="232" stroke="#cbd5e1" stroke-width="2.2"/>
                    <circle cx="251" cy="232" r="4" fill="#4ade80"/>
                    <line x1="251" y1="232" x2="251" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="243" y="250" width="16" height="36" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                    <text x="236" y="272" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">R_E=1k</text>
                    <line x1="251" y1="286" x2="251" y2="306" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Output Coupling C2 & Load RL -->
                    <line x1="251" y1="232" x2="316" y2="232" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="316" y1="222" x2="316" y2="242" stroke="#4ade80" stroke-width="2.4"/>
                    <line x1="322" y1="222" x2="322" y2="242" stroke="#4ade80" stroke-width="2.4"/>
                    <text x="319" y="214" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">C₂</text>
                    <line x1="322" y1="232" x2="375" y2="232" stroke="#4ade80" stroke-width="2"/>
                    <circle cx="375" cy="232" r="4" fill="#4ade80"/>
                    <text x="386" y="236" fill="#4ade80" font-size="12" font-weight="700">v_out</text>

                    <line x1="375" y1="232" x2="375" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="367" y="250" width="16" height="36" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
                    <text id="cc-sch-rl" x="390" y="272" fill="#4ade80" font-size="11" font-weight="700">R_L=${rlText}</text>
                    <line x1="375" y1="286" x2="375" y2="306" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Ground Symbols -->
                    <line x1="236" y1="306" x2="266" y2="306" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="241" y1="311" x2="261" y2="311" stroke="#cbd5e1" stroke-width="1.5"/>
                    <line x1="360" y1="306" x2="390" y2="306" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="365" y1="311" x2="385" y2="311" stroke="#cbd5e1" stroke-width="1.5"/>

                    <!-- Animated Signal Dots -->
                    ${drawFlowDots('M 68 174 L 199 174', 2, 1.4, '#38bdf8', 2.8)}
                    ${drawFlowDots('M 251 212 L 251 232 L 375 232 L 375 300', 3, 1.3, '#4ade80', 3.2)}

                    <rect x="32" y="328" width="420" height="82" rx="8" fill="rgba(15,23,42,0.94)" stroke="#334155"/>
                    <text id="cc-av-text" x="46" y="352" fill="#4ade80" font-size="12" font-weight="700">A_v (Buffer) ≈ 0.985  |  ต่อตรง ≈ 0.500</text>
                    <text x="46" y="375" fill="#cbd5e1" font-size="11.5">Z_in ≈ 180 kΩ (สูงมาก)  |  Z_out ≈ 15 Ω (ต่ำมาก)</text>
                    <text x="46" y="396" fill="#94a3b8" font-size="11">เฟส: 0° (ไม่กลับเฟส) • จ่ายกระแสขับโหลดหนักได้ดีเยี่ยม</text>

                    <!-- SECTION 2: COMPARISON & LIVE OSCILLOSCOPE (Right) -->
                    <rect x="482" y="16" width="402" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                    <text x="683" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">เปรียบเทียบ Loading Effect (มี vs ไม่มี Buffer)</text>

                    <!-- Scope Screen with Header Strip -->
                    <rect x="498" y="56" width="370" height="202" rx="6" fill="#02050c" stroke="#1e293b"/>
                    <rect x="498" y="56" width="370" height="58" rx="6" fill="rgba(15, 23, 42, 0.9)"/>
                    <text x="512" y="74" fill="#38bdf8" font-size="11" font-weight="700">━━  v_in (สัญญาณต้นทาง)</text>
                    <text x="512" y="91" fill="#4ade80" font-size="11" font-weight="700">━━  v_out ผ่าน CC Buffer (เกาะตาม 0°)</text>
                    <text x="512" y="108" fill="#f87171" font-size="11" font-weight="700">- - - ต่อตรงเข้า R_L (ไม่ผ่าน Buffer: แรงดันตก!)</text>

                    <line x1="498" y1="184" x2="868" y2="184" stroke="#1e293b" stroke-dasharray="2,2"/>
                    <line x1="621" y1="114" x2="621" y2="258" stroke="#1e293b" stroke-dasharray="2,2"/>
                    <line x1="744" y1="114" x2="744" y2="258" stroke="#1e293b" stroke-dasharray="2,2"/>

                    <path id="cc-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
                    <path id="cc-trace-direct" d="" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="5,4"/>
                    <path id="cc-trace-vout" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>

                    <rect x="498" y="270" width="370" height="140" rx="8" fill="rgba(15,23,42,0.88)" stroke="#334155"/>
                    <text x="514" y="294" fill="#fbbf24" font-size="12.5" font-weight="700">🎯 การประยุกต์ใช้งานเด่นของ Emitter Follower:</text>
                    <text x="514" y="318" fill="#cbd5e1" font-size="11.5">• <tspan fill="#f1f5f9" font-weight="700">วงจรบัฟเฟอร์ (Buffer):</tspan> ป้องกันโหลดดึงแรงดันตก</text>
                    <text x="514" y="340" fill="#cbd5e1" font-size="11.5">• <tspan fill="#f1f5f9" font-weight="700">Impedance Matching:</tspan> เชื่อมแหล่ง Z สูงเข้าโหลดต่ำ</text>
                    <text x="514" y="362" fill="#cbd5e1" font-size="11.5">• <tspan fill="#f1f5f9" font-weight="700">Power Output Stage:</tspan> ขับลำโพง 4Ω–8Ω / หูฟัง</text>
                    <text id="cc-loss-note" x="514" y="392" fill="#4ade80" font-size="11" font-weight="700">ลองปรับ R_L ลงเหลือ 50–200 Ω เพื่อดูความต่าง!</text>
                </svg>
            `;

            const trVin = document.getElementById('cc-trace-vin');
            const trVout = document.getElementById('cc-trace-vout');
            const trDirect = document.getElementById('cc-trace-direct');
            const avText = document.getElementById('cc-av-text');
            const lossNote = document.getElementById('cc-loss-note');

            let isRunning = true;
            function animCCScope() {
                if (!isRunning) return;
                timePhase += 0.05;

                const rePrime = 15.0;
                const RE_ohm = 1000.0;
                const RL_ohm = RL * 1000.0;
                const Zs_ohm = 1000.0; // Typical sensor/preamp source impedance 1kΩ
                const Reff = (RE_ohm * RL_ohm) / (RE_ohm + RL_ohm);
                const actualAv = Reff / (rePrime + Reff);
                const directAv = RL_ohm / (Zs_ohm + RL_ohm);

                if (avText) avText.textContent = `A_v (CC Buffer) = ${actualAv.toFixed(3)}  |  ต่อตรง = ${directAv.toFixed(3)}`;
                if (lossNote) {
                    const savedPct = Math.max(0, (actualAv - directAv) * 100);
                    lossNote.textContent = `💡 Buffer ช่วยรักษาแรงดันไว้ได้สูงกว่าต่อตรง +${savedPct.toFixed(1)}%`;
                }

                const w = 370;
                const x0 = 498;
                const y0 = 184;
                let dIn = '';
                let dOut = '';
                let dDir = '';

                for (let i = 0; i <= w; i += 4) {
                    const ang = (i / w) * 4 * Math.PI + timePhase;
                    const sinVal = Math.sin(ang);
                    const yIn = y0 - sinVal * 52;
                    const yOut = y0 - sinVal * (52 * actualAv);
                    const yDir = y0 - sinVal * (52 * directAv);

                    if (i === 0) {
                        dIn = `M ${x0 + i} ${yIn.toFixed(1)}`;
                        dOut = `M ${x0 + i} ${yOut.toFixed(1)}`;
                        dDir = `M ${x0 + i} ${yDir.toFixed(1)}`;
                    } else {
                        dIn += ` L ${x0 + i} ${yIn.toFixed(1)}`;
                        dOut += ` L ${x0 + i} ${yOut.toFixed(1)}`;
                        dDir += ` L ${x0 + i} ${yDir.toFixed(1)}`;
                    }
                }

                if (trVin) trVin.setAttribute('d', dIn);
                if (trVout) trVout.setAttribute('d', dOut);
                if (trDirect) trDirect.setAttribute('d', dDir);

                animId = requestAnimationFrame(animCCScope);
            }

            animId = requestAnimationFrame(animCCScope);
            window.activeSim = {
                stop: () => {
                    isRunning = false;
                    if (animId) cancelAnimationFrame(animId);
                }
            };
        } else {
            // Common Base (CB) Mode — NOW WITH LIVE RF OSCILLOSCOPE & BANDWIDTH ANIMATION!
            // Transistor at (240, 174) vertical pins: B=(204,174), C=(256,136), E=(256,212)
            canvas.innerHTML = `
                <svg viewBox="0 0 900 440" id="anim-svg">
                    <!-- SECTION 1: CB SCHEMATIC (Left) -->
                    <rect x="16" y="16" width="452" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                    <text x="242" y="42" fill="#4ade80" font-size="14" font-weight="700" text-anchor="middle">วงจรขยาย Common Base (CB - ความถี่สูง RF)</text>

                    <line x1="65" y1="68" x2="395" y2="68" stroke="#f43f5e" stroke-width="2.5"/>
                    <text x="454" y="72" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="end">+V_CC (12V)</text>

                    <!-- RC -->
                    <line x1="256" y1="68" x2="256" y2="86" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="248" y="86" width="16" height="36" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
                    <text x="272" y="108" fill="#4ade80" font-size="11" font-weight="700">R_C</text>
                    <line x1="256" y1="122" x2="256" y2="136" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="256" cy="130" r="3.8" fill="#4ade80"/>

                    ${drawIEEETransistor(240, 174, 'NPN', 0, 1.0, { pins: 'vertical', showLabels: false })}

                    <!-- Base Bypass Capacitor CB to AC Ground -->
                    <line x1="204" y1="174" x2="146" y2="174" stroke="#a78bfa" stroke-width="2"/>
                    <line x1="146" y1="174" x2="146" y2="220" stroke="#a78bfa" stroke-width="2"/>
                    <line x1="137" y1="220" x2="155" y2="220" stroke="#a78bfa" stroke-width="2.5"/>
                    <line x1="137" y1="226" x2="155" y2="226" stroke="#a78bfa" stroke-width="2.5"/>
                    <text x="128" y="227" fill="#a78bfa" font-size="11" font-weight="700" text-anchor="end">C_B</text>
                    <text x="128" y="196" fill="#a78bfa" font-size="10" text-anchor="end">AC Ground</text>
                    <line x1="146" y1="226" x2="146" y2="255" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="132" y1="255" x2="160" y2="255" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="137" y1="260" x2="155" y2="260" stroke="#cbd5e1" stroke-width="1.5"/>

                    <!-- Emitter Resistor RE & Input v_in into Emitter -->
                    <line x1="256" y1="212" x2="256" y2="232" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="256" cy="232" r="4" fill="#38bdf8"/>
                    <line x1="256" y1="232" x2="256" y2="252" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="248" y="252" width="16" height="34" rx="2" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                    <text x="240" y="273" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">R_E</text>
                    <line x1="256" y1="286" x2="256" y2="306" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="241" y1="306" x2="271" y2="306" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="246" y1="311" x2="266" y2="311" stroke="#cbd5e1" stroke-width="1.5"/>

                    <!-- Input Coupling C1 to Emitter -->
                    <line x1="256" y1="232" x2="312" y2="232" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="312" y1="222" x2="312" y2="242" stroke="#38bdf8" stroke-width="2.4"/>
                    <line x1="318" y1="222" x2="318" y2="242" stroke="#38bdf8" stroke-width="2.4"/>
                    <text x="315" y="214" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">C₁</text>
                    <line x1="318" y1="232" x2="352" y2="232" stroke="#38bdf8" stroke-width="2"/>
                    <circle cx="352" cy="232" r="4" fill="#38bdf8"/>
                    <text x="362" y="236" fill="#38bdf8" font-size="11.5" font-weight="700">v_in (Emitter)</text>

                    <!-- Output Coupling C2 from Collector -->
                    <line x1="256" y1="130" x2="312" y2="130" stroke="#4ade80" stroke-width="2"/>
                    <line x1="312" y1="120" x2="312" y2="140" stroke="#4ade80" stroke-width="2.4"/>
                    <line x1="318" y1="120" x2="318" y2="140" stroke="#4ade80" stroke-width="2.4"/>
                    <text x="315" y="113" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">C₂</text>
                    <line x1="318" y1="130" x2="365" y2="130" stroke="#4ade80" stroke-width="2"/>
                    <circle cx="365" cy="130" r="4" fill="#4ade80"/>
                    <text x="375" y="134" fill="#4ade80" font-size="12" font-weight="700">v_out</text>

                    <!-- Animated Signal Dots (Emitter IN -> Collector OUT) -->
                    ${drawFlowDots('M 352 232 L 256 232 L 256 212', 2, 1.3, '#38bdf8', 3)}
                    ${drawFlowDots('M 256 136 L 256 130 L 365 130', 2, 1.2, '#4ade80', 3.2)}

                    <rect x="32" y="328" width="420" height="82" rx="8" fill="rgba(15,23,42,0.94)" stroke="#334155"/>
                    <text x="46" y="352" fill="#4ade80" font-size="12" font-weight="700">A_v ≈ +85x (เฟสตรงกัน 0° ไม่กลับเฟส!)</text>
                    <text x="46" y="375" fill="#cbd5e1" font-size="11.5">Z_in ≈ 15 Ω (ต่ำมาก)  |  Z_out ≈ 2.2 kΩ (สูง)</text>
                    <text x="46" y="396" fill="#94a3b8" font-size="11">A_i ≈ α &lt; 1 (≈ 0.99) • ป้องกัน Miller Capacitance 100%</text>

                    <!-- SECTION 2: LIVE RF OSCILLOSCOPE & BANDWIDTH (Right) -->
                    <rect x="482" y="16" width="402" height="408" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                    <text x="683" y="42" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">รูปคลื่นความถี่สูง &amp; การกำจัด Miller Effect</text>

                    <!-- Live Scope -->
                    <rect x="498" y="56" width="370" height="172" rx="6" fill="#02050c" stroke="#1e293b"/>
                    <rect x="498" y="56" width="370" height="40" rx="6" fill="rgba(15, 23, 42, 0.9)"/>
                    <text x="512" y="73" fill="#38bdf8" font-size="11" font-weight="700">━━  v_in (สัญญาณ RF ที่ขา Emitter)</text>
                    <text x="512" y="90" fill="#4ade80" font-size="11" font-weight="700">━━  v_out (ขยายสูงที่ Collector • เฟสตรง 0°)</text>
                    <line x1="498" y1="162" x2="868" y2="162" stroke="#1e293b" stroke-dasharray="2,2"/>
                    <path id="cb-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="2"/>
                    <path id="cb-trace-vout" d="" fill="none" stroke="#4ade80" stroke-width="2.4"/>

                    <!-- Bandwidth Comparison Chart -->
                    <rect x="498" y="238" width="370" height="92" rx="8" fill="rgba(74,222,128,0.06)" stroke="#4ade80" stroke-width="1.2"/>
                    <text x="512" y="259" fill="#4ade80" font-size="12" font-weight="700">💎 เปรียบเทียบแบนด์วิดท์ (Bandwidth / Miller Effect)</text>
                    <text x="512" y="282" fill="#94a3b8" font-size="11">CE Amp:</text>
                    <rect x="572" y="271" width="75" height="13" rx="3" fill="#f87171" fill-opacity="0.75"/>
                    <text x="655" y="282" fill="#fca5a5" font-size="10.5">แคบ (C_bc ขยายเป็น C_M)</text>

                    <text x="512" y="308" fill="#cbd5e1" font-size="11" font-weight="700">CB Amp:</text>
                    <rect x="572" y="297" width="225" height="13" rx="3" fill="#4ade80">
                        <animate attributeName="opacity" values="0.75;1;0.75" dur="1.6s" repeatCount="indefinite"/>
                    </rect>
                    <text x="804" y="308" fill="#4ade80" font-size="10.5" font-weight="700">กว้าง RF!</text>

                    <!-- Applications Box -->
                    <rect x="498" y="340" width="370" height="72" rx="8" fill="rgba(15,23,42,0.88)" stroke="#334155"/>
                    <text x="512" y="362" fill="#38bdf8" font-size="12" font-weight="700">🎯 การประยุกต์ใช้งานจริงของ Common Base:</text>
                    <text x="512" y="382" fill="#cbd5e1" font-size="11">• <tspan fill="#f1f5f9" font-weight="700">วงจรขยายวิทยุ RF/VHF/UHF</tspan> และภาครับสายอากาศ</text>
                    <text x="512" y="400" fill="#cbd5e1" font-size="11">• <tspan fill="#f1f5f9" font-weight="700">พรีแอมป์ไมค์ Moving-Coil</tspan> อิมพีแดนซ์ต่ำ (~15Ω)</text>
                </svg>
            `;

            const trVin = document.getElementById('cb-trace-vin');
            const trVout = document.getElementById('cb-trace-vout');
            let isRunning = true;

            function animCBScope() {
                if (!isRunning) return;
                timePhase += 0.09; // Faster RF carrier wave

                const w = 370;
                const x0 = 498;
                const y0 = 162;
                let dIn = '';
                let dOut = '';

                for (let i = 0; i <= w; i += 3) {
                    const ang = (i / w) * 8 * Math.PI + timePhase;
                    const env = 0.72 + 0.28 * Math.sin((i / w) * 2 * Math.PI - timePhase * 0.25);
                    const sinVal = Math.sin(ang) * env;
                    const yIn = y0 - sinVal * 15;
                    const yOut = y0 - sinVal * 54;

                    if (i === 0) {
                        dIn = `M ${x0 + i} ${yIn.toFixed(1)}`;
                        dOut = `M ${x0 + i} ${yOut.toFixed(1)}`;
                    } else {
                        dIn += ` L ${x0 + i} ${yIn.toFixed(1)}`;
                        dOut += ` L ${x0 + i} ${yOut.toFixed(1)}`;
                    }
                }

                if (trVin) trVin.setAttribute('d', dIn);
                if (trVout) trVout.setAttribute('d', dOut);

                animId = requestAnimationFrame(animCBScope);
            }

            animId = requestAnimationFrame(animCBScope);
            window.activeSim = {
                stop: () => {
                    isRunning = false;
                    if (animId) cancelAnimationFrame(animId);
                }
            };
        }
    }

    updatePills();
    render();
}

/* =========================================================================
   6. BJT SWITCH SIMULATOR: Inductive Relay, Flyback Diode & Darlington
   ========================================================================= */
function initSwitchSimulator(canvas, controls) {
    let switchType = 'single';
    let loadType = 'relay';
    let hasFlyback = true;
    let Vin = 0.0;
    let prevON = false;
    let spikeFlash = 0;
    let animId = null;

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-sw-relay">โหลดขดลวดรีเลย์ (Inductive)</button>
            <button class="toggle-pill" id="btn-sw-led">โหลด LED (Resistive)</button>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-sw-flyback">Flyback Diode: [มีไดโอด ปลอดภัย]</button>
        </div>
        <div class="ctrl-group">
            <label>แรงดันอินพุต ($V_{in}$):</label>
            <input type="range" id="sl-sw-vin" min="0.0" max="5.0" step="0.1" value="${Vin}">
            <span class="val-badge" id="val-sw-vin">${Vin.toFixed(1)} V</span>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill" id="btn-sw-pair">โครงสร้าง: Single BJT</button>
        </div>
        <button class="btn-control" id="btn-sw-toggle-fast" style="margin-left:auto;">⚡ สลับ 0V ↔ 5V</button>
    `;
    renderMath();

    const btnRelay = document.getElementById('btn-sw-relay');
    const btnLed = document.getElementById('btn-sw-led');
    const btnFlyback = document.getElementById('btn-sw-flyback');
    const slVin = document.getElementById('sl-sw-vin');
    const btnPair = document.getElementById('btn-sw-pair');
    const btnToggle = document.getElementById('btn-sw-toggle-fast');

    btnRelay.addEventListener('click', () => {
        loadType = 'relay';
        btnRelay.classList.add('active');
        btnLed.classList.remove('active');
        btnFlyback.disabled = false;
        btnFlyback.style.opacity = '1';
        render();
    });

    btnLed.addEventListener('click', () => {
        loadType = 'led';
        btnLed.classList.add('active');
        btnRelay.classList.remove('active');
        btnFlyback.disabled = true;
        btnFlyback.style.opacity = '0.45';
        render();
    });

    btnFlyback.addEventListener('click', () => {
        hasFlyback = !hasFlyback;
        btnFlyback.classList.toggle('active', hasFlyback);
        btnFlyback.innerText = `Flyback Diode: [${hasFlyback ? 'มีไดโอด ปลอดภัย' : 'ไม่มีไดโอด อันตราย!'}]`;
        btnFlyback.style.borderColor = hasFlyback ? '#4ade80' : '#f87171';
        render();
    });

    slVin.addEventListener('input', e => {
        Vin = parseFloat(e.target.value);
        document.getElementById('val-sw-vin').innerText = `${Vin.toFixed(1)} V`;
        render();
    });

    btnPair.addEventListener('click', () => {
        switchType = switchType === 'single' ? 'darlington' : 'single';
        btnPair.classList.toggle('active', switchType === 'darlington');
        btnPair.innerText = `โครงสร้าง: ${switchType === 'single' ? 'Single BJT' : 'Darlington Pair'}`;
        render();
    });

    btnToggle.addEventListener('click', () => {
        Vin = Vin >= 2.5 ? 0.0 : 5.0;
        slVin.value = Vin;
        document.getElementById('val-sw-vin').innerText = `${Vin.toFixed(1)} V`;
        render();
    });

    // Transient V_CE history buffer for mini oscilloscope
    const vceHistory = new Array(80).fill(12.0);

    function render() {
        if (window.activeSim && typeof window.activeSim.stop === 'function') {
            window.activeSim.stop();
        }

        const isDarlington = switchType === 'darlington';
        const vbeThreshold = isDarlington ? 1.4 : 0.7;
        const isON = Vin >= vbeThreshold;
        const RB = 4.7;
        const betaEff = isDarlington ? 5000 : 100;
        const vceSat = isDarlington ? 0.9 : 0.2;

        const VBE = isON ? vbeThreshold : Vin;
        const IB_uA = isON ? ((Vin - vbeThreshold) / RB) * 1000 : 0;
        const IC_sat_mA = loadType === 'relay' ? (12.0 - vceSat) / 0.16 : (5.0 - 2.0 - vceSat) / 0.15;
        let IC_mA = isON ? Math.min(IC_sat_mA, (IB_uA * betaEff) / 1000) : 0;

        let VCE = vceSat;
        let switchStatus = 'CLOSED / ON (Saturation)';
        let statusColor = '#4ade80';

        if (!isON) {
            VCE = loadType === 'relay' ? 12.0 : 5.0;
            switchStatus = 'OPEN / OFF (Cutoff)';
            statusColor = '#94a3b8';
            IC_mA = 0;
        }

        if (prevON && !isON && loadType === 'relay') {
            spikeFlash = 1.0;
        }
        prevON = isON;

        const showSpike = (!hasFlyback) && (!isON) && (loadType === 'relay');
        const showFreewheel = hasFlyback && (!isON) && (loadType === 'relay');

        // Pin coordinates:
        // Single BJT at (294, 240) scale 1.0: B=(258,240), C=(310,202), E=(310,278)
        // Darlington: Q1 at (232, 224) scale 0.78 -> B=(203.9, 224), C=(244.5, 194.4), E=(244.5, 253.6)
        //             Q2 at (298, 256) scale 0.78 -> B=(269.9, 256), C=(310.5, 226.4), E=(310.5, 285.6)
        const baseWireY = isDarlington ? 224 : 240;
        const basePinX = isDarlington ? 204 : 258;
        const basePath = `M 92 ${baseWireY} L ${basePinX} ${baseWireY}`;
        const collPath = 'M 310 66 L 310 202';
        const emitPath = 'M 310 278 L 310 322';
        const freewheelPath = 'M 310 144 L 378 144 L 378 86 L 310 86 Z';

        canvas.innerHTML = `
            <svg viewBox="0 0 900 440" id="anim-svg">
                <!-- SECTION 1: IEEE SCHEMATIC (Left) -->
                <rect x="16" y="16" width="464" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="248" y="42" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">
                    ${loadType === 'relay' ? 'วงจรสวิตช์ BJT ขับขดลวดรีเลย์ (Inductive Load)' : 'วงจรสวิตช์ BJT ขับหลอด LED (Resistive Load)'}
                </text>

                <!-- +VCC Rail -->
                <line x1="65" y1="66" x2="410" y2="66" stroke="#f43f5e" stroke-width="2.5"/>
                <text x="418" y="70" fill="#f43f5e" font-size="12" font-weight="700">${loadType === 'relay' ? '+12V' : '+5V'}</text>

                ${loadType === 'relay' ? `
                    <!-- Relay Coil at x=310, y=86..144 -->
                    <line x1="310" y1="66" x2="310" y2="86" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="296" y="86" width="28" height="58" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.6"/>
                    <path d="M 310 91 Q 321 99 310 107 Q 321 115 310 123 Q 321 131 310 139" stroke="#38bdf8" stroke-width="2" fill="none"/>
                    <text x="284" y="114" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="end">Relay Coil</text>
                    <text x="284" y="130" fill="${isON ? '#4ade80' : '#64748b'}" font-size="10.5" font-weight="700" text-anchor="end">${isON ? '⚡ แม่เหล็ก ON' : 'OFF'}</text>

                    ${isON ? `
                        <!-- Animated Magnetic Field Waves -->
                        <path d="M 289 96 Q 282 115 289 134" stroke="#38bdf8" stroke-width="1.8" fill="none">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="0.9s" repeatCount="indefinite"/>
                        </path>
                        <path d="M 331 96 Q 338 115 331 134" stroke="#38bdf8" stroke-width="1.8" fill="none">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="0.9s" begin="0.3s" repeatCount="indefinite"/>
                        </path>
                    ` : ''}

                    ${hasFlyback ? `
                        <!-- Flyback Diode Parallel Loop at x=378 -->
                        <line x1="310" y1="86" x2="378" y2="86" stroke="#4ade80" stroke-width="1.8"/>
                        <line x1="378" y1="86" x2="378" y2="144" stroke="#4ade80" stroke-width="1.8"/>
                        <line x1="378" y1="144" x2="310" y2="144" stroke="#4ade80" stroke-width="1.8"/>
                        <polygon points="370,122 386,122 378,108" fill="#4ade80"/>
                        <line x1="368" y1="108" x2="388" y2="108" stroke="#4ade80" stroke-width="2.2"/>
                        <text x="395" y="112" fill="#4ade80" font-size="10.5" font-weight="700">Flyback</text>
                        <text x="395" y="126" fill="#4ade80" font-size="10.5" font-weight="700">Diode</text>
                        ${showFreewheel ? drawFlowDots(freewheelPath, 4, 1.1, '#4ade80', 3.4) : ''}
                    ` : `
                        <rect x="352" y="102" width="108" height="24" rx="4" fill="rgba(248,113,113,0.12)" stroke="#f87171" stroke-dasharray="3,2"/>
                        <text x="406" y="118" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">[ไม่มีไดโอด!]</text>
                    `}

                    <line x1="310" y1="144" x2="310" y2="176" stroke="#cbd5e1" stroke-width="2"/>

                    ${showSpike ? `
                        <!-- Clean Non-overlapping Spike Warning at Collector Node (310, 162) -->
                        <path d="M 304 156 L 315 162 L 303 167 L 318 175" stroke="#f43f5e" stroke-width="2.6" fill="none">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="0.45s" repeatCount="indefinite"/>
                        </path>
                        <rect x="330" y="148" width="136" height="26" rx="5" fill="rgba(239, 68, 68, 0.25)" stroke="#f87171" stroke-width="1.5"/>
                        <text x="398" y="165" fill="#fca5a5" font-size="11.5" font-weight="700" text-anchor="middle">⚡ SPIKE &gt; 250V!</text>
                    ` : ''}
                ` : `
                    <!-- LED Load at x=310 -->
                    <line x1="310" y1="66" x2="310" y2="92" stroke="#cbd5e1" stroke-width="2"/>
                    ${isON ? `
                        <circle cx="310" cy="106" r="24" fill="#4ade80" fill-opacity="0.22">
                            <animate attributeName="r" values="20;27;20" dur="1.1s" repeatCount="indefinite"/>
                        </circle>
                        <line x1="325" y1="98" x2="342" y2="88" stroke="#4ade80" stroke-width="2"/>
                        <line x1="328" y1="109" x2="345" y2="99" stroke="#4ade80" stroke-width="2"/>
                    ` : ''}
                    <polygon points="299,96 321,96 310,115" fill="${isON ? '#4ade80' : '#334155'}" stroke="${isON ? '#22c55e' : '#64748b'}" stroke-width="1.6"/>
                    <line x1="299" y1="115" x2="321" y2="115" stroke="${isON ? '#22c55e' : '#64748b'}" stroke-width="2.2"/>
                    <text x="284" y="110" fill="${isON ? '#4ade80' : '#94a3b8'}" font-size="11.5" font-weight="700" text-anchor="end">LED</text>

                    <line x1="310" y1="115" x2="310" y2="132" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="302" y="132" width="16" height="32" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                    <text x="326" y="152" fill="#38bdf8" font-size="11" font-weight="700">150Ω</text>
                    <line x1="310" y1="164" x2="310" y2="176" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <!-- Transistor Switch Section -->
                ${isDarlington ? `
                    <!-- Shared Collector Bus at y=176 -->
                    <line x1="310" y1="176" x2="310" y2="226" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="310" y1="176" x2="244.5" y2="176" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="244.5" y1="176" x2="244.5" y2="194" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="310" cy="176" r="3.5" fill="#38bdf8"/>

                    <!-- Q1 -> Q2 Emitter-to-Base connection -->
                    <line x1="244.5" y1="254" x2="244.5" y2="256" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="244.5" y1="256" x2="270" y2="256" stroke="#cbd5e1" stroke-width="2"/>

                    ${drawIEEETransistor(232, 224, 'NPN', 0, 0.78, { pins: 'vertical', showLabels: false })}
                    ${drawIEEETransistor(298, 256, 'NPN', 0, 0.78, { pins: 'vertical', showLabels: false })}

                    <!-- Q2 Emitter to Ground -->
                    <line x1="310.5" y1="286" x2="310.5" y2="322" stroke="#cbd5e1" stroke-width="2"/>

                    <!-- Darlington Bounding Box & Non-overlapping Label -->
                    <rect x="192" y="182" width="146" height="122" rx="8" fill="none" stroke="#a78bfa" stroke-width="1.3" stroke-dasharray="4,3"/>
                    <text x="192" y="320" fill="#a78bfa" font-size="11" font-weight="700">Darlington (β ≈ 5,000)</text>
                ` : `
                    <line x1="310" y1="176" x2="310" y2="202" stroke="#cbd5e1" stroke-width="2"/>
                    ${drawIEEETransistor(294, 240, 'NPN', 0, 1.0, { pins: 'vertical', showLabels: false })}
                    <line x1="310" y1="278" x2="310" y2="322" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <!-- Ground Symbol -->
                <line x1="295" y1="322" x2="325" y2="322" stroke="#cbd5e1" stroke-width="2.2"/>
                <line x1="300" y1="327" x2="320" y2="327" stroke="#cbd5e1" stroke-width="1.8"/>
                <line x1="305" y1="332" x2="315" y2="332" stroke="#cbd5e1" stroke-width="1.4"/>

                <!-- Base Input Stage (RB & Vin MCU) -->
                <line x1="${basePinX}" y1="${baseWireY}" x2="165" y2="${baseWireY}" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="122" y="${baseWireY - 9}" width="43" height="18" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="143.5" y="${baseWireY - 15}" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">R_B = 4.7k</text>
                <line x1="122" y1="${baseWireY}" x2="90" y2="${baseWireY}" stroke="#cbd5e1" stroke-width="2"/>

                <rect x="36" y="${baseWireY - 21}" width="54" height="42" rx="6" fill="#1e1b4b" stroke="${isON ? '#4ade80' : '#38bdf8'}" stroke-width="1.8"/>
                <text x="63" y="${baseWireY + 5}" fill="${isON ? '#4ade80' : '#38bdf8'}" font-size="13" font-weight="700" text-anchor="middle">${Vin.toFixed(1)}V</text>
                <text x="63" y="${baseWireY + 35}" fill="#94a3b8" font-size="10.5" font-weight="600" text-anchor="middle">V_in (MCU)</text>

                <!-- Animated Current Pulses when Switch is ON -->
                ${isON ? drawFlowDots(basePath, 2, 1.3, '#c084fc', 2.8) : ''}
                ${isON ? drawFlowDots(collPath, 3, 0.9, '#4ade80', 3.4) : ''}
                ${isON ? drawFlowDots(emitPath, 2, 0.9, '#38bdf8', 3.4) : ''}

                <!-- Switch Quick Legend inside Bottom-Left -->
                <rect x="32" y="346" width="432" height="62" rx="8" fill="rgba(15,23,42,0.88)" stroke="#334155"/>
                <text x="46" y="370" fill="#cbd5e1" font-size="11.5">
                    เกณฑ์เปิดสวิตช์: <tspan fill="#a78bfa" font-weight="700">V_BE ≥ ${vbeThreshold.toFixed(1)} V</tspan> (${isDarlington ? 'Darlington 2×0.7V' : 'Single BJT'})
                </text>
                <text x="46" y="392" fill="${isON ? '#4ade80' : '#94a3b8'}" font-size="11.5" font-weight="700">
                    ${isON ? `✅ กระแส I_C = ${IC_mA.toFixed(1)} mA ไหลผ่านโหลดครบวงจร` : '⚪ วงจรเปิด (Cutoff): ไม่มีกระแสไหลผ่านตัวทรานซิสเตอร์'}
                </text>

                <!-- SECTION 2: DASHBOARD, DMM & LIVE V_CE(t) WAVEFORM (Right) -->
                <rect x="494" y="16" width="390" height="408" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="689" y="42" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">สถานะ, มัลติมิเตอร์ &amp; กราฟ V_CE(t)</text>

                <!-- Status Banner -->
                <rect x="512" y="56" width="354" height="52" rx="8" fill="rgba(15,23,42,0.92)" stroke="${showSpike ? '#f87171' : statusColor}" stroke-width="2"/>
                <text x="689" y="79" fill="${showSpike ? '#f87171' : statusColor}" font-size="14" font-weight="700" text-anchor="middle">
                    ${showSpike ? '⚠️ วิกฤต: เกิด Back-EMF กระชาก!' : switchStatus}
                </text>
                <text x="689" y="99" fill="#cbd5e1" font-size="11.5" text-anchor="middle">V_CE = ${VCE.toFixed(2)} V   |   I_Load = ${IC_mA.toFixed(1)} mA</text>

                <!-- DMM Readout -->
                <rect x="512" y="116" width="354" height="106" rx="8" fill="rgba(15,23,42,0.72)" stroke="#334155"/>
                <text x="526" y="138" fill="#cbd5e1" font-size="11.5">แรงดันควบคุม V_in:</text>
                <text x="852" y="138" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="end">${Vin.toFixed(1)} V</text>
                <line x1="526" y1="146" x2="852" y2="146" stroke="#1e293b"/>

                <text x="526" y="164" fill="#cbd5e1" font-size="11.5">แรงดันตกคร่อมรอยต่อ V_BE:</text>
                <text x="852" y="164" fill="#a78bfa" font-size="11.5" font-weight="700" text-anchor="end">${VBE.toFixed(2)} V</text>
                <line x1="526" y1="172" x2="852" y2="172" stroke="#1e293b"/>

                <text x="526" y="190" fill="#cbd5e1" font-size="11.5">กระแสขับเบส I_B:</text>
                <text x="852" y="190" fill="#c084fc" font-size="11.5" font-weight="700" text-anchor="end">${IB_uA.toFixed(0)} µA</text>
                <line x1="526" y1="198" x2="852" y2="198" stroke="#1e293b"/>

                <text x="526" y="215" fill="#cbd5e1" font-size="11.5">กำลังงานสูญเสียในสวิตช์ P_D:</text>
                <text x="852" y="215" fill="#4ade80" font-size="11.5" font-weight="700" text-anchor="end">${(VCE * IC_mA).toFixed(1)} mW</text>

                <!-- Live V_CE(t) Transient Oscilloscope -->
                <rect x="512" y="232" width="354" height="94" rx="8" fill="#02050c" stroke="#1e293b"/>
                <rect x="512" y="232" width="354" height="20" rx="6" fill="rgba(15, 23, 42, 0.9)"/>
                <text x="524" y="246" fill="#cbd5e1" font-size="10.5" font-weight="700">กราฟแรงดันขา Collector V_CE(t)</text>
                <text id="sw-scope-peak" x="854" y="246" fill="${showSpike ? '#f87171' : '#4ade80'}" font-size="10.5" font-weight="700" text-anchor="end">${showSpike ? 'Spike > 250V!' : `Clamp ≤ ${(loadType==='relay'?12.7:5.0).toFixed(1)}V`}</text>
                <line x1="512" y1="308" x2="866" y2="308" stroke="#1e293b" stroke-dasharray="2,2"/>
                <line x1="512" y1="286" x2="866" y2="286" stroke="#334155" stroke-dasharray="3,3"/>
                <text x="520" y="283" fill="#64748b" font-size="9">+12V</text>
                <path id="sw-vce-trace" d="" fill="none" stroke="${showSpike ? '#f87171' : '#38bdf8'}" stroke-width="2.2"/>

                <!-- Protection Summary Box (Wrapped cleanly inside 354px width) -->
                <rect x="512" y="334" width="354" height="76" rx="8" fill="rgba(15,23,42,0.92)" stroke="${loadType === 'led' ? '#38bdf8' : hasFlyback ? '#4ade80' : '#f87171'}"/>
                <text x="526" y="356" fill="${loadType === 'led' ? '#38bdf8' : hasFlyback ? '#4ade80' : '#f87171'}" font-size="12" font-weight="700">
                    ${loadType === 'led'
                        ? '💡 โหลดต้านทาน (LED): ไม่มีพลังงานแม่เหล็กสะสม'
                        : hasFlyback
                        ? '🛡️ มี Flyback Diode: ปลอดภัย 100%'
                        : '⚠️ ไม่มี Flyback Diode: เสี่ยงพังทลาย!'}
                </text>
                <text x="526" y="378" fill="#cbd5e1" font-size="11">
                    ${loadType === 'led'
                        ? 'ตัวต้านทาน 150Ω ช่วยจำกัดกระแสผ่าน LED ไม่ให้ขาด'
                        : hasFlyback
                        ? 'เมื่อตัดสวิตช์ กระแสเหนี่ยวนำจะไหลวนผ่านไดโอด'
                        : 'เมื่อตัดสวิตช์ Back-EMF จะพุ่งกระชากทะลุ 250V'}
                </text>
                <text x="526" y="396" fill="#94a3b8" font-size="11">
                    ${loadType === 'led'
                        ? 'แรงดัน V_CE สวิงอย่างนุ่มนวลระหว่าง 0.2V ถึง 5.0V'
                        : hasFlyback
                        ? 'แรงดันถูกจำกัดไว้ไม่เกิน V_CC + 0.7V ไม่มี Spike'
                        : 'ทำลายรอยต่อ B-C ของทรานซิสเตอร์ทันที (ลองกดปุ่มสลับ 0↔5V)'}
                </text>
            </svg>
        `;

        const traceEl = document.getElementById('sw-vce-trace');
        let isRunning = true;

        function animSwitchScope() {
            if (!isRunning) return;

            let sampleV = VCE;
            if (spikeFlash > 0.02) {
                if (!hasFlyback && loadType === 'relay') {
                    // Huge damped ringing Back-EMF spike
                    sampleV = 12.0 + spikeFlash * 42.0 * Math.abs(Math.sin(spikeFlash * 18));
                } else if (hasFlyback && loadType === 'relay') {
                    // Smoothly clamped at 12.7V
                    sampleV = 12.0 + spikeFlash * 0.7;
                }
                spikeFlash *= 0.92;
            } else {
                spikeFlash = 0;
            }

            vceHistory.push(sampleV);
            if (vceHistory.length > 80) vceHistory.shift();

            const xStart = 516;
            const w = 346;
            const yBase = 312; // 0V
            // Scale: 12V -> 26px up (y=286), 55V spike -> 56px up (y=256)
            let d = '';
            let peakVal = 0;
            for (let i = 0; i < vceHistory.length; i++) {
                const v = vceHistory[i];
                if (v > peakVal) peakVal = v;
                const px = xStart + (i / (vceHistory.length - 1)) * w;
                const py = yBase - Math.min(58, (v / 12.0) * 24 + (v > 14 ? Math.min(34, (v - 12) * 0.8) : 0));
                d += (i === 0 ? `M ${px.toFixed(1)} ${py.toFixed(1)}` : ` L ${px.toFixed(1)} ${py.toFixed(1)}`);
            }

            if (traceEl) {
                traceEl.setAttribute('d', d);
                traceEl.setAttribute('stroke', peakVal > 16 ? '#f87171' : (isON ? '#4ade80' : '#38bdf8'));
            }

            animId = requestAnimationFrame(animSwitchScope);
        }

        animId = requestAnimationFrame(animSwitchScope);
        window.activeSim = {
            stop: () => {
                isRunning = false;
                if (animId) cancelAnimationFrame(animId);
            }
        };
    }

    render();
}
