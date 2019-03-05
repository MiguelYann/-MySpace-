import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <div className="demo-big-content">
    <Layout>
        <Header title="M-Y WORLD " scroll>
            <Navigation>
                <Link to="/resume">Mon Quotidien</Link>
                <Link to="/aboutme">A propos de moi</Link>
                <Link to="/contact">Mes Contacts</Link>
                <Link to="/projects">Mon parcours</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/resume">Mon Quotidien</Link>
                <Link to="/aboutme">A propos de moi</Link>
                <Link to="/contact">Mes Contacts</Link>
                <Link to="/projects">Mon Parcours</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>
        )



    }
}

export default App;