import componentIMG from './assets/components.png'
import configIMG from './assets/config.png'
import jsxIMG from './assets/jsx-ui.png'
import reactCoreConceptsIMG from './assets/react-core-concepts.png'
import statemgmt from './assets/state-mgmt.png'
import Header from './components/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'
function App() {
  
  
  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
