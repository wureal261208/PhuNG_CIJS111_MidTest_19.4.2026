import './heroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h2 className="explore">Explore</h2>
        <p className="subtitle">What are you gonna watch today ?</p>

        <div className="banner-box">
          <img 
            src="https://images.alphacoders.com/134/1340580.png" 
            alt="Weather With You"
          />
          
          <div className="banner-overlay">
            <h1 className="title">Weather With You</h1>
            <p className="description">
              Corrupt politicians, frenzied nationalists, and other warmongering 
              forces constantly jeopardize the thin veneer of peace between 
              neighboring countries Ostania and Westalis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;