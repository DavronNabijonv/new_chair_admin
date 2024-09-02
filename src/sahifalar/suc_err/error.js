import React, { useContext } from 'react'
import { ResponseMessage } from '../../App'
import './suc_err.scss';

export default function Error() {
    const {res_message} = useContext(ResponseMessage)
  return (
    <div className='error'>{res_message}</div>
  )
}
