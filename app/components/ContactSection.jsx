"use client";
import Image from "next/image";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";

const ContactSection = () => {
    return (
        <section
        id="contact"
        className="grid md:grid-row-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="grid justify-center">
          <h5 className="flex justify-center  text-xl font-bold text-white my-2 mb-4">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
        </div>
        <div className="socials flex flex-row gap-5 items-center justify-center">
            <Link href="https://github.com/mgviera92/">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://linkedin.com/in/gabriela-viera-1653b5265">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
    </section>
    )
}

export default ContactSection;