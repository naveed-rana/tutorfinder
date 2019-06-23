import React,{Component} from 'react';
import post from '../images/post.PNG'
import free from '../images/free.PNG'
import call from '../images/call.PNG'
import pay from '../images/pay.PNG';

class How_its_works extends Component{
render() {
    return(
        <div>
            <div>
<h3 className="algin center">How it works</h3>
<div className="row blue">
<div className="col s3 algin center">
       <img src={post} alt="pic here"/>
        <h6>Post a job (it’s free)</h6>
        <p>Tell us about your project. Upwork connects you with top talent around the world, or near you.</p>
      </div>
      <div className="col s3 align center">
      <img src={free} alt="pic here"/>
       <h6>Freelancers come to you</h6>
       <p>Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.</p>
      </div>
      <div className="col s3 align center">
      <img src={call} alt="pic here"/>
        <h6>Collaborate easily</h6>
        <p>Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile</p>
      </div>
      <div className="col s3 align center">
      <img src={pay} alt="pic here"/>
        <h6>Payment simplified</h6>
        <p>Pay hourly or fixed-price and receive invoices through Upwork. Only pay for work you authorize.</p>
        </div>
        </div>
        </div>
        </div>

    );
}
}

export default  How_its_works;