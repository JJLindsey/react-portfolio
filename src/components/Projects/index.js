import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import React from 'react'

function Projects() {
    const portfolio = [
        {
            name:'State of the Art',
            description: 'A full stack application that will allow museum curators to locate works of art globally.',
            img: ('../../assets/app-images/StateArtScreen.png'),
            github: 'https://github.com/JJLindsey/ArtFiles2',
            deployed:'https://state-of-art.herokuapp.com/'
        },
        {
            name:'Brewed Force',
            description:'A website designed to unite the beer minded traveler with new breweries and beers in new cities. By entering a city into our search feature, the user will be met with a list of breweries in that city.',
            img:'../../assets/app-images/brewed-force.png',
            github:'https://github.com/JJLindsey/brewed-force',
            deployed:'https://takes101.github.io/globe-trotting-and-bar-hopping/'
        },
        {
            name:'Budget Tracker',
            description:'The user can add expenses/deposits to their budget with or without a connection.',
            img:'../../assets/app-images/budget.png',
            github:'https://github.com/JJLindsey/budget-tracker',
            deployed:' https://budget-trackerjl.herokuapp.com/'
        },
        {
            name:'Team Profile Generator',
            description:'This application allows the user to generate a team profile based on user input using Node.js. Build your Team online profile, incl. Name/Title/ID/Email and dynamically generate the HTML',
            img:'../../assets/app-images/TeamProf.png',
            github:'https://github.com/JJLindsey/Team-profile',
            deployed:''
        },
        // {
        //     name:
        //     description:
        //     img:
        //     github:
        //     deployed:  
        // },
        // {
        //     name:
        //     description:
        //     img:
        //     github:
        //     deployed:  
        // }
    ]

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Hello! </h1>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={portfolio.img} />
                        <Card.Body>
                            <Card.Title>{portfolio.name}</Card.Title>
                            <Card.Text>
                                {portfolio.description}
                            </Card.Text>
                            <Button variant="primary">{portfolio.github}</Button>
                            <Button variant="primary">{portfolio.deployed}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects
