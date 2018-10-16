import React, { Component } from 'react';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';


class FullPage extends Component {
    state = {}
    render() {
        let options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true
        };
        return (
            <div>
                <Header>
                    <a href="#sectionOne" className="opa">Section One</a>
                    <a href="#sectionTwo">Section Two</a>
                    <a href="#sectionThree">Section Three</a>
                </Header>
                <Footer>
                    <a href="" className="opa">Dcoumentation</a>
                    <a href="">Example Source</a>
                    <a href="">About</a>
                </Footer>
                <SectionsContainer {...options}>
                    <Section>Page 1</Section>
                    <Section>Page 2</Section>
                    <Section>Page 3</Section>
                </SectionsContainer>

            </div>
        );
    }
}

export default FullPage;