import { Icon } from "../atoms/Icon";
import { Container } from "../foundations/Container";
import { cn } from "../utils/cn";

export type FooterMenu = {
  title: string;
  links: { label: string; href: string }[];
};

export type FooterProps = {
  address?: string;
  phones?: string[];
  socials?: { label: string; href: string }[];
  menus?: FooterMenu[];
  className?: string;
};

export function Footer({ address, phones = [], socials = [], menus = [], className }: FooterProps) {
  return (
    <footer className={cn("bg-[#2f3600] text-[#f6efe0]", className)}>
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl">Александрова Дача</h2>
          {address && (
            <p className="flex items-start gap-3 text-sm leading-relaxed text-[#f0e7cf]">
              <Icon name="location" width={18} height={18} className="mt-1" />
              {address}
            </p>
          )}
          <div className="space-y-2 text-sm">
            {phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2">
                <Icon name="phone" width={16} height={16} />
                {phone}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#e4d8bd]">
            {socials.map((social) => (
              <a key={social.href} href={social.href} className="hover:text-white">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {menus.map((menu) => (
            <div key={menu.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4d8bd]">
                {menu.title}
              </h3>
              <ul className="space-y-2 text-sm text-[#f6efe0]">
                {menu.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-[#3d431c] py-4 text-center text-xs text-[#c9b585]">
        © {new Date().getFullYear()} Александрова Дача. Все права защищены.
      </div>
    </footer>
  );
}
