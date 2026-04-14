"use client";

import CalDotCom from "../cal-dot-com";

export default function ContactFooter() {
    return (
        <section className="w-[640px] mx-auto py-4 text-center text-[#484848] relative">

            <div className="text-[36px] text-[#5A5A5A] flex flex-col items-center leading-9">
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
            <div className="mt-4 text-[14px] text-neutral-500 leading-5 max-w-[480px] mx-auto">
                <p>Book an introductory call with me to get clear idea about</p>
                <p>your latest product around design & development</p>
            </div>

            {/* Input + Button */}
            <div className="mt-14 flex items-center justify-center gap-3 font-sans">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-[260px] h-[38px] px-4 rounded-full bg-[#5A5A5A] text-white placeholder:text-[14px] font-normal placeholder:tracking-[-0.5px] placeholder:text-neutral-300 outline-none shadow-md"
                />

                <CalDotCom className="h-9.5 px-5 rounded-full bg-[#4BA3FF] text-white text-sm font-medium shadow-md hover:bg-blue-600 transition text-[14px]">
                    Book a Call
                </CalDotCom>
            </div>

            {/* Divider */}
            <div className="mt-14 border-t border-neutral-300" />

            {/* Footer */}
            <div className="mt-8 flex justify-between text-left font-sans">

                {/* Left */}
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 font-candle italic rounded-[10px] bg-blue-400 flex items-center justify-center text-white text-[28px] font-semibold">
                            m
                        </div>
                        <div className="leading-5">
                            <p className="font-medium text-[18px] text-[#484848]">MehulxBuilds</p>
                            <p className="text-xs text-neutral-400 tracking-[-0.1px]">© 2026 All rights reserved.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-neutral-500 text-sm">
                        From ideas to product <br />
                        Making them standout
                    </p>
                </div>

                {/* Columns */}
                <div className="flex gap-10">

                    <div>
                        <p className="font-medium text-neutral-800 mb-2 text-[15px]">Services</p>
                        <ul className="space-y-1 text-neutral-500 text-[14px]">
                            <li>Design</li>
                            <li>Development</li>
                            <li>Automation</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-neutral-800 mb-2 text-[15px]">Socials</p>
                        <ul className="space-y-1 text-neutral-500 text-[14px]">
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-neutral-800 mb-2 text-[15px]">Legal</p>
                        <ul className="space-y-1 text-neutral-500 text-[14px]">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contracts</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-[#5A5A5A] italic font-apparel leading-0 translate-y-[170px]">
                <p className="text-[300px] tracking-tight font-medium drop-shadow-lg drop-shadow-neutral-500 text-stroke-light">
                    mehul
                </p>
            </div>
        </section>
    );
};