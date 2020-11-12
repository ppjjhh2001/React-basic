import React from 'react'

const Customer = ({
  name,
  id,
  image,
  birthday,
  gender,
  job
}) => {
  return (
    <div>
      <CustomerProfile image={image} id={id} name={name}/>
      <CustomerInfo birthday={birthday} gender={gender} job={job}/>
    </div>
  )
}
const CustomerProfile = ({image, id, name}) => {
  return (
    <div>
      <img src = {image} alt="profile" />
      <h2>{name}({id})</h2>
    </div>
  )
}
const CustomerInfo = ({birthday, gender, job}) => {

  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  )
}
export default Customer