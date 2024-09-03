import React, { useContext } from 'react'
import { ResponseMessage } from '../../App'
import './suc_err.scss';

export default function Error_res() {
    const {res_message} = useContext(ResponseMessage)
  return (
    <div className='error_div'>{res_message}</div>
  )
}
