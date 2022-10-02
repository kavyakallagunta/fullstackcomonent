import React,{Component} from "react";
class Counterexample extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        };
    }
    // click&counter
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
 render(){
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>Click</button>
                {/* <button onClick={this.decrement}>-</button> */}
            </div>
        )
    }
}
export default Counterexample;



// automatic increment
    // increment=()=>{
    //     setInterval(
    //         ()=>{
    //             this.setState({
    //               count:this.state.count+1
    //          })
    //         },1000
    //      )
    //  }
    // automatic decrement
//     decrement=()=>{
//         setInterval(
//             ()=>{
//                 this.setState({
//                     count:this.state.count-1
//                 })
//             },1000
//         )
//     }
