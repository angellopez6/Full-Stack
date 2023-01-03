import CrudApi from "./components/CrudApi";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div >
      <h1>React Context API</h1>
      <CrudProvider>
       <CrudApi/>
      </CrudProvider>
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;