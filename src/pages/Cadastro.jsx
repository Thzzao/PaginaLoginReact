import firebase from '../utils/firebase';
import '../style/cadastro.css';
import logo from '../logoCadastro.png';
import { Botao } from '../components/botao/Botao';
import React, { useState } from 'react';


function Cadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNas, setDataNas] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensage, setMensage] = useState("");

    async function Salvar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password).then(async (retorno) => {
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: nome,
                sobrenome: sobrenome,
                dataNas: dataNas
            })
        })
    }

    function ValidaCadastro(email, password, nome, sobrenome, dataNas) {
        if (email != "" && password != "" && nome != "" && sobrenome != "" && dataNas != "") {
            setMensage("Cadastrado com sucesso")
        } else {
            setMensage("Digite os dados corretamente")
        }
        setTimeout(() => {
            setMensage("")
        }, 5000);
    }
    return (
        <div className="containerCadastro">
            <header className="logo">
                <img src={logo} alt="Logo da página" />
            </header>
            <form>
                {/* NOME */}
                <div className="inputContainer">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite seu nome"
                        onChange={e => setNome(e.target.value)}>
                    </input>
                </div>
                {/* SOBRENOME */}
                <div className="inputContainer">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input
                        type="text"
                        name="sobrenome"
                        id="sobrenome"
                        placeholder="Digite seu sobrenome"
                        onChange={e => setSobrenome(e.target.value)}>
                    </input>
                </div>
                {/* DATA DE NASCIMENTO */}
                <div className="inputContainerData">
                    <label htmlFor="dataNas">Data de Nascimento</label>
                    <input
                        type="date"
                        name="dataNas"
                        id="dataNas"
                        onChange={e => setDataNas(e.target.value)}>
                    </input>
                </div>
                {/* EMAIL */}
                <div className="inputContainer">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu email"
                        onChange={e => setEmail(e.target.value)}>
                    </input>
                </div>
                {/* SENHA */}
                <div className="inputContainer">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <Botao text="Cadastrar" click={() => {
                        ValidaCadastro(nome, sobrenome, dataNas, email, password)
                        Salvar()
                    }} />
                </div>
                <div className="footer">
                    <label>{mensage}</label>
                </div>
            </form >
        </div>
    )
}

export default Cadastro

