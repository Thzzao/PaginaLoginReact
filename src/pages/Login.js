import logo from '../logo.png';
import '../style/global.css';
import firebase from '../utils/firebase';
import { Botao } from '../components/Botao';
import React, { Component, useState } from 'react';

//const [mensage, setMensage] = useState("")

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.acessar = this.acessar.bind(this)
    }
    async acessar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                window.location.href = "./Home"
            })
            .catch((erro) => {
                console.log("Usuário nao cadastrado")
                //setMensage("Usuário não cadastrado")
            })
    }
    render() {
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
                            onChange={e => this.setState({ email: e.target.value })}>
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
                            onChange={e => this.setState({ password: e.target.value })}>
                        </input>
                    </div>
                    <div>
                        <Botao texto="Entrar" />
                        {/* chamar a função validalogin() */}
                    </div>

                    <div className="footer">
                        {/* <label>{mensage}</label> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default Login

















/**


export function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [mensage, setMensage] = useState("")

    //CRIAR VALIDAÇÃO PARA ENTRAR NA PAGINA HOME

    function ValidaLogin(email, password) {
        if (email === "thiago.santos1160@gmail.com" && password == 1234567) {
            setMensage("Acessado com sucesso!")

        } else {
            setMensage("Usuário não cadastrado!")
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

                <div>
                    <Botao texto="Entrar" />
                    {/* chamar a função valida login }
                </div>

                <div className="footer">
                    <label>{mensage}</label>
                </div>

            </form>
        </div>
    );
}


// Criar uma lógica para que a tela não suba e desça quando aparece a mensagem na label

**/