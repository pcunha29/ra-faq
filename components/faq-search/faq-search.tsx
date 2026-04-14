"use client";

import { useMemo, useState } from "react";

import { FaqSection } from "@/components/faq-section/faq-section";
import { HelpHero } from "@/components/help-hero/help-hero";
import { normalize, slugify } from "@/lib/utils";

type FaqItem = {
  title: string;
  content: string;
};

type FaqSectionData = {
  title: string;
  subtitle: string;
  items: readonly FaqItem[];
};

export type FaqSearchProps = {
  sections: readonly FaqSectionData[];
};

export function FaqSearch({ sections }: FaqSearchProps) {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    const query = normalize(search.trim());
    if (!query) return sections;

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            normalize(item.title).includes(query) ||
            normalize(item.content).includes(query),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [search, sections]);

  const isSearching = search.trim().length > 0;

  return (
    <>
      <HelpHero searchValue={search} onSearchChange={setSearch} />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 lg:px-12">
        <div className={isSearching ? "space-y-16" : "mt-16 space-y-16"}>
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <FaqSection
                key={section.title}
                id={slugify(section.title)}
                title={section.title}
                subtitle={section.subtitle}
                items={section.items}
              />
            ))
          ) : (
            <p className="py-12 text-center text-muted-foreground">
              Nenhum resultado encontrado para &ldquo;{search.trim()}&rdquo;
            </p>
          )}
        </div>
      </div>
    </>
  );
}
