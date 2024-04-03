"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "E-commerce",
        description: "",
        image: "/images/projects/1.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/mgviera92/ecommerce-front",
        previewUrl: "https://ecommerce-front-mgviera92.vercel.app"
    },
    {
        id: 2,
        title: "Admin Panel",
        description: "",
        image: "/images/projects/2.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/mgviera92/ecommerce-adminPanel",
        previewUrl: "https://ecommerce-admin-panel-mgviera92.vercel.app/"
    },
    {
        id: 3,
        title: "Pokedex",
        description: "",
        image: "/images/projects/3.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/mgviera92/PI-Pokemon",
        previewUrl: "https://pi--pokedex.vercel.app"
    },
    {
        id: 4,
        title: "Jobs App",
        description: "",
        image: "/images/projects/4.png",
        tag: ["Web"],
        gitUrl: "https://github.com/mgviera92/jobs-app",
        previewUrl: "https://jobs-app-mu.vercel.app/"
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 ">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        tags={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection;