import Header from '../../component/header/header.jsx'
import ImgChange from '../../component/homepage component/imgChange/imgChange.jsx'
import Footer from '../../component/footer/footer.jsx'
import Table from '../../component/homepage component/table/table.jsx'
import Recommend from '../../component/homepage component/recommend/recommend.jsx'
import About from '../../component/homepage component/about us/about.jsx'
import Compare from '../../component/homepage component/compare/compare.jsx'
import News from '../../component/homepage component/news/news.jsx'
import Service from '../../component/homepage component/service/service.jsx'
import Testimonial from '../../component/homepage component/testimonial/testimonial.jsx'
import Contact from '../../component/homepage component/contact/contact.jsx'
import Logo from '../../component/homepage component/logo/logo.jsx'
import Up from '../../component/up/up.jsx'
const Homepage = () => {
    return <>
    <div className="container">
        <Header></Header>
        <ImgChange></ImgChange>
        <Table></Table>
        <Recommend></Recommend>
        <Compare></Compare>
        <News></News>
        <About></About>
        <Service></Service>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Logo></Logo>
        <Up></Up>
        <Footer></Footer>
    </div>
    </>
}
export default Homepage