import Header from "./components/header"
import Footer from "./components/footer"
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
  <>
    <Header/>
    <ServiceCard heading="Web Development"  skills="CSS, JS, GIT, DJANGO,MONGODB"/>
    <ServiceCard heading="Web application pentesting" skills="API testing, Burpsuite, Common pentest tools"/>
    <ServiceCard heading="Training" skills="coaching, communication, tutoring"/>
    <ServiceCard heading="Content Writimg and SEO" skills="SEO, Web app Security"/>
    <Footer/>

  </>
  );
  
}

export default App
