import illustrationHero from '../assets/illustration-hero.svg';
import illustrationTab1 from '../assets/illustration-features-tab-1.svg';
import illustrationTab2 from '../assets/illustration-features-tab-2.svg';
import illustrationTab3 from '../assets/illustration-features-tab-3.svg';
import { Card } from '../components/Card';
import ChormeIcon from '../assets/logo-chrome.svg';
import FirefoxIcon from '../assets/logo-firefox.svg';
import OperaIcon from '../assets/logo-opera.svg';

import './Home.css';

export function Home () {

    const scrollSlide1 = (() => document.getElementById('simple-bookmarking').scrollIntoView({block: "nearest"}));
    const scrollSlide2 = (() => document.getElementById('speedy-searching').scrollIntoView({block: "nearest"}));
    const scrollSlide3 = (() => document.getElementById('easy-sharing').scrollIntoView({block: "nearest"}));

    let alignToTop = true;

    return(

        <>
        
            {/* Hero Section */}
            <section id="introduction" className="introduction">

                <div className="introduction-container container split">

                    <div className="introduction-text">

                        <h2 className="introduction-title title">A Simple Bookmark Manager</h2>
                        <p className="introduction-description description">A clean and simple inferface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    
                        <div className="introduction-btn-container">
                            <a href="#" className="btn introduction-chrome-btn">Get it on Chrome</a>
                            <a href="#" className="btn introduction-firefox-btn">Get it on Firefox</a>
                        </div>


                    </div>

                    <div className="introduction-img-container">

                        <img src={illustrationHero} alt="Illustration" className="introduction-img" />

                    </div>

                </div>

            </section>


            {/* Features Section */}
            <section id="features" className="features">

                <div className="features-container container">

                    <div className="features-header narrow-container text-center">

                        <h2 className="features-title title">Features</h2>
                        <p className="features-description description">Our aim is to make it quick and easy for you to acess your favorite websites. Your bookmarks sync between your devices so you can acess them on the go.</p>

                    </div>
                    
                    <div className="features-triggers">

                        <div className="features-triggers-container text-center">

                            <div onClick={scrollSlide1}>Simple Bookmarking</div>
                            <div onClick={scrollSlide2}>Speedy Searching</div>
                            <div onClick={scrollSlide3}>Easy Sharing</div>

                        </div>

                    </div>

                    <div className="features-carousel">

                        <div id="simple-bookmarking" className="features-item">

                            <div className="features-item-container split">

                                <div className="features-item-img-container">
                                    <img src={illustrationTab1} alt="Illustration Tab 1" className="features-img" />
                                </div>

                                <div className="features-item-text">

                                    <h2 className="features-item-title title">Bookmark in one click</h2>
                                    <p className="features-item-description description">Organize your bookmarks however you like. Our simples drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>

                                    <div className="features-btn-container">
                                        <a href="#" className="features-btn btn">More info</a>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div id="speedy-searching" className="features-item">

                            <div className="features-item-container split">

                                <div className="features-item-img-container">
                                    <img src={illustrationTab2} alt="Illustration Tab 1" className="features-img" />
                                </div>

                                <div className="features-item-text">

                                    <h2 className="features-item-title title">Intelligent search</h2>
                                    <p className="features-item-description description">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmakers.</p>

                                    <div className="features-btn-container">
                                        <a href="#" className="features-btn btn">More info</a>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div id="easy-sharing" className="features-item">

                            <div className="features-item-container split">

                                <div className="features-item-img-container">
                                    <img src={illustrationTab3} alt="Illustration Tab 1" className="features-img" />
                                </div>

                                <div className="features-item-text">

                                    <h2 className="features-item-title title">Share your bookmakers</h2>
                                    <p className="features-item-description description">Easily share your bookmakers and collections with others. Create a shareable link that you can send at the click of a button.</p>

                                    <div className="features-btn-container">
                                        <a href="#" className="features-btn btn">More info</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Extension */}
            <section id="extension" className="extension">

                <div className="extension-container container">

                    <div className="extension-header narrow-container text-center">

                        <h2 className="extension-title title">Download the extension</h2>
                        <p className="extension-description description">We've got more browser in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>

                    </div>

                    <div className="extension-item-container">

                        <Card
                            src={ChormeIcon}
                            alt="Chrome"
                            title="Add to Chrome"
                            description="Minimum version 62"
                         />
                         <Card
                            src={FirefoxIcon}
                            alt="Firefox"
                            title="Add to Firefox"
                            description="Minimum version 55"
                         />
                         <Card
                            src={OperaIcon}
                            alt="Opera"
                            title="Add to Opera"
                            description="Minimum version 46"
                         />

                    </div>

                </div>

            </section>


            {/* Asked question section */}


        
        </>

    )

}