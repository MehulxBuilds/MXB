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
                <div className="shrink-0 relative">
                    <Image
                        src="/images/mehulxbuilds.png"
                        alt="Mehul Prajapati"
                        width={80}
                        height={80}
                        className="w-26 h-26 rounded-full object-cover"
                        unoptimized
                    />

                    <Button className='font-medium tracking-tight bg-white px-1 h-4 flex items-center justify-center gap-2.5 rounded-full hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800 transition-all absolute bottom-1 right-1.5'>
                        <span className="relative flex items-center justify-center size-3">
                            <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex size-1.75 rounded-full bg-green-500" />
                        </span>
                    </Button>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                    <h1 className="text-[25px] font-semibold tracking-[-0.5px] text-gray-900 flex items-center gap-2">
                        <span>Mehul Prajapati.</span>
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
                        <Link href={'https://x.com/MehulxBuilds'} target='_blank'>
                            <TwitterLogo />
                        </Link>
                    </Hint>
                    <Hint label='Github' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <GithubLogo />
                        </Link>
                    </Hint>
                    <Hint label='LinkedIn' align='center' side='right'>
                        <Link href={'https://www.linkedin.com/in/mehul-prajapati-816b28315/'} target='_blank'>
                            <LinkedInLogo />
                        </Link>
                    </Hint>
                    <Hint label='Instagram' align='center' side='right'>
                        <Link href={'https://www.instagram.com/mehulxbuilds/'} target='_blank'>
                            <InstagramLogo />
                        </Link>
                    </Hint>
                    <Hint label='Medium' align='center' side='right'>
                        <Link href={'https://medium.com/@mehulxbuilds'} target='_blank'>
                            <MediumLogo />
                        </Link>
                    </Hint>
                    <Hint label='Pinterest' align='center' side='right'>
                        <Link href={'https://github.com/MehulxBuilds'} target='_blank'>
                            <PinterestLogo />
                        </Link>
                    </Hint>
                    <Hint label='Email' align='center' side='right'>
                        <Link href={'mailto:mehulprajapati7456e@gmail.com'}>
                            <EmailLogo />
                        </Link>
                    </Hint>
                </div>
            </div>

            <div className='w-full text-[13.5px] px-4 py-2 flex items-center gap-2'>
                <CalDotCom className='font-medium tracking-tight bg-[#3b3b3b] border-2 border-[#c3c3c3] px-2 h-8.5 flex items-center justify-center gap-5 rounded-full hover:bg-[#424242] drop-shadow-md drop-shadow-neutral-400'>
                    <span className="relative flex items-center justify-center size-2.5">
                        <span className="absolute inline-flex size-full rounded-full bg-red-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex size-1.75 rounded-full bg-pink-500/90" />
                    </span>
                    <p className='text-[13px]'>Book an Introductry Call</p>
                    <PhoneCall className='text-white size-3.5' />
                </CalDotCom>

                <Link href={'https://drive.google.com/file/d/1VOUbQmZnxSVYfVFHHQxdtROWwrVzR3L-/view?usp=sharing'} target='_blank' className='font-semibold tracking-tight bg-[#F9F9F9] border-2 border-[#7a7a7a] px-2 h-8.5 flex items-center justify-center gap-2 rounded-full hover:bg-[#F1F1F1] text-[#525252] drop-shadow-md drop-shadow-neutral-400'>
                    <Download className='size-4' />
                    <p className='text-[13px]'>Download CV</p>
                </Link>
            </div>
        </div>
    )
};

export default Introduction;