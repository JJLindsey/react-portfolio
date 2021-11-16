import {Container, Row, Card, Button } from 'react-bootstrap'
import { FaGithub, FaPlayCircle} from 'react-icons/fa'
// import { BsEnvelope } from 'react-icons/bs'
import './projects.css'

import React from 'react'

function Projects() {
    const portfolio = [
        {
            name:'State of the Art',
            description: 'A full stack application that will allow museum curators to locate works of art globally.',
            technology: 'JS, Node, MySQL, Boostrap, Handlebars.js',
            img: require('../../assets/app-images/StateArtScreen.png').default,
            github: 'https://github.com/JJLindsey/ArtFiles2',
            deployed:'https://state-of-art.herokuapp.com/'
        },
        {
            name:'Brewed Force',
            description:'A website designed to unite the beer minded traveler with new breweries and beers in new cities. Search feature returns lists of breweries.',
            technology: 'JS, HTML5, JQuery, Material Design Lite',
            img:require('../../assets/app-images/brewed-force.png').default,
            github:'https://github.com/JJLindsey/brewed-force',
            deployed:'https://takes101.github.io/globe-trotting-and-bar-hopping/'
        },
        {
            name:'Budget Tracker',
            description:'Progressive Web App (PAW).The user can add expenses/deposits to their budget with or without a connection.',
            technology: 'JS, Express, MONGODB, HTML, CSS',
            img:require('../../assets/app-images/budget.png').default,
            github:'https://github.com/JJLindsey/budget-tracker',
            deployed:' https://budget-trackerjl.herokuapp.com/'
        },
        {
            name:'Team Profile Generator',
            description:'This application allows the user to generate a team profile based on input using Node.js. Dynamically generate HTML to build your Team profile.',
            technology: 'JS, Node, HTML, Boostrap',
            img:require('../../assets/app-images/TeamProf.png').default,
            github:'https://github.com/JJLindsey/Team-profile',
            deployed:''
        },
        {
            name:'One Stop Print Shop',
            description:'Full Stack E-commerce store with Stripe payment.',
            technology: 'MONGODB, React, Express, Node, Bootstrap, Stripe API',
            img:require('../../assets/app-images/screenshot.png').default,
            github:'https://github.com/JJLindsey/One-Stop-Print-Shop',
            deployed:'https://one-stop-print-shop.herokuapp.com/'
        }
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
            <div className='flex flex-col w-full mb-10'>
                <h3 className='title-font mb-4 text-white'>Apps I have Built</h3>
            </div>
            {/* <Row className='proj-card'>
                {portfolio.map((portfolio) => (
                <Col>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={portfolio.img} fluid />
                                <Card.Title>{portfolio.name}</Card.Title>
                                <Card.Text>
                                    {portfolio.description}
                                    {portfolio.technology}
                                </Card.Text>
                                <a id='git' href={portfolio.github} target='_blank' rel="noreferrer"> <FaGithub/> </a>
                                <Button variant='info' href={portfolio.deployed} target='_blank'>App</Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row> */}
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {portfolio.map((portfolio) => (
                <div class="col">
                    <div class="card shadow-md">
                        <img id='card-img' src={portfolio.img} width="100%" height="225" aria-label="app screenshot" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title>

                        <Card.Body class="card-body">
                        <Card.Title>{portfolio.name}</Card.Title>
                            <Card.Text>
                                {portfolio.description}
                                {portfolio.technology}
                            </Card.Text>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-center align-items-center">
                            <div>
                            <a id='deploy' href={portfolio.deployed} target='_blank' rel="noreferrer"> <FaPlayCircle/> </a>
                            <a id='git' href={portfolio.github} target='_blank' rel="noreferrer"> <FaGithub/> </a>
                            </div>
                        </div>
                        </Card.Body>
                    </div>
                </div>
                ))}
            </Row>

        </Container>

        
    )
}

export default Projects
