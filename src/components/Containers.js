import React, { Component } from 'react'
import { Select, WorldMap, ResponsiveContext, Clock, Box, Nav, Main, Footer, Text, Anchor, Header, Grommet, CardHeader, Card, CardFooter, CardBody } from 'grommet';
import { Codepen, Github, Linkedin } from 'grommet-icons';
// import { render } from '@testing-library/react';
import axios from 'axios';

// import Me from '../Me.jpg'



export default class Containers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'india',
            options: '',
            Confirmed: '',
            Deaths: '',
            Recovered: '',
        }
    }

    changeHandler = e => {
        this.setState({
            selected: e.value
        })
        console.log(e.value);

        axios.get(`https://api.covid19api.com/total/country/${e.value}`)
            .then(res => {
                const AllData = res.data;
                // const Country = AllCountries.map(countries => countries.Slug)
                this.setState({
                    Confirmed: AllData[AllData.length - 1].Confirmed,
                    Deaths: AllData[AllData.length - 1].Deaths,
                    Recovered: AllData[AllData.length - 1].Recovered,
                    // Country: Country
                });
                // console.log(AllData[AllData.length-1].Country);
                // console.log(AllData[AllData.length - 1]);
                // console.log(AllData);

            })
    }

    componentDidMount(){
        axios.get(`https://api.covid19api.com/total/country/${this.state.selected}`)
            .then(res => {
                const indiaData = res.data;
                // const Country = AllCountries.map(countries => countries.Slug)
                this.setState({
                    Confirmed: indiaData[indiaData.length - 1].Confirmed,
                    Deaths: indiaData[indiaData.length - 1].Deaths,
                    Recovered: indiaData[indiaData.length - 1].Recovered,
                    // Country: Country
                });
                // console.log(AllData[AllData.length-1].Country);
                // console.log(AllData[AllData.length - 1]);
                // console.log(indiaData);

            })
    }

    // componentDidUpdate() {
    //     console.log(this.state.value);
    //     // axios.get(`https://api.covid19api.com/total/country/${this.state.value}`)
    //     //     .then(res => {
    //     //         const AllData = res.data;
    //     //         // const Country = AllCountries.map(countries => countries.Slug)
    //     //         this.setState({
    //     //             Confirmed: AllData[AllData.length - 1].Confirmed,
    //     //             Deaths: AllData[AllData.length - 1].Deaths,
    //     //             Recovered: AllData[AllData.length - 1].Recovered,
    //     //             // Country: Country
    //     //         });
    //     //         // console.log(AllData[AllData.length-1].Country);
    //     //         // console.log(AllData[AllData.length - 1]);
    //     //         // console.log(AllData);

    //     //     })
    // }



    render() {
        const { Country, TotalConfirmed, TotalDeaths, TotalRecovered, ActiveCases } = this.props
        const {  Confirmed, Deaths, Recovered } = this.state;
        const Active = this.state.Confirmed - (this.state.Recovered + this.state.Deaths)


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
                                    {/* <Box direction='row'>
                  <Avatar
                    size='xlarge'
                    fit="cover"
                    src={Me}
                    margin='small'
                  /><h1 className='mainHeading'>Hi, I'm Dinesh.</h1>
                </Box> */}
                                    {/* <Avatar
                  size='xlarge'
                  fit="cover"
                  src={Me}
                /><h1 className='mainHeading'>Hi, I'm Dinesh.</h1> */}
                COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions
                like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.
              </Box>
                            </Box>
                        </Main>
                    )}
                </ResponsiveContext.Consumer>

                <ResponsiveContext.Consumer>
                    {size => (
                        <Main flex='grow' overflow='auto' fill='horizontal' >
                            <Box
                                // direction="row"
                                pad="medium"
                            >
                                <Card margin='small' align='center' height="medium" width="medium" background="light-1">
                                    <CardHeader fill='horizontal' pad="medium" ></CardHeader>
                                    <CardBody pad="small">
                                        <Box direction="row" className='caseBox'>
                                            <Text>Total Confirmed <Text>{TotalConfirmed}</Text></Text>
                                            <Text color='status-critical'>Total Deaths <Text>{TotalDeaths}</Text></Text>
                                            <Text color='status-ok'>Total Recovered <Text>{TotalRecovered}</Text></Text>
                                            <Text color='status-warning'>Active Cases <Text>{ActiveCases}</Text></Text>
                                        </Box>


                                        <WorldMap
                                            pad="large"
                                            extend={(props) => { }}
                                            color="dark-6"
                                            continents={[
                                                {
                                                    name: 'North America',
                                                    //   color: 'neutral-2',
                                                    color: "dark-6",
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
                                    <CardHeader fill='horizontal' pad="medium" >Country</CardHeader>
                                    <CardBody pad="medium">

                                        <Select
                                            options={[...Country]}
                                            value={this.state.selected}
                                            // onSearch={(searchText) => {
                                            //     const regexp = new RegExp(searchText, 'i');
                                            //     this.setState({ options: Country.filter(o => o.match(regexp)) });
                                            // }}
                                            onChange={this.changeHandler.bind(this)}
                                        />

                                        <Box direction="row" className='caseBox'>
                                            <Text> Confirmed <Text>{Confirmed}</Text></Text>
                                            <Text color='status-critical'> Deaths <Text>{Deaths}</Text></Text>
                                            <Text color='status-ok'> Recovered <Text>{Recovered}</Text></Text>
                                            <Text color='status-warning'> Active     <Text>{Active}</Text></Text>
                                        </Box>

                                    </CardBody>
                                    <CardFooter fill='horizontal' justify='center' pad='medium' background="light-3">
                                        {this.state.selected}
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
}

