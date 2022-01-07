import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleNavigation = props.navigationHandler.bind(this);
    }

    render() {
        return (
            <footer className="Footer font-roboto">
                <div className="Footer-Menu">
                    <p className="Footer-Section__Heading">Меню</p>
            
                    <div className="Footer-Navigation font-roboto-light">
                        <span onClick={this.handleNavigation} data-target="main" className="Footer-Navigation__Item">Главная</span>
                        <span onClick={this.handleNavigation} data-target="sightseens" className="Footer-Navigation__Item">Достопримечательности</span>
                        <span onClick={this.handleNavigation} data-target="tours" className="Footer-Navigation__Item">Туры</span>
                        <span onClick={this.handleNavigation} data-target="contacts" className="Footer-Navigation__Item">Контакты</span>
                    </div>
                </div>
                <div className="Footer-Contacts">
                    <p className="Footer-Section__Heading">Контакты</p>
                    
                    <div className="Footer-Contacts__List">
                        <p>655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</p>
                        <p style={{marginTop: "1rem", marginBottom: "1rem"}}>Справочная служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71</p>
                        <p>Электронная почта: kancler@vskhakasia.ru</p>
                    </div>
                </div>
                <div className="Footer-Decoy"></div>
                <div className="Footer-Content">
                    <p className="Footer-Section__Heading" style={{fontWeight: "300", margin: "0"}}>Официальный сайт Агенства Туризма Республики Хакасия  ©  2021</p>
                </div>
            </footer>
        );
    }
}