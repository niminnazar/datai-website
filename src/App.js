import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { FaWhatsapp } from "react-icons/fa";



function App() {
  // Use string identifiers for text sections
  const [currentImage, setCurrentImage] = useState("homeText");

  const menuItems = [
    { name: "Home", image: "homeText" },
    { name: "About us", image: "aboutText" },
    { name: "Retail Automation Hub", image: "rahText" },
    { name: "Visual Intelligence Platform", image: "vipText" },
    { name: "Get in Touch", image: "contactText" },
  ];

  return (
    <div className="app-container">
      <Navbar menuItems={menuItems} onSelect={setCurrentImage} />

      <div className="image-container">
        {currentImage === "homeText" ? (
          <div className="home-container">
            <video autoPlay loop muted playsInline className="home-video">
              <source src={require("./assets/home-bg.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="home-overlay">
              <h1 className="home-text">Bridging data & decisions.</h1>
            </div>
          </div>
        ) : currentImage === "aboutText" ? (
          <div className="about-text">
            <p>
              At{" "}
              <span className="datai-black">DAT</span>
              <span className="datai-blue">A i</span>, we help bridge the gap
              between data and decisions. We curate some of the most advanced
              AI-powered and data analytics solutions designed to empower
              businesses across industries.
            </p>
            <p>
              Our goal is to help organizations harness the full potential of
              intelligent technology so they can serve their customers better,
              operate smarter, and create meaningful human impact.
            </p>
            <p>
              By bringing together the best-in-class AI products, we enable
              businesses to unlock insights, automate processes, and make
              data-driven decisions with confidence.
            </p>
          </div>
        ) : currentImage === "rahText" ? (
          <div className="rah-text">
            <div className="center-container">
  <h1>
    Your inventory, suppliers, and sales —  
    <span className="inonechat"> in one chat</span><br/>
    <h1 className="small-black-text">
    {" "}
              <a href="https://wa.me/971525246974?text=Hello,%20I%20would%20like%20a%20demo%20of%20your%20Retail%20Automation%20Hub.">
                SCHEDULE A DEMO TODAY
              </a>
  </h1>
  </h1>
</div>

<div className="rah-boxes-dashboard">
  {/* Box 1 */}
  <div className="rah-box">
    <p>
      Our <strong>AI-powered Chatbot</strong> delivers instant answers to your questions:
    </p>
    <div className="example-container">
      <div className="example-box">
        <strong>Inventory Management:</strong> <br/>Show me the current inventory levels, flag low-stock items, and recommend reorders.
      </div>
      <div className="example-box">
        <strong>Sales Analytics:</strong> <br/>What is my most and least profitable item this week?
      </div>

      <div className="example-box">
        <strong>Insights & Trends:</strong> <br/>Show me last quarter’s top 3 sales trends.<br/>
        Show me suppliers with delayed deliveries.
      </div>
    </div>
  </div>

  {/* Box 2 */}
  <div className="rah-box">
    <p>Boost your <strong>Sales</strong> through smarter inventory management:</p>
    <div className="example-container">
      <div className="example-box"><strong>Accurate depletion:</strong> <br/>Track remaining inventory</div>
      <div className="example-box"><strong>Reorder timing:</strong> <br/>Alerts for restocking</div>
      <div className="example-box"><strong>Waste reduction:</strong> <br/>Prevent over-ordering perishables</div>
    </div>
  </div>

  {/* Box 3 */}
  <div className="rah-box">
    <p>Maximize your <strong>Profits</strong> through efficient cost control:</p>
    <div className="example-container">
      <div className="example-box"><strong>Food cost calculations:</strong> <br/>Track ingredient-level costs</div>
      <div className="example-box"><strong>Profitability analysis:</strong> <br/>Identify high-margin items</div>
      <div className="example-box"><strong>Portion control:</strong> <br/>Ensure consistent serving sizes</div>
    </div>
  </div>

  {/* Box 4 */}
  <div className="rah-box">
    <p>See your <strong>Operations</strong> clearly and act decisively:</p>
    <div className="example-container">
      <div className="example-box"><strong>Peak periods:</strong> <br/>Which items sell most during rush hours</div>
      <div className="example-box"><strong>Menu optimization:</strong> <br/>Promote or discontinue dishes</div>
      <div className="example-box"><strong>Staff planning:</strong> <br/>Prep requirements based on trends</div>
    </div>
  </div>
{/* Box 5 */}
<div className="rah-box full-width-box">
  <p><strong>Run Your Business Remotely and Efficiently</strong> with the help of our autonomous agents:</p>
  <div className="example-container">
    <div className="example-box">
      <strong>Automated Supplier Communication:</strong><br/>
        Auto-create orders for your approval when stock is low<br/>
        Send RFQs to suppliers with your consent<br/>
        Compare quotes quickly across price, quality, delivery terms<br/>
    </div>

    <div className="example-box">
      <strong>Intelligent Procurement Optimization:</strong> <br/>
      Track market rates in real-time<br/>
      Bulk buying recommendations to hit price break<br/>
      Seasonal forecasting to alert spike in prices<br/>
      Suggest switch to another specific supplier for savings<br/>
      Alert expiry of vendor contract & suggest best renewal terms<br/>
    </div>

    <div className="example-box">
      <strong>Operational Automation:</strong> <br/>
    
      Delivery scheduling optimization <br/>
      Quality tracking and supplier scoring <br/>
      Payment optimization such as early pay discounts <br/>
      
    </div>
    </div>
  </div>
  
</div>
</div>

           


        ) 

        : currentImage === "vipText" ? (
          <div className="vip-text">
            <div className="center-container">
  <h1>
    Optimize your space with 
    <span className="realtimeinsights"> Real-Time Insights</span><br/>
    <h1 className="small-black-text">
    {" "}
              <a href="https://wa.me/971525246974?text=Hello,%20I%20would%20like%20a%20demo%20of%20your%20Visual%20Intelligence%20Platform.">
                SCHEDULE A DEMO TODAY
              </a>
  </h1>
  </h1>
</div>
<div class="rah-boxes-zigzag">
  {/* Box 1 */}
  <div className="rah-box-zigzag">
    <p>
      Turn your CCTV into a smart tool that drives actionable insights for better space utilization.
    </p>
    
    
  </div>

  {/* Box 2 */}
  <div className="rah-box-zigzag">
    <p>
      No expensive hardware needed - just connect your CCTV and let AI reveal your store's unwrapped potential.
    </p>
    
    
  </div>

  {/* Box 3 */}
  <div className="rah-box-zigzag">
    <p>
      Maximize sales per square foot with actionable insights from AI vision technology.
    </p>
    
    
  </div>

  {/* Box 4 */}
<div className="rah-box-zigzag">
    <p>
      Cut waiting times, boost customer satifaction, and increase foot traffic-all automated with AI.
    </p>
    
    
  </div>
{/* Box 5 */}
<div className="rah-box-zigzag">
    <p>
      Get instant alerts on what's happening in your store, so you can take action fast.
    </p>
    
    
  </div>
  {/* Box 6 */}
<div className="rah-box-zigzag">
    <p>
      Maximize store efficiency by tracking footfall, dwell-time, and high-traffic zones.
    </p>
    
    
  </div>
    {/* Box 7 */}
<div className="rah-box-zigzag">
    <p>
      Understand customer wait times at service counters, enhancing the shopping experience.
    </p>
    
    
  </div>
   {/* Box 8 */}
<div className="rah-box-zigzag">
    <p>
      Stay ahead of the curve with real-time analytics for smarter retail management.
    </p>
    
    
  </div>
</div>
</div>


           


        ) 
        
        
        : currentImage === "contactText" ? (
          <div className="contact-text">
            <h1>
              Start your journey with{" "}
              <span className="datai-black">DAT</span>
              <span className="datai-blue">A i</span> today.
              <br />
              Reach out to discuss solutions, demos, or partnerships: 
              <br />
              {" "}
              <a href="mailto:dm@datai.ae" className="contact-link">
                dm@datai.ae
              </a> 
              <br />
              +971 52 524 6974
              
            </h1>
          </div>
        ) : (
          <img
            src={currentImage}
            alt="Selected"
            className="main-image"
            loading="lazy"
          />
        )}
      </div>
    
  

 {/* Floating WhatsApp Official Logo on Top-Right, lower to avoid menu */}
<a
  href="https://wa.me/971525246974?text=Hello,%20I%20am%20interested%20to%20know%20more%20about%20your%20offerings."
  target="_blank"
  rel="noopener noreferrer"
style={{
  position: 'fixed',
  bottom: '20px',   // stick to bottom
  right: '20px',    // stick to right
  width: '55px',
  height: '55px',
  zIndex: 1000,
  cursor: 'pointer',
}}

>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    style={{ width: '100%', height: '100%' }}
  />
</a>

</div>
);
}


export default App;
