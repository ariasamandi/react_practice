import reactIMG from '../assets/react-core-concepts.png';
let words = ["Fundamental", "essential", "Basic", "Important", "Rudimentary", "Foundational", "Simple"]
export function getNumber(){
  return Math.floor(Math.random() * 7 )
}
export default function Header(){
    return(
      <header>
        <img src={reactIMG} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {words[getNumber()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }