import React from 'react';
import logo from './assets/images/logo.png';

const ingredients = ['Almonds', 'Cashews', 'Pistachios', 'Walnuts'];

function App() {
  return (
    <>
      <div className="topbar">
        <div className="container d-flex flex-wrap justify-content-center justify-content-lg-between gap-2">
          <span><i className="bi bi-telephone-fill me-2"></i>88865 88842</span>
          <span><i className="bi bi-envelope-fill me-2"></i>Smart5nutrition@gmail.com</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white sticky-top smart-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Smart5 Nutrition" className="brand-logo" />
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#smartNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="smartNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#product">Product</a></li>
              <li className="nav-item"><a className="nav-link" href="#ingredients">Ingredients</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <a className="btn smart-btn ms-lg-3 mt-3 mt-lg-0" href="https://wa.me/918886588842" target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp me-2"></i>Enquire Now
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container position-relative">
          <div className="row align-items-center min-vh-75 py-5">
            <div className="col-lg-6">
              <span className="eyebrow"><i className="bi bi-stars me-2"></i>SMART5 NUTRITION</span>
              <h1>Everyday nutrition, <span>thoughtfully blended.</span></h1>
              <p className="hero-copy">
                Smart5 Nutrition Mixed Dry Nut Powder — a premium dry-fruit blend presented for convenient everyday nourishment.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#product" className="btn smart-btn btn-lg">Explore Product <i className="bi bi-arrow-right ms-2"></i></a>
                <a href="#contact" className="btn btn-outline-success btn-lg rounded-pill px-4">Contact Us</a>
              </div>
              <div className="hero-points mt-4">
                <span><i className="bi bi-check-circle-fill"></i> Mixed Dry Nut Powder</span>
                <span><i className="bi bi-check-circle-fill"></i> A Pure Nutrient Blend</span>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-visual">
                <div className="hero-card"><img src={logo} alt="Smart5 Nutrition logo" /></div>
                <div className="float-chip chip-one"><i className="bi bi-leaf-fill"></i><span>Dry Fruit Blend</span></div>
                <div className="float-chip chip-two"><i className="bi bi-stars"></i><span>Smart5 Nutrition</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-strip">
        <div className="container">
          <div className="row g-0">
            {[
              ['bi-basket2-fill','Carefully Selected','A premium presentation built around quality dry-fruit ingredients.'],
              ['bi-cup-hot-fill','Easy to Enjoy','A convenient mixed dry nut powder for everyday food and drink recipes.'],
              ['bi-heart-pulse-fill','Smart Nutrition','A clean, modern product concept designed for everyday nourishment.']
            ].map(([icon,title,text], i) => (
              <div className="col-md-4" key={title}>
                <div className={`benefit-item ${i===1 ? 'benefit-middle' : ''}`}>
                  <i className={`bi ${icon}`}></i>
                  <div><h5>{title}</h5><p>{text}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="section-space product-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="product-visual"><img src={logo} alt="Smart5 Nutrition Mixed Dry Nut Powder" /></div>
            </div>
            <div className="col-lg-6">
              <span className="section-kicker">OUR PRODUCT</span>
              <h2 className="section-title">Smart5 Nutrition <span>Mixed Dry Nut Powder</span></h2>
              <p className="section-copy">
                A clean and premium product presentation centered on dry fruits, convenient everyday use and a modern nutrition-focused brand identity.
              </p>
              <div className="product-facts">
                <div><strong>01</strong><span>Mixed Dry Nut Powder</span></div>
                <div><strong>02</strong><span>A Pure Nutrient Blend</span></div>
                <div><strong>03</strong><span>Premium Brand Presentation</span></div>
              </div>
              <a href="#contact" className="btn smart-btn mt-4">Product Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      <section id="ingredients" className="section-space ingredients-section">
        <div className="container">
          <div className="text-center">
            <span className="section-kicker">INSIDE THE BLEND</span>
            <h2 className="section-title">Dry fruits at the heart of <span>Smart5</span></h2>
            <p className="section-copy mx-auto">Replace these cards with your own local dry-fruit images whenever you are ready.</p>
          </div>
          <div className="row g-4 mt-3">
            {ingredients.map((name, index) => (
              <div className="col-sm-6 col-lg-3" key={name}>
                <div className="ingredient-card">
                  <div className="ingredient-icon"><i className={`bi ${['bi-flower1','bi-stars','bi-leaf','bi-tree'][index]}`}></i></div>
                  <h4>{name}</h4>
                  <p>Add your own high-quality {name.toLowerCase()} image from your local folder here.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-space about-section">
        <div className="container">
          <div className="about-panel">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-kicker light-kicker">ABOUT SMART5</span>
                <h2 className="about-title">Simple presentation.<br />Strong nutrition identity.</h2>
                <p>Smart5 Nutrition is presented as a modern mixed dry nut powder brand with a clean green, cream and warm nut-inspired visual identity.</p>
              </div>
              <div className="col-lg-6"><div className="about-logo-box"><img src={logo} alt="Smart5 Nutrition" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space contact-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="section-kicker">GET IN TOUCH</span>
              <h2 className="section-title">Contact <span>Smart5 Nutrition</span></h2>
              <p className="section-copy">For product enquiries, availability and business information, contact us directly.</p>
            </div>
            <div className="col-lg-7">
              <div className="contact-card">
                <a href="tel:+918886588842" className="contact-row">
                  <span className="contact-icon"><i className="bi bi-telephone-fill"></i></span>
                  <span><small>Phone</small><strong>88865 88842</strong></span>
                </a>
                <a href="mailto:Smart5nutrition@gmail.com" className="contact-row">
                  <span className="contact-icon"><i className="bi bi-envelope-fill"></i></span>
                  <span><small>Email</small><strong>Smart5nutrition@gmail.com</strong></span>
                </a>
                <div className="contact-row">
                  <span className="contact-icon"><i className="bi bi-geo-alt-fill"></i></span>
                  <span><small>Address</small><strong>H. No. 10-6-349, 2 BHK Ground Floor, Road No. 7, Sai Nagar Colony, Saroornagar, Hyderabad – 500035</strong></span>
                </div>
                <a href="https://wa.me/918886588842" target="_blank" rel="noreferrer" className="btn smart-btn w-100 mt-3">
                  <i className="bi bi-whatsapp me-2"></i>WhatsApp Smart5 Nutrition
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5"><img src={logo} alt="Smart5 Nutrition" className="footer-logo" /><p>Mixed Dry Nut Powder · A Pure Nutrient Blend</p></div>
            <div className="col-lg-4"><div className="footer-links"><a href="#home">Home</a><a href="#product">Product</a><a href="#ingredients">Ingredients</a><a href="#contact">Contact</a></div></div>
            <div className="col-lg-3 text-lg-end"><a className="footer-whatsapp" href="https://wa.me/918886588842"><i className="bi bi-whatsapp"></i></a></div>
          </div>
          <hr />
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Smart5 Nutrition. All rights reserved.</span><span>Hyderabad, Telangana</span></div>
        </div>
      </footer>
    </>
  );
}

export default App;
