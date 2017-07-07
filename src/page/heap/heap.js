import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import HeapCytoscape from '../../visual/heap_cytoscape.js';
import './heap.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


class TabTemplate extends React.Component {
  render() {
    if (!this.props.selected) {
      return null;
    }

    return this.props.children;
  }
}

export default class HeapComponent extends React.Component {
  get styles() {
    return {
      paper: {
        margin: '20px 20px 20px 20px',
        height: '95%'
      },
      card: {
        height: '100%'
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '6,5,3,2,1,4,5,5,5,5,5,5,4,6,6,2,3,36,35,2,21,5,8,74,5,4,9,0,8,8,6,7'
    };
  }

  onChange(event) {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <Paper zDepth={2} style={this.styles.paper} >
        <card style={this.styles.card}>
          <CardTitle title='Heap Visualization' subtitle='Visualize list before and after list was heapified' />
          <CardText>
            <TextField
              onChange={this.onChange.bind(this)}
              defaultValue={this.state.value}
              floatingLabelText='List used to construct heap'
            />
            <HeapCytoscape value={this.state.value} />

          </CardText>
        </card>
      </Paper>
    );
  }
}
