import { useRef, useState } from "react";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import MapView from "./components/MapView";
import LayerPanel from "./components/LayerPanel";

import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {

  const [page, setPage] = useState("login");
  const [showLayers, setShowLayers] = useState(false);

  const mapActions = useRef(null);

  const handleLogin = ({ email, password }) => {

    // Pour le moment : authentification temporaire
    console.log("Connexion :", email);

    if (email && password) {
      setPage("map");
    }
  };

  const handleToggleLayers = () => {
    setShowLayers((previous) => !previous);
  };

  const handleResetView = () => {

    if (
      mapActions.current &&
      typeof mapActions.current.resetView === "function"
    ) {
      mapActions.current.resetView();
    }

  };

  const handleFullscreen = async () => {

    try {

      if (!document.fullscreenElement) {

        await document.documentElement.requestFullscreen();

      } else {

        await document.exitFullscreen();

      }

    } catch (error) {

      console.error("Erreur plein écran :", error);

    }

  };

  // PAGE CONNEXION
  if (page === "login") {

    return (
      <Login
        onLogin={handleLogin}
        onCreateAccount={() => setPage("register")}
      />
    );

  }

  // PAGE INSCRIPTION
  if (page === "register") {

    return (
      <Register
        onBackToLogin={() => setPage("login")}
      />
    );

  }

  // APPLICATION
  return (
    <div className="app">

      <Header />

      <Toolbar
        toggleLayers={handleToggleLayers}
        resetView={handleResetView}
        toggleFullscreen={handleFullscreen}
      />

      <MapView mapActions={mapActions} />

      <LayerPanel visible={showLayers} />

    </div>
  );
}

export default App;