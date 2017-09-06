import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

    constructor(){

      super();

      this.state={

        placeholdername:'Enter task name',

        placeholderComplete:'Enter task status',

        todos:[]

      }

      this.dataUpdater=this.dataUpdater.bind(this);

      this.removeItem=this.removeItem.bind(this);

    }

    componentDidMount() {
      ReactDOM.findDOMNode(this.refs.task).focus();
    }

    dataUpdater(event){

      event.preventDefault();

       let name=this.refs.task.value;
       let status=this.refs.complete.value;

       let duplicate=0;


       for(let i=0;i<this.state.todos.length;i++){
         if(this.state.todos[i].name==name)
         {
            duplicate=1;
            break;
         }
         duplicate=0;
       }

       if(status.toLowerCase() =='done' || status.toLowerCase()=='pending' && duplicate==0){

       let todo={

        name,

        status

       }

       let todos=this.state.todos;

       todos.push(todo)

       this.setState({todos:todos});
      }
      
      else{
        alert('Either a duplicate task is entered or  status is not entered as "done" or "pending"')
      }

       this.refs.todoForm.reset();

       ReactDOM.findDOMNode(this.refs.task).focus();

    }


  removeItem(valueToPop){

    let index=0;

    let found=0;

    for(;index<this.state.todos.length;index++){

      if(this.state.todos[index].name==valueToPop){
        found=1;
      break;
      }
      found=0;
    }

    if(found){
    this.state.todos.splice(index,1);
    }

    let todos=this.state.todos;
    this.setState({todos:todos})
    this.refs.todoForm.reset();
  }

  render() {
    return (
      <div className="App">
        <h3>to-to dooooooooooooooooo!</h3>
        <form onSubmit={this.dataUpdater}ref='todoForm'>
          <input type='text' ref='task' placeholder={this.state.placeholdername} required/>
          <input type='text' ref='complete' placeholder={this.state.placeholderComplete} required/>
          <button type='submit'>Save</button>
        </form>
        <h4>Iteneries</h4>
       <center>
          <table>
            <tbody>
              {this.state.todos.map((item,index)=><tr key={index}>
                <th style={ item.status.toLowerCase()=='done'?{color:'green'}:{color:'red'} }>{item.name}</th>
                <td style={{backgroundColor:'steelblue'}} onClick={()=>{this.removeItem(item.name)}}>&#10008;</td>
              </tr>)}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default App;