import React, { Component } from 'react';
import firebase from '../utils/firebase';
import '../style/global.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNas: ""
        }
    }
    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid;
                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((retorno) => {
                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            dataNas: retorno.data().dataNas
                        })
                    })
            }
        })
    }
    render() {
        return (
            <div className="container">
                Nome: {this.state.nome} <br />
                Sobrenome: {this.state.sobrenome} <br />
                Data de nascimento: {this.state.dataNas} <br />
            </div>
        )
    }
}

export default Home