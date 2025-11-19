import './Pages.css';

function KuhusuPage() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="page-hero kuhusu-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Kuhusu Fresh-CocoPeat</h1>
                    <p>Tunatoa masumba bora ya nazi kwa kilimo endelevu Tanzania</p>
                </div>
            </section>

            {/* Sisi ni Nani */}
            <section className="who-we-are-section">
                <div className="container">
                    <h2>Sisi ni Nani?</h2>
                    <div className="who-content">
                        <div className="who-text">
                            <p>
                                <strong>Fresh Coco Peat!</strong> Sisi ni watengenezaji na wasambazaji wa bidhaa za kilimo 
                                zinazotumika katika hatua ya kupanda ama kupandiza mimea ikiwemo Masumba ya nazi 
                                yaliboreshwa (Coco Peat) kutoka nchini Tanzania.
                            </p>
                            <p>
                                Tumeleta suluhisho rafiki kwa wakulima hasahasa wale waliomo katika mnyororo wa matunda 
                                na bustani, bidhaa hii ni rafiki kwa mazingira. Sisi ni watengenezaji wa bidhaa 
                                inayoaminika sokoni na huduma zetu za uwasilishaji wa bidhaa kwa wateja ndani ya wakati.
                            </p>
                            <p>
                                <strong>Uwasilishaji wa bidhaa bora, bei nzuri na udumishaji wa mahusiano endelevu 
                                ni miongoni mwa sifa tulizo nazo.</strong>
                            </p>
                        </div>
                        <div className="who-image">
                            <img src="/masumba.jpg" alt="Fresh CocoPeat Tanzania" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Kwa nini uzalishaji wa Cocopeat */}
            <section className="why-production-section">
                <div className="container">
                    <h2>Kwa nini Uzalishaji wa Cocopeat?</h2>
                    <div className="production-content">
                        <div className="production-image">
                            <img src="/coco-process-3.jpg" alt="Uzalishaji wa Cocopeat" />
                        </div>
                        <div className="production-text">
                            <p>
                                Tanzania ni kinara wa uzalishaji wa Nazi ndani ya Afrika kwa tani 530,000. 
                                Hata hivyo kwa mujibu wa utafiti wa Munyegi Z. E na wenzake iliyopewa jina 
                                la <em>"Tathmini ya Mambo yanayoathiri Uzalishaji wa Nazi Tanzania, 2015"</em>, 
                                ilibainisha kwamba licha ya changamoto zilizopo katika uzalishaji wa Nazi, 
                                bali pia kunanakosekana ujuzi wa uchakataji wa bidhaa zinazotokana na Nazi.
                            </p>
                            <div className="production-stats">
                                <div className="stat-item">
                                    <h3>530,000</h3>
                                    <p>Tani za Nazi kila mwaka</p>
                                </div>
                                <div className="stat-item">
                                    <h3>#1</h3>
                                    <p>Nchi ya kwanza Afrika</p>
                                </div>
                                <div className="stat-item">
                                    <h3>100%</h3>
                                    <p>Bidhaa za asili</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kimkakati */}
            <section className="strategy-section">
                <div className="container">
                    <h2>Mkakati Wetu</h2>
                    <div className="strategy-grid">
                        <div className="strategy-card">
                            <img src="/kifuu.jpg" alt="Mkakati wa bidhaa" />
                            <h3>🎯 Mkakati wa Bidhaa</h3>
                            <p>
                                Kutengeneza bidhaa bora za masumba zinazokidhi viwango vya kimataifa 
                                na kuridhisha mahitaji ya wakulima wa Tanzania na nje ya nchi.
                            </p>
                        </div>
                        <div className="strategy-card">
                            <img src="/cocopeats4.jpg" alt="Mkakati wa soko" />
                            <h3>📈 Mkakati wa Soko</h3>
                            <p>
                                Kuongeza uelewa wa faida za masumba miongoni mwa wakulima na 
                                kuimarisha mahusiano endelevu na wateja wetu.
                            </p>
                        </div>
                        <div className="strategy-card">
                            <img src="/cocopeats2.jpg" alt="Mkakati wa ukuaji" />
                            <h3>🚀 Mkakati wa Ukuaji</h3>
                            <p>
                                Kupanua uwezo wa uzalishaji na kufikia masoko mapya ya kimataifa 
                                huku tukidumisha ubora wa bidhaa zetu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kiutaalamu na Mazingira */}
            {/* <section className="expertise-environment-section">
                <div className="container">
                    <h2>Kiutaalamu na Mazingira</h2>
                    <div className="expertise-content">
                        <div className="expertise-text">
                            <h3>🔬 Kiutaalamu cha Kisayansi</h3>
                            <p>
                                Mchakato wetu wa utengenezaji una udhibiti mkubwa juu ya ubora wa bidhaa. 
                                Hili husaidia uwasilishaji wa bidhaa iliyochakatwa katika viwango bora na 
                                kuridhisha wateja wetu.
                            </p>
                            <ul>
                                <li>Upunguzaji wa kiwango cha chumvi kutoka 2-3 mS/cm hadi chini ya 0.5 mS/cm</li>
                                <li>Mchakato wa kukausha na kuboresha kwa mbinu za asili</li>
                                <li>Matibabu kwa njia ya mvuke kuondoa vitu visivyohitajika</li>
                                <li>Upimaji wa ubora kila hatua ya uzalishaji</li>
                            </ul>
                        </div>
                        <div className="expertise-image">
                            <img src="/cocopeats1.jpg" alt="Utaalamu wa kisayansi" />
                        </div>
                    </div>

                    <div className="environment-content">
                        <div className="environment-image">
                            <img src="/masumba.jpg" alt="Hifadhi ya mazingira" />
                        </div>
                        <div className="environment-text">
                            <h3>🌿 Hifadhi ya Mazingira</h3>
                            <p>
                                Bidhaa yetu ni rafiki kwa mazingira na ni mbadala mzuri wa Peatmoss, matope, 
                                udongo na nyenzo zingine za jadi za ukuzaji wa mimea.
                            </p>
                            <ul>
                                <li>Ni ya asili 100% kutoka maganda ya nazi</li>
                                <li>Inayoweza kuoza na kurudi ardini</li>
                                <li>Haina madhara kwa mazingira</li>
                                <li>Husaidia kupunguza upotevu wa udongo</li>
                                <li>Mchakato wa uzalishaji hauathiri mazingira</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Fedha na Uchumi */}
            {/* <section className="economics-section">
                <div className="container">
                    <h2>Fedha na Uchumi</h2>
                    <div className="economics-grid">
                        <div className="economics-card">
                            <div className="economics-icon">💰</div>
                            <h3>Faida kwa Wakulima</h3>
                            <p>
                                Kupunguza gharama za umwagiliaji na kuboresha mavuno, 
                                kuongeza faida ya wakulima kwa asilimia 40-60%.
                            </p>
                        </div>
                        <div className="economics-card">
                            <div className="economics-icon">📊</div>
                            <h3>Ukuaji wa Uchumi</h3>
                            <p>
                                Kuchangia katika ukuaji wa uchumi wa Tanzania kwa kuongeza 
                                thamani ya bidhaa za kilimo na kujenga sekta mpya.
                            </p>
                        </div>
                        <div className="economics-card">
                            <div className="economics-icon">🌍</div>
                            <h3>Uhamishaji</h3>
                            <p>
                                Kuongeza mapato ya fedha za kigeni kwa nchi kupitia 
                                uhamishaji wa bidhaa za masumba nchi za jirani.
                            </p>
                        </div>
                        <div className="economics-card">
                            <div className="economics-icon">👥</div>
                            <h3>Ajira</h3>
                            <p>
                                Kuunda ajira za moja kwa moja na zisizo za moja kwa moja 
                                kwa maelfu ya Watanzania katika mnyororo wa thamani.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Je sisi ni pekee */}
            <section className="unique-features-section">
                <div className="container">
                    <h2>Je, Sisi ni Pekee?</h2>
                    <div className="unique-intro">
                        <p>
                            Ndio! Fresh-CocoPeat ina sifa za kipekee ambazo hazikupatikani mahali pengine. 
                            Hapa kuna sababu za kujivunia bidhaa yetu:
                        </p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🌱</div>
                            <h3>Ni ya Asili 100%</h3>
                            <p>Bidhaa yetu inazalishwa kutoka maganda ya nazi halisi bila kuongeza kemikali za haramu.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🏆</div>
                            <h3>Bidhaa Bora kwa Ukuaji wa Mimea</h3>
                            <p>Imebuniwa maalum kuboresha ukuaji wa mimea na kuongeza mavuno.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Huboresha Hali ya Udongo</h3>
                            <p>Huboresha muundo wa udongo kimaumbile na kibayolojia kwa muda mrefu.</p>
                        </div>

                        {/* <div className="feature-card">
                            <div className="feature-icon">💧</div>
                            <h3>Huhifadhi Unyevu</h3>
                            <p>Huhifadhi maji kwa kiwango kikubwa na kupunguza mahitaji ya umwagiliaji.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌬️</div>
                            <h3>Huboresha Uingizaji Hewa</h3>
                            <p>Inaboresha mzunguko wa hewa kwenye mizizi ya mimea kwa ukuaji bora.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">♻️</div>
                            <h3>Hupunguza Mzunguko wa Umwagiliaji</h3>
                            <p>Husaidia wakulima kuokoa maji na kupunguza gharama za umwagiliaji.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌿</div>
                            <h3>Huchochea Ukuaji wa Mizizi</h3>
                            <p>Huchochea ukuaji wa mizizi yenye nguvu na afya kwa mimea iliyoimara.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📈</div>
                            <h3>Huboresha Mavuno</h3>
                            <p>Huongeza kiwango cha mazao na ubora wa matunda na mbogamboga.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Ina Vimeng'enya Asilia</h3>
                            <p>Ina vimeng'enya asilia na virutubisho vya mimea vinavyohitajika.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🧬</div>
                            <h3>Huchochea Uzalishaji wa Homoni</h3>
                            <p>Huchochea uzalishaji wa homoni za Phyto za muhimu kwa mimea.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💪</div>
                            <h3>Huimarisha Ukuaji wa Mimea</h3>
                            <p>Husaidia mimea kukua kwa haraka na kuwa na nguvu dhidi ya magonjwa.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💦</div>
                            <h3>Ina Sifa ya Hygroscopic</h3>
                            <p>Ina uwezo wa kuvuta na kuhifadhi unyevu kutoka angani.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⏰</div>
                            <h3>Hutumika kwa Miaka 5+</h3>
                            <p>Inaweza kutumika kuzalisha mazao kwa muda wa zaidi ya miaka 5.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌏</div>
                            <h3>Haina Madhara kwa Mazingira</h3>
                            <p>Ni salama kabisa kwa mazingira na inaweza kuozeka kwa asili.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🥬</div>
                            <h3>Hutoa Mbogamboga Bora</h3>
                            <p>Hutoa mbogamboga bora na zenye mavuno mengi na mazao mengi.</p>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            {/* <section className="cta-section">
                <h2>🌿 Kuwa na Amani kwa Kuagiza!</h2>
                <p>Kukaa na kusubiri bidhaa bora pasipo na wasiwasi kabisa!</p>
                <div className="cta-buttons">
                    <a href="/wasiliana" className="cta-btn">📞 Wasiliana Nasi</a>
                    <a href="/bidhaa" className="cta-btn secondary">🛍️ Tazama Bidhaa</a>
                </div>
            </section> */}
        </div>
    );
}

export default KuhusuPage;