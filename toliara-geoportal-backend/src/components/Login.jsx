import { useState } from "react";
import axios from "axios";

function Login({ onLogin, onCreateAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);

      // Connexion avec le backend NestJS
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        }
      );

      // Récupération du token JWT
      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

      // Connexion réussie
      onLogin(response.data.user);

    } catch (error) {
      console.error("Erreur de connexion :", error);

      setError(
        error.response?.data?.message ||
        "Email ou mot de passe incorrect."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">🗺️</div>

        <h1>Géoportail Urbanisme</h1>

        <p className="login-subtitle">
          District Toliara I
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Adresse e-mail</label>

            <input
              type="email"
              placeholder="exemple@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>

            <input
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Connexion..."
              : "Se connecter"}
          </button>

        </form>

        <div className="login-footer">

          <span>
            Vous n'avez pas encore de compte ?
          </span>

          <button
            type="button"
            className="create-account-button"
            onClick={onCreateAccount}
          >
            Créer un compte
          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;