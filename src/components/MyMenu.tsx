import {
  MegaMenu,
  MegaMenuDropdown,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function MyMenu() {
  return (
    <div className="w-full">
      <MegaMenu className="w-full flex justify-center bg-transparent text-white">
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" className="text-white">
            Главная
          </NavbarLink>
          <NavbarLink href="/about" className="text-white">
            О нас
          </NavbarLink>
          <NavbarLink href="/personal" className="text-white">
            Персонал
          </NavbarLink>
          <NavbarLink href="/contacts" className="text-white">
            Контакты
          </NavbarLink>
        </NavbarCollapse>
      </MegaMenu>
    </div>
  );
}
