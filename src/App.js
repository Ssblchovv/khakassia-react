import React, { Component, createRef } from 'react';
import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.sectionRef = createRef();
    }

    goToSection = (ctx) => {
        let targetSection;

        try {
            targetSection = ctx.target.dataset.target;
        } catch { return; }

        console.log(targetSection);
    }

    render() {
        return (
            <div>
                <Header navigationHandler={this.goToSection} />
                <HeroSection sectionRef={this.heroSectionRef} />
            </div>
        );
    }
};
