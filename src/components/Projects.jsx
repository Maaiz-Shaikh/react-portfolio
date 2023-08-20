// Projects.js
import React from 'react';
import Project from './Project'; // Import the Project component
import './Project.css'; // Import your custom CSS for Projects styling

const Projects = () => {
    const projectData = [
        {
            icon: <i className="fas fa-code"></i>,
            name: 'Voice-Based Video Content Search Web App',
            description: "This project allows users to effortlessly search for specific words within YouTube videos, utilizing voice recognition or text input. The app provides timestamps of word occurrences, enabling users to navigate directly to relevant segments of the video.",
            techStack: 'Flutter, Dart, Firebase',
            githubLink: 'https://github.com/Maaiz-Shaikh/voice_search',
        },

        {
            icon: <i className="fas fa-code"></i>,
            name: 'PLAuth : Passwordless Authentication',
            description: "PLAuth is a mobile application which will provide passwordless authentication service through two ways: 1) Magic Link and 2) OTP",
            techStack: 'Flutter, Dart, Firebase',
            githubLink: 'https://github.com/Maaiz-Shaikh/PLauth',
        },
        // Add more project data here
        {
            icon: <i className="fas fa-code"></i>,
            name: 'Deadlock & Concurrency',
            description: "Deadlock & Concurrency is an android application which provide theory of deadlock and concurrency along with the theory ,simulation and visualization of few algorithms",
            techStack: 'Java, XML, Android Studio',
            githubLink: 'https://github.com/Maaiz-Shaikh/Deadlock-and-Concurrency',
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <Project
                        key={index}
                        icon={project.icon}
                        name={project.name}
                        description={project.description}
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
