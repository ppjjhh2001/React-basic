import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from './CustomerDelete'

const Customer = ({
  name,
  id,
  image,
  birthday,
  gender,
  job,
  loadData
}) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell><img src={image} alt="profile" /></TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
      <TableCell><CustomerDelete loadData={loadData} id={id} /></TableCell>
    </TableRow>
  )
}
export default Customer