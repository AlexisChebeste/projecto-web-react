import { useEffect, useState } from "react";
import { Project } from "./Project";
import { IProject } from "../../types/project";


export function Projects(){

    const [projects, setProject] = useState([]);

    useEffect (()=>{
        fetch("http://localhost:3000/projects")
            .then((res) => res.json())
            .then((data) => setProject(data));
    }, []);

    return (
        <section className="pt-12 px-0 pb-24">
            <h2 className="mt-0 mx-auto mb-12 max-w-[780px] text-center">
                Check out some of our awesome projects with creative ideas and great
                design.
            </h2>
            <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
                {projects.map((project: IProject) => 
                <Project 
                    key={project.id} 
                    {...project}
                />)}
            </div>
        </section>
    );
}