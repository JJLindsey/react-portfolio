import React from 'react'
//import { Container } from 'react-bootstrap'
import { BiCode, BiCodeAlt } from 'react-icons/bi'
//import { VscMilestone } from 'react-icons/vsc'

const Resume = () => {
    return (
                <div className="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="title text-center">
                                <h2> <BiCode/> Resume <BiCodeAlt/></h2>
                                <h1>Jennifer Lindsey</h1>
                                <h3>Front End Developer</h3>
                                <hr />
                                <ul class="list-inline">
                                    <li><i class="devicon-graphql-plain colored"></i></li>
                                    <li><i class="devicon-javascript-plain colored"></i></li>
                                    <li><i class="devicon-html5-plain colored"></i></li>
                                    <li><i class="devicon-bootstrap-plain-wordmark"></i></li>
                                    <li><i class="devicon-nodejs-plain"></i></li>
                                </ul>
                            </div>

                            <div class="summary">
                                <h2 class="text-center">Summary</h2>
                                <p>A front end developer with experience in design.
                                    Looking for challenging roles in web and mobile industry to enhance my skills and provide my
                                    services to add value to the products of the organization. Highly motivated self learner with a
                                    passion for learning the latest in technology.</p>

                                <div class="row">
                                    <div class="col-md-3 col-sm-3">
                                        <p>Critical Thinking</p>
                                        <p>Project Management</p>
                                        <p>Presentations & Public Speaking</p>
                                    </div>
                                    <div class="col-md-3 col-sm-3">
                                        <p>Development</p>
                                        <p>Design</p>
                                        <p>Attention to Detail</p>
                                    </div>
                                    <div class="col-md-3 col-sm-3">
                                        <p>Agile Development</p>
                                        <p>Time Management</p>
                                        <p>Frontend Development</p>
                                    </div>
                                    <div class="col-md-3 col-sm-3">
                                        <p>Creativity</p>
                                        <p>Pair Programming</p>
                                        <p>Fullstack Development</p>
                                    </div>
                                </div>

                            </div>

                            <div class="work-experience">
                                <h2 class="text-center">Experience</h2>
                                <div class="row experience-title">
                                    <div class="col-md-9">
                                        <h3>Vanderbilt Fullstack Coding Bootcamp</h3>
                                        <h4>Vanderbilt University</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>April 2021 - Sep 2021</h3>
                                    </div>
                                </div>
                                <div class="row experience-summary">
                                    <div class="col-md-12">
                                        <p>24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                                            JavaScript, jQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, GraphQL & ReactJS.
                                        </p>
                                    </div>
                                </div>

                                <div class="row experience-title">
                                    <div class="col-md-9">
                                        <h3>Kimbell Art Museum</h3>
                                        <h4>Museum Educator</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>2019 - 2020</h3>
                                    </div>
                                </div>
                                <div class="row experience-summary">
                                    <div class="col-md-12">
                                        <p>Work collaboratively with fellow museum educators to create and present interactive
                                            gallery & studio art programs using the elements & principles of art. Modeled critical
                                            thinking to connect audiences to works of art within the permanent collection.
                                            Researched artworks within collection to keep lessons within cultural & historical
                                            context.
                                        </p>
                                        <ul>
                                            <li>Skills: Adobe PhotoShop, Primary Research, Critical Thinking, Public Speaking,
                                                Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Resume
