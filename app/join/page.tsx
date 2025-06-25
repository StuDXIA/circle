"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MessageCircle, Users, Star } from "lucide-react"

export default function JoinPage() {
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
              <Link href="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
                About Us
              </Link>
              <Link href="/join" className="text-orange-500 font-semibold">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="fade-in-element opacity-0 transform translate-y-8">
            <Button asChild variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                トップページに戻る
              </Link>
            </Button>

            <div className="flex items-center justify-center md:justify-start mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mr-4">Join</h1>
              <span className="text-5xl md:text-6xl font-bold text-orange-500 ml-4">Us</span>
            </div>

            <div className="flex items-center justify-center md:justify-start mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">新たな挑戦者へ</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-element opacity-0 transform translate-y-8 space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">こんな君を待っている</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-orange-50 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <span className="text-orange-500">受験勉強の次</span>に打ち込むべき「何か」を探している君へ
                  </h4>
                </div>

                <div className="text-center p-8 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <span className="text-blue-500">行動力ある仲間</span>が集う環境に、身を投じたい君へ
                  </h4>
                </div>

                <div className="text-center p-8 bg-green-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    まだ見ぬ<span className="text-green-500">自分の可能性</span>を、信じてみたい君へ
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Message */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-element opacity-0 transform translate-y-8">
              <div className="bg-white p-12 rounded-lg shadow-sm border-l-4 border-orange-500">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  やりたいことがまだ決まっていなくても、サークル選びに迷っていても、心配はいらない。
                </p>
                <p className="text-2xl font-bold text-orange-600 mb-6">
                  その<span className="text-blue-600">燻る想い</span>こそ、最高の燃料だ。
                </p>
                <p className="text-xl text-gray-700">羅針盤は、そんな君を心から歓迎する。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-element opacity-0 transform translate-y-8">
            <h3 className="text-4xl font-bold mb-8">
              君の航路を指し示す<span className="text-orange-400">羅針盤</span>は、ここにある。
            </h3>
            <p className="text-xl mb-12 text-gray-300">さあ、我々と共に、まだ見ぬ世界へ冒険の帆を張ろう。</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                活動見学に申し込む
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                最新の新歓情報を確認する
              </Button>
            </div>

            <div className="mt-12 text-sm text-gray-400">
              <p>質問や相談があれば、いつでも気軽にお声がけください。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
