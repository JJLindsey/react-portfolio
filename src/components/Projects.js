import {Container, Row, Card } from 'react-bootstrap'
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
            img: require('../assets/app-images/StateArtScreen.png').default,
            github: 'https://github.com/JJLindsey/ArtFiles2',
            deployed:'https://state-of-art.herokuapp.com/'
        },
        {
            name:'Brewed Force',
            description:'A website designed to unite the beer minded traveler with new breweries and beers in new cities. Search feature returns lists of breweries.',
            technology: 'JS, HTML5, JQuery, Material Design Lite',
            img:require('../assets/app-images/brewed-force.png').default,
            github:'https://github.com/JJLindsey/brewed-force',
            deployed:'https://takes101.github.io/globe-trotting-and-bar-hopping/'
        },
        {
            name:'Mindful Pose',
            description:'Meditation app COMING SOON',
            technology: 'ReactJS, Express, MongoDB, HTML, CSS',
            img:require('../assets/app-images/particles.gif').default,
            github:'',
            deployed:''
        },
        {
            name:'Budget Tracker',
            description:'Progressive Web App (PWA).The user can add expenses/deposits to their budget with or without a connection.',
            technology: 'JS, Express, MongoDB, HTML, CSS',
            img:require('../assets/app-images/budget.png').default,
            github:'https://github.com/JJLindsey/budget-tracker',
            deployed:' https://budget-trackerjl.herokuapp.com/'
        },
        {
            name:'Team Profile Generator',
            description:'This application allows the user to generate a team profile based on input using Node.js. Dynamically generate HTML to build your Team profile.',
            technology: 'JS, Node, HTML, Boostrap',
            img:require('../assets/app-images/TeamProf.png').default,
            github:'https://github.com/JJLindsey/Team-profile',
            deployed:''
        },
        {
            name:'One Stop Print Shop',
            description:'Full Stack E-commerce store with Stripe payment.',
            technology: 'MONGODB, React, Express, Node, Bootstrap, Stripe API',
            img:require('../assets/app-images/screenshot.png').default,
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
                <h3 className='title-font mb-4 text-dark'>Apps I have Built</h3>
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
                            <Card.Body class="card-body text-dark">
                                <Card.Img  fluid id='card-img' variant='top' src={portfolio.img} alt='app screenshot'/>
                                    <Card.Title>{portfolio.name}</Card.Title>
                                        <Card.Text>
                                            <p>
                                            {portfolio.description}</p>
                                            <p>
                                            {portfolio.technology}</p>
                                        </Card.Text>
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
