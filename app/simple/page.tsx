import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/mock-data";

export default function SimpleFaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:px-10 lg:px-12">
        <h1 className="mb-8 text-center text-2xl font-bold">
          Perguntas Frequentes
        </h1>
        <Accordion defaultValue={[0]}>
          {FAQ_ITEMS.map((item, index) => (
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
    </main>
  );
}
