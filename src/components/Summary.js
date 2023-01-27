import React from 'react'

function Matchs (props) {

return (        

    <div className="match">

        <div className="col-md-4 col-lg-4">
            <h5>{props.homeCountryName}</h5>
            <h2>{props.homeGoals}</h2>
        </div>

        <div className="col-md-4 col-lg-4">
            <h3>FINAL</h3>
            <h4>{props.location}</h4>
        </div>

        <div className="col-md-4 col-lg-4">
            <h5>{props.awayCountryName}</h5>
            <h2>{props.awayGoals}</h2>
        </div>

    </div>

    )
 
}

export default Matchs;