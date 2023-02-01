import React from 'react';

function Portfolio() {
  return (
    <div>
      <h3>Portfolio</h3>
      <div className="card-deck mt-4">
        <div className="row">
          <div className="card col-3 m-2">
          <img src="./assets/marketplace.JPG" className="card-img-top" alt="marketplace app"/>
          <div className="card-body">
            <h5 className="card-title">Marketplace App</h5>
            <p className="card-text">An e-commerce site built with a content management system to allow users to post items for sale and bid on items posted by other users.</p>
            <a href="https://safe-harbor-99168.herokuapp.com/" className="btn btn-success">View</a>
          </div>
          </div>

          <div className="card  col-3 m-2">
            <img src="./assets/blog.JPG" className="card-img-top" alt="blog app"/>
            <div className="card-body">
              <h5 className="card-title">Blog App</h5>
              <p className="card-text">A blog built with a content management system to allow users to publish blog posts and comment on other users' blog posts.</p>
              <a href="https://guarded-depths-62551.herokuapp.com/" className="btn btn-success">View</a>
            </div>
          </div>

          <div className="card col-3 m-2">
            <img src="./assets/weather.JPG" className="card-img-top" alt="weather app"/>
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">An interactive front-end application that allows users to search the weather for anycity.</p>
              <a href="https://seangshin.github.io/weather-dashboard/" className="btn btn-success">View</a>
            </div>
          </div>

          <div className="card col-3 m-2">
            <img src="./assets/dogfinder.JPG" className="card-img-top" alt="dogfinder app"/>
            <div className="card-body">
              <h5 className="card-title">Dog Finder App</h5>
              <p className="card-text">An interactive front-end application that allows users to find a dog that is compatible for them.</p>
              <a href="https://seangshin.github.io/dog-finder/" className="btn btn-success">View</a>
            </div>
          </div>

          <div className="card col-3 m-2">
            <img src="./assets/dogfinder.JPG" className="card-img-top" alt="dogfinder app"/>
            <div className="card-body">
              <h5 className="card-title">Dog Finder App</h5>
              <p className="card-text">An interactive front-end application that allows users to find a dog that is compatible for them.</p>
              <a href="https://seangshin.github.io/dog-finder/" className="btn btn-success">View</a>
            </div>
          </div>

          <div className="card col-3 m-2">
            <img src="./assets/dogfinder.JPG" className="card-img-top" alt="dogfinder app"/>
            <div className="card-body">
              <h5 className="card-title">Dog Finder App</h5>
              <p className="card-text">An interactive front-end application that allows users to find a dog that is compatible for them.</p>
              <a href="https://seangshin.github.io/dog-finder/" className="btn btn-success">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;