import Link from 'next/link'
import SectionImage from './section-image'
import { Footer } from './legal-site'

const enSections = [
 ['Supporting Affidavit: What Does the Applicant Swear to?', 'A supporting affidavit is the applicant’s own statement verifying marital history, the real reason for requesting another marriage and the actual status of the existing spouse’s consent. It does not issue, prove or substitute for the Arbitration Council’s prior written permission. Rule 15 expressly calls for a signed written application and brief grounds, but does not by itself prescribe a separate affidavit as a universal requirement. Some receiving offices may request an affidavit as part of local filing practice.', 'In the affidavit, identify actual facts and dates, do not insert every conceivable reason from a template, and do not make unsupported medical or character allegations. An oath must actually be sworn or affirmed before an authorized officer where required.'],
 ['Illustrative Reasons for a Section 6 Supporting Affidavit', 'Rule 14 refers to sterility, physical infirmity, physical unfitness for conjugal relations, deliberate non-compliance with a restitution of conjugal rights decree and serious mental incapacity, among other possible circumstances. In practical applications, prolonged childlessness may be explained with accurate dates without automatically blaming the wife; any serious mental or physical condition should be supported by reliable evidence; and prolonged separate residence may be described with its duration and attempted reconciliation without calling residence with parents misconduct.', 'These are illustrative circumstances rather than guaranteed grounds for approval. The Arbitration Council examines whether the proposal is necessary and just in the circumstances. Protect confidential medical information and avoid stigmatizing language.'],

 ['What Does Permission for Bigamy Mean in Pakistani Family Law?',
  'The everyday term “bigamy permission” refers here to permission for another marriage while a prior Muslim marriage remains subsisting. Section 6 of the Muslim Family Laws Ordinance, 1961 describes the legal issue as polygamy. It imposes a prior written permission requirement rather than treating a second marriage as a private transaction between the proposed spouses. The written decision of the competent Arbitration Council must precede the later Nikah.',
  'A sample permission certificate is useful for recognizing the kind of record a Union Council may issue, but it is not a government authorization. The applicant needs a proper application, a legally constituted Council process and the recorded decision.'],
 ['Section 6 and the Requirement of Previous Written Permission',
  'Section 6(1) prohibits a man who is already married from contracting an additional marriage without previous written permission of the Arbitration Council. Section 6(2) requires a written application to the Chairman explaining the reasons and whether consent from the existing wife or wives has been obtained. The existing marriage and the relevant family circumstances must be disclosed honestly.',
  'A notarized undertaking, private affidavit, unsigned draft, lawyer’s letter or sample found online is not the permission specified by the Ordinance. The timing matters: approval sought after a marriage is not the same as approval obtained before it.'],
 ['Role of the Union Council Chairman and Arbitration Council',
  'The Chairman receives the application. Section 6 requires the applicant and the existing wife or wives to be asked to nominate representatives. The Arbitration Council considers the reasons and decides whether the proposed marriage is necessary and just. It can impose conditions where authorized and must record reasons for its decision.',
  'This statutory process protects participation and a recorded decision. Applicants should preserve copies of submissions, notices, acknowledgements and the order. Never rely on a pre-printed blank certificate as evidence that permission was actually granted.'],
 ['Which Union Council Has Jurisdiction?',
  'Rule 3 of the 1961 procedural rules generally assigns a second-marriage application to the Union Council for the locality where the existing wife resides when the application is made. Where there are multiple existing wives, the rule refers to the residence of the wife most recently married. Local and provincial changes should be verified before filing.',
  'For example, a person working in Karachi cannot assume any conveniently located Council has jurisdiction if the existing wife lives in another district. Giving an incorrect address may cause notice and procedural problems.'],
 ['How to Draft an Application for Permission for Second Marriage',
  'A properly drafted application identifies the applicant, his CNIC and residence, the existing marriage, the existing spouse, reasons for the proposed marriage, and whether the existing wife has consented. The applicant requests consideration by the Arbitration Council under section 6, states the facts without exaggeration and signs and dates the request.',
  'Rule 15 describes a signed written application and a brief statement of grounds. Handwriting is not prohibited by this general format. The receiving office should confirm its current prescribed requirements, fee, identity documents and supporting evidence.'],
 ['Documents to Prepare Before Filing',
  'Practical supporting papers may include the applicant’s identity document, existing Nikah Nama or marriage record, full name and address of the wife or wives, a statement of reasons, and any genuine written consent or correspondence relevant to the disclosed consent position. If either party resides abroad, service arrangements and authority for any representative should be checked.',
  'A nationwide mandatory list should not be inferred from one Union Council’s practice. Applicants must follow the applicable local rules and should never submit altered identity records, forged consent or a borrowed official seal.'],
 ['Is the First Wife’s Consent Mandatory or Sufficient?',
  'The federal-text section 6 requires disclosure of whether consent has been obtained and requires the Arbitration Council to consider whether the additional marriage is necessary and just. The existence or absence of consent is material; it is not a substitute for the Council’s written permission. Provincial amendments and actual facts may affect the analysis.',
  'The Punjab Commission on the Status of Women describes enhanced protections under Punjab’s 2015 amendments. It is especially important to check the statute applicable to the particular Council, instead of stating one consent rule without any provincial qualification.'],
 ['How the Arbitration Council Considers Necessity and Justice',
  'Rule 14 sets out certain non-exhaustive factors that an Arbitration Council may consider, without confining its power to those examples. The list is historically worded and should not be treated as an automatic entitlement or an invitation to make allegations about an existing spouse. The Council must evaluate the genuine circumstances and record its reasons.',
  'Any person drafting grounds should avoid stigma, medical speculation or invented allegations. A useful application explains concrete facts and the proposed arrangements for maintaining existing obligations.'],
 ['Islamic Teachings: Surah An-Nisa 4:3',
  'The Qur’an discusses plural marriage in Surah An-Nisa, verse 3. It permits marriage to two, three or four women in the stated context, while emphasizing that if fair treatment cannot be maintained, the direction is to marry one. Justice is therefore central to the Islamic discussion, not an optional afterthought.',
  'This verse does not itself provide the written approval of a Pakistani Arbitration Council. A person seeking an additional marriage must distinguish religious discussion from a statutory authorization required under the national and applicable provincial legal framework.'],
 ['Islamic Teachings: Surah An-Nisa 4:129 and Hadith',
  'Surah An-Nisa 4:129 acknowledges that complete emotional equality is beyond human control yet warns against such total preference that another wife is left suspended. Sunan Abi Dawud, Hadith 2133, warns against unfair inclination between two wives. Read together, these sources emphasize responsibility, fair provision and avoiding harm.',
  'These religious references are discussed for general education; individual questions of Islamic jurisprudence should be referred to a qualified scholar, while statutory permission remains a matter for the competent Council.'],
 ['Second Marriage Without Permission: Legal Consequences',
  'Section 6(5) provides that outstanding prompt and deferred dower owed to the existing wife or wives becomes payable immediately if another marriage is contracted without the requisite permission. The provision also contemplates punishment following conviction upon complaint. Marriage validity, registration and financial or criminal consequences should not be collapsed into a single assertion.',
  'The original federal-text penalty clause differs from Punjab’s amended text. Punjab’s 2015 amendment provides imprisonment that may extend to one year and a fine of PKR 500,000. Legal practitioners must check current law in Sindh, Punjab, Islamabad and other regions before advising on a specific penalty.'],
 ['Difference Between an Application and Permission Certificate',
  'An application is the husband’s written request for approval. A permission certificate or letter records a competent authority’s decision if approval is granted. In the educational sample, Union Council number, locality, application number, applicant name and all dates are blanks, and no genuine official signature or seal appears.',
  'The downloadable sample is marked SAMPLE so nobody should mistake it for a real approval. It must not be modified to falsely imply that a Council has decided an actual case. Only the relevant authority can issue authentic permission.'],
 ['What Happens at the Hearing and After the Decision?',
  'After the application is accepted, the Chairman follows the rules regarding representatives and notices. The Council considers the parties’ circumstances, statutory criteria and records its decision. Parties should request the authenticated record and observe applicable rules for any challenge or revision.',
  'If permission is granted, read conditions carefully before contracting the proposed Nikah. If refused, obtain legal advice about lawful review instead of attempting to recreate the decision on a blank specimen.'],
 ['Rights of the Existing Wife and Family Obligations',
  'The process must not ignore an existing spouse’s rights. Unpaid dower, lawful maintenance, children’s welfare, genuine financial capacity and the practical possibility of fair treatment matter. Requiring or procuring a signature through pressure can lead to further disputes and does not replace a lawfully constituted Arbitration Council’s decision.',
  'An accurate application should present the proposal transparently and avoid turning general specimen wording into claims about a specific spouse.'],
 ['Advice for Overseas Pakistanis and Cross-District Cases',
  'Overseas residence, a spouse living in another district, an existing family dispute and uncertain service arrangements can affect the relevant Union Council and the evidence needed. First identify where the existing wife normally resides for jurisdiction and verify the current local rules before sending documents.',
  'A Pakistani lawyer can help assess whether representation is possible, how notices are served, and which documentary steps cannot be completed by a generic form alone.'],
 ['How to Use the Free Specimen and Blank Application',
  'Use the simple Urdu specimen only to understand likely headings, fields and decision-record layout. Use the separate application draft to organize your request. Neither document carries a seal, an individual officer’s signature, a case decision or a real Council number. Leave blank fields blank until accurate factual information is available.',
  'The site offers print-friendly educational versions of both documents. Open the format, then use your browser’s Print or Save as PDF feature. For filing and for any actual permission certificate, follow the directions of the competent Union Council.']
]
const enFAQs = [
 ['Can someone remarry in Pakistan without Arbitration Council permission?','Section 6 requires previous written permission while the existing marriage subsists. An unauthorized marriage raises legal and financial consequences.'],
 ['Who grants permission for another marriage?','The competent Arbitration Council considers and decides the application; the Chairman handles the process and communicates the official record.'],
 ['Does a first wife’s consent replace the permission?','No. Consent information is relevant but cannot replace the independent statutory requirement of prior written permission.'],
 ['Can I apply if my wife does not consent?','The application must truthfully disclose whether consent was obtained. The applicable provincial law, procedure and circumstances determine how the Council treats that position.'],
 ['Can I write the application by hand?','The general rules call for a signed written application stating grounds and the consent position. Check the local office’s requirements.'],
 ['Is the permission certificate issued by NADRA?','No. This is an Arbitration Council matter. NADRA identity and marriage registration documents are separate records.'],
 ['What does Rule 14 say?','It lists illustrative circumstances the Council may consider when assessing whether the proposal is necessary and just; it does not grant automatic permission.'],
 ['How many wives does Islamic teaching allow?','Surah An-Nisa 4:3 discusses two, three or four, with justice as an essential condition and one marriage if fairness is feared impossible.'],
 ['Which Qur’anic verse warns against inequity between wives?','Surah An-Nisa 4:129 warns against completely preferring one wife while leaving another neglected.'],
 ['What is the punishment in Punjab?','Punjab’s 2015 amendment states imprisonment up to one year and a PKR 500,000 fine, alongside applicable dower provisions.'],
 ['Is that penalty identical in every province?','No. Consult the text and amendments applicable in the particular province or territory.'],
 ['Will the application specimen itself authorize marriage?','No. Only the competent Arbitration Council’s genuine prior written decision can satisfy section 6.'],
 ['How should I prove the first marriage?','Ask the receiving Council about the Nikah Nama, registration record, relevant identity documents and any other required evidence.'],
 ['What if the husband has already contracted a second marriage?','Seek case-specific legal advice on dower, registration, complaints and possible court proceedings rather than trying to backdate a sample.'],
 ['Can an overseas Pakistani use this form?','It may assist drafting, but cross-border identity, notice, residence and jurisdiction must be checked first.'],
 ['Where can I get the official approval?','Apply to the competent Chairman and Arbitration Council; a website template is not an official channel for issuing approval.']
]
const urSections=[
 ['حلف نامہ برائے درخواست اجازت دوسری شادی — معاون بیان', 'حلف نامہ درخواست گزار کا اپنا بیانِ حلف ہوگا جس میں موجودہ ازدواجی حیثیت، دوسری شادی کی حقیقتاً موجود وجوہات اور پہلی بیوی کی رضامندی کی درست کیفیت درج ہوگی۔ حلف نامہ کسی یونین کونسل کا اجازت نامہ یا سرٹیفکیٹ نہیں۔ Rule 15 تحریری اور دستخط شدہ درخواست کا تقاضا کرتا ہے مگر ہر یونین کونسل میں الگ حلف نامہ لازمی قرار نہیں دیتا۔ مقامی دفتر اپنی ضروریات کے مطابق اسے طلب کرسکتا ہے۔', 'حلف کے لیے صرف صحیح واقعات، تاریخیں اور موجودہ ثبوت لکھیں۔ حلف کمشنر یا مجاز افسر کے سامنے حلف صرف اصل درخواست گزار دے۔ بے بنیاد الزام یا غیر تصدیق شدہ تشخیص نہ لکھیں۔'],
 ['اجازت نامہ دوسری شادی کے حلف نامے میں کن وجوہات کا ذکر کیا جاسکتا ہے؟', 'Rule 14 میں بانجھ پن، جسمانی بیماری یا ازدواجی تعلق کے لیے عدم استطاعت، عدالتی ڈگری برائے بحالی حقوق زوجیت کی دانستہ خلاف ورزی اور شدید ذہنی بیماری جیسی مثالیں شامل ہیں۔ کئی سال اولاد نہ ہونا، طبی مشکلات، طویل علیحدہ رہائش یا صلح کی کوششوں کا نتیجہ جیسی حقیقی صورتحال بھی متعلقہ بیان میں واضح کی جاسکتی ہے۔', 'اولاد نہ ہونے سے خود بخود بیوی کو ذمہ دار نہیں ٹھہرایا جاسکتا، اور میکے میں رہائش خود بخود قصور نہیں ہے۔ ذہنی بیماری کی بات صرف قابل اعتماد طبی ثبوت کی روشنی میں کی جائے۔ ہر درخواست کا منصفانہ اور ضروری ہونا ثالثی کونسل طے کرتی ہے۔'],

 ['دوسری شادی کے اجازت نامے کی قانونی حیثیت','پاکستان میں موجودہ شادی قائم رہنے کے دوران مزید نکاح کرنے کے لیے مسلم فیملی لاز آرڈیننس 1961 کی دفعہ 6 کے تحت ثالثی کونسل سے پہلے تحریری اجازت ضروری ہے۔ یہ قانون عام بول چال میں دوسری شادی کا اجازت نامہ یا Permission for Bigamy بھی کہلاتا ہے۔ ویب سائٹ پر رکھا گیا خالی نمونہ کسی سرکاری فیصلے کے برابر نہیں۔','اجازت نامے کی نقل یا فارم بھرنے سے حقیقی منظوری نہیں ملتی۔ درخواست گزار کو متعلقہ یونین کونسل میں قانونی طریقے سے درخواست دینا ہوگی، متعلقہ فریقوں کے حقوق کا لحاظ رکھنا ہوگا اور کونسل کے فیصلے کا انتظار کرنا ہوگا۔'],
 ['دفعہ 6 مسلم فیملی لاز آرڈیننس 1961','دفعہ 6 میں موجودہ شادی کے دوران مزید شادی کرنے سے پہلے ثالثی کونسل کی تحریری منظوری کا تقاضا درج ہے۔ قانون کہتا ہے کہ درخواست چیئرمین کے پاس مقررہ طریقے سے پیش کی جائے، اس میں دوسری شادی کی وجوہات اور پہلی بیوی یا بیویوں کی رضامندی کی حالت واضح کی جائے۔','درخواست میں حقیقت کے خلاف بات لکھنا یا فرضی رضامندی ظاہر کرنا مناسب نہیں۔ یونین کونسل کی کارروائی اور سرکاری ریکارڈ اصل حیثیت رکھتے ہیں۔'],
 ['اجازت نامہ دوسری شادی کون جاری کرتا ہے؟','درخواست چیئرمین کو دی جاتی ہے لیکن دوسری شادی کی منظوری کا قانونی معاملہ ثالثی کونسل طے کرتی ہے۔ دفعہ 6 کے مطابق موجودہ بیوی یا بیویوں اور درخواست گزار کو نمائندے نامزد کرنے کے لیے کہا جاتا ہے۔ کونسل یہ دیکھتی ہے کہ درخواست منصفانہ اور ضروری ہے یا نہیں۔','اس لیے صرف کسی مقامی شخص یا نکاح خواں کے دستخط سے اجازت نامہ تیار نہیں کیا جاسکتا۔ فیصلہ کی وجوہات درج ہونا قانونی عمل کا اہم حصہ ہے۔'],
 ['کس یونین کونسل میں درخواست جمع ہوگی؟','1961 کے قواعد کے قاعدہ 3 کے تحت عمومی طور پر موجودہ بیوی کی رہائش والی یونین کونسل متعلقہ ہوتی ہے۔ ایک سے زیادہ موجودہ بیویاں ہونے کی صورت میں قاعدہ آخری نکاح والی بیوی کا ذکر کرتا ہے۔ درخواست دینے سے پہلے صوبے، علاقے اور موجودہ قواعد کی تصدیق ضروری ہے۔','دوسرے ضلع میں ملازمت یا رہائش ہونے پر صرف سہولت کی خاطر کسی غیر متعلقہ یونین کونسل میں درخواست دینا قانونی اعتراض پیدا کرسکتا ہے۔'],
 ['اجازت نامہ دوسری شادی کی درخواست کیسے لکھیں؟','چیئرمین ثالثی کونسل کے نام درخواست میں اپنا نام، ولدیت، شناختی کارڈ نمبر، مکمل پتہ، پہلی شادی کی تفصیل، دوسری شادی کے حقیقی اسباب اور پہلی بیوی کی رضامندی یا عدم رضامندی درج کریں۔ درخواست پر دستخط اور تاریخ لگائیں۔','قاعدہ 15 میں تحریری اور دستخط شدہ درخواست کا ذکر ہے۔ ہاتھ سے لکھی درخواست بھی اصولی طور پر تحریری درخواست ہوتی ہے، تاہم متعلقہ دفتر اگر مخصوص طریقہ یا اضافی دستاویز مانگے تو اس کی تصدیق کریں۔'],
 ['اجازت کے لیے کون سی دستاویزات ساتھ رکھیں؟','شناختی کارڈ، موجودہ نکاح نامے کی تفصیل، زوجہ کا مکمل پتہ، درخواست کے وجوہات اور رضامندی سے متعلق اصل ریکارڈ مفید ہوسکتا ہے۔ اگر کوئی فریق بیرون ملک مقیم ہے تو نوٹس، نمائندگی اور پتہ سے متعلق صورتحال پہلے واضح کریں۔','ہر یونین کونسل کی فیس اور اضافی دستاویزات کا طریقہ یکساں ہونے کا دعویٰ درست نہیں۔ متعلقہ دفتر سے موجودہ ہدایات معلوم کرنا چاہیے۔'],
 ['پہلی بیوی کی رضامندی اور ثالثی کونسل کی اجازت','پہلی بیوی کی رضامندی ایک اہم متعلقہ حقیقت ہے، مگر وہ بذات خود ثالثی کونسل کی سابقہ تحریری اجازت نہیں۔ دفعہ 6 درخواست گزار سے یہ بتانے کا تقاضا کرتی ہے کہ رضامندی ملی ہے یا نہیں۔ صوبائی ترامیم اور واقعات کے مطابق قانونی مشورہ ضروری ہوسکتا ہے۔','رضامندی حاصل کرنے کے لیے دباؤ ڈالنا، غلط بیان دینا یا کسی اور کی جانب سے دستخط کرنا سنگین مسائل پیدا کرسکتا ہے۔'],
 ['ثالثی کونسل فیصلہ کیسے کرتی ہے؟','کونسل درخواست، متعلقہ فریقوں کی نمائندگی اور دوسرے حالات دیکھ کر فیصلہ کرتی ہے کہ دوسری شادی ضروری اور منصفانہ ہے یا نہیں۔ قاعدہ 14 میں کچھ مثالیں ہیں مگر کوئی ایک مثال خود بخود اجازت حاصل کرنے کا حق نہیں بناتی۔','درخواست میں کسی کے متعلق بے بنیاد طبی یا ذاتی الزام لگانے کے بجائے قابل تصدیق حقائق اور موجودہ ذمہ داریوں کی صورت واضح کرنی چاہیے۔'],
 ['اسلامی تعلیمات: سورۃ النساء آیت 3','قرآن مجید، سورۃ النساء کی آیت 3 میں عدل و انصاف کی شرط کے ساتھ ایک سے زیادہ نکاح کا ذکر موجود ہے، اور اگر انصاف نہ ہوسکنے کا خوف ہو تو ایک ہی شادی کی طرف رہنمائی کی گئی ہے۔ اسلام کے اس موضوع میں انصاف، حقوق اور ذمہ داریوں کو بنیادی اہمیت حاصل ہے۔','پاکستان کے قانون میں درکار یونین کونسل کی تحریری اجازت، اسلامی اصولوں کی عمومی بحث سے الگ ایک لازم قانونی مرحلہ ہے۔'],
 ['سورۃ النساء آیت 129 اور حدیثِ نبوی','سورۃ النساء آیت 129 میں انسان کی جذباتی برابری کی محدود استطاعت بیان ہونے کے ساتھ ایک بیوی کی طرف مکمل جھکاؤ کرکے دوسری کو معلق چھوڑنے سے منع کیا گیا ہے۔ سنن ابی داؤد حدیث 2133 میں دو بیویوں کے درمیان غیرمنصفانہ میلان سے متعلق تنبیہ موجود ہے۔','اسلامی تعلیمات کا مقصود بے انصافی سے بچنا اور ذمہ دارانہ طرزِ عمل اختیار کرنا ہے۔ کسی مخصوص فقہی مسئلے میں مستند دینی رہنمائی بھی لی جاسکتی ہے۔'],
 ['بغیر اجازت دوسری شادی کرنے کے قانونی نتائج','دفعہ 6(5) کے تحت اجازت کے بغیر دوسری شادی ہونے پر موجودہ بیوی یا بیویوں کے واجب الادا فوری و مؤخر حق مہر کی ادائیگی کا معاملہ پیدا ہوتا ہے اور شکایت پر سزا کی شق بھی موجود ہے۔ نکاح کی شرعی یا قانونی حیثیت، رجسٹریشن اور سزا الگ الگ سوال ہیں۔','پنجاب کی 2015 کی ترمیم میں ایک سال تک قید اور پانچ لاکھ روپے جرمانے کا ذکر ہے۔ سندھ یا دیگر علاقوں میں سزا کا تعین متعلقہ صوبے کے نافذ قانون سے کیا جائے؛ پنجاب کی رقم سب جگہ خودکار طور پر نافذ نہیں۔'],
 ['اجازت نامے اور درخواست کے فارم میں کیا فرق ہے؟','درخواست وہ کاغذ ہے جو درخواست گزار تیار کرکے چیئرمین کو دیتا ہے، جبکہ اجازت نامہ سرکاری ثالثی کونسل کے فیصلے کی تحریری دستاویز ہے۔ درخواست ہاتھ سے لکھی جاسکتی ہے، مگر اختیار کے بغیر کوئی شخص اصل اجازت نامہ جاری نہیں کرسکتا۔','سادہ نمونے میں یونین کونسل نمبر، شہر، نام، درخواست نمبر اور تاریخ کے لیے خالی جگہیں رکھی گئی ہیں۔ مہر یا کسی حقیقی افسر کے دستخط شامل نہیں۔'],
 ['دوسری شادی کا اجازت نامہ: سماعت اور فیصلہ','قانونی کارروائی میں متعلقہ نمائندوں کی نامزدگی، نوٹس اور شواہد پر غور ہوسکتا ہے۔ کونسل کا فیصلہ ریکارڈ میں ہونا چاہیے اور اگر اجازت ملے تو اس کی حقیقی مصدقہ دستاویز متعلقہ دفتر سے حاصل کریں۔','انکار کی صورت میں محض کسی نمونے کو بدل کر منظوری بنانا جائز نہیں۔ متعلقہ قانون کے تحت نظرثانی کے طریقے کے لیے وکیل سے مشورہ کریں۔'],
 ['پہلی بیوی، بچوں اور خاندان کے حقوق','دوسری شادی کا معاملہ صرف نئے نکاح کا سوال نہیں۔ موجودہ زوجہ کے حق مہر، نان نفقہ، عزت و احترام اور بچوں کے حقوق پر بھی غور کرنا چاہیے۔ درخواست میں آئندہ ذمہ داریوں کی درست اور حقیقت پسندانہ تفصیل اہم ہوسکتی ہے۔','کسی بھی فریق کی عزت مجروح کرنے کے بجائے حقائق، اصل ریکارڈ اور قانونی طریقے پر توجہ دیں۔'],
 ['بیرون ملک پاکستانی درخواست کیسے دیں؟','اگر شوہر یا موجودہ بیوی بیرون ملک ہو تو متعلقہ یونین کونسل، رہائش، نوٹس کی تعمیل، نمائندگی اور کاغذات کی تصدیق کے سوالات پہلے طے کریں۔ محض بیرون ملک رہنے کی وجہ سے دفعہ 6 کی شرط خود بخود ختم نہیں ہوتی۔','غیر معمولی صورتحال میں خاندان کے قانونی معاملات دیکھنے والے وکیل سے مخصوص رہنمائی حاصل کرنا بہتر رہتا ہے۔'],
 ['مفت نمونہ اور درخواست برائے اجازت دوسری شادی','ویب سائٹ پر دیا جانے والا سادہ تعلیمی نمونہ یونین کونسل کی عمومی دستاویز کا انداز سمجھانے کے لیے ہے۔ اس میں کسی سرکاری دفتر کی اصلی مہر، نام یا دستخط نہیں۔ لفظ SAMPLE / نمونہ واضح لکھا گیا ہے۔','نچلے حصے میں دو الگ پرنٹ ایبل دستاویزات ہیں: ایک اجازت نامے کا نمونہ اور دوسری چیئرمین ثالثی کونسل کے نام درخواست۔ انہیں کھول کر براؤزر سے Save as PDF کیا جاسکتا ہے۔']
]
const urFAQs=[
 ['کیا پہلی بیوی کی رضامندی ہی کافی ہوتی ہے؟','نہیں، متعلقہ ثالثی کونسل کی پہلے سے تحریری اجازت ضروری ہے۔ رضامندی اور قانونی منظوری ایک نہیں۔'],
 ['اجازت نامہ کون جاری کرتا ہے؟','متعلقہ ثالثی کونسل کی کارروائی اور فیصلے کے بعد مجاز دفتر تحریری اجازت دیتا ہے۔'],
 ['کیا درخواست ہاتھ سے لکھی جاسکتی ہے؟','قاعدہ 15 کے مطابق تحریری اور دستخط شدہ درخواست درکار ہے؛ دفتر کی موجودہ ہدایات بھی دیکھیں۔'],
 ['درخواست کس یونین کونسل میں دی جاتی ہے؟','عمومی طور پر موجودہ زوجہ کی رہائش والی متعلقہ یونین کونسل، مگر موجودہ علاقائی قانون کی تصدیق کریں۔'],
 ['کیا نادرا اجازت دیتا ہے؟','نہیں، یہ نادرا کا سرٹیفکیٹ نہیں بلکہ ثالثی کونسل سے متعلق قانونی عمل ہے۔'],
 ['کیا پہلی بیوی کی رضامندی نہ ہو تو درخواست رد ہوجاتی ہے؟','درخواست میں اصل صورتحال بتانا لازم ہے؛ کونسل قانون اور حقیقی حالات کو دیکھ کر فیصلہ کرتی ہے۔'],
 ['دفعہ 6 کیوں اہم ہے؟','یہ پہلی شادی برقرار ہونے کے دوران مزید نکاح کے لیے سابقہ تحریری اجازت کا قانونی تقاضا بیان کرتی ہے۔'],
 ['کیا کوئی شخص اپنے گھر میں اجازت نامہ بنا سکتا ہے؟','صرف تعلیمی نمونہ بناسکتا ہے، سرکاری اجازت ہرگز نہیں۔'],
 ['اسلام میں عدل کی شرط کس آیت میں ہے؟','سورۃ النساء آیت 3 میں انصاف اور ایک شادی کی ہدایت کا ذکر ہے۔'],
 ['بیویوں کے درمیان ناانصافی پر کون سی حدیث ہے؟','سنن ابی داؤد حدیث 2133 میں غیرمنصفانہ میلان کے متعلق تنبیہ ہے۔'],
 ['پنجاب میں بغیر اجازت دوسری شادی کی سزا کیا ہے؟','2015 کی صوبائی ترمیم کے مطابق ایک سال تک قید اور پانچ لاکھ روپے جرمانے کی شق ہے۔'],
 ['کیا یہی سزا سندھ میں بھی ہے؟','ضروری نہیں؛ متعلقہ صوبے کا تازہ قانونی متن دیکھا جائے۔'],
 ['کیا اجازت کے بغیر نکاح خود بخود باطل ہوجاتا ہے؟','نکاح کی حیثیت اور دفعہ 6 کی خلاف ورزی کے نتائج الگ قانونی مسائل ہیں؛ مخصوص مشورہ لیں۔'],
 ['کیا واجب الادا حق مہر فوری ادا کرنا پڑ سکتا ہے؟','دفعہ 6(5)(a) میں بلا اجازت دوسری شادی پر واجب الادا فوری اور مؤخر حق مہر کی ادائیگی درج ہے۔'],
 ['کیا اجازت کے فارم پر مہر ہونا ضروری ہے؟','حقیقی سرکاری اجازت کی تصدیق متعلقہ دفتر کے ریکارڈ سے کریں؛ ویب سائٹ کے نمونے میں مہر نہیں ہوگی۔'],
 ['بیرون ملک مقیم درخواست گزار کیا کرے؟','بیوی کی رہائش، یونین کونسل کے اختیار، نوٹس اور نمائندگی کی تفصیل پہلے تصدیق کریں۔']
]
const sources=[
 {title:'Muslim Family Laws Ordinance, 1961 — Section 6',url:'https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf'},
 {title:'Rules Under the Muslim Family Laws Ordinance, 1961 — Rules 3, 14, 15',url:'https://pakistancode.gov.pk/pdffiles/administratorcc19213a335396659068c340f4dbe7a9.pdf'},
 {title:'Punjab Muslim Family Laws (Amendment) Act, 2015',url:'https://www.pap.gov.pk/uploads/bills/billpassed_2015_16.pdf'},
 {title:'Qur’an — An-Nisa 4:3',url:'https://quran.com/4/3'},
 {title:'Qur’an — An-Nisa 4:129',url:'https://quran.com/4/129'},
 {title:'Sunan Abi Dawud — Hadith 2133',url:'https://sunnah.com/abudawud/12/88'}
]
const faqSchema = (faqs) => ({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})
const styles={section:{padding:'38px 0',background:'#ffffff'},container:{maxWidth:960,margin:'0 auto',padding:'0 22px'},h1:{fontSize:'clamp(32px,4.5vw,52px)',color:'#173b35',lineHeight:1.18,margin:'0 0 24px'},h2:{color:'#173b35',fontSize:'clamp(23px,3vw,30px)',lineHeight:1.28,margin:'32px 0 12px'},h3:{color:'#173b35',fontSize:21,margin:'23px 0 8px'},p:{fontSize:17,lineHeight:1.86,color:'#374640',margin:'0 0 15px'},button:{display:'inline-block',background:'#173b35',color:'white',padding:'12px 16px',borderRadius:5,textDecoration:'none',fontWeight:700},notice:{background:'#f7f3eb',borderLeft:'5px solid #c39b5a',padding:18,color:'#324942',margin:'26px 0'}}
function A({href,children}){return <a href={href} target="_blank" rel="noopener noreferrer" style={{color:'#17604b',textDecoration:'underline'}}>{children}</a>}
export default function SecondMarriageArticle({language='en'}){
 const isUr=language==='ur'
 const enUrl='/second-marriage-permission-in-pakistan/'
 const urUrl='/urdu/second-marriage-permission-in-pakistan/'
 const title=isUr?'دوسری شادی کا اجازت نامہ — دفعہ 6، یونین کونسل اور درخواست کا نمونہ':'Permission for Second Marriage in Pakistan — Bigamy Law, Section 6 and Free Samples'
 const lead=isUr?'مسلم فیملی لاز آرڈیننس 1961 کی دفعہ 6 کے تحت دوسری شادی کے اجازت نامے، ثالثی کونسل کی کارروائی، اسلامی اصولِ انصاف اور درخواست کے نمونے کی مکمل رہنمائی۔':'Understand the Section 6 permission for a second marriage in Pakistan, the Arbitration Council process, Islamic duties of fairness and the difference between an application and an official written decision.'
 const sections=isUr?urSections:enSections,faqs=isUr?urFAQs:enFAQs
 const linkText=isUr?'English Version':'اردو ورژن'
 const other=isUr?enUrl:urUrl
 return <>
  <main className="dna-route-page" lang={isUr?'ur':'en'} dir={isUr?'rtl':'ltr'} style={{background:'#fff',direction:isUr?'rtl':'ltr',textAlign:isUr?'right':'left'}}>
   <nav style={{background:'#f7f3eb',borderBottom:'1px solid #e6e0d4'}} aria-label="Breadcrumb"><div className="container" style={{paddingTop:12,paddingBottom:12,fontSize:14}}><Link href="/" style={{color:'#173b35'}}>Home</Link> {' / '} <Link href="/family-law/" style={{color:'#173b35'}}>Family Law</Link> {' / '} <span>{isUr?'دوسری شادی کا اجازت نامہ':'Second Marriage Permission'}</span></div></nav>
   <section style={{background:'#f7f3eb',padding:'48px 0 42px'}}>
    <div style={styles.container}>
     <p style={{...styles.p,color:'#17604b',fontWeight:700,fontSize:13,letterSpacing:isUr?'normal':'0.09em',textTransform:isUr?'none':'uppercase'}}>{isUr?'قانونی رہنمائی اور مفت نمونہ':'Pakistan Family Law · Research Guide and Sample Forms'}</p>
     <h1 style={styles.h1}>{title}</h1>
     <p style={{...styles.p,maxWidth:900}}>{lead}</p>
     <p><Link href={other} style={{color:'#173b35',fontWeight:700,textDecoration:'underline'}}>{linkText}</Link></p>
     <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><a href="#free-forms" style={styles.button}>{isUr?'مفت فارم دیکھیں':'View Free Sample Forms'}</a><a href="#legal-sources" style={{...styles.button,background:'#c49a5a',color:'#18332d'}}>{isUr?'قانونی حوالے':'Read Legal Sources'}</a></div>
    </div>
   </section>
   <article style={styles.section}><div style={styles.container}>
    <aside style={styles.notice}><strong>{isUr?'قانونی انتباہ:':'Legal distinction:'}</strong> {isUr?'یہ نمونہ کسی یونین کونسل کا جاری کردہ اجازت نامہ نہیں۔ اصل اجازت متعلقہ ثالثی کونسل سے قانون کے مطابق حاصل کی جائے۔':'A downloadable specimen is not permission to remarry. Actual prior written authorization can only come from the competent Arbitration Council.'}</aside>
    {sections.map(([head,p1,p2],i)=><section key={head} id={'section-'+(i+1)}><h2 style={styles.h2}>{head}</h2><p style={styles.p}>{p1}</p><p style={styles.p}>{p2}</p>{!isUr&&[1,3,5].includes(i)&&<SectionImage slug="second-marriage-permission-in-pakistan" index={[1,3,5].indexOf(i)}/>}</section>)}
    <section id="free-forms">
      <h2 style={styles.h2}>{isUr?'درخواست، اجازت نامہ اور تائیدی حلف نامہ — مفت نمونے':'Free PDF Downloads — Permission Specimen, Application and Affidavit'}</h2>
      <p style={styles.p}>{isUr?'دو الگ سادہ دستاویزات دستیاب ہیں، ایک درخواست اور ایک اجازت نامے کا نمونہ۔ نمبر، نام، شہر، تاریخ اور فیصلے کے خانے خالی ہیں، اور سرکاری مہر یا افسر کے دستخط موجود نہیں۔ نیچے دیے گئے براہ راست PDF لنکس سے اصل فائل کھولیں یا محفوظ کریں۔':'Open the specimen and the application separately. Both have blank Council, name, city and date fields, without a government seal or a real signature. Use the direct PDF links below to open or save the original sample files.'}</p>
      <div style={{display:'flex',gap:14,flexWrap:'wrap',margin:'16px 0 25px'}}>
       <A href="https://rightlaw.com.pk/wp-content/uploads/2026/10/Second_Marriage_Permission_Specimen_Urdu.pdf">{isUr?'اجازت نامہ — نمونہ':'Permission Certificate Specimen (Urdu)'}</A>
       <A href="https://rightlaw.com.pk/wp-content/uploads/2026/10/Second_Marriage_Permission_Application_Urdu.pdf">{isUr?'درخواست کا نمونہ':'Application Form Specimen (Urdu)'}</A>
       <A href="https://rightlaw.com.pk/wp-content/uploads/2026/10/Second_Marriage_Supporting_Affidavit_Urdu.pdf">{isUr?'حلف نامہ — تائیدی نمونہ':'Supporting Affidavit (Urdu)'}</A>
       <A href="https://rightlaw.com.pk/wp-content/uploads/2026/10/Second_Marriage_Supporting_Affidavit_English.pdf">{isUr?'English Supporting Affidavit':'Supporting Affidavit (English)'}</A>
      </div>
      <p style={{...styles.p,fontSize:14}}>{isUr?'ہر فارم پر SAMPLE — نمونہ لکھا ہے؛ اسے سرکاری دستاویز کے طور پر پیش نہ کریں۔':'Each printable form states SAMPLE — NOT AN OFFICIAL PERMISSION and must not be presented as an issued government certificate.'}</p>
    </section>
    <section><h2 style={styles.h2}>{isUr?'عام سوالات اور جوابات':'Frequently Asked Questions'}</h2>{faqs.map(([q,a])=><section key={q}><h3 style={styles.h3}>{q}</h3><p style={styles.p}>{a}</p></section>)}</section>
    <section id="legal-sources"><h2 style={styles.h2}>{isUr?'اصل قانونی و شرعی حوالہ جات':'Primary Legal and Religious Sources'}</h2><ul style={{paddingInlineStart:22,lineHeight:2}}>{sources.map(s=><li key={s.url}><A href={s.url}>{s.title}</A></li>)}</ul><p style={{...styles.p,fontSize:14}}>{isUr?'قانونی ماخذ کی جانچ: 22 اکتوبر 2026؛ صوبائی ترامیم اور مقامی قواعد کی تصدیق ضروری ہے۔':'Source review: 22 October 2026. Recheck provincial amendments and current local filing rules before acting.'}</p></section>
    <p style={styles.p}><Link href={other} style={{fontWeight:700,color:'#17604b'}}>{linkText} →</Link></p>
    </div></article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema(faqs))}}/>
  </main>
  <Footer/>
 </>
}
