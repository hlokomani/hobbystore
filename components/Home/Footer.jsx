'use client';

import { useEffect, useState } from "react";
import Link from "react-router-dom";
import { apps, otherLinks, social, hub } from "./footer-data";

export function Footer() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}
	
	return (
		<footer>
			<div className="bg-[#20202e]">
				<img
					src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e5cc2feeeec34855f3714_img.svg"
					alt="wave"
					className="w-full h-auto max-w-[1600px]"
				/>
			</div>
			<div className="pt-[100px] pb-[50px] bg-[#20202e] text-white">
				<div className="mb-16 sm:px-[100px] px-5 py-[65px] flex lg:flex-row flex-col lg:gap-y-0 gap-y-5 justify-center lg:max-w-[1250px] max-w-[500px] mx-auto">
					<div className="flex flex-1">
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#F84F39]">
								HarmonyHub
							</p>
							{hub.map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									className="text-[15px] min-h-[30px] flex items-center justify-start hover:opacity-50 duration-300"
								>
									{label}
								</Link>
							))}
						</div>
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="w-full mb-2.5 min-h-[30px]" />
							{otherLinks.map(({ label }) => (
								<Link
									key={label}
									href="/home"
									className="text-[15px] min-h-[30px] flex items-center justify-start hover:opacity-50 duration-300"
								>
									{label}
								</Link>
							))}
						</div>
					</div>
					<div className="flex flex-1">
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#2590f2]">App</p>
							{apps.map(({ label }) => (
								<Link
									key={label}
									href="/home"
									className="text-[15px] min-h-[30px] flex items-center justify-start hover:opacity-50 duration-300"
								>
									{label}
								</Link>
							))}
						</div>
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#2a966f]">Social</p>
							{social.map(({ label }) => (
								<Link
									key={label}
									href="/home"
									className="text-[15px] min-h-[30px] flex items-center justify-start hover:opacity-50 duration-300"
								>
									{label}
								</Link>
							))}
						</div>
					</div>
					<div className="lg:max-w-[230px] max-w-full">
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#8f89fa]">Updates</p>
							<div className="rounded-2xl pt-4 pl-5 lg:pr-[50px] pr-5 pb-5 bg-[#2c2c3d] hover:bg-[#303041] w-full hover:scale-105 duration-300">
								<p className="text-[#f84f39] text-[30px] mb-4 font-semibold">
									Pick Your <br className="lg:block hidden" /> Guitar
								</p>
								<Link
									href={"/"}
									className="bg-[#f84f39] text-white hover:opacity-80 duration-300 text-sm font-semibold px-[14px] py-[5px] rounded-full"
								>
									v 1.16.0
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="min-h-[50px] flex items-end justify-center">
					<p className="text-center text-[#696f81] hover:text-white text-sm hover:cursor-pointer duration-300">
						ⓒ HarmonyHub 2024
					</p>
				</div>
			</div>
		</footer>
	);
}
