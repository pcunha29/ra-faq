"use client";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type HelpHeroProps = {
  className?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  placeholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
};

export function HelpHero({
  className,
  title = "Como podemos",
  highlight = "ajudar?",
  subtitle = "Ou escolhe uma das categorias abaixo para encontrar o que procuras.",
  placeholder = "Escreve a tua pesquisa...",
  searchValue,
  onSearchChange,
}: HelpHeroProps) {
  return (
    <section
      className={cn(
        "bg-muted px-6 py-16 text-center sm:px-10 lg:px-12",
        className,
      )}
    >
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}{" "}
        <span className="border-b-2 border-primary pb-0.5">{highlight}</span>
      </h1>

      <div className="mx-auto mt-8 max-w-lg">
        <div className="relative">
          <Input
            type="search"
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="h-12 rounded-full bg-background pr-12 pl-5 text-base shadow-sm"
          />
          <button
            type="button"
            className="absolute top-1/2 right-1.5 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            aria-label="Pesquisar"
          >
            <SearchIcon className="size-4" />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
        {subtitle}
      </p>
    </section>
  );
}
