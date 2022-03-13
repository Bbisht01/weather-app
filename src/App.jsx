import "./App.css";
import Login from "./components/Login";
import WeatherInfo from "./components/WeatherInfo";


function App() {
  return (
    <div className="App" style={{width:"100%",height:"100vh",backgroundImage:'url("https://i.ibb.co/k8Cc2c4/backgroundimage.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>      
      {/* <WeatherInfo /> */}
      <Login/>
    </div>
  );
}

export default App;
