"use client";

import Link from "next/link";
import CalDotCom from "../cal-dot-com";

export default function ContactFooter() {
    return (
        <section className="w-full max-w-[640px] mx-auto py-4 px-4 lg:px-0 text-center text-[#484848] relative">

            <div className="w-full rounded-xl flex items-center justify-center gap-4 bg-white py-8 sm:py-15">
                <p className='font-apparel tracking-[0.3px] italic text-[#c8c8c8] text-[20px] sm:text-[26px]'>
                    Get In Touch.
                </p>
            </div>


            <div className="text-[20px] sm:text-[28px] lg:text-[36px] text-[#5A5A5A] flex flex-col items-center leading-6 sm:leading-8 lg:leading-9">
                {/* Heading */}
                <h1 className="font-sans font-medium tracking-tight">
                    Crafting thoughtful experiences
                </h1>

                {/* Subheading (italic serif style) */}
                <p className="font-apparel italic tracking-[-0.03em]">
                    Products that fills the gap
                </p>
            </div>

            {/* Description */}
            <div className="mt-4 text-[12px] sm:text-[14px] text-neutral-500 leading-4 sm:leading-5 max-w-[480px] mx-auto tracking-[-0.4px]">
                <p>Book an introductory call with me to get clear idea about</p>
                <p>your latest product around design & development</p>
            </div>

            {/* Input + Button */}
            <div className="mt-8 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 font-sans">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="hidden sm:block w-full sm:w-[260px] h-[38px] px-4 rounded-full bg-[#5A5A5A] text-white placeholder:text-[14px] font-normal placeholder:tracking-[-0.5px] placeholder:text-neutral-300 outline-none shadow-md"
                />

                <CalDotCom className="h-9.5 px-5 rounded-full bg-[#4BA3FF] text-white font-medium shadow-md hover:bg-blue-600 transition text-[12.5px] sm:text-[14px]">
                    Book a Call
                </CalDotCom>
            </div>

            {/* Divider */}
            <div className="mt-8 sm:mt-14 border-t border-neutral-300" />

            {/* Footer */}
            <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:justify-between text-left font-sans">

                {/* Left */}
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 font-candle italic rounded-[10px] bg-blue-400 flex items-center justify-center text-white text-[28px] font-semibold">
                            m
                        </div>
                        <div className="leading-5">
                            <p className="font-medium text-[13px] sm:text-[18px] text-[#484848]">MehulxBuilds</p>
                            <p className="text-xs text-neutral-400 tracking-[-0.1px]">© 2026 All rights reserved.</p>
                        </div>
                    </div>

                    <p className="hidden sm:block mt-4 text-neutral-500 text-sm">
                        From ideas to product <br />
                        Making them standout
                    </p>
                </div>

                {/* Columns */}
                <div className="flex gap-6 sm:gap-10">

                    <div>
                        <p className="font-medium text-neutral-800 mb-2 text-[13px] sm:text-[15px]">Services</p>
                        <ul className="space-y-1 text-neutral-500 text-[12.5px] sm:text-[14px]">
                            <li>Design</li>
                            <li>Development</li>
                            <li>Automation</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-neutral-800 mb-2 text-[13px] sm:text-[15px]">Socials</p>
                        <ul className="space-y-1 text-neutral-500 text-[12.5px] sm:text-[14px] flex flex-col">
                            <Link href="https://x.com/MehulxBuilds" target="_blank">
                                Twitter
                            </Link>
                            <Link href="https://www.linkedin.com/in/mehul-prajapati-816b28315/" target="_blank">
                                LinkedIn
                            </Link>
                            <Link href="https://www.instagram.com/mehulxbuilds/" target="_blank">
                                Instagram
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-neutral-800 mb-2 text-[13px] sm:text-[15px]">Legal</p>
                        <ul className="space-y-1 text-neutral-500 text-[12.5px] sm:text-[14px]">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contracts</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="hidden sm:block text-[#5A5A5A] italic font-apparel leading-0 translate-y-[100px] lg:translate-y-[170px] will-change-transform">
                <p className="text-[120px] sm:text-[200px] lg:text-[300px] tracking-tight font-medium drop-shadow-lg drop-shadow-neutral-500 text-stroke-light">
                    mehul
                </p>
            </div>
        </section>
    );
};