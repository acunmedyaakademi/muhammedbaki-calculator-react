import './App.css'

function App() {
  return (
    <>

    <div className="calculator">
    <Header />
    <Sonuc />
    <Keyboard />
    </div>
    </>
  )
}


function Header(){
  return(
    <div className="header">
    <div className="logo">
      <img src="images/calculatorLogo.png" alt="" />
      <h1>Hesap Makinesi</h1>
    </div>
    <div className="theme">
      <h3>Tema</h3>
      <div className="theme-toggle">
        <input id="1" name="theme" type="radio" checked />
        <label for="1" onclick="window.location='index.html';"></label>
        <input id="2" name="theme" type="radio" />
        <label for="2" onclick="window.location='theme2/index.html';"></label>
        <input id="3" name="theme" type="radio" />
        <label for="3" onclick="window.location='theme3/index.html';"></label>
      </div>
    </div>
  </div>
  )
}


function Sonuc(){
  return(
    <div className="sonuc">
      <h1></h1>
    </div>
  )
}

function Keyboard(){
  return (
    <div className="keyboard">
    <button className="key">7</button>
    <button className="key">8</button>
    <button className="key">9</button>
    <button className="key del">DEL</button>
    <button className="key">4</button>
    <button className="key">5</button>
    <button className="key">6</button>
    <button className="key">+</button>
    <button className="key">1</button>
    <button className="key">2</button>
    <button className="key">3</button>
    <button className="key">-</button>
    <button className="key">.</button>
    <button className="key">0</button>
    <button className="key">/</button>
    <button className="key">*</button>
    <button className="reset">RESET</button>
    <button className="esit">=</button>
  </div>
  )
}

export default App
