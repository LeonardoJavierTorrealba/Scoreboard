/* BACKLOG
-Hacer que el tiempo de juego corra diferente entre juegos. 
-Agregar Descanso cuando llegue a los 45'

*/

import React, {useState, useEffect} from 'react'
import Header from './Header';
import Matchs from './Matchs';
import obs from '../utilities/obs.js';
import mD from '../Data/matchsData.js';



function Main2 () {

var matchsData = mD;

let [match0, setMatch0] = useState(matchsData[0]);
let [match1, setMatch1] = useState(matchsData[1]);
let [match2, setMatch2] = useState(matchsData[2]);
let [match3, setMatch3] = useState(matchsData[3]);
let [match4, setMatch4] = useState(matchsData[4]);

let timesObs = [];

matchsData.forEach((match) => {
    let timeob = obs.observableTime(match.startTime);
    timesObs.push(timeob);
})

   
useEffect(()=> { //ACA NO ME SALIÓ QUE CAMBIE EL TIEMPO DE ESTA MANERA. 
    
    var subscription0 = timesObs[0].subscribe(char => {
        if(char > 0){            
        match0.time = `${char}'`;
        setMatch0(match0);
        }
        else{
        match0.time = `${char * -1} minutes to start`
        setMatch0(match0)                    
        }     

    });

    var subscription1 = timesObs[1].subscribe(char => {
        if(char > 0){            
        match1.time = `${char}'`;
        setMatch1(match1);
        }
        else{
        match1.time = `${char * -1} minutes to start`
        setMatch1(match1)                    
        }     

    });

    var subscription2 = timesObs[2].subscribe(char => {
        if(char > 0){            
        match2.time = `${char}'`;
        setMatch2(match2);
        }
        else{
        match2.time = `${char * -1} minutes to start`
        setMatch2(match2)                    
        }     

    });

    var subscription3 = timesObs[3].subscribe(char => {
        if(char > 0){            
        match3.time = `${char}'`;
        setMatch3(match3);
        }
        else{
        match3.time = `${char * -1} minutes to start`
        setMatch3(match3)                    
        }     

    });

    var subscription4 = timesObs[4].subscribe(char => {
        if(char > 0){            
        match4.time = `${char}'`;
        setMatch4(match4);
        }
        else{
        match4.time = `${char * -1} minutes to start`
        setMatch4(match4)                    
        }     

    });   
        
}, []);



return ( 
    <div className="row g-5 main">       

    <div className="col-md-7 col-lg-8">
        <Header/>        
              
           
            <Matchs     homeCountryName={match0.homeTeam}  homeGoals={match0.homeTeamGoals}
                        awayCountryName={match0.awayTeam}  awayGoals={match0.awayTeamsGoals}
                        location={match0.stadium}                  gameTime={match0.time}
                        key={`${match0.homeTeam}${match0.awayTeam}`}/>

            <Matchs     homeCountryName={match1.homeTeam}  homeGoals={match1.homeTeamGoals}
                        awayCountryName={match1.awayTeam}  awayGoals={match1.awayTeamsGoals}
                        location={match1.stadium}                  gameTime={match1.time}
                        key={`${match1.homeTeam}${match1.awayTeam}`}/>
            
            <Matchs     homeCountryName={match2.homeTeam}  homeGoals={match2.homeTeamGoals}
                        awayCountryName={match2.awayTeam}  awayGoals={match2.awayTeamsGoals}
                        location={match2.stadium}                  gameTime={match2.time}
                        key={`${match2.homeTeam}${match2.awayTeam}`}/>

            <Matchs     homeCountryName={match3.homeTeam}  homeGoals={match3.homeTeamGoals}
                        awayCountryName={match3.awayTeam}  awayGoals={match3.awayTeamsGoals}
                        location={match3.stadium}                  gameTime={match3.time}
                        key={`${match3.homeTeam}${match3.awayTeam}`}/>
                        
            <Matchs     homeCountryName={match4.homeTeam}  homeGoals={match4.homeTeamGoals}
                        awayCountryName={match4.awayTeam}  awayGoals={match4.awayTeamsGoals}
                        location={match4.stadium}                  gameTime={match4.time}
                        key={`${match4.homeTeam}${match4.awayTeam}`}/>           

    </div>

        <div className="col-md-5 col-lg-4 order-md-last">
            <h2> ACA VA EL SUMMARY </h2>
        </div>

    </div>

)
 


}
export default Main2;