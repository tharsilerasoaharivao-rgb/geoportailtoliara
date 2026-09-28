import { useState } from "react";

function Login({ onLogin, onCreateAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    onLogin({ email, password });
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

          <button type="submit" className="login-button">
            Se connecter
          </button>

        </form>

        <div className="login-footer">
          <span>Vous n'avez pas encore de compte ?</span>

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