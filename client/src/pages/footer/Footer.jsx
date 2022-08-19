import { Icon } from "@iconify/react";
import "./Footer.scss"

function SocialIcons() {
  return (
    <>
     <li>
        <a href='https://twitter.com'>
        <Icon icon="icon-park:twitter"></Icon>
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
        <Icon icon="logos:facebook"></Icon>
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
        <Icon icon="logos:linkedin-icon"></Icon>
        </a>
      </li>
    </>
      
  )
}


export default function Footer() {
  return (
  <>
  <center><div className="styledfooter">
      <h2 className="brand">Brand</h2>
      <center><table>
              <th className="first">
                <table >
                    <tr >
                       Ce site permet d'offrir des services quotidiens et faciliter la vie.
                    </tr>
                    <tr>+216 52 902 018</tr>
                    <tr>perfecto@Brand.com</tr>
                 </table>
              </th>
              <th className="second">
                <table >
                    <tr>  About Us </tr>
                    <tr>What We Do</tr>
                    <tr>FAQ</tr>
                 </table>
              </th>
              <th className="thrid">
                <table>
                    <tr> Career </tr>
                    <tr>Blog</tr>
                    <tr>Contact Us</tr>
                 </table>
              </th>
              <th>
                  <SocialIcons />
                  <p>&copy; 2022 Brand. All rights reserved</p>
              </th>
      </table>
      </center>
   </div></center>
  </>
        
  )
}
