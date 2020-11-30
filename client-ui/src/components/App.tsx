import React from 'react';
import { connect } from 'react-redux';

import QueueList from './QueueList';
import '../css/App.css';

// interface IProps {
//   states: IAppState;
//   actions: IAppProps;
// }

function App(props: any) {

  const {
    storedTitle
  } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h3>Little pretty keyboard 2009</h3>
      </header>
      <main>
        {storedTitle}
        <QueueList />
      </main>
    </div>
  );
}

const mapStateToProps = (store: any) => ({
  storedTitle: store.appState.title,
});

export default connect(mapStateToProps)(App);
