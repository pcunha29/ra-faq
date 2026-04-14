import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/social-icons";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { cn } from "@/lib/utils";
import { SITE_LOGO_SRC, SITE_LOGO_WHITE_SRC, SOCIAL_LINKS } from "@/lib/mock-data";

export type SiteNavbarProps = {
  className?: string;
  logoSrc?: string;
  logoWhiteSrc?: string;
  logoAlt?: string;
  facebookHref?: string;
  instagramHref?: string;
  youtubeHref?: string;
  spotifyHref?: string;
  applePodcastsHref?: string;
};

export function SiteNavbar({
  className,
  logoSrc = SITE_LOGO_SRC,
  logoWhiteSrc = SITE_LOGO_WHITE_SRC,
  logoAlt = "Razão Automóvel",
  facebookHref = SOCIAL_LINKS.facebookHref,
  instagramHref = SOCIAL_LINKS.instagramHref,
  youtubeHref = SOCIAL_LINKS.youtubeHref,
}: SiteNavbarProps) {
  const socials = [
    { href: facebookHref, label: "Facebook", Icon: FacebookIcon },
    { href: instagramHref, label: "Instagram", Icon: InstagramIcon },
    { href: youtubeHref, label: "YouTube", Icon: YoutubeIcon },
  ] as const;

  return (
    <header className={cn("border-b border-border bg-background", className)}>
      <div className="mx-auto flex h-14 max-w-6xl items-center px-6 sm:px-10 lg:px-12">
        <div className="grid w-full grid-cols-3 items-center gap-4">
          <nav
            className="flex min-w-0 flex-wrap justify-start gap-0.5"
            aria-label="Redes sociais"
          >
            {socials.map(({ href, label, Icon }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon-sm"
                nativeButton={false}
                className="text-muted-foreground hover:text-foreground"
                render={
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  />
                }
              >
                <Icon />
              </Button>
            ))}
          </nav>

          <div className="flex justify-center">
            <Link
              href="/"
              className="relative block h-7 w-auto max-w-[min(100%,220px)] shrink-0 opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={220}
                height={30}
                className="object-contain object-center dark:hidden"
                style={{ height: "30px" }}
                priority
              />
              <Image
                src={logoWhiteSrc}
                alt={logoAlt}
                width={220}
                height={30}
                className="hidden object-contain object-center dark:block"
                style={{ height: "30px" }}
                priority
              />
            </Link>
          </div>

          <div className="flex min-h-8 items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
