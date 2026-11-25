/**
 * BJT Interactive Learning Module — ENGEE160 Electronics
 * Comprehensive Theory, IEEE/IEC Standard Schematics & Interactive Virtual Experiments
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
                    <b style="color: #38bdf8;">Alpha DC (\\alpha_{dc} หรือ h_{FB}):</b><br>
                    อัตราส่วนระหว่างกระแส Collector ต่อนกระแส Emitter:<br>
                    <span class="math-badge" style="margin-top: 0.4rem;">\\alpha_{dc} = \\frac{I_C}{I_E} = \\gamma \\times \\alpha_T</span><br>
                    โดย $\\gamma$ คือ Emitter Injection Efficiency และ $\\alpha_T$ คือ Base Transport Factor มีค่าปกติอยู่ในช่วง <b>0.980 ถึง 0.998</b>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-left: 3px solid #4ade80; padding: 0.9rem; border-radius: 6px;">
                    <b style="color: #4ade80;">Beta DC (\\beta_{dc} หรือ h_{FE}):</b><br>
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
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">N+ (E) — P (B) — N (C)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f43f5e; font-weight: bold;">P+ (E) — N (B) — P (C)</td>
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
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">V_BE ≈ +0.7V, I_B, I_C ไหลเข้า, I_E ไหลออก</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">V_EB ≈ +0.7V, I_E ไหลเข้า, I_B, I_C ไหลออก</td>
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
                1. <b>ความเข้มข้นของการโดปต่างกันมหาศาล:</b> N_E^+ โดปสูงมากเพื่อให้ฉีดพาหะได้มหาศาล ขณะที่ N_C โดปต่ำกว่าเพื่อรองรับแรงดันสูง หากสลับขา ประสิทธิภาพการฉีด \\gamma จะต่ำมาก ส่งผลให้ \\beta_{rev} เหลือเพียง 1 ถึง 5 เท่านั้น<br>
                2. <b>แรงดันพังทลาย (Breakdown Voltage):</b> รอยต่อ B-E ถูกออกแบบให้ทนแรงดันไบแอสกลับได้ต่ำมาก (BV_{EBO} ≈ 5V - 7V) ในขณะที่รอยต่อ B-C ทนแรงดันได้สูงกว่ามาก (BV_{CBO} ≈ 40V - 100V+) หากต่อกลับด้าน ทรานซิสเตอร์อาจพังเสียหายทันทีเมื่อเจอแรงดันเกิน 5V
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 400',
        svg: ''
    },
    'biasing': {
        title: 'การไบแอสและจุดทำงาน (DC Load Line & Q-Point Stability)',
        desc: `<b>การไบแอสไฟตรง (DC Biasing)</b> คือการกำหนดแรงดันและกระแสไฟตรงคงที่ในสภาวะสงบ (Quiescent State) ให้กับ BJT เพื่อสร้าง <b>จุดทำงาน Q-Point (V_{CEQ}, I_{CQ})</b> บนกราฟคุณลักษณะเอาต์พุตให้อยู่ในย่าน Active อย่างมีเสถียรภาพ<br><br>
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
                ตัวต้านทาน <b>R_E</b> จะทำหน้าที่ป้อนกลับเชิงลบ (Negative Feedback) ช่วยลดกระแสลงอัตโนมัติ: เมื่อ $I_E \\uparrow \\rightarrow V_E = I_E R_E \\uparrow \\rightarrow V_{BE} = V_B - V_E \\downarrow \\rightarrow I_B \\downarrow \\rightarrow I_C \\downarrow$ กลับสู่สมดุลทันที
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'operation': {
        title: 'หลักการทำงานและ 4 ย่านการทำงาน (4 Operation Modes & Physics)',
        desc: `ทรานซิสเตอร์ BJT มี <b>รอยต่อ P-N จำนวน 2 รอยต่อ</b> คือ Base-Emitter Junction (J_E) และ Base-Collector Junction (J_C) ทิศทางและขนาดของแรงดันไบแอสภายนอกที่ป้อนให้แก่ทั้งสองรอยต่อจะเป็นตัวกำหนด <b>4 ย่านการทำงาน (Operating Regions)</b> ตามหลักฟิสิกส์สารกึ่งตัวนำ:<br><br>
        1. <b>Forward-Active Mode (ย่านขยายเชิงเส้น):</b> J_E ไบแอสตรง (Forward: V_BE ≈ 0.7V) และ J_C ไบแอสกลับ (Reverse: V_BC ≤ 0V) ➔ ใช้งานเป็น <b>วงจรขยายสัญญาณ (Linear Amplifier)</b> โดย <span class="math-badge">I_C = \\beta I_B</span><br>
        2. <b>Saturation Mode (ย่านอิ่มตัว):</b> ทั้ง J_E และ J_C ได้รับไบแอสตรงทั้งคู่ ➔ ใช้งานเป็น <b>สวิตช์ปิด (Closed Switch / ON)</b> แรงดันตกคร่อมลดลงต่ำสุดเหลือเพียง <span class="math-badge">V_{CE(sat)} \\approx 0.1 - 0.2\\text{V}</span><br>
        3. <b>Cutoff Mode (ย่านตัดขาด):</b> ทั้ง J_E และ J_C ได้รับไบแอสกลับทั้งคู่ (หรือ V_BE < 0.5V) ➔ ใช้งานเป็น <b>สวิตช์เปิด (Open Switch / OFF)</b> ไม่มีกระแสไหล <span class="math-badge">I_C \\approx 0\\text{A}, V_{CE} = V_{CC}</span><br>
        4. <b>Reverse-Active Mode (ย่านขยายย้อนกลับ):</b> J_E ไบแอสกลับ และ J_C ไบแอสตรง ➔ ขั้ว Collector กลายเป็นตัวฉีดพาหะ และ Emitter ทำหน้าที่รับ อัตราขยายกระแสต่ำมาก (<span class="math-badge">\\beta_R \\approx 0.1 - 2</span>) พบในวงจรลอจิก TTL ดิจิทัล`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">🔬 ฟิสิกส์การเคลื่อนที่ของประจุและ Early Effect (Base-Width Modulation)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>กลไกในย่าน Forward-Active:</b> แรงดันไบแอสตรงที่รอยต่อ B-E จะลดกำแพงศักย์ลง ทำให้อิเล็กตรอนมหาศาลจาก Emitter ฉีดเข้าสู่ชั้น Base เมื่อเข้ามาแล้ว เนื่องจาก Base บางมาก อิเล็กตรอนส่วนใหญ่จึงแพร่กระจายไปถึงขอบรอยต่อ B-C ซึ่งได้รับไบแอสกลับ ที่จุดนี้จะมี <i>สนามไฟฟ้าแรงสูง (Strong Electric Field)</i> คอยกวาดดึงดูดอิเล็กตรอนเหล่านี้เข้าสู่ Collector ทันที<br>
                • <b>Early Effect (James M. Early, 1952):</b> เมื่อเราเพิ่มแรงดัน $V_{CE}$ ให้สูงขึ้น รอยต่อ B-C จะยิ่งได้รับไบแอสกลับมากขึ้น ส่งผลให้บริเวณปลอดพาหะ (Depletion Region) ขยายตัวรุกล้ำเข้าไปในชั้น Base ทำให้ความกว้างจริงของ Base แคบลง เรียกว่า <i>Base-Width Modulation</i> อิเล็กตรอนจึงรวมตัวกันน้อยลงไปอีก ทำให้กระแส $I_C$ เพิ่มขึ้นเล็กน้อย เกิดเป็นความชันบนกราฟคุณลักษณะ โดยเส้นกราฟทั้งหมดเมื่อลากย้อนกลับจะไปตัดแกน $V_{CE}$ ติดลบที่จุดแรงดัน <b>Early Voltage (V_A ≈ 50V - 100V)</b> ก่อให้เกิดความต้านทานเอาต์พุตจำกัด <span class="math-badge">r_o = \\frac{V_A + V_{CE}}{I_C}</span>
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
                <thead>
                    <tr style="background: rgba(139, 92, 246, 0.15);">
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">ย่านการทำงาน</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">รอยต่อ B-E (J_E)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">รอยต่อ B-C (J_C)</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">สภาวะ V_CE และกระแส</th>
                        <th style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: left;">การประยุกต์ใช้งาน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">Forward-Active</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward (V_BE ≈ 0.7V)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse (V_BC ≤ 0)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">V_CE > 0.3V, I_C = \\beta I_B</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">วงจรขยายสัญญาณเสียง/วิทยุอนาล็อก</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">Saturation</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward (V_BE ≈ 0.8V)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward (V_BC ≈ 0.6V)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">V_{CE(sat)} ≈ 0.1 - 0.2V, I_C < \\beta I_B</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">สวิตช์ปิด (Switch ON / Logic '0')</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #fbbf24; font-weight: bold;">Cutoff</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse (V_BE < 0.5V)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse (V_BC ≤ 0)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">V_CE = V_CC, I_C ≈ 0A</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">สวิตช์เปิด (Switch OFF / Logic '1')</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #c084fc; font-weight: bold;">Reverse-Active</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #f87171;">Reverse (V_BE ≤ 0)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">Forward (V_BC ≈ 0.7V)</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a; text-align: center;">กระแสไหลย้อนกลับ, \\beta_R < 2</td>
                        <td style="padding: 0.6rem 1rem; border: 1px solid #28375a;">วงจรลอจิก TTL, สวิตช์สองทิศทางอนาล็อก</td>
                    </tr>
                </tbody>
            </table>
        `,
        controls: true,
        viewBox: '0 0 880 410',
        svg: ''
    },
    'ce-amp': {
        title: 'วงจรขยาย Common Emitter และการกลับเฟส 180° (CE Amplifier)',
        desc: `<b>วงจรขยายแบบคอมมอนอิมิตเตอร์ (Common Emitter: CE)</b> เป็นโครงแบบวงจรขยายสัญญาณที่ใช้งานแพร่หลายที่สุด เนื่องจากให้ทั้ง <b>อัตราขยายแรงดัน (Voltage Gain: A_v)</b> และ <b>อัตราขยายกระแส (Current Gain: A_i)</b> สูง ส่งผลให้อัตราขยายกำลังไฟฟ้า ($A_p = A_v \\times A_i$) สูงที่สุดในบรรดาทุกโครงแบบ<br><br>
        <b>คุณสมบัติเอกลักษณ์สำคัญ: สัญญาณเอาต์พุตกลับเฟส 180° (Phase Inversion)</b><br>
        เมื่อสัญญาณอินพุต $v_{in}$ ป้อนเข้ามาในซีกบวก ➔ แรงดัน $v_{be}$ เพิ่มขึ้น ➔ กระแสเบส $i_b$ และกระแสคอลเล็กเตอร์ $i_c$ พุ่งสูงขึ้น ➔ แรงดันตกคร่อมตัวต้านทานโหลด $R_C$ เพิ่มขึ้น (<span class="math-badge">v_{RC} = i_c R_C</span>) ➔ แรงดันเอาต์พุตที่จุดคอลเล็กเตอร์ <span class="math-badge">v_{out} = V_{CC} - i_c R_C</span> จึงถูกดึงตกลงมาในทางตรงกันข้าม เกิดการกลับเฟส 180 องศา`,
        extra: `
            <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📐 การวิเคราะห์สัญญาณขนาดเล็ก (AC Small-Signal r'_e Model)</h3>
            <p style="margin-bottom: 1rem; line-height: 1.85;">
                • <b>ความต้านทานไดนามิกของ Emitter Junction:</b> <span class="math-badge">r'_e = \\frac{V_T}{I_{EQ}} \\approx \\frac{26\\text{ mV}}{I_{CQ}}</span> (ที่อุณหภูมิห้อง 25°C)<br>
                • <b>อัตราขยายแรงดันเมื่อต่อตัวเก็บประจุบายพาส C_E คร่อม R_E:</b><br>
                เนื่องจาก C_E ลัดวงจรสัญญาณ AC ลงกราวด์ ทำให้มองเห็นความต้านทานที่ขา E เป็นเพียง $r'_e$:<br>
                <span class="math-block">A_v = - \\frac{R_C \\parallel R_L}{r'_e} \\quad (\\text{มีค่าสูงมาก ~100 ถึง 300+})</span>
                • <b>อัตราขยายเมื่อไม่มี C_E หรือแบ่งความต้านทาน (Swamped Amplifier):</b><br>
                <span class="math-block">A_v = - \\frac{R_C \\parallel R_L}{R_E + r'_e} \\approx - \\frac{R_C}{R_E}</span>
                (แม้ว่าอัตราขยายจะลดลง แต่จะเสถียรภาพสูงมาก ไม่แปรปรวนตามอุณหภูมิ และลดความเพี้ยนฮาร์โมนิกได้อย่างยอดเยี่ยม)<br>
                • <b>อิมพีแดนซ์อินพุตและเอาต์พุต:</b> <span class="math-badge">Z_{in} = R_1 \\parallel R_2 \\parallel [\\beta(r'_e + R_E)]</span> และ <span class="math-badge">Z_{out} \\approx R_C</span>
            </p>

            <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; line-height: 1.85;">
                ⚠️ <b>ปรากฏการณ์ตัดยอดคลื่น (Clipping Distortion):</b><br>
                หากสัญญาณอินพุตมีแอมพลิจูดสูงเกินไป หรือจุด Q-Point ไม่ได้อยู่กึ่งกลางเส้นโหลด จะเกิดการชนขอบของรูปคลื่น:<br>
                1. <b>Saturation Clipping:</b> เมื่อสัญญาณขับดันให้ $V_{CE}$ ลดต่ำลงจนถึง $V_{CE(sat)} \\approx 0.2\\text{V}$ ยอดคลื่นซีกเอาต์พุตด้านล่างจะถูกตัดเรียบแบน<br>
                2. <b>Cutoff Clipping:</b> เมื่อสัญญาณดึงให้ $I_C = 0\\text{A}$ แรงดันเอาต์พุตจะวิ่งขึ้นไปแตะ $V_{CC}$ และยอดคลื่นซีกบนจะถูกตัดเรียบแบน
            </div>
        `,
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'cb-cc': {
        title: 'วงจรขยาย Common Base & Common Collector (Emitter Follower)',
        desc: `นอกจากคอมมอนอิมิตเตอร์ (CE) แล้ว BJT ยังสามารถจัดวงจรได้อีก 2 โครงแบบ โดยเลือกขาที่ใช้เป็นจุดกราวด์ร่วมสำหรับสัญญาณ AC:<br><br>
        1. <b>Common Collector (CC หรือ Emitter Follower):</b><br>
        ป้อนอินพุตเข้าที่ Base และดึงเอาต์พุตออกที่ขา Emitter สัญญาณเอาต์พุตจะ <i>"เกาะติด (Follow)"</i> สัญญาณอินพุตโดย <b>เฟสตรงกัน (0°)</b> มีอัตราขยายแรงดัน <span class="math-badge">A_v \\approx 1</span> (ต่ำกว่า 1 เล็กน้อย ~0.99) แต่มีอัตราขยายกระแสสูงมาก จุดเด่นที่สุดคือ <b>ความต้านทานอินพุตสูงมาก (High Z_{in})</b> และ <b>ความต้านทานเอาต์พุตต่ำมาก (Low Z_{out})</b> นิยมใช้เป็น <b>วงจรบัฟเฟอร์ (Buffer)</b> และป้องกันการสูญเสียสัญญาณจากการโหลด (Loading Effect)<br><br>
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
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>อัตราขยายแรงดัน (A_v)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">สูง (~100 - 300)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #fbbf24;">≈ 1 (A_v < 1)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">สูง (~100 - 300)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>อัตราขยายกระแส (A_i)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80;">สูง (\\beta ≈ 100)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">สูงที่สุด (\\beta + 1)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #f87171;">ต่ำกว่า 1 (\\alpha ≈ 0.99)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>อัตราขยายกำลัง (A_p)</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #4ade80; font-weight: bold;">สูงที่สุด (Very High)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8;">ปานกลาง (Medium)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8;">ปานกลาง (Medium)</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>ความต้านทานอินพุต (Z_{in})</b></td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center;">ปานกลาง (~1 - 5 kΩ)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #38bdf8; font-weight: bold;">สูงมาก (~100 - 500 kΩ)</td>
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a; text-align: center; color: #f87171;">ต่ำมาก (~10 - 50 Ω)</td>
                    </tr>
                    <tr style="background: rgba(255,255,255,0.02);">
                        <td style="padding: 0.6rem 0.8rem; border: 1px solid #28375a;"><b>ความต้านทานเอาต์พุต (Z_{out})</b></td>
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
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'switch': {
        title: 'การประยุกต์ใช้ BJT เป็นสวิตช์อิเล็กทรอนิกส์ (BJT Switch & Protection)',
        desc: `ในวงจรอิเล็กทรอนิกส์ดิจิทัล การควบคุมอัตโนมัติ และระบบขับกำลัง BJT จะถูกควบคุมให้สลับการทำงานไปมาระหว่าง 2 สภาวะสุดขั้วเท่านั้น คือ <b>Cutoff (OFF)</b> และ <b>Hard Saturation (ON)</b> เพื่อลดกำลังงานสูญเสียในตัวอุปกรณ์ให้ต่ำที่สุด<br><br>
        <b>⚙️ กฎเกณฑ์การออกแบบให้ทรานซิสเตอร์อิ่มตัวลึก (Hard Saturation):</b><br>
        1. คำนวณกระแสคอลเล็กเตอร์เมื่ออิ่มตัว: <span class="math-badge">I_{C(sat)} = \\frac{V_{CC} - V_{CE(sat)}}{R_C} \\approx \\frac{V_{CC}}{R_C}</span><br>
        2. กำหนดกระแสเบสขั้นต่ำ: <span class="math-badge">I_{B(min)} = \\frac{I_{C(sat)}}{\\beta_{min}}</span><br>
        3. เพื่อรับประกันการอิ่มตัวลึก วิศวกรจะเผื่อค่า <b>Overdrive Factor (ODF ≥ 2 ถึง 5)</b> หรือกำหนดให้ <span class="math-badge">\\beta_{forced} = 10 \\text{ ถึง } 20</span> ทำให้ได้ค่าความต้านทานที่ขาเบส:<br>
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
        controls: true,
        viewBox: '0 0 880 420',
        svg: ''
    },
    'quiz': {
        title: '📝 แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ (Quiz & Certification)',
        desc: 'แบบทดสอบวัดผลสัมฤทธิ์ทางการเรียนรู้ เรื่อง ทรานซิสเตอร์แบบ BJT (สุ่ม 10 ข้อจากคลังข้อสอบ 32 ข้อ สลับตัวเลือกทุกข้อ พร้อมระบบออกใบประกาศนียบัตรดิจิทัลมาตรฐาน)',
        extra: `
            <div id="quiz-container" style="background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            </div>
        `,
        controls: false,
        svg: ''
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

/* =========================================================================
   HELPER: SVG IEEE STANDARD TRANSISTOR COMPONENT GENERATOR
   ========================================================================= */
function drawIEEETransistor(x, y, type = 'NPN', angle = 0, scale = 1.0) {
    const isNPN = type.toUpperCase() === 'NPN';
    return `
        <g transform="translate(${x}, ${y}) rotate(${angle}) scale(${scale})">
            <!-- Transistor Circle Envelope -->
            <circle cx="0" cy="0" r="34" fill="rgba(139, 92, 246, 0.05)" stroke="#8b5cf6" stroke-width="1.8"/>
            <!-- Base Contact Bar (Thick line) -->
            <line x1="-16" y1="-20" x2="-16" y2="20" stroke="#f8fafc" stroke-width="4.5" stroke-linecap="round"/>
            <!-- Base Lead Wire -->
            <line x1="-38" y1="0" x2="-16" y2="0" stroke="#cbd5e1" stroke-width="2.5"/>
            <!-- Collector Slanted Leg -->
            <line x1="-16" y1="-12" x2="18" y2="-28" stroke="#cbd5e1" stroke-width="2.5"/>
            <line x1="18" y1="-28" x2="38" y2="-28" stroke="#cbd5e1" stroke-width="2.5"/>
            <!-- Emitter Slanted Leg -->
            <line x1="-16" y1="12" x2="18" y2="28" stroke="#cbd5e1" stroke-width="2.5"/>
            <line x1="18" y1="28" x2="38" y2="28" stroke="#cbd5e1" stroke-width="2.5"/>
            <!-- Arrowhead on Emitter -->
            ${isNPN ? `
                <polygon points="17,27 4,16 9,27" fill="#4ade80" stroke="#22c55e" stroke-width="0.5"/>
            ` : `
                <polygon points="-7,14 6,25 0,14" fill="#fbbf24" stroke="#f59e0b" stroke-width="0.5"/>
            `}
            <!-- Terminal Dots -->
            <circle cx="-38" cy="0" r="3" fill="#a78bfa"/>
            <circle cx="38" cy="-28" r="3" fill="#38bdf8"/>
            <circle cx="38" cy="28" r="3" fill="#f43f5e"/>
            <!-- Terminal Labels -->
            <text x="-48" y="4" fill="#a78bfa" font-size="12" font-weight="700" text-anchor="middle">B</text>
            <text x="48" y="-24" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="start">C</text>
            <text x="48" y="32" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="start">E</text>
        </g>
    `;
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
            <label>แรงดันไบแอส B-E (V_BE):</label>
            <input type="range" id="sl-st-vbe" min="0.0" max="0.85" step="0.05" value="${biasVBE}">
            <span class="val-badge" id="val-st-vbe">${biasVBE.toFixed(2)} V</span>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            💡 สังเกตการฉีดพาหะข้ามรอยต่อ B-E และการกวาดเข้าสู่ Collector
        </div>
    `;

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

    // Carrier particle engine
    let particles = [];
    const NUM_PARTICLES = 36;
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
            x: 50 + Math.random() * 110,
            y: 125 + Math.random() * 135,
            vx: 1.2 + Math.random() * 1.5,
            vy: (Math.random() - 0.5) * 0.8,
            recombined: false
        });
    }

    function render() {
        const isNPN = mode === 'NPN';
        const majColor = isNPN ? '#38bdf8' : '#f43f5e';
        const minColor = isNPN ? '#f43f5e' : '#38bdf8';
        const majName = isNPN ? 'อิเล็กตรอนอิสระ (e⁻)' : 'โฮล (h⁺)';

        const depJE = Math.max(4, Math.round(24 * (1 - biasVBE / 0.85)));
        const depJC = 26;
        const injectionRate = biasVBE >= 0.65 ? 'สูงมาก (Heavy Injection)' : biasVBE >= 0.4 ? 'ปานกลาง' : 'แทบไม่มี (Cutoff)';

        canvas.innerHTML = `
            <svg viewBox="0 0 880 400" id="anim-svg">
                <defs>
                    <filter id="glow-p" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>

                <!-- TOP HUD STATUS BAR -->
                <rect x="20" y="10" width="840" height="34" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="#28375a"/>
                <text x="35" y="32" fill="#c084fc" font-size="13" font-weight="700">📌 ชนิดอุปกรณ์: ${mode}</text>
                <text x="210" y="32" fill="${majColor}" font-size="12">พาหะข้างมาก: ${majName}</text>
                <text x="460" y="32" fill="#cbd5e1" font-size="12">การฉีดพาหะ: <tspan fill="#4ade80" font-weight="bold">${injectionRate}</tspan></text>
                <text x="710" y="32" fill="#fbbf24" font-size="12">V_BE = ${biasVBE.toFixed(2)} V</text>

                <!-- SECTION 1: PHYSICAL SEMICONDUCTOR DIE (Left Side) -->
                <rect x="20" y="55" width="490" height="325" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="265" y="80" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">โครงสร้างผลึกสารกึ่งตัวนำและบริเวณปลอดพาหะ (Die Cross-Section)</text>

                <!-- Emitter Layer -->
                <rect x="40" y="100" width="140" height="190" rx="6" fill="${majColor}" fill-opacity="0.14" stroke="${majColor}" stroke-width="2"/>
                <text x="110" y="125" fill="${majColor}" font-size="15" font-weight="800" text-anchor="middle">Emitter (E)</text>
                <text x="110" y="145" fill="#f1f5f9" font-size="12" font-weight="700" text-anchor="middle">${isNPN ? 'n+ Type' : 'p+ Type'}</text>
                <text x="110" y="165" fill="#94a3b8" font-size="10.5" text-anchor="middle">โดปหนาแน่นสูงสุด</text>
                <text x="110" y="180" fill="#94a3b8" font-size="10.5" text-anchor="middle">(N_E^+ ~ 10^19 cm^-3)</text>

                <!-- Base-Emitter Depletion Region -->
                <rect x="${180 - depJE/2}" y="100" width="${depJE}" height="190" fill="#fbbf24" fill-opacity="0.25" stroke="#fbbf24" stroke-width="1" stroke-dasharray="2,2"/>

                <!-- Base Layer -->
                <rect x="180" y="100" width="70" height="190" rx="3" fill="${minColor}" fill-opacity="0.22" stroke="${minColor}" stroke-width="2"/>
                <text x="215" y="125" fill="${minColor}" font-size="14" font-weight="800" text-anchor="middle">Base (B)</text>
                <text x="215" y="145" fill="#f1f5f9" font-size="12" font-weight="700" text-anchor="middle">${isNPN ? 'p Type' : 'n Type'}</text>
                <text x="215" y="165" fill="#fca5a5" font-size="10" text-anchor="middle">บางมาก (W_B << L_n)</text>
                <text x="215" y="180" fill="#fca5a5" font-size="10" text-anchor="middle">โดปต่ำ (~10^16)</text>

                <!-- Base-Collector Depletion Region -->
                <rect x="${250 - depJC/2}" y="100" width="${depJC}" height="190" fill="#fbbf24" fill-opacity="0.25" stroke="#fbbf24" stroke-width="1" stroke-dasharray="2,2"/>

                <!-- Collector Layer -->
                <rect x="250" y="100" width="240" height="190" rx="6" fill="${majColor}" fill-opacity="0.14" stroke="${majColor}" stroke-width="2"/>
                <text x="370" y="125" fill="${majColor}" font-size="15" font-weight="800" text-anchor="middle">Collector (C)</text>
                <text x="370" y="145" fill="#f1f5f9" font-size="12" font-weight="700" text-anchor="middle">${isNPN ? 'n Type' : 'p Type'}</text>
                <text x="370" y="165" fill="#94a3b8" font-size="10.5" text-anchor="middle">พื้นที่หน้าตัดใหญ่สุด</text>
                <text x="370" y="180" fill="#94a3b8" font-size="10.5" text-anchor="middle">โดปปานกลาง (~10^15)</text>

                <!-- Terminals and Leads -->
                <line x1="110" y1="290" x2="110" y2="340" stroke="#cbd5e1" stroke-width="3"/>
                <circle cx="110" cy="340" r="4" fill="#38bdf8"/>
                <text x="110" y="360" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ขา Emitter (E)</text>

                <line x1="215" y1="100" x2="215" y2="65" stroke="#cbd5e1" stroke-width="3"/>
                <circle cx="215" cy="65" r="4" fill="#a78bfa"/>
                <text x="215" y="55" fill="#a78bfa" font-size="13" font-weight="bold" text-anchor="middle">ขา Base (B)</text>

                <line x1="370" y1="290" x2="370" y2="340" stroke="#cbd5e1" stroke-width="3"/>
                <circle cx="370" cy="340" r="4" fill="#38bdf8"/>
                <text x="370" y="360" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ขา Collector (C)</text>

                <!-- Carrier Particles Canvas Group -->
                <g id="carrier-particles-group"></g>

                <!-- SECTION 2: IEEE STANDARD SCHEMATIC SYMBOL (Right Side) -->
                <rect x="530" y="55" width="330" height="325" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="695" y="80" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">สัญลักษณ์มาตรฐานสากล (IEEE 315 Symbol)</text>

                ${drawIEEETransistor(695, 195, mode, 0, 1.25)}

                <!-- Current Vector Badges -->
                <rect x="550" y="275" width="290" height="90" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
                <text x="565" y="298" fill="#e2e8f0" font-size="12" font-weight="bold">⚡ ทิศทางการไหลของกระแสตาม KCL:</text>
                <text x="565" y="320" fill="#38bdf8" font-size="11.5">I_C = α · I_E ≈ <tspan fill="#4ade80" font-weight="bold">98.5% ของ I_E</tspan></text>
                <text x="565" y="338" fill="#f43f5e" font-size="11.5">I_B = (1 - α) · I_E ≈ <tspan fill="#fbbf24" font-weight="bold">1.5% ของ I_E</tspan></text>
                <text x="565" y="356" fill="#a78bfa" font-size="11.5">ความสัมพันธ์: <tspan font-weight="bold" fill="#c4b5fd">I_E = I_B + I_C</tspan></text>
            </svg>
        `;

        const particleGroup = document.getElementById('carrier-particles-group');
        let isRunning = true;

        function updateParticles() {
            if (!isRunning) return;
            let pSvg = '';
            const speedMultiplier = biasVBE >= 0.65 ? 1.6 : biasVBE >= 0.4 ? 0.9 : 0.15;

            particles.forEach(p => {
                p.x += p.vx * speedMultiplier;
                p.y += p.vy;

                if (p.y < 115) { p.y = 115; p.vy *= -1; }
                if (p.y > 275) { p.y = 275; p.vy *= -1; }

                if (p.x >= 185 && p.x <= 245 && !p.recombined) {
                    if (Math.random() < 0.035) {
                        p.recombined = true;
                    }
                }

                if (p.recombined) {
                    p.vy = -1.8 * speedMultiplier;
                    p.vx = 0;
                    if (p.y <= 95) {
                        p.x = 45 + Math.random() * 60;
                        p.y = 130 + Math.random() * 120;
                        p.vx = 1.2 + Math.random() * 1.5;
                        p.vy = (Math.random() - 0.5) * 0.8;
                        p.recombined = false;
                    }
                } else if (p.x > 470) {
                    p.x = 45 + Math.random() * 60;
                    p.y = 130 + Math.random() * 120;
                    p.vx = 1.2 + Math.random() * 1.5;
                    p.vy = (Math.random() - 0.5) * 0.8;
                }

                const color = p.recombined ? '#f43f5e' : majColor;
                pSvg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" fill="${color}" opacity="0.85"/>`;
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
    let VCC = 12.0;
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
            <label>R₁:</label>
            <input type="range" id="sl-b-r1" min="10" max="100" step="1" value="${R1}">
            <span class="val-badge" id="val-b-r1">${R1} kΩ</span>
        </div>
        <div class="ctrl-group">
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

    btnDiv.addEventListener('click', () => { topology = 'divider'; updatePills(); render(); });
    btnFb.addEventListener('click', () => { topology = 'feedback'; updatePills(); render(); });
    btnFix.addEventListener('click', () => { topology = 'fixed'; updatePills(); render(); });

    function updatePills() {
        btnDiv.classList.toggle('active', topology === 'divider');
        btnFb.classList.toggle('active', topology === 'feedback');
        btnFix.classList.toggle('active', topology === 'fixed');
    }

    slR1.addEventListener('input', e => { R1 = parseFloat(e.target.value); document.getElementById('val-b-r1').innerText = `${R1} kΩ`; render(); });
    slR2.addEventListener('input', e => { R2 = parseFloat(e.target.value); document.getElementById('val-b-r2').innerText = `${R2} kΩ`; render(); });
    slRC.addEventListener('input', e => { RC = parseFloat(e.target.value); document.getElementById('val-b-rc').innerText = `${RC} kΩ`; render(); });
    slRE.addEventListener('input', e => { RE = parseFloat(e.target.value); document.getElementById('val-b-re').innerText = `${RE} kΩ`; render(); });
    slBeta.addEventListener('input', e => { beta = parseInt(e.target.value); document.getElementById('val-b-beta').innerText = `${beta}`; render(); });

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
        let ICSat_mA = 0;
        let state = 'Active Mode';
        let stateColor = '#4ade80';

        if (topology === 'divider') {
            VTH = VCC * (R2 / (R1 + R2));
            RTH = (R1 * R2) / (R1 + R2);
            ICSat_mA = VCC / (RC + RE);
            const den = RTH + (beta + 1) * RE;
            const num = VTH - 0.7;
            if (num <= 0) {
                IB_uA = 0; ICQ_mA = 0; VCEQ = VCC; state = 'Cutoff (V_BE < 0.7V)'; stateColor = '#fbbf24';
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
            VE = ICQ_mA * RE;
            VC = VCC - ICQ_mA * RC;
            VB = VE + 0.7;
        } else if (topology === 'feedback') {
            ICSat_mA = VCC / (RC + RE);
            const num = VCC - 0.7;
            const den = R1 + beta * (RC + RE);
            const IB_mA = Math.max(0, num / den);
            IB_uA = IB_mA * 1000;
            ICQ_mA = beta * IB_mA;
            VCEQ = VCC - ICQ_mA * (RC + RE);
            if (VCEQ <= 0.2) {
                VCEQ = 0.2;
                ICQ_mA = (VCC - 0.2) / (RC + RE);
                state = 'Saturation';
                stateColor = '#f87171';
            }
            VE = ICQ_mA * RE;
            VC = VCC - ICQ_mA * RC;
            VB = VE + 0.7;
        } else {
            ICSat_mA = VCC / (RC + RE);
            const IB_mA = Math.max(0, (VCC - 0.7) / (R1 + (beta + 1) * RE));
            IB_uA = IB_mA * 1000;
            ICQ_mA = beta * IB_mA;
            VCEQ = VCC - ICQ_mA * (RC + RE);
            if (VCEQ <= 0.2) {
                VCEQ = 0.2;
                ICQ_mA = (VCC - 0.2) / (RC + RE);
                state = 'Saturation';
                stateColor = '#f87171';
            }
            VE = ICQ_mA * RE;
            VC = VCC - ICQ_mA * RC;
            VB = VE + 0.7;
        }

        const PD_mW = VCEQ * ICQ_mA;

        // Graph mapping
        const gx0 = 475; const gy0 = 345;
        const gW = 370;  const gH = 255;
        const maxV = 14.0;
        const maxI = Math.max(6.5, ICSat_mA * 1.2);

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
            if (icVal > maxI * 1.05) return;
            const kneeX = mapX(0.4);
            const endX = mapX(13.5);
            const kneeY = mapY(icVal);
            const endY = mapY(icVal * 1.04);
            const pathD = `M ${gx0} ${gy0} Q ${kneeX} ${kneeY} ${endX} ${endY}`;
            curvePaths += `
                <path d="${pathD}" fill="none" stroke="#334155" stroke-width="1.2"/>
                <text x="${endX + 4}" y="${endY + 3}" fill="#64748b" font-size="9">${ib}µA</text>
            `;
        });

        canvas.innerHTML = `
            <svg viewBox="0 0 880 410" id="anim-svg">
                <!-- SECTION 1: IEEE STANDARD SCHEMATIC (Left) -->
                <rect x="20" y="20" width="425" height="375" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="232" y="45" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">
                    ${topology === 'divider' ? 'วงจร Voltage Divider Bias (สากล)' : topology === 'feedback' ? 'วงจร Collector Feedback Bias' : 'วงจร Fixed Base Bias'}
                </text>

                <!-- VCC Rail -->
                <line x1="60" y1="70" x2="380" y2="70" stroke="#f43f5e" stroke-width="3"/>
                <circle cx="380" cy="70" r="4" fill="#f43f5e"/>
                <text x="390" y="75" fill="#f43f5e" font-size="13" font-weight="bold">+V_CC (${VCC}V)</text>

                <!-- Ground Bus -->
                <line x1="60" y1="285" x2="380" y2="285" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="210" y1="285" x2="210" y2="300" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="195" y1="300" x2="225" y2="300" stroke="#cbd5e1" stroke-width="2.5"/>
                <line x1="200" y1="305" x2="220" y2="305" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="205" y1="310" x2="215" y2="310" stroke="#cbd5e1" stroke-width="1.5"/>

                ${topology === 'divider' ? `
                    <line x1="110" y1="70" x2="110" y2="105" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="100" y="105" width="20" height="38" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                    <text x="130" y="128" fill="#38bdf8" font-size="11" font-weight="bold">R₁=${R1}k</text>
                    <line x1="110" y1="143" x2="110" y2="175" stroke="#cbd5e1" stroke-width="2"/>

                    <circle cx="110" cy="175" r="4" fill="#a78bfa"/>
                    <line x1="110" y1="175" x2="222" y2="175" stroke="#cbd5e1" stroke-width="2"/>

                    <line x1="110" y1="175" x2="110" y2="205" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="100" y="205" width="20" height="38" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                    <text x="130" y="228" fill="#38bdf8" font-size="11" font-weight="bold">R₂=${R2}k</text>
                    <line x1="110" y1="243" x2="110" y2="285" stroke="#cbd5e1" stroke-width="2"/>
                ` : topology === 'feedback' ? `
                    <line x1="300" y1="140" x2="150" y2="140" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="135" y="145" width="30" height="20" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                    <text x="150" y="132" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">R_B=${R1}k</text>
                    <line x1="150" y1="165" x2="150" y2="175" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="150" y1="175" x2="222" y2="175" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="300" cy="140" r="4" fill="#38bdf8"/>
                ` : `
                    <line x1="110" y1="70" x2="110" y2="135" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="100" y="135" width="20" height="40" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                    <text x="130" y="160" fill="#38bdf8" font-size="11" font-weight="bold">R_B=${R1}k</text>
                    <line x1="110" y1="175" x2="222" y2="175" stroke="#cbd5e1" stroke-width="2"/>
                `}

                <!-- Resistor RC -->
                <line x1="300" y1="70" x2="300" y2="100" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="290" y="100" width="20" height="36" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
                <text x="320" y="122" fill="#4ade80" font-size="11" font-weight="bold">R_C=${RC}k</text>
                <line x1="300" y1="136" x2="300" y2="150" stroke="#cbd5e1" stroke-width="2"/>

                <!-- IEEE Transistor Symbol -->
                ${drawIEEETransistor(260, 175, 'NPN', 0, 0.95)}

                <!-- Resistor RE -->
                <line x1="300" y1="202" x2="300" y2="218" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="290" y="218" width="20" height="36" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                <text x="320" y="240" fill="#fbbf24" font-size="11" font-weight="bold">R_E=${RE}k</text>
                <line x1="300" y1="254" x2="300" y2="285" stroke="#cbd5e1" stroke-width="2"/>

                <!-- Calculated Metrics Table inside Schematic -->
                <rect x="35" y="318" width="395" height="68" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
                <text x="45" y="336" fill="#cbd5e1" font-size="11.5">V_B = <tspan fill="#a78bfa" font-weight="bold">${VB.toFixed(2)}V</tspan> | V_E = ${VE.toFixed(2)}V | V_C = ${VC.toFixed(2)}V</text>
                <text x="45" y="355" fill="#cbd5e1" font-size="11.5">I_BQ = <tspan fill="#c084fc" font-weight="bold">${IB_uA.toFixed(1)} µA</tspan> | I_CQ = <tspan fill="#4ade80" font-weight="bold">${ICQ_mA.toFixed(2)} mA</tspan> | P_D = <tspan fill="#38bdf8">${PD_mW.toFixed(1)} mW</tspan></text>
                <text x="45" y="374" fill="${stateColor}" font-size="12" font-weight="bold">จุดทำงาน: V_CEQ = ${VCEQ.toFixed(2)}V ➔ [${state}]</text>

                <!-- SECTION 2: FAMILY OF CURVES & DC LOAD LINE (Right) -->
                <rect x="460" y="20" width="405" height="375" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="662" y="45" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">กราฟคุณลักษณะเอาต์พุต & เส้นโหลดไฟตรง</text>

                <!-- Axes -->
                <line x1="${gx0}" y1="${gy0}" x2="${gx0 + gW + 10}" y2="${gy0}" stroke="#94a3b8" stroke-width="2"/>
                <text x="${gx0 + gW + 5}" y="${gy0 + 20}" fill="#94a3b8" font-size="11" font-weight="bold">V_CE (V)</text>
                <line x1="${gx0}" y1="${gy0}" x2="${gx0}" y2="${gy0 - gH - 10}" stroke="#94a3b8" stroke-width="2"/>
                <text x="${gx0 - 15}" y="${gy0 - gH - 5}" fill="#94a3b8" font-size="11" font-weight="bold">I_C (mA)</text>

                <!-- Family Curves -->
                ${curvePaths}

                <!-- DC Load Line -->
                <line x1="${xSat}" y1="${ySat}" x2="${xCut}" y2="${yCut}" stroke="#f43f5e" stroke-width="2.8"/>

                <!-- Saturation & Cutoff Nodes -->
                <circle cx="${xSat}" cy="${ySat}" r="5" fill="#f43f5e"/>
                <text x="${xSat + 10}" y="${ySat - 4}" fill="#f87171" font-size="10.5" font-weight="bold">I_C(sat) = ${ICSat_mA.toFixed(2)} mA</text>

                <circle cx="${xCut}" cy="${yCut}" r="5" fill="#fbbf24"/>
                <text x="${xCut - 15}" y="${yCut - 10}" fill="#fbbf24" font-size="10.5" font-weight="bold">${VCC}V (Cutoff)</text>

                <!-- Dashed helper lines for Q-Point -->
                <line x1="${gx0}" y1="${yQ}" x2="${xQ}" y2="${yQ}" stroke="#4ade80" stroke-dasharray="3,3"/>
                <line x1="${xQ}" y1="${gy0}" x2="${xQ}" y2="${yQ}" stroke="#38bdf8" stroke-dasharray="3,3"/>

                <!-- Q-Point with Glow Animation -->
                <circle cx="${xQ}" cy="${yQ}" r="8" fill="#4ade80">
                    <animate attributeName="r" values="7;10;7" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="${xQ}" cy="${yQ}" r="3.5" fill="#ffffff"/>

                <!-- Q-Point Coordinates Badge -->
                <rect x="${Math.min(gx0 + gW - 145, Math.max(gx0 + 10, xQ + 12))}" y="${Math.max(65, yQ - 34)}" width="140" height="34" rx="6" fill="rgba(15, 23, 42, 0.95)" stroke="#4ade80" stroke-width="1.5"/>
                <text x="${Math.min(gx0 + gW - 145, Math.max(gx0 + 10, xQ + 12)) + 70}" y="${Math.max(65, yQ - 34) + 21}" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">
                    Q: (${VCEQ.toFixed(2)}V, ${ICQ_mA.toFixed(2)}mA)
                </text>
            </svg>
        `;
    }

    render();
}

/* =========================================================================
   3. OPERATION MODES SIMULATOR: 4 Modes, Continual Dual-Bias Sliders
   ========================================================================= */
function initOperationSimulator(canvas, controls) {
    let mode = 'active';
    let vbe = 0.70;
    let vce = 6.0;

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
            <input type="range" id="sl-om-vce" min="0.0" max="12.0" step="0.2" value="${vce}">
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
    btnRev.addEventListener('click', () => { mode = 'reverse'; vbe = -0.30; vce = -0.50; syncInputs(); render(); });

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
            mode = (vbe < 0 && vce < 0) ? 'reverse' : 'cutoff';
        } else {
            if (vce <= 0.3) {
                mode = 'sat';
            } else {
                mode = 'active';
            }
        }
        syncButtons();
    }

    function render() {
        const vbc = vbe - vce;
        const jeForward = vbe >= 0.65;
        const jcForward = vbc >= 0.45;

        let ic_mA = 0;
        let ib_uA = 0;
        let modeTitle = '';
        let modeColor = '#4ade80';

        if (mode === 'active') {
            ib_uA = Math.max(1, ((vbe - 0.6) / 0.1) * 25);
            ic_mA = (ib_uA * 100) / 1000;
            modeTitle = 'Forward-Active Mode (ย่านขยายสัญญาณเชิงเส้น: I_C = β·I_B)';
            modeColor = '#4ade80';
        } else if (mode === 'sat') {
            ib_uA = 250;
            ic_mA = 5.0;
            modeTitle = 'Saturation Mode (ย่านอิ่มตัว: สวิตช์ปิด ON, V_CE ≈ 0.2V)';
            modeColor = '#38bdf8';
        } else if (mode === 'cutoff') {
            ib_uA = 0;
            ic_mA = 0;
            modeTitle = 'Cutoff Mode (ย่านคัตออฟ: สวิตช์เปิด OFF, I_C ≈ 0, V_CE = V_CC)';
            modeColor = '#fbbf24';
        } else {
            ib_uA = 80;
            ic_mA = -0.15;
            modeTitle = 'Reverse-Active Mode (ย่านย้อนกลับ: C ฉีด E รับ, β_R ต่ำมาก)';
            modeColor = '#c084fc';
        }

        canvas.innerHTML = `
            <svg viewBox="0 0 880 400" id="anim-svg">
                <!-- TOP STATUS BANNER -->
                <rect x="20" y="10" width="840" height="34" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#28375a"/>
                <text x="35" y="32" fill="${modeColor}" font-size="13.5" font-weight="700">🔍 ${modeTitle}</text>
                <text x="620" y="32" fill="#cbd5e1" font-size="12">V_BC = ${vbc.toFixed(2)} V  |  V_BE = ${vbe.toFixed(2)} V</text>

                <!-- SECTION 1: PHYSICAL JUNCTION CARRIERS (Left) -->
                <rect x="20" y="55" width="470" height="325" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="255" y="80" fill="#cbd5e1" font-size="13.5" font-weight="700" text-anchor="middle">สภาวะรอยต่อทางกายภาพ & กำแพงศักย์ (Internal Potential)</text>

                <rect x="40" y="100" width="130" height="170" rx="6" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2"/>
                <text x="105" y="130" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Emitter (n+)</text>
                <text x="105" y="150" fill="#94a3b8" font-size="11" text-anchor="middle">อิเล็กตรอนหนาแน่น</text>

                <rect x="195" y="100" width="70" height="170" rx="4" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="2"/>
                <text x="230" y="130" fill="#f43f5e" font-size="14" font-weight="bold" text-anchor="middle">Base (p)</text>
                <text x="230" y="150" fill="#fca5a5" font-size="10.5" text-anchor="middle">บางมาก (~1µm)</text>

                <rect x="290" y="100" width="180" height="170" rx="6" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2"/>
                <text x="380" y="130" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Collector (n)</text>
                <text x="380" y="150" fill="#94a3b8" font-size="11" text-anchor="middle">พื้นที่กว้างรองรับประจุ</text>

                ${mode === 'active' ? `
                    <path d="M 105 190 L 380 190" stroke="#38bdf8" stroke-width="8" stroke-dasharray="8,6" fill="none">
                        <animate attributeName="stroke-dashoffset" values="0;-40" dur="1s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 230 190 L 230 260" stroke="#f43f5e" stroke-width="3" stroke-dasharray="5,4" fill="none">
                        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite"/>
                    </path>
                    <text x="270" y="175" fill="#38bdf8" font-size="11.5" font-weight="bold">อิเล็กตรอน 98% แพร่ผ่านไปยัง Collector ➔</text>
                    <text x="235" y="240" fill="#f43f5e" font-size="10.5">~2% รวมตัว (I_B)</text>
                ` : mode === 'sat' ? `
                    <path d="M 105 190 L 225 190" stroke="#38bdf8" stroke-width="8" stroke-dasharray="8,6" fill="none">
                        <animate attributeName="stroke-dashoffset" values="0;-30" dur="1s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 380 190 L 235 190" stroke="#38bdf8" stroke-width="6" stroke-dasharray="8,6" fill="none">
                        <animate attributeName="stroke-dashoffset" values="0;30" dur="1s" repeatCount="indefinite"/>
                    </path>
                    <text x="255" y="175" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">ฉีดพาหะเข้าหากันทั้งสองฝั่ง (V_CE ต่ำสุด 0.2V)</text>
                ` : mode === 'cutoff' ? `
                    <rect x="168" y="100" width="28" height="170" fill="#fbbf24" fill-opacity="0.3"/>
                    <rect x="264" y="100" width="28" height="170" fill="#fbbf24" fill-opacity="0.3"/>
                    <text x="255" y="200" fill="#fbbf24" font-size="15" font-weight="bold" text-anchor="middle">⛔ กำแพงศักย์สูง ไม่มีกระแสพาหะข้ามรอยต่อ</text>
                ` : `
                    <path d="M 380 190 L 105 190" stroke="#c084fc" stroke-width="5" stroke-dasharray="8,6" fill="none">
                        <animate attributeName="stroke-dashoffset" values="0;30" dur="1.5s" repeatCount="indefinite"/>
                    </path>
                    <text x="255" y="175" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">Collector ทำหน้าที่ฉีดพาหะ (กลับด้าน) ➔</text>
                `}

                <rect x="40" y="290" width="430" height="70" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#334155"/>
                <text x="55" y="315" fill="#cbd5e1" font-size="12">รอยต่อ B-E (J_E): <tspan fill="${jeForward ? '#4ade80' : '#f87171'}" font-weight="bold">${jeForward ? 'ไบแอสตรง (Forward)' : 'ไบแอสกลับ (Reverse)'}</tspan></text>
                <text x="55" y="335" fill="#cbd5e1" font-size="12">รอยต่อ B-C (J_C): <tspan fill="${jcForward ? '#4ade80' : '#f87171'}" font-weight="bold">${jcForward ? 'ไบแอสตรง (Forward)' : 'ไบแอสกลับ (Reverse)'}</tspan></text>
                <text x="55" y="352" fill="#a78bfa" font-size="11.5">กระแส: I_B = ${ib_uA.toFixed(0)} µA  |  I_C = ${ic_mA.toFixed(2)} mA</text>

                <!-- SECTION 2: OPERATION PLANE GRAPH (Right) -->
                <rect x="510" y="55" width="350" height="325" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="685" y="80" fill="#cbd5e1" font-size="13.5" font-weight="700" text-anchor="middle">ตำแหน่งบนระนาบคุณลักษณะ (Operating Plane)</text>

                <rect x="540" y="100" width="40" height="190" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-dasharray="2,2"/>
                <text x="560" y="118" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Sat</text>

                <rect x="580" y="100" width="250" height="165" fill="rgba(74, 222, 128, 0.08)" stroke="#4ade80" stroke-dasharray="2,2"/>
                <text x="705" y="118" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">Active Region (ขยายเชิงเส้น)</text>

                <rect x="580" y="265" width="250" height="25" fill="rgba(251, 191, 36, 0.12)" stroke="#fbbf24" stroke-dasharray="2,2"/>
                <text x="705" y="282" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Cutoff Region (I_C = 0)</text>

                <line x1="540" y1="290" x2="840" y2="290" stroke="#94a3b8" stroke-width="2"/>
                <text x="815" y="306" fill="#94a3b8" font-size="10" font-weight="bold">V_CE (V)</text>
                <line x1="540" y1="290" x2="540" y2="95" stroke="#94a3b8" stroke-width="2"/>
                <text x="525" y="100" fill="#94a3b8" font-size="10" font-weight="bold">I_C</text>

                ${(() => {
                    const cx = 540 + Math.min(290, Math.max(0, (vce / 12.0) * 280));
                    const cy = 290 - Math.min(180, Math.max(0, (ic_mA / 6.0) * 170));
                    return `
                        <circle cx="${cx}" cy="${cy}" r="7" fill="${modeColor}">
                            <animate attributeName="r" values="6;9;6" dur="1.2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="${cx}" cy="${cy}" r="3" fill="#ffffff"/>
                        <rect x="${Math.min(710, cx + 8)}" y="${Math.max(105, cy - 20)}" width="115" height="25" rx="4" fill="rgba(15,23,42,0.9)" stroke="${modeColor}"/>
                        <text x="${Math.min(710, cx + 8) + 57}" y="${Math.max(105, cy - 20) + 17}" fill="${modeColor}" font-size="10.5" font-weight="bold" text-anchor="middle">(${vce.toFixed(1)}V, ${ic_mA.toFixed(1)}mA)</text>
                    `;
                })()}

                <rect x="530" y="325" width="310" height="42" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155"/>
                <text x="540" y="350" fill="#cbd5e1" font-size="11">การใช้งาน: <tspan fill="${modeColor}" font-weight="bold">${mode === 'active' ? 'วงจรขยายสัญญาณเสียง/RF' : mode === 'sat' ? 'สวิตช์ ON (โหลดทำงาน)' : mode === 'cutoff' ? 'สวิตช์ OFF (ตัดวงจร)' : 'TTL Digital Inverter'}</tspan></text>
            </svg>
        `;
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
            <label>แอมพลิจูดอินพุต (v_in):</label>
            <input type="range" id="sl-ce-vin" min="5" max="100" step="5" value="${vinPeak}">
            <span class="val-badge" id="val-ce-vin">${vinPeak} mV</span>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-ce-bypass">ตัวเก็บประจุบายพาส C_E: [ON]</button>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            ⚡ ทดลองเร่ง v_in สูงๆ เพื่อดู<b>การตัดยอดคลื่น (Clipping Distortion)</b>
        </div>
    `;

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
    });

    canvas.innerHTML = `
        <svg viewBox="0 0 880 420" id="anim-svg">
            <!-- SECTION 1: IEEE COMPLETE CE AMPLIFIER SCHEMATIC (Left) -->
            <rect x="20" y="20" width="410" height="380" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
            <text x="225" y="45" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">วงจรขยาย Common Emitter (IEEE Standard)</text>

            <!-- VCC Rail -->
            <line x1="60" y1="70" x2="350" y2="70" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="355" y="75" fill="#f43f5e" font-size="12" font-weight="bold">+12V</text>

            <!-- Resistors R1 & R2 -->
            <line x1="110" y1="70" x2="110" y2="95" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="102" y="95" width="16" height="36" fill="#1e293b" stroke="#38bdf8"/>
            <text x="125" y="118" fill="#38bdf8" font-size="10" font-weight="bold">R₁</text>
            <line x1="110" y1="131" x2="110" y2="175" stroke="#cbd5e1" stroke-width="2"/>

            <circle cx="110" cy="175" r="3.5" fill="#a78bfa"/>

            <line x1="110" y1="175" x2="110" y2="215" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="102" y="215" width="16" height="36" fill="#1e293b" stroke="#38bdf8"/>
            <text x="125" y="238" fill="#38bdf8" font-size="10" font-weight="bold">R₂</text>
            <line x1="110" y1="251" x2="110" y2="280" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Input Coupling Capacitor C1 & AC Source -->
            <circle cx="45" cy="175" r="14" fill="#0c1427" stroke="#38bdf8" stroke-width="1.8"/>
            <path d="M 37 175 Q 41 169 45 175 T 53 175" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
            <text x="45" y="202" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">v_in (AC)</text>
            <line x1="59" y1="175" x2="75" y2="175" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="75" y1="165" x2="75" y2="185" stroke="#38bdf8" stroke-width="2.5"/>
            <line x1="81" y1="165" x2="81" y2="185" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="78" y="158" fill="#38bdf8" font-size="9" text-anchor="middle">C₁</text>
            <line x1="81" y1="175" x2="110" y2="175" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Base wire to Transistor -->
            <line x1="110" y1="175" x2="202" y2="175" stroke="#cbd5e1" stroke-width="2"/>

            <!-- Transistor IEEE Symbol -->
            ${drawIEEETransistor(240, 175, 'NPN', 0, 0.95)}

            <!-- Resistor RC -->
            <line x1="278" y1="70" x2="278" y2="95" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="270" y="95" width="16" height="36" fill="#1e293b" stroke="#4ade80"/>
            <text x="293" y="118" fill="#4ade80" font-size="10" font-weight="bold">R_C</text>
            <line x1="278" y1="131" x2="278" y2="147" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="278" cy="147" r="3.5" fill="#4ade80"/>

            <!-- Output Coupling Capacitor C2 -->
            <line x1="278" y1="147" x2="330" y2="147" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="330" y1="137" x2="330" y2="157" stroke="#4ade80" stroke-width="2.5"/>
            <line x1="336" y1="137" x2="336" y2="157" stroke="#4ade80" stroke-width="2.5"/>
            <text x="333" y="130" fill="#4ade80" font-size="9" text-anchor="middle">C₂</text>
            <line x1="336" y1="147" x2="375" y2="147" stroke="#4ade80" stroke-width="2"/>
            <circle cx="375" cy="147" r="4" fill="#4ade80"/>
            <text x="382" y="152" fill="#4ade80" font-size="11" font-weight="bold">v_out</text>

            <!-- Resistor RE & Bypass Capacitor CE -->
            <line x1="278" y1="202" x2="278" y2="225" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="278" cy="225" r="3.5" fill="#fbbf24"/>

            <line x1="278" y1="225" x2="255" y2="225" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="247" y="235" width="16" height="34" fill="#1e293b" stroke="#fbbf24"/>
            <text x="238" y="255" fill="#fbbf24" font-size="9" font-weight="bold">R_E</text>
            <line x1="255" y1="225" x2="255" y2="235" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="255" y1="269" x2="255" y2="280" stroke="#cbd5e1" stroke-width="2"/>

            <line x1="278" y1="225" x2="305" y2="225" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="305" y1="225" x2="305" y2="242" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="298" y1="242" x2="312" y2="242" stroke="#fbbf24" stroke-width="2.5"/>
            <line x1="298" y1="248" x2="312" y2="248" stroke="#fbbf24" stroke-width="2.5"/>
            <text x="320" y="248" fill="#fbbf24" font-size="9" font-weight="bold">C_E</text>
            <line x1="305" y1="248" x2="305" y2="280" stroke="#cbd5e1" stroke-width="2"/>

            <line x1="80" y1="280" x2="330" y2="280" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="205" y1="280" x2="205" y2="295" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="195" y1="295" x2="215" y2="295" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="199" y1="300" x2="211" y2="300" stroke="#cbd5e1" stroke-width="2"/>

            <!-- AC Parameters Readout HUD inside Schematic -->
            <rect x="35" y="315" width="380" height="70" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#334155"/>
            <text id="hud-ce-gain" x="45" y="336" fill="#cbd5e1" font-size="11.5">อัตราขยาย: A_v = -85x (กลับเฟส 180°)</text>
            <text id="hud-ce-imp" x="45" y="355" fill="#cbd5e1" font-size="11.5">Z_in ≈ 2.1 kΩ  |  Z_out = R_C = 2.2 kΩ  |  r'_e = 13.5 Ω</text>
            <text id="hud-ce-dist" x="45" y="374" fill="#4ade80" font-size="12" font-weight="bold">สถานะคลื่น: เชิงเส้นสมบูรณ์ (No Distortion)</text>

            <!-- SECTION 2: DUAL REAL-TIME OSCILLOSCOPE (Right) -->
            <rect x="445" y="20" width="420" height="380" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
            <text x="655" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">ออสซิลโลสโคปเปรียบเทียบเฟสอินพุต/เอาต์พุต (Dual Trace)</text>

            <!-- CH1 Screen: Input -->
            <rect x="460" y="60" width="390" height="135" rx="6" fill="#02050c" stroke="#1e293b"/>
            <line x1="460" y1="127" x2="850" y2="127" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="557" y1="60" x2="557" y2="195" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="655" y1="60" x2="655" y2="195" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="752" y1="60" x2="752" y2="195" stroke="#1e293b" stroke-dasharray="2,2"/>
            <path id="trace-vin-ce" d="" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
            <text x="475" y="80" fill="#38bdf8" font-size="12" font-weight="bold">CH1: v_in (Input Signal)</text>
            <text id="ch1-vpp" x="835" y="80" fill="#38bdf8" font-size="11" text-anchor="end">V_pp: 60 mV</text>

            <!-- CH2 Screen: Output (Inverted 180° with Clipping) -->
            <rect x="460" y="210" width="390" height="175" rx="6" fill="#02050c" stroke="#1e293b"/>
            <line x1="460" y1="297" x2="850" y2="297" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="557" y1="210" x2="557" y2="385" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="655" y1="210" x2="655" y2="385" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="752" y1="210" x2="752" y2="385" stroke="#1e293b" stroke-dasharray="2,2"/>
            <line x1="460" y1="230" x2="850" y2="230" stroke="#f43f5e" stroke-dasharray="3,3" stroke-width="1"/>
            <text x="840" y="225" fill="#f87171" font-size="9" text-anchor="end">Cutoff Limit (V_CC)</text>
            <line x1="460" y1="365" x2="850" y2="365" stroke="#f43f5e" stroke-dasharray="3,3" stroke-width="1"/>
            <text x="840" y="378" fill="#f87171" font-size="9" text-anchor="end">Saturation Limit (0.2V)</text>

            <path id="trace-vout-ce" d="" fill="none" stroke="#4ade80" stroke-width="2.5"/>
            <text x="475" y="230" fill="#4ade80" font-size="12" font-weight="bold">CH2: v_out (Amplified & Inverted 180°)</text>
            <text id="ch2-vpp" x="720" y="230" fill="#4ade80" font-size="11" text-anchor="end">V_pp: 5.1 V</text>
        </svg>
    `;

    const traceVin = document.getElementById('trace-vin-ce');
    const traceVout = document.getElementById('trace-vout-ce');
    const hudGain = document.getElementById('hud-ce-gain');
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

        const voutPeak_mV = vinPeak * actualGain;
        const voutPeak_V = voutPeak_mV / 1000;

        if (ch1Vpp) ch1Vpp.innerText = `V_pp: ${(vinPeak * 2).toFixed(0)} mV`;
        if (ch2Vpp) ch2Vpp.innerText = `V_pp: ${Math.min(11.8, voutPeak_V * 2).toFixed(2)} V`;
        if (hudGain) hudGain.innerText = `อัตราขยาย: A_v = -${actualGain.toFixed(1)}x (${hasBypass ? 'Bypass C_E ON' : 'Swamped Without C_E'})`;

        const isClipped = voutPeak_V > 5.5;
        if (hudDist) {
            if (isClipped) {
                hudDist.innerHTML = `<tspan fill="#f87171" font-weight="bold">⚠️ เกิดการตัดยอดคลื่น (Clipping Distortion! ชน Saturation/Cutoff)</tspan>`;
            } else {
                hudDist.innerHTML = `<tspan fill="#4ade80" font-weight="bold">สถานะคลื่น: สัญญาณไซน์เชิงเส้นสมบูรณ์ (Linear Undistorted)</tspan>`;
            }
        }

        const w = 390;
        const x0 = 460;
        const y0_in = 127;
        const y0_out = 297;

        let dVin = '';
        let dVout = '';

        for (let i = 0; i <= w; i += 3) {
            const angle = (i / w) * 4 * Math.PI + timePhase;
            const sinVal = Math.sin(angle);
            const yIn = y0_in - sinVal * (vinPeak * 0.4);

            let outOffset = sinVal * (voutPeak_V * 11.5);
            const maxClip = 64;
            if (outOffset > maxClip) outOffset = maxClip;
            if (outOffset < -maxClip) outOffset = -maxClip;

            const yOut = y0_out + outOffset;

            if (i === 0) {
                dVin = `M ${x0 + i} ${yIn}`;
                dVout = `M ${x0 + i} ${yOut}`;
            } else {
                dVin += ` L ${x0 + i} ${yIn}`;
                dVout += ` L ${x0 + i} ${yOut}`;
            }
        }

        if (traceVin) traceVin.setAttribute('d', dVin);
        if (traceVout) {
            traceVout.setAttribute('d', dVout);
            traceVout.setAttribute('stroke', isClipped ? '#f87171' : '#4ade80');
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
   5. CB & CC (EMITTER FOLLOWER) SIMULATOR: Loading Effect & Lab
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
        <div class="ctrl-group">
            <label>โหลดเอาต์พุต (R_L):</label>
            <input type="range" id="sl-cbcc-rl" min="0.05" max="20" step="0.1" value="${RL}">
            <span class="val-badge" id="val-cbcc-rl">${RL >= 1 ? RL.toFixed(1) + ' kΩ' : (RL * 1000).toFixed(0) + ' Ω'}</span>
        </div>
        <div style="color: #94a3b8; font-size: 0.88rem; margin-left: auto;">
            💎 สังเกต <b>Loading Effect</b>: CC สามารถขับโหลดความต้านทานต่ำได้ดีเยี่ยม
        </div>
    `;

    const btnCC = document.getElementById('btn-cfg-cc');
    const btnCB = document.getElementById('btn-cfg-cb');
    const slRL = document.getElementById('sl-cbcc-rl');

    btnCC.addEventListener('click', () => { mode = 'CC'; updatePills(); render(); });
    btnCB.addEventListener('click', () => { mode = 'CB'; updatePills(); render(); });

    function updatePills() {
        btnCC.classList.toggle('active', mode === 'CC');
        btnCB.classList.toggle('active', mode === 'CB');
    }

    slRL.addEventListener('input', e => {
        RL = parseFloat(e.target.value);
        document.getElementById('val-cbcc-rl').innerText = RL >= 1 ? RL.toFixed(1) + ' kΩ' : (RL * 1000).toFixed(0) + ' Ω';
    });

    function render() {
        if (mode === 'CC') {
            canvas.innerHTML = `
                <svg viewBox="0 0 880 410" id="anim-svg">
                    <!-- SECTION 1: CC SCHEMATIC (Left) -->
                    <rect x="20" y="20" width="450" height="370" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                    <text x="245" y="45" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">วงจร Common Collector (Emitter Follower)</text>

                    <line x1="70" y1="70" x2="380" y2="70" stroke="#f43f5e" stroke-width="2.5"/>
                    <text x="385" y="75" fill="#f43f5e" font-size="12" font-weight="bold">+V_CC (12V)</text>

                    <line x1="280" y1="70" x2="280" y2="147" stroke="#cbd5e1" stroke-width="2.5"/>
                    <circle cx="280" cy="147" r="3.5" fill="#38bdf8"/>

                    ${drawIEEETransistor(240, 175, 'NPN', 0, 1.0)}

                    <line x1="50" y1="175" x2="80" y2="175" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="80" y1="165" x2="80" y2="185" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="86" y1="165" x2="86" y2="185" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="86" y1="175" x2="202" y2="175" stroke="#38bdf8" stroke-width="2"/>
                    <circle cx="50" cy="175" r="4" fill="#38bdf8"/>
                    <text x="40" y="160" fill="#38bdf8" font-size="12" font-weight="bold">v_in</text>

                    <line x1="280" y1="202" x2="280" y2="230" stroke="#cbd5e1" stroke-width="2.5"/>
                    <circle cx="280" cy="230" r="4" fill="#4ade80"/>

                    <line x1="280" y1="230" x2="280" y2="250" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="272" y="250" width="16" height="36" fill="#1e293b" stroke="#fbbf24"/>
                    <text x="295" y="272" fill="#fbbf24" font-size="11" font-weight="bold">R_E = 1k</text>
                    <line x1="280" y1="286" x2="280" y2="310" stroke="#cbd5e1" stroke-width="2"/>

                    <line x1="265" y1="310" x2="295" y2="310" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="270" y1="315" x2="290" y2="315" stroke="#cbd5e1" stroke-width="2"/>

                    <line x1="280" y1="230" x2="330" y2="230" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="330" y1="220" x2="330" y2="240" stroke="#4ade80" stroke-width="2"/>
                    <line x1="336" y1="220" x2="336" y2="240" stroke="#4ade80" stroke-width="2"/>
                    <line x1="336" y1="230" x2="380" y2="230" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="372" y="245" width="16" height="36" fill="#1e293b" stroke="#4ade80"/>
                    <line x1="380" y1="230" x2="380" y2="245" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="380" y1="281" x2="380" y2="310" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="365" y1="310" x2="395" y2="310" stroke="#cbd5e1" stroke-width="2"/>
                    <text x="398" y="267" fill="#4ade80" font-size="11" font-weight="bold">R_L</text>
                    <text x="400" y="235" fill="#4ade80" font-size="12" font-weight="bold">v_out</text>

                    <rect x="35" y="325" width="420" height="55" rx="6" fill="rgba(15,23,42,0.9)" stroke="#334155"/>
                    <text id="cc-av-text" x="45" y="347" fill="#4ade80" font-size="12" font-weight="bold">A_v ≈ 0.985 (เฟสตรงกัน 0°)</text>
                    <text x="45" y="367" fill="#cbd5e1" font-size="11.5">Z_in ≈ 180 kΩ (สูงมาก)  |  Z_out ≈ 15 Ω (ต่ำมาก ป้องกัน Loading Effect)</text>

                    <!-- SECTION 2: COMPARISON & LIVE OSCILLOSCOPE (Right) -->
                    <rect x="490" y="20" width="370" height="370" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                    <text x="675" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">รูปคลื่นเปรียบเทียบ (Phase & Amplitude)</text>

                    <rect x="505" y="65" width="340" height="175" rx="6" fill="#02050c" stroke="#1e293b"/>
                    <line x1="505" y1="152" x2="845" y2="152" stroke="#1e293b" stroke-dasharray="2,2"/>
                    <path id="cc-trace-vin" d="" fill="none" stroke="#38bdf8" stroke-width="2"/>
                    <path id="cc-trace-vout" d="" fill="none" stroke="#4ade80" stroke-width="2.2" stroke-dasharray="4,2"/>
                    <text x="515" y="85" fill="#38bdf8" font-size="11" font-weight="bold">v_in (Input Signal)</text>
                    <text x="515" y="105" fill="#4ade80" font-size="11" font-weight="bold">v_out (เกาะตาม ไม่กลับเฟส)</text>

                    <rect x="505" y="255" width="340" height="120" rx="8" fill="rgba(15,23,42,0.85)" stroke="#334155"/>
                    <text x="520" y="278" fill="#fbbf24" font-size="12.5" font-weight="bold">🎯 การประยุกต์ใช้งานเด่นของ Emitter Follower:</text>
                    <text x="520" y="300" fill="#cbd5e1" font-size="11.5">• <b>วงจรบัฟเฟอร์ (Buffer Stage):</b> ป้องกันโหลดรบกวนสัญญาณ</text>
                    <text x="520" y="322" fill="#cbd5e1" font-size="11.5">• <b>Impedance Matching:</b> เชื่อมสัญญาณอิมพีแดนซ์สูงไปต่ำ</text>
                    <text x="520" y="344" fill="#cbd5e1" font-size="11.5">• <b>ภาคขับเอาต์พุตกำลัง (Power Driver):</b> ขับลำโพง 4Ω - 8Ω</text>
                </svg>
            `;
        } else {
            canvas.innerHTML = `
                <svg viewBox="0 0 880 410" id="anim-svg">
                    <rect x="20" y="20" width="450" height="370" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                    <text x="245" y="45" fill="#4ade80" font-size="14" font-weight="700" text-anchor="middle">วงจรขยาย Common Base (CB - RF & High Frequency)</text>

                    <line x1="70" y1="70" x2="380" y2="70" stroke="#f43f5e" stroke-width="2.5"/>
                    <text x="385" y="75" fill="#f43f5e" font-size="12" font-weight="bold">+V_CC (12V)</text>

                    <line x1="280" y1="70" x2="280" y2="100" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="272" y="100" width="16" height="36" fill="#1e293b" stroke="#4ade80"/>
                    <text x="295" y="122" fill="#4ade80" font-size="11" font-weight="bold">R_C</text>
                    <line x1="280" y1="136" x2="280" y2="147" stroke="#cbd5e1" stroke-width="2"/>

                    ${drawIEEETransistor(240, 175, 'NPN', 0, 1.0)}

                    <line x1="202" y1="175" x2="160" y2="175" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="160" y1="175" x2="160" y2="230" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="152" y1="230" x2="168" y2="230" stroke="#a78bfa" stroke-width="2.5"/>
                    <line x1="152" y1="236" x2="168" y2="236" stroke="#a78bfa" stroke-width="2.5"/>
                    <text x="175" y="238" fill="#a78bfa" font-size="10">C_B</text>
                    <line x1="160" y1="236" x2="160" y2="260" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="150" y1="260" x2="170" y2="260" stroke="#cbd5e1" stroke-width="2"/>

                    <line x1="280" y1="202" x2="280" y2="235" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="280" cy="235" r="4" fill="#38bdf8"/>
                    <line x1="280" y1="235" x2="280" y2="255" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="272" y="255" width="16" height="34" fill="#1e293b" stroke="#fbbf24"/>
                    <text x="295" y="275" fill="#fbbf24" font-size="11">R_E</text>
                    <line x1="280" y1="289" x2="280" y2="310" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="265" y1="310" x2="295" y2="310" stroke="#cbd5e1" stroke-width="2"/>

                    <line x1="280" y1="235" x2="340" y2="235" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="340" cy="235" r="4" fill="#38bdf8"/>
                    <text x="350" y="240" fill="#38bdf8" font-size="12" font-weight="bold">v_in (Emitter)</text>

                    <line x1="280" y1="147" x2="350" y2="147" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="350" cy="147" r="4" fill="#4ade80"/>
                    <text x="360" y="152" fill="#4ade80" font-size="12" font-weight="bold">v_out</text>

                    <rect x="35" y="325" width="420" height="55" rx="6" fill="rgba(15,23,42,0.9)" stroke="#334155"/>
                    <text x="45" y="347" fill="#4ade80" font-size="12" font-weight="bold">A_v ≈ 85x (เฟสตรงกัน 0° ไม่กลับเฟส)</text>
                    <text x="45" y="367" fill="#cbd5e1" font-size="11.5">Z_in ≈ 15 Ω (ต่ำมาก)  |  Z_out ≈ 2.2 kΩ (สูง)  |  A_i ≈ α < 1</text>

                    <rect x="490" y="20" width="370" height="370" rx="12" fill="#040812" stroke="#28375a" stroke-width="1.5"/>
                    <text x="675" y="45" fill="#cbd5e1" font-size="14" font-weight="700" text-anchor="middle">จุดเด่นความถี่สูงของ Common Base</text>

                    <rect x="510" y="70" width="330" height="75" rx="8" fill="rgba(74,222,128,0.08)" stroke="#4ade80"/>
                    <text x="525" y="95" fill="#4ade80" font-size="13" font-weight="bold">💎 กำจัด Miller Effect อย่างสมบูรณ์</text>
                    <text x="525" y="115" fill="#cbd5e1" font-size="11.5">ขา Base ลงกราวด์ AC ทำหน้าที่เป็นเกราะกำบังความจุ C_bc</text>
                    <text x="525" y="132" fill="#cbd5e1" font-size="11.5">ทำให้ Bandwidth กว้างกว่าวงจร CE หลายสิบเท่า</text>

                    <rect x="510" y="160" width="330" height="110" rx="8" fill="rgba(15,23,42,0.85)" stroke="#334155"/>
                    <text x="525" y="185" fill="#38bdf8" font-size="12.5" font-weight="bold">🎯 การประยุกต์ใช้งานจริง:</text>
                    <text x="525" y="208" fill="#cbd5e1" font-size="11.5">• <b>วงจรขยายความถี่วิทยุ RF / VHF / UHF</b></text>
                    <text x="525" y="228" fill="#cbd5e1" font-size="11.5">• วงจรพรีแอมป์สำหรับไมโครโฟนความต้านทานต่ำ (Moving-Coil)</text>
                    <text x="525" y="248" fill="#cbd5e1" font-size="11.5">• ภาคฟรอนต์เอนด์รับสัญญาณดาวเทียมและสายอากาศ</text>
                </svg>
            `;
        }

        if (mode === 'CC') {
            const trVin = document.getElementById('cc-trace-vin');
            const trVout = document.getElementById('cc-trace-vout');
            const avText = document.getElementById('cc-av-text');

            let isRunning = true;
            function animScope() {
                if (!isRunning) return;
                timePhase += 0.05;

                const rePrime = 15.0;
                const RE_ohm = 1000.0;
                const RL_ohm = RL * 1000.0;
                const Reff = (RE_ohm * RL_ohm) / (RE_ohm + RL_ohm);
                const actualAv = Reff / (rePrime + Reff);

                if (avText) avText.innerText = `A_v ≈ ${actualAv.toFixed(3)} (ขับโหลด R_L = ${RL >= 1 ? RL.toFixed(1) + 'kΩ' : (RL*1000).toFixed(0) + 'Ω'})`;

                const w = 340;
                const x0 = 505;
                const y0 = 152;
                let dIn = '';
                let dOut = '';

                for (let i = 0; i <= w; i += 4) {
                    const ang = (i / w) * 4 * Math.PI + timePhase;
                    const sinVal = Math.sin(ang);
                    const yIn = y0 - sinVal * 42;
                    const yOut = y0 - sinVal * (42 * actualAv);

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
    }

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

    controls.innerHTML = `
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-sw-relay">โหลดขดลวดรีเลย์ (Inductive)</button>
            <button class="toggle-pill" id="btn-sw-led">โหลด LED (Resistive)</button>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill active" id="btn-sw-flyback">Flyback Diode: [มีไดโอด ปลอดภัย]</button>
        </div>
        <div class="ctrl-group">
            <label>แรงดันอินพุต (V_in):</label>
            <input type="range" id="sl-sw-vin" min="0.0" max="5.0" step="0.1" value="${Vin}">
            <span class="val-badge" id="val-sw-vin">${Vin.toFixed(1)} V</span>
        </div>
        <div class="ctrl-group">
            <button class="toggle-pill" id="btn-sw-pair">โครงสร้าง: Single BJT</button>
        </div>
        <button class="btn-control" id="btn-sw-toggle-fast" style="margin-left:auto;">⚡ สลับ 0V ↔ 5V</button>
    `;

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
        render();
    });

    btnLed.addEventListener('click', () => {
        loadType = 'led';
        btnLed.classList.add('active');
        btnRelay.classList.remove('active');
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

    function render() {
        const isDarlington = switchType === 'darlington';
        const vbeThreshold = isDarlington ? 1.4 : 0.7;
        const isON = Vin >= vbeThreshold;
        const RB = 4.7;
        const betaEff = isDarlington ? 5000 : 100;

        let VBE = isON ? vbeThreshold : Vin;
        let IB_uA = isON ? ((Vin - vbeThreshold) / RB) * 1000 : 0;
        let IC_sat_mA = loadType === 'relay' ? (12.0 - 0.2) / 0.16 : (5.0 - 2.0 - 0.2) / 0.15;
        let IC_mA = Math.min(IC_sat_mA, (IB_uA * betaEff) / 1000);

        let VCE = 0.2;
        let switchStatus = 'CLOSED / ON (Saturation)';
        let statusColor = '#4ade80';

        if (!isON) {
            VCE = loadType === 'relay' ? 12.0 : 5.0;
            switchStatus = 'OPEN / OFF (Cutoff)';
            statusColor = '#94a3b8';
            IC_mA = 0;
        }

        const showSpike = (!hasFlyback) && (!isON) && (loadType === 'relay');

        canvas.innerHTML = `
            <svg viewBox="0 0 880 410" id="anim-svg">
                <!-- SECTION 1: IEEE SCHEMATIC (Left) -->
                <rect x="20" y="20" width="460" height="375" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="250" y="45" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">
                    ${loadType === 'relay' ? 'วงจรสวิตช์ BJT ขับขดลวดรีเลย์ (Inductive)' : 'วงจรสวิตช์ BJT ขับหลอด LED (Resistive)'}
                </text>

                <line x1="60" y1="70" x2="410" y2="70" stroke="#f43f5e" stroke-width="2.5"/>
                <text x="415" y="75" fill="#f43f5e" font-size="12" font-weight="bold">${loadType === 'relay' ? '+12V' : '+5V'}</text>

                ${loadType === 'relay' ? `
                    <line x1="320" y1="70" x2="320" y2="95" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="305" y="95" width="30" height="50" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                    <path d="M 320 98 Q 330 108 320 118 Q 330 128 320 138" stroke="#38bdf8" stroke-width="2" fill="none"/>
                    <text x="275" y="125" fill="#38bdf8" font-size="11" font-weight="bold">Relay Coil</text>

                    ${hasFlyback ? `
                        <line x1="320" y1="95" x2="375" y2="95" stroke="#4ade80" stroke-width="1.8"/>
                        <line x1="375" y1="95" x2="375" y2="145" stroke="#4ade80" stroke-width="1.8"/>
                        <line x1="375" y1="145" x2="320" y2="145" stroke="#4ade80" stroke-width="1.8"/>
                        <polygon points="368,125 382,125 375,113" fill="#4ade80"/>
                        <line x1="366" y1="113" x2="384" y2="113" stroke="#4ade80" stroke-width="2"/>
                        <text x="390" y="125" fill="#4ade80" font-size="9" font-weight="bold">Flyback</text>
                    ` : `
                        <text x="390" y="125" fill="#f87171" font-size="9" font-weight="bold">[ไม่มีไดโอด]</text>
                    `}

                    ${showSpike ? `
                        <rect x="290" y="80" width="135" height="75" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#f87171" stroke-width="2"/>
                        <path d="M 320 145 L 340 120 L 350 160 L 370 110" stroke="#f43f5e" stroke-width="3" fill="none"/>
                        <text x="355" y="75" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">⚡ SPIKE > 250V!</text>
                    ` : ''}

                    <line x1="320" y1="145" x2="320" y2="180" stroke="#cbd5e1" stroke-width="2"/>
                ` : `
                    <line x1="320" y1="70" x2="320" y2="95" stroke="#cbd5e1" stroke-width="2"/>
                    <polygon points="310,105 330,105 320,122" fill="${isON ? '#4ade80' : '#334155'}" stroke="${isON ? '#22c55e' : '#64748b'}" stroke-width="1.5"/>
                    <line x1="310" y1="122" x2="330" y2="122" stroke="${isON ? '#22c55e' : '#64748b'}" stroke-width="2"/>
                    ${isON ? `
                        <circle cx="320" cy="115" r="22" fill="#4ade80" fill-opacity="0.3"/>
                        <line x1="330" y1="110" x2="345" y2="102" stroke="#4ade80" stroke-width="2"/>
                        <line x1="333" y1="120" x2="348" y2="112" stroke="#4ade80" stroke-width="2"/>
                    ` : ''}
                    <line x1="320" y1="122" x2="320" y2="140" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="312" y="140" width="16" height="32" fill="#1e293b" stroke="#38bdf8"/>
                    <text x="335" y="160" fill="#38bdf8" font-size="10">150Ω</text>
                    <line x1="320" y1="172" x2="320" y2="190" stroke="#cbd5e1" stroke-width="2"/>
                `}

                ${isDarlington ? `
                    ${drawIEEETransistor(280, 210, 'NPN', 0, 0.85)}
                    ${drawIEEETransistor(320, 240, 'NPN', 0, 0.85)}
                    <rect x="235" y="180" width="135" height="100" rx="6" fill="none" stroke="#a78bfa" stroke-dasharray="3,3"/>
                    <text x="240" y="195" fill="#a78bfa" font-size="9" font-weight="bold">Darlington (β ≈ 5000)</text>
                ` : `
                    ${drawIEEETransistor(280, 210, 'NPN', 0, 1.0)}
                `}

                <line x1="320" y1="238" x2="320" y2="295" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="305" y1="295" x2="335" y2="295" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="310" y1="300" x2="330" y2="300" stroke="#cbd5e1" stroke-width="2"/>

                <line x1="242" y1="210" x2="195" y2="210" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="155" y="202" width="40" height="16" fill="#1e293b" stroke="#38bdf8"/>
                <text x="175" y="196" fill="#38bdf8" font-size="10" text-anchor="middle">R_B = 4.7k</text>
                <line x1="155" y1="210" x2="90" y2="210" stroke="#cbd5e1" stroke-width="2"/>

                <rect x="40" y="190" width="50" height="40" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.8"/>
                <text x="65" y="215" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">${Vin.toFixed(1)}V</text>
                <text x="65" y="245" fill="#94a3b8" font-size="10" text-anchor="middle">V_in (MCU)</text>

                <!-- SECTION 2: DASHBOARD & DMM (Right) -->
                <rect x="500" y="20" width="360" height="375" rx="12" fill="#080f1e" stroke="#28375a" stroke-width="1.5"/>
                <text x="680" y="45" fill="#a78bfa" font-size="14" font-weight="700" text-anchor="middle">สถานะการทำงาน & มัลติมิเตอร์เสมือน</text>

                <rect x="520" y="70" width="320" height="55" rx="8" fill="rgba(15,23,42,0.9)" stroke="${showSpike ? '#f87171' : statusColor}" stroke-width="2"/>
                <text x="680" y="95" fill="${showSpike ? '#f87171' : statusColor}" font-size="14.5" font-weight="bold" text-anchor="middle">
                    ${showSpike ? '⚠️ วิกฤต: เกิด Back-EMF กระชาก!' : switchStatus}
                </text>
                <text x="680" y="115" fill="#cbd5e1" font-size="11" text-anchor="middle">V_CE = ${VCE.toFixed(2)} V  |  I_Load = ${IC_mA.toFixed(1)} mA</text>

                <rect x="520" y="140" width="320" height="140" rx="8" fill="rgba(15,23,42,0.7)" stroke="#334155"/>
                <text x="535" y="165" fill="#cbd5e1" font-size="12">แรงดันควบคุม V_in:</text>
                <text x="825" y="165" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="end">${Vin.toFixed(1)} V</text>
                <line x1="535" y1="175" x2="825" y2="175" stroke="#1e293b"/>

                <text x="535" y="195" fill="#cbd5e1" font-size="12">แรงดันตกคร่อมรอยต่อ V_BE:</text>
                <text x="825" y="195" fill="#a78bfa" font-size="12" font-weight="bold" text-anchor="end">${VBE.toFixed(2)} V</text>
                <line x1="535" y1="205" x2="825" y2="205" stroke="#1e293b"/>

                <text x="535" y="225" fill="#cbd5e1" font-size="12">กระแสขับเบส I_B:</text>
                <text x="825" y="225" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="end">${IB_uA.toFixed(0)} µA</text>
                <line x1="535" y1="235" x2="825" y2="235" stroke="#1e293b"/>

                <text x="535" y="255" fill="#cbd5e1" font-size="12">กำลังไฟฟ้าสูญเสียในสวิตช์ P_D:</text>
                <text x="825" y="255" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="end">${(VCE * IC_mA).toFixed(1)} mW</text>

                <rect x="520" y="295" width="320" height="85" rx="8" fill="rgba(15,23,42,0.9)" stroke="${hasFlyback ? '#4ade80' : '#f87171'}"/>
                <text x="535" y="318" fill="${hasFlyback ? '#4ade80' : '#f87171'}" font-size="11.5" font-weight="bold">
                    ${hasFlyback ? '🛡️ มี Flyback Diode: ปลอดภัย 100%' : '⚠️ ไม่มี Flyback Diode: เสี่ยงพังทลาย!'}
                </text>
                <text x="535" y="340" fill="#cbd5e1" font-size="11">
                    ${hasFlyback ? 'กระแสเหนี่ยวนำขดลวดจะไหลวนผ่านไดโอดสลายตัวอย่างราบรื่น ไม่มี Spike' : 'เมื่อสั่งตัดวงจร Back-EMF พุ่งทะลุ 250V ทำลายรอยต่อทรานซิสเตอร์ทันที!'}
                </text>
            </svg>
        `;
    }

    render();
}
