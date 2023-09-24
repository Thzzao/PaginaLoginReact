import { BrowserRouter, Route } from "react-router-dom";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Route exact={true} path="/" Component={Login} />
            <Route exact={true} path="/cadastro" Component={Cadastro} />
            <Route exact={true} path="/home" Component={Home} />
        </BrowserRouter>
    )
}

export default Rotas