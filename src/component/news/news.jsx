import './news.css'
const News = () => {
    return <>
     <div className="newsContainer">
        <div className="newsReview">
            <h3>News</h3>
            <h3>Review</h3>
        </div>
        <div className="newsList">
            <div className="news1">
                <img src="commentCar.png"></img>
                <h2>Etiam eget</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
                at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
                auctor.</p>
            </div>
            <div className="news23">
                <div className="news2">
                    <img src="commentCar2.png"></img>
                    <div className="comment2">
                        <h2>A New Car</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                        aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                        scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
                        at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
                        auctor.</p>
                    </div>
                </div>
                <div className="news3">
                    <img src="commentCar1.png"></img>
                    <div className="comment3">
                        <h2>A New Car</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                        aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                        scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
                        at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
                        auctor.</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
}
export default News