import React from 'react';
import '../styles/Approach.css';

const Approach = () => {
  return (
    <div className="approach-container">
      {/* Farm-to-Table Section */}
      <section className="approach-section">
        <h2 className="approach-title">Farm-to-Table Philosophy</h2>
        <p className="approach-text">
          We source our ingredients from <span className="highlight">local farms</span>, ensuring the freshest and most seasonal produce for our dishes. This not only supports our community but also guarantees <span className="highlight">quality</span> and <span className="highlight">freshness</span> in every bite.
        </p>
        <div className="image-row">
          <div>
            <img src="https://www.meadowsfarms.com/great-big-greenhouse-gardening-blog/wp-content/uploads/sites/2/2019/02/vegetable-gardening-doug-blog.png.webp" alt="Farm 1" className="farm-image" />
          </div>
          <div>
            <img src="https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2018/04/26152504/vegetables-1363033_1280-e1587664626170.jpg" alt="Farm 2" className="farm-image" />
          </div>
          <div>
            <img src="https://bdc2020.o0bc.com/wp-content/uploads/2020/04/Farmer-Daves.jpg" alt="Farm 3" className="farm-image" />
          </div>
        </div>
      </section>

      {/* Preparation Process Section */}
      <section className="approach-section">
        <h2 className="approach-title">Our Preparation Process</h2>
        <p className="approach-text">
          From <span className="highlight">farm</span> to <span className="highlight">kitchen</span> to your table, every step is taken with care and precision. We use expert culinary techniques to craft meals that are as delicious as they are wholesome.
        </p>
        <div className="image-row">
          <div>
            <img src="https://d2culxnxbccemt.cloudfront.net/craft/content/uploads/2014/01/20205144/2488644619_481cbcce65_z.jpg" alt="Fresh Ingredients" className="prep-image" />
            <p className="image-caption">Fresh Ingredients</p>
          </div>
          <div>
            <img src="https://biyopos.com/wp-content/uploads/2024/09/renowned-chinese-chef-open-kitchen.png" alt="Chef Preparing" className="prep-image" />
            <p className="image-caption">Expert Preparation</p>
          </div>
          <div>
            <img src="https://oysterlink.com/wp-content/uploads/2024/06/waiters-serving-food.jpg" alt="Table Serving" className="prep-image" />
            <p className="image-caption">Served with Care</p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="approach-section">
        <h2 className="approach-title">Sustainability Practices</h2>
        <p className="approach-text">
          Our restaurant is committed to reducing its environmental impact by embracing <span className="highlight">sustainable practices</span>. These include composting food waste, using <span className="highlight">eco-friendly packaging</span>, and sourcing from farms that prioritize <span className="highlight">sustainability</span>.
        </p>
        <div className="image-row">
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/5d3178f5c443690001caace9/ee195a1b-e7fd-4eb8-893e-f35828492e96/understanding-the-economics-of-sustainable-packaging.jpg" alt="Eco Packaging" className="sustainability-image" />
            <p className="image-caption">Eco-Friendly Packaging</p>
          </div>
          <div>
            <img src="https://www.performancefoodservice.com/-/media/PFS/Article/performancefoodservice-GetInspired-Composting-LGmobile.jpg" alt="Recycling" className="sustainability-image" />
            <p className="image-caption">Recycling and Composting</p>
          </div>
          <div>
            <img src="https://taraenergy.com/wp-content/uploads/2021/02/renewable-energy-technology-defined-solar-panels.jpg" alt="Green Energy" className="sustainability-image" />
            <p className="image-caption">Green Energy Use</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
