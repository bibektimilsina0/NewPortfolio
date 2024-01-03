"use client"
import {useState, useEffect } from "react";
import ProjectCard from "./projectCard";

function Projects() {
    // const url='http://localhost:3000/api/projects'
const [projects,setProjects]=useState([])
console.log(projects)
    useEffect(()=>{
     const getProjects=async()=>{
        const response=await fetch('/api/projects',{
            method:'GET'
        })
        const data=response.json()
        data.then((project)=>{
            
      setProjects(project)
        })
       
     }
     getProjects()
    },[])
    return (
        <div className=" h-lvh  mx-4" id="projects">
            <h1 className="text-2xl mt-4  text-center">PROJECTS</h1>
            <div className=" flex flex-wrap">
            {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
               
            </div>

        </div>
    );
}

export default Projects;