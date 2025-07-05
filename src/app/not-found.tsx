"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [language, setLanguage] = useState<'en' | 'th' | 'lo' | 'cn'>('en');
  // อ่านค่าภาษาเริ่มต้นจาก localStorage
  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('rise-language') : null;
    if (storedLang && ["en","th","lo","cn"].includes(storedLang)) {
      setLanguage(storedLang as typeof language);
    }
  }, []);
  const content = {
    en: {
      title: "404 - Page Not Found",
      desc: "Sorry, the page you are looking for does not exist.",
      home: "Back to Home"
    },
    th: {
      title: "404 - ไม่พบหน้านี้",
      desc: "ขออภัย ไม่พบหน้าที่คุณค้นหา",
      home: "กลับหน้าหลัก"
    },
    lo: {
      title: "404 - ບໍ່ພົບໜ້ານີ້",
      desc: "ຂໍອະໄພ ບໍ່ພົບໜ້າທີ່ທ່ານຄົ້ນຫາ",
      home: "ກັບໜ້າຫລັກ"
    },
    cn: {
      title: "404 - 未找到页面",
      desc: "抱歉，您访问的页面不存在。",
      home: "返回首页"
    }
  };
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-700 to-black text-white px-4 ${
      language === 'lo' ? 'font-lao' : language === 'cn' ? 'font-noto-sc' : language === 'th' ? 'font-noto-thai' : 'font-poppins'
    }`}>
      <div className="flex gap-2 mb-8">
      </div>
      <h1 className="text-5xl font-extrabold mb-6 text-cyan-300">{content[language].title}</h1>
      <p className="text-xl mb-8 text-cyan-100">{content[language].desc}</p>
      <Link href="/" className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-lg shadow-lg transition">
        {content[language].home}
      </Link>
    </div>
  );
} 