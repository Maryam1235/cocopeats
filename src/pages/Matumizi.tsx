import './Pages.css';

function MatumiziPage() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="page-hero matumizi-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Matumizi ya Fresh-CocoPeat</h1>
                    <p>Jifunze jinsi ya kutumia masumba kwa kilimo bora</p>
                </div>
            </section>

            {/* Usage Guide */}
            <section className="usage-section">
                <div className="container">
                    <h2>Jinsi ya Kutumia Fresh-CocoPeat</h2>
                    
                    <div className="usage-steps">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Oanisha na Maji</h3>
                                <p>Weka Fresh-CocoPeat kwenye chombo kikubwa. Ongeza maji polepole huku ukichanganya hadi kufikia unyevunyevu wa kutosha.</p>
                                {/* <img src="/coco-step1.jpg" alt="Kuoanisha na maji" /> */}
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Sukuma Vizuri</h3>
                                <p>Changanya kwa mikono au chombo hadi masumba yawe laini na ya kiwango kimoja. Hakikisha hamna vipande vikubwa.</p>
                                {/* <img src="/coco-step2.jpg" alt="Kuchanganya" /> */}
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-number">3</div>
                            <div className="content">
                                <h3>Panda au Changanya</h3>
                                <p>Unaweza kutumia moja kwa moja au kuchanganya na udongo wake. Kwa hydroponic, tumia bila kuongeza chochote.</p>
                                {/* <img src="/coco-step3.jpg" alt="Kupanda" /> */}
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Mwagilie na Utunze</h3>
                                <p>Mwagilie kwa kawaida. Fresh-CocoPeat itahifadhi maji kwa muda mrefu na kupunguza mahitaji ya kumwagilia mara kwa mara.</p>
                                {/* <img src="/coco-step4.jpg" alt="Kumwagilia" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Application Methods */}
                    <div className="application-methods">
                        <h2>Njia za Matumizi</h2>
                        
                        <div className="methods-grid">
                            <div className="method-card">
                                <h3>🌱 Kilimo cha maji</h3>
                                <div className="method-content">
                                    <img src="/coco-ulindaji.jpg" alt="Kilimo cha hydroponic" />
                                    <div className="method-info">
                                        <h4>Matumizi:</h4>
                                        <ul>
                                            <li>Tumia moja kwa moja bila kuongeza udongo</li>
                                            <li>Hakikisha pH iko 5.5-6.5</li>
                                            <li>Ongeza virutubisho vya hydroponic</li>
                                            <li>Badilisha kila wiki 2-3</li>
                                        </ul>
                                        <h4>Faida:</h4>
                                        <ul>
                                            <li>Ukuaji wa haraka wa mizizi</li>
                                            <li>Mazao makubwa</li>
                                            <li>Kutumia maji kidogo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <h3>🌿 Kuotesha mbegu</h3>
                                <div className="method-content">
                                    <img src="/coco-process-3.jpg" alt="Kuanza mbegu" />
                                    <div className="method-info">
                                        <h4>Matumizi:</h4>
                                        <ul>
                                            <li>Changanya 70% Fresh-CocoPeat na 30% vermiculite</li>
                                            <li>Jaza kwenye vitray vya mbegu</li>
                                            <li>Panda mbegu kwa kina sahihi</li>
                                            <li>Weka mahali pa joto na mwanga</li>
                                        </ul>
                                        <h4>Faida:</h4>
                                        <ul>
                                            <li>Kimelea haraka</li>
                                            <li>Mizizi yenye afya</li>
                                            <li>Rahisi kuhamisha</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <h3>🪴 Kilimo cha Vyombo</h3>
                                <div className="method-content">
                                    <img src="/coco-process-2.jpg" alt="Kilimo cha vyombo" />
                                    <div className="method-info">
                                        <h4>Matumizi:</h4>
                                        <ul>
                                            <li>Changanya 50% Fresh-CocoPeat na 50% udongo</li>
                                            <li>Ongeza compost kidogo</li>
                                            <li>Jaza vyombo na mchanganyiko</li>
                                            <li>Panda mimea yako</li>
                                        </ul>
                                        <h4>Faida:</h4>
                                        <ul>
                                            <li>Drainage nzuri</li>
                                            <li>Uhifadhi wa maji</li>
                                            <li>Uzito mwepesi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <h3>🌾Kuboresha udongo</h3>
                                <div className="method-content">
                                    <img src="/coco-udongo.jpg" alt="Kuboresha udongo" />
                                    <div className="method-info">
                                        <h4>Matumizi:</h4>
                                        <ul>
                                            <li>Ongeza 20-30% Fresh-CocoPeat kwenye udongo</li>
                                            <li>Lima na kuchanganya vizuri</li>
                                            <li>Acha kwa siku chache kabla ya kupanda</li>
                                            <li>Mwagilie ili kunyevunya</li>
                                        </ul>
                                        <h4>Faida:</h4>
                                        <ul>
                                            <li>Kuboresha muundo wa udongo</li>
                                            <li>Kuongeza uwezo wa kuhifadhi maji</li>
                                            <li>Kuboresha aeration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tips and Tricks */}
                    <div className="tips-section">
                        <h2>Vidokezo vya Matumizi</h2>
                        
                        <div className="tips-grid">
                            <div className="tip-card">
                                <h3>💡 Kidokezo cha Kwanza</h3>
                                <p><strong>Pima pH mara kwa mara:</strong> Fresh-CocoPeat huwa na pH ya asili ya 5.2-6.8. Kama unahitaji kubadilisha, tumia lime au sulfur.</p>
                            </div>

                            <div className="tip-card">
                                <h3>💡 Kidokezo cha Pili</h3>
                                <p><strong>Usiongeze maji mengi:</strong> Masumba yanahifadhi maji vizuri. Angalia udongo kabla ya kumwagilia tena.</p>
                            </div>

                            <div className="tip-card">
                                <h3>💡 Kidokezo cha Tatu</h3>
                                <p><strong>Hifadhi vizuri:</strong> Weka Fresh-CocoPeat mahali pakavu na baridi. Unaweza kutumia kwa miaka mingine ukihifadhi vizuri.</p>
                            </div>

                            <div className="tip-card">
                                <h3>💡 Kidokezo cha Nne</h3>
                                <p><strong>Changanya na vitu vingine:</strong> Unaweza kuongeza perlite, vermiculite, au compost kuongeza ubora.</p>
                            </div>
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    {/* <div className="troubleshooting">
                        <h2>Tatizo na Suluhisho</h2>
                        
                        <div className="trouble-items">
                            <div className="trouble-item">
                                <h3>❌ Mimea Inanyauka</h3>
                                <p><strong>Sababu:</strong> Huenda masumba yamekauka sana au pH si sawa.</p>
                                <p><strong>Suluhisho:</strong> Mwagilia polepole na upime pH. Badilisha kama ni lazima.</p>
                            </div>

                            <div className="trouble-item">
                                <h3>❌ Ukuaji Mdogo</h3>
                                <p><strong>Sababu:</strong> Huenda masumba hayana virutubisho vya kutosha.</p>
                                <p><strong>Suluhisho:</strong> Ongeza mbolea ya organic au liquid fertilizer.</p>
                            </div>

                            <div className="trouble-item">
                                <h3>❌ Maji Yanasimama</h3>
                                <p><strong>Sababu:</strong> Drainage si nzuri au masumba ni mengi sana.</p>
                                <p><strong>Suluhisho:</strong> Ongeza perlite au pumice kuboresha drainage.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default MatumiziPage;