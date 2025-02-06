import { useState } from "react";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");

  const handleRecuperarSenha = (e) => {
    e.preventDefault();
    console.log("Recuperação de senha para:", email);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Recuperar Senha</h2>
      <form onSubmit={handleRecuperarSenha}>
        <div>
          <input 
            type="email" 
            placeholder="Digite seu e-mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <button type="submit">Recuperar Senha</button>
      </form>
    </div>
  );
};

export default RecuperarSenha;