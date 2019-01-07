import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import Routes from './Routes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

  const jsonData = [{
     'id': 1,
     'header':'HONGKONG',
     'name': 'HONGKONG TECHNOLOGY',
     'volatility': '26.8%',
     'mean_return': '2.96%',
     'currency': 'SGD',
     'type': 'Equity',
  },{'name': 'INFOVIEW TECHNOLOGY','header':'INFOVIEW',
  'volatility': '26.8%',
  'mean_return': '2.96%',
  'currency': 'SGD',
  'type': 'Equity'},{'name': 'INAUTIX TECHNOLOGY','header':'INAUTIX',
  'volatility': '26.8%',
  'mean_return': '2.96%',
  'currency': 'SGD',
  'type': 'Equity'},{'name': 'TEKION TECHNOLOGY','header':'TEKION',
  'volatility': '26.8%',
  'mean_return': '2.96%',
  'currency': 'SGD',
  'type': 'Equity'}]

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.moveTOAnotherPage = this.moveTOAnotherPage.bind(this);
        // this.customisePage = this.customisePage.bind(this);
    }

    handleChange(event){
        event.target.name = event.target.value
      this.setState({
          name:event.target.name
      });
    }

    moveTOAnotherPage(){
      return <div><Routes/></div>
    }

    render() {
      return (
        <div className="App">
        <AppBar color="green" style={{backgroundColor:'#0fa1ca'}}>
        <Toolbar>
          <Typography variant="h6" color="green"  style={{textAlign:'center'}}>
          HongKong Technology PortFolios
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{marginTop:'4%',display:'flex'}}>
      {jsonData.map(res=>
      <Card style={{backgroundColor:'#efc4d7'}}>
        <CardHeader/>
        {res.header}
        <CardContent>
          <Typography component="p">
          Name: {res.name},<br/>
          Volatility: {res.volatility},<br/>
          Mean_return: {res.mean_return},<br/>
          Currency: {res.currency},<br/>
          Constituents: 'rdsf'<br/>
          Equity:{jsonData.type}
          </Typography>
        </CardContent>
        <NavLink to="/customisePage">
        <Button color="secondary">
        Go to customisePage</Button>
        </NavLink>
      </Card>
      )}
      </div>
        </div>
      );
    }
  }
  
  export default (HomePage);