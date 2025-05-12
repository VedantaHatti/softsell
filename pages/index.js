import Head from 'next/head';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials'; // ✅ Import the new section
import ContactForm from '@/components/ContactForm';
export default function Home() {
  return (
    <>
      <Head>
        <title>SoftSell - Resell Your Unused Software Licenses</title>
        <meta name="description" content="Get value for unused software licenses" />
      </Head>
      <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials /> 
        <ContactForm />
      </main>
    </>
  );
}
