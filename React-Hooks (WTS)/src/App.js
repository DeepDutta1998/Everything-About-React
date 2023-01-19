// import logo from './logo.svg';
import './App.css';
import Home from './useparam/Routing/Home';
import Apifetch from './usestate/Apifetch';
import ClearData from './usestate/ClearData';
import ObjectUpdate from './usestate/ObjectUpdate';
import Count from './usestate/Count';
import Object from './usestate/Object';
import Name from './usestate/Name';
import Alert from './useEffect/Alert';
import Title from './useEffect/Title';
import Api from './useEffect/API/Api';
import Album from './useEffect/API/Album';
import ApiLoading from './FetchApi/ApiLoading';
import ApiPostDetails from './useEffect/API/ApiPostDetails';
import Routers from './useEffect/Routers';
import Routerss from './contexthook/Routers/Routerss';

function App() {
  return (
    <div>           
      {/* <Count/> */}
      {/* <Object/> */}
      {/* <Name/> */}
      {/* <ObjectUpdate/> */}
      {/* <ClearData/> */}
      {/* <Apifetch/> */}
      {/* <Home/> */}
      {/* <Alert/> */}
      {/* <Title/> */}
      {/* <Api/> */}
      {/* <Album/> */}
      {/* <ApiLoading/> */}
      
      <Routerss/>
    </div>
  );
}

export default App;
