import componentIMG from './assets/components.png'
import configIMG from './assets/config.png'
import jsxIMG from './assets/jsx-ui.png'
import reactCoreConceptsIMG from './assets/react-core-concepts.png'
import statemgmt from './assets/state-mgmt.png'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import {useState} from 'react'
import {EXAMPLES} from './data.js'
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components")
  function handleOnSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedButton)
}
  return (
    <div>
      <Header/>
      <main>
        <section id = "core-concepts">
          <h2>Time to get started!</h2>
          <ul> 
            <CoreConcept 
            title = "Components" 
            description = "The core ui building block"
            image ={componentIMG}/>
            <CoreConcept 
            title = "JSX" 
            description = "Return (potentially dynamic) HTML(ish)code to define the actual markup that will be rendered."
            image ={jsxIMG}/>
            <CoreConcept
            title = "Props" 
            description = "Make components configurable (and therefore reusable) by passing input data to them."
            image ={configIMG}/>
             <CoreConcept
            title = "State" 
            description = "React-managed data which, when changed, causes the component to re-render & the UI to update."
            image ={statemgmt}/>
          </ul>
          </section>
          <section id = "examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect = {() => handleOnSelect("Components")}>Components</TabButton>
              <TabButton onSelect = {() => handleOnSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect = {() => handleOnSelect("Props")}>Props</TabButton>
              <TabButton onSelect = {() => handleOnSelect("State")}>State</TabButton>
            </menu>
            <div id = "tab-content">
              <h3> {EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
        </section> 
      </main>
    </div>
  );
}

export default App;
