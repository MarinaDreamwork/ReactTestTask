import { Container } from "react-bootstrap";
import AboutMeAvatar from "./AboutMeAvatar";
import AboutMeText from "./AboutMeText";

const AboutMe = () => {
  return (
    <Container className='mt-3 about_me_container'>
      <AboutMeAvatar />
      <AboutMeText />
    </Container>
  )
}

export default AboutMe;