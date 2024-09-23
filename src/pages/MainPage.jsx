import Navbar from "../components/Navbar";
import InfoBlock from "../components/InfoBlock";
import Footer from "../components/Footer";


const MainPage = () => {
    return(
        <div className='flex-col'>
            <Navbar />
            <InfoBlock />
            <Footer />
        </div>
    )
}

export default MainPage;

