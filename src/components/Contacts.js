import React, { Component } from 'react';
import './Contacts.css'
import PlaceImage from '../images/place.svg'
import PhoneImage from '../images/phone.svg'
import EmailImage from '../images/email.svg'
import MapImage from '../images/map.png'

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.sectionRef = props.sectionRef;
    }

    render() {
        return (
            <section ref={this.sectionRef} className="Contacts">
                <h2 className="text-section-title font-amatic">Контакты</h2>

                <div className="Contacts__Content">
                    <div className="Contacts-List font-roboto">
                        <div className="Contacts-List-Item" style={{alignItems: "center"}}>
                            <img className="Contacts-List-Item__Icon" src={PlaceImage} alt="Пиктограмма местоположения" />
                            <span className="Contacts-List-Item__Text">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</span>
                        </div>
                        
                        <div className="Contacts-List-Item">
                            <img className="Contacts-List-Item__Icon" src={PhoneImage} alt="Пиктограмма номера телефона" />
                            <span className="Contacts-List-Item__Text">
                                <p style={{margin: "0 0 1rem 0"}}>8 (3902) 22-53-35</p>
                                <p style={{margin: "0"}}>8 (3902) 24-30-71</p>
                            </span>
                        </div>
                        
                        <div className="Contacts-List-Item" style={{alignItems: "center"}}>
                            <img className="Contacts-List-Item__Icon" src={EmailImage} alt="Пиктограмма эл. почты" />
                            <span className="Contacts-List-Item__Text">kancler@vskhakasia.ru</span>
                        </div>
                    </div>

                    <img className="Contacts__Map" src={MapImage} alt="Карта" />
                </div>
            </section>
        );
    }
}