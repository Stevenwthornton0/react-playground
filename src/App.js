import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip.js';
import Messages from './messages.js';
import TheDate from './state/TheDate.js';
import Counter from './state/counter.js';
import HelloWorld from './state-drills/hello-world.js';
import Bomb from './state-drills/bomb.js'
import RouletteGun from './state-drills/roulette-gun'

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//     ipsum
//   </Tooltip>
// );

// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )


function App() {
  return (
    <main className='App'>
      {/* <Split className='left' flexBasis='2'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br /> */}
        {/* make another tooltip directly inside the App */}
        {/* <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>

      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>

      <TheDate />

      <Counter step={2} /> */}

      {/* <HelloWorld /> */}

      {/* <Bomb /> */}

      <RouletteGun />

    </main>
  );
}

export default App;