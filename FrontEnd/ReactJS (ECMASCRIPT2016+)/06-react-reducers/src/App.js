import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";
import { CrudProvider } from "./contexts/CrudContext";

function App() {
  return (
    <div>
      <h1>useReducers</h1>
      <hr/>
      <CrudProvider>
        <CrudApi/>
      </CrudProvider>
      <hr/>
      <ShoppingCart/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
