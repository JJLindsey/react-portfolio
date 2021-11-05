(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/StateArtScreen.d91f4375.png"},47:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/brewed-force.42d32403.png"},48:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/budget.fc6f236c.png"},49:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/TeamProf.0a9af7b0.png"},50:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/screenshot.f177c6a7.png"},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(11),r=c.n(s),a=(c(38),c(14)),l=c(2);var o=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("div",{className:"bg"}),Object(l.jsxs)("div",{className:"text",children:["jennifer lindsey",Object(l.jsx)("h1",{children:"web developer"})]})]})})})},d=c.p+"static/media/cartoonJenn2.455b0a67.jpg";c(40);var j=function(){return Object(l.jsx)("div",{className:"container-fluid mx-auto",id:"about",children:Object(l.jsxs)("row",{children:[Object(l.jsx)("h1",{children:"About Me"}),Object(l.jsx)("img",{className:"img-about",src:d,alt:"avatar of Jennifer"}),Object(l.jsx)("p",{id:"about-info",children:"I am a Full Stack Web Developer with a background in Art & Design and a dedication to life-long learning. I decided to enroll in a coding bootcamp after getting hooked on coding. Effective at combining creativity and problem solving to develop user-friendly applications. My previous experience in the art world provided me with the tools to create and deliver materials that are accessible to all audiences."})]})})},h=c(58),b=c(55),u=c(60),m=c.p+"static/media/JLlogo.dbae69f3.svg";c(23);var x=function(e){return Object(l.jsx)(h.a,{collapseOnSelect:!0,expand:"lg",bg:"black",variant:"dark",children:Object(l.jsxs)(b.a,{children:[Object(l.jsxs)(h.a.Brand,{href:"#home",children:[Object(l.jsx)("img",{alt:"",src:m,width:"30",height:"30",className:"d-inline-block align-top"})," ","Jennifer Lindsey"]}),Object(l.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsx)(h.a.Collapse,{id:"responsive-navbar-nav",children:Object(l.jsxs)(u.a,{className:"mr-auto",children:[Object(l.jsx)(u.a.Link,{onClick:function(){return e.handlePageChange("Home")},href:"#home",children:"Home"}),Object(l.jsx)(u.a.Link,{onClick:function(){return e.handlePageChange("About")},href:"#about",children:"About"}),Object(l.jsx)(u.a.Link,{onClick:function(){return e.handlePageChange("Projects")},href:"#projects",children:"Projects"}),Object(l.jsx)(u.a.Link,{onClick:function(){return e.handlePageChange("Contact")},href:"#contact",children:"Contact"}),Object(l.jsx)(u.a.Link,{onClick:function(){return e.handlePageChange("Resume")},href:"#resume",children:"Resume"})]})})]})})},p=c(30),O=c(59),g=c(56);c(44);var f=function(e){var t=Object(n.useState)({name:"",email:"",message:""}),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),o=Object(a.a)(r,2),d=o[0],j=o[1],h=i.name,u=i.email,m=i.message,x=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."))};return Object(l.jsx)(b.a,{children:Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsx)("h1",{className:"text-center",children:" Contact Me "}),Object(l.jsx)("row",{children:Object(l.jsxs)(O.a,{id:"contact-info",onSubmit:function(e){e.preventDefault(),d||(s(Object(p.a)({},e.target.name,e.target.value)),console.log("Form",i))},children:[Object(l.jsxs)(O.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(l.jsx)(O.a.Label,{children:"Name"}),Object(l.jsx)(O.a.Control,{type:"text",name:"name",placeholder:"name",defaultValue:h,onBlur:x})]}),Object(l.jsxs)(O.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(l.jsx)(O.a.Label,{children:"Email Address"}),Object(l.jsx)(O.a.Control,{type:"email",name:"email",placeholder:"name@example.com",defaultValue:u,onBlur:x})]}),Object(l.jsxs)(O.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(l.jsx)(O.a.Label,{children:"Message"}),Object(l.jsx)(O.a.Control,{as:"textarea",name:"message",rows:3,defaultValue:m,onBlur:x})]}),Object(l.jsx)(g.a,{variant:"secondary",type:"submit",children:"Submit"})]})})]})})},v=c(57),y=c(31),k=c(61),w=c(13);c(45);var N=function(){var e=[{name:"State of the Art",description:"A full stack application that will allow museum curators to locate works of art globally.",technology:"JS, Node, MySQL, Boostrap, Handlebars.js",img:c(46).default,github:"https://github.com/JJLindsey/ArtFiles2",deployed:"https://state-of-art.herokuapp.com/"},{name:"Brewed Force",description:"A website designed to unite the beer minded traveler with new breweries and beers in new cities. Search feature returns lists of breweries.",technology:"JS, HTML5, JQuery, Material Design Lite",img:c(47).default,github:"https://github.com/JJLindsey/brewed-force",deployed:"https://takes101.github.io/globe-trotting-and-bar-hopping/"},{name:"Budget Tracker",description:"Progressive Web App (PAW).The user can add expenses/deposits to their budget with or without a connection.",technology:"JS, Express, MONGODB, HTML, CSS",img:c(48).default,github:"https://github.com/JJLindsey/budget-tracker",deployed:" https://budget-trackerjl.herokuapp.com/"},{name:"Team Profile Generator",description:"This application allows the user to generate a team profile based on input using Node.js. Dynamically generate HTML to build your Team profile.",technology:"JS, Node, HTML, Boostrap",img:c(49).default,github:"https://github.com/JJLindsey/Team-profile",deployed:""},{name:"One Stop Print Shop",description:"Full Stack E-commerce store with Stripe payment.",technology:"MONGODB, React, Express, Node, Bootstrap, Stripe API",img:c(50).default,github:"https://github.com/JJLindsey/One-Stop-Print-Shop",deployed:"https://one-stop-print-shop.herokuapp.com/"}];return Object(l.jsxs)(b.a,{id:"projects",fluid:!0,children:[Object(l.jsx)("div",{className:"flex flex-col w-full mb-10",children:Object(l.jsx)("h3",{className:"title-font mb-4 text-white",children:"Apps I have Built"})}),Object(l.jsx)(v.a,{className:"proj-card",children:e.map((function(e){return Object(l.jsx)(y.a,{children:Object(l.jsx)(k.a,{style:{width:"16rem"},children:Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Img,{variant:"top",src:e.img,fluid:!0}),Object(l.jsx)(k.a.Title,{children:e.name}),Object(l.jsxs)(k.a.Text,{children:[e.description,e.technology]}),Object(l.jsxs)("a",{id:"git",href:e.github,target:"_blank",rel:"noreferrer",children:[" ",Object(l.jsx)(w.a,{})," "]}),Object(l.jsx)(g.a,{variant:"info",href:e.deployed,target:"_blank",children:"App"})]})})})}))})]})},S=c(32),A=(c(51),function(){return Object(l.jsx)("div",{className:"footer-container",id:"socicon",children:Object(l.jsxs)("section",{className:"footer-info",children:[Object(l.jsx)("a",{href:"https://github.com/JJLindsey",target:"_blank",rel:"noopener noreferrer",alt:"GitHub profile link",children:Object(l.jsx)(w.a,{})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/jennifer-lindsey010",target:"_blank",rel:"noopener noreferrer",alt:"Linked In profile link",children:Object(l.jsx)(w.b,{})}),Object(l.jsx)("a",{href:"mailto:jlindsey010@gmail.com",target:"_blank",rel:"noopener noreferrer",alt:"email link",children:Object(l.jsx)(S.a,{})})]})})}),L=c(26),C=c(15),J=c(33),M=(c(52),function(){return Object(l.jsx)("div",{className:"container-resume text-center",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsxs)("div",{className:"title text-center",children:[Object(l.jsxs)("h3",{children:[" ",Object(l.jsx)(L.a,{})," Resume ",Object(l.jsx)(L.b,{})]}),Object(l.jsx)("h3",{children:"Jennifer Lindsey"}),Object(l.jsx)("h4",{children:"Front End Developer"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("ul",{className:"list-inline",children:[Object(l.jsx)("li",{children:Object(l.jsx)(J.a,{})}),Object(l.jsx)("li",{children:Object(l.jsx)(C.b,{})}),Object(l.jsx)("li",{children:Object(l.jsx)(C.c,{})}),Object(l.jsx)("li",{children:Object(l.jsx)(C.a,{})}),Object(l.jsx)("li",{children:Object(l.jsx)(C.d,{})})]})]}),Object(l.jsxs)("div",{className:"summary",children:[Object(l.jsx)("h4",{className:"text-center",children:"Summary"}),Object(l.jsx)("p",{children:"A front end developer with experience in design. Looking for challenging roles in web and mobile industry to enhance my skills and provide my services to add value to the products of the organization. Highly motivated self learner with a passion for learning the latest in technology."})]}),Object(l.jsxs)("div",{className:"skill-row",children:[Object(l.jsxs)("ul",{className:"skill-row",children:[Object(l.jsx)("li",{children:"Critical Thinking"}),Object(l.jsx)("li",{children:"Project Management"}),Object(l.jsx)("li",{children:"Presentations & Public Speaking"}),Object(l.jsx)("li",{children:"Design"})]}),Object(l.jsxs)("ul",{className:"skill-row",children:[Object(l.jsx)("li",{children:"Agile Develoliment"}),Object(l.jsx)("li",{children:"Attention to Detail"}),Object(l.jsx)("li",{children:"Time Management"}),Object(l.jsx)("li",{children:"Frontend Development"})]})]})]}),Object(l.jsxs)("div",{class:"work-experience",children:[Object(l.jsx)("h4",{class:"text-center",children:"Experience"}),Object(l.jsxs)("div",{class:"experience-title",children:[Object(l.jsxs)("div",{class:"col-exp",children:[Object(l.jsx)("h6",{children:"Vanderbilt Fullstack Coding Bootcamp"}),Object(l.jsx)("h6",{children:"Vanderbilt University"})]}),Object(l.jsx)("h6",{children:"April 2021 - Sep 2021"})]}),Object(l.jsx)("div",{class:"experience-summary",children:Object(l.jsx)("div",{class:"col-md-12",children:Object(l.jsx)("p",{children:"24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, GraphQL & ReactJS."})})}),Object(l.jsxs)("div",{class:"experience-title",children:[Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("h6",{children:"Kimbell Art Museum"}),Object(l.jsx)("h6",{children:"Museum Educator"})]}),Object(l.jsx)("h6",{children:"2019 - 2020"})]}),Object(l.jsx)("div",{class:"experience-summary",children:Object(l.jsx)("div",{class:"col-md-12",children:Object(l.jsx)("p",{children:"Work collaboratively with fellow museum educators to create and present interactive gallery & studio art programs using the elements & principles of art. Modeled critical thinking to connect audiences to works of art within the permanent collection. Researched artworks within collection to keep lessons within cultural & historical context."})})}),Object(l.jsxs)("div",{class:"experience-title",children:[Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("h6",{children:"Mindful Pose"}),Object(l.jsx)("h6",{children:"Yoga & Meditation Instructor"})]}),Object(l.jsx)("h6",{children:"2012 - present"})]}),Object(l.jsx)("div",{class:"experience-summary",children:Object(l.jsx)("div",{class:"col-md-12",children:Object(l.jsx)("p",{children:"Teaching hatha yoga, mindful flow, yoga nidra and meditation classes in corporate and private sessions. Providing a safe & supportive environment for all levels of practitioners."})})}),Object(l.jsxs)("div",{class:"experience-title",children:[Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("h6",{children:"Southern New Hampshire University"}),Object(l.jsx)("h6",{children:"Adjunct Art History Pofessor"})]}),Object(l.jsx)("h6",{children:"2013 - 2015"})]}),Object(l.jsx)("div",{class:"experience-summary",children:Object(l.jsx)("div",{class:"col-md-12",children:Object(l.jsx)("p",{children:"Taught Modern Art, Art History and Art Appreciation courses in an online environment, engaging students through discussion board and article reflections, & journals."})})})]}),Object(l.jsxs)("div",{class:"education",children:[Object(l.jsx)("h6",{class:"text-center",children:"Education"}),Object(l.jsx)("div",{class:"education-title",children:Object(l.jsxs)("div",{class:"col-ed",children:[Object(l.jsx)("p",{children:"The Courtauld Institute of Art"}),Object(l.jsx)("p",{children:"MA - Art History"})]})}),Object(l.jsxs)("div",{class:"col-ed",children:[Object(l.jsx)("p",{children:"The University of Texas, Arlington"}),Object(l.jsx)("p",{children:"BA - Art History"})]})]})]})})});var P=function(){var e=Object(n.useState)("Home"),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{currentPage:c,handlePageChange:i}),Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"section",children:[function(){switch(c){case"Home":return Object(l.jsx)(o,{});case"Resume":return Object(l.jsx)(M,{});case"Projects":return Object(l.jsx)(N,{});case"Contact":return Object(l.jsx)(f,{});default:return Object(l.jsx)(j,{})}}()," "]})}),Object(l.jsx)(A,{})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.56b61200.chunk.js.map