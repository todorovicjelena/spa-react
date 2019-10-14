import React from 'react';
import Actor from './actor';
import {Route} from 'react-router-dom';
import Actors from './actors';
import {ActorsList} from '../data/actors' ;

const ActorsContainer = (props) => {
    let actorUrl = ActorsList.map ((actor) => {
        return (
            <Route path={`/actors/${actor.url}`} render={() => <Actor image={actor.profile_img} name={actor.name} details={actor.description}/>}></Route>
        )
    })


    return (
        <React.Fragment>
            <Route exact path="/actors" render={() => <Actors title="Best Actors"/>}></Route>
            {actorUrl}
        </React.Fragment>
    );

    }



export default ActorsContainer;

