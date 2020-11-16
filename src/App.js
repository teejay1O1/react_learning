
import './App.css';
// import FirstComponent from './Components/FirstComponent'
import DyanamicComponent from './Components/DynamicComponent';
import Trial from './Components/Trial'
function App() {
  return (
    <div className="App">
        <DyanamicComponent surname= "Counter"/>
        <Trial/>
        {/* <CounterExample/> */}
        {/* <FormAPI/> */}
    </div>
  );
}

export default App;
