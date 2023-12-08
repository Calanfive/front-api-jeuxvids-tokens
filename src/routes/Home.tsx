import { useEffect, useState } from "react"

export default function Home() {
    const [freeGames, setFreeGames] = useState([])
    const [officialGames, setOfficialGames] = useState([])

    useEffect(() => {
        const getAllGames = async () => {
            let value = localStorage.getItem("userdata")
            // Récupérez les jeux gratuits avec la route GET /api/free-games
            const response = await fetch("http://localhost:2000/api/free-games")
            const dataFree = await response.json()
            // Récupérez les jeux officiels avec la route /api/games/official
            console.log("log", value);
            
            const response2 = await fetch("http://localhost:2000/api/official-games", {
                headers : {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${value}`
                }
            })

            const dataOff = await response2.json()

            console.log("jeux gratuits", dataFree);
            console.log("jeux payants", dataOff);
            // stockez-les dans le state freeGames
            setFreeGames(dataFree)
            // stockez-les dans le state officialGames
            setOfficialGames(dataOff)
        }
        getAllGames()
    }, [])



    return (
        <div>
            <h1>Bienvenue dans votre collection de jeux</h1>

            <div className="free-games">
                <h2>Jeux gratuits</h2>
                <div className="free-games-list-content">
                    {freeGames.map((game: any) => (
                        <div className="full" key={game.id}>
                            <div className="Name">{game.nom}</div>
                            <div className="Type">{game.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="official-games">
                <h2>Jeux officiels</h2>
                {officialGames}
            </div>
        </div>
    )
}