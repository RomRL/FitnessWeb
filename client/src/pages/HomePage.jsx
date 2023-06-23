import React from 'react'
import MainLayout from '../layout/MainLayout.jsx';
import HomePageJumbotron from '../componenets//HomePageComp//HomePageJumbotron.jsx';
import HomeMainSection from '../componenets//HomePageComp//HomeMainSection.jsx';
import Footer from '..//componenets//General//Footer.jsx';



function HomePage() {

    return (
        //Load animation and then load the page
        <MainLayout>
            <div className="semi_transperent vsc-initialized ">
                <main role="main" >
                    <HomePageJumbotron />

                </main>

            </div>
            <HomeMainSection />
            <Footer />
        </MainLayout>
    )
};
export default HomePage;
