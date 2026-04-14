"use client";

import Image from 'next/image';
import Link from 'next/link';
import ImageAnimation from './image-animation';
import { SOCIALS } from './data';
import { Button, Hint } from "@repo/ui";
import { EmailLogo, GithubLogo, InstagramLogo, LinkedInLogo, MediumLogo, PinterestLogo, TwitterLogo } from './data/svg-logo';
import CalDotCom from '../cal-dot-com';
import { Download, PhoneCall } from 'lucide-react';

const Introduction = () => {
    return (
        <div className='min-h-full w-160 flex flex-col justify-start items-center'>
            <div className="min-h-28 w-full rounded-xl flex items-center gap-4 px-4 py-2 bg-white">
                {/* Avatar */}
                <div className="shrink-0">
                    <Image
                        src="/images/mehulxbuilds.png"
                        alt="Mehul Prajapati"
                        width={80}
                        height={80}
                        className="w-26 h-26 rounded-full object-cover"
                        unoptimized
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                    <h1 className="text-[25px] font-semibold tracking-[-0.5px] text-gray-900">
                        Mehul Prajapati.
                    </h1>

                    <p className="text-[15px] text-gray-400 tracking-[-0.1px]">
                        Developer · Designer · <span>
                            <Link className='hover:underline' href={'https://x.com/MehulxBuilds'} target='_blank'>@mehulxbuilds</Link>
                        </span>
                    </p>

                </div>
            </div>

            <div className='w-full text-[13.5px] px-4 py-2 flex flex-col items-start gap-[3px]'>
                <p className="text-gray-500 tracking-[0.1px]">
                    Hello! I’m <span className='font-medium'>Mehul</span> — building products with the fire of design and development.
                </p>
                <p className="text-gray-500 tracking-[0.1px]">
                    I build thoughtful digital products, focusing on both how they work and how they feel.
                </p>
                <p className="text-gray-500 tracking-[0.1px]">
                    Focused on crafting experiences that feel right.
                </p>
            </div>

            <div className='w-full text-[13.5px] px-4 py-2 flex flex-col items-center gap-2'>
                <div className='w-full text-[13.5px] flex items-center gap-2'>
                    <ImageAnimation data={SOCIALS} classname='rounded-full flex items-center justify-center size-5' />
                    <p className="text-gray-500 tracking-[0.1px] flex items-center gap-1">
                        <span>{"Btw I'm on bunch of "}<span className='font-medium'>{"Social Media's"}</span> as well</span> <span className='text-[14px]'>. . .</span>
                    </p>
                </div>

                <div className='w-full text-[13.5px] flex items-center gap-2 py-4'>
                    <Hint label='Twitter' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <TwitterLogo />
                        </Link>
                    </Hint>
                    <Hint label='Github' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <GithubLogo />
                        </Link>
                    </Hint>
                    <Hint label='LinkedIn' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <LinkedInLogo />
                        </Link>
                    </Hint>
                    <Hint label='Instagram' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <InstagramLogo />
                        </Link>
                    </Hint>
                    <Hint label='Medium' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <MediumLogo />
                        </Link>
                    </Hint>
                    <Hint label='Pinterest' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <PinterestLogo />
                        </Link>
                    </Hint>
                    <Hint label='Email' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <EmailLogo />
                        </Link>
                    </Hint>
                </div>
            </div>

            <div className='w-full text-[13.5px] px-4 py-2 flex items-center gap-2'>
                <CalDotCom className='font-medium tracking-tight bg-[#525252] border-2 border-[#8d8d8d] px-2 h-8.5 flex items-center justify-center gap-5 rounded-full hover:bg-[#424242]'>
                    <div className='size-3 bg-[#6db3ff] animate-caret-blink rounded-full' />
                    <p className='text-[13px]'>Book an Introductry Call</p>
                    <PhoneCall className='text-white size-4' />
                </CalDotCom>

                <Button className='font-semibold tracking-tight bg-[#F9F9F9] border-2 border-[#7a7a7a] px-2 h-8.5 flex items-center justify-center gap-2 rounded-full hover:bg-[#F1F1F1] text-[#525252]'>
                    <Download className='size-4'/>
                    <p className='text-[13px]'>Download CV</p>
                </Button>
            </div>
        </div>
    )
};

export default Introduction;