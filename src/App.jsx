import Header from "./components/header"
import Footer from "./components/footer"
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
  <>
    <Header/>
    <ServiceCard head="Web Development"  skills="CSS, JS, GIT, DJANGO,MONGODB"/>
    <ServiceCard head="Web application pentesting" skills="API testing, Burpsuite, Common pentest tools"/>
    <ServiceCard head="Training" skills="coaching, communication, tutoring"/>
    <ServiceCard head="Content Writimg and SEO" skills="SEO, Web app Security"/>
    <Footer/>

  </>
  );
  
}

export default App
