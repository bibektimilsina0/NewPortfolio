"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin,faUpwork } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
function Contact() {
   
    const [formData ,setFormData]=useState({
        name:'',
        email:'',
        project:''
    })
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            console.log(formData)
          const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle success, e.g., show a success message or redirect
            console.log('Data sent successfully!');
            window.alert('Data sent successfully!')
          } else {
            // Handle error, e.g., show an error message
            console.error('Failed to send data to the backend.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <div className="h-screen  mx-4" id="contact">
            <h1 className="text-2xl mt-4 text-center">CONTACT</h1>
            <div className="flex  justify-around items-center h-full ">
                <div className="w-1/2 text-center">
                    <h2 className="text-xl font-bold">Got a new project?</h2>
                    <h5 className="text-gray-500 py-4">Let's talk!</h5>
                    <div>
                        <div className="my-12 flex justify-center">
                            <a href="https://www.facebook.com/bibek.timilsina.568" target="_blank" className="px-4" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="xl" className="text-blue-800" />
                            </a>
                            <a href="https://www.linkedin.com/in/bibek-timilsina-6a5477253/" target="_blank" rel="noopener noreferrer" className="px-4">   <FontAwesomeIcon icon={faLinkedin} size="xl" className="text-blue-600" /></a>

                            <a href="https://github.com/bikkibro" target="_blank" rel="noopener noreferrer" className="px-4">  <FontAwesomeIcon icon={faGithub} size="xl" className="text-gray-300"/></a>
                        </div>

                    </div>
                    <h2 className="text-xl font-bold sm:mt-12">Any new contracts on the horizon that I can assist with? </h2>

                    <div className="p-4">
                        <span className="px-2">Hire me</span>
                    <a href="https://www.upwork.com/freelancers/~01bc53426d63dc0f1b" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 " />  <FontAwesomeIcon icon={faUpwork}  size="2xl" className="text-green-600" />
                            </a>
                    </div>

                </div>
                <div className="mx-8 w-1/2">
                    <h2 className="text-xl font-bold">Estimate your project?</h2>
                    <h5 className="text-gray-500">Let me know here!</h5>
                    <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-amber-400">
                                What's your email?
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="abc@gmail.com"
                                className="mt-1 p-2 border rounded-md w-full"
                                value={formData.email}
                                onChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-amber-400">
                                What's your Name?
                            </label>
                            <input type="text" id="name" name="name" placeholder="Bibek Timilsina" className="mt-1 p-2 border rounded-md w-full" 
                            value={formData.name}
                            onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="project" className="block text-sm font-medium text-amber-400">
                                Tell me about your Project.
                            </label>
                            <textarea
                                type="text"
                                id="project"
                                name="project"
                                placeholder="I have a project ........."
                                className="mt-1 p-2 border rounded-md w-full h-24 text-gray-800"
                                value={formData.project}
                                onChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 active:bg-blue-800 "
                        >
                            <FontAwesomeIcon icon={faArrowRight} className="mr-2 " />

                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
