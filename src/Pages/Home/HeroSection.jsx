import React from 'react';

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Replace the file path with the actual URL when deployed
    const filePath = '/JacobSchmidt_Resume.pdf';
    window.open(filePath, '_blank');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Jacob Schmidt</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack Developer</span>{" "}
          </h1>
          <p className="hero--section-description">
            Aspiring software engineer and lifelong learner, eager to create innovative solutions and drive digital transformation.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownloadResume}>
          Download Resume
        </button>
      </div>
      <div className="hero--section--img">
        <img src="/img/Portrait_Transparent_Bottom.png" alt="Hero Section" />
      </div>
    </section>
  );
}
