import React, { Component } from 'react';
import './HeroSection.css'
import ArrowImage from '../images/go_down.svg'

export default class HeroSection extends Component {
    constructor(props) {
        super(props);

        this.sectionRef = props.sectionRef;
    }

    render() {
        return (
            <section ref={this.sectionRef} className="Hero Hero_Theme_Main">
                <span className="decoy"></span>

                <div className="Hero__Content">
                    <p className="Hero__Title font-amatic">
                        Хакасия
                    </p>
                    <p className="Hero__Subtitle font-roboto-light">
                        Туристическое Агенство Республики Хакасия
                    </p>
                </div>

                <img className="Hero__Arrow" src={ArrowImage} alt="Перейти вниз" />
            </section>
        );
    }
}