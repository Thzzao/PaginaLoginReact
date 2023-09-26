import Rotas from './utils/rotas';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
    return (
        <Router>
            <Rotas />
        </Router>
    );
}