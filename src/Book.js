
import { Component } from "react";
export class Book extends Component{
 state={
     userInput:"",
     bookList:[]
    
 }
 onChangeEvent(e){
   this.setState({userInput:e})
 }

 addItem(input){
     if(input===""){
         alert("Please enter an item")
     }else{
  let list = this.state.bookList;
  list.push(input);
  this.setState({bookList:list,userInput:""})
     }
 }
 crossedWord(event){
   const li = event.target;
   li.classList.toggle("crossed");
   
 }
 deleteItem(){
     let list = this.state.bookList;
     list =[];
     this.setState({bookList:list})
 }
 onFormSubmit(e){
     e.preventDefault();
 }
 render(){
     return(
         <form onSubmit={this.onFormSubmit}>
         <div className="container">
             <input type="text" placeholder="What do you want to read?"
             onChange={(e)=>{this.onChangeEvent(e.target.value)}}
             value={this.state.userInput}/>
         </div>
         <div className="container">
         <button className="btn add" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
         </div>
         <ul>
             {this.state.bookList.map((item,index)=>(
                 <li onClick={this.crossedWord} key={index}>{item}</li>
             ))}
         </ul>
         <div className="container">
         <button className="btn delete" onClick={()=>this.deleteItem()}>Delete</button>
         </div>
         </form>
     )
 }
}