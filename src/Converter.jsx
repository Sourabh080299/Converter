import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import './Convertor.css';
const Converter=()=>{
    const [data, setdata] = useState("");
    const [selecter,setselecter]=useState("");
    const getdata=(e)=>{        
        setdata(()=>{
            console.log(data);
            return e.target.value;
        })
        
    }
    const getselecter=(e)=>{        
        setselecter(()=>{
            return e.target.value;
          }        
        )
        
    }
    const [ans, setans] = useState(0);
    const convertDecimalToBinary = (decimalNumber) => {
        if(!isNaN(decimalNumber))
          return (decimalNumber >>> 0).toString(2);
        return false;
    }
    function decimalToHexString(number){
        if (number < 0)
        {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }
    function hex2bin(hex){
        return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
    }
    const binnary_to_decimal=()=>{
        console.log("------>",selecter);
        if(selecter=="decimal_to_binnary"){
            setans(convertDecimalToBinary(parseInt(data)));
        }
        else if(selecter=="decimal_to_hexadecimal"){
            setans(decimalToHexString(parseInt(data)));
        }
        else if(selecter=="hexadecimal_to_binary"){
           setans(hex2bin(parseInt(data)));
        }
        else{
            var digit = parseInt(data, 2);
            setans(digit);
        }
       
    }
    const clearall=()=>{
        setans(0);
        setdata("");
    }
    return  <div className="Converterbox">  
                <div className="Converter">
                    
                    <select name="from_to" onChange={getselecter}>
                        <option>
                            binnary_to_decimal                            
                        </option>
                        <option>
                            decimal_to_binnary
                        </option>                        
                        <option>
                            decimal_to_hexadecimal
                        </option>
                        <option>
                            hexadecimal_to_binary
                        </option>
                    </select>
                    <br></br>
                    <label>Enter data:</label>
                    <br></br>
                    <input id="boy"  type="text" value={data} onChange={getdata} name="boy_name" placeholder="Enter Your Data"/><br/>
                    <label>TO Decimal</label><br></br>
                    <input id="girl"  value={ans} type="text" name="girl_name" placeholder="Your ans goes here"/><br/>
                    <br></br>
                    <button onclick="my()" onClick={binnary_to_decimal}>Claculate</button> 
                    <button onclick="my()" onClick={clearall}>Clear</button>
                </div>
            </div> 
}
export default Converter;