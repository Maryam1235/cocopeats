import { useState } from 'react';
import './Pages.css';

interface OrderFormData {
    productName: string;
    customerName: string;
    phone: string;
    email: string;
    address: string;
    quantity: number;
    message: string;
}

function BidhaaPage() {
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [orderData, setOrderData] = useState<OrderFormData>({
        productName: '',
        customerName: '',
        phone: '',
        email: '',
        address: '',
        quantity: 1,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openOrderForm = (productName: string) => {
        setSelectedProduct(productName);
        setOrderData(prev => ({ ...prev, productName }));
        setIsOrderFormOpen(true);
    };

    const closeOrderForm = () => {
        setIsOrderFormOpen(false);
        setSelectedProduct('');
        setIsSubmitting(false);
        setOrderData({
            productName: '',
            customerName: '',
            phone: '',
            email: '',
            address: '',
            quantity: 1,
            message: ''
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setOrderData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Here you would typically send the order data to your backend
            console.log('Order submitted:', orderData);
            
            // Simulate a small delay for user feedback
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Create a WhatsApp message
            const whatsappMessage = `Hujambo! Ningependa kuagiza bidhaa zenu:

            📦 Bidhaa: ${orderData.productName}
            👤 Jina: ${orderData.customerName}
            📞 Simu: ${orderData.phone}
            📧 Email: ${orderData.email}
            🏠 Anwani: ${orderData.address}
            🔢 Kiasi: ${orderData.quantity} mifuko
            💬 Ujumbe: ${orderData.message}

            Asante!`;

            const phoneNumber = '255713992020'; // Your WhatsApp number
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            closeOrderForm();
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Kuna hitilafu imetokea. Tafadhali jaribu tena.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="page-hero bidhaa-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Bidhaa za Fresh-CocoPeat</h1>
                    <p>Aina mbalimbali za masumba kwa mahitaji yako ya kilimo</p>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <div className="container">
                    <h2>Bidhaa Zetu za Ubora</h2>
                    
                    <div className="products-grid">
                        <div className="product-card featured">
                            <div className="product-badge">Maarufu</div>
                            <img src="/coco-product-1.jpg" alt="Fresh-CocoPeat Premium" />
                            <div className="product-info">
                                <h3>Fresh-CocoPeat Premium</h3>
                                <p>Masumba wa ubora wa juu, umechakatwa kwa teknolojia ya kisasa. Mzuri kwa kilimo cha hydroponic na bustani za kiwango cha juu.</p>
                                <ul className="product-features">
                                    <li>🌟 EC chini ya 0.5 mS/cm</li>
                                    <li>💧 Uhifadhi bora wa maji</li>
                                    <li>🌱 pH 5.2-6.8</li>
                                    <li>🏆 Ubora wa kimataifa</li>
                                </ul>
                                <div className="product-price">
                                    <span className="price">Tsh 15,000 - 25,000</span>
                                    <button className="order-btn" onClick={() => openOrderForm('Fresh-CocoPeat Premium')}>Agiza Sasa</button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <img src="/coco-product-2.jpg" alt="Fresh-CocoPeat Kilimo" />
                            <div className="product-info">
                                <h3>Fresh-CocoPeat Kilimo</h3>
                                <p>Maalum kwa kilimo cha mboga, maharage, na mazao ya chakula. Ni rafiki wa mazingira na endelevu.</p>
                                <ul className="product-features">
                                    <li>🥬 Bora kwa mboga</li>
                                    <li>🌾 Mazao ya chakula</li>
                                    <li>♻️ Asili 100%</li>
                                    <li>🌿 Salama kwa chakula</li>
                                </ul>
                                <div className="product-price">
                                    <span className="price">Tsh 12,000 - 20,000</span>
                                    <button className="order-btn" onClick={() => openOrderForm('Fresh-CocoPeat Kilimo')}>Agiza Sasa</button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <img src="/coco-product-3.jpg" alt="Fresh-CocoPeat Bustani" />
                            <div className="product-info">
                                <h3>Fresh-CocoPeat Bustani</h3>
                                <p>Mzuri kwa bustani za nyumbani, maua, na mimea ya mapambo. Rahisi kutumia na salama.</p>
                                <ul className="product-features">
                                    <li>🏡 Bustani za nyumbani</li>
                                    <li>🌸 Maua ya mapambo</li>
                                    <li>👶 Salama kwa familia</li>
                                    <li>📦 Vifurushi vidogo</li>
                                </ul>
                                <div className="product-price">
                                    <span className="price">Tsh 8,000 - 15,000</span>
                                    <button className="order-btn" onClick={() => openOrderForm('Fresh-CocoPeat Bustani')}>Agiza Sasa</button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <img src="/kifuu.jpg" alt="Fresh-CocoPeat Bulk" />
                            <div className="product-info">
                                <h3>Fresh-CocoPeat Jumla</h3>
                                <p>Kwa wakulima wakubwa na makampuni ya kilimo. Tunauza kwa wingi na bei nzuri.</p>
                                <ul className="product-features">
                                    <li>📦 Kiwango kikubwa</li>
                                    <li>💰 Bei nzuri</li>
                                    <li>🚚 Uwasilishaji haraka</li>
                                    <li>📞 Msaada wa kitaalamu</li>
                                </ul>
                                <div className="product-price">
                                    <span className="price">Bei ya mazungumzo</span>
                                    <button className="order-btn" onClick={() => openOrderForm('Fresh-CocoPeat Jumla')}>Wasiliana</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Categories */}
                    <div className="product-categories">
                        <h2>Aina za Bidhaa</h2>
                        <div className="categories-grid">
                            <div className="category-card">
                                <h3>Kilimo cha Hydroponic</h3>
                                <ul>
                                    <li>EC chini ya 0.5 mS/cm</li>
                                    <li>pH iliyosawazishwa</li>
                                    <li>Huru na vijidudu</li>
                                    <li>Uongezaji wa virutubisho</li>
                                </ul>
                            </div>

                            <div className="category-card">
                                <h3>Kilimo cha Jadi</h3>
                                <ul>
                                    <li>Mchanganyiko na udongo</li>
                                    <li>Kuboresha muundo wa udongo</li>
                                    <li>Uhifadhi wa maji</li>
                                    <li>Kupunguza umwagiliaji</li>
                                </ul>
                            </div>

                            <div className="category-card">
                                <h3>Bustani za Nyumbani</h3>
                                <ul>
                                    <li>Vipande vidogo</li>
                                    <li>Salama kwa familia</li>
                                    <li>Maua ya mapambo</li>
                                    <li>Mimea ya ndani</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Quality Assurance */}
                    {/* <div className="quality-section">
                        <h2>Uhakika wa Ubora</h2>
                        <div className="quality-grid">
                            <div className="quality-item">
                                <div className="quality-icon">🔬</div>
                                <h3>Upimaji wa Kila Kizuizi</h3>
                                <p>Tunapima kila kizuizi cha bidhaa yetu ili kuhakikisha ubora wa juu na kuridhisha mahitaji ya wateja.</p>
                            </div>

                            <div className="quality-item">
                                <div className="quality-icon">🌿</div>
                                <h3>Asili 100%</h3>
                                <p>Bidhaa zetu zinazalishwa kutoka maganda ya nazi halisi bila kuongeza kemikali hatari.</p>
                            </div>

                            <div className="quality-item">
                                <div className="quality-icon">🏆</div>
                                <h3>Viwango vya Kimataifa</h3>
                                <p>Tunazingatia viwango vya kimataifa katika uzalishaji na uhifadhi wa bidhaa zetu.</p>
                            </div>

                            <div className="quality-item">
                                <div className="quality-icon">📦</div>
                                <h3>Ufungaji Bora</h3>
                                <p>Bidhaa zetu zinafungwa kwa njia bora ili kuhifadhi ubora na kuongeza muda wa uhifadhi.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            
          

            {/* Order Form Modal */}
            {isOrderFormOpen && (
                <div className="modal-overlay" onClick={closeOrderForm}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>📦 Fomu ya Kuagiza - {selectedProduct}</h2>
                            <button className="close-btn" onClick={closeOrderForm}>✕</button>
                        </div>
                        
                        <form onSubmit={handleSubmitOrder} className="order-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="customerName">Jina Lako Kamili *</label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        value={orderData.customerName}
                                        onChange={handleInputChange}
                                        placeholder="Ingiza jina lako kamili"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Namba ya Simu *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={orderData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+255 7XX XXX XXX"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Barua Pepe</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={orderData.email}
                                        onChange={handleInputChange}
                                        placeholder="mfano@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="quantity">Kiasi (Mifuko) *</label>
                                    <select
                                        id="quantity"
                                        name="quantity"
                                        value={orderData.quantity}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value={1}>1 Mfuko</option>
                                        <option value={2}>2 Mifuko</option>
                                        <option value={5}>5 Mifuko</option>
                                        <option value={10}>10 Mifuko</option>
                                        <option value={20}>20 Mifuko</option>
                                        <option value={50}>50 Mifuko</option>
                                        <option value={100}>100 Mifuko</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Anwani ya Uwasilishaji *</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={orderData.address}
                                    onChange={handleInputChange}
                                    placeholder="Ingiza anwani kamili ya uwasilishaji"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Ujumbe wa Ziada</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={orderData.message}
                                    onChange={handleInputChange}
                                    placeholder="Andika maelezo yoyote ya ziada kuhusu agizo lako..."
                                    rows={4}
                                />
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={closeOrderForm} className="cancel-btn">
                                    Ghairi
                                </button>
                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? '⏳ Inatuma...' : '📱 Tuma kwa WhatsApp'}
                                </button>
                            </div>
                        </form>

                        <div className="order-info">
                            <div className="product-summary">
                                <h4>📋 Muhtasari wa Agizo</h4>
                                <p><strong>Bidhaa:</strong> {selectedProduct}</p>
                                <p><strong>Kiasi:</strong> {orderData.quantity} mifuko</p>
                                {selectedProduct.includes('Premium') && <p><strong>Bei:</strong> Tsh 15,000 - 25,000 kwa mfuko</p>}
                                {selectedProduct.includes('Kilimo') && <p><strong>Bei:</strong> Tsh 12,000 - 20,000 kwa mfuko</p>}
                                {selectedProduct.includes('Bustani') && <p><strong>Bei:</strong> Tsh 8,000 - 15,000 kwa mfuko</p>}
                                {selectedProduct.includes('Jumla') && <p><strong>Bei:</strong> Bei ya mazungumzo</p>}
                            </div>
                            
                            <div className="contact-info">
                                <h4>📞 Maelezo ya Mawasiliano</h4>
                                <p>📱 WhatsApp: +255 713 992 020</p>
                                <p>📧 Email: sales@freshcocopeat.co.tz</p>
                                <p>⏰ Muda: Jumatatu - Ijumaa (8AM - 6PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BidhaaPage;