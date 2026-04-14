import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const DIACRITICS_RE = /[\u0300-\u036f]/g;
const NON_ALNUM_RE = /[^a-z0-9]+/g;
const TRIM_DASH_RE = /^-|-$/g;

export function stripDiacritics(text: string) {
  return text.normalize("NFD").replace(DIACRITICS_RE, "");
}

export function normalize(text: string) {
  return stripDiacritics(text).toLowerCase();
}

export function slugify(text: string) {
  return normalize(text)
    .replace(NON_ALNUM_RE, "-")
    .replace(TRIM_DASH_RE, "");
}
