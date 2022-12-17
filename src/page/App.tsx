import "./../assets/css/global.css"

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pokedex from "./Pokedex";
import PokemonDetail from "./PokemonDetail";
import Accueil from "./Accueil";
import PokemonFav from "./PokemonFav";
import Header from "../composant/Header";
import {LangageContexteProvider,LangueContexteProvider} from "../composant/context/LangageContextProviderProps";
import SwitchLangue from "../composant/SwitchLangue";

function App() {


    return(
        <div className="App bg-dark">
            <BrowserRouter>
                <LangueContexteProvider>
                <LangageContexteProvider>
                    <header className="border border-white">
                        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse">
                                    <Header/>                                    
                                </div>
                                <SwitchLangue/>
                            </div>
                        </nav>
                    </header>
                    <Routes>
                        <Route path="/fil-rouge/" element={<Accueil/>}/>
                        <Route path="/fil-rouge/generation" element={<Pokedex/>}/>
                        <Route path="/fil-rouge/pokemonDetail/:idPokemon" element={<PokemonDetail/>}/>
                        <Route path="/fil-rouge/pokemonFav" element={<PokemonFav/>}/>
                    </Routes>
                </LangageContexteProvider>
                </LangueContexteProvider>
            </BrowserRouter>
        </div>
    );

}

export default App;