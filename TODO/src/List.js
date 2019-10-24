import React from 'react'
 class List extends React.Component {
     

    render(){
         return(
    <ul className="list-group">
        {
            this.props.items.map(i =>(
                    <li key={i.id} className="list-group-item">
                    {i.title}
                      <input type="button"  value="delete"
                      onClick={this.props.handledelete.bind(this,i.id)}
                     className="float-right btn btn-primary"/>
                    
                    </li> )
         )
        }
        </ul> )
}
}
export default List;
