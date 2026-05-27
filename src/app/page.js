import Banner from "@/components/Banner";
import Roles from "@/components/Roles";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      {/* <h1>Home Page</h1> */}
      <Banner />
      <Stats />
      <Roles />
    </div>
  );
}
