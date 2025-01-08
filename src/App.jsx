import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import BeforeLoginRoutes from "./routes/BeforeLoginRoutes";
import AfterLoginRoutes from "./routes/AfterLoginRoutes";

const App = () => {
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );
  return (
    <Router>
      {isAuthenticated ? <AfterLoginRoutes /> : ""}
      <BeforeLoginRoutes />
    </Router>
  );
};

export default App;
