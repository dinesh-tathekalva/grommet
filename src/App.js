import React from 'react';
import { WorldMap, Avatar, ResponsiveContext, Clock, Box, Nav, Main, Footer, Text, Anchor, Header, Grommet, CardHeader, Card, CardFooter, CardBody } from 'grommet';
import { Codepen, Github, Linkedin } from 'grommet-icons';
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
          <Main flex='grow' overflow='auto' fill='horizontal' >
            <Box
              direction="row"
              pad="medium"
            >
              <Box pad="large" background="light-3" >
                <Box direction='row'>
                  <Avatar
                    size='xlarge'
                    fit="cover"
                    src={Me}
                    margin='small'
                  /><h1 className='mainHeading'>Hi, I'm Dinesh.</h1>
                </Box>
                {/* <Avatar
                  size='xlarge'
                  fit="cover"
                  src={Me}
                /><h1 className='mainHeading'>Hi, I'm Dinesh.</h1> */}
              If you're wondering if I'm the character from the HBO's comedy series 'Silicon Valley', I'm not. I'm a real person with the name Dinesh Tathekalva. I'm a Software Engineer, Frontend Engineer.
              I build web and mobile applications for financial and tech companies. I also love and study astronomy during my free time
              </Box>
            </Box>
          </Main>
        )}
      </ResponsiveContext.Consumer>

      <ResponsiveContext.Consumer>
        {size => (
          <Main flex='grow' overflow='auto' fill='horizontal' >
            <Box
        direction="row"
        pad="medium"
      >
        <Card margin='small' align='center' height="medium" width="medium" background="light-1">
          <CardHeader fill='horizontal' pad="medium" >Location</CardHeader>
          <CardBody pad="medium">
            <WorldMap
              extend={(props) => {}}
              color="dark-6"
              continents={[
                {
                  name: 'North America',
                  color: 'neutral-2',
                  onClick: (name) => { },
                },
              ]}
              onSelectPlace={(lat, lon) => { }}
              places={[
                {
                  name: 'Bay Area',
                  location: [38.8375, -122.2913],
                  color: 'accent-1',
                  onClick: (name) => { },
                },
              ]}
              selectColor="accent-2"
            />
          </CardBody>
          <CardFooter fill='horizontal' justify='center' pad='medium' background="light-3">
            Bay Area, CA
        </CardFooter>
        </Card>

        {/* <Card margin='small' align='center' height="medium" width="medium" background="light-1">
          <CardHeader fill='horizontal' pad="medium" >Location</CardHeader>
          <CardBody pad="medium">
            <WorldMap
              color="dark-6"
              continents={[
                {
                  name: 'North America',
                  color: 'neutral-2',
                  onClick: (name) => { },
                },
              ]}
              onSelectPlace={(lat, lon) => { }}
              places={[
                {
                  name: 'Bay Area',
                  location: [37.7749, -122.4194],
                  color: '#FF4040',
                  onClick: (name) => { },
                },
              ]}
              selectColor="accent-2"
            />
          </CardBody>
          <CardFooter fill='horizontal' justify='center' pad='medium' background="light-3">
            Bay Area, CA
        </CardFooter>
        </Card> */}
      </Box>
          </Main>
        )}
      </ResponsiveContext.Consumer>

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
