import Header from "../components/Header";
import Slots from "../components/3Slots";
const Home = () => {
    return(
        <main>
            <div className="">
                <img src="/FirstPagePattern.png" className="absolute z-1 w-full h-full opacity-20"/>
            </div>
            <Header/>
            {/* <Slots/> */}
        </main>
    )
}
export default Home;