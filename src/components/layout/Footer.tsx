import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Software Engineer · Pune, India
          </p>
        </div>
        <p className="text-sm text-muted">
          © 2026 {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
