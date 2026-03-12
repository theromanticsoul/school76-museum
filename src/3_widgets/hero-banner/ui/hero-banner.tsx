import { Sparkles } from "lucide-react"

export function HeroBanner() {
  return (
    <div className="from-primary via-accent bg-primary text-primary-foreground relative overflow-hidden rounded-2xl p-8 md:p-12">
      <div className="relative z-10 space-y-4 text-center">
        <Sparkles className="mx-auto mb-4 h-12 w-12" />
        <h2 className="text-3xl font-bold md:text-4xl">
          Добро пожаловать в виртуальный музей!
        </h2>
        <p className="mx-auto max-w-3xl text-lg opacity-90 md:text-xl">
          Здесь вас ждут увлекательные выставки, современные AR-технологии и
          уникальные экспонаты. Начните своё путешествие в мир знаний прямо
          сейчас!
        </p>
      </div>
    </div>
  )
}
