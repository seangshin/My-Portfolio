import React from 'react';

function Resume() {
  return (
    <div>
      <h3>Resume</h3>
      
      <div className="row justify-content-center mt-5">
        <div className="col-6">
        
        <div style={{ fontSize: "20px" }}>Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
        <figure className="list-inline-item text-center">
            <li><iconify-icon icon="skill-icons:javascript" alt="javascript" width="40"></iconify-icon></li>
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="vscode-icons:file-type-python" width="40"></iconify-icon></li>
            <figcaption>Python</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:react" alt="react.js" width="40"></iconify-icon></li>
            <figcaption>React.js</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="vscode-icons:file-type-node" alt="node.js" width="40"></iconify-icon></li>
            <figcaption>Node.js</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="vscode-icons:file-type-npm" alt="npm" width="40"></iconify-icon></li>
            <figcaption>npm</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:express" alt="express" width="40"></iconify-icon></li>
            <figcaption>Express.js</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:mongodb" alt="mysql" width="50"></iconify-icon></li>
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:mysql" alt="mysql" width="50"></iconify-icon></li>
            <figcaption>MySQL</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="vscode-icons:file-type-sequelize" alt="sequelize" width="40"></iconify-icon></li>
            <figcaption>Sequelize</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="vscode-icons:file-type-graphql" alt="graphql" width="40"></iconify-icon></li>
            <figcaption>GraphQL</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:webpack" alt="webpack" width="40"></iconify-icon></li>
            <figcaption>Webpack</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="file-icons:workbox" alt="workbox" width="40"></iconify-icon></li>
            <figcaption>Workbox</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:handlebars" alt="handlebars" width="40"></iconify-icon></li>
            <figcaption>Handlebars.js</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="mdi:language-html5" alt="HTML5" width="40"></iconify-icon></li>
            <figcaption>HTML5</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="ion:logo-css3" alt="CSS3" width="40"></iconify-icon></li>
            <figcaption>CSS3</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:bootstrap" alt="bootstrap" width="40"></iconify-icon></li>
            <figcaption>Bootstrap</figcaption>
          </figure>
          <figure className="list-inline-item text-center">
            <li><iconify-icon icon="logos:heroku-icon" alt="heroku" width="40"></iconify-icon></li>
            <figcaption>Heroku</figcaption>
          </figure>
        </ul>
        </div>
        
      
        <div className="col-4">
        <div className="subheading" style={{ fontSize: "20px" }}>Workflow</div>
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

        <div className="row justify-content-center">
          <div className="col-10">
        <object className="m-4" data="./assets/Resume_SeanShin.pdf" type="application/pdf" width="100%" height="800px"> 
            <p className="m-4"><a href="resume.pdf">Download Resume</a></p>  
          </object>
          </div>
          </div>
    </div>
  );
}

export default Resume;