import { makeObservable, observable, action } from "mobx"
import './App.css';


class Todo {
  id = Math.random()
  title = ""
  finished = false

  constructor(title: string) {
      makeObservable(this, {
          title: observable,
          finished: observable,
          toggle: action
      })
      this.title = title
  }

  toggle() {
      this.finished = !this.finished
  }
}

function App() {
  return (
    <div className="App">
      <h1>Learn Mobx</h1>
      
    </div>
  );
}

export default App;
