const KeySkills = ({ skills }) => {
  return (
    <p className='d-flex justify-content-center'>
      {
        skills.map((skill, index) => <span key={index} className='skill pl-3 pr-3 pt-1 pb-1 p m-2'>{skill}</span>)
      }
    </p>
  )
}

export default KeySkills;