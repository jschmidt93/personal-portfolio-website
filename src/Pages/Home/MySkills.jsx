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
  "Adobe Illustrator": "#FF9A00",  // Added color for Adobe Illustrator
  Figma: "#0ACF83",
  Firebase: "#FFCA28"    
};

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Knowledge & Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
