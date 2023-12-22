import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <h2>Front-End Developer</h2>
      <div className='about__profile-box'>
        <div className='about__profile'>
          <img src={process.env.PUBLIC_URL + '/images/tiger.jpg'} alt='프로필 이미지' />
          <h3>@nuunnunn</h3>
        </div>
        <div className='about__profile'>
          <img src={process.env.PUBLIC_URL + '/images/tiger.jpg'} alt='프로필 이미지' />
          <h3>@saemii-24</h3>
        </div>
      </div>
      {/* <h2 className='title-source'>Source</h2>
      <button>그래픽</button>
      <button>그래픽</button>
      <button>그래픽</button>
      <ul>
        <li>react-icons</li>
        <li>fontawesome</li>
        <li>Pixabay</li>
        <li>Unsplash</li>
      </ul> */}
    </div>
  );
};

export default About;
