import { PricingCard } from "@/components/ui/dark-gradient-pricing";

function PricingDemo() {
  return (
    <section style={{ background: "#121212" }} className="text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Pricing
          </h2>
          <p className="mt-3 text-sm text-white/40">
            Use it for free for yourself, upgrade when your team needs advanced
            control.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <PricingCard
            tier="Free"
            price="$0/mo"
            bestFor="Best for 1-5 users"
            CTA="Get started free"
            benefits={[
              { text: "One workspace", checked: true },
              { text: "Email support", checked: true },
              { text: "1 day data retention", checked: false },
              { text: "Custom roles", checked: false },
              { text: "Priority support", checked: false },
              { text: "SSO", checked: false },
            ]}
          />
          <PricingCard
            tier="Pro"
            price="$79/mo"
            bestFor="Best for 5-50 users"
            CTA="14-day free trial"
            benefits={[
              { text: "Five workspaces", checked: true },
              { text: "Email support", checked: true },
              { text: "7 day data retention", checked: true },
              { text: "Custom roles", checked: true },
              { text: "Priority support", checked: false },
              { text: "SSO", checked: false },
            ]}
          />
          <PricingCard
            tier="Enterprise"
            price="Contact us"
            bestFor="Best for 50+ users"
            CTA="Contact us"
            benefits={[
              { text: "Unlimited workspaces", checked: true },
              { text: "Email support", checked: true },
              { text: "30 day data retention", checked: true },
              { text: "Custom roles", checked: true },
              { text: "Priority support", checked: true },
              { text: "SSO", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export { PricingDemo };
