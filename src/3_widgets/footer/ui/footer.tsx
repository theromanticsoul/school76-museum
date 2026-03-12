export function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} МАОУ СОШ 76. Виртуальный музей.
          </p>
          <p className="text-muted-foreground text-sm">Мазитова Р. Н.</p>
        </div>
      </div>
    </footer>
  )
}
