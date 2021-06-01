import React, { useEffect, useState } from 'react'
import './test.css';

function Test() {
    const [item,setItem] = useState('ramesh')
    const [click,setClick] = useState(0)
    const changeAddNameHandler = () =>{
        if(click==1){
            setClick(0)
        }
        else{
            setClick(1)
        }
        
    }
    const changeSubNameHandler = () =>{
        setClick(click-1)
    }
    useEffect(()=>{
        if (click==1){
            setItem('ma chai use effect bata aako')
        }
        else{
            setItem('ma chai click 1 ma parina')
        }
        
    },[click])
    return (
        <div className="button">
            {item}
            <button style={{marginLeft:'20px'}} onClick={changeAddNameHandler}>changeadd1</button>
            <button style={{marginLeft:'20px'}} onClick={changeAddNameHandler}>changeadd2</button>
            <button style={{marginLeft:'20px'}} onClick={changeAddNameHandler}>changeadd3</button>
            <button style={{marginLeft:'20px'}} onClick={changeAddNameHandler}>changeadd4</button>
            <button style={{marginLeft:'20px'}} onClick={changeAddNameHandler}>changeadd5</button>

            {/* <button style={{marginLeft:'20px'}} onClick={changeSubNameHandler}>changesub</button> */}

            {
                click
            }
        </div>
    )
}

export default Test
