import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './Exciting.css'
import { Link } from 'react-router-dom';

const Exciting = () => {
    return (
        <section className='exciting'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="exciting">
                            <h2 className="exciting-title">Book your opportunity now !</h2>
                            <p className='fs-4'>If you are looking for new job opportunities,
                                our platform is the perfect destination for you to achieve your employment goals. Join us today and benefit from
                                our outstanding and comprehensive services.</p>
                            <Button variant="outline-primary"><Link className='joinus' to="/signup">Join Us</Link></Button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="exciting-image text-end">
                            <img src="/public/exciting.svg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Exciting