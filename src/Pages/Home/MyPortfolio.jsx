import React from "react";
import data from "../../data/index.json";

// Define a mapping of technologies to their respective colors
const technologyColors = {
  HTML: "#E44D26",
  CSS: "#264DE4",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  Nodejs: "#68A063",
  Java: "#007396",
  "C++": "#00599C",
  WordPress: "#21759B",
  PHP: "#777BB4",
  SQL: "#F29111",
  "Adobe Illustrator": "#FF9A00",
  Figma: "#0ACF83",
  Firebase: "#FFCA28",
  API: "#007BFF",
  Stripe: "#6772E5",
  MongoDB: "#13AA52",
  Express: "#CCCCCC" // Light gray color for better visibility on black background
};

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">Projects</h2>
        </div>
        <div>
          <a href="https://github.com/jschmidt93" target="_blank">
          <button className="btn btn-primary">
            Visit My GitHub
          </button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <a href={item.link} className="full--card--link">
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              {/* Display the technology list */}
              <div className="technology-list">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="technology-item"
                    style={{
                      backgroundColor: technologyColors[tech],
                      padding: "5px 10px",
                      borderRadius: "10px",
                      margin: "0 5px 5px 0",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={item.link}
                className="text-sm portfolio--link"
                >
                 View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
}
