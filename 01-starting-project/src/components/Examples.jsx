import TabButton from "./TabButton"
import {EXAMPLES} from './../data.js'
import {useState} from 'react'
import Section from './components/Section.jsx'

export default function Examples(){
    function handleOnSelect(selectedButton){
        const [selectedTopic, setSelectedTopic] = useState("components")
        setSelectedTopic(selectedButton)
        console.log(selectedButton)
    }
    return(
        <Section id = "examples">
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
        </Section> 
    )
}