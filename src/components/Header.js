import React, { Component, createRef } from 'react';
import './Header.css'
import LogoImage from '../images/logo.png'
import MenuButtonImage from '../images/hamburger.svg'

export default class Header extends Component {
    state = {
        headerClassName: "Header Header-Normal",
        overlayMenuClassName: "OverlayMenu OverlayMenu-Closed",
        overlayCloseButtonClassName: "OverlayMenu__CloseButton",
    };

    constructor(props) {
        super(props);
        this.handleNavigation = props.navigationHandler.bind(this);
        this.headerRef = createRef();
        this.overlayMenuRef = createRef();
        this.overlayCloseButtonRef = createRef();
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.overlayMenuRef.current.style.display = "none";
    }

    handleScroll = () => {
        if (window.pageYOffset > 0) {
            this.setState({ headerClassName: "Header Header-Scrolled" });
        } else {
            this.setState({ headerClassName: "Header Header-Normal" });
        }
    }

    switchNavigation = (close) => {
        if (close) {
            document.body.style.overflow = document.body.old_overflow;
            delete document.body.old_overflow;

            this.headerRef.current.style.visibility = this.headerRef.current.old_visibility;
            delete this.headerRef.current.old_visibility;

            this.setState({ 
                overlayMenuClassName: "OverlayMenu OverlayMenu-Closed",
                overlayCloseButtonClassName: "OverlayMenu__CloseButton"
             }, () => {
                requestAnimationFrame(() => {
                    this.overlayMenuRef.current.style.display = "none";
                });
            });
        } else {
            document.body.old_overflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";

            this.headerRef.current.old_visibility = this.headerRef.current.style.visibility;
            this.headerRef.current.style.visibility = "hidden";

            this.overlayMenuRef.current.style.display = "block";
            requestAnimationFrame(() => {
                this.setState({ 
                    overlayMenuClassName: "OverlayMenu OverlayMenu-Opened",
                    overlayCloseButtonClassName: "OverlayMenu__CloseButton OverlayMenu__CloseButton_Closer"
                 });
            });
        }
    }

    render() {
        return (
            <div>
                <div ref={this.overlayMenuRef} className={this.state.overlayMenuClassName}>
                    <img className="OverlayMenu__Logo" src={LogoImage} alt="Логотип сайта" />

                    <div ref={this.overlayCloseButtonRef} className={this.state.overlayCloseButtonClassName} onClick={this.switchNavigation.bind(this, true)}>
                        <div className="ButtonLine"></div>
                        <div className="ButtonLine"></div>
                        <div className="ButtonLine"></div>
                    </div>

                    <div className="OverlayMenuContent font-roboto">
                        <span onClick={this.handleNavigation} data-target="main" className="OverlayMenuContent__Item">Главная</span>
                        <span onClick={this.handleNavigation} data-target="sightseens" className="OverlayMenuContent__Item">Достопримечательности</span>
                        <span onClick={this.handleNavigation} data-target="tours" className="OverlayMenuContent__Item">Туры</span>
                        <span onClick={this.handleNavigation} data-target="contacts" className="OverlayMenuContent__Item">Контакты</span>
                    </div>
                </div>

                <nav ref={this.headerRef} className={this.state.headerClassName}>
                    <a href="/" className="Logo">
                        <img className="Logo__Image" src={LogoImage} alt="Логотип сайта" />
                    </a>

                    <div className="DesktopNavigation font-roboto">
                        <span onClick={this.handleNavigation} data-target="main" className="DesktopNavigation__Item">Главная</span>
                        <span onClick={this.handleNavigation} data-target="sightseens" className="DesktopNavigation__Item">Достопримечательности</span>
                        <span onClick={this.handleNavigation} data-target="tours" className="DesktopNavigation__Item">Туры</span>
                        <span onClick={this.handleNavigation} data-target="contacts" className="DesktopNavigation__Item">Контакты</span>
                    </div>

                    <span className="MenuButton p-1_25 mv-auto" onClick={this.switchNavigation.bind(this, false)}>
                        <img className="MenuButton__Image" src={MenuButtonImage} alt="Кнопка меню" />
                    </span>
                </nav>
            </div>
        );
    }
}