import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from './styles/Flex.styled';
import { Button } from "./styles/Button.styled";
import Huddle from '../images/logo.svg';
import MockUp from '../images/illustration-mockups.svg';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={Huddle} alt="" />
          <Button>Try it Free!</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the community your fans will love.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga. </p>
            <Button bg="#ff0099" color="#fff">Get Started For Free</Button>
          </div>
          <Image src={MockUp} alt="MockUp" />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
