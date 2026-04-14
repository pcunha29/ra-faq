import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqItem = {
  title: string;
  content: string;
};

export type FaqSectionProps = {
  className?: string;
  id?: string;
  title: string;
  subtitle?: string;
  items: readonly FaqItem[];
};

export function FaqSection({
  className,
  id,
  title,
  subtitle,
  items,
}: FaqSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      <Accordion>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={index}
            className="data-panel-open:border-primary not-last:data-panel-open:border-b-2"
          >
            <AccordionTrigger className="hover:text-primary data-panel-open:text-primary [&[data-panel-open]>svg]:text-primary [&:hover>svg]:text-primary">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
