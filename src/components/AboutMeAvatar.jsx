import AvatarImg from '../img/photo-avatar.jpg';
import { Image, Row } from "react-bootstrap"

const AboutMeAvatar = () => {
  return (
    <Row className='pt-5 justify-content-center'>
      <Image className='about_me_avatar' src={AvatarImg}/>
    </Row>
  )
}

export default AboutMeAvatar;