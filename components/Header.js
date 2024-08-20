import Link from "next/link";
import Nav from "./Nav";
import Configuration from "./Configuration";

export default function Header() {
  return (
    <header>
      <div className="container flex justify-around items-center mx-auto px-2 sm:px-4 py-2 sm:py-4 gap-2">
        <Link href="/" className="font-semibold text-xl">LJHC.nl</Link>
        <Nav />
        <Configuration />
      </div>
    </header>
  )
}
