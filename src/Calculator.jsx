import React, { useState ,useEffect } from "react";
import './Calculator.css';
const Calculator=()=>{
    const [data, setdata] = useState("");
    const one=()=>{
        setdata((pre)=>{
            return pre+1;
        })
    }
    function two(){
        setdata((pre)=>{
            return pre+2;
        })
    }
    function three(){
        setdata((pre)=>{
            return pre+3;
        })
    }
    function four(){
        setdata((pre)=>{
            return pre+4;
        })
    }
    function five(){
        setdata((pre)=>{
            return pre+5;
        })
    }
    function six(){
        setdata((pre)=>{
            return pre+6;
        })
    }
    function seven(){
        setdata((pre)=>{
            return pre+7;
        })
    }
    function eight(){
        setdata((pre)=>{
            return pre+8;
        })
    }
    function nine(){
        setdata((pre)=>{
            return pre+9;
        })
    }
    function zero(){
        setdata((pre)=>{
            return pre+0;
        })
    }
    function dot(){
        setdata((pre)=>{
            return pre+'.';
        })
    }
    function plus(){
        setdata((pre)=>{
            return pre+'+';
        })
    }
    function minus(){
        setdata((pre)=>{
            return pre+'-';
        })
    }
    function into(){
        setdata((pre)=>{
            return pre+'*';
        })
    }
    function divide(){
        setdata((pre)=>{
            return pre+'/';
        })
    }
    function AC(){
        setdata((pre)=>{
            return "";
        })
    }
    function equalto(){
        setdata((pre)=>{            
            return eval(pre);
        })
    }    
    
    return <div className="calcontainer">
            <div className="cal">
            <div className="calinput">{data}</div>
            <ul>
                <a href="#"><li onClick={one}>1</li></a>
                <a href="#"><li onClick={two}>2</li></a> 
                <a href="#"><li onClick={three}>3</li></a>
                <a href="#"><li onClick={plus} class="op">+</li></a> 
                <a href="#"><li onClick={four}>4</li></a> 
                <a href="#"><li onClick={five}>5</li></a>  
                <a href="#"><li onClick={six}>6</li></a> 
                <a href="#"><li onClick={minus} class="op">-</li></a> 
                <a href="#"><li onClick={seven}>7</li></a> 
                <a href="#"><li onClick={eight}>8</li></a> 
                <a href="#"><li onClick={nine}>9</li></a> 
                <a href="#"><li onClick={into} className="op">*</li></a> 
                <a href="#"><li onClick={AC} className="ac">AC</li></a> 
                <a href="#"><li onClick={zero}>0</li></a> 
                <a href="#"><li onClick={dot}>.</li></a>
                <a href="#"><li onClick={divide} className="op">/</li></a>  
                <a href="#"><li onClick={equalto} className="equal">=</li></a> 
                
            </ul> 
            </div>
           </div>
}
export default Calculator;