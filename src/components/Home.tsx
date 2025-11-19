import './Home.css';
// import { Link} from 'react-router-dom';
function Home() {
    return (
        <div className="home">
            {/* Hero Section with Single Background */}
            <section id="home" className="hero-section">
                {/* Single Background Image */}
                <div className="hero-background" style={{ backgroundImage: 'url(/masumba.jpg)' }}>
                    {/* Hero Content */}
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Fresh-CocoPeat</h1>
                            <h2>MASUMBA - Nyenzo Bora ya Kikaboni ya Kilimo</h2>
                            <p className="hero-description">
                                Nyenzo ya asili, rafiki wa mazingira kutoka maganda ya nazi. 
                                Inafaa kwa hydroponic, kupanda mbegu, na kilimo endelevu.
                            </p>
                          
                        </div>
                    </div>
                </div>
            </section>
             <section className="mission-section">
                <div className="container">
                    <h2>Dhamira Yetu</h2>
                    <div className="mission-content">
                        <div className="mission-card main-mission">
                            <div className="mission-icon">🎯</div>
                            <h3>Dhamira Kuu</h3>
                            <p>
                                <strong>Kuwasilisha bidhaa zenye ubora wa juu na rafiki kwa mazingira 
                                ambazo zinatosheleza mahitaji ya wateja kwa kuzingatia viwango vya 
                                kimataifa vilivyothibitishwa.</strong>
                            </p>
                        </div>
                        
                        <div className="mission-values">
                            <div className="value-card">
                                <h4>🌟 Ubora</h4>
                                <p>Kutengeneza bidhaa za hali ya juu kila wakati</p>
                            </div>
                            <div className="value-card">
                                <h4>🌿 Mazingira</h4>
                                <p>Kuhifadhi na kulinda mazingira yetu</p>
                            </div>
                            <div className="value-card">
                                <h4>🤝 Uaminifu</h4>
                                <p>Kuwa wa kweli na wa kuaminika kwa wateja</p>
                            </div>
                            <div className="value-card">
                                <h4>🔬 Uvumbuzi</h4>
                                <p>Kutumia teknolojia ya kisasa katika uzalishaji</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
        </div>
    );
}

export default Home;