import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import './sell.css'
const Sell = () => {
    return <>
        <div className="newHeader">
            <Header></Header>
            <h1>Sell Cars</h1>
            <p>Homepage - Sell Cars</p>
        </div>
        <div className="sell">
            <img src="Rectangle 108.png" style={{position:"relative"}} width="100%"></img>
            <div className="sellForm">
                <h1>Sell your car</h1>
                <form className="sellFormContainer">
                    <div className="namePrice">
                        <div className="sellFormChild">
                            <label htmlFor="car">Car Name</label>
                            <input id="car" placeholder="Full Name" type="text"></input>
                        </div>
                        <div className="sellFormChild">
                            <label htmlFor="price">Price</label>
                            <input id="price" placeholder="Price" type="text"></input>
                        </div>
                    </div>
                    <div className="namePrice">
                        <div className="sellFormChild">
                            <label htmlFor="place">Place</label>
                            <input id="place" placeholder="Place" type="text"></input>
                        </div>
                        <div className="sellFormChild"> 
                            <label htmlFor="year">Year</label>
                            <input id="year" type="text" placeholder="Year"></input>
                        </div>
                    </div>
                    <div className="namePrice">
                        <div className="sellFormChild">
                            <label htmlor="transmission">Transmission</label>
                            <select id="transmission">
                                <option>Automatic</option>
                                <option>Manual</option>
                            </select>
                        </div>
                        <div className="sellFormChild">
                            <label htmlFor="mileage">Mileage</label>
                            <input type="number" id="mileage" placeholder="123456 (km)"></input>
                        </div>
                    </div>
                </form>
                <button type="submit" className="sellBtn">Send</button>
            </div>
        </div>
        <Footer></Footer>
    </>
}
export default Sell