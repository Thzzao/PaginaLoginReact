import logo from '../logo.png';
import '../style/login.css';
import firebase from '../utils/firebase';
import { Botao } from '../components/botao/Botao';
import React, { useState } from 'react';

//const [mensage, setMensage] = useState("")

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensage, setMensage] = useState("");

    async function Acessar() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                window.location.href = "./Home"
            })
            .catch((erro) => {
                setMensage("Usuário não cadastrado")
            })
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
                        // value={email}
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
                        // value={password}
                        onChange={e => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <Botao text="Entrar" click={() => {
                        Acessar()
                    }} />
                </div>

                <div className="footer">
                    <label>{mensage}</label>
                </div>
            </form>
        </div>
    )
}

export default Login


// Criar uma lógica para que a tela não suba e desça quando aparece a mensagem na label

