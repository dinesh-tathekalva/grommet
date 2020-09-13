import React from 'react';
import { ResponsiveContext, Image, Clock, Grid, Box, Nav, Menu, Main, Heading, Paragraph, Footer, Text, Tabs, Tab, Button, Anchor, Header, Grommet, CardHeader, Card, CardFooter, CardBody } from 'grommet';
import { Codepen, Github, Notification, Linkedin, ChatOption, Home, Favorite, ShareOption } from 'grommet-icons';
import './App.css';
import Me from'./Me.jpg'




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
      <Main flex='grow' overflow='auto' fill='horizontal' pad="medium">
        <Heading className='mainHeading'>Hi, I'm Dinesh.</Heading>
        <Paragraph fill='horizontal'>If you're wondering if I'm the character from the HBO's comedy series 'Silicon Valley', I'm not. I'm a real person with the name Dinesh Tathekalva. I'm a Software Engineer, Frontend Engineer. I build web and mobile applications for financial and tech companies. I also love and study astronomy during my free time.</Paragraph>

        <Card height="small" width="small" background="light-1">
          <CardHeader pad="medium">Header</CardHeader>
          <CardBody pad="medium">Body</CardBody>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button
              icon={<Favorite color="red" />}
              hoverIndicator
            />
            <Button icon={<ShareOption color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
      </Main>

      {/* <Grid
        margin='medium'
        rows={['xxsmall', 'small']}
        columns={['small', 'large']}
        gap="xxsmall"
        areas={[
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="nav" background="light-5" height="small" width="small">
          <Image
            fit="cover"
            src={Me}
          />
        </Box>
        <Box gridArea="main" background="light-2" >
        <Heading className='mainHeading'>Hi, I'm Dinesh.</Heading>
        <Paragraph margin='medium' fill='horizontal'>If you're wondering if I'm the character from the HBO's comedy series 'Silicon Valley', I'm not. I'm a real person with the name Dinesh Tathekalva. I'm a Software Engineer, Frontend Engineer. I build web and mobile applications for financial and tech companies. I also love and study astronomy during my free time</Paragraph>

        </Box>
      </Grid> */}

      <Footer className='footer' background="brand" pad="medium">
        <Text>Copyright</Text>
        <Anchor label="About" />
      </Footer>
      
      
    </Grommet>
  );
}

export default App;
