// Add this import to the top of your home page file
import Hero01 from '@/components/Hero01';
import Hero02 from '@/components/Hero02';
import Header from '../../components/Header';
import FAQSection from '@/components/FAQ';
import About from '@/components/about';
import Contact from '@/components/contact';

// Update the HomePage function to include the Header
export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero01 />
      <Hero02 />
      <FAQSection />
      <About />
      <Contact />
    </div>
  );
}
