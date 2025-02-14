"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";  // Import motion from framer-motion

function Projects() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch('/api/projects', {
                method: 'GET'
            });
            const data = await response.json();
            setProjects(data);
        };
        getProjects();
    }, []);

    return (
        <div className="mx-4" id="projects">
            <h1 className="text-2xl mt-4 text-center">PROJECTS</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {/* Use motion.div to animate the appearance of project cards */}
                {projects.map((project) => (
                    <motion.div
                        key={project._id}
                        initial={{ opacity: 0, y: 15 }}  // Start from slightly down and invisible
                        animate={{ opacity: 1, y: 0 }}   // Fade in and move up
                        exit={{ opacity: 0, y: -15 }}    // Fade out and move up when removed
                        transition={{ duration: 0.5 }}    // Duration of the transition
                        className="w-full sm:w-80 md:w-96"
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
