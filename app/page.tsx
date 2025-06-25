"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

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
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center p-1">
                <Image
                  src="/circle.png"
                  alt="羅針盤"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                />
              </div>
              <span className="text-lg sm:text-2xl font-bold text-gray-900">羅針盤</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/vision" className="text-gray-700 hover:text-orange-500 transition-colors">
                Vision
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
                About Us
              </Link>
              <Link href="/join" className="text-gray-700 hover:text-orange-500 transition-colors">
                Join Us
              </Link>
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
                <Link 
                  href="/vision" 
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vision
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/join" 
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div ref={heroRef} className="opacity-0 transform translate-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              君の<span className="text-orange-500">「好き」</span>を、
              <br />
              人生の<span className="text-blue-500">羅針盤</span>に。
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg">
                <Link href="/join">今すぐ参加する</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 px-6 sm:px-8 py-3 text-base sm:text-lg"
              >
                <Link href="/about">詳しく知る</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-orange-500">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600">自らの意志で人生を選択し、自己実現を果たす</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-500">🧭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">挑戦者のためのコミュニティ</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Action</h3>
              <p className="text-gray-600">本気の行動で未来を掴み取る</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
