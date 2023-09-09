import React, { useState } from 'react'
import Title from './Title'
import WorkCard from './WorkCard'
import typing from '../assests/Images/typing.jpeg'
import daliie from '../assests/Images/dallie2.jpeg'
import takingbot from '../assests/Images/talkingBot.jpeg'
import ecommerce from '../assests/Images/E-commerce.jpeg'
import memoryLane from '../assests/Images/memoryLane.jpeg'
import quiz from '../assests/Images/quiz.jpeg'
function Works() {
  const [category, setCategory] = useState("");
  
  const projects = [
    {
      url: typing,
      githubUrl: "https://github.com/cripttion/type-me",
      visitUrl: "https://type-me.netlify.app/",
      projectName: "TYPE ME",
      category: "Web Dev"
    },
    {
      url: daliie,
      githubUrl: "https://github.com/cripttion/AI_Image_Generator",
      visitUrl: "https://github.com/cripttion/AI_Image_Generator",
      projectName: "AI Image Generator",
      category: "AI/ML"
    },
    {
      url: takingbot,
      githubUrl: "https://github.com/cripttion/Talking-BOT",
      visitUrl: "https://github.com/cripttion/Talking-BOT",
      projectName: "Talking Bot",
      category: "AI/ML"
    },
    {
      url: ecommerce,
      githubUrl: "https://github.com/cripttion/e-commerce",
      visitUrl: "https://cripttion.github.io/e-commerce/index.html",
      projectName: "E-commerce landing page",
      category: "Web Dev"
    },
    {
      url: memoryLane,
      githubUrl: "https://github.com/cripttion/MemoryLane",
      visitUrl: "https://github.com/cripttion/MemoryLane",
      projectName: "Memory Lane",
      category: "Web Dev"
    },
    {
      url: quiz,
      githubUrl: "https://github.com/cripttion/QuizGig",
      visitUrl: "https://github.com/cripttion/QuizGig",
      projectName: "QuizApp(quizzler)",
      category: "App Dev"
    }
  ];

  // Filter projects based on the selected category
  const filteredProjects = category ? projects.filter(project => project.category === category) : projects;

  return (
    <div className='mt-32' id='work'>
      <Title title="WORK" titleBack="MY WORK" />

      <div className='sections flex justify-center gap-10 mt-20'>
        <button
          className={`bg-teal-300 text-black p-3 rounded-xl ${category === "" ? 'bg-teal-500' : ''}`}
          onClick={() => setCategory("")}
        >
          All
        </button>
        <button
          className={`bg-teal-300 text-black p-3 rounded-xl ${category === "Web Dev" ? 'bg-teal-500' : ''}`}
          onClick={() => setCategory("Web Dev")}
        >
          Web Dev.
        </button>
        <button
          className={`bg-teal-300 text-black p-3 rounded-xl ${category === "App Dev" ? 'bg-teal-500' : ''}`}
          onClick={() => setCategory("App Dev")}
        >
          App Dev.
        </button>
        <button
          className={`bg-teal-300 text-black p-3 rounded-xl ${category === "AI/ML" ? 'bg-teal-500' : ''}`}
          onClick={() => setCategory("AI/ML")}
        >
          AI/ML
        </button>
      </div>
      
      <div className='work grid grid-cols-1 md:grid-cols-3 mx-0 md:mx-96 gap-20 mt-20'>
        {filteredProjects.map((project, index) => (
          <WorkCard
            key={index}
            url={project.url}
            githubUrl={project.githubUrl}
            visitUrl={project.visitUrl}
            projectName={project.projectName}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
