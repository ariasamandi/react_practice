let words = ["Fundamental", "essential", "Basic", "Important", "Rudimentary", "Foundational", "Simple"]
function getNumber(){
  return Math.floor(Math.random() * 7 )
}

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {words[getNumber()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
