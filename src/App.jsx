import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
       {<Button color = "primary" text = "Large"/>}
       {<Button color = "secondary" text = "Large"/>} 
      </div>
      <hr />
      <div className="alert-components-section">
        {<Alert status = "error" text = "This is error alert box"/>}
        {<Alert status = "warning" text = "This is warning alert box"/>}
        {<Alert status = "info" text = "This is info alert box"/>}
        {<Alert status = "success" text = "This is success alert box"/>}
      </div>
    </div>
  );
}



export default App;
