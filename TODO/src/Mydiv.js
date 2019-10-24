import React from 'react'
class Input extends React.Component {
    state ={
        input:""
    }
    handlechange = event =>{
        this.setState({
            input:event.target.value
        })
    }
    handleSubmit=()=>{
        this.props.addlist(this.state.input)
        this.setState({input:""})

        }
    render(){
    return(
        <div>
            <input
             type="text"
             className="form-control"
             onChange={this.handlechange}
             value={this.state.input}>
                
             </input>
            <button className="btn-block btn btn-primary"
            onClick={this.handleSubmit}>
                Add Todo
            </button>
        </div>
    );

}
}
export default Input;