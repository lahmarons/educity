import React from 'react';
import './About.css';
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About" className='about-img' />
        <img src={play_icon} alt="Play Icon" className="play-icon" />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders</h2>
        <p>
          A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.
        </p>
        <p>
          The Collins Dictionary gives us an alternative definition of a university as “an institution where students study for degrees and where academic research is done.”
        </p>
        <p>
          Offrir une éducation de qualité aux étudiants, promouvoir leur développement global par la participation à des activités sportives, parascolaires et autres activités socialement pertinentes et incluant la capacité de prise de décision et les valeurs démocratiques. Offrir des installations et des opportunités de pointe pour la croissance académique et pour mener des recherches dans les domaines modernes, en particulier de nature appliquée et technologique. Promouvoir la préservation et l’intégration de la diversité culturelle de la région, de l’État et du pays.
        </p>
      </div>
    </div>
  );
};

export default About;
