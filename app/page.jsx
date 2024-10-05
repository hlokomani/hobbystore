'use client';

import Image from 'next/image'
import NavigationItem from "@/components/Home/navigation/NavigationItem";
import { ArrowRight, CheckIcon } from "lucide-react";
import { Footer_Home } from "@/components/Home/Footer_Home";
import { useEffect, useState } from 'react'
import { More } from "@/components/Home/More";
import { useRouter } from 'next/navigation';
 
export default function Home() {
  const router = useRouter();

  const handleStartToday = () => {
    router.push('/login');
  };

  return (
    <>
      <div className="flex flex-col min-h-screen border-t-[1rem] md:border-t-[0.3rem] border-[#F74F39] bg-[#F4F3FA]">
        {/* navbar */}
        <div className="flex items-center justify-between px-10 pt-10">
          {/* left options */}
          <div className="flex items-center gap-3 font-semibold">
            <div className="text-orange-800 font-bold hover:opacity-60 hover:cursor-pointer md:block text-3xl">
              HarmonyHub
            </div>
          </div>
          {/* right options */}
          <div className="text-gray-800 font-semibold font-semibold md:flex gap-9 text-xl">
            <div className="hover:opacity-60 hover:cursor-pointer text-xl">Updates</div>
            <div className="hover:opacity-60 hover:cursor-pointer text-xl">Pricing</div>
            <div className="text-[#F74F39] hover:cursor-pointer" onClick={ handleStartToday }>
              Sign in{" "}
              <span>
                <ArrowRight
                  className="inline rotate-[355deg]"
                  strokeWidth={4}
                />
              </span>
            </div>
          </div>

          <div className="text-[#F74F39] hover:cursor-pointer font-bold md:hidden">
          Explore{" "}
            <span>
              <Image width={40} height={40} src="/download.svg" className="inline size-6 ms-2" />
            </span>
          </div>
        </div>

        {/* title */}
        <div className="flex flex-col items-center mx-auto mt-20 text-5xl font-bold md:text-8xl text-neutral-800">
          <p>Welcome to</p>
          <div className="flex">
            <p>Harmony</p>
            <Image width={40} height={40} src="/check.png" className="mx-2 mt-auto size-11 md:size-20" />
            <p className="text-[#F74F39]">Hub</p>
          </div>

          {/* message big screen */}
          <div className="hidden mt-5 text-xl font-semibold text-center opacity-60 md:block">
            <p>Your one-stop shop for all things guitar.</p>
            <p>Premium instruments, accessories, and expert advice.</p>
          </div>

          {/* message small screens */}
          <div className="mt-5 text-xl font-semibold text-center opacity-60 md:hidden">
            <p>Find your perfect guitar</p>
            <p>and start playing today.</p>
          </div>

          <div className="flex gap-3 mt-5 text-lg font-bold">
            <button className="py-2 bg-[#F84F39] text-white rounded-full px-3 hover:scale-105 transition duration-200" onClick={ handleStartToday }>
              Shop Now
            </button>
            <button className="py-2 bg-[#6B66DA] text-white rounded-full px-3 hover:scale-105 transition duration-200" onClick={ handleStartToday }>
              Custom Orders 🎸
            </button>
          </div>
        </div>

        <div className="px-5">
          {/* app sample */}
          <div className="grid w-full grid-cols-4 gap-3 p-3 mx-auto mt-10 border-2 size-96 rounded-2xl border-[#EAE9F3] max-w-[1250px] h-auto mb-10">
            {/* col 1 */}
            <div className="hidden w-full h-full col-span-1 bg-white rounded-2xl lg:block">
              {/* rectangles */}
              <div className="grid grid-cols-2 gap-2 p-3">
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
              </div>

              {/* fake navigation */}
              <div className="mt-6">
                <div className="font-semibold text-gray-500 ms-3">Categories</div>
                <NavigationItem
                  active={true}
                  className="bg-[#F3F3F7] py-2 hover:bg-[#F3F3F7]"
                >
                  <p className="font-semibold text-gray-800">
                    <span className="me-3">🎸</span> Electric Guitars
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🎼</span>Acoustic Guitars
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🎻</span>Bass Guitars
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🎵</span>Accessories
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🏷️</span>Special Offers
                  </p>
                </NavigationItem>
              </div>

              {/* fake user session */}
              <div className="flex items-end gap-2 px-3 pb-3 h-72">
                <div className="w-full h-10 bg-gray-200 rounded-full"></div>
                <Image width={40} height={40}
                  src="/assets/play/guitarist_2.png"
                  alt="profile"
                  className="rounded-full size-10"
                />
              </div>
            </div>

            {/* col mid */}
            <div className="w-full h-full p-10 bg-white col-span-full lg:col-span-2 rounded-2xl">
              <div className="flex items-center gap-2 ">
                <div className="flex -space-x-3 overflow-hidden">
                  <Image width={40} height={40}
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[6]"
                    src="/assets/play/guitarist_2.png"
                    alt=""
                  />
                  <Image width={40} height={40}
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[5]"
                    src="/assets/play/guitarist_3.png"
                    alt=""
                  />
                  <Image width={40} height={40}
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[4]"
                    src="/assets/play/guitarist_1.png"
                    alt=""
                  />
                  <Image width={40} height={40}
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[3]"
                    src="/assets/play/guitarist_4.png"
                    alt=""
                  />
                  <Image width={40} height={40}
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[2]"
                    src="/assets/play/guitarist_5.png"
                    alt=""
                  />
                </div>
                <div className="font-bold text-gray-500">+1.2K</div>
              </div>
              <p className="text-gray-700 mt-8 text-4xl font-bold opacity-85">Featured Guitars</p>
              <p className="text-gray-700 w-10/12 mt-5 text-lg font-semibold">
                Explore our handpicked selection of premium guitars. From classic acoustics to high-end electrics, find your perfect instrument at HarmonyHub.
              </p>

              {/* guitar list container */}
              <div className="mt-8 space-y-6">
                {/* guitar item (user) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-[#F84F39] rounded-lg size-6 flex items-center justify-center">
                    <CheckIcon size={20} className="text-white -rotate-12" />
                  </div>

                  <div className="text-xl line-through decoration-orange-500 decoration-2 text-neutral-400 grow">
                    Gibson Les Paul Standard
                  </div>
                  <Image
                    className="rounded-full size-7"
                    src="/assets/play/guitarist_3.png"
                    alt="Guitarist 3"
                    width={56}
                    height={56}
                  />
                </div>

                {/* guitar item (youtube - user) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-[#F84F39] rounded-lg size-6 flex items-center justify-center">
                    <CheckIcon size={20} className="text-white -rotate-12" />
                  </div>

                  <div className="text-xl line-through decoration-orange-500 decoration-2 text-neutral-400 grow">
                    Fender Stratocaster
                  </div>

                  <div className="flex gap-3">
                    <Image width={40} height={40} className="rounded-full size-7" src="/assets/brands/3.png" />
                    <Image width={40} height={40}
                      className="rounded-full size-7"
                      src="/assets/play/guitarist_1.png"
                    />
                  </div>
                </div>

                {/* guitar item (spotify - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Taylor 814ce
                  </div>

                  <div className="flex gap-3">
                    <Image width={40} height={40} className="rounded-full size-7" src="/assets/brands/5.png" />
                    <Image width={40} height={40}
                      className="rounded-full size-7"
                      src="/assets/play/guitarist_3.png"
                    />
                  </div>
                </div>

                {/* guitar item (linear - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    PRS Custom 24
                  </div>

                  <div className="flex gap-3">
                    <Image width={40} height={40}
                      className="rounded-full size-7"
                      src="/assets/play/guitarist_4.png"
                    />
                  </div>
                </div>

                {/* guitar item (google - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Martin D-28
                  </div>

                  <div className="flex gap-3">
                    <Image width={40} height={40} className="rounded-full size-7" src="/assets/brands/2.png" />
                    <Image width={40} height={40} className="rounded-full size-7" src="/assets/play/guitarist_2.png" />
                  </div>
                </div>

                {/* guitar item (google - user) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-[#F84F39] rounded-lg size-6 flex items-center justify-center">
                    <CheckIcon size={20} className="text-white -rotate-12" />
                  </div>

                  <div className="text-xl line-through decoration-orange-500 decoration-2 text-neutral-400 grow">
                    Ibanez RG550
                  </div>

                  <div className="flex gap-3">
                    <Image width={40} height={40} className="rounded-full size-7" src="/assets/brands/1.png" />
                    <Image width={40} height={40}
                      className="rounded-full size-7"
                      src="/assets/play/guitarist_5.png"
                    />
                  </div>
                </div>

                {/* guitar item (google - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Epiphone SG Standard
                  </div>

                  <div className="flex gap-3">
                    <Image width={40} height={40}
                      className="rounded-full size-7"
                      src="/assets/play/guitarist_1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* col 3 */}
            <div className="hidden w-full h-full overflow-hidden bg-white lg:col-span-1 lg:block rounded-2xl">
              <Image width={500} height={500}
                className="object-cover object-center w-full h-full"
                src="/guitar_wall.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <More />
      <Footer_Home/>
    </>
  )
}