import {useState} from "react";
import Header from "./assets/places";
import Entry from "./assets/entry";
import data from "./data"

function App() {
  //  (#1 return <ul>
  //   <li>Hi</li>
  // </ul>;)
 /*(2.toggle
const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="nav">
        <h2>MyAwesomeNavbar</h2>
        <button 
          className="toggle" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Settings</a>
        </div>
      )}
    </div>
  );
})*/
//  places(#3)
const entries=data.map((item)=>{
  return <Entry key={item.id}{...item}/>})

 return (
    <div>
      <Header />
      {entries }
    </div>
  );
}

export default App;