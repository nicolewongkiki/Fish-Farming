import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import HowCanItWorks from './components/HowCanItWorks';
import Benefits from './components/Benefits';
import Descriptions from './components/Descriptions';
import Location from './components/Location';
import SocialMedia from './components/SocialMedia';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import BackgroundVideo from './components/BackgroundVideo';
import Head from 'next/head'
import BlankLayout from 'src/@core/layouts/BlankLayout';
import Map from './components/Map';

const HomeOne = () => {
    return (
        <>
            {/* ????? */}
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700|Rubik:300,400,500" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="/css/pe-icon-7-stroke.css" />
                <link rel="stylesheet" type="text/css" href="/css/materialdesignicons.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/waves.css" />
                <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/magnific-popup.css" />
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                <link rel="stylesheet" href="/css/colors/red.css" id="color-opt" />
            </Head>
            <Navbar />
            <section className="section home-half" id="home" >
                <BackgroundVideo />
                <div className="bg-overlay">
                </div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-white text-center">
                                    <h4>The project is going to develop an Intelligent Fish Farming Ecology Management Platform. This platform collects the data of fish ponds through the sensors set in the fish ponds. After collecting data, the platform will analyze those data, show the current data and status of the fish ponds and determine the best living environment parameters for fish.</h4>
                                    <p className="padding-t-15 home-desc"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-pattern-effect">
                    <img src="/images/bg-pattern.png" alt="" />
                </div>
            </section>

            {/* HowCanItWorks Component*/}
            <HowCanItWorks />

            {/* Benefits Component*/}
            <Benefits />

            {/* Descriptions Component*/}
            <Descriptions />

            {/* Location Component*/}
            <Location />
            {/*<Map lat="22.2762958" lon="114.1785374" />*/}

            {/* SocialMedia Component*/}
            <SocialMedia />

            {/* FooterLinks Component*/}
            <FooterLinks />

            {/* Switcher Component*/}
            <Switcher />

            {/* ????? */}
            <script src="/js/jquery.min.js"></script>
            <script src="/js/bootstrap.bundle.min.js"></script>
            <script src="/js/jquery.easing.1.3.min.js"></script>
            <script src="/js/scrollspy.min.js"></script>
            <script src="/js/jquery.sticky.js"></script>
            <script src="/js/waves.min.js"></script>
            <script src="/js/jquery.magnific-popup.min.js"></script>
            <script src="/js/switcher.js"></script>
            <script src="/js/app.js"></script>
        </>
    );
}

HomeOne.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default HomeOne;