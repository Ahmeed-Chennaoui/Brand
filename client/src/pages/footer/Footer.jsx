import { Icon } from "@iconify/react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import "./Footer.scss"

function SocialIcons() {
  return (
    <div className="icons">
     <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
      </div>
      
  )
}


export default function Footer() {
  return (
    <div className="styledfooter">
      <div className='Container'>
        <br/><br/><h2 className="brand">Brand</h2><br/>
        <div className="Flex">
          <ul className="first">
            <li>
              Ce site permet d'offrir des services quotidiens et faciliter la vie.
            </li><br/><br/>
            <li>+216 52 902 018</li><br/><br/>
            <li>perfecto@Brand.com</li>
          </ul>
          <ul className="second">
            <li>About Us</li><br/>
            <li>What We Do</li><br/>
            <li>FAQ</li>
          </ul>

          <ul className="third">
            <li>Career</li><br/>
            <li>Blog</li><br/>
            <li>Contact Us</li>
          </ul>

          <div className="fourth"> <SocialIcons /> </div>
        </div>
         <br/>
        <p className="copy">&copy; 2022 Brand. All rights reserved</p>
      </div>
   </div>
        
  )
}
