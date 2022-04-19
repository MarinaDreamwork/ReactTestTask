import Photo from '../img/photo-avatar.jpg';

const PersonalData = () => {
  return (
    <div className='personal-data p-3'>
      <img className='mb-3' src={Photo} width='55' height='90' alt='personal'/>
      <p>Marina Trushina</p>
      <p>silaevamo@gmail.com</p>
    </div>
  )
}

export default PersonalData;