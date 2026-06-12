import React from "react";

type Channel = {
  name: string;
  detail: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
};

const ContactSection = () => {
  const channels: Channel[] = [
    {
      name: "email",
      detail: "ericcui.career@gmail.com",
      href: "mailto:ericcui.career@gmail.com",
      external: false,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "linkedin",
      detail: "eric-cui",
      href: "https://www.linkedin.com/in/eric-cui-003154233/",
      external: true,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "twitter",
      detail: "@EricCui29",
      href: "https://x.com/EricCui29",
      external: true,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "resume",
      detail: "download pdf",
      href: "/Eric Cui Resume.pdf",
      external: true,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
            <span className="block w-16 h-1 mt-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
          </h2>
          <p className="text-muted mb-12">
            Let&apos;s connect and discuss opportunities — reach out through
            any channel below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group bg-surface border border-edge rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_24px_rgba(139,92,246,0.15)]"
              >
                <div className="text-accent-blue group-hover:text-accent transition-colors duration-300">
                  {channel.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground capitalize">
                    {channel.name}
                  </p>
                  <p className="text-xs text-muted truncate">
                    {channel.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-xs text-muted/70 text-center mt-16">
            © 2026 Eric Cui — built with Next.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
