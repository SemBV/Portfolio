import brightrolls from '../src/img/brightrolls.png';
import project1 from '../src/img/projone.png';
import project2 from '../src/img/projtwo.png';
import project3 from '../src/img/projthree.png';
import project4 from '../src/img/projfour.png';

function App() {
  return (
    <div style={{backgroundColor: "#be3144", width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{width: "100%", height: "10vh"}}>
        <ul style={{listStyle: "none", display: "flex", marginLeft: "25%", marginTop: "0.5%", marginBottom: "1%"}}>
        <li style={{padding: "1% 7%"}}><a href="#welcome" style={{textDecoration: "none", fontFamily: "monospace", fontSize: "1.3em", color: "whitesmoke"}}>welcome!</a></li>
        <li style={{padding: "1% 7%"}}><a href="#projects" style={{textDecoration: "none", fontFamily: "monospace", fontSize: "1.3em", color: "whitesmoke"}}>projects</a></li>
        <li style={{padding: "1% 7%"}}><a href="#contacts" style={{textDecoration: "none", fontFamily: "monospace", fontSize: "1.3em", color: "whitesmoke"}}>contacts</a></li>
      </ul></div>
          <div style={{backgroundColor: "#303841", width: "209vh", height: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden", boxShadow: "2px 5px 25px black", borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}>
          <div style={{backgroundColor: "#303841", width: "215vh", height: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", overflowX: "hidden", overflowY: "scroll"}}>
          <div id="welcome" style={{backgroundColor: "#303841", width: "100%", height: "fit-content", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 style={{color: "#f0f0f0", fontSize: "4em", marginTop: "37vh"}}>Hey, I am Sam</h1>
          <p style={{color: "#be3144", fontSize: "1.55em", fontStyle: "italic", marginTop: "0.3%"}}>a web developer</p>
          </div>
          <div style={{backgroundColor: "#303841", width: "100%",height: "fit-content", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div id="projects" style={{backgroundColor: "#303841", width: "100%", height: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60vh"}}><h1 style={{fontSize: "1.8em", color: "whitesmoke", fontWeight: "100",fontFamily: "monospace"}}>My projects:</h1></div>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${brightrolls})`, backgroundSize: "100% 100%", width: "70%", height: "80vh", margin: "10vh 0", boxShadow: "2px 5px 25px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <a href="http://brightrolls.in.net/" style={{textDecoration: "none"}}><p style={{fontStyle: "italic",fontSize: "3.5em", color: "whitesmoke", fontWeight: "100", textShadow: "1px 1px 10px black",marginTop: "-10%"}}>Bright Rolls website</p></a>
          </div> 
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${project4})`, backgroundSize: "100% 100%", width: "70%", height: "80vh", margin: "10vh 0", boxShadow: "2px 5px 25px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <a href="https://codepen.io/grandaim/pen/YzVNoKW" style={{textDecoration: "none"}}><p style={{fontStyle: "italic",fontSize: "3.5em", color: "whitesmoke", fontWeight: "100", textShadow: "1px 1px 10px black",marginTop: "-10%"}}>Survey form</p></a>
          </div> 
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${project3})`, backgroundSize: "100% 100%", width: "70%", height: "80vh", margin: "10vh 0", boxShadow: "2px 5px 25px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <a href="https://codepen.io/grandaim/pen/rNmjgGZ" style={{textDecoration: "none"}}><p style={{fontStyle: "italic",fontSize: "3.5em", color: "whitesmoke", fontWeight: "100", textShadow: "1px 1px 10px black",marginTop: "-10%"}}>Tribute Page</p></a>
          </div>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${project2})`, backgroundSize: "100% 100%", width: "70%", height: "80vh", margin: "10vh 0", boxShadow: "2px 5px 25px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <a href="https://codepen.io/grandaim/pen/LYyWrmo" style={{textDecoration: "none"}}><p style={{fontStyle: "italic",fontSize: "3.5em", color: "whitesmoke", fontWeight: "100", textShadow: "1px 1px 10px black",marginTop: "-10%"}}>JS documentation</p></a>
          </div>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${project1})`, backgroundSize: "100% 100%", width: "70%", height: "80vh", margin: "10vh 0", boxShadow: "2px 5px 25px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <a href="https://codepen.io/grandaim/pen/rNmydyg" style={{textDecoration: "none"}}><p style={{fontStyle: "italic",fontSize: "3.5em", color: "whitesmoke", fontWeight: "100", textShadow: "1px 1px 10px black",marginTop: "-10%"}}>Trombones</p></a>
          </div>
          <div></div>
          <div></div>
          </div>
          <div id="contacts" style={{display: "flex", width: "100%", height: "fit-content", margin: "40vh 0", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <p style={{fontSize: "2em", fontFamily: "monospace", color: "whitesmoke"}}>+38(050)023-96-30</p>
            <p style={{fontSize: "1.8em", fontFamily: "monospace", color: "whitesmoke"}}>telegram: @grandAim</p>
            </div>
        </div>
        </div>
          </div>
  );
}

export default App;
