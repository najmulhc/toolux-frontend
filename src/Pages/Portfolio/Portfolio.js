import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";

const Portfolio = () =>  (
        <main className="container mx-auto px-12">
        <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="text-left">
                <h1 className="text-6xl font-semibold text-accent">Hi, I am Najmul</h1>
                <h2 className="text-xl uppercase my-2 font-semibold ">Frontend web developer</h2>
            </div>
            <img src="https://i.ibb.co/6YLtMgg/280512704-1229218437620216-1370335974306163024-n.jpg" alt="280512704-1229218437620216-1370335974306163024-n"  className="w-96 h-96 my-32"/>
        </div>
        <Heading >Skills I have </Heading>
        <p className="font-medium text-slate-800 text-lg mt-4 text-left">I have gained some knowledge in modern web technologies that helps me to develop web applications. This skill includes technologies like,
            <li>HTML5</li>
            <li>CSS3</li>
            <li>CSS Frameworks and libraries like Bootstrap, TailwindCSS etc.</li>
            <li>Javascript (with ES6 features)</li>
            <li>Git and Github</li>
            <li>JSON</li>
            <li>ReactJs</li>
            <li>NodeJs etc.</li>
        </p>
        {/* projects */}
        <Heading > Recent Projects</Heading>
        <div className="text-left my-8">
            <h1 className="text-4xl font-semibold text-secondary">MireHouse <a className="font-semibold text-slate-800 text-2xl" href="https://the-summit-gear.web.app/" replace="true">Live preview</a></h1>
            <p className="font-medium text-slate-800 text-lg mt-4">This is a project for a warehouse. This can be use to manage inventory of a warehouse. I used react with node in this project. I also used react router, firebase authenctication, tailwindCSS, MongoDb and some react packages to create this project. This helped me to start getting used to with popular MERN stack. 
            </p>
        </div>
        <div className="text-left my-8">
            <h1 className="text-4xl font-semibold text-secondary">Gymgainer <a className="font-semibold text-slate-800 text-2xl" href="https://gymgainer232.web.app/" replace="true">Live preview</a></h1>
            <p className="font-medium text-slate-800 text-lg mt-4">This is a project for a gym trainer who workes indipendently. This is only a frontend project so you can not expect this goes with node(LOL!). It has all the featers of a modern fronend application like authenctication, routing,  responsiveness etc. I learned a lot of things while working with this project and this is one of my favurite  projects. I hope you will love it too. 
            </p>
        </div>
        </main>
)  
export default Portfolio;
