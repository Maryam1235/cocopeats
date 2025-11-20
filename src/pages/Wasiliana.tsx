import { useState } from 'react';
import './Pages.css';

function WasilianaPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Ujumbe wako umetumwa! Tutakujibu hivi karibuni.');
    };

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="page-hero wasiliana-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Wasiliana Nasi</h1>
                    <p>Tupo tayari kukusaidia kwa mahitaji yako yote ya Fresh-CocoPeat</p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-card">
                            <h2>Maelezo ya Mawasiliano</h2>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-details">
                                    <h3>Mahali Petu</h3>
                                    <p>Fresh-CocoPeat Tanzania Ltd.</p>
                                    <p>Sanduku la Posta 12345</p>
                                    <p>Dar es Salaam, Tanzania</p>
                                    <p>Pwani - Bahari ya Hindi</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div className="contact-details">
                                    <h3>Namba za Simu</h3>
                                    <p><strong>Mkuu:</strong> +255 756 123 456</p>
                                    <p><strong>Mauzo:</strong> +255 657 789 012</p>
                                    <p><strong>WhatsApp:</strong> +255 789 345 678</p>
                                </div>
                            </div>

                            {/* <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div className="contact-details">
                                    <h3>Barua Pepe</h3>
                                    <p><strong>Jumla:</strong> info@freshcocopeat.co.tz</p>
                                    <p><strong>Mauzo:</strong> sales@freshcocopeat.co.tz</p>
                                    <p><strong>Msaada:</strong> support@freshcocopeat.co.tz</p>
                                </div>
                            </div> */}

                            {/* <div className="contact-item">
                                <div className="contact-icon">⏰</div>
                                <div className="contact-details">
                                    <h3>Muda wa Kufanya Kazi</h3>
                                    <p><strong>Jumatatu - Ijumaa:</strong> 8:00 AM - 6:00 PM</p>
                                    <p><strong>Jumamosi:</strong> 9:00 AM - 4:00 PM</p>
                                    <p><strong>Jumapili:</strong> Mapumziko</p>
                                </div>
                            </div> */}
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-card">
                            <h2>Tuandikie Ujumbe</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Jina Kamili *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Andika jina lako kamili"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Barua Pepe *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="mfano@email.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Namba ya Simu</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+255 xxx xxx xxx"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Mada ya Ujumbe *</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Chagua mada</option>
                                        <option value="bidhaa">Maswali kuhusu bidhaa</option>
                                        <option value="bei">Maswali ya bei</option>
                                        <option value="agizo">Kuweka agizo</option>
                                        <option value="usafirishaji">Maswali ya usafirishaji</option>
                                        <option value="msaada">Msaada wa kiufundi</option>
                                        <option value="mengineyo">Mengineyo</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Ujumbe Wako *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        placeholder="Andika ujumbe wako hapa..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    📤 Tuma Ujumbe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            {/* <section className="map-section">
                <div className="container">
                    <h2>Mahali Tulipo</h2>
                    <div className="map-container">
                        <div className="map-placeholder">
                            <p>🗺️ Ramani ya Mahali Tulipo</p>
                            <p>Pwani Region, Tanzania</p>
                            <p>(Ramani ya Google Maps itawekwa hapa)</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* FAQ Section */}
            {/* <section className="faq-section">
                <div className="container">
                    <h2>Maswali Yanayoulizwa Mara kwa Mara</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>Je, Fresh-CocoPeat ni salama kwa mazingira?</h3>
                            <p>Ndio, kabisa! Fresh-CocoPeat ni bidhaa ya asili 100% inayotokana na maganda ya nazi. Ni rafiki wa mazingira na inaweza kuoza baada ya matumizi.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Mnasafirisha nje ya Tanzania?</h3>
                            <p>Ndiyo, tunasafirisha nchi za Kenya, Uganda, Rwanda, na Burundi. Kwa maelezo zaidi ya usafirishaji, wasiliana nasi.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Je, Fresh-CocoPeat inaweza kutumika peke yake?</h3>
                            <p>Ndiyo, inaweza kutumika peke yake hasa kwa hydroponic. Lakini mara nyingi ni bora kuchanganya na vitu vingine kama perlite au compost.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Mnauza kwa wingi?</h3>
                            <p>Ndio, tunauza kwa wingi kwa makampuni na wakulima wakubwa. Tunapatana bei maalum kwa maagizo makubwa.</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default WasilianaPage;