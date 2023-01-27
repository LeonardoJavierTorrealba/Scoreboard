import {filter, from, map, mergeMap, concatMap, delay, Observable, of, takeWhile} from 'rxjs'

const obs = {

    observableTime: (preTime) => {            
    
    let min = preTime;
    let arrayMin = [];

    while (min <= 90) {
        arrayMin.push(min);
        min++;        
    }    
    
    const myObs = from(arrayMin);
    const pipeObs = myObs.pipe(
        concatMap(char=> of(char).pipe(delay(2000))),        
        map(char => char)
    )
    
    return pipeObs;
    }

}

export default obs;