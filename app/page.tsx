import Link from "next/link";
import { ListIcon, LayoutDashboardIcon, type LucideIcon } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const pages: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    href: "/simple",
    icon: ListIcon,
    title: "FAQ Simples",
    description:
      "Solução mais rápida em termos de implementação, boa opção no caso de ser necessário uma solução rápida.",
  },
  {
    href: "/complete",
    icon: LayoutDashboardIcon,
    title: "Help Center Completo",
    description:
      "Solução mais completa, com pesquisa, categorias e FAQ agrupado por secção.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span>Centro de </span>
          <span className="border-b-2 border-primary pb-0.5">Ajuda</span>
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {pages.map(({ href, icon: Icon, title, description }) => (
          <Link key={href} href={href} className="group/link">
            <Card className="h-full transition-shadow group-hover/link:shadow-md">
              <CardHeader className="gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
