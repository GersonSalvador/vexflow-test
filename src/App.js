import React from 'react';

import Score from './components/index'

function App() {

  return (
    <div className="App">
      <div id="boo"></div>
      <Score
        staves={[
          ['g3', ['d4',8], ['e4', 32], 'd4'],
          ['a4', 'd4', 'e4', 'd4'],
          ['a4', 'a4', 'b4', 'a4'],
          ['d4', 'e4', ['g3', 2]],
          [['e4',1]]
        ]}
      />
    </div>
  );
}

export default App;
