import React, { Component } from 'react';
import {Tabs, Tab, CardActions, Card, CardTitle, Button, CardMenu, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activatetab: 0};
    }

    toggleCategories(){
        if(this.state.activetab ===0){
        return(
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
<CardTitle style={{color:'#fff' , height: '175px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg)'}}>
React Project #1

</CardTitle>
<CardText>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum totam quod molestias est maiores illum et modi, ullam non, maxime tempore praesentium animi neque, deserunt dicta quas natus at!
</CardText>
<CardActions border>

<Button colored>GitHubGitHub</Button>

</CardActions>
<CardMenu style={{color:'#fff'}}>

</CardMenu>
            </Card>
        )
        } else if(this.state.activatetab ===1){
            return(
                <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
<CardTitle style={{color:'#fff' , height: '75px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center/cover'}}>
React Project #1

</CardTitle>
<CardText>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum totam quod molestias est maiores illum et modi, ullam non, maxime tempore praesentium animi neque, deserunt dicta quas natus at!
</CardText>
<CardActions border>

<Button colored>GitHub</Button>

</CardActions>
<CardMenu style={{color:'#fff'}}>

</CardMenu>
            </Card>
                )
            } else if(this.state.activatetab===2){
                return(
                 <div><h1>Spring Boot</h1></div>
                )
            }
            else if(this.state.activatetab===3){
                return(
                <div><h1>NodeJS</h1></div>

                )
            }

        }
    

    render() {
        return (

            <div className="category">
                <Tabs activatetab={this.state.activatetab} onChange={(tabId) =>this.setState({activatetab:tabId})} ripple>

                    <Tab>ReactJS</Tab>
                    <Tab>ANGULAR</Tab>
                    <Tab>SPRINGBOOT</Tab>
                    <Tab>NODEJS</Tab>
                </Tabs>
                <section className ="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}
export default Projects