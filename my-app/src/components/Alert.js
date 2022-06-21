import React from 'react'



export default function Alert(props) {

  // const capitalize = (word) => {
  //       const lower = word.toLowerCase();
  //       return (lower.slice(1)=lower.charAt(0).toUpperCase() );
  //      }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> :{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>}   {/* this is the standred method to denote */}
  </div>
  )

}
