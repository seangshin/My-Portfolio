import React from 'react';

function About() {
  return (
    <div>
      <h3>About Me</h3>
      <div className="text-center">
        <img src="./assets/profile.JPG" className="rounded-circle mt-5" width="200" height="200" alt="profile" />
      </div>
      
      <div className="lead text-center font-weight-bold subheading mt-5 mb-5">
          Detroit, MI · (248) 890-0266 ·
          <a href="mailto:shin.seang@gmail.com"> shin.seang@gmail.com</a>
      </div>
      
      <p class="lead mb-5">I am a software developer with a B.S. degree in electrical and computer engineering. I’ve been working for 6+ years in 
          the automotive industry developing active safety sensors to assist in vehicle autonomy and 1+ years in full stack web development. I am 
          passionate in learning the many advantages software has to offer.</p>
        <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust product that exceeds customer demands. 
          I am a team-oriented individual with an iterative approach for development strategy to foster collaborative thinking and maximize overall
          value proposition.</p>
    </div>
  );
}

export default About;