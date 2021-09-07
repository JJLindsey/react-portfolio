import React from 'react'
import { BiCode, BiCodeAlt } from 'react-icons/bi'
import { VscMilestone } from 'react-icons/vsc'

const Resume = () => {
    return (
        <container class='container-fluid' class='resume'>
            <div id='resume'>
                <h1> <BiCode/> Resume <BiCodeAlt/></h1>
                <h3> Jennifer Lindsey </h3>
                    <section id='resume-info'>
                    <p>Front End Web Developer with a background in Art and a dedication to life-long learning. Effective at combining creativity and problem solving to develop user-friendly applications. Experience in collaborating to create and deliver materials that are accessible to all audiences.
                    </p>
                    </section>
                <h4><VscMilestone/> Technical Skills</h4>
                <h4>Front End</h4>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                <h4>Back End</h4>
                    <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoos</li>
                        <li>GraphQL</li>
                    </ul>
                <h4>Education</h4>
                <section id='resume-ed'>
                Vanderbilt University Bootcamp Certificate
                <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js, GraphQL & ReactJS.
                </p>
                <p>MA Art History - Courtauld Institute of Art, London, England</p>
                <p>BA Art History - University of Texas, Arlington</p>
                </section>
            </div>
        </container>
    )
}

export default Resume
