import React, { Component } from 'react';
import { scrollTo } from 'scroll-js';
import MenuBurger from '../components/MenuBurger/MenuBurger';
import Start from '../components/Sections/Start';
import CoRobimy from '../components/Sections/CoRobimy';
import MenuLinks from '../components/MenuBurger/MenuLinks';
import Aktualnosci from '../components/Sections/Aktualnosci';
import Kontakt from '../components/Sections/Kontakt';
import Footer from '../components/Sections/Footer';
import MenuDesktop from '../components/MenuDesktop/MenuDesktop';
import getHeightSec from '../functions/getHeightSec';
import MainConfiguration from '../styles/MainConfiguration';
import Landscape from '../components/Landscape/Landscape';

class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      visibleMenu: false, // widzialnośc menu phone
      sec1Hegiht: 0,
      visibleMenuLinks: false,
      wysWszystkichSek: [],
      visi: false,
      visibleMenuLinksApp: false,
      whereWeAreHere: 1
    };
  }

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);

    window.addEventListener('scroll', this.throttle(this.callback, 100));
    this.setState({ wysWszystkichSek: getHeightSec() });
    setTimeout(() => {
      console.log(this.state.wysWszystkichSek);
    }, 200);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const section1 = document.querySelector('.sec1');

    this.setState({ sec1Hegiht: section1.offsetHeight });
  };

  throttle = (fn, wait) => {
    let time = Date.now();
    return function() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  scroll = nr => {
    scrollTo(document.body, {
      top: this.state.wysWszystkichSek[nr],
      easing: 'ease-in-out'
    });
  };

  callback = () => {
    const {
      visibleMenu,
      sec1Hegiht,
      wysWszystkichSek,
      whereWeAreHere
    } = this.state;

    if (window.pageYOffset >= sec1Hegiht) {
      if (visibleMenu !== true) this.setState({ visibleMenu: true });
    } else if (visibleMenu !== false) this.setState({ visibleMenu: false });

    if (window.pageYOffset <= wysWszystkichSek[1] - wysWszystkichSek[1]/2) {
      if (whereWeAreHere !== 1) this.setState({ whereWeAreHere: 1 });
    } else if (
      window.pageYOffset >= wysWszystkichSek[1] - wysWszystkichSek[1]/2 &&
      window.pageYOffset <= wysWszystkichSek[2] - wysWszystkichSek[1]/2
    ) {
      if (whereWeAreHere !== 2) this.setState({ whereWeAreHere: 2 });
    } else if (
      window.pageYOffset >= wysWszystkichSek[2] - wysWszystkichSek[1]/2 &&
      window.pageYOffset <= wysWszystkichSek[3] - wysWszystkichSek[1]/2
    ) {
      if (whereWeAreHere !== 3) this.setState({ whereWeAreHere: 3 });
    } else if (whereWeAreHere !== 4) this.setState({ whereWeAreHere: 4 });
  };

  takeVisibleMenuLinks = a => {
    this.setState({ visibleMenuLinks: a });
  };

  menuLinksCliced = linkNumber => {
    this.setState({ wysWszystkichSek: getHeightSec() });
    this.setState({ visibleMenuLinks: false });
    this.changeParentVisible(false);

    setTimeout(() => {
      this.scroll(linkNumber);
    }, 200);
  };

  MenuDesktopCliced = linkNumber => {
    this.setState({ wysWszystkichSek: getHeightSec() });
    this.scroll(linkNumber);
  };

  changeParentVisible = a => {
    this.setState({ visibleMenuLinksApp: a });
  };

  render() {
    const {
      visibleMenu,
      visibleMenuLinks,
      visibleMenuLinksApp,
      whereWeAreHere
    } = this.state;

    return (
      <>
        <MainConfiguration>
          <MenuBurger
            visibleMenu={visibleMenu}
            Parent={this.takeVisibleMenuLinks}
            visibleMenuLinks={visibleMenuLinksApp}
            VisibleToParent={this.changeParentVisible}
          />
          <MenuLinks
            visibleMenuLinks={visibleMenuLinks}
            clic={this.menuLinksCliced}
            whereWeAreHere={whereWeAreHere}
          />
          <MenuDesktop
            whereWeAreHere={whereWeAreHere}
            clicedMenu={this.MenuDesktopCliced}
            visibleMenu={visibleMenu}
          />
          <Start clicedMenu={this.MenuDesktopCliced} />
          <CoRobimy />
          <Aktualnosci />
          <Kontakt />
          <Footer />
          <Landscape>przekręć telefon</Landscape>
        </MainConfiguration>
      </>
    );
  }
}

export default IndexPage;
