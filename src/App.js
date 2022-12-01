import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home"
function App() {
  // const [counter, setValue] = useState(0);
  // const onClick = () => setValue((prev) => prev + 1);
  // console.log("i run all the time");
  // const iROO = () => {
  //   console.log("i run only once");
  // }
  // useEffect(iROO, []);
  // const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  // const onChange = (event) => setToDo(event.target.value);
  // const onSubmit = (event) => {event.preventDefault();
  //   if (toDo === "") {
  //     return;
  //   }
  //   setToDos((currentArray) => [toDo, ...currentArray]);
  //   setToDo("");
  // }
  // console.log(toDos);
  
    // <div>
    //   <h1>{counter}</h1>
    //   <button onClick={onClick}>Click</button> 
    //   <h4>Welcome back!!!</h4>
    //   <Button text={"click"}></Button>
    //   <form onSubmit={onSubmit}>
    //     <input 
    //       onChange={onChange} 
    //       value={toDo} 
    //       type="text" 
    //       placeholder="To Do">
    //     </input>
    //     <button>Add To Do</button>
    //   </form>
    //   <hr></hr>
    //   <ul>
    //     {toDos.map((item, index) => (<li key={index}>{item}</li>))}
    //   </ul>
    // </div>
    return <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}>
        </Route>
      </Routes>
    </Router>
}

export default App;
