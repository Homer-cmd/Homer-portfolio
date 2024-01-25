import "./app.scss"
import NavBar from "./components/navbar/NavBar";
import LeftNav from "./components/sidebar/LeftNav";
import RightNav from "./components/sidebar/RightNav";
import Hero from "./pages/hero/Hero";
const App = () => {
  return ( 
    <div id="Home">
      <nav>
      <NavBar />
      <LeftNav />
      <RightNav />
      </nav>
      <section>
        <Hero />
      </section>
      <section>paralax</section>
      <section id="About">about</section>
      <section>paralax</section>
      <section id="Project">project1</section>
      <section>project2</section>
      <section id="Conatact">contact</section>
      <section id="Resume">resume</section>
      
    </div>
   );
}
 
export default App;
