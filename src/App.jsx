// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




import React, { useState, useEffect } from "react";
import "./App.css";
import images from "./assets/images.jsx";

function App() {
    let [likes, setLikes] = useState(0);
    let [show, setShow] = useState(true);
    let [color, setColor] = useState("#20252b");
    let [message, setMessage] = useState("");
    let [users, setUsers] = useState([]);

    // Get users from API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.slice(0, 6));
            })
            .catch(() => {
                setMessage("Unable to load users. Please try again.");
            });
    }, []);

    console.log(users,"users")

    return (
        <div className="main">

            
            <div className="box" style={{ backgroundColor: color }}>
                <h1>Vikings</h1>

                {message && <p className="alert">{message}</p>}

                <img src={images.anto} alt="Vikings" />

                {show && (
                    <p>
                        Power is dangerous. It corrupts the best and attracts the worst.
                        <br />
                        — Ragnar Lothbrok
                    </p>
                )}

                <div className="buttons">
                    <button onClick={() => {
                        setLikes(likes + 1);
                        setMessage("You liked this page!");
                    }}>
                        Like {likes}
                    </button>

                    <button onClick={() => {
                        setShow(!show);
                        setMessage(show ? "Quote hidden!" : "Quote displayed!");
                    }}>
                        {show ? "Hide Quote" : "Show Quote"}
                    </button>

                    <button onClick={() => {
                        setColor("#dfe7ea");
                        setMessage("Background colour changed!");
                    }}>
                        Change Background
                    </button>
                </div>
            </div>

                    
            <div className="user-section">
                <h1>User Details</h1>

                <div className="users">
                    {users.map((user) => (
                        <div className="card" key={user.id}>
                            <h2>{user.username}</h2>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default App;

 



















