/** @jsxImportSource @emotion/react */
import "./App.css";
import Button from "./components/Button.jsx"
import { css } from '@emotion/react';
import Alert from "./components/Alert.jsx"

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <h1>Buttons</h1>
        
        <Button type="primary"/>
        <hr/>
        <Button type="secondary"/>
      </div>

      <hr />
      <div className="alert-components-section">
      <h1>Alert</h1>
        <Alert rank="first"/>
        <Alert rank="second"/>
        <Alert rank="third"/>
        <Alert rank="fourth"/>
      </div>
    </div>
  );
}

export default App;
