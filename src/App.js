import { GlobalStyles } from "./components/style/Global.style";
import { HeaderStyled } from "./components/style/Header.style";
import Home from "./pages/Home";
import Adding from "./pages/Adding";
import Error from "./pages/Error";
import Edit from "./pages/Edit";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <GlobalStyles />
       <HeaderStyled />
       <Router>
         <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Adding />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
