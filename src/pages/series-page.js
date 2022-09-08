import Footer from "../components/footer";
import Header from "../components/header";
import SeriesDetails from "../components/series-details";
import SeriesSort from "../components/series-sort";
import episodesData from "./episodes-data";


const episodes = [episodesData[0]];

function SeriesPage() {
    return(
        <>
            <Header />
            <SeriesSort />
            <SeriesDetails episodes={episodes}/>
            <Footer />

        </>
    )
}

export default SeriesPage;