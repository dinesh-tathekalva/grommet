import React from 'react';
import { WorldMap, Avatar, ResponsiveContext, Image, Clock, Grid, Box, Nav, Menu, Main, Heading, Paragraph, Footer, Text, Tabs, Tab, Button, Anchor, Header, Grommet, CardHeader, Card, CardFooter, CardBody } from 'grommet';
import { Codepen, Github, Notification, Linkedin, ChatOption, Home, Favorite, ShareOption } from 'grommet-icons';
import './App.css';
import Me from './Me.jpg'

const App = () => {

  return (
    <Grommet className='app'>

      <ResponsiveContext.Consumer>
        {size => (
          <Header className='header' background="brand">
            <Nav className='nav' direction="row" background="brand" pad="medium">
              <Anchor icon={<Github />} hoverIndicator />
              <Anchor icon={<Codepen />} hoverIndicator />
              <Anchor icon={<Linkedin />} hoverIndicator />
            </Nav>
            <Clock margin='medium' type="digital" />
          </Header>
        )}
      </ResponsiveContext.Consumer>

      <ResponsiveContext.Consumer>
        {size => (
          <Main flex='grow' overflow='auto' fill='horizontal' pad="medium">
            <Box
              direction="row"
              pad="medium"
            >
              <Box pad="large" background="light-3" >
                <Avatar
                  size='xlarge'
                  fit="cover"
                  src={Me}
                /><h1 className='mainHeading'>Hi, I'm Dinesh.</h1>
              If you're wondering if I'm the character from the HBO's comedy series 'Silicon Valley', I'm not. I'm a real person with the name Dinesh Tathekalva. I'm a Software Engineer, Frontend Engineer.
              I build web and mobile applications for financial and tech companies. I also love and study astronomy during my free time
              </Box>
            </Box>
          </Main>
        )}
      </ResponsiveContext.Consumer>

      <Box
        direction="row"
        pad="large"
        width='large'
        responsive='true'
        margin='small'
      >
        <WorldMap
          color="neutral-1"
          continents={[
            {
              name: 'North America',
              color: 'dark-1',
              onClick: (name) => { },
            },
          ]}
          onSelectPlace={(lat, lon) => { }}
          places={[
            {
              name: 'Sydney',
              location: [37.7749, -122.4194],
              color: 'accent-4',
              onClick: (name) => { },
            },
          ]}
          selectColor="accent-2"
        />
      </Box>

      <ResponsiveContext.Consumer>
        {size => (
          <Footer className='footer' background="brand" pad="medium">
            <Text>Copyright</Text>
            <Anchor label="About" />
          </Footer>
        )}
      </ResponsiveContext.Consumer>


    </Grommet>
  );
}

export default App;
