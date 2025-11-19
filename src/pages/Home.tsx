import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import '../components/Home.css';

function HomePage() {
    // Carousel state
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Background images for carousel
    const backgroundImages = [
        '/kifuu.jpg',
        '/masumba.jpg', 
        '/cocopeats4.jpg',
        '/cocopeats3.jpg'
    ];

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    // Manual slide navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="home">
            {/* Hero Section with Carousel Background */}
            <section className="hero-section">
                {/* Carousel Background Images */}
                <div className="carousel-container">
                    {backgroundImages.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                    
                    {/* Dark overlay for text readability */}
                    <div className="carousel-overlay"></div>
                </div>

                {/* Hero Content Over Carousel */}
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Fresh-CocoPeat</h1>
                        <h2>MASUMBA - Nyenzo Bora ya Kikaboni ya Kilimo</h2>
                        <p className="hero-description">
                            Nyenzo ya asili, rafiki wa mazingira kutoka maganda ya nazi. 
                            Inafaa kwa hydroponic, kupanda mbegu, na kilimo endelevu.
                        </p>
                        <div className="hero-buttons">
                            <button className="cta-button primary">📞 Wasiliana Nasi
                                    <Link to="/Wasiliana"></Link>
                            </button>
                            <button className="cta-button secondary">🌿 Jifunze Zaidi</button>
                        </div>
                    </div>
                </div>

                {/* Carousel Navigation */}
                <div className="carousel-controls">
                    <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Picha iliyotangulia">
                        &#8249;
                    </button>
                    <button className="carousel-arrow next" onClick={nextSlide} aria-label="Picha ifuatayo">
                        &#8250;
                    </button>

                    <div className="carousel-dots">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Nenda kwenye picha ya ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <h2>Coco Peat (Masumba) ni Nini?</h2>
                    
                    <div className="content-with-images">
                        <div className="text-content">
                            <p>
                                Masumba ni chombo cha kikaboni kinachotokana na maganda ya nazi, ni dutu ya 
                                corky, light-weight, spongy, isiyo na nyuzi ambayo huweka nyuzinyuzi za husk 
                                ya nazi pamoja na hutumiwa sana katika mchanganyiko wa kupanda mbegu na mifumo 
                                ya hydroponic.
                            </p>
                            <p>
                                Tangu matumizi yake ya awali katika kilimo cha bustani katika miaka ya 1990, 
                                imepata umaarufu kutokana na faida zake kwa ukuaji wa mimea, na kwa sababu hiyo, 
                                haja ya dutu imeongezeka.
                            </p>
                        </div>
                        
                        <div className="image-grid-3">
                            <img src="/coco-gallery-3.jpg" alt="Masumba ya nazi" />
                            <img src="/IMG-20251003-WA0061.jpg" alt="Uchakataji wa masumba" />
                        </div>
                    </div>

                    <div className="product-highlight">
                        <h3>🌿 Tuliiita kama Fresh-CocoPeat 🌿</h3>
                        <p>Masumba bora kutoka Pwani ya Tanzania</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;