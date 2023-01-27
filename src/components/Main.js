/* BACKLOG
-Hacer que el tiempo de juego corra diferente entre juegos. 
-Agregar Descanso cuando llegue a los 45'

*/

import React, {useState, useEffect} from 'react'
import Header from './Header';
import Matchs from './Matchs';
import obs from '../utilities/obs.js';
import matchsData from '../Data/matchsData';



function Main () {      


let filteredObs = obs.observableTime(-20);
let [games, setGames] = useState(matchsData);
let [minutes, setMinutes] = useState(0);


useEffect(()=> {    
    const subscription = filteredObs.subscribe(char => {
        if(char > 0){
        setMinutes(`${char}'`)
        }
        else{
        setMinutes(`${char * -1} minutes to start`)                     
        }     

      });    
}, []);


useEffect(()=>{
    console.log(minutes);
}, [minutes])





return ( 
    <div className="row g-5 main">       

    <div className="col-md-7 col-lg-8">
        <Header/>        
        {       
            games.map(element => 
            <Matchs     homeCountryName={element.homeTeam}  homeGoals={element.homeTeamGoals}
                        awayCountryName={element.awayTeam}  awayGoals={element.awayTeamsGoals}
                        location={element.stadium}                  gameTime={minutes}
                        key={`${element.homeTeam}${element.awayTeam}`}/>
            )
        }   

    </div>

        <div className="col-md-5 col-lg-4 order-md-last">
            <h2> ACA VA EL SUMMARY </h2>
        </div>

    </div>

)
 
}

export default Main;