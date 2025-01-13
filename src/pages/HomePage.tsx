import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import LiveBenefits from '../components/home/LiveBenefits';
import HowItWorks from '../components/home/HowItWorks';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LiveBenefits />
      <Features />
      <HowItWorks />
    </div>
  );
}