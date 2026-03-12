import { Button } from "@shared/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/exhibitions", label: "Выставки" },
  { href: "/announcements", label: "Объявления" },
  { href: "/about", label: "О школе" },
]

export function Header() {
  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2" href="/">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
              <span className="text-primary-foreground font-bold">76</span>
            </div>
            <div>
              <div className="text-sm font-medium">МАОУ СОШ 76</div>
              <div className="text-muted-foreground text-xs">
                Виртуальный музей
              </div>
            </div>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                className="hover:text-primary text-muted-foreground text-sm font-medium transition-colors"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button className="md:hidden" size="icon" variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
