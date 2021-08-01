import React from'react'
import "./add.css"




class Addition extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            num1: '29',
            num2: '',
            total: '',
            substract: ''
            

        }
    }



    handleNum2 = (event) => {
        this.setState({num2:event.target.value})
    }
    tot = (event)=>{
        this.setState({total:parseInt(this.state.num1) + parseInt(this.state.num2)})
        
    }
    sub = (event)=>{
        this.setState({substract:parseInt(this.state.num2) - parseInt(this.state.num1)})
    }



    render(){
        return(
            <div class = "heading">
                <h1 class="add">Addition </h1>
               
                <h2 class="num">  Other Number</h2>
                <input class="input" type ="number" placeholder = "0"value ={this.state.num2} onChange={this.handleNum2}/>
                <br></br>
                <br></br>

                <button class ="add1" type="submit" onClick={this.tot}>Add</button> <br></br>

                {this.state.total} <br></br>

                <button type="submit" class="hello"  onClick={this.sub}>Substract</button> <br></br>

                {this.state.substract}

                
                
            </div>

        )
    }
}
export default Addition
