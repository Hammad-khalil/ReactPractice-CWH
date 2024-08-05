import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  return (
    <>
      <Navbar />
      <main>This is my site main content</main>
      <div className="cards">
        <Card title="Pikachu" description="Pika Pika Pikachu ⚡⚡" />
        <Card title="Charmender" description="Char Char Charmender 🔥🔥" />
        <Card title="Squirtle" description="Squirtle Squirtle 💧💧" />
        <Card title="Bibasaur" description="Bibasaur 🍃🍃" />
      </div>
      <Footer />
    </>
  )
}

export default App
