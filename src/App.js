import React, { Component, createRef } from 'react';
import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SightseensSection from './components/SightseensSection'
import ToursSection from './components/ToursSection'

export default class App extends Component {
    sightseensData = [
        {
            image_alt: "Фотография Тропы предков",
            title: "Тропа предков",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio..."
        },
        {
            image_alt: "Фотография Приискового",
            title: "Приисковый",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio..."
        },
        {
            image_alt: "Фотография Сундуков",
            title: "Сундуки",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio..."
        },
    ]

    toursData = [0,1,2,3,4,5].map(_ => {
        return {
            image_alt: "Изображение тура",
            title: "Название",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
            price: 10000
        };
    })

    constructor(props) {
        super(props);

        this.heroSectionRef = createRef();
        this.sightseensSectionRef = createRef();
        this.toursSectionRef = createRef();
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
                <SightseensSection sectionRef={this.sightseensSectionRef} sightseens={this.sightseensData} />
                <ToursSection sectionRef={this.toursSectionRef} tours={this.toursData} />
            </div>
        );
    }
};
