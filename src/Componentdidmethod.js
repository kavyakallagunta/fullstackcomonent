import React,{Component} from "react";
class Componentdidmethod extends Component{
    constructor(props){
        super(props)
        this.state={
            count:10
        };
    }
    increment=()=>{
        setInterval(
            ()=>{
                this.setState({
                  count:this.state.count-1
             })
            },1000
         )
     }
    componentDidMount(){
        setInterval(()=>{
            this.state({
                count:this.state.count-1
            })
        },1000);
    }
    componentDidUpdate(){
        if(this.state.count===0){
            alert("sorry......timeup!")
        }
    }
    render(){
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>-</button>
                
            </div>
        )
    }
}
export default Componentdidmethod;
