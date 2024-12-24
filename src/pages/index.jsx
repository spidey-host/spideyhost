import React from "react";

import Hero from "../components/Hero.jsx"
import Clients from "../components/Clients.jsx"
import HostingSection from "../components/HostingSection.jsx"
import HostingPackages from '../components/HostingPackage.jsx';
import HostingComparison from '../components/HostingComparison.jsx';
import FeaturePerformance from '../components/FeaturePerformance.jsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <Clients />
            <HostingSection />
            <HostingPackages />
            <HostingComparison />
            <FeaturePerformance />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
