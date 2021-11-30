import { Container } from '@chakra-ui/react'
import MainNav from '../components/MainNav';
import ThreeTierPricing from '../components/ThreeTierPricing';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
            <Container>
                <MainNav />
                <ThreeTierPricing />
                <Footer />
            </Container>
    );
}

export default Homepage;
