import React from 'react';
import { connect } from 'react-redux';

import QueueList from './QueueList';
import '../css/App.css';

import { Typography } from '@material-ui/core';


function App(props: any) {

  const {
    storedTitle
  } = props;

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">
          Michael Scott Queue Service
        </Typography>
      </header>
      <main>
        <Typography gutterBottom>
          {storedTitle}
        </Typography>
        <QueueList />
      </main>
    </div>
  );
}

const mapStateToProps = (store: any) => ({
  storedTitle: store.appState.title,
});

export default connect(mapStateToProps)(App);
