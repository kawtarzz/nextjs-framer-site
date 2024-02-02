import Menu from "../Menu";
import "@/app/globals.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-1 container">
      <Menu />
    </header>
  );
}
