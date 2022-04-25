import { Row } from "react-bootstrap"
import KeySkills from "./KeySkills";

const AboutMeText = () => {
  const skills = ['React.js', 'Node.js', 'MongoDB', 'Английский язык'];
  return (
    <Row className='p-4'>
      <p>&#10077;</p>
      <div className='about_me_text text-center'>
        <p>Добрый день! Я пришла в область из бухгалтерии, ранее работала заместителем учетного центра. Около года назад приняла решение уйти в разработку и заниматься программированием на языке JavaScript, т.к. эта область оказалась для меня очень интересной и перспективной. Сейчас занимаюсь обучением fulltime, а также стараюсь участвовать в совместных проектах, чтобы почувствовать командный дух.</p>
        <p>Мои проекты можно посмотреть по ссылке: <a href='https://github.com/MarinaDreamwork'>мой GitHub-репозиторий</a>. Здесь находятся все проекты, которыми я занималась, некоторые еще в процессе разработки.</p>
        <p>Принимала участие в Хакатоне в качестве teamlead-a. В этом проекте я выполняла роль как code-reviewer, так и программиста. Этот проект также можно посмотреть на GitHub-репозитории: <a href='https://github.com/MarinaDreamwork/Hackathon'>Hackaton</a></p>
        <p>Язык Javascript выбрала потому, что этот язык очень гибкий с большими возможностями и низким порогом входа. Также мне интересно разрабатывать приложения не только на frontend, но и в перспективе освоить backend, чтобы со временем стать fullstack разработчиком.</p>
        <p>В свободное время отдыхаю с семьей и занимаюсь спортом.</p>
      </div>
      <p className='d-flex justify-content-end'>&#10078;</p>
      <KeySkills skills={skills}/>
      <div className='about_me_info text-center'>
        <p className='about_me_name text-success'>Трушина Марина Олеговна</p>
        <p>Junior Frontend Developer</p>
      </div>
    </Row>
  )
}

export default AboutMeText;