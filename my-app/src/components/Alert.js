import React from 'react'



export default function Alert(props) {

//   const capitalize = (word) => {
//         const lower = word.toLowerCase();
//         return (lower.slice(1)=lower.charAt(0).toUpperCase() );
//        }
  return (
    props.alert.type && <div class={`alert alert-${props.alert.type} alert-dismissible fade show" role="alert`}>
    <strong>{props.alert.type}</strong> :{props.alert.msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )

}
