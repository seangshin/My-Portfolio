import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
 return (
  <footer className="bg-dark text-center text-white fixed-bottom">
    <div className="container p-1">
      <section className="mb-4">
        <a className="btn btn-outline-light btn-floating m-1" href="https://shin.seang@gmail.com" role="button">
          <i className="fab fa-google"></i>
        </a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/seangshin/" role="button">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/seangshin" role="button">
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>
  </footer>
  );
}

export default Footer;