import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
        <div className="container"> 
            <Header />
            <Menu /> 
            <Footer />
        </div>
    );
}

function Header() {
    // const style = {color: 'red', fontSize: '48px', textTransform: 'uppercase' }
    const style = {}

    return (
        <header className="header">
            <h1 style={style}>
                Fast React Pizza Co.
            </h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

     return (
        <main className='menu'>
            <h2>Our Menu</h2>

        {numPizzas > 0 ? (
            <>
                <p>Authentic italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
                <ul className="pizzas">
                            {pizzas.map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            ))}
                </ul>
            </>
            ) : (
            <p>We're Still Working On Our Menu Please Come Back Later :-)</p>
        )}


            {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10} />
            <Pizza name="Pizza Funghi" ingredients='Tomato, mushroom' price={12} photoName="pizzas/funghi.jpg"></Pizza> */}
        </main>
     )
}

function Pizza({pizzaObj}) {
    console.log(pizzaObj)

    // if(pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>} */}

                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    // return React.createElement('footer', null, "We're Currently Open!")
    const hour = new Date().getHours();
    const openHour = 0;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    // if(hour >= openHour && hour <= closeHour) alert("We're Currently Open!"); 
    // else alert("Sorry we're closed");

    // if(!isOpen) 
    //     return (
    //         <p>Sorry, we are currently not accepting any order, please come between {openHour}:00 to {closeHour}:00</p>
    // ) 

    return (
    <footer className="footer">
        {isOpen ? (<Order closeHour={closeHour} openHour={openHour}/>):(<p>Sorry, we are currently not accepting any order, please come between {openHour}:00 to {closeHour}:00</p>)}
    </footer>
    );
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
                <p>
                    We're Open from {openHour}:00 till {closeHour}:00. Come visit us or order online 
                </p>
                <button className="btn">order</button>
            </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

