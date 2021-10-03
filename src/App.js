import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
