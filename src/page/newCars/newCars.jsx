import './newCars.css'
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import Filter from '../../component/filter/filter.jsx'
import Up from '../../component/up/up.jsx'
import { CiSearch } from "react-icons/ci";
import NewFilterCard from '../../component/card/newFilterCard.jsx'
const NewCars = () => { 
    return<>
    <div className="newHeader">
        <Header></Header>
        <div className="newHeaderh1">
            <h1>New Cars</h1>
            <p>Homepage - New Cars</p>
        </div>
    </div>
    <div className="newBody">
        <Filter></Filter>
        <div className="newBodyRight">
            <div className="newBodyRightSearch">
                <CiSearch style={{position:"absolute",zIndex:"999",fontSize:"25px",paddingLeft:"1%"}}></CiSearch>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="newCard">
                <NewFilterCard></NewFilterCard>
            </div>
        </div>
    </div>
    <Up></Up>
    <Footer></Footer>
    </>
}
export default NewCars 