import React from 'react';

import { Header, Footer, Features, WhatGPT3 } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => {
    return (
        <div className = 'App'>
            <div className = 'gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <WhatGPT3 />
            <Features />
            <CTA />
            <Footer />
        </div>
    )
}

export default App
