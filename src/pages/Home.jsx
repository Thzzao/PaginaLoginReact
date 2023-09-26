import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import "../style/home.css";
import logo from "../logoHome.png";

function Home() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNas, setDataNas] = useState("");

    useEffect(() => {
        firebase.auth().onAuthStateChanged((usuario) => {
            if (usuario) {
                var uid = usuario.uid;
                firebase
                    .firestore()
                    .collection("usuario")
                    .doc(uid)
                    .get()
                    .then((retorno) => {
                        setNome(retorno.data().nome);
                        setSobrenome(retorno.data().sobrenome);
                        setDataNas(retorno.data().dataNas);
                    });
            }
        });
    }, []);
    return (
        <div className="containerHome">
            <header className="logo">
                <img src={logo} alt="Logo da página" />
            </header>
            Nome: {nome} <br />
            Sobrenome: {sobrenome} <br />
            Data de nascimento: {dataNas} <br />
        </div>
    );
}

export default Home;