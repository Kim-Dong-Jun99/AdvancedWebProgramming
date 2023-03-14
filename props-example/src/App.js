
import './App.css';
import Garage from "./Garage";
import Comment from "./Comment";
import logo from './logo.png'
const comment = {
    date: new Date(),
    text: "I want to be the best!",
    author:{
        name:"gachon, kim",
        logo:logo
    }
}

function App() {
  return (
    <div className="App">
        <Comment date={comment.date} text={comment.text} author={comment.author} />
    </div>
  );
}

export default App;
