import React from 'react';
import { Switch, Route} from 'react-router-dom';
import PageLanding from './pagelanding';
import Actuality from './actuality';
import MyQuizz from './quizz';
import Contact from './contactme';
import Paths from './pathschool';

const Main = () => (

    <Switch>
        <Route exact path ="/" component={PageLanding}/>
        <Route path ="/actuality" component={Actuality}/>
        <Route path ="/contact" component={Contact}/>
        <Route path ="/quizz" component={MyQuizz}/>
        <Route path ="/paths" component={Paths}/>

    </Switch>
)
export default Main;