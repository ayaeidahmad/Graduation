import './Opinion.css'
import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';

const Opinion = () => {
    const opinions = [
        {
            "opinion" : " We have a great relationship with Horizon Group. HiresGulf supports us to handle everything from recruiting, consulting, compliance, and much more which has saved our HR activities. " ,
            "image" : "/public/images (2).jpeg" ,
            "name" : "HR Department – FinTech Company"
        } ,
        {
            "opinion" : " Finding this portal under Horizon Group was a pleasant surprise, I was impressed by the technical support and assistance offered by HiresGulf throughout the registration process. " ,
            "image" : "/public/man.png" ,
            "name" : "Procurement Head , CPECC"
        } ,
        {
            "opinion" : " HiresGulf knows the search business! They are highly responsive and get strong results in a timely manner. The candidates we landed had direct experience and are impact players on our team. " ,
            "image" : "/public/woeman.png" ,
            "name" : "Engineering Services"
        } ,
        {
            "opinion" : " Finding qualified candidates and screening them via HiresGulf was a straightforward and quick process. They recommend only genuine job seekers for you. This is a highly recommended job portal for employers. " ,
            "image" : "/public/man2.png" ,
            "name" : "HR Director "
        } ,
    ]
    return (
        <section className='opinion'>
            <div className='d-flex justify-content-center w-100'>
                <h1 className="opinion-title text-center pb-5 w-50">What Our Employers Who Visited Our Website and Got a Job Say ? </h1>
            </div>
            <Container>
            <Row>
            {opinions.map(index => {
                return(
                    <Col key={index.title} lg={6} md={6} sm={12}>
                        <Card style={{ width: '100%', height: '200px' }}className="opinion-card mb-4">
                            <Card.Body>
                                <Card.Title className='opinion-opinion'> {index.opinion} </Card.Title>
                                <Card.Img className='opinion-image' src={index.image} />
                                <Card.Text className='opinion-name'> {index.name}</Card.Text>
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

export default Opinion