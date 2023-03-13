import Profile from "./profile/Profile.js";
import './App.css';


function App() {
  const handlename= username=>{
  
  alert("hi " +username);
  }
  return (
    <div className="App">
      <header className="App-header">
      <Profile FullName="Youssf Khashaba" Bio="I am an undergraduate" Profession="Web Developer" handlefunc={handlename} imgSrc="./IMG_3055.jpg"><img src="public\IMG_3055.jpg"></img></Profile>
      </header>
    </div>
  );
}

export default App;
