import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Heapd3 from '../../visual/heapd3';
import './heaptab.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
//   tab : {
//     flex: '1 1 100%',
//     minHeight: 0,
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   tab_content: {
//     flex: '1 1 100%',
//     display: 'flex',
//     flexDirection: 'column',
//     overflowY: 'auto',
//   }
// };
class TabTemplate extends React.Component {
  render() {
    if (!this.props.selected) {
      return null;
    }

    return this.props.children;
  }
}

export default class HeapTabComponent extends React.Component {
  get styles() {
    return {
      paper: {
        margin: '20px 20px 20px 20px',
        height: '95%'
      },
      card: {
        height: '100%'
      },
      tabTemplate: {
        height: '100%'
      },
      tabContainer: {
        //height: '1000px',
        //position: 'absolute',
        height: '100%',
        width: 'auto',
        'background-color': 'blue'
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Paper zDepth={2} style={this.styles.paper} >
        <card style={this.styles.card}>
          <CardTitle title='Heap Visualization' subtitle='Visualize list before and after list was heapified' />
          <CardText>
            <TextField
              defaultValue='6, 5, 3, 2, 1, 4,5,5,5,5,5,5,4,6,6,2,3,36,35,2,21,5,8,74,5,4,9,0,8,8,6,7'
              floatingLabelText='List used to construct heap'
            />
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              tabItemContainerStyle={this.styles.tabTemplate} // tab label
              contentContainerStyle={this.styles.tabContainer} // this controls style of items owned by tab
              tabTemplateStyle={this.styles.tabTemplate} // tab template style
            >
              <Tab label='Before' value='a' style='{{height: "100%" }}'>
                <Heapd3 />
              </Tab>
              <Tab label='After' value='b'>
                <div>
                  <h2>After</h2>
                  <p>
                    This is another example of a controllable tab. Remember, if you
                    use controllable Tabs, you need to give all of your tabs values or else
                    you wont be able to select them.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </CardText>
        </card>
      </Paper>
    );
  }
}
