export type Language = 'th' | 'en' | 'lo' | 'cn';

export interface LanguageContent {
  comingSoon: string;
  about: string;
  features: string;
  howItWorks: string;
  contact: string;
  register: string;
  backToHome: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroGrowth: string;
  heroText: string;
  learnMore: string;
  contactUs: string;
  jobs: string;
  companies: string;
  applicants: string;
  satisfaction: string;
  featuresTitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  howItWorksTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  videoTitle: string;
  videoDesc: string;
  aboutTitle: string;
  aboutDesc: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  whyTitle: string;
  growthTitle: string;
  growthDesc: string;
  timeTitle: string;
  timeDesc: string;
  securityTitle: string;
  securityDesc: string;
  testimonialsTitle: string;
  ctaTitle: string;
  ctaDesc: string;
  startNow: string;
  categoriesTitle: string;
  tech: string;
  marketing: string;
  finance: string;
  sales: string;
  positions: string;
  blogTitle: string;
  blog1Title: string;
  blog1Desc: string;
  blog2Title: string;
  blog2Desc: string;
  blog3Title: string;
  blog3Desc: string;
  readMore: string;
  viewAllPosts: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
  faq6Q: string;
  faq6A: string;
  newsletterTitle: string;
  newsletterDesc: string;
  emailPlaceholder: string;
  subscribe: string;
  newsletterNote: string;
  services: string;
  searchJobs: string;
  onlineApply: string;
  createProfile: string;
  trackStatus: string;
  forCompanies: string;
  postJobs: string;
  findCandidates: string;
  manageApplications: string;
  reports: string;
  contactInfo: string;
  platformDesc: string;
  followFacebook: string;
  sendEmail: string;
  chatWithUs: string;
  rightsReserved: string;
  developing: string;
}

export const content: Record<Language, LanguageContent> = {
  th: {
    comingSoon: "กำลังเปิดให้บริการเร็วๆ นี้",
    about: "เกี่ยวกับเรา",
    features: "จุดเด่น",
    howItWorks: "วิธีการทำงาน",
    contact: "ติดต่อ",
    register: "สมัครสมาชิก",
    backToHome: "กลับหน้าหลัก",
    heroTitle: "สมัครงานออนไลน์กับ Rise Career",
    heroSubtitle: "ค้นหาอาชีพในฝันของคุณ",
    heroDescription: "เชื่อมต่อกับบริษัทชั้นนำ",
    heroGrowth: "เติบโตในสายอาชีพ",
    heroText: "แพลตฟอร์มที่ช่วยให้การสมัครงานออนไลน์เป็นเรื่องง่ายและรวดเร็ว ค้นหาโอกาสใหม่ ๆ และเติบโตในสายอาชีพของคุณกับเรา",
    learnMore: "เรียนรู้เพิ่มเติม",
    contactUs: "ติดต่อเรา",
    jobs: "ตำแหน่งงาน",
    companies: "บริษัทชั้นนำ",
    applicants: "ผู้สมัครงาน",
    satisfaction: "ความพึงพอใจ",
    featuresTitle: "จุดเด่นของ Rise Career",
    feature1Title: "เชื่อมต่อกับบริษัทชั้นนำ",
    feature1Desc: "เข้าถึงโอกาสงานจากองค์กอนชั้นนำทั่วประเทศ พร้อมข้อมูลบริษัทที่ครบถ้วน",
    feature2Title: "สมัครงานออนไลน์ง่าย",
    feature2Desc: "ขั้นตอนสมัครงานที่รวดเร็วและไม่ซับซ้อน พร้อมระบบติดตามสถานะ",
    feature3Title: "เติบโตในสายอาชีพ",
    feature3Desc: "พัฒนาทักษะและก้าวหน้าในอาชีพของคุณ พร้อมคำแนะนำจากผู้เชี่ยวชาญ",
    howItWorksTitle: "วิธีการทำงาน",
    step1Title: "สร้างโปรไฟล์",
    step1Desc: "สร้างโปรไฟล์ส่วนตัวและอัปโหลดประวัติการทำงาน",
    step2Title: "ค้นหางาน",
    step2Desc: "ค้นหาตำแหน่งงานที่เหมาะสมกับทักษะและประสบการณ์",
    step3Title: "สมัครงาน",
    step3Desc: "ส่งใบสมัครงานด้วยคลิกเดียว พร้อมติดตามสถานะ",
    step4Title: "สัมภาษณ์งาน",
    step4Desc: "รับการติดต่อจากบริษัทเพื่อสัมภาษณ์งานและเริ่มต้นอาชีพใหม่",
    videoTitle: "ดูวิดีโอแนะนำการใช้งาน",
    videoDesc: "เรียนรู้วิธีการใช้งาน Rise Career อย่างละเอียด",
    aboutTitle: "เกี่ยวกับ Rise Career",
    aboutDesc: "Rise Career เป็นแพลตฟอร์มสมัครงานออนไลน์ที่มุ่งมั่นในการเชื่อมต่อระหว่างผู้หางานและบริษัทชั้นนำ ในการช่วยให้ผู้คนค้นหาอาชีพที่เหมาะสม",
    benefit1: "ระบบสมัครงานที่ปลอดภัยและเชื่อถือได้",
    benefit2: "บริการลูกค้าตลอด 24 ชั่วโมง",
    benefit3: "ข้อมูลงานที่อัปเดตอย่างสม่ำเสมอ",
    whyTitle: "ทำไมต้องเลือก Rise Career?",
    growthTitle: "โอกาสเติบโตสูง",
    growthDesc: "เชื่อมต่อกับบริษัทที่มีโอกาสเติบโตและพัฒนาอาชีพ",
    timeTitle: "ประหยัดเวลา",
    timeDesc: "สมัครงานได้หลายตำแหน่งพร้อมกันในเวลาอันสั้น",
    securityTitle: "ข้อมูลปลอดภัย",
    securityDesc: "ข้อมูลส่วนตัวได้รับการปกป้องด้วยระบบความปลอดภัยระดับสูง",
    testimonialsTitle: "เสียงจากผู้ใช้",
    ctaTitle: "พร้อมเริ่มต้นอาชีพใหม่แล้วหรือยัง?",
    ctaDesc: "เข้าร่วมกับ Rise Career วันนี้ และค้นหาอาชีพที่ใช่สำหรับคุณ",
    startNow: "เริ่มต้นเลย",
    categoriesTitle: "หมวดหมู่งานยอดนิยม",
    tech: "เทคโนโลยี",
    marketing: "การตลาด",
    finance: "การเงิน",
    sales: "การขาย",
    positions: "ตำแหน่ง",
    blogTitle: "ข่าวสารและบทความล่าสุด",
    blog1Title: "เทคนิคการเขียน Resume ให้โดนใจ HR",
    blog1Desc: "เรียนรู้วิธีการเขียน Resume ที่จะทำให้คุณโดดเด่นและได้งานในฝัน กับเทคนิคจากผู้เชี่ยวชาญด้าน HR...",
    blog2Title: "งาน Remote ที่ได้เงินเดือนสูงในปี 2024",
    blog2Desc: "ค้นพบโอกาสงาน Remote ที่มีเงินเดือนสูงและสวัสดิการดี พร้อมรายชื่อบริษัทที่กำลังรับสมัคร...",
    blog3Title: "เตรียมตัวสัมภาษณ์งานอย่างไรให้ผ่าน",
    blog3Desc: "เคล็ดลับการเตรียมตัวสัมภาษณ์งานที่ได้ผลจริง จากประสบการณ์ของผู้ที่ได้งานในบริษัทชั้นนำ...",
    readMore: "อ่านเพิ่มเติม",
    viewAllPosts: "ดูโพสต์ทั้งหมดจาก Facebook",
    faqTitle: "คำถามที่พบบ่อย",
    faq1Q: "สมัครงานผ่าน Rise Career ฟรีหรือไม่?",
    faq1A: "ใช่ครับ การสมัครงานผ่าน Rise Career เป็นบริการฟรีสำหรับผู้หางานทุกคน",
    faq2Q: "ใช้เวลานานเท่าไหร่ในการสมัครงาน?",
    faq2A: "การสมัครงานใช้เวลาเพียง 2-3 นาที โดยอัปโหลดประวัติการทำงานและข้อมูลส่วนตัว",
    faq3Q: "สามารถติดตามสถานะการสมัครได้หรือไม่?",
    faq3A: "ได้ครับ ระบบจะแจ้งเตือนสถานะการสมัครงานผ่านอีเมลและแอปพลิเคชัน",
    faq4Q: "สามารถสัมภาษณ์งานได้หรือไม่?",
    faq4A: "ได้ครับ Rise Career มีระบบจัดการการสัมภาษณ์งานที่ครบถ้วน รวมถึงการนัดหมายสัมภาษณ์ การแจ้งเตือน และการติดตามผลการสัมภาษณ์",
    faq5Q: "มีบริการเตรียมตัวสัมภาษณ์งานหรือไม่?",
    faq5A: "มีครับ เรามีบริการให้คำแนะนำการเตรียมตัวสัมภาษณ์งาน รวมถึงเทคนิคการตอบคำถาม และการสร้างความประทับใจให้กับผู้สัมภาษณ์",
    faq6Q: "การสัมภาษณ์งานเป็นแบบออนไลน์หรือออฟไลน์?",
    faq6A: "รองรับทั้งสองแบบครับ ขึ้นอยู่กับความต้องการของบริษัท บางบริษัทจะสัมภาษณ์ออนไลน์ บางบริษัทจะนัดสัมภาษณ์ที่สำนักงาน",
    newsletterTitle: "รับข่าวสารงานล่าสุด",
    newsletterDesc: "สมัครรับข่าวสารงานใหม่และโอกาสพิเศษจาก Rise Career",
    emailPlaceholder: "อีเมลของคุณ",
    subscribe: "สมัคร",
    newsletterNote: "เราจะไม่ส่งอีเมลขยะให้คุณ สามารถยกเลิกการสมัครได้ทุกเมื่อ",
    services: "บริการ",
    searchJobs: "ค้นหางาน",
    onlineApply: "สมัครงานออนไลน์",
    createProfile: "สร้างโปรไฟล์",
    trackStatus: "ติดตามสถานะ",
    forCompanies: "บริษัท",
    postJobs: "โพสต์งาน",
    findCandidates: "ค้นหาผู้สมัคร",
    manageApplications: "จัดการการสมัคร",
    reports: "รายงานสถิติ",
    contactInfo: "ติดต่อเรา",
    platformDesc: "แพลตฟอร์มสมัครงานออนไลน์ที่เชื่อมต่อระหว่างผู้หางานและบริษัทชั้นนำ",
    followFacebook: "ติดตาม Facebook",
    sendEmail: "ส่งอีเมล",
    chatWithUs: "Chat with us",
    rightsReserved: "All rights reserved.",
    developing: "กำลังพัฒนาแพลตฟอร์มที่ยอดเยี่ยมสำหรับคุณ"
  },
  en: {
    comingSoon: "Coming Soon",
    about: "About",
    features: "Features",
    howItWorks: "How It Works",
    contact: "Contact",
    register: "Register",
    backToHome: "Back to Home",
    heroTitle: "Apply for jobs online with Rise Career",
    heroSubtitle: "Find your dream career",
    heroDescription: "Connect with leading companies",
    heroGrowth: "Grow in your career",
    heroText: "A platform that makes online job applications easy and fast. Discover new opportunities and grow in your career with us",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    jobs: "Job Positions",
    companies: "Leading Companies",
    applicants: "Job Seekers",
    satisfaction: "Satisfaction",
    featuresTitle: "Rise Career Features",
    feature1Title: "Connect with Leading Companies",
    feature1Desc: "Access job opportunities from leading organizations nationwide with complete company information",
    feature2Title: "Easy Online Application",
    feature2Desc: "Fast and simple job application process with status tracking system",
    feature3Title: "Career Growth",
    feature3Desc: "Develop skills and advance in your career with expert guidance",
    howItWorksTitle: "How It Works",
    step1Title: "Create Profile",
    step1Desc: "Create your personal profile and upload work history",
    step2Title: "Search Jobs",
    step2Desc: "Find job positions that match your skills and experience",
    step3Title: "Apply",
    step3Desc: "Submit job applications with one click and track status",
    step4Title: "Interview",
    step4Desc: "Receive contact from companies for job interviews and start your new career",
    videoTitle: "Watch Usage Guide Video",
    videoDesc: "Learn how to use Rise Career in detail",
    aboutTitle: "About Rise Career",
    aboutDesc: "Rise Career is an online job application platform committed to connecting job seekers with leading companies. helping people find suitable careers",
    benefit1: "Secure and reliable job application system",
    benefit2: "24/7 customer service",
    benefit3: "Regularly updated job information",
    whyTitle: "Why Choose Rise Career?",
    growthTitle: "High Growth Opportunities",
    growthDesc: "Connect with companies that offer growth and career development opportunities",
    timeTitle: "Save Time",
    timeDesc: "Apply for multiple positions simultaneously in a short time",
    securityTitle: "Secure Data",
    securityDesc: "Personal information is protected by high-level security systems",
    testimonialsTitle: "User Testimonials",
    ctaTitle: "Ready to start your new career?",
    ctaDesc: "Join Rise Career today and find the right career for you",
    startNow: "Get Started",
    categoriesTitle: "Popular Job Categories",
    tech: "Technology",
    marketing: "Marketing",
    finance: "Finance",
    sales: "Sales",
    positions: "positions",
    blogTitle: "Latest News and Articles",
    blog1Title: "Resume Writing Tips to Impress HR",
    blog1Desc: "Learn how to write a resume that will make you stand out and get your dream job with tips from HR experts...",
    blog2Title: "High-Paying Remote Jobs in 2024",
    blog2Desc: "Discover remote job opportunities with high salaries and good benefits, along with a list of companies currently hiring...",
    blog3Title: "How to Prepare for Job Interviews",
    blog3Desc: "Real job interview preparation tips from the experience of people who got jobs at leading companies...",
    readMore: "Read More",
    viewAllPosts: "View All Posts from Facebook",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is applying for jobs through Rise Career free?",
    faq1A: "Yes, applying for jobs through Rise Career is a free service for all job seekers",
    faq2Q: "How long does it take to apply for a job?",
    faq2A: "Job application takes only 2-3 minutes by uploading work history and personal information",
    faq3Q: "Can I track my application status?",
    faq3A: "Yes, the system will notify you of job application status via email and application",
    faq4Q: "Can I interview for jobs?",
    faq4A: "Yes, Rise Career has a complete job interview management system including interview scheduling, notifications, and interview result tracking",
    faq5Q: "Do you offer interview preparation services?",
    faq5A: "Yes, we offer interview preparation guidance services including question answering techniques and making a good impression on interviewers",
    faq6Q: "Are job interviews online or offline?",
    faq6A: "We support both formats depending on company requirements. Some companies conduct online interviews, others schedule office interviews",
    newsletterTitle: "Get Latest Job Updates",
    newsletterDesc: "Subscribe to receive new job updates and special opportunities from Rise Career",
    emailPlaceholder: "Your email",
    subscribe: "Subscribe",
    newsletterNote: "We will not send spam emails. You can unsubscribe at any time",
    services: "Services",
    searchJobs: "Search Jobs",
    onlineApply: "Online Application",
    createProfile: "Create Profile",
    trackStatus: "Track Status",
    forCompanies: "Companies",
    postJobs: "Post Jobs",
    findCandidates: "Find Candidates",
    manageApplications: "Manage Applications",
    reports: "Reports",
    contactInfo: "Contact Us",
    platformDesc: "Online job application platform connecting job seekers with leading companies",
    followFacebook: "Follow Facebook",
    sendEmail: "Send Email",
    chatWithUs: "Chat with us",
    rightsReserved: "All rights reserved.",
    developing: "Developing an excellent platform for you"
  },
  lo: {
    comingSoon: "ກຳລັງເປີດໃຫ້ບໍລິການໄວໆນີ້",
    about: "ກ່ຽວກັບພວກເຮົາ",
    features: "ຈຸດເດັ່ນ",
    howItWorks: "ວິທີການເຮັດວຽກ",
    contact: "ຕິດຕໍ່",
    register: "ສະໝັກສະມາຊິກ",
    backToHome: "ກັບໜ້າຫລັກ",
    heroTitle: "ສະໝັກວຽກອອນລາຍກັບ Rise Career",
    heroSubtitle: "ຄົ້ນຫາອາຊີບໃນຝັນຂອງທ່ານ",
    heroDescription: "ເຊື່ອມຕໍ່ກັບບໍລິສັດຊັ້ນນຳ",
    heroGrowth: "ເຕີບໂຕໃນສາຍອາຊີບ",
    heroText: "ແພລດຟອມທີ່ຊ່ວຍໃຫ້ການສະໝັກວຽກອອນລາຍເປັນເລື່ອງງ່າຍ ແລະ ໄວຄົ້ນຫາໂອກາດໃໝ່ໆ ແລະ ເຕີບໂຕໃນສາຍອາຊີບຂອງທ່ານກັບພວກເຮົາ",
    learnMore: "ຮຽນຮູ້ເພີ່ມເຕີມ",
    contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    jobs: "ຕຳແໜ່ງວຽກ",
    companies: "ບໍລິສັດຊັ້ນນຳ",
    applicants: "ຜູ້ສະໝັກວຽກ",
    satisfaction: "ຄວາມພໍໃຈ",
    featuresTitle: "ຈຸດເດັ່ນຂອງ Rise Career",
    feature1Title: "ເຊື່ອມຕໍ່ກັບບໍລິສັດຊັ້ນນຳ",
    feature1Desc: "ເຂົ້າເຖິງໂອກາດວຽກຈາກອົງກອນຊັ້ນນຳທົ່ວປະເທດ ພ້ອມຂໍ້ມູນບໍລິສັດທີ່ຄົບຖ້ວນ",
    feature2Title: "ສະໝັກວຽກອອນລາຍງ່າຍ",
    feature2Desc: "ຂັ້ນຕອນສະໝັກວຽກທີ່ໄວ ແລະ ບໍ່ສັບສົນ ພ້ອມລະບົບຕິດຕามສະຖານະ",
    feature3Title: "ເຕີບໂຕໃນສາຍອາຊີບ",
    feature3Desc: "ພັດທະນາທັກສະ ແລະ ກ້າວໜ້າໃນອາຊີບຂອງທ່ານ ພ້ອມຄຳແນະນຳຈາກຜູ້ຊ່ຽວຊານ",
    howItWorksTitle: "ວິທີການເຮັດວຽກ",
    step1Title: "ສ້າງໂປຣໄຟລ໌",
    step1Desc: "ສ້າງໂປຣໄຟລ໌ສ່ວນຕົວ ແລະ ອັບໂຫລດປະຫວັດການເຮັດວຽກ",
    step2Title: "ຄົ້ນຫາວຽກ",
    step2Desc: "ຄົ້ນຫາຕຳແໜ່ງວຽກທີ່ເໝາະສົມກັບທັກສະ ແລະ ປະສົບການ",
    step3Title: "ສະໝັກວຽກ",
    step3Desc: "ສົ່ງໃບສະໝັກວຽກດ້ວຍຄລິກດຽວ ພ້ອມຕິດຕาມສະຖານະ",
    step4Title: "ສຳພາດວຽກ",
    step4Desc: "ຮັບການຕິດຕໍ່ຈາກບໍລິສັດເພື່ອສຳພາດວຽກ ແລະ ເລີ່ມຕົ້ນອາຊີບໃໝ່",
    videoTitle: "ເບິ່ງວິດີໂອແນະນຳການໃຊ້ງານ",
    videoDesc: "ຮຽນຮູ້ວິທີການໃຊ້ງານ Rise Career ຢ່າງລະອຽດ",
    aboutTitle: "ກ່ຽວກັບ Rise Career",
    aboutDesc: "Rise Career ເປັນແພລດຟອມສະໝັກວຽກອອນລາຍທີ່ມຸ່ງໝັ້ນໃນການເຊື່ອມຕໍ່ລະຫວ່າງຜູ້ຫາວຽກ ແລະ ບໍລິສັດຊັ້ນນຳ ໃນການຊ່ວຍໃຫ້ຜູ້ຄົນຄົ້ນຫາອາຊີບທີ່ເໝາະສົມ",
    benefit1: "ລະບົບສະໝັກວຽກທີ່ປອດໄພ ແລະ ໄວ້ວາງໃຈໄດ້",
    benefit2: "ບໍລິການລູກຄ້າຕະຫຼອດ 24 ຊົ່ວໂມງ",
    benefit3: "ຂໍ້ມູນວຽກທີ່ອັບເດດຢ່າງສະໝ່ຳສະເໝີ",
    whyTitle: "ເປັນຫຍັງຕ້ອງເລືອກ Rise Career?",
    growthTitle: "ໂອກາດເຕີບໂຕສູງ",
    growthDesc: "ເຊື່ອມຕໍ່ກັບບໍລິສັດທີ່ມີໂອກາດເຕີບໂຕ ແລະ ພັດທະນາອາຊີບ",
    timeTitle: "ປະຫຍັດເວລາ",
    timeDesc: "ສະໝັກວຽກໄດ້ຫຼາຍຕຳແໜ່ງພ້ອມກันໃນເວລາອັນສັ້ນ",
    securityTitle: "ຂໍ້ມູນປອດໄພ",
    securityDesc: "ຂໍ້ມູນສ່ວນຕົວໄດ້ຮັບການປົກປ້ອງດ້ວຍລະບົບຄວາມປອດໄພລະດັບສູງ",
    testimonialsTitle: "ສຽງຈາກຜູ້ໃຊ້",
    ctaTitle: "ພ້ອມເລີ່ມຕົ້ນອາຊີບໃໝ່ແລ້ວຫຼືຍັງ?",
    ctaDesc: "ເຂົ້າຮ່ວມກັບ Rise Career ມື້ນີ້ ແລະ ຄົ້ນຫາອາຊີບທີ່ໃຊ້ສຳລັບທ່ານ",
    startNow: "ເລີ່ມຕົ້ນແລ້ວ",
    categoriesTitle: "ຫມວດຫມ່ວຽກຍອດນິຍົມ",
    tech: "ເທັກໂນໂລຊີ",
    marketing: "ການຕະຫຼາດ",
    finance: "ການເງິນ",
    sales: "ການຂາຍ",
    positions: "ຕຳແໜ່ງ",
    blogTitle: "ຂ່າວສານ ແລະ ບົດຄວາມລ່າສຸດ",
    blog1Title: "ເທັກນິກການຂຽນ Resume ໃຫຸ້ືກໃຈ HR",
    blog1Desc: "ຮຽນຮູ້ວິທີການຂຽນ Resume ທີ່ຈະເຮັດໃຫ້ທ່ານດອນເດັ່ນ ແລະ ໄດ້ວຽກໃນຝັນ ກັບເທັກນິກຈາກຜູ້ຊ່ຽວຊານດ້ານ HR...",
    blog2Title: "ວຽກ Remote ທີ່ໄດ້ເງິນເດືອນສູງໃນປີ 2024",
    blog2Desc: "ຄົ້ນພົບໂອກາດວຽກ Remote ທີ່ມີເງິນເດືອນສູງ ແລະ ສະຫວັດດີການດີ ພ້ອມລາຍຊື່ບໍລິສັດທີ່ກຳລັງຮັບສະໝັກ...",
    blog3Title: "ກະກຽມຕົວສຳພາດວຽກແນວໃດໃຫ້ຜ່ານ",
    blog3Desc: "ເຄັດລັບການກະກຽມຕົວສຳພາດວຽກທີ່ໄດ້ຜົນຈິງ ຈາກປະສົບການຂອງຜູ້ທີ່ໄດ້ວຽກໃນບໍລິສັດຊັ້ນນຳ...",
    readMore: "ອ່ານເພີ່ມເຕີມ",
    viewAllPosts: "ເບີ່ງໂພສທັງໝົດຈາກ Facebook",
    faqTitle: "ຄຳຖາມທີ່ພົບ",
    faq1Q: "ສະໝັກວຽກຜ່ານ Rise Career ຟຣີຫຼືບໍ່?",
    faq1A: "ແມ່ນແລ້ວ ການສະໝັກວຽກຜ່ານ Rise Career ເປັນບໍລິການຟຣີສຳລັບຜູ້ຫາວຽກທຸກຄົນ",
    faq2Q: "ໃຊ້ເວລາດົນປານໃດໃນການສະໝັກວຽກ?",
    faq2A: "ການສະໝັກວຽກໃຊ້ເວລາເທົ່ານັ້ນ 2-3 ນາທີ ໂດຍອັປໂຫລດປະຫວັດການເຮັດວຽກ ແລະ ຂໍ້ມູນສ່ວນຕົວ",
    faq3Q: "ສາມາດຕິດຕามສະຖານະການສະໝັກໄດ້ຫຼືບໍ?",
    faq3A: "ໄດ້ແລ້ວ ລະບົບຈະແຈ້ງເຕືອນສະຖານະກารสมัครงานຜ່ານອີເມວ ແລະ ແອັບພລິເຄຊັນ",
    faq4Q: "ສາມາດສຳພາດວຽກໄດ້ຫຼືບໍ່?",
    faq4A: "ໄດ້ແລ້ວ Rise Career ມີລະບົບຈັດການການສຳພາດວຽກທີ່ຄົບຖ້ວນ ລວມທັງການນັດສຳພາດ ການແຈ້ງເຕືອນ ແລະ ການຕິດຕามຜົນການສຳພາດ",
    faq5Q: "ມີບໍລິການກະກຽມຕົວສຳພາດວຽກຫຼືບໍ່?",
    faq5A: "ມີແລ້ວ ພວກເຮົາມີບໍລິການໃຫ້ຄຳແນະນຳການກະກຽມຕົວສຳພາດວຽກ ລວມທັງເທັກນິກການຕອບຄຳຖາມ ແລະ ການສ້າງຄວາມປະທັບໃຈໃຫ້ກັບຜູ້ສຳພາດ",
    faq6Q: "ການສຳພາດວຽກເປັນແບບອອນລາຍຫຼືອອບລາຍ?",
    faq6A: "ຮອງຮັບທັງສອງແບບຂຶ້ນກັບຄວາມຕ້ອງການຂອງບໍລິສັດ ບາງບໍລິສັດຈະສຳພາດອອນລາຍ ບາງບໍລິສັດຈະນັດສຳພາດທີ່ຫ້ອງການ",
    newsletterTitle: "ຮັບຂ່າວສານວຽກລ່າສຸດ",
    newsletterDesc: "ສະໝັກຮັບຂ່າວສານວຽກໃໝ່ ແລະ ໂອກາດພິເສດຈາກ Rise Career",
    emailPlaceholder: "ອີເມວຂອງທ່ານ",
    subscribe: "ສະໝັກ",
    newsletterNote: "ພວກເຮົາຈະບໍ່ສ່ງອີເມວຊ້ຳໃຫ້ທ່ານ ສາມາດຍົກເລີກການສະໝັກໄດ້ທุກເວລາ",
    services: "ບໍລິການ",
    searchJobs: "ຄົ້ນຫາວຽກ",
    onlineApply: "ສະໝັກວຽກອອນລາຍ",
    createProfile: "ສ້າງໂປຣໄຟລ໌",
    trackStatus: "ຕິດຕามສະຖານະ",
    forCompanies: "ບໍລິສັດ",
    postJobs: "ໂພສວຽກ",
    findCandidates: "ຄົ້ນຫາຜູ້ສະໝັກ",
    manageApplications: "ຈັດການການສະໝັກ",
    reports: "ລາຍງານສະຖິຕິ",
    contactInfo: "ຕິດຕໍ່ພວກເຮົາ",
    platformDesc: "ແພລດຟອມສະໝັກວຽກອອນລາຍທີ່ເຊື່ອມຕໍ່ລະຫວ່າງຜູ້ຫາວຽກ ແລະ ບໍລິສັດຊັ້ນນຳ",
    followFacebook: "ຕິດຕาม Facebook",
    sendEmail: "ສ່ງອີເມວ",
    chatWithUs: "Chat with us",
    rightsReserved: "All rights reserved.",
    developing: "ກຳລັງພັດທະນາແພລດຟອມທີ່ຍອດຍ້ອມສຳລັບທ່ານ"
  },
  cn: {
    comingSoon: "即将推出",
    about: "关于我们",
    features: "特色功能",
    howItWorks: "工作原理",
    contact: "联系我们",
    register: "注册会员",
    backToHome: "返回首页",
    heroTitle: "通过 Rise Career 在线求职",
    heroSubtitle: "寻找您的理想职业",
    heroDescription: "与领先企业建立联系",
    heroGrowth: "在职业生涯中成长",
    heroText: "一个让在线求职变得简单快捷的平台。与我们一起发现新机会，在职业生涯中成长",
    learnMore: "了解更多",
    contactUs: "联系我们",
    jobs: "职位",
    companies: "领先企业",
    applicants: "求职者",
    satisfaction: "满意度",
    featuresTitle: "Rise Career 特色功能",
    feature1Title: "与领先企业建立联系",
    feature1Desc: "获取全国领先组织的工作机会，提供完整的企业信息",
    feature2Title: "简单在线申请",
    feature2Desc: "快速简单的求职流程，配备状态跟踪系统",
    feature3Title: "职业发展",
    feature3Desc: "在专家指导下发展技能，推进您的职业生涯",
    howItWorksTitle: "工作原理",
    step1Title: "创建档案",
    step1Desc: "创建您的个人档案并上传工作经历",
    step2Title: "搜索工作",
    step2Desc: "找到与您技能和经验匹配的职位",
    step3Title: "申请工作",
    step3Desc: "一键提交工作申请并跟踪状态",
    step4Title: "面试",
    step4Desc: "接收企业联系进行工作面试，开始您的新职业生涯",
    videoTitle: "观看使用指南视频",
    videoDesc: "详细了解如何使用 Rise Career",
    aboutTitle: "关于 Rise Career",
    aboutDesc: "Rise Career 是一个致力于连接求职者与领先企业的在线求职平台 帮助人们找到合适的职业",
    benefit1: "安全可靠的求职系统",
    benefit2: "24/7 客户服务",
    benefit3: "定期更新的工作信息",
    whyTitle: "为什么选择 Rise Career？",
    growthTitle: "高成长机会",
    growthDesc: "与提供成长和职业发展机会的企业建立联系",
    timeTitle: "节省时间",
    timeDesc: "在短时间内同时申请多个职位",
    securityTitle: "数据安全",
    securityDesc: "个人信息受到高级安全系统保护",
    testimonialsTitle: "用户评价",
    ctaTitle: "准备好开始您的新职业生涯了吗？",
    ctaDesc: "今天就加入 Rise Career，找到适合您的职业",
    startNow: "立即开始",
    categoriesTitle: "热门工作类别",
    tech: "技术",
    marketing: "营销",
    finance: "金融",
    sales: "销售",
    positions: "职位",
    blogTitle: "最新新闻和文章",
    blog1Title: "撰写简历技巧打动HR",
    blog1Desc: "学习如何撰写能让您脱颖而出的简历并获得理想工作，来自HR专家的建议...",
    blog2Title: "2024年高薪远程工作",
    blog2Desc: "发现高薪和良好福利的远程工作机会，以及目前正在招聘的企业名单...",
    blog3Title: "如何准备求职面试",
    blog3Desc: "来自在领先企业获得工作的人们的真实求职面试准备技巧...",
    readMore: "阅读更多",
    viewAllPosts: "查看Facebook上的所有帖子",
    faqTitle: "常见问题",
    faq1Q: "通过 Rise Career 求职是否免费？",
    faq1A: "是的，通过 Rise Career 求职对所有求职者都是免费服务",
    faq2Q: "申请工作需要多长时间？",
    faq2A: "求职申请只需2-3分钟，通过上传工作经历和个人信息",
    faq3Q: "我可以跟踪我的申请状态吗？",
    faq3A: "是的，系统会通过电子邮件和应用程序通知您求职申请状态",
    faq4Q: "我可以进行工作面试吗？",
    faq4A: "是的，Rise Career 拥有完整的工作面试管理系统，包括面试安排、通知和面试结果跟踪",
    faq5Q: "您提供面试准备服务吗？",
    faq5A: "是的，我们提供面试准备指导服务，包括问题回答技巧和给面试官留下好印象",
    faq6Q: "工作面试是在线还是线下？",
    faq6A: "我们支持两种格式，取决于企业要求。一些企业进行在线面试，其他企业安排办公室面试",
    newsletterTitle: "获取最新工作更新",
    newsletterDesc: "订阅接收来自 Rise Career 的新工作更新和特殊机会",
    emailPlaceholder: "您的邮箱",
    subscribe: "订阅",
    newsletterNote: "我们不会发送垃圾邮件。您可以随时取消订阅",
    services: "服务",
    searchJobs: "搜索工作",
    onlineApply: "在线申请",
    createProfile: "创建档案",
    trackStatus: "跟踪状态",
    forCompanies: "企业",
    postJobs: "发布工作",
    findCandidates: "寻找候选人",
    manageApplications: "管理申请",
    reports: "报告",
    contactInfo: "联系我们",
    platformDesc: "连接求职者与领先企业的在线求职平台",
    followFacebook: "关注Facebook",
    sendEmail: "发送邮件",
    chatWithUs: "与我们聊天",
    rightsReserved: "版权所有。",
    developing: "为您开发优秀平台"
  }
};

export const getContent = (language: Language): LanguageContent => {
  return content[language];
}; 
