'use client';
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>TailwindCSS</li>
                <li>Redux</li>
                <li>Express</li>
                <li>React Native</li>
                <li>PostgreSQL</li>
                <li>SCRUM Methodology</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Universidad Tecnológica Nacional</li>
                <li>HENRY Bootcamp</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Técnica en Programación</li>
                <li>Fullstack Developer</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
    <section 
        id="about"
        className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" alt="about-image" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4 ">About me</h2>
                <p className="text-base lg:text-lg">
                    I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                        >
                            {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                        >
                            {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}
                        >
                            {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
    )
}

export default AboutSection;