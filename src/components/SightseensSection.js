import React, { Component } from 'react';
import './SightseensSection.css'
import SightSeenImage from '../images/DJI_0185-Pano.png'

export default class SightseensSection extends Component {
    constructor(props) {
        super(props);

        this.sectionRef = props.sectionRef;
        this.sightseens = props.sightseens;
    }

    render() {
        return (
            <section ref={this.sectionRef} className="Sightseens">
                <h2 className="text-section-title font-amatic">Достопримечательности</h2>

                <div className="Sightseens__Content">
                    {this.sightseens.map(ss => 
                        (<div className="Sightseens-List-Element">
                            <img className="Sightseens-List-Element__Image" src={SightSeenImage} alt={ss.image_alt} />
                            <article className="Sightseens-List-Element-Content font-roboto">
                                <h6 className="Sightseens-List-Element-Content__Title">{ss.title}</h6>
                                <p className="Sightseens-List-Element-Content__Text">{ss.description}</p>
                            </article>
                        </div>)
                    )}
                </div>
            </section>
        );
    }
}