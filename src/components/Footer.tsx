import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section company-info">
                        <div className="footer-logo">
                            <img src="/logo.jpg" alt="Nembo ya Fresh-CocoPeat" className="footer-logo-img" />
                            <h3>Fresh-CocoPeat</h3>
                        </div>
                        <p className="company-description">
                            Tunatoa masumba bora ya nazi kwa kilimo endelevu. 
                            Bidhaa zetu ni za asili, rafiki wa mazingira, na za ubora wa kimataifa.
                        </p>
                        <div className="social-links">
                            <a href="https://instagram.com/freshcocopeat" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               aria-label="Instagram" 
                               className="social-link instagram">
                                <img src="/instagram.jpg" alt="Instagram" className="social-icon" />
                            </a>
                            <a href="https://wa.me/255713992020" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               aria-label="WhatsApp" 
                               className="social-link whatsapp">
                                <img src="/Whatsapp.jpg" alt="WhatsApp" className="social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Viungo vya Haraka</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Nyumbani</Link></li>
                            <li><Link to="/kuhusu">Kuhusu sisi</Link></li>
                            <li><Link to="/bidhaa">Bidhaa</Link></li>
                            <li><Link to="/matumizi">Matumizi</Link></li>
                            <li><Link to="/wasiliana">Wasiliana</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h4>Bidhaa Zetu</h4>
                        <ul className="footer-links">
                            <li><Link to="/bidhaa">Fresh-CocoPeat Premium</Link></li>
                            <li><Link to="/bidhaa">Fresh-CocoPeat Kilimo</Link></li>
                            <li><Link to="/bidhaa">Fresh-CocoPeat Bustani</Link></li>
                            <li><Link to="/bidhaa">Fresh-CocoPeat Jumla</Link></li>
                            <li><Link to="/bidhaa">Masumba Maalum</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Mawasiliano</h4>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <strong>Mahali:</strong><br />
                                    Pwani, Tanzania<br />
                                    Karibu na Bahari ya Hindi
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div>
                                    <strong>Simu:</strong><br />
                                    <a href="tel:+255713992020">+255 713 992 020</a><br />
                                    <a href="tel:+255788987654">+255 788 987 654</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <strong>Barua Pepe:</strong><br />
                                    <a href="mailto:info@freshcocopeat.co.tz">info@freshcocopeat.co.tz</a><br />
                                    <a href="mailto:sales@freshcocopeat.co.tz">sales@freshcocopeat.co.tz</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">⏰</span>
                                <div>
                                    <strong>Muda wa Kazi:</strong><br />
                                    Jumatatu - Ijumaa: 8AM - 6PM<br />
                                    Jumamosi: 9AM - 4PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="newsletter-section">
                    <div className="newsletter-content">
                        <h4>🌿 Jiunge na Familia ya Fresh-CocoPeat</h4>
                        <p>Pokea habari za hivi karibuni kuhusu bidhaa mpya, mipango maalum, na mafunzo ya kilimo.</p>
                        {/* <div className="newsletter-form">
                            <input 
                                type="email" 
                                placeholder="Andika barua pepe yako hapa..." 
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">Jiunge Sasa</button>
                        </div> */}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            <p>&copy; {currentYear} Fresh-CocoPeat Tanzania. Haki zote zimehifadhiwa.</p>
                            <p className="made-with">
                                Imetengenezwa kwa 💚 kwa ajili ya kilimo endelevu Tanzania
                            </p>
                        </div>
                        <div className="footer-bottom-links">
                            <Link to="/privacy">Sera ya Faragha</Link>
                            <span>|</span>
                            <Link to="/terms">Masharti ya Matumizi</Link>
                            <span>|</span>
                            <Link to="/cookies">Sera ya Cookies</Link>
                            <span>|</span>
                            <Link to="/sitemap">Ramani ya Tovuti</Link>
                        </div>
                    </div>
                    
                    {/* Scroll to Top Button */}
                    <button 
                        className="scroll-to-top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Rudi juu"
                    >
                        ↑
                    </button>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="footer-pattern"></div>
        </footer>
    );
}

export default Footer;