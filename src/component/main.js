import React from 'react';
import { Switch, Route} from 'react-router-dom';
import PageLanding from './pagelanding';
import Aboutme from './aboutme';
import Myproject from './myproject';
import Contact from './contactme';
import Resume from './resume';

const Main = () => (

    <Switch>
        <Route exact path ="/" component={PageLanding}/>
        <Route path ="/aboutme" component={Aboutme}/>
        <Route path ="/contact" component={Contact}/>
        <Route path ="/projects" component={Myproject}/>
        <Route path ="/resume" component={Resume}/>

    </Switch>
)
export default Main;