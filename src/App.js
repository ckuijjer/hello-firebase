import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';

import firebase from 'firebase';
import firebaseConfig from './firebase.config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      name: '',
      text: '',
    };

    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    this.database.ref('/').on('value', snapshot => {
      const data = snapshot.val();
      const keys = Object.keys(data);

      const messages = keys.map(key => data[key]);

      this.setState({ messages });
    });
  }

  setName = event => this.setState({ name: event.target.value });

  setText = event => this.setState({ text: event.target.value });

  send = () => {
    this.setState({
      text: '',
      // messages: [
      //   ...this.state.messages,
      //   {
      //     name: this.state.name,
      //     text: this.state.text,
      //   },
      // ],
    });

    this.database.ref().push({
      name: this.state.name,
      text: this.state.text,
    });
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        height: '100vh',
        boxSizing: 'border-box',
      },
      list: {
        flex: 1,
        border: '1px solid #eee',
      },
      inputs: {
        display: 'flex',
        flexDirection: 'column',
      },
      input: {
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
      },
    };

    return (
      <div style={styles.container}>
        <List style={styles.list}>
          {this.state.messages.map((message, i) => (
            <ListItem key={i}>
              <ListItemText primary={message.name} secondary={message.text} />
            </ListItem>
          ))}
        </List>
        <div style={styles.inputs}>
          <TextField
            label="name"
            value={this.state.name}
            onChange={this.setName}
            style={styles.input}
          />
          <TextField
            label="text"
            value={this.state.text}
            onChange={this.setText}
            style={styles.input}
          />
          <Button
            color="primary"
            raised
            onClick={this.send}
            style={styles.input}
          >
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
