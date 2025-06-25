"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Star, Users, MessageCircle } from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const leadRef = useRef<HTMLDivElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (leadRef.current) observer.observe(leadRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center p-0 animate-float group-hover:animate-glow transition-all duration-300">
                <Image
                  src="/circle.png"
                  alt="羅針盤"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <span className="text-lg sm:text-2xl font-bold gradient-text-orange-blue">羅針盤</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#vision" className="text-gray-700 hover:text-orange-500 transition-colors">
                Vision
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors">
                About Us
              </a>
              <a href="#join" className="text-gray-700 hover:text-orange-500 transition-colors">
                Join Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#vision" 
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vision
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="#join" 
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 animated-bg-subtle particles">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-pink-50/20 to-blue-50/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div ref={heroRef} className="opacity-0 transform translate-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-reveal">
              <span className="text-gray-900">君の</span><span className="gradient-text animate-text-gradient">「好き」</span><span className="text-gray-900">を、</span>
              <br />
              <span className="text-gray-900">人生の</span><span className="gradient-text animate-text-gradient">羅針盤</span><span className="text-gray-900">に。</span>
            </h1>
          </div>

          <div ref={leadRef} className="opacity-0 transform translate-y-8 animation-delay-300">
            <div className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              <p>大学という大海原へ、ようこそ。</p>
              <p>
                無限の可能性を前に、「何かを始めたい」という熱意と、「何をすればいいのか」という戸惑いが、
                君の胸に渦巻いているかもしれない。
              </p>
              <p>長い受験勉強を乗り越えたそのエネルギーを、次は何に注ぐ？</p>
              <p className="text-orange-600 font-semibold">もし君が、心から熱中できる何かを探しているなら。</p>
              <p className="text-blue-600 font-semibold">
                もし君が、互いを高め合い、本気で未来を語り合える仲間を求めているなら。
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 sm:mt-8">その答えは、ここにある。</p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 animated-bg-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 stagger">
            <a href="#vision" className="group transform-3d">
              <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced rotate-3d">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-all duration-300">Vision</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">我々の目指す未来とビジョンを知る</p>
              </div>
            </a>

            <a href="#about" className="group transform-3d">
              <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced rotate-3d">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500" style={{animationDelay: '1s'}}>
                  <span className="text-2xl text-white">🧭</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-all duration-300">About Us</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">羅針盤とは何かを詳しく知る</p>
              </div>
            </a>

            <a href="#join" className="group transform-3d">
              <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced rotate-3d">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500" style={{animationDelay: '2s'}}>
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-all duration-300">Join Us</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">挑戦者として仲間に加わる</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 particles relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gray-900">Our </span><span className="gradient-text animate-text-gradient">Vision</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange-blue mb-12 animate-scale-pulse">
                自らの意志で人生を選択し、自己実現を果たす
              </h3>
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-2xl font-bold text-gray-900 mb-8">我々の掲げる目標はただ一つ。</p>

              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-orange-500">
                <p className="text-xl font-semibold text-gray-900">
                  「メンバー全員が、自らの意志で人生を選択し、自己実現を果たすこと」
                </p>
              </div>

              <p className="text-gray-700">
                「<span className="text-red-500 font-semibold">好きなことを仕事にするのは夢物語だ</span>
                」と誰かが言うかもしれない。
              </p>

              <p className="text-gray-700">
                我々は、<span className="text-orange-500 font-semibold">本気の行動</span>
                がその壁を打ち破ることを証明したい。
              </p>

              <div className="bg-blue-50 p-8 rounded-lg my-12">
                <div className="space-y-4 text-gray-800">
                  <p className="font-semibold text-blue-600">自分の人生を、他人の価値観に委ねるな。</p>
                  <p>深く考え、情熱に従い、自らの手で未来を掴み取れ。</p>
                  <p>
                    そのための<span className="text-orange-500 font-semibold">知恵</span>と
                    <span className="text-blue-500 font-semibold">勇気</span>、そして
                    <span className="text-green-600 font-semibold">最高の仲間</span>を、羅針盤で手に入れよう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 particles relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-gray-900">About</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 rounded-full flex items-center justify-center p-0 flex-shrink-0 animate-float pulse-glow">
                  <Image
                    src="/circle.png"
                    alt="羅針盤"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <span className="gradient-text animate-text-gradient">"羅針盤"</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange-blue mb-8 animate-scale-pulse">挑戦者のためのコミュニティ</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
                <p className="text-xl font-semibold text-gray-900">
                  【全員が<span className="text-orange-500">自己実現</span>できる楽しい環境を】
                </p>
              </div>
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-2xl font-bold text-gray-900 mb-8">
                我々「羅針盤」は、<span className="text-red-500">単なるサークルではない</span>。
              </p>

              <p className="text-gray-700">
                メンバー一人ひとりが<span className="text-orange-500 font-semibold">人生の主役</span>となり、 「
                <span className="text-blue-500 font-semibold">自己実現</span>」を追求する
                <span className="text-green-600 font-semibold">挑戦者のためのコミュニティ</span>だ。
              </p>

              <p className="text-gray-700">
                ここでは、多様な才能と野心を持つ仲間たちが、互いに刺激を与え、行動を加速させていく。
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                <div>
                  <Image
                    src="/people.JPG"
                    alt="Community interaction"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-800">
                      「<span className="text-red-500 font-semibold">やりたいことがない</span>」と立ち止まっていた者が、
                      <span className="text-orange-500 font-semibold">誰よりも熱中できる何か</span>を見つける。
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-800 font-semibold text-center text-xl">
                      そんな<span className="text-blue-500">化学反応</span>が、日々生まれる場所だ。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 animated-bg-subtle particles relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gray-900">Join </span><span className="gradient-text animate-text-gradient">Us</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange-blue mb-12 animate-scale-pulse">新たな挑戦者へ</h3>
            </div>

            <div className="space-y-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">こんな君を待っている</h4>

              <div className="grid md:grid-cols-3 gap-8 stagger">
                <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced transform-3d group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    <span className="gradient-text-orange-blue">受験勉強の次</span>に打ち込むべき「何か」を探している君へ
                  </h5>
                </div>

                <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced transform-3d group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500" style={{animationDelay: '1s'}}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    <span className="gradient-text-orange-blue">行動力ある仲間</span>が集う環境に、身を投じたい君へ
                  </h5>
                </div>

                <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced transform-3d group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500" style={{animationDelay: '2s'}}>
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    まだ見ぬ<span className="gradient-text-orange-blue">自分の可能性</span>を、信じてみたい君へ
                  </h5>
                </div>
              </div>

              <div className="bg-white p-12 rounded-lg shadow-sm border-l-4 border-orange-500 text-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  やりたいことがまだ決まっていなくても、サークル選びに迷っていても、心配はいらない。
                </p>
                <p className="text-2xl font-bold text-orange-600 mb-6">
                  その<span className="text-blue-600">燻る想い</span>こそ、最高の燃料だ。
                </p>
                <p className="text-xl text-gray-700 mb-8">羅針盤は、そんな君を心から歓迎する。</p>

                <div className="glass-dark text-white p-8 rounded-xl animate-gradient particles relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-3xl font-bold mb-6">
                      君の航路を指し示す<span className="gradient-text animate-text-gradient">羅針盤</span>は、ここにある。
                    </h4>
                    <p className="text-xl mb-8 text-gray-200 animate-scale-pulse">さあ、我々と共に、まだ見ぬ世界へ冒険の帆を張ろう。</p>

                    <Button
                      asChild
                      size="lg"
                      className="btn-enhanced text-white px-10 py-6 text-lg font-semibold shadow-2xl"
                    >
                      <a href="https://www.instagram.com/rashinbantodai?igsh=ZW02cHQzaWgxaGpn" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        相談してみる
                      </a>
                    </Button>

                    <div className="mt-8 text-sm text-gray-300">
                      <p>質問や相談があれば、いつでも気軽にお声がけください。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
