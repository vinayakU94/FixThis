import React from 'react';


const Home = () => {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="content">
          <h1>Welcome to <span className="highlight">FixThis</span></h1>
          <p className="description">
            At FixThis, we specialize in providing efficient and reliable repair services for a wide range of appliances and electronics. Our goal is to make your life easier by offering convenient solutions that save you time and hassle.
          </p>
        </div>
        <div className="content">
          <h1>Why <span className="highlight">FixThis</span></h1>
       </div>
        <div className="featureshome">
          <div className="feature">
            <h2>Ultimate Single-Day Repair Solutions</h2>
            <p>We understand the importance of having your devices and appliances functioning smoothly. That's why we strive to provide ultimate single-day repair solutions, ensuring minimal downtime for you.</p>
          </div>
          <div className="feature">
            <h2>Door-to-Door Pickup and Drop</h2>
            <p>Forget the inconvenience of transporting your broken devices to a repair center. We offer door-to-door pickup and drop services, making the repair process hassle-free.</p>
          </div>
          <div className="feature">
            <h2>Reasonable Prices</h2>
            <p>Our repair services are priced competitively to offer you value for your money. We believe in transparent pricing without compromising on quality.</p>
          </div>
          <div className="feature">
            <h2>Save Time</h2>
            <p>With FixThis, you can save valuable time that would otherwise be spent searching for repair options or dealing with malfunctioning appliances. We handle the repairs efficiently, so you can focus on what matters most to you.</p>
          </div>
        </div>
        <div className="cta">
        <br></br>
        <a href="https://wa.me/919325150810" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <button>Lets Fix This !</button>
      </a>
      <p> Ps: This will redirect you to our whatsapp </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
