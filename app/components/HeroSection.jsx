"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <div className="col-span-4 place-self-center mt-4 lg:mt-0"></div>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Hello, I&apos;m{" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Gaby',
                                1000,
                                'Web Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-10 lg:text-xl">
                        asdadsasdadwda awev w waeaweaweae
                    </p>
                    <div>
                        <Link
                            href={"/#contact"}
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                                Work with me
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1WDGZvgN8ktHeKJaMOkZTzyhZwH89KCwS/view?usp=drive_link"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-14 lg:mt-0">
                    <div className="rounded-full bg-[#1c1c1c] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
                        <Image 
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;