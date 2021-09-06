import {Container, Row, Col, Card, Button } from 'react-bootstrap'
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
// import { BsEnvelope } from 'react-icons/bs'

import React from 'react'

function Projects() {
    const portfolio = [
        {
            name:'State of the Art',
            description: 'A full stack application that will allow museum curators to locate works of art globally.',
            img: require('../../assets/app-images/StateArtScreen.png').default,
            github: 'https://github.com/JJLindsey/ArtFiles2',
            deployed:'https://state-of-art.herokuapp.com/'
        },
        {
            name:'Brewed Force',
            description:'A website designed to unite the beer minded traveler with new breweries and beers in new cities. By entering a city into our search feature, the user will be met with a list of breweries in that city.',
            img:require('../../assets/app-images/brewed-force.png').default,
            github:'https://github.com/JJLindsey/brewed-force',
            deployed:'https://takes101.github.io/globe-trotting-and-bar-hopping/'
        },
        {
            name:'Budget Tracker',
            description:'The user can add expenses/deposits to their budget with or without a connection.',
            img:require('../../assets/app-images/budget.png').default,
            github:'https://github.com/JJLindsey/budget-tracker',
            deployed:' https://budget-trackerjl.herokuapp.com/'
        },
        {
            name:'Team Profile Generator',
            description:'This application allows the user to generate a team profile based on user input using Node.js. Build your Team online profile, incl. Name/Title/ID/Email and dynamically generate the HTML',
            img:require('../../assets/app-images/TeamProf.png').default,
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

        <Container id='projects' fluid>
            <Row>
                {portfolio.map((portfolio) => (
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={portfolio.img} fluid />
                        <Card.Body>
                            <Card.Title>{portfolio.name}</Card.Title>
                            <Card.Text>
                                {portfolio.description}
                            </Card.Text>
                            <Button variant='info' href={portfolio.github} target='_blank'>GitHub</Button>
                            <Button variant='warning' href={portfolio.deployed} target='_blank'>Application</Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects
