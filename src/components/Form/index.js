import React from 'react';
import './form.css';

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            decimal: 1,
            binary: '',
            error: false
        }
        this.bin2dec = this.bin2dec.bind(this)
    }

    bin2dec(){
        var binary = this.state.binary
        if(binary[0] === 0){
            return alert('The first number have to be 1')
        }else if(isNaN(binary)){
            return alert('Only 0 and 1 are allowed!')
        }
        var decimal = 0; var counter = 0; var power = 0; var error = false;
    
        binary.split('').forEach(bit =>{
            if(bit > 1 || bit < 0) error = true
    
            counter++;
            power = binary.length-counter;
            
            decimal += bit*Math.pow(2,power)
        })
        
        if(!error){ this.setState({decimal: decimal}) }
        else return alert('Only 0 and 1 are allowed!')
    }

    render(){
        return (
            <div id="inputGroup">
                <label htmlFor="binary"> Put the binary number below: </label>
                <input onChange={(e)=>this.setState({binary: e.target.value})} id="binary" placeholder="Binary" />
                <p> Decimal Number: {this.state.decimal} </p>

                <input id="convertBtn" type="button" 
                onClick={ this.bin2dec } 
                value="Convert" />
            </div>
        )
    }
}