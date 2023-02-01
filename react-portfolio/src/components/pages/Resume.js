import React from 'react';

function Resume() {
  return (
    <div>
      <h3>Resume</h3>
      
      <div className="row justify-content-center">
        <div className="col-6">
        
        <div className="font-weight-bold mt-3 mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <figure className="list-inline-item">
            <li><i className="fa-brands fa-js"></i></li>
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-python" alt="python" width="40"></i></li>
            <figcaption>Python</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-react" alt="react"></i></li>
            <figcaption>React.js</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-node-js" alt="node js"></i></li>
            <figcaption>Node.js</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-npm" alt="npm"></i></li>
            <figcaption>npm</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="simple-icons:express" alt="express" width="40"></iconify-icon></li>
            <figcaption>Express.js</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="logos:mongodb" alt="mysql" width="50"></iconify-icon></li>
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="logos:mysql" alt="mysql" width="50"></iconify-icon></li>
            <figcaption>MySQL</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="vscode-icons:file-type-sequelize" alt="sequelize" width="40"></iconify-icon></li>
            <figcaption>Sequelize</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="logos:webpack" alt="webpack" width="40"></iconify-icon></li>
            <figcaption>Webpack</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="file-icons:workbox" alt="workbox" width="40"></iconify-icon></li>
            <figcaption>Workbox</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="logos:handlebars" alt="handlebars" width="50"></iconify-icon></li>
            <figcaption>Handlebars.js</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-html5" alt="html5"></i></li>
            <figcaption>HTML5</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-css3-alt" alt="css3"></i></li>
            <figcaption>CSS3</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><i className="fab fa-bootstrap" alt="bootstrap"></i></li>
            <figcaption>Bootstrap</figcaption>
          </figure>
          <figure className="list-inline-item">
            <li><iconify-icon icon="logos:heroku-icon" alt="heroku" width="35"></iconify-icon></li>
            <figcaption>Heroku</figcaption>
          </figure>
        </ul>
        </div>
        
      
        <div className="col-4">
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Cross Functional Teams
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Agile Development & Scrum
          </li>
        </ul>
        </div>
        </div>

        <object data="./assets/Resume_SeanShin.pdf" type="application/pdf" width="100%" height="800px"> 
            <p>It appears you don't have a PDF plugin for this browser.
            No biggie... you can <a href="resume.pdf">click here to
            download the PDF file.</a>
          </p>  
          </object>
    </div>
  );
}

export default Resume;