import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';

const jsonData = [{
    'company': 'kiruba', 'totalWeight': '34'
}, {
    'company': 'kiruba', 'totalWeight': '74'
}, {
    'company': 'sankar', 'totalWeight': '84'
}]


class CustomisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: 'off',
            disabled: false,
            totalWeight: 50,
            rebalanceWeight: '',
            inputValue: ''
        }
        this.enableCheckbox = this.enableCheckbox.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.addValue = this.addValue.bind(this);
        this.negativeValue = this.negativeValue.bind(this);
    }

    enableCheckbox(event) {
        this.setState({
            check: !(event.target.value),
            disabled: true
        });
    }

    addValue() {
        if (this.state.inputValue) {
            this.setState({
                rebalanceWeight: this.state.totalWeight + Number(this.state.inputValue),
                totalWeight: this.state.totalWeight - Number(this.state.inputValue)
            });
        }
    }

    negativeValue() {
        if (/[0-9]/.test(this.state.inputValue)) {
            this.setState({
                rebalanceWeight: this.state.totalWeight - Number(this.state.inputValue),
                totalWeight: this.state.totalWeight + Number(this.state.inputValue)
            });
        }
    }

    getInputValue(event) {
        this.setState({
            inputValue: event.target.value
        });
    }


    render() {
        return (
            <div style={{ backgroundColor: 'rgb(245, 224, 88)' ,marginTop:64}}>
                <AppBar color="green" style={{ backgroundColor: '#0fa1ca' }}>
                    <Toolbar>
                        <Typography variant="h6" color="green" style={{ textAlign: 'center' }}>
                            HongKong Technology PortFolios
          </Typography>
                    </Toolbar>
                </AppBar>
                <table className={'table'}>
                    <tr>
                        <th>Company</th>
                        <th>Total Weight</th>
                        <th>Rebalanceing Weight</th>
                    </tr>
                    {jsonData.map(res =>
                        <tr>
                            <td className={'td'}>{res.company}</td>
                            <td className={'td'}>{this.state.totalWeight}</td>
                            <td className={'td'}>{this.state.rebalanceWeight}</td>
                            <td className={'td'}><input type='checkbox' style={{ marginLeft: 10 }} onClick={(event) => this.enableCheckbox(event)} /></td>
                            <td className={'td'}>
                                <input type='button' style={{ marginLeft: '5%' }} value='+' onClick={() => this.addValue()} />
                                <input type='text' style={{ marginLeft: '5%' }} disabled={this.state.disabled} onChange={(event) => this.getInputValue(event)} value={this.state.inputValue} />
                                <input type='button' value='-' style={{ marginLeft: '5%' }} onClick={() => this.negativeValue()} /></td>
                        </tr>
                    )}

                </table>
            </div>
        )
    }
}

export default CustomisePage;