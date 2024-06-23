import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedinIn , faTwitter , faInstagram , faFacebookF , faBehance  } from '@fortawesome/free-brands-svg-icons'
import './Company.css'

const Company = () => {
    const companies = [
        {
            "id" : "1" ,
            "image" : "/public/focal.jpeg" ,
            "title" : "Focal X Agency" ,
            "discription" : "Branding, Marketing, Web/App Development, Ux Research's, Business solutions." ,
            "location" : "Syria-Lattakia"
        } ,
        {
            "id" : "2" ,
            "image" : "/public/iram.jpeg" ,
            "title" : "IRAM" ,
            "discription" : "Engineering, Trading, Technology, marketing and Diverse Architectural Services" ,
            "location" : "Syria-Lattakia"
        } ,
        {
            "id" : "3" ,
            "image" : "/public/code95.png" ,
            "title" : "Code95" ,
            "discription" : "web technology services, design, development and marketing company." ,
            "location" : "Syria-Dasmacus"
        } ,
        {
            "id" : "4" ,
            "image" : "/public/vica.jpeg" ,
            "title" : "Vica" ,
            "discription" : "web development services and to equip individuals with  skils and knowledge." ,
            "location" : "Syria-Damascus"
        } ,
        {
            "id" : "5" ,
            "image" : "/public/infostrategic.jpeg" ,
            "title" : "INFO Strategic" ,
            "discription" : "Technology Solutions and Consulting Company, business and system analytics  " ,
            "location" : "Syria-Tartous"
        } ,
        {
            "id" : "6" ,
            "image" : "/public/ideatolife.jpeg" ,
            "title" : "Idea To Life" ,
            "discription" : "offer unique one-stop technical  solutions to all start up and entrepreneurs. " ,
            "location" : "Syria-Damascus"
        } ,

    ]
    return (
        <section className="company">
            <div className="company-div-title">
                <h1 className="company-title">Explore Employment Opportunities With Top company</h1>
            </div>
            <Container>
            <Row>
            {companies.map(index => {
                return(
                    <Col  key={index.title} lg={4} md={6} sm={12}>
                    <Card className="card mb-4" style={{ width: '22rem' }}>
                        <div className="company-img mx-auto">
                        <Card.Img className="company-image mx-auto" variant="top" src={index.image} />
                        </div>
                        <Card.Body className="body mx-auto">
                            <Card.Title className="company-name fs-3">{index.title}</Card.Title>
                            {/* <Card.Text> {index.discription}</Card.Text> */}
                            <Card.Text className="company-location"> <FontAwesomeIcon icon={faLocationDot} /> {index.location}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                )
                
            })}
            </Row>
            </Container>
        </section>
    )
}


export default Company