import Image from "next/image";
import WelcomePage from "./welcome/page";
import HeroSection from "./heroSection/page";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WelcomePage/>
      
    </div>
  );
}
