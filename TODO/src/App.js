import React from 'react'
import Nav from "./Nav"
import Input from "./Mydiv"
import List from './List'
import axios from 'axios'

class App extends React.Component {
    state={
     list:[]
    }
    componentDidMount(){
        axios.get("http://localhost:8080/todo").then(response =>{
            this.setState({
                list:response.data
            })
        })
    }
    addlist=(value)=>{
        axios.post("http://localhost:8080/todo",{title:value}).then(success=>{ 
       this.setState({
           list:[...this.state.list,success.data]
        })
    })
}
delete=(id)=>{
    axios.delete("http://localhost:8080/todo/"+id).then(success =>
    this.setState({
        list:this.state.list.filter(items=>items.id !== id)
    }))
}

    render(){
    return(
        <div>
            <Nav/>
            <Input addlist={this.addlist}/>
            <List items={this.state.list} handledelete={this.delete}/>

</div>
    )
    }
}
export default App;