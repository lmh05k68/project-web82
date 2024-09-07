import Header from '../../component/header/header.jsx'
import ImgChange from '../../component/imgChange/imgChange.jsx'
import Footer from '../../component/footer/footer.jsx'
import Table from '../../component/table/table.jsx'
import Recommend from '../../component/recommend/recommend.jsx'
import About from '../../component/about us/about.jsx'
import Compare from '../../component/compare/compare.jsx'
import News from '../../component/news/news.jsx'
import Service from '../../component/service/service.jsx'
import Testimonial from '../../component/testimonial/testimonial.jsx'
import Contact from '../../component/contact/contact.jsx'
import Logo from '../../component/logo/logo.jsx'
import Up from '../../component/up/up.jsx'
const Homepage = () => {
    return <>
    <div className="container">
        <Header></Header>
        <ImgChange></ImgChange>
        <Up></Up>
        <Table></Table>
        <Recommend></Recommend>
        <Compare></Compare>
        <News></News>
        <About></About>
        <Service></Service>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Logo></Logo>
        <Footer></Footer>
    </div>
    </>
}
export default Homepage