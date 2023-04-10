import React from 'react'

function Alert(props) {
  return (    
    <div>
        <div className="alert alert-warning" role="alert" style={{backgroundColor: props.mode==='dark'?'white':'black',
        color: props.mode==='dark'?'black':'white'}}>
    {props.msg}
  </div>
    </div>
  )
    
}

export default Alert
