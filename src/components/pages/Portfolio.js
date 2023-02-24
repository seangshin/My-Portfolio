import React from 'react';
import Project from '../Project'

function Portfolio() {
  const projects = [
    {
      title: "Destination Unknown",
      description: "A travel app built with MERN stack technologies to allow users create and share their travel plans.",
      image: "./assets/travel.JPG",
      viewLink: "https://morning-earth-32879.herokuapp.com/",
      githubLink: "https://github.com/seangshin/Destination-Unknown"
    },
    {
      title: "Marketplace App",
      description: "An e-commerce site built with a content management system to allow users to post items for sale and bid on items posted by other users.",
      image: "./assets/marketplace.JPG",
      viewLink: "https://safe-harbor-99168.herokuapp.com/",
      githubLink: "https://github.com/seangshin/Marketplace"
    },
    {
      title: "Blog App",
      description: "A blog built with a content management system to allow users to publish blog posts and comment on other users' blog posts.",
      image: "./assets/blog.JPG",
      viewLink: "https://guarded-depths-62551.herokuapp.com/",
      githubLink: "https://github.com/seangshin/tech-blog"
    },
    {
      title: "Weather App",
      description: "An interactive front-end application that allows users to search the weather for any city.",
      image: "./assets/weather.JPG",
      viewLink: "https://seangshin.github.io/weather-dashboard/",
      githubLink: "https://github.com/seangshin/weather-dashboard"
    },
    {
      title: "Dog Finder App",
      description: "An interactive front-end application that allows users to find a dog that is compatible for them.",
      image: "./assets/dogfinder.JPG",
      viewLink: "https://seangshin.github.io/dog-finder/",
      githubLink: "https://github.com/seangshin/Dog-Finder"
    },
    {
      title: "Text Editor App",
      description: "A text editor web application that meets the progressive web application (PWA) criteria.",
      image: "./assets/text-editor.JPG",
      viewLink: "https://afternoon-fortress-07309.herokuapp.com/",
      githubLink: "https://github.com/seangshin/PWA-Text-Editor"
    },
    {
      title: "Note Taker App",
      description: "A full stack application that can be used to write and save notes.",
      image: "./assets/note-taker.JPG",
      viewLink: "https://peaceful-anchorage-05392.herokuapp.com/",
      githubLink: "https://github.com/seangshin/note-taker"
    },
    // Add additional projects here
  ];

  return (
    <div>
        <h3>Portfolio</h3>
        <div className="row">
          {projects.map((project) => (
            <div className="col-sm-4 col-12">
            <Project project={project} />
            </div>
          ))}
        </div>
        </div>
  )
}

export default Portfolio;