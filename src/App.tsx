import "./assets/css/bootstrap-5.0.2-dist/css/bootstrap.css";
import "./assets/css/bootstrap-5.0.2-dist/js/bootstrap.js";
import "./assets/css/global.css"

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Pokedex from "./Pokedex";
import PokemonDetail from "./PokemonDetail";
import Accueil from "./Accueil";

function App() {

    return(
        <div className="App bg-dark">
            <BrowserRouter>
                <header className="border border-white">
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">Page Accueil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/generation">Page Pokedex</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/generation" element={<Pokedex/>}/>
                    <Route path="/pokemonDetail" element={<PokemonDetail/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;