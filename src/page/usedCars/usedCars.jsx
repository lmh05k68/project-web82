import './usedCars.css'
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import Filter from '../../component/filter/filter.jsx'
import Up from '../../component/up/up.jsx'
import { CiSearch } from "react-icons/ci";
import UsedFilterCard from '../../component/card/usedFilterCard.jsx'
const UsedCars = () => { 
    return<>
    <div className="newHeader">
        <Header></Header>
        <h1>Used Cars</h1>
        <p>Homepage - Used Cars</p>
    </div>
    <div className="newBody">
        <Filter></Filter>
        <div className="newBodyRight">
            <div className="newBodyRightSearch">
                <CiSearch style={{position:"absolute",zIndex:"999",fontSize:"25px",paddingLeft:"1%"}}></CiSearch>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="newCard">
                <UsedFilterCard></UsedFilterCard>
            </div>
        </div>
    </div>
    <Up></Up>
    <Footer></Footer>
    </>
}
export default UsedCars 