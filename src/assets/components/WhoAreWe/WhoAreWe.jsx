import { Container } from 'react-bootstrap'
import './WhoAreWe.css'

const WhoAreWe = () => {
    return (
        <section className='who'>
            <Container className='text-center w-75'>
                <h2 className='who-title text-center fw-bold'>Who Are We ?</h2>
                <p className='who-para fs-5'>We are a group of companies that have created a platform to provide multiple services,
                including job browsing by sector and job level, the ability to easily apply for jobs through the platform, and improving recruitment strategies.
                We aim to provide an integrated and effective hiring experience for all parties involved.</p>
            </Container>
        </section>
    )
}

export default WhoAreWe