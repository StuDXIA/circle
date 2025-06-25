"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Target, Lightbulb, Rocket } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center p-0">
                <Image
                  src="/circle.png"
                  alt="羅針盤"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">羅針盤</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/vision" className="text-gray-700 hover:text-orange-500 transition-colors">
                Vision
              </Link>
              <Link href="/about" className="text-blue-500 font-semibold">
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="fade-in-element opacity-0 transform translate-y-8">
            <Button asChild variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                トップページに戻る
              </Link>
            </Button>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4">
              <span>About</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center p-0 flex-shrink-0">
                <Image
                  src="/circle.png"
                  alt="羅針盤"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <span className="text-blue-500">"羅針盤"</span>
            </h1>

            <div className="flex items-center justify-center md:justify-start mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600">挑戦者のためのコミュニティ</h2>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900">
                【全員が<span className="text-orange-500">自己実現</span>できる楽しい環境を】
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-element opacity-0 transform translate-y-8 space-y-8 text-lg leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in-element opacity-0 transform translate-y-8 text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">アイデアを形に</h3>
              <p className="text-gray-600 text-sm">燻っていたアイデアを具体的な形にする</p>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">目標を明確に</h3>
              <p className="text-gray-600 text-sm">ぼんやりとした憧れを、具体的な目標に変える</p>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">最高の仲間</h3>
              <p className="text-gray-600 text-sm">互いに刺激を与え合う多様な才能を持つ仲間たち</p>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">化学反応</h3>
              <p className="text-gray-600 text-sm">日々生まれる予想もしない化学反応と成長</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-element opacity-0 transform translate-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                ここで起こる<span className="text-orange-500">変化</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-12 items-center">
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-element opacity-0 transform translate-y-8">
            <h3 className="text-3xl font-bold mb-8">
              君も、この<span className="text-yellow-300">コミュニティ</span>の一員になろう
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
                <a href="https://www.instagram.com/rashinbantodai?igsh=ZW02cHQzaWgxaGpn" target="_blank" rel="noopener noreferrer">参加を検討する</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-500 px-8 py-3"
              >
                <Link href="/vision">ビジョンを確認する</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
