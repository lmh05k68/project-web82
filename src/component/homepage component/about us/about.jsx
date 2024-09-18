import './about.css'
const About = () => {
    return <>
        <div className="about">
            <div className="aboutUs">
                <h1 style={{paddingTop:"5%"}}>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
                at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
                auctor.</p>
             
                <div className="aboutLine1">
                    <div className="vehicle">
                        <h1>150</h1>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <p style={{paddingLeft:"10%"}}>Vehicle in stock</p>
                    </div>
                    <div className="vehicle">
                        <h1>40</h1>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <p style={{paddingLeft:"38%"}}>Sold car</p>
                    </div>
                </div>
                <div className="aboutLine2">
                    <div className="vehicle">
                        <h1>38</h1>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <p style={{paddingLeft:"6%"}}>Happy Customer</p>
                    </div>
                    <div className="vehicle">
                        <h1>5</h1>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <p style={{paddingLeft:"40%"}}>Awards</p>
                    </div>
                </div>
            </div>
            <img src="auCar.png"></img>
        </div>
    </>
}
export default About