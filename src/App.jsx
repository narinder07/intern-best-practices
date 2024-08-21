import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BeforeLoginRoutes from "./routes/BeforeLoginRoutes";
import AfterLoginRoutes from "./routes/AfterLoginRoutes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {!isAuthenticated ? (
        <BeforeLoginRoutes onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <AfterLoginRoutes />
      )}
    </Router>
  );
};

export default App;
