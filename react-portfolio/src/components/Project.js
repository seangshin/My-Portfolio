import React from 'react';

const Project = ({ project }) => {
  //destructuring 
  const {title, description, image, viewLink, githubLink} = project;

  return (
    <div className="card m-2" style={{ width: '25rem', height: '35rem' }}>
      <img src={image} className="card-img-top" alt={title} style={{ height: '300px' }}/>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
  <h5 className="card-title">{title}</h5>
  <p className="card-text">{description}</p>
  <div className="row justify-content-center">
    <a href={viewLink} className="btn btn-outline-success btn-floating" style={{ width: '10rem' }}>View</a>
  </div>
  <div className="row justify-content-center">  
    <a className="btn btn-outline-dark btn-floating" style={{ width: '10rem' }} href={githubLink} role="button">
      <i className="fab fa-github"></i>
    </a>
  </div>
</div>
    </div>
  )
}

export default Project;