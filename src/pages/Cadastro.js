import '../style/global.css';
import firebase from '../utils/firebase';
import { Botao } from '../components/Botao';
// import { useState } from 'react';
import React, { Component } from 'react';


class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNas: "",
            email: "",
            password: ""
        }
        this.salvar = this.salvar.bind(this);
    }
    async salvar() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(async (retorno) => {
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNas: this.state.dataNas
            })
        })
    }
    render() {
        return (
            <form>
                {/* NOME */}
                <div className="inputContainer">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite seu nome"
                        onChange={e => this.setState({ nome: e.target.value })}>
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
                        // value={sobrenome}
                        onChange={e => this.setState({ sobrenome: e.target.value })}>
                    </input>
                </div>
                {/* DATA DE NASCIMENTO */}
                <div className="inputContainer">
                    <label htmlFor="dataNas">Data de Nascimento</label>
                    <input
                        type="date"
                        name="dataNas"
                        id="dataNas"
                        placeholder="Sua data de nascimento"
                        // value={dataNas}
                        onChange={e => this.setState({ dataNas: e.target.value })}>
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
                        // value={email}
                        onChange={e => this.setState({ email: e.target.value })}>
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
                        // value={password}
                        onChange={e => this.setState({ password: e.target.value })}>
                    </input>
                </div>



                {/* ZZZZZZZZZZZZZZZZZZZZZZZZZZ */}
                <div>
                    <Botao texto="Cadastrar" />
                    {/* chamar a função valida casdastro e depois chamar a função salvar() */}
                </div>

                <div className="footer">
                    {/* <label>{mensage}</label> */}
                </div>
            </form >
        )
    }
}

export default Cadastro

/**
 *

// export function Cadastro() {

const [mensage, setMensage] = useState("")


function ValidaCadastro(email, password, nome, sobrenome, dataNas) {
    if (email != " " && password != " " && nome != " " && sobrenome != " " && dataNas != " ") {
        setMensage("Cadastrado com sucesso")
    } else {
        setMensage("Digite os dados corretamente")
    }
    setTimeout(() => {
        setMensage("")
    }, 5000);
}


 *
 */








// return (
//     <div className="container">
//         <header className="logo">
//             <img src={logo} alt="Logo da página" />
//         </header>

//     <form>

//         {/* NOME */}


//         {/* SOBRENOME */}
//         <div className="inputContainer">
//             <label htmlFor="sobrenome">Sobrenome</label>
//             <input
//                 type="text"
//                 name="email"
//                 id="sobrenome"
//                 placeholder="Digite seu sobrenome"
//                 value={sobrenome}
//                 onChange={e => setEmail(e.target.value)}>
//             </input>
//         </div>

//         {/* DATA DE NASCIEMNTO */}
//         <div className="inputContainer">
//             <label htmlFor="email">E-mail</label>
//             <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 value={dataNas}
//                 placeholder="Digite seu email">
//             </input>
//         </div>



//         {/* EMAIL */}
//         <div className="inputContainer">
//             <label htmlFor="email">E-mail</label>
//             <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 placeholder="Digite seu email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}>
//             </input>
//         </div>

//         {/* SENHA */}
//         <div className="inputContainer">
//             <label htmlFor="senha">Senha</label>
//             <input
//                 type="password"
//                 name="senha"
//                 id="senha"
//                 placeholder="Digite sua senha"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}>
//             </input>
//         </div>




//         {/* xxxxxxxxxxxxxxxxxxxxxxxxxx */}
//         <div>
//             <Botao texto="Cadastrar" />
//             {/* chamar a função valida casdastro */}
//         </div>

//         <div className="footer">
//             <label>{mensage}</label>
//         </div>

//     </form>
//     //</div>
// );





