import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <h2>Brand</h2>

        <Flex>
          <ul>
            <li>
              Ce site permet d'offrir des services quotidiens et faciliter la vie.
            </li>
            <li>+216 52 902 018</li>
            <li>perfecto@Brand.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Brand. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
