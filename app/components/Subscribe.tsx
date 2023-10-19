import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe_section">
      <div className="container subscribe_container">
        <h4>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h4>
        <div className="input_btn">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            id="email"
          />
          <button className="btn subcribe_btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
