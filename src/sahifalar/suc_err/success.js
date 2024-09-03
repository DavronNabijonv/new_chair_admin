import React, { useContext } from "react";
import { ResponseMessage } from "../../App";
import "./suc_err.scss";

export default function Success() {
  const { res_message } = useContext(ResponseMessage);
  return <div className="success_div">{res_message}</div>;
}
