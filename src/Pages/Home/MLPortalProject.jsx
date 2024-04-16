import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../../YoutubeEmbed/YoutubeEmbed';



export default function MLPortalProject() {

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/#MyPortfolio');

    setTimeout(() => {
      const element = document.getElementById("MyPortfolio");
      if(element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth' })
      }
    }, 100);
  }

    return (
      <section id="RideReadyProject" className="mlproject--section">
        <div className="project-section-1">
        <div className="mlproject--section--img">
          <img src="./img/ML_Portal_Homepage.png" alt="Machine Learning Portal Project" className="mlimg"/>
        </div>
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">The Machine Learning Education Portal</h2>
            <p className="project-section-description">
            A web application designed to allow admins to post curated machine learning educational assets on, and for users to be able to browse the assets. These assets include: websites, videos, blogs, articles, and more.
            </p>
          </div>
        </div>
        </div>
        <div className="project-section-2">
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Learning PHP, Sorting & MySQL Queries.</h2>
            <p className="project-section-description">
            Utilizing SQL queries to allow filtering of the displayed resources from the MySQL database in PHP.
            </p>
          </div>
        </div>
        <div className="mlproject--section--img">
          <img src="./img/ML_Portal_phpMyAdmin_Resources.png" alt="Machine Learning Portal Project" className="mlimg"/>
        </div>
        </div>
        <div className="project-section-1">
        <div className="mlproject--section--img">
          <img src="./img/ML_Portal_View_Resource_Page.png" alt="Machine Learning Portal Project" className="mlimg"/>
        </div>
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Individual Page For Each Learning Asset</h2>
            <p className="project-section-description">
            Each machine learning resource has it's own individual page that lists some details of the asset along with the asset itself or a preview of the asset and a link to the actual asset.
            </p>
          </div>
        </div>
        </div>
        <div className="project-section-2">
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Table / List View Of All Assets</h2>
            <p className="project-section-description">
            A sortable and searchable table view of all the assets in the MySQL database. This table is also used for admin view for CRUD operations that can be done if the current user "owns" the asset.
            </p>
          </div>
        </div>
        <div className="mlproject--section--img">
          <img src="./img/ML_Portal_Resources_Page.png" alt="Machine Learning Portal Project" className="mlimg"/>
        </div>
        </div>
        <div className="project-section-1">
        <div className="mlproject--section--img">
          <img src="./img/ML_Portal_Login_Signup_Page.png" alt="Machine Learning Portal Project" className="mlimg"/>
        </div>
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Create Account, Login & Permissions</h2>
            <p className="project-section-description">
            The page where users and admins can create an account and login. Permissions are handled only by admins or super admins. Super admins can edit everything, where normal admins can only edit resources they "own".
            </p>
          </div>
          </div>
          </div>
          <YoutubeEmbed embedId="YAflvBkq2d8?si=yPywwe_3xxrdoVXK"/>
          <div className="back-button-container">
          <button className="btn btn-primary" onClick={handleBackButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
          Back To Projects
        </button>
        </div>
        
      </section>
      
    );
  }