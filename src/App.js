import logo from './logo.svg';
import './App.css';
// import RefTest from "./useRef";
// import Test from "./useRef2"
// import RefAsDidUpdate from "./useRef3"
// import Lotto from './useMemo'
// import Callback from "./useCallback";
// import Effect from "./useEffect";
import GrandParent from "./useContext";
function App() {
  return (
    <div className="App">
      {/*<RefTest/>*/}
      {/*  <Test/>*/}
      {/*  <RefAsDidUpdate/>*/}
      {/*  <Lotto />*/}
      {/*  <Callback name={'name'} age={30} lang={''}/>*/}
      {/*  <Effect />*/}
        <GrandParent/>
    </div>
  );
}

export default App;
