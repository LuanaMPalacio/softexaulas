import { useState } from "react";
import "./App.css";

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [acessoLiberado, setAcessoLiberado] = useState(false);
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    if (usuario.trim().length === 0) {
      setErro("O nome é obrigatório para continuar.");
      return;
    }

    setErro("");
    setAcessoLiberado(true);
  };

  const handleLogout = () => {
    setUsuario("");
    setAcessoLiberado(false);
  };

  return (
    <div className="container">
      {!acessoLiberado && (
        <div className="login">
          <h1>Informe seu nome</h1>

          <input
            type="text"
            value={usuario}
            placeholder="Digite seu nome"
            onChange={(e) => setUsuario(e.target.value)}
          />

          {erro && <p className="erro">{erro}</p>}

          <button onClick={handleLogin}>Entrar</button>
        </div>
      )}

      {acessoLiberado && (
        <div className="welcome">
          <h1>Bem-vindo(a), {usuario}!</h1>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
    </div>
  );
}
