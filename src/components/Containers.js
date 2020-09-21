import React, { Component } from 'react'
import { Select, WorldMap, ResponsiveContext, Clock, Box, Nav, Main, Footer, Text, Anchor, Header, Grommet, CardHeader, Card, CardFooter, CardBody } from 'grommet';
import { Github, Globe, Local } from 'grommet-icons';
import axios from 'axios';

export default class Containers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'India',
            options: '',
            Confirmed: '',
            Deaths: '',
            Recovered: '',
            Lat: '20.59',
            Lon: '78.96'
        }
    }

    changeHandler = e => {
        this.setState({
            selected: e.value
        })
        axios.get(`https://api.covid19api.com/total/country/${e.value}`)
            .then(res => {
                const AllData = res.data;
                this.setState({
                    Confirmed: AllData[AllData.length - 1].Confirmed,
                    Deaths: AllData[AllData.length - 1].Deaths,
                    Recovered: AllData[AllData.length - 1].Recovered,
                });
            })

        axios.get(`https://api.covid19api.com/live/country/${e.value}`)
            .then(res => {
                const LocData = res.data;
                this.setState({
                    Lat: LocData[LocData.length - 1].Lat,
                    Lon: LocData[LocData.length - 1].Lon,
                });
                console.log(this.state.Lon);
            })
    }

    componentDidMount() {
        axios.get(`https://api.covid19api.com/total/country/${this.state.selected}`)
            .then(res => {
                const indiaData = res.data;
                this.setState({
                    Confirmed: indiaData[indiaData.length - 1].Confirmed,
                    Deaths: indiaData[indiaData.length - 1].Deaths,
                    Recovered: indiaData[indiaData.length - 1].Recovered,
                });
            })
    }

    render() {
        const { Country, TotalConfirmed, TotalDeaths, TotalRecovered, ActiveCases } = this.props
        const { Lat, Lon, Confirmed, Deaths, Recovered } = this.state;
        const Active = this.state.Confirmed - (this.state.Recovered + this.state.Deaths)
        const Cases = ' cases'
        return (
            <Grommet className='app'>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Header className='header' background="brand">
                            <Nav className='nav' direction="row" background="brand" pad="medium">
                                <Anchor href="https://github.com/dinesh-tathekalva" target="_blank" icon={<Github />} hoverIndicator />
                                <Anchor href="https://bit.ly/3iPS6GP" target="_blank" icon={<Globe />} hoverIndicator />
                                <Anchor href="https://bit.ly/3hK2myN" target="_blank" icon={<Local />} hoverIndicator />
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
                                align='center'
                                pad="medium"
                            >
                                <Card className='card' margin='small' align='center' height="large" width="medium" background="light-1">
                                    <CardHeader fill='horizontal' pad="medium" background="light-3">World Overview</CardHeader>
                                    <CardBody pad="medium">
                                    <WorldMap
                                            className='map'
                                            fill='horizontal'
                                            extend={(props) => { }}
                                            color="status-warning"
                                            places={[
                                                {   
                                                    strokeWidth:"50",
                                                    name: 'Bay Area',
                                                    location: [],
                                                    color: 'status-critical',
                                                    onClick: (name) => { },
                                                },
                                            ]}
                                            selectColor="accent-2"
                                        />
                                        <Box className='caseBox' >
                                            <Text> Confirmed <Text>{TotalConfirmed}</Text></Text>
                                            <Text color='status-critical'> Deaths <Text>{TotalDeaths}</Text></Text>
                                            <Text color='status-ok'> Recovered <Text>{TotalRecovered}</Text></Text>
                                            <Text color='status-warning'> Cases <Text>{ActiveCases}</Text></Text>
                                        </Box>
                                    </CardBody>
                                    <CardFooter fill='horizontal' justify='center' pad='medium' background="light-6">
                                        World Cases
                                    </CardFooter>
                                </Card>
                                        
                                <Card className='card' margin='small' align='center' height="large" width="medium" background="light-1">
                                    <CardHeader fill='horizontal' pad="medium" background="light-3">Country Overview</CardHeader>
                                    <CardBody pad="medium">
                                        <Select
                                            
                                            options={[...Country]}
                                            value={this.state.selected}
                                            onChange={this.changeHandler.bind(this)}
                                        />
                                        <WorldMap
                                        className='map'
                                            fill='horizontal'
                                            extend={(props) => { }}
                                            color="dark-6"
                                            places={[
                                                {
                                                    name: 'Bay Area',
                                                    location: [Lat, Lon],
                                                    color: 'status-critical',
                                                    onClick: (name) => { },
                                                },
                                            ]}
                                            selectColor="accent-2"
                                        />
                                        <Box className='caseBox'>
                                            <Text> Confirmed <Text>{Confirmed}</Text></Text>
                                            <Text color='status-critical'> Deaths <Text>{Deaths}</Text></Text>
                                            <Text color='status-ok'> Recovered <Text>{Recovered}</Text></Text>
                                            <Text color='status-warning'> Active     <Text>{Active}</Text></Text>
                                        </Box>
                                    </CardBody>
                                    <CardFooter fill='horizontal' justify='center' pad='medium' background="light-6">
                                        {this.state.selected + Cases}
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

