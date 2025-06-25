"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function VisionPage() {
  const contentRef = useRef<HTMLDivElement>(null)

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

    const elements = document.querySelectorAll(".fade-in-element")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center p-0">
                <Image
                  src="/circle.png"
                  alt="羅針盤"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">羅針盤</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/vision" className="text-orange-500 font-semibold">
                Vision
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
                About Us
              </Link>
              <Link href="/join" className="text-gray-700 hover:text-orange-500 transition-colors">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="fade-in-element opacity-0 transform translate-y-8">
            <Button asChild variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                トップページに戻る
              </Link>
            </Button>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-orange-500">Vision</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-12">
              自らの意志で人生を選択し、自己実現を果たす
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-element opacity-0 transform translate-y-8 space-y-8 text-lg leading-relaxed">
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

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-element opacity-0 transform translate-y-8">
            <h3 className="text-3xl font-bold mb-8">
              君も、この<span className="text-orange-400">ビジョン</span>に共感するか？
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-3">
                <a href="https://www.instagram.com/rashinbantodai?igsh=ZW02cHQzaWgxaGpn" target="_blank" rel="noopener noreferrer">今すぐ参加する</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
              >
                <Link href="/about">羅針盤について知る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
