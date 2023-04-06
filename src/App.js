import React, {useEffect, useState} from "react";
import "./styles/main.css";
import "./styles/menu.css";

const App = () => {

    const [Pos, setPos] = useState(13);

    useEffect(() => {
        function handleScroll(event) {
            const scrollPos = window.scrollY;
            const newPos = Math.max(13, 90 - scrollPos / 10);
            setPos(newPos);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="App">

      <div className="container">
        <ul className="nav">
          <li onMouseOver={() => setPos(13)}><a href="#">Menü</a></li>
          <li onMouseOver={() => setPos(83)}><a className="hsubs" href="#">Menü</a></li>

          <li onMouseOver={() => setPos(155)}>
                 <a href="#">Menü1</a>
             <ul className="subs">
                 <li><a href="">Almenü</a></li>
                 <li><a href="">Almenü</a></li>
                 <li><a href="">Almenü</a></li>
                 <li><a href="">Almenü</a></li>
                 <li><a href="">Almenü</a></li>
                 <li><a href="">Almenü</a></li>
             </ul>
          </li>

          <li onMouseOver={() => setPos(230)}><a href="#">Menü</a></li>
          <li onMouseOver={() => setPos(300)}><a href="#">Menü</a></li>
          <li onMouseOver={() => setPos(370)}><a href="#">Menü</a></li>
          <li onMouseOver={() => setPos(440)}><a href="#">Menü</a></li>
          <li onMouseOver={() => setPos(510)}><a href="#">Menü</a></li>
            <div className="slider" style={{ left: Pos }}></div>
        </ul>
      </div>

    </div>
  );
}

export default App;
