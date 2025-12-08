import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import Testimonials from "@/components/home/Testimonials";
import ImpactMetrics from "@/components/home/ImpactMetrics";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <FeaturedCollections />
      <Testimonials />
      <ImpactMetrics />
    </div>
  );
}
