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
        <Header title="<MYSpace> " className="header-color" scroll>
        
            <Navigation>
                <Link to="/actuality">Actualités</Link>
                <Link to="/quizz">Quizz</Link>
                <Link to="/contact">Me Contacter</Link>
                <Link to="/paths">Mon Parcours</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to="/actuality">Actualités</Link>
                <Link to="/quizz">Quizz</Link>
                <Link to="/contact">Me Contacter</Link>
                <Link to="/paths">Mon Parcours</Link>
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