import logo from './logo.png';
import './global.css'
import { useState } from 'react';

export function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [mensage, setMensage] = useState("")

  function Valida(email, password) {
    if (email === "thiago.santos1160@gmail.com" && password == 1234567) {
      setMensage("Acessado com sucesso!")
    } else {
      setMensage("Usuário ou senha incorretos!")
    }
    setTimeout(() => {
      setMensage("")
    }, 5000);
  }

  return (
    <div className="container">
      <header className="logo">
        <img src={logo} alt="Logo da página" />
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}>
          </input>
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}>
          </input>
        </div>

        <button onClick={(e) => {
          e.preventDefault()
          Valida(email, password)
        }} className="botaoEntrar">Entrar</button>

        <div className="footer">
          <label>{mensage}</label>
        </div>

      </form>
    </div>
  );
}


// Criar uma lógica para que a tela não suba e desça quando aparece a mensagem na label

