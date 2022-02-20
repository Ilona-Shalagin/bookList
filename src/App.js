
import './App.css';
import { Book } from './Book';
import image from './book.jpg'


function App() {
  return (
    <div className="app">
    <div className="container">
      <h1>Book reading list!</h1>
      </div>
      <div className="container">
      <img src={image}  alt="book" width="350px"/>
      </div>
      <Book/>
    </div>
  
  );
}

export default App;
