'use client'
import Image from 'next/image'
import Lottie from 'lottie-react'
import NavigationItem from "@/components/Home/navigation/NavigationItem";
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { GoogleIcon, AppleIcon } from '@/public/Icons'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [animationData, setAnimationData] = useState(null)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    fetch('https://lottie.host/76becb05-0074-4eff-a1e8-b64365256897/Kbg6HN1aXy.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('');
    try{
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Login attempt with:', email, password)
        router.push('/products');
    }catch(err){
        setError('An error occurred. Please try again.')
    }finally{
        setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left side with illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#8B4513] items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          {animationData && <Lottie animationData={animationData} style={{width: '75%', height: '75%'}} />}
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FFEFD5]">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-serif text-center text-[#8B4513] mb-8">HarmonyHub</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Username or email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513] border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                </label>
            </div>
            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-[#8B4513] hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B4513] hover:bg-[#A0522D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B4513]"
            >
               {isLoading ? 'Processing...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#FFEFD5] text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Sign in with Google</span>
                <GoogleIcon className="w-5 h-5" />
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Sign in with Apple</span>
                <AppleIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <p className="mt-8 text-center text-sm text-black">
            New to HarmonyHub?{' '}
            <Link href="/signup" className="text-[#8B4513] hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}