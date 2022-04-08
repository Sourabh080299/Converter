import React from "react";
import './footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const ContactUs=()=>{
    return(
        <div className="footer">
       
            <div class="subcription">
                    <h3>Subscribe for top stories, new launches & expert reviews!</h3>
                    <h3 id="subafter">Subscribe for top stories!</h3>
                        <ul>
                            <li className="email"><input type="text" placeholder="Enter Your Email" /><ThumbUpIcon></ThumbUpIcon></li>
                            <li><a href="https://twitter.com/Sourabh59638606" ><TwitterIcon></TwitterIcon></a></li>
                            <li><a href="https://www.instagram.com/sourabh_patel0802/" ><InstagramIcon></InstagramIcon></a></li>
                            <li><a href="https://www.linkedin.com/in/sourabh-patel-79bb7a205"><LinkedInIcon></LinkedInIcon></a></li>
                            <li><a href="https://www.facebook.com/sourabh.patel.313924/" ><FacebookIcon></FacebookIcon></a></li>
                            <li><a href="https://www.google.com" ><GoogleIcon></GoogleIcon></a></li>
                            <li><a href="https://github.com/Sourabh080299" ><GitHubIcon></GitHubIcon></a></li>            
                            <li><a href="https://youtube.com" ><YouTubeIcon></YouTubeIcon></a></li>   
                        </ul>
            </div>
            <div className="emailcontainer">
                <li id="email"><input type="text" placeholder="Enter Email for  Notifications" /></li>
            </div>
            
            <div className="footercontent">
                    <div className="footeritem">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Booking Terms</li>
                            <li>Terms & Conditons</li>
                            <li>Cookie Policy</li>
                            <li>Our Client</li>
                            <li>Why US</li>
                            <li>Our Warranty</li>                     
                        </ul>
                    </div>
                    <div className="footeritem">
                        <h3>Brand</h3>
                        <ul>
                            <li>Samsung</li>
                            <li>Vivo</li>
                            <li>Iphone</li>
                            <li>OnePluse</li>
                            <li>Redmi</li>
                            <li>Realme</li>                     
                            <li>Huawei</li>                                          
                        </ul>
                    </div>
                    <div className="footeritem">
                        <h3>Go To</h3>
                        <ul>
                            <li>Home</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>About Us</li>
                            <li>offers</li>
                            <li>Feedback</li>                     
                        </ul>
                    </div>
                    <div className="footeritem">
                        <h3>Support</h3>
                        <ul>
                            <li>Contant US</li>
                            <li>Product FAQs</li>
                            <li>OnePluse</li>
                            <li>Redmi</li>
                            <li>Realme</li>                     
                        </ul>
                    </div>
            </div>
            <p style={{ color: "white",padding: "2px",borderTop:"2px solid rgb(75, 71, 71)"}}>CopyRight © 2021<br></br> Developed By SOURABH PATEL<br></br>All Right Reserved.</p>
   </div>
    )
}

export default ContactUs;