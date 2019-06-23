import React, { Component } from 'react';
// import down from '../images/down.png';
import '../App.css';
// import air from '../images/air.png';
// import mic from '../images/mic.png';
// import ul from '../images/ul.png';
// import zen from '../images/zen.png';
// import GE from '../images/GE.png';
import web from '../images/web.jpg';
import mobile from '../images/mobile.png';
import des from '../images/des.png';
import writer from '../images/writer.png';
import vir from '../images/vir.png';
import coustomer from '../images/coustomer.jpg';
import sale from '../images/sale.jpg';
import acc from '../images/acc.png';
import How_its_works from '../compnents/how_its_works.js';
import '../App.css';
import { Link } from "react-router-dom";



class Content extends Component {
    render() {
        return(
  
    
    <div  className="row">

{/* <div className="col s3 bor">
<h5 className="bor">Hire for any scope<br /> of work:</h5>
</div> */}

 <div classNmae="row white ">
    <div className="col s12 m3">
      <div className="card-panel  blue">
        <span className="white-text"><h5><br/><br/>Hire for any scope</h5></span>
      </div>
    </div>
  
    <div className="col s12 m3">
      <div className="card-panel blue">
        <span className="white-text"><h5>Short-term tasks</h5>
<p>Build a pool of diverse experts for <br /> one-off tasks</p></span>
      </div>
    </div>
  

{/* <div className="col s3 bor">
  <h5>Short-term tasks</h5>
<p>Build a pool of diverse experts for <br /> one-off tasks</p>
</div> */}

<div className="col s12 m3">
      <div className="card-panel blue">
        <span className="white-text"><h5>Recurring projects</h5>
<p>Have a go-to team with <br /> specialized skills</p></span>
      </div>
    </div>


{/* <div className="col s3 bor">
<h5>Recurring projects</h5>
<p>Have a go-to team with <br /> specialized skills</p>
</div> */}
{/* <div className="col s3 ">
<h5>Full-time contract work</h5>
<p>Expand your staff with a <br />  dedicated team</p>
</div>
</div> */}

<div className="col s12 m3">
      <div className="card-panel blue">
        <span className="white-text"><h5>Full-time contract work</h5>
<p>Expand your staff with a <br />  dedicated team</p></span>
      </div>
    
  </div>
  </div>
  <div className="container ">
<div className="algin center " >
    <h2>Build a pool of trusted experts for your team</h2>
</div>
</div>

<div>
<div className="row blue lighten-4">
<div id="space"  className="card col s12 m3  light-blue lighten-3 ">
    <div className="card-image waves-effect waves-block waves-light  ">
    <img src={mobile}  alt="pic here"/>
    </div>
    <div className="card-content ">
      <span className="card-title activator "> Mobile Developers <i className="material-icons right">more_vert</i></span>
      <p><a href="content.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal  light-blue lighten-3">
      <span className="card-title grey-text text-darken-4 ">Mobile Developers <i className="material-icons right">close</i></span>
      <p>iOS App Developer <br />  Android Developer <br /> UI/UX <br /> Designer</p>
    </div>
  </div>
{/* <div className="col m1">
</div> */}
  <div id="space" className="card col s12 m3  light-blue lighten-3 ">
    <div className="card-image waves-effect waves-block waves-light  ">
    <img src={web} alt="pic here" />
    </div>
    <div className="card-content">
      <span className="card-title activator "> web Developer  <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal  light-blue lighten-3">
      <span className="card-title grey-text text-darken-4 ">web Developer  <i className="material-icons right">close</i></span>
      <p>Fornt End Developers<br />  Back end Developer <br /> Software Progamming</p>
    </div>
  </div>

  {/* <div className="col m1">
</div> */}

  <div id="space"  className="card col s12 m3  light-blue lighten-3">
    <div className="card-image waves-effect waves-block waves-light ">
    <img src={des} alt="pic here" />
    </div>
    <div className="card-content">
      <span className="card-title activator "> Design & Creative  <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal  light-blue lighten-3">
      <span className="card-title grey-text text-darken-4 ">Design & Creative <i className="material-icons right">close</i></span>
      <p >Blog Writer  <br />   Content Writer <br /> Copy Wrtie</p>
    </div>
  </div>
  {/* <div className="col m1">
</div> */}

  <div id="space" className="card col s12 m3 light-blue lighten-3 ">
    <div className="card-image waves-effect waves-block waves-light  ">
    <img src={writer} alt="pic here" />
    </div>
    <div className="card-content">
      <span className="card-title activator "> Writer <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal light-blue lighten-3">
      <span className="card-title grey-text text-darken-4 ">Writer  <i className="material-icons right">close</i></span>
      <p>Blog Writer <br /> Content Writer <br /> Copy Wrtie </p>
    </div>
  </div>
  {/* <div className="col m1">
</div> */}
  {/* <second line of card> */}
  <div id="space" className="card col s12 m3 light-blue lighten-3 ">
    <div className="card-image waves-effect waves-block waves-light  ">
    <img src={vir} alt="pic here" />
    </div>
    <div className="card-content">
      <span className="card-title activator "> Virtual Assistants <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect  btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal blue-grey darken-1">
      <span className="card-title light-blue lighten-3 ">Virtual Assistants <i className="material-icons right">close</i></span>
      <p>Personal Assistants<br />  Transcriptionists <br /> web Researchers </p>
    </div>
  </div>
  {/* <div className="col m1">
</div> */}

  <div id="space" className="card col s12 m3 light-blue lighten-3">
    <div className="card-image waves-effect waves-block waves-light  ">
    <img src={coustomer} alt="pic here" />
    </div>
    <div className="card-content">
      <span className="card-title activator "> Customer Service Agents <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal light-blue lighten-3">
      <span className="card-title light-blue lighten-3"> Customer Service Agents  <i className="material-icons right">close</i></span>
      <p>SEO Specialists <br />  Email Support Experts <br /> Live Chart Support Pros </p>
    </div>
  </div>
  {/* <div className="col m1">
</div> */}


  <div id="space" className="card col s12 m3 light-blue lighten-3">
    <div className="card-image waves-effect waves-block waves-light ">
    <img src={sale} alt="pic here" />
    </div>
    <div className="card-content">
      <span className="card-title activator "> Sale & Marketing Experts <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal blue">
      <span className="card-title light-blue lighten-3 "><h4>Design & Creative</h4> <i className="material-icons right">close</i></span>
      <p >SEO Specialists  <br />  Email Aoutmators  <br /> Marketing Experts</p>
    </div>
  </div>
  {/* <div className="col m1">
</div> */}

  <div id="space" className="card col s12 m3 light-blue lighten-3 ">
    <div className="card-image waves-effect waves-block waves-light  ">
    <img src={acc} alt="pic here" />
    </div>
    <div>
    <div className="card-content">
      <span className="card-title activator ">Accountants <i className="material-icons right">more_vert</i></span>
      <p><a href="app.js" className="waves-effect btn light-blue darken-3">See More</a></p>
    </div>
    <div className="card-reveal  blue">
      <span className="card-title light-blue lighten-3 "><h4>Accountants & Consulatants</h4> <i className="material-icons right">close</i></span>
      <h5>Tax Accountants <br />  Book Keepers <br /> Financial Modelers</h5>
    </div>
    </div>
  </div>
  </div>
  </div>
  <br/>
  {/* center button */}

  <div className="algin center ">
  <a href="app.js" className="waves-effect blue waves-light btn-large center-align">See All Categories</a>
  </div>

<How_its_works />

<div>
<h4>Top skills</h4>
</div>
<div className="row">
<div className="col s3">
<ul>
<li><Link to="/Android_Developer">Android Developer</Link></li>
{/* <li><a href="app.js">Android Developer</a></li> */}
<li><Link to="/Customer_Service_Representative">Customer Service Representative</Link></li>
{/* <li><a href="app.js">Front-End Developer</a></li>
<li><a href="app.js">iOS Developer</a></li>
<li><a href="app.js">Mobile App Developer</a></li>
<li><a href="app.js">Sales Consultant</a></li>
<li><a href="app.js">Software Engineer</a></li>
<li><a href="app.js">Virtual Assistant</a></li> */}
</ul>
</div>

<div className="col s3">
<ul>
<li><Link to="/Bookkeeper">Bookkeeper</Link></li>
<li><Link to="/Database_Administrator">Database Administrator</Link></li>
{/* <li><a href="app.js">Game Developer</a></li>
<li><a href="app.js">Java Developer</a></li>
<li><a href="app.js">PHP Developer</a></li>
<li><a href="app.js">SEO Expert</a></li>
<li><a href="app.js">Technical Writer</a></li>
<li><a href="app.js">Web Designer</a></li> */}
</ul>
</div>

<div className="col s3">
<ul>
<li><Link to="/Content_Writer">Content Writer</Link></li>
<li><Link to="/Data_Scientist">Data Scientist</Link></li>
{/* <li><a href="app.js">Graphic Designer</a></li>
<li><a href="app.js">JavaScript Developer</a></li>
<li><a href="app.js">Python Developer</a></li>
<li><a href="app.js">Social Media Manager</a></li>
<li><a href="app.js">UI Designer</a></li>
<li><a href="app.js">Wordpress Developer</a></li> */}
</ul>
</div>
<div className="col s3">
<ul>
<li><Link to="/Copywriter">Copywriter</Link></li>
<li><Link to="/Facebook_Developer">Facebook Developer</Link></li>

{/* <li><a href="app.js">Information Security Analyst</a></li>
<li><a href="app.js">Logo Designer</a></li>
<li><a href="app.js">Resume Writer</a></li>
<li><a href="app.js">Software Developer</a></li>
<li><a href="app.js">UX Designer</a></li>
<li><a href="app.js">Writer</a></li> */}
</ul>
</div>
</div>

<div>
    <h4>Trending skills</h4>
</div>
<div className="row">
<div className="col s3">
<ul>
<li><Link to="/Apple_UIKit">Apple UIKit</Link></li>
<li><Link to="/Blockchain">Blockchain</Link></li>
   
    {/* <li><a href="app.js">GitLab</a></li>
    <li><a href="app.js">Node.js</a></li>
    <li><a href="app.js">Scala development</a></li>
    <li><a href="app.js">Scala development</a></li>
    <li><a href="app.js">Social customer service</a></li>
    <li><a href="app.js">Proposal writing</a></li> */}
</ul>
</div>

<div className="col s3">
<ul>
<li><Link to="/Apple_Xcode">Apple Xcode</Link></li>
<li><Link to="/BlocCustomer_retentionkchain">Customer retention</Link></li>
    {/* <li><a href="app.js">Go development</a></li>
    <li><a href="app.js">Product photography</a></li>
    <li><a href="app.js">SCORM</a></li>
    <li><a href="app.js">iPhone UI design</a></li>
    <li><a href="app.js">HR consulting</a></li>
    <li><a href="app.js">Vuforia</a></li> */}
</ul>
</div>

<div className="col s3">
<ul>
<li><Link to="/Articulate_storyline">Articulate storyline</Link></li>
<li><Link to="/eLearning">eLearning</Link></li>
   
    {/* <li><a href="app.js">Google App Engine API</a></li>
    <li><a href="app.js">Rapid prototyping</a></li>
    <li><a href="app.js">Tensorflow</a></li>
    <li><a href="app.js">Genetic algorithms</a></li>
    <li><a href="app.js">Oculus Rift</a></li>
    <li><a href="app.js">Instructional design</a></li> */}
</ul>
</div>

<div className="col s3">
<ul>
<li><Link to="/Atlassian_Confluence">Atlassian Confluence</Link></li>
<li><Link to="/Enterprise_architecture">Enterprise architecture</Link></li>
    {/* <li><a href="app.js">Google Cloud Platform</a></li>
    <li><a href="app.js">Risk management</a></li>
    <li><a href="app.js">Volusion</a></li>
    <li><a href="app.js">Vue.js</a></li>
    <li><a href="app.js">Microsoft Power BI</a></li>
    <li><a href="app.js">React.js</a></li> */}
</ul>
</div>
</div>

<div className="algin center">
  <a href="app.js" className="waves-effect blue waves-light btn-large center-align">Browse All skills</a>
  </div>

    </div>

        );

}
}

export default Content;