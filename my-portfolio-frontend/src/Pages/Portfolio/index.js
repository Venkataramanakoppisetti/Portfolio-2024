import React, { useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import Loader from '../../Components/Loader';
import { FaFilePdf } from "react-icons/fa6";
import './index.css';

const projectsData = {
  frontend: [
    {
      id: 1,
      name: "Nxt Trendz (ECommerce Clone - Amazon, Flipkart)",
      description: "Created a modern e-commerce experience with a design inspired by Amazon and Flipkart. Implemented pages for Login, Products, and Product details with React Router, React components, and form inputs. Secured user data with JWT tokens, REST API calls, and local storage.",
      technologies: "React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication",
      projectLink: 'https://venkynxtrendz25.ccbp.tech/',
      projectImage: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png',
    },
    {
      id: 2,
      name: "Wikipedia Search Application",
      description: "Unlock the vast wealth of knowledge on Wikipedia with a custom search application that delivers relevant and accurate results. Quick and easy access to information has never been easier. Beautifully presented search results with HTML list elements, styled with CSS, Bootstrap, and a responsive design that adapts to any device.",
      technologies: "HTML, CSS, JS, REST API Calls, Bootstrap",
      projectLink: 'https://ramanawiki.ccbp.tech/',
      projectImage: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png',
    },
    {
      id: 3,
      name: "Movies Streaming Platform (Netflix, Amazon Prime)",
      description: "A movie streaming platform clone inspired by Netflix and Amazon Prime. Features include a visually appealing UI, responsive design, and integration with REST APIs for fetching movie data.",
      technologies: "HTML, CSS, JS, REST API Calls, Bootstrap",
      projectLink: 'https://nxtwave-mini-project.vercel.app/',
      projectImage: 'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    },
  ],
  backend: [
    { 
      id: 1, 
      name: "API Development", 
      description: "Developed a backend application to manage personal finances, enabling users to securely track transactions,categories, and account details with robust authentication and CRUD functionality.JWT-based authentication and authorization for secure API access.CRUD operations for users, categories, and transactions.Pagination and filtering for efficient data retrieval.Input validation for data integrity.Registration and login with JWT issuance.Add and retrieve financial categories.Create, update, delete, and fetch transactions with pagination.",
      technologies: "Node.js, Express.js, SQLite3, JWT, Postman, dotenv",
      projectImage: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2VuZHxlbnwwfHwwfHx8MA%3D%3D',
      projectLink: 'https://flow-ai-2x2c.onrender.com/'
    },
    { 
      id: 2, 
      name: "Database Integration and Interaction", 
      description: "A RESTful API built with Node.js and Express for managing mentor data on the CareerCarve platform. It allows adding, viewing, updating, and deleting mentor information. The API integrates with an SQLite database to store mentor profiles, including details such as availability, areas of expertise, and premium status." ,
      technologies: "Node.js, Express, SQLite, REST API",
      projectImage: 'https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tlbmR8ZW58MHx8MHx8fDA%3D',
      projectLink: 'https://career-carve-backend-2024.onrender.com/'
    },
  ],
};

const Portfolio = () => {
  const [selectedArea, setSelectedArea] = useState("frontend");
  const [loading, setLoading] = useState(false);

  const handleAreaChange = (area) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedArea(area);
      setLoading(false);
    }, 400);
  };

  return (
    <>
      <section className="portfolio-container" id="portfolio">
        <PageHeader
          headerText="My Portfolio"
          icon={<FaFilePdf size={40} />}
        />

        <div className="projects-filter-container">
          <ul className="project-area">
            {Object.keys(projectsData).map((area) => (
              <li
                key={area}
                className={`area ${selectedArea === area ? 'active' : ''}`}
                onClick={() => handleAreaChange(area)}
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="projects-display">
            {projectsData[selectedArea].map((project) => (
              <a
                href={project.projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='project-link'
              >
                <div
                  className='project-card'
                  key={project.id}
                  style={{
                    backgroundImage: `url(${project.projectImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className='project-content'>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
