import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



export default function RideReadyProject() {

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
      <section id="RideReadyProject" className="rrproject--section">
        <div className="project-section-1">
        <div className="rrproject--section--img">
          <img src="./img/RideReadySS.png" alt="Ride Ready Project" className="rrimg"/>
        </div>
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Welcome To Ride Ready</h2>
            <p className="project-section-description">
            A mountain biking trail finder app, that allows for trail maintainers to provide open/closed status as well as more detailed description of the current status of the trail and other information they'd like to get out. Users can use this application to get most up to date trail status and to get directions to each trail.
            </p>
          </div>
        </div>
        </div>
        <div className="project-section-2">
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Trail Weather & Directions</h2>
            <p className="project-section-description">
            Utilizing Open Weather API to provide the current weather at the trail location and Google Maps API to display the location on Google Maps and a simple button that links to the trailheads location for the user to get directions. This page is rendered upon clicking on an individual trail within the trail list.
            </p>
          </div>
        </div>
        <div className="rrproject--section--img">
          <img src="./img/RideReadyWeatherAPI+Directions.png" alt="Ride Ready Project" className="rrimg"/>
        </div>
        </div>
        <div className="project-section-1">
        <div className="rrproject--section--img">
          <img src="./img/RideReadyTrailCRUDForm.png" alt="Ride Ready Project" className="rrimg"/>
        </div>
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Update Form For Trail Maintainers</h2>
            <p className="project-section-description">
            Simple update form allows trail maintainer to update the changeable status for each trail they maintain. Trail maintainers are not allowed to delete or change certain trail elements from here.
            </p>
          </div>
        </div>
        </div>
        <div className="project-section-2">
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Map With Trail Locations & Directions</h2>
            <p className="project-section-description">
            A map view of all the available trails where the user can easily see it's open/closed status and click on the icon to view the trail name and get directions.
            </p>
          </div>
        </div>
        <div className="rrproject--section--img">
          <img src="./img/RideReadyMapSS.png" alt="Ride Ready Project" className="rrimg"/>
        </div>
        </div>
        <div className="project-section-1">
        <div className="rrproject--section--img">
          <img src="./img/RideReadyLogin.png" alt="Ride Ready Project" className="rrimg"/>
        </div>
        <div className="project--section--content--box about--section--box">
          <div className="project--section--content">
            <h2 className="skills-section--heading">Login & Authentication With Firebase</h2>
            <p className="project-section-description">
            Users are able to create an account, login and authenticate with email or with Google via Firebase authentication. The app also utilizes Firebase for its data storage.
            </p>
          </div>
          </div>
          </div>
          <div className="back-button-container">
          <button className="btn btn-primary" onClick={handleBackButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
          Back To Projects
        </button>
        </div>
        
      </section>
      
    );
  }