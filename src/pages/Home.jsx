import React from 'react';
import Hero from '../components/Hero'; // Adjust path based on your folder structure
import '../styles/Home.css'; // Optional: Add a CSS file for additional Home-specific styling

const Home = () => {
  return (
    <>
      <Hero
        title="Restaurant Name"
        subtitle="Delicious vegetarian cuisine made with love"
        buttonText="View Our Menu"
        backgroundImage="https://img.freepik.com/premium-photo/fresh-vegetables-black-background-with-copy-place-bottom-side-vegetarian-food_483785-10999.jpg" // Replace with the path to your image
      />
      <div className="home-container">
        <section className="summary-section">
          <h2>Our Mission</h2>
          <p>
            At <span className="highlight">Restaurant Name</span>, we are dedicated to offering delicious and nutritious vegetarian and vegan dishes. 
            Our goal is to create a welcoming space for everyone, showcasing the vibrant flavors and endless possibilities of plant-based cuisine. 
            Join us for an unforgettable dining experience that’s both healthy and sustainable.
          </p>
        </section>

        <section className="summary-section">
          <h2>Why Choose Us?</h2>
          <p>
            We're proud of our <span className="highlight">farm-to-table philosophy</span>, sourcing the freshest seasonal ingredients from 
            local farms. Every dish is crafted with extreme care and served with a focus on <span className="highlight">sustainability</span> and 
            <span className="highlight"> excellence</span>. Explore how we're redefining plant-based dining.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
