import React, { Component } from 'react';


class Footer extends Component{
render(){
    return(
      <footer class="page-footer  blue ">
      <div class="container">
      <h6>Looking to hire for long-term or full-time assignments? See how getwork Payroll simplifies admin.
COMPANY</h6><hr/>
<div className="row">
<div className="col m6 s12">
<h5>COMPANY</h5>
<ul>
<li><a href="app.js"  className="white-text">About Us</a></li>
<li><a href="app.js"  className="white-text">Investor Relations</a></li>
<li><a href="app.js" className="white-text">Careers</a></li>
<li><a href="app.js" className="white-text">Press</a></li>
<li><a href="app.js" className="white-text">Trust & Safety</a></li>
<li><a href="app.js" className="white-text">Terms of Service</a></li>
<li><a href="app.js" className="white-text">Privacy Policy</a></li>
</ul>
</div>
<div className="col m6 s12">
<h5>RESOURCES</h5>
<ul>
<li><a href="app.js" className="white-text" >Customer Support</a></li>
<li><a href="app.js" className="white-text">Hiring Headquarters</a></li>
<li><a href="app.js" className="white-text">Hiring Resources</a></li>
<li><a href="app.js"  className="white-text">Upwork Blog</a></li>
<li><a href="app.js"  className="white-text">Customer Stories</a></li>
<li><a href="app.js"  className="white-text">Business Resources</a></li>
<li><a href="app.js" className="white-text">Payroll Services</a></li>
</ul>
</div>
        </div>
        <hr/>
        <i class="material-icons">call</i>
         <i class="material-icons">email</i>
      <hr/>
      </div>
      
      <div class="footer-copyright">
        <div class="container">
        © 2019 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
    );

}
}

export default Footer;