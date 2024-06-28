import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-black-100 sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero></Hero>
        <Grid></Grid>
      </div>
    </main>
  );
}
