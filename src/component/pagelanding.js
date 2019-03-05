import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Ladding extends Component {
    render() {
        return (

            
            <div style = {
                { width: '100%', margin: 'auto' } } >
            
            <Grid className = "landing-grid" >
            
            <Cell col = { 12 }>
            
            <img src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/488f115d-6e44-4ccd-b238-b2699af64966/d7bmt54-cde04c58-1c7d-41d2-84aa-ba777a5e5e57.jpg/v1/fill/w_1192,h_670,q_70,strp/web_developer_wallpaper__code__by_plusjack_d7bmt54-pre.jpg  "
            alt = "monimage"
            className = "image" />
            
            </Cell> 
            </Grid> 
            </div>
        )
    }
}
export default Ladding;