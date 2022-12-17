export const contextTexte = {
    selectedLang: false,
    en: {
        header: {
            p1: "Home Page",
            p2: "Pokedex Page",
            p3: "Favorite Page",
            lang: "Fr"
        },
        pages: {
            accueil:{
                titre: "Home Page",
                texte1: "Welcome !",
                texte2: "You are currently in a training page for a wireframe project to discover React in TypeScript format. This page contains an example of using the API: PokeAPI v2.",
                texte3: "This static site has the following features:",
                li1: "A router on all the pages ;",
                li2: "A router parameter for the 'pokemonDetail' page ;",
                li3: "A set of 4 pages: 'Home', 'Pokedex', 'DetailPokemon' and 'Favorites' ;",
                li4: "The DetailPokemon page can be accessed by clicking on one of the pokemons on the Pokedex page or at '/fil-rouge/pokemonDetail/x' by replacing the x with a valid number ;",
                li5: "A context to change the language of the page from the header ;",
                li6: "A bookmark system using Redux on the 'Favorites' page ;",
            },
            pokedex:{
                instruction1: "Please select one of the regions",
                instruction2 : "Loading...",
                g1: "Kanto",
                g2: "Johto",
                g3: "Hoenn",
                g4: "Sinnoh",
                g5: "Unova",
                g6: "Kalos",
                g7: "Alola",
                g8: "Galar",
            },
            pokemonDetail:{
                nomAllemend: "German name",
                nomJaponais: "Japanese name",
            },
            pokemonFav:{
                instruction1: "Please select a pokémon to add to your favorites",
                action1: "Add to favorites list",
                action2: "Delete the entire favorites list",
            }
        }
    },
    fr: {
        header: {
            p1: "Page Accueil",
            p2: "Page Pokedex",
            p3: "Page Favoris",
            lang: "Fr"
        },
        pages: {
            accueil:{
                titre: "Page Accueil",
                texte1: "Bienvenue !",
                texte2: "Vous vous trouvez actuellement dans une page d'entrainement pour un projet fil-rouge pour découvrir React sous format TypeScript. Cette page contient un exemple d'utilisation de l'API : PokeAPI v2.",
                texte3: "Ce site static présent les fonctionnalités suivantes :",
                li1: "Un router sur l'ensemble des pages ;",
                li2: "Un paramètre de router pour la page 'pokemonDetail' ;",
                li3: "Un ensemble de 4 pages : 'Accueil', 'Pokedex', 'DetailPokemon' et 'Favoris' ;",
                li4: "La page DetailPokemon est accessible en cliquant sur l'un des pokemons de la page Pokedex ou à l'adresse '/fil-rouge/pokemonDetail/x' en remplaçant le x par un nombre valide ;",
                li5: "Un context pour changer la langue de la page depuis le header ;",
                li6: "Un système de “bookmarks” à l’aide de Redux sur la page 'Favoris' ;",
            },
            pokedex:{
                instruction1: "Veuillez sélectionner l'une des régions",
                instruction2 : "Chargement en cours...",
                g1: "Kanto",
                g2: "Johto",
                g3: "Hoenn",
                g4: "Sinnoh",
                g5: "Unys",
                g6: "Kalos",
                g7: "Alola",
                g8: "Galar",
            },
            pokemonDetail:{
                nomAllemend: "Nom en Allemand",
                nomJaponais: "",
            },
            pokemonFav:{
                instruction1: "Veuillez sélectionner un pokémon à ajouter dans vos favoris",
                action1: "Ajouter à la liste des favoris",
                action2: "Supprimer entièrement la liste des favoris",
            }
        }
    }

}