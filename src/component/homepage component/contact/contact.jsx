import './contact.css'
const Contact = () => {
    return <>
        <div>
            <img src="Rectangle 108.png" style={{position:"absolute"}} width="100%"></img>
            <div className="form">
                <img src="Frame 93.png"></img>
                <div>
                    <h1>Contact</h1>
                    <form>
                        <div className="formPart">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Full Name"></input>
                        </div>
                        <div className="formPart">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="email@gmail.com"></input>
                        </div>
                        <div className="formPart">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" id="phone" placeholder="000-000-000"></input>
                        </div>
                        <div className="formPart">
                            <label htmlFor="cmt">Comment</label>
                            <textarea id="cmt" rows="9" cols="60" placeholder="Leave a message here"></textarea>
                        </div>
                        <div className="formBtn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Contact