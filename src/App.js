import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <FloatingWhatsapp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
