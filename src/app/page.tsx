"use client";
import { Briefcase, Users, Globe, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, TrendingUp, Clock, Shield, Menu, X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { getContent, Language } from "../lib/languages";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    jobs: 0,
    companies: 0,
    applicants: 0,
    satisfaction: 0
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const content = getContent(language);

  // อ่านค่าภาษาเริ่มต้นจาก localStorage
  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('rise-language') : null;
    if (storedLang && ["en","th","lo","cn"].includes(storedLang)) {
      setLanguage(storedLang as Language);
    }
  }, []);
  // เมื่อเปลี่ยนภาษา ให้บันทึกลง localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rise-language', lang);
    }
  };

  // Testimonials data
  const testimonials = language === 'en' ? [
    {
      name: "John Smith",
      role: "Software Developer",
      content: "Rise Career helped me find the perfect job. The system is easy to use and has many job opportunities.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content: "I've been using Rise Career for over a year and got several great positions. The status tracking is clear.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      content: "Excellent platform with high-quality jobs and trustworthy companies.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      content: "Got a job I love with good salary through Rise Career. Thank you for helping improve my life.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "Data Analyst",
      content: "Amazing job search system that perfectly matches my skills and experience.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Content Writer",
      content: "Applied for jobs through Rise Career and got my dream job quickly. Thank you so much!",
      rating: 5
    }
  ] : language === 'lo' ? [
    {
      name: "ຈອນ ສະມິດ",
      role: "ຜູ້ພັດທະນາໂປຣແກຣມ",
      content: "Rise Career ຊ່ວຍໃຫ້ຂ້ອຍໄດ້ວຽກທີ່ເໝາະສົມ ລະບົບໃຊ້ງານງ່າຍ ແລະ ມີໂອກາດວຽກຫຼາຍ",
      rating: 5
    },
    {
      name: "ຊາຣາ ຈອນສັນ",
      role: "ຜູ້ຈັດການການຕະຫຼາດ",
      content: "ຂ້ອຍໃ້ Rise Career ມາກວ່າ 1 ປີ ໄດ້ວຽກດີໆ ຫຼາຍຕຳແໜ່ງ ລະບົບຕິດຕາມສະຖານະຊັດເຈນ",
      rating: 5
    },
    {
      name: "ໄມເຄລ ບຣາວນ໌",
      role: "ຜູ້ຈັດການໂປຣເຈັກ",
      content: "ແພລດຟອມທີ່ຍອດຍ້ອມ ມີວຽກຄຸນນະພາບສູງ ແລະ ບໍລິສັດທີ່ໄວ້ວາງໃຈໄດ້",
      rating: 5
    },
    {
      name: "ເອມິລີ ເດວິສ",
      role: "ຜູ້ອອກແບບ UX",
      content: "ໄດ້ວຽກທີ່ຂ້ອຍມັກ ແລະ ເງິນເດືອນດີ ຜ່ານ Rise Career ຂອບໃຈທີ່ຊ່ວຍໃຫ້ຊີວິດດີຂຶ້ນ",
      rating: 5
    },
    {
      name: "ເດວິດ ວິວສັນ",
      role: "ນັກວິເຄາະຂໍ້ມູນ",
      content: "ລະບົບຄົ້ນຫາວຽກທີ່ຍອດຍ້ອມ ຕົງກັບທັກສະ ແລະ ປະສົບການຂອງຂ້ອຍຫຼາຍ",
      rating: 5
    },
    {
      name: "ລິຊາ ແອນເດີສັນ",
      role: "ນັກຂຽນເນື້ອຫາ",
      content: "ສະໝັກວຽກຜ່ານ Rise Career ได้งานในฝันในเวลาไม่นาน ขอบคุณมากครับ",
      rating: 5
    }
  ] : language === 'cn' ? [
    {
      name: "张伟",
      role: "软件开发者",
      content: "Rise Career 帮助我找到了完美的工作。系统易于使用，有很多工作机会。",
      rating: 5
    },
    {
      name: "李娜",
      role: "营销经理",
      content: "我使用 Rise Career 已经超过一年，获得了几个很好的职位。状态跟踪很清晰。",
      rating: 5
    },
    {
      name: "王强",
      role: "项目经理",
      content: "优秀的平台，拥有高质量的工作和值得信赖的企业。",
      rating: 5
    },
    {
      name: "陈敏",
      role: "UX设计师",
      content: "通过 Rise Career 获得了我喜欢的工作和不错的薪水。感谢帮助改善我的生活。",
      rating: 5
    },
    {
      name: "刘洋",
      role: "数据分析师",
      content: "令人惊叹的求职系统，完美匹配我的技能和经验。",
      rating: 5
    },
    {
      name: "赵丽",
      role: "内容写手",
      content: "通过 Rise Career 申请工作，很快就获得了理想工作。非常感谢！",
      rating: 5
    }
  ] : [
    {
      name: "สมชาย ใจดี",
      role: "Software Developer",
      content: "Rise Career ช่วยให้ฉันได้งานที่เหมาะสมมาก ระบบใช้งานง่ายและมีงานให้เลือกเยอะ",
      rating: 5
    },
    {
      name: "มาลี รักดี",
      role: "Marketing Manager",
      content: "ใช้ Rise Career มาปีกว่าแล้ว ได้งานดีๆ หลายตำแหน่ง ระบบติดตามสถานะชัดเจน",
      rating: 5
    },
    {
      name: "วิชัย สุขใจ",
      role: "Project Manager",
      content: "เป็นแพลตฟอร์มที่ดีมาก มีงานคุณภาพสูงและบริษัทที่น่าเชื่อถือ",
      rating: 5
    },
    {
      name: "นิดา ใจเย็น",
      role: "UX Designer",
      content: "ได้งานที่ชอบและเงินเดือนดีผ่าน Rise Career ขอบคุณที่ช่วยให้ชีวิตดีขึ้น",
      rating: 5
    },
    {
      name: "ปิยะ เก่งดี",
      role: "Data Analyst",
      content: "ระบบค้นหางานที่ยอดเยี่ยม ตรงกับทักษะและประสบการณ์ของฉันมาก",
      rating: 5
    },
    {
      name: "สุนิสา รักงาน",
      role: "Content Writer",
      content: "สมัครงานผ่าน Rise Career ได้งานในฝันในเวลาไม่นาน ขอบคุณมากครับ",
      rating: 5
    }
  ];

  // Typing animation texts - wrapped in useMemo to prevent dependency changes
  const typingTexts = useMemo(() => {
    return language === 'en' ? [
      "Apply for jobs online with Rise Career",
      "Find your dream career",
      "Connect with leading companies",
      "Grow in your career"
    ] : language === 'lo' ? [
      "ສະໝັກວຽກອອນລາຍກັບ Rise Career",
      "ຄົ້ນຫາອາຊີບໃນຝັນຂອງທ່ານ",
      "ເຊື່ອມຕໍ່ກັບບໍລິສັດຊັ້ນນຳ",
      "ເຕີບໂຕໃນສາຍອາຊີບ"
    ] : language === 'cn' ? [
      "通过 Rise Career 在线求职",
      "寻找您的理想职业",
      "与领先企业建立联系",
      "在职业生涯中成长"
    ] : [
      "สมัครงานออนไลน์กับ Rise Career",
      "ค้นหาอาชีพในฝันของคุณ",
      "เชื่อมต่อกับบริษัทชั้นนำ",
      "เติบโตในสายอาชีพ"
    ];
  }, [language]);

  // Typing animation
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 80; // Faster and smoother
    const deletingSpeed = 20; // Even faster deleting
    const pauseTime = 1500; // Shorter pause for better flow

    const typeText = () => {
      if (isDeleting) {
        // Deleting text
        if (typedText.length > 0) {
          setTimeout(() => {
            setTypedText(currentText.substring(0, typedText.length - 1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      } else {
        // Typing text
        if (typedText.length < currentText.length) {
          setTimeout(() => {
            setTypedText(currentText.substring(0, typedText.length + 1));
          }, typingSpeed);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, 10); // Immediate start for smoother animation
    return () => clearTimeout(timer);
  }, [typedText, currentTextIndex, isDeleting, typingTexts]);

  // Reset typing animation when language changes
  useEffect(() => {
    setTypedText('');
    setCurrentTextIndex(0);
    setIsDeleting(false);
  }, [language]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Counter animation
  useEffect(() => {
    const targetValues = {
      jobs: 200,
      companies: 20,
      applicants: 2000,
      satisfaction: 90
    };

    const duration = 3000; // 3 seconds
    const steps = 120; // 120 steps for smoother animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;
      // Smoother easing function with bounce effect
      const easeOutBack = 1 + 2.70158 * Math.pow(progress - 1, 3) + 1.70158 * Math.pow(progress - 1, 2);

      setCounters({
        jobs: Math.floor(targetValues.jobs * Math.min(1, Math.max(0, easeOutBack))),
        companies: Math.floor(targetValues.companies * Math.min(1, Math.max(0, easeOutBack))),
        applicants: Math.floor(targetValues.applicants * Math.min(1, Math.max(0, easeOutBack))),
        satisfaction: Math.floor(targetValues.satisfaction * Math.min(1, Math.max(0, easeOutBack)))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Auto slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const isMobile = window.innerWidth < 768;
        const maxSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
        return (prev + 1) % maxSlides;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation functions
  const nextSlide = () => {
    const isMobile = window.innerWidth < 768;
    const maxSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const isMobile = window.innerWidth < 768;
    const maxSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-cyan-700 to-black text-white ${
      language === 'lo' ? 'font-lao' : 
      language === 'en' ? 'font-poppins' : 
      language === 'cn' ? 'font-noto-sc' :
      'font-noto-thai'
    }`}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-3 mx-auto w-full relative sticky top-0 z-50 bg-transparent backdrop-blur-sm border-b border-cyan-800/50">
        <div className="w-7xl mx-auto flex justify-between">
          <div className="flex items-center gap-3">
            <a href="#">
               <Image src="/logo.png" alt="Rise Career Logo" width={150} height={150} />
            </a>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-cyan-100 font-medium items-center">
            <a href="#about" className="hover:text-cyan-400 transition">{content.about}</a>
            <a href="#features" className="hover:text-cyan-400 transition">{content.features}</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition">{content.howItWorks}</a>
            <a href="#contact" className="hover:text-cyan-400 transition">{content.contact}</a>
          </nav>
          {/* Language Switch */}
          <div className="flex items-center gap-2">
          <LanguageSwitch language={language} setLanguage={handleSetLanguage} />
          <a
              href="/coming-soon"
              className="hidden md:inline-block px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition shadow-lg hover:shadow-xl"
            >
              {content.register}
            </a>
          </div>
        </div>

        

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden hamburger-button p-2 text-cyan-300 hover:text-cyan-400 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-full left-0 right-0 bg-cyan-900/40 backdrop-blur-sm border-b border-cyan-800/50 md:hidden z-50">
            <nav className="flex flex-col py-4">
              <a
                href="#about"
                className="px-8 py-3 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-900/20 transition"
                onClick={closeMobileMenu}
              >
                {content.about}
              </a>
              <a
                href="#features"
                className="px-8 py-3 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-900/20 transition"
                onClick={closeMobileMenu}
              >
                {content.features}
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-900/20 transition"
                onClick={closeMobileMenu}
              >
                {content.howItWorks}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-900/20 transition"
                onClick={closeMobileMenu}
              >
                {content.contact}
              </a>

              <a
                href="/coming-soon"
                className="mt-4 mx-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition shadow-lg hover:shadow-xl text-center"
                onClick={closeMobileMenu}
              >
                {content.register}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="flex items-center justify-center gap-2">
          <span className="text-cyan-900 font-bold py-1 bg-cyan-500 rounded-full px-4 mb-3 outline outline-cyan-200 animate-pulse shadow-lg">
            {language === 'en' ? 'Find your dream job with us!' : 
             language === 'lo' ? 'ມາຫາວຽກໃນຝັນກັບພວກເຮົາສິ!' : 
             language === 'cn' ? '和我们一起寻找理想工作！' :
             'มาหางานในฝันกับเราสิ!'}
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg min-h-[4rem] sm:min-h-[6rem] flex items-center justify-center">
          <span className="text-cyan-300">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className="max-w-2xl text-lg sm:text-2xl text-cyan-100 mb-8">
          {content.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-lg shadow-lg transition"
          >
            {content.learnMore} <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold text-lg transition"
          >
            {content.contactUs}
          </a>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">{counters.jobs}+</div>
            <div className="text-cyan-100">{content.positions}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">{counters.companies}+</div>
            <div className="text-cyan-100">{content.companies}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">{counters.applicants}+</div>
            <div className="text-cyan-100">{content.applicants}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">{counters.satisfaction}%</div>
            <div className="text-cyan-100">{content.satisfaction}</div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">{content.featuresTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 rounded-xl p-8 flex flex-col items-center shadow-lg border border-cyan-900 hover:border-cyan-500 transition">
              <Users className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-center">{content.feature1Title}</h3>
              <p className="text-cyan-100 text-center">{content.feature1Desc}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-8 flex flex-col items-center shadow-lg border border-cyan-900 hover:border-cyan-500 transition">
              <Globe className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-center">{content.feature2Title}</h3>
              <p className="text-cyan-100 text-center">{content.feature2Desc}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-8 flex flex-col items-center shadow-lg border border-cyan-900 hover:border-cyan-500 transition">
              <Briefcase className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-center">{content.feature3Title}</h3>
              <p className="text-cyan-100 text-center">{content.feature3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">{content.howItWorksTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">{content.step1Title}</h3>
              <p className="text-cyan-100">{content.step1Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">{content.step2Title}</h3>
              <p className="text-cyan-100">{content.step2Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">{content.step3Title}</h3>
              <p className="text-cyan-100">{content.step3Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">{content.step4Title}</h3>
              <p className="text-cyan-100">{content.step4Desc}</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="relative max-w-4xl mx-auto">
              <h1 className="text-cyan-300 text-2xl font-bold mb-8">{content.videoTitle}</h1>
              <Image
                src="/vdo_cover.jpg"
                alt="Rise Career Video Cover"
                width={600}
                height={400}
                className="w-full rounded-xl border border-cyan-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="/not-found" className="w-20 h-20 bg-cyan-200 hover:bg-cyan-400 rounded-full flex items-center justify-center shadow-lg transition-colors group">
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <p className="text-cyan-100 text-lg mt-6">{content.videoDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300">{content.aboutTitle}</h2>
              <p className="text-lg text-cyan-100 mb-6">
                {content.aboutDesc}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-100">{content.benefit1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-100">{content.benefit2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-100">{content.benefit3}</span>
                </div>
              </div>
            </div>
            <div className="bg-black/40 rounded-xl p-8 border border-cyan-900">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">{content.whyTitle}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{content.growthTitle}</h4>
                    <p className="text-cyan-100 text-sm">{content.growthDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{content.timeTitle}</h4>
                    <p className="text-cyan-100 text-sm">{content.timeDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{content.securityTitle}</h4>
                    <p className="text-cyan-100 text-sm">{content.securityDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">{content.testimonialsTitle}</h2>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-cyan-300 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-cyan-300 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (isMobile ? 100 : 33.333)}%)`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-2"
                  >
                    <div className="bg-black/40 rounded-xl p-6 border border-cyan-900 h-full">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-cyan-100 mb-4 flex-grow">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="font-semibold text-cyan-300">- {testimonial.name}</div>
                      <div className="text-sm text-cyan-100">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-cyan-600 hover:bg-cyan-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <a

            className="text-3xl md:text-4xl font-bold mb-6  block"
          >
            {content.ctaTitle}
          </a>
          <p className="text-xl mb-8 text-cyan-100">
            {content.ctaDesc}
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61564754021210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {content.startNow} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">{content.categoriesTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/40 rounded-xl p-6 text-center border border-cyan-900 hover:border-cyan-500 transition cursor-pointer">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold mb-2">{content.tech}</h3>
              <p className="text-sm text-cyan-100">2,500+ {content.positions}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 text-center border border-cyan-900 hover:border-cyan-500 transition cursor-pointer">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold mb-2">{content.marketing}</h3>
              <p className="text-sm text-cyan-100">1,800+ {content.positions}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 text-center border border-cyan-900 hover:border-cyan-500 transition cursor-pointer">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold mb-2">{content.finance}</h3>
              <p className="text-sm text-cyan-100">1,200+ {content.positions}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 text-center border border-cyan-900 hover:border-cyan-500 transition cursor-pointer">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold mb-2">{content.sales}</h3>
              <p className="text-sm text-cyan-100">1,500+ {content.positions}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">{content.blogTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-black/40 rounded-xl overflow-hidden border border-cyan-900 hover:border-cyan-500 transition">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Facebook</span>
                  <span className="text-xs text-cyan-300">
                    {language === 'en' ? '2 hours ago' : 
                     language === 'lo' ? '2 ຊົ່ວໂມງທີ່ແລ້ວ' : 
                     language === 'cn' ? '2小时前' :
                     '2 ชั่วโมงที่แล้ว'}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.blog1Title}</h3>
                <p className="text-cyan-100 text-sm mb-4">
                  {content.blog1Desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-200">👍 245 ❤️ 89 💬 23</span>
                  <a href="https://www.facebook.com/profile.php?id=61564754021210"
                    target="_blank"
                    rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">{content.readMore}</a>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-black/40 rounded-xl overflow-hidden border border-cyan-900 hover:border-cyan-500 transition">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Facebook</span>
                  <span className="text-xs text-cyan-300">
                    {language === 'en' ? '1 day ago' : 
                     language === 'lo' ? '1 ມື້ທີ່ແລ້ວ' : 
                     language === 'cn' ? '1天前' :
                     '1 วันที่แล้ว'}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.blog2Title}</h3>
                <p className="text-cyan-100 text-sm mb-4">
                  {content.blog2Desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-200">👍 189 ❤️ 67 💬 15</span>
                  <a href="https://www.facebook.com/profile.php?id=61564754021210"
                    target="_blank"
                    rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">{content.readMore}</a>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-black/40 rounded-xl overflow-hidden border border-cyan-900 hover:border-cyan-500 transition">
              <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Facebook</span>
                  <span className="text-xs text-cyan-300">
                    {language === 'en' ? '3 days ago' : 
                     language === 'lo' ? '3 ມື້ທີ່ແລ້ວ' : 
                     language === 'cn' ? '3天前' :
                     '3 วันที่แล้ว'}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.blog3Title}</h3>
                <p className="text-cyan-100 text-sm mb-4">
                  {content.blog3Desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-200">👍 312 ❤️ 134 💬 45</span>
                  <a href="https://www.facebook.com/profile.php?id=61564754021210"
                    target="_blank"
                    rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">{content.readMore}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="bg-black/40 rounded-xl border border-cyan-900 hover:border-cyan-500 transition px-8 py-4">
            <a
              href="https://www.facebook.com/profile.php?id=61564754021210"
          target="_blank"
          rel="noopener noreferrer"
              className="text-cyan-300 text-lg font-bold text-center hover:text-cyan-400 transition"
            >
              {content.viewAllPosts}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">{content.faqTitle}</h2>
          <div className="space-y-6">
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.faq1Q}</h3>
              <p className="text-cyan-100">{content.faq1A}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.faq2Q}</h3>
              <p className="text-cyan-100">{content.faq2A}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.faq3Q}</h3>
              <p className="text-cyan-100">{content.faq3A}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.faq4Q}</h3>
              <p className="text-cyan-100">{content.faq4A}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.faq5Q}</h3>
              <p className="text-cyan-100">{content.faq5A}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-cyan-900">
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">{content.faq6Q}</h3>
              <p className="text-cyan-100">{content.faq6A}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.newsletterTitle}</h2>
          <p className="text-xl mb-8 text-cyan-100">{content.newsletterDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={content.emailPlaceholder}
              className="flex-1 px-4 py-3 rounded-lg text-white placeholder-white-500 outline outline-white focus:outline-white focus:ring-2 focus:ring-cyan-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              {content.subscribe}
            </button>
          </div>
          <p className="text-sm text-cyan-100 mt-4">{content.newsletterNote}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-700/20 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-300">{content.contact}</h3>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-100">+856 20 7831 4914</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-100">inforise-career@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-100">Laos, Vientiane</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-300">{content.services}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cyan-100 hover:text-cyan-400 transition">
                  {content.onlineApply}
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-100 hover:text-cyan-400 transition">
                  {content.register}
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-100 hover:text-cyan-400 transition">
                  {content.forCompanies}
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-100 hover:text-cyan-400 transition">
                  {content.contactUs}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-300">{content.aboutTitle}</h3>
            <p className="text-cyan-100">
              {content.aboutDesc}
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <a
        href="https://m.me/61564754021210"
          target="_blank"
          rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        title="Chat with us"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
      </a>
    </div>
  );
}

// Add LanguageSwitch component
function LanguageSwitch({ language, setLanguage }: { language: Language, setLanguage: (lang: Language) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'US' },
    { code: 'th', name: 'TH' },
    { code: 'lo', name: 'LA' },
    { code: 'cn', name: 'CN' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-dropdown')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative language-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-cyan-900/50 hover:bg-cyan-800/70 text-cyan-200 rounded-lg transition-colors border border-cyan-700/50"
      >
        <span className="text-sm font-medium">{currentLang?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-16 bg-cyan-900/95 backdrop-blur-sm border border-cyan-700/50 rounded-lg shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-center px-3 py-2 text-center hover:bg-cyan-800/70 transition-colors ${language === lang.code ? 'bg-cyan-700/50 text-cyan-100' : 'text-cyan-200'
                } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'lo' ? 'rounded-b-lg' : ''}`}
            >
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
