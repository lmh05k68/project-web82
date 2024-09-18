import './detail.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Data from '../../data.js'
import {useParams,Link} from 'react-router-dom'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Up from '../up/up.jsx'
import Star from '../star/star.jsx'
const Detail = ({data}) => {
    const { id } = useParams();
    const car = Data.find(car => car.id === parseInt(id));
    if (!car) {
        return <div>Car not found</div>;
    }
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    return <>
        <div className="newHeader">
            <Header></Header>
            <h1>{car.name}</h1>
            <p>Homepage - Car Details</p>  
        </div>
        <img src={car.image} alt={car.name} width="100%" height="600px" />
        <div className="detailBody">
            <div style={{display:"flex"}}>
                <div className="leftColumn">
                    <div className="des">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                        aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                        scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
                        at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
                        auctor.</p>
                    </div>
                    <div className="feature">
                        <h3>Feature</h3>
                        <div className="featureContainer">
                        {car.features.map((feature, index) => (
                        <div key={index} className="features">{feature}</div>
                        ))}
                        </div>
                    </div>
                    <div className="dealer">
                        <h3>Dealer info</h3>
                        <div className="dealerIn4">
                            <div className="dealerImg">
                                <img src="/dealer.png"></img>
                                <div className="dealerName">
                                    <h4>Alfredo Gouse</h4>
                                    <p>Dealer</p>
                                </div>
                            </div>
                            <div className="dealerLine"></div>
                            <div className="dealerPhone">
                                <FaPhone></FaPhone>
                                <h4>240-865-3730</h4>
                            </div>
                            <div className="dealerLine"></div>
                            <div className="dealerPhone">
                                <FaEnvelope></FaEnvelope>
                                <h4>alfred.g@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="detailContact">
                        <h3>Contact</h3>
                        <form className="contactForm">
                            <div className="nameEmail">
                                <div className="formChildName">
                                    <label htmlFor="name" >Name</label>
                                    <input type="text" id="name" placeholder="Full Name"></input>
                                </div>
                                <div className="formChildEmail">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="email@gmail.com"></input>
                                </div>
                            </div>
                            <div className="nameEmail">
                                <div className="formChildPhone">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" id="phone" placeholder="(000) 000-0000"></input>
                                </div>
                                <div className="formChildSubject">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject">
                                        <option>Subject</option>
                                        <option>b</option>
                                    </select>
                                </div>
                            </div>
                            <div className="formChildCmt">
                                <label htmlFor="cmt">Comment</label>
                                <textarea id="cmt" placeholder="Leave a message here"></textarea>
                            </div>
                            <button type="submit">Contact Dealer</button>
                        </form>
                    </div>
                    <div className="contactLocation">
                        <h3>Location</h3>
                        <p>9500 E Tsala Dr.Floral City, FL.34436, Florida, USA</p>
                        <img src="/Frame 142.png" width="95%"></img>
                    </div>
                </div>
                <div className="rightColumnContainer">
                    <div className="rightColumnPrice"><h3>{car.price}</h3></div>
                    <div className="rightColumn">
                        <div className="rightDetail">
                            <h3>Car Details</h3>
                            <div className="rightChild">
                                <p>Brand</p>
                                <h4>{car.brand}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Condition</p>
                                <h4>{car.state}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Year</p>
                                <h4>{car.year}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Body Type</p>
                                <h4>{car.bodyType}</h4>
                            </div>
                            <div className="rightChild"> 
                                <p>Seats</p>
                                <h4>{car.seat} People</h4>
                            </div>
                        </div>
                        <div className="rightDetailLine"></div>
                        <div className="rightDetail">
                            <h3>Engine</h3>
                            <div className="rightChild">
                                <p>Fuel Type</p>
                                <h4>{car.energy}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Mileage</p>
                                <h4>{car.mileage}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Transmission</p>
                                <h4>{car.transmission}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Drivetrain</p>
                                <h4>{car.style}</h4>
                            </div>
                            <div className="rightChild"> 
                                <p>Power</p>
                                <h4>{car.power}</h4>
                            </div>
                        </div>
                        <div className="rightDetailLine"></div>
                        <div className="rightDetail">
                            <h3>Dimension</h3>
                            <div className="rightChild">
                                <p>Length</p>
                                <h4>{car.length}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Width</p>
                                <h4>{car.width}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Height</p>
                                <h4>{car.height}</h4>
                            </div>
                            <div className="rightChild">
                                <p>Cargo Volume</p>
                                <h4>{car.cargoVolume}</h4>
                            </div>
                        </div>
                        <div className="rightDetailLine"></div>
                        <div className="detailStar">
                            <Star></Star>
                            <h4>(12 comments)</h4>
                        </div>
                        <Link to="/cmp"><button className="detailCompare">Compare Cars</button></Link>
                    </div>
                </div>
            </div>
            <div className="credit">
                    <h3>Credit Simulation</h3>
                    <div className="priceContainer">
                        <div className="priceLeft">
                            <div className="priceRate">
                                <div className="priceTotal">
                                    <label htmlFor="price">Price</label>
                                    <input type="text" id="price" placeholder="$56,690"></input>
                                </div>
                                <div className="priceTotal">
                                    <label htmlFor="rate">Interest Rate (%)</label>
                                    <input type="text" id="rate" placeholder="12%"></input>
                                </div>
                            </div>
                            <div className="monthDown">
                                <div className="priceTotal">
                                    <label htmlFor="month">Period in months</label>
                                    <select id="month">
                                        {months.map(month => (
                                            <option key={month} value={month}>
                                                {month} Months
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="priceTotal">
                                    <label htmlFor="down">Down Payment</label>
                                    <input type="text" id="down" placeholder="$24,480"></input>
                                </div>
                            </div>
                        </div>
                        <div className="monthly">
                            <h3>Monthly Payment</h3>
                            <div className="detailLine">
                                <div className="detailLine1"></div>
                                <div className="detailLine2"></div>
                            </div>
                            <h1 style={{color:"#007CC7"}}>$2,878</h1>
                        </div>
                    </div>
                </div>
        </div>
        <Up></Up>
        <Footer></Footer>
    </>
}
export default Detail