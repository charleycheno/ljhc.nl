import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-10">
      <Link href="/" className="font-semibold text-xl">LJHC.nl</Link>
      <p className="text-center">Made by Charley</p>
    </footer>
  )
}
