import { makeStyles } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <div className={classes.App}>
          <Headers />
          <Routes>
            <Route exact path="/crupto_market" element={<Homepage />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/coins/:id" element={<Coinpage />}></Route>
          </Routes>
        </div>
        ;
      </BrowserRouter>
    </>
  );
}

export default App;
