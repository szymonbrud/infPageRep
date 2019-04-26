import React, { Component } from "react"

import styled from 'styled-components';
import { scrollTo } from 'scroll-js';
import Layout from '../utils/Layout';

import MenuBurger from '../components/MenuBurger/MenuBurger'
import Start from '../components/Sections/Start'
import CoRobimy from '../components/Sections/CoRobimy';
import MenuLinks from '../components/MenuBurger/MenuLinks';
import Aktualnosci from '../components/Sections/Aktualnosci';
import Kontakt from "../components/Sections/Kontakt";

import getHeightSec from '../functions/getHeightSec';

const MainMainWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  font-family: 'Roboto', sans-serif;
  position: absolute;
  width: calc(100% + 8px);
  top: 0;
  left: -8px;
`;

class IndexPage extends Component {

  constructor(){
    super();

    this.state = {
      visibleMenu: false,
      sec1Hegiht: 0,
      visibleMenuLinks: false,
      wysWszystkichSek: [],
      visi: false,
      visibleMenuLinksApp: false,
    }
  }

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);

    window.addEventListener('scroll', this.throttle(this.callback, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const section1 = document.querySelector('.sec1');

    this.setState({sec1Hegiht: section1.offsetHeight})
  }

  throttle = (fn, wait) => {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  scroll = (nr) => {
    scrollTo(document.body, { top: this.state.wysWszystkichSek[nr], easing: 'ease-in-out' });
  }

  callback = () => {
    const { visibleMenu, sec1Hegiht } = this.state;

    if(window.pageYOffset >= sec1Hegiht){
      if(visibleMenu !== true) this.setState({visibleMenu: true});
    } else {
      if(visibleMenu !== false) this.setState({visibleMenu: false});
    }  
  }

  takeVisibleMenuLinks = (a) => {
    this.setState({visibleMenuLinks: a});
  }

  menuLinksCliced = (linkNumber) => {
    this.setState({wysWszystkichSek: getHeightSec()});
    this.setState({visibleMenuLinks: false});
    this.changeParentVisible(false);

    setTimeout(() => {
      this.scroll(linkNumber);
    }, 200);
  }

  changeParentVisible = (a) => {
    this.setState({visibleMenuLinksApp: a})
  }

  render(){

    const { visibleMenu, visibleMenuLinks, visibleMenuLinksApp } = this.state;
    
    return(
      <>
        <Layout>
          <MainMainWrapper>
            <MenuBurger 
              visibleMenu={visibleMenu}
              Parent={this.takeVisibleMenuLinks}
              visibleMenuLinks={visibleMenuLinksApp}
              VisibleToParent={this.changeParentVisible}/>
            <MenuLinks visibleMenuLinks={visibleMenuLinks} clic={this.menuLinksCliced}/>
            <Start/>
            <CoRobimy/>
            <Aktualnosci/>
            <Kontakt/>
          </MainMainWrapper>
        </Layout>
      </>
    )
  }
}

export default IndexPage;