import React,{Component} from 'react';
class Buttonclick extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'hello',

        };
    }
    changetext=()=>{
        this.setState({
            msg:'you changedme'
        })
    }
render(){
return(
    <>
    <h3>{this.state.msg}</h3>
    <button onClick={this.changetext}>clickme</button>
    
    </>
)
}
}
export default Buttonclick; 