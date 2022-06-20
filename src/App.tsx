import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import PokemonPage from "./pages/pokemon.page";

function App() {
    return (
        <Router>
            <>
                <Routes>
                    <Route path='/' element={<PokemonPage />} />
                    <Route path='/pokemon' element={<PokemonPage />} />
                    <Route path="/pokemon/:id" />
                </Routes>
            </>
        </Router>
    );
}

export default App;
