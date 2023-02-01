import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ name: false, email: false, message: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    if (!name) {
      setError({ ...error, name: true });
      hasError = true;
    }
    if (!email) {
      setError({ ...error, email: true });
      hasError = true;
    }
    if (!message) {
      setError({ ...error, message: true });
      hasError = true;
    }
    if (!hasError) {
      // submit the form
    }
  };

  return (
    <div>
      <h3>Contact Me</h3>
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              id="name" 
              className={`form-control ${error.name ? 'is-invalid' : ''}`} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              {error.name && <div className="invalid-feedback">This field is required</div>}
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="email">Email</label>
              <input 
              type="text" 
              id="email" 
              className={`form-control ${error.email ? 'is-invalid' : ''}`} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <div className="invalid-feedback">This field is required</div>}
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="message">Message</label>
              <input 
              type="textarea" 
              id="message" 
              className={`form-control ${error.message ? 'is-invalid' : ''}`} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
              {error.message && <div className="invalid-feedback">This field is required</div>}
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;