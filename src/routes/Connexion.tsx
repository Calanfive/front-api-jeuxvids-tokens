import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Connexion() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState('')
    const navigate = useNavigate();
    

    const changeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }, [])

    const changePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const handleConnexion = useCallback( async () => {
        // Lancez une requête POST vers l'API avec les données de connexion
        const response = await fetch ("http://localhost:2000/api/auth/local", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                "identifier": login,
                "password": password
            })
        });
        const data = await response.json();
        console.log(data);
        if(data.user){
            navigate("/home");
            localStorage.setItem("userdata", (data.jwt));
            }
            else {
              setLogin("")
              setPassword("")
              setShowErrorMessage("erreur 400, mdp ou email incorrect")
            }

        // Si la connexion est réussie,  stockez le token dans le localStorage
        // Et redirigez l'utilisateur vers la page d'accueil

        // Si la connexion est échouée, affichez un message d'erreur
        
    }, [login, password, navigate])
    return (
        <div>
            <h1>Connexion</h1>
            <div className="form-field">
                <label htmlFor="login">Entrez votre identifiant :</label>
                <input type="text" name="login" value={login} onChange={changeLogin} />
            </div>
            <div className="form-field">
                <label htmlFor="password">Entrez votre mot de passe : </label>
                <input type="password" name="password" value={password} onChange={changePassword} />
            </div>
            <button onClick={handleConnexion} >Connexion</button>
            <p>{showErrorMessage}</p>
        </div>
    );
}