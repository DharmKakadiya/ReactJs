import React, { useState } from 'react'

export default function TextForm(props) {
  
    const handleonchange=(event)=>{
        setText(event.target.value);
       
       
    }
    const handleupclick=()=>{
        console.log("clicked");
        
        setText(Text.toUpperCase()); 
        
    }
    const handlelwclick=()=>{
        console.log("clicked");
        
        setText(Text.toLowerCase()); 
        
    }
    const handleclearclick=()=>{
        setText("");
    }
  const[Text, setText]=useState("Enter The Text");
      
  return (    
    <>
    <div className='container' style={{backgroundColor: props.mode==='dark'?'grey':'dark'}}>
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={Text} onChange={handleonchange} 
       style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}
        id="exampleFormControlTextarea1" rows="10" 
        ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>upper</button>
        <button className="btn btn-primary mx-2" onClick={handlelwclick}>Lower</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear</button>
        
    </div>
        <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'dark'}}>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>My Text Summery</h1>
            <p style={{color: props.mode==='dark'?'white':'black'}}>
                {Text.length} characters  {Text.split(" ").length}  Words </p> <br/>
            <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
            <p style={{color: props.mode==='dark'?'white':'black'}}>{Text}</p>
        </div>
    </>
  )
}
