import React, { Component } from 'react';
import './ToursSection.css'
import TourImage from '../images/DJI_0210.png'

export default class ToursSection extends Component {
    state = {
        toursHidden: true
    }

    constructor(props) {
        super(props);

        this.sectionRef = props.sectionRef;
        this.tours = props.tours;
    }

    showTours = () => {
        this.setState({
            toursHidden: false
        });
    }

    render() {
        return (
            <section ref={this.sectionRef} className="Tours">
                <h2 className="text-section-title font-amatic">Туры</h2>

                <div className="Tours__Content">
                    {this.tours.map((tour, index) => 
                        (<div key={index} className={index < 2 || !this.state.toursHidden? "Tours-List-Element" : "Tours-List-Element Tours-List-Element_Hidden"}>
                            <img className="Tours-List-Element__bg" src={TourImage} alt={tour.image_alt} />
                            <article className="Tours-List-Element-Content font-roboto">
                                <p className="Tours-List-Element-Content__Title">{tour.title}</p>
                                <p className="Tours-List-Element-Content__Description">{tour.description}</p>
                                <div className="Tours-List-Element-Content-Subrow">
                                    <span>
                                        От <strong>{tour.price}</strong> р.
                                    </span>
                                    <button className="Tours-List-Element-Content-Subrow__btn bg-transparent outline color-gold">Купить</button>
                                </div>
                            </article>
                        </div>)
                    )}

                    <span className="Tours-List-Btn-More font-roboto" onClick={this.showTours} style={this.state.toursHidden? {} : {display: 'none'}}>Больше туров</span>
                </div>
            </section>
        );
    }
}