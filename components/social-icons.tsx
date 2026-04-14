import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

function iconClass(className?: string) {
  return cn("size-4 shrink-0 text-muted-foreground", className);
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass(className)}
      aria-hidden
      {...rest}
    >
      <path d="M17.75 3h-3.5A4.25 4.25 0 0 0 10 7.25V10H7v4h3v7h4v-7h3.4l.6-4H14V7.25c0-.9.1-1.5 1.5-1.5H18V3h-.25Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass(className)}
      aria-hidden
      {...rest}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass(className)}
      aria-hidden
      {...rest}
    >
      <path d="M2.5 8.5c0-1.5.4-2.4 1.4-3.1C5.4 4.5 8.5 4.5 12 4.5s6.6 0 8.1.9c1 .7 1.4 1.6 1.4 3.1v7c0 1.5-.4 2.4-1.4 3.1-1.5.9-4.6.9-8.1.9s-6.6 0-8.1-.9c-1-.7-1.4-1.6-1.4-3.1v-7Z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M10.5 9.75 15.25 12l-4.75 2.25v-4.5Z"
      />
    </svg>
  );
}
