import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="contact--container">
        <h2 className="section--heading" style={{ marginBottom: "10px" }}>Contact Me</h2>
        
        <p className="text-lg">
          As an aspiring Full Stack Developer, I'm eager to tackle new challenges and contribute to innovative projects. Let's connect and discuss how I can add value to your team!
          <br/><br/>
          Feel free to reach out via email or LinkedIn.
        </p>
        
        <div className="contact-icons" style={{marginTop: "25px"}}>
          <a href="mailto:jrsmedia.mn@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faEnvelope} 
              style={{ fontSize: "40px", color: "#FFFB00", padding: "10px" }}
              onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseOut={(e) => e.currentTarget.style.color = '#FFFB00'}
            />
          </a>
          <a href="https://www.linkedin.com/in/jakeryanschmidt/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              style={{ fontSize: "40px", color: "#FFFB00", padding: "10px" }}
              onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseOut={(e) => e.currentTarget.style.color = '#FFFB00'}
            />
          </a>
        </div>
        <form></form>
      </div>
    </section>
  );
}
