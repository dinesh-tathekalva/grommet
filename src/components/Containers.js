import React from 'react'
import { Select, WorldMap, Avatar, ResponsiveContext, Clock, Box, Nav, Main, Footer, Text, Anchor, Header, Grommet, CardHeader, Card, CardFooter, CardBody } from 'grommet';
import { Codepen, Github, Linkedin } from 'grommet-icons';
import Me from '../Me.jpg'


 const Containers = (props) => {
     console.log(props.total)
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
          <Main flex='grow' overflow='auto' fill='horizontal'>
            <Box
              direction="row"
              pad="medium"
              
            >
              <Box pad="large" background="light-3" round='small'>
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
                COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.
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
        <Card margin='small' align='center' height="large" width="large" background="light-1">
          <CardHeader fill='horizontal' pad="medium" >Location</CardHeader>
          <CardBody pad="small">
            <Text >Total Confirmed: {props.TotalConfirmed}</Text>
            <Text color='status-critical'>Total Deaths: {props.TotalDeaths}</Text>
            <Text color='status-ok'>Total Recovered: {props.TotalRecovered}</Text>
            <Text color='status-warning'>Active Cases: {props.ActiveCases}</Text>

            <WorldMap
              pad="large"
              extend={(props) => {}}
              color="dark-6"
              continents={[
                {
                  name: 'North America',
                //   color: 'neutral-2',
                  color:"dark-6",
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
            World Total Cases
        </CardFooter>
        </Card>

        <Card margin='small' align='center' height="medium" width="medium" background="light-1">
          <CardHeader fill='horizontal' pad="medium" >Location</CardHeader>
          <CardBody pad="medium">
           {/* {
               function Example() {
                const [value, setValue] = React.useState('medium');
                return ( */}
                  <Select
                    options={['small', 'medium', 'large']}
                    // value={value}
                    // onChange={({ option }) => setValue(option)}
                  />
                {/* );
              }
           } */}

          </CardBody>
          <CardFooter fill='horizontal' justify='center' pad='medium' background="light-3">
            Bay Area, CA
        </CardFooter>
        </Card>
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
    )
}

export default Containers