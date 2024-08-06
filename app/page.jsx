'use client'
import Link from 'next/link'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    fetch('https://lottie.host/2f333900-c6a7-4602-9109-5818f2db6693/4cId9BEMJt.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#8B4513] to-[#A0522D] text-white p-4">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="w-64 h-64 mb-32">
          {animationData && <Lottie animationData={animationData} />}
        </div>
        <h1 className="text-6xl font-serif mb-4 text-center">Welcome to HarmonyHub</h1>
        <p className="text-xl mb-8 text-center">Everything Guitars, All In One Place</p>
        <div className="flex space-x-4">
          <Link href="/login" className="bg-white text-[#8B4513] px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300">
            Login
          </Link>
          <Link href="/signup" className="bg-[#FFEFD5] text-[#8B4513] px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  )
}