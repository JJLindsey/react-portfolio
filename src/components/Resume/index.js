import React from 'react'
//import { Container } from 'react-bootstrap'
import { BiCode, BiCodeAlt } from 'react-icons/bi'
//import { VscMilestone } from 'react-icons/vsc'
import { DiCss3, DiHtml5, DiJsBadge, DiBootstrap } from 'react-icons/di'
import { SiGraphql } from 'react-icons/si'
import './resume.css';

const Resume = () => {
    return (
                <div className="container-resume text-center">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h3> <BiCode/> Resume <BiCodeAlt/></h3>
                                <h3>Jennifer Lindsey</h3>
                                <h4>Front End Developer</h4>
                                <hr/>
                                <ul className="list-inline">
                                    <li><SiGraphql/></li>
                                    <li><DiCss3/></li>
                                    <li><DiHtml5/></li>
                                    <li><DiBootstrap/></li>
                                    <li><DiJsBadge/></li>
                                </ul>
                            </div>

                            <div className="summary">
                                <h4 className="text-center">Summary</h4>
                                <p>A front end developer with experience in design.
                                    Looking for challenging roles in web and mobile industry to enhance my skills and provide my
                                    services to add value to the products of the organization. Highly motivated self learner with a
                                    passion for learning the latest in technology.</p>
                            </div>
                            <div className='skill-row'>
                                <ul className="skill-row">
                                    <li>Critical Thinking</li>
                                    <li>Project Management</li>
                                    <li>Presentations & Public Speaking</li>
                                    <li>Design</li>
                                </ul>
                                <ul className="skill-row">
                                    <li>Agile Develoliment</li>
                                    <li>Attention to Detail</li>
                                    <li>Time Management</li>
                                    <li>Frontend Development</li>
                                </ul>
                            </div>

                        </div>

                            <div class="work-experience">
                                <h4 class="text-center">Experience</h4>
                                <div class="row experience-title">
                                    <div class="col-exp">
                                        <h6>Vanderbilt Fullstack Coding Bootcamp</h6>
                                        <h6>Vanderbilt University</h6>
                                    </div>
                                        <h6>April 2021 - Sep 2021</h6>
                                </div>
                                <div class="row experience-summary">
                                    <div class="col-md-12">
                                        <p>24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                                            JavaScript, jQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, GraphQL & ReactJS.
                                        </p>
                                    </div>
                                </div>

                                <div class="row experience-title">
                                    <div class="col">
                                        <h6>Kimbell Art Museum</h6>
                                        <h6>Museum Educator</h6>
                                    </div>
                                        <h6>2019 - 2020</h6>
                                </div>
                                <div class="row experience-summary">
                                    <div class="col-md-12">
                                        <p>Work collaboratively with fellow museum educators to create and present interactive
                                            gallery & studio art programs using the elements & principles of art. Modeled critical
                                            thinking to connect audiences to works of art within the permanent collection.
                                            Researched artworks within collection to keep lessons within cultural & historical
                                            context.
                                        </p>
                                    </div>
                                </div>
                                <div class="row experience-title">
                                    <div class="col">
                                        <h6>Mindful Pose</h6>
                                        <h6>Yoga & Meditation Instructor</h6>
                                    </div>
                                        <h6>2012 - present</h6>
                                </div>
                                <div class="row experience-summary">
                                    <div class="col-md-12">
                                        <p>Teaching hatha yoga, mindful flow, yoga nidra and meditation classes in corporate and private sessions. Providing a safe & supportive environment for all levels of practitioners.
                                        </p>
                                    </div>
                                </div>
                                <div class="row experience-title">
                                    <div class="col">
                                        <h6>Southern New Hampshire University</h6>
                                        <h6>Adjunct Art History Pofessor</h6>
                                    </div>
                                        <h6>2013 - 2015</h6>
                                </div>
                                <div class="row experience-summary">
                                    <div class="col-md-12">
                                        <p>Taught Modern Art, Art History and Art Appreciation courses in an online environment, engaging students through discussion board and article reflections, & journals.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="education">
                                <h6 class="text-center">Education</h6>
                                <div class="row education-title">
                                    <div class="col-ed">
                                        <p>The Courtauld Institute of Art</p>
                                        <p>MA - Art History</p>
                                    </div>
                                </div>
                                <div class="col-ed">
                                        <p>The University of Texas, Arlington</p>
                                        <p>BA - Art History</p>
                                </div>
                            </div>
                        </div>
                </div>
    )
}

export default Resume
