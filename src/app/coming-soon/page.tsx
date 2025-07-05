"use client";
import { Mail, ArrowRight, Users, Briefcase, Globe } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [language, setLanguage] = useState<'en' | 'lo' | 'cn' | 'th'>('en');
  // อ่านค่าภาษาเริ่มต้นจาก localStorage
  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('rise-language') : null;
    if (storedLang && ["en","th","lo","cn"].includes(storedLang)) {
      setLanguage(storedLang as typeof language);
    }
  }, []);

  const content = {
    en: {
      back: "Back to Home",
      soon: "Coming Soon",
      heading: "Rise Career",
      subheading: "Online Job Application Platform",
      desc: "We are preparing an excellent platform for online job applications to help you find your dream career easily.",
      openIn: "Launching in",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      features: "What You'll Get",
      f1: "Connect with Leading Companies",
      f1d: "Access job opportunities from top organizations nationwide.",
      f2: "Easy Application",
      f2d: "Fast and simple job application process.",
      f3: "Track Status",
      f3d: "Real-time job application status tracking system.",
      notify: "Get Notified",
      notifyDesc: "Sign up to get notified when we launch.",
      email: "Your email",
      subscribe: "Subscribe",
      contact: "Contact Us",
      contactDesc: "Have questions or need more info?",
      follow: "Follow Facebook",
      sendMail: "Send Email",
      copyright: `© ${new Date().getFullYear()} Rise Career. All rights reserved.`,
      dev: "Developing an excellent platform for you"
    },
    lo: {
      back: "ກັບໜ້າຫລັກ",
      soon: "ກຳລັງເປີດໃຫ້ບໍລິການໄວໆນີ້",
      heading: "Rise Career",
      subheading: "ແພລດຟອມສະໝັກວຽກອອນລາຍ",
      desc: "ພວກເຮົາກຳລັງຈັດການແພລດຟອມທີ່ຍອດຍ້ອມ ສຳລັບການສະໝັກວຽກອອນລາຍ ເພື່ອຊ່ວຍໃຫ້ທ່ານຄົ້ນຫາອາຊີບໃນຝັນໄດ້ງ່າຍດາຍ",
      openIn: "ເປີດໃຫ້ບໍລິການໃນອີກ",
      days: "ມື້",
      hours: "ຊົ່ວໂມງ",
      minutes: "ນາທີ",
      seconds: "ວິນາທີ",
      features: "ສິ່ງທີ່ທ່ານຈະໄດ້ຮັບ",
      f1: "ເຊື່ອມຕໍ່ກັບບໍລິສັດຊັ້ນນຳ",
      f1d: "ເຂົ້າເຖິງໂອກາດວຽກຈາກອົງກອນຊັ້ນນຳທົ່ວປະເທດ",
      f2: "ສະໝັກວຽກງ່າຍ",
      f2d: "ຂັ້ນຕອນສະໝັກວຽກທີ່ໄວ ແລະ ບໍ່ສັບສົນ",
      f3: "ຕິດຕາມສະຖານະ",
      f3d: "ລະບົບຕິດຕາມສະຖານະການສະໝັກວຽກແບບຮຽວໄທມ",
      notify: "ຮັບການແຈ້ງເຕືອນ",
      notifyDesc: "ສະໝັກຮັບການແຈ້ງເຕືອນເມື່ອເຮົາເປີດໃຫ້ບໍລິການ",
      email: "ອີເມວຂອງທ່ານ",
      subscribe: "ສະໝັກ",
      contact: "ຕິດຕໍ່ພວກເຮົາ",
      contactDesc: "ມີຄຳຖາມ ຫຼື ຕ້ອງການຂໍ້ມູນເພີ່ມເຕີມ?",
      follow: "ຕິດຕາມ Facebook",
      sendMail: "ສົ່ງອີເມວ",
      copyright: `© ${new Date().getFullYear()} Rise Career. All rights reserved.`,
      dev: "ກຳລັງພັດທະນາແພລດຟອມທີ່ຍອດຍ້ອມສຳລັບທ່ານ"
    },
    cn: {
      back: "返回首页",
      soon: "即将上线",
      heading: "Rise Career",
      subheading: "在线求职平台",
      desc: "我们正在为您准备一个优秀的在线求职平台，帮助您轻松找到理想职业。",
      openIn: "即将在",
      days: "天",
      hours: "小时",
      minutes: "分钟",
      seconds: "秒",
      features: "您将获得的服务",
      f1: "与领先企业建立联系",
      f1d: "获取全国顶级企业的工作机会。",
      f2: "轻松申请",
      f2d: "快速简便的求职流程。",
      f3: "跟踪状态",
      f3d: "实时跟踪求职状态系统。",
      notify: "获取通知",
      notifyDesc: "订阅以便我们上线时收到通知。",
      email: "您的邮箱",
      subscribe: "订阅",
      contact: "联系我们",
      contactDesc: "有问题或需要更多信息？",
      follow: "关注 Facebook",
      sendMail: "发送邮件",
      copyright: `© ${new Date().getFullYear()} Rise Career. All rights reserved.`,
      dev: "为您打造卓越平台"
    },
    th: {
      back: "กลับหน้าหลัก",
      soon: "กำลังเปิดให้บริการเร็วๆ นี้",
      heading: "Rise Career",
      subheading: "แพลตฟอร์มสมัครงานออนไลน์",
      desc: "เรากำลังเตรียมแพลตฟอร์มที่ยอดเยี่ยมสำหรับการสมัครงานออนไลน์ ที่จะช่วยให้คุณค้นหาอาชีพในฝันได้อย่างง่ายดาย",
      openIn: "เปิดให้บริการในอีก",
      days: "วัน",
      hours: "ชั่วโมง",
      minutes: "นาที",
      seconds: "วินาที",
      features: "สิ่งที่คุณจะได้รับ",
      f1: "เชื่อมต่อกับบริษัทชั้นนำ",
      f1d: "เข้าถึงโอกาสงานจากองค์กรชั้นนำทั่วประเทศ",
      f2: "สมัครงานง่าย",
      f2d: "ขั้นตอนสมัครงานที่รวดเร็วและไม่ซับซ้อน",
      f3: "ติดตามสถานะ",
      f3d: "ระบบติดตามสถานะการสมัครงานแบบเรียลไทม์",
      notify: "รับการแจ้งเตือน",
      notifyDesc: "สมัครรับการแจ้งเตือนเมื่อเราเปิดให้บริการ",
      email: "อีเมลของคุณ",
      subscribe: "สมัคร",
      contact: "ติดต่อเรา",
      contactDesc: "มีคำถามหรือต้องการข้อมูลเพิ่มเติม?",
      follow: "ติดตาม Facebook",
      sendMail: "ส่งอีเมล",
      copyright: `© ${new Date().getFullYear()} Rise Career. All rights reserved.`,
      dev: "กำลังพัฒนาแพลตฟอร์มที่ยอดเยี่ยมสำหรับคุณ"
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date (30 days from now)
  const getTargetDate = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    return targetDate;
  };

  const [targetDate, setTargetDate] = useState(getTargetDate());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        // Reset countdown when it reaches zero
        const newTargetDate = getTargetDate();
        setTargetDate(newTargetDate);
        setTimeLeft({
          days: 30,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-cyan-700 to-black text-white ${
      language === 'lo' ? 'font-lao' : language === 'cn' ? 'font-noto-sc' : language === 'th' ? 'font-noto-thai' : 'font-poppins'
    }`}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
           <Image src="/logo.png" alt="Rise Career Logo" width={150} height={150} />
        </div>
        <div className="flex gap-2 items-center">
          <Link 
            href="/"
            className="ml-4 text-cyan-300 hover:text-cyan-400 transition font-medium"
          >
            {content[language].back}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-20">
        {/* Coming Soon Badge */}
        <div className="bg-cyan-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
          {content[language].soon}
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
          {content[language].heading}
        </h1>
        
        <p className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-300">
          {content[language].subheading}
        </p>
        
        <p className="max-w-2xl text-lg sm:text-xl text-cyan-100 mb-12">
          {content[language].desc}
        </p>

        {/* Countdown Timer */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-cyan-300">{content[language].openIn}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{timeLeft.days}</div>
              <div className="text-cyan-100">{content[language].days}</div>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{timeLeft.hours}</div>
              <div className="text-cyan-100">{content[language].hours}</div>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{timeLeft.minutes}</div>
              <div className="text-cyan-100">{content[language].minutes}</div>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{timeLeft.seconds}</div>
              <div className="text-cyan-100">{content[language].seconds}</div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-cyan-300">{content[language].features}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <Users className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{content[language].f1}</h3>
              <p className="text-cyan-100">{content[language].f1d}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <Briefcase className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{content[language].f2}</h3>
              <p className="text-cyan-100">{content[language].f2d}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <Globe className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{content[language].f3}</h3>
              <p className="text-cyan-100">{content[language].f3d}</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16 max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">{content[language].notify}</h2>
          <p className="text-cyan-100 mb-6">{content[language].notifyDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={content[language].email}
              className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-cyan-900 text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-500"
            />
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition flex items-center gap-2">
              {content[language].subscribe} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">{content[language].contact}</h2>
          <p className="text-cyan-100 mb-6">{content[language].contactDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61564754021210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {content[language].follow}
            </a>
            <a
              href="mailto:inforisecareer@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition"
            >
              <Mail className="w-5 h-5" />
              {content[language].sendMail}
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-800">
        <div className="max-w-4xl mx-auto text-center text-cyan-200">
          <p>{content[language].copyright}</p>
          <p className="mt-2 text-sm">{content[language].dev}</p>
        </div>
      </footer>
    </div>
  );
} 
