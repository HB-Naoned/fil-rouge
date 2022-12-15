import "./../assets/css/global.css"

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Pokedex from "./Pokedex";
import PokemonDetail from "./PokemonDetail";
import Accueil from "./Accueil";
import PokemonFav from "./PokemonFav";

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
                                        <Link className="nav-link active" to="/fil-rouge/">Page Accueil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/fil-rouge/generation">Page Pokedex</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/fil-rouge/pokemonFav">Page Favoris</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route path="/fil-rouge/" element={<Accueil/>}/>
                    <Route path="/fil-rouge/generation" element={<Pokedex/>}/>
                    <Route path="/fil-rouge/pokemonDetail" element={<PokemonDetail/>}/>
                    <Route path="/fil-rouge/pokemonFav" element={<PokemonFav/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;