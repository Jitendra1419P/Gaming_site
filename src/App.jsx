import './App.css';
import Contact from './Component/Contact/Contact';
import Copyright from './Component/Copyright/Copyright';
import Footer from './Component/Footer/Footer';
import GameCards from './Component/GameCards/GameCards';
import Header from './Component/Header/Header';
import Insta from './Component/Insta/Insta';
import Marquee from './Component/Marquee/Marquee';
import Mission from './Component/Mission/Mission';
import Nav from './Component/Nav/Nav';
import Services from './Component/Services/Services';
import Team from './Component/Team/Team';
import Testimonials from './Component/Testimonials/Testimonials';
import VideoBg from './Component/VideoBg/VideoBg';
import Works from './Component/Works/Works';

const App = () => {
    return (
        <>
            <Nav />
            <Header />
            <Services />
            <Marquee />
            <GameCards />
            <VideoBg />
            <Mission />
            <Team />
            <Works />
            <Testimonials />
            <Contact />
            <Insta />
            <Footer />
            <Copyright />
        </>
    );
};

export default App;
