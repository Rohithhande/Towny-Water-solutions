import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { ScrollReveal } from '../components/ScrollReveal';
import { ServiceDetails } from '../components/ServiceDetails/ServiceDetails';
import { Process } from '../components/Process/Process';
import { BeforeAfter } from '../components/BeforeAfter/BeforeAfter';
import { Reviews } from '../components/Reviews/Reviews';
import { ContactCTA } from '../components/ContactCTA/ContactCTA';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <ScrollReveal><ServiceDetails /></ScrollReveal>
                <ScrollReveal><Process /></ScrollReveal>
                <ScrollReveal><BeforeAfter /></ScrollReveal>
                <ScrollReveal><Reviews /></ScrollReveal>
                <ScrollReveal><ContactCTA /></ScrollReveal>
            </main>
            <Footer />
        </>
    );
};
