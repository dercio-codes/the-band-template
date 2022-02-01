import TheBand from "../components/TheBand";
import Nav from "../components/Navbar/Nav";
import Banner from "../components/Banner";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <TheBand />
      <Contact />
    </div>
  );
}
