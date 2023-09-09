import logo from './logo.png';
import './global.css'

export function App() {
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
            placeholder="Digite seu email">
          </input>
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input
            type="senha"
            name="senha"
            id="senha"
            placeholder="Digite sua senha">
          </input>
        </div>

        <button className="botaoEntrar">Entrar</button>

        <div className="footer">
          <label htmlFor="resultado"></label>
        </div>
      </form>

    </div>

  );
}