import "../components/header"
import Header from "../components/header"
import Footer from "../components/footer"
import HomeMainSlider from "../components/home-main-slider"
import Sliders from "../components/sliders"
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Movies from '../pages/movies';

import image1 from "../img/Melody_Homepage-movie1.jpg"
import image2 from "../img/Melody_Homepage-movie2.jpg"
import image3 from "../img/Melody_Homepage-movie3.jpg"
import image4 from "../img/Melody_Homepage-movie4.jpg"
import image5 from "../img/Melody_Homepage-movie5.jpg"
import movies from "./movies-data"

const main_slider_images =[movies[0], movies[6], movies[11], movies[16], movies[22]]
const movies_images = [movies[0], movies[6], movies[11],movies[18],movies[22],movies[30],movies[32]];
const series_images = [movies[6], movies[6], movies[6],movies[6],movies[6],movies[6],movies[6],movies[6],movies[6],movies[6],movies[6],movies[6],movies[6]];
const plays_images = [movies[11], movies[11], movies[11],movies[11],movies[11],movies[11],movies[11],movies[11],movies[11],movies[11],movies[11],movies[11],movies[11]];
const classics_images = [movies[16], movies[16], movies[16],movies[16],movies[16],movies[16],movies[16],movies[16],movies[16],movies[16],movies[16],movies[16],movies[16]];
const collections_images = [movies[22], movies[22], movies[22],movies[22],movies[22],movies[22],movies[22],movies[22],movies[22],movies[22],movies[22],movies[22],movies[22]];



function Home() {
    return(
        <>
            <Header /> 
            <HomeMainSlider images={main_slider_images}/>
            <Sliders category="MOVIES" images={movies_images} />
            <Sliders category="SERIES" images={series_images} />
            <Sliders category="PLAYS" images={plays_images} />
            <Sliders category="CLASSICS" images={classics_images} />
            <Sliders category="COLLECTIONS" images={collections_images} />
            <Footer />
            
        </>
    )
}
export default Home;