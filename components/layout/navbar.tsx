"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Fórum", href: "/forum" },
  { name: "Recursos", href: "/resources" },
  { name: "Grupos", href: "/groups" },
  { name: "Capacitações", href: "/training" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <Link href="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                  PsiConnect
                </Link>
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium",
                        pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                    <Link href="/login">Entrar</Link>
                  </Button>
                  <Button asChild onClick={() => setIsOpen(false)}>
                    <Link href="/register">Criar Conta</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-xl font-bold hidden md:block">
            PsiConnect
          </Link>
          <Link href="/" className="text-xl font-bold md:hidden">
            PC
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Criar Conta</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

