import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Ladding extends Component {
    render() {
        return (

            <div style = {{ width: '100%', margin: 'auto'}}>
<h1 className="text-transition">Le Site MiguelYann Space disponible très bientôt, avec tous vos Quizz disponibles en Anglais et en Français, pour vous aidez à tester vos connaissances
 en programmation, et vous maintenir à jour sur toutes les nouveautés technologiques</h1>
            <Grid className = "landing-grid">
            
            <Cell col = {12}>
            
           <img src={require('./me.png')} 
           className="avatar-img" alt="moi"
           />
            <div className="banner-text">
            <h1>Developpeur Web</h1>
            <hr/>
            <p>HTML - CSS - JAVASCRIPT - REACTJS - ANGULAR - NODEJS - JAVA</p>
            <div className="social-links">

{/* LinkedIn */}
<a href="https://www.linkedin.com/in/miguel-yann-tsamba-67bb30148/" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-linkedin-square" aria-hidden="true" />
</a>

{/* Github */}
<a href="https://github.com/MiguelYann" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-github-square" aria-hidden="true" />
</a>



{/* Youtube */}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-youtube-square" aria-hidden="true" />
</a>
        </div>
        </div>
            </Cell> 
            </Grid> 
            </div>
        )
    }
}
export default Ladding;