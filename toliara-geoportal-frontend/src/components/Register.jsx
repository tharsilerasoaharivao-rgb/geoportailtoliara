import { useState } from "react";

function Register({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Le mot de passe doit contenir au moins 6 caractères."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Pour le moment : démonstration frontend
    alert("Compte créé avec succès !");

    onBackToLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">🗺️</div>

        <h1>Créer un compte</h1>

        <p className="login-subtitle">
          Géoportail Urbanisme - Toliara I
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
              placeholder="Minimum 6 caractères"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirmer le mot de passe</label>

            <input
              type="password"
              placeholder="Répéter le mot de passe"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
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
          >
            Créer mon compte
          </button>

        </form>

        <div className="login-footer">

          <button
            type="button"
            className="create-account-button"
            onClick={onBackToLogin}
          >
            ← Retour à la connexion
          </button>

        </div>

      </div>
    </div>
  );
}

export default Register;