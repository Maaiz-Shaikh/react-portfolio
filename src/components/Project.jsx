// Project.js
import React from 'react';
import './Project.css'; // Import your custom CSS for Project styling

const Project = ({ icon, name, description, techStack, githubLink }) => {
    return (
        <div className="project">
            <div className="project-icon">{icon}</div>
            <div className="project-details">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Tech Stack: {techStack}</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
};

export default Project;
