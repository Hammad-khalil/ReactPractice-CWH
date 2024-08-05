import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [cards, SetCards] = useState([]);
  const FetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    SetCards(data);
    console.log(data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <h1>{card.id}</h1>
              <p>{card.title}</p>
              <p>{card.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [cards, setCards] = useState([]);

//   const fetchData = async () => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     setCards(data);
//     console.log(data);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <div className="card">
//         {cards.map(card => (
//           <div key={card.id}>
//             <h1>{card.id}</h1>
//             <p>{card.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App;
