import Todos from "./Todos";

function App() {
  return (
    <div className="container">
      <h1>my Todos</h1>
      <Todos text="Learn React"/>
      <Todos text="Learn Props"/>
      <Todos text="Learn Events"/>
    </div>
  );
}

export default App;
   