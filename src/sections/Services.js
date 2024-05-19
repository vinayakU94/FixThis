import React from 'react';
import Clock from '../images/4.png'; // Import your logo image
import lamp from '../images/5.png'; // Import your logo image
import Headphones from '../images/6.png'; // Import your logo image
import toaster from '../images/7.png'; // Import your logo image
import iron from '../images/8.png'; // Import your logo image
import drill from '../images/9.png'; // Import your logo image

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="content">
          <h1>Repair services<span className="highlight"> we offer</span></h1>
          <p className="description">
          From clocks to power tools, we repair a wide range of household items and electronic devices. Whether it's a kitchen appliance like a blender or a household essential like a table fan, count on us to keep your belongings running smoothly.          </p>
        </div>
     
        <div className="features">
          <div className="feature">
            <img src={Clock} alt="Timepieces" />
            <h3>Timepieces</h3>
            <p>Clock</p>
          </div>
          <div className="feature">
            <img src={lamp} alt="Lighting Fixtures" />
            <h3>Lighting Fixtures</h3>
            <p>Table lamp</p>
          </div>
          <div className="feature">
            <img src={Headphones} alt="Audio Devices" />
            <h3>Audio Devices</h3>
            <p>Headphones and Earplugs</p>
          </div>
          <div className="feature">
            <img src={toaster} alt="Kitchen Appliances" />
            <h3>Kitchen Appliances</h3>
            <p>Grinder, Mixer, Electric Kettle, Toaster, Juicer, Blender, Air Fryer</p>
          </div>
          <div className="feature">
            <img src={iron} alt="Household Appliances" />
            <h3>Household Appliances</h3>
            <p>Electric Iron, Table fan, Heating rod, Vacuum Cleaner, Heater, Torch, Hair Dryer</p>
          </div>
          <div className="feature">
            <img src={drill} alt="Power Tools" />
            <h3>Power Tools</h3>
            <p>Electric Drill</p>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Services;
