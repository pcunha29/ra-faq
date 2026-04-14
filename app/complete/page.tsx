import { FaqSearch } from "@/components/faq-search/faq-search";
import { FAQ_SECTIONS } from "@/lib/mock-data";

export default function CompletePage() {
  return <FaqSearch sections={FAQ_SECTIONS} />;
}
