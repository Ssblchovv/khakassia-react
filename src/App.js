import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

export default class App extends Component {
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
            </div>
        );
    }
};
