// src/components/landing/WhyOmi.jsx

export default function WhyOmi() {
  const reasons = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5l-8-3z"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "VERIFIED STUDENTS ONLY",
      body: "Our multi-stage verification ensures you only transact with actual UNIJOS students and staff.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8 10h8M8 13h5"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "IN-APP MESSAGING",
      body: "Negotiate and coordinate safely without sharing your private phone number or social media handles.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="2"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
          />
          <path
            d="M2 10h20"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 15h4"
            stroke="var(--color-forest-green)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "PRICE TRANSPARENCY",
      body: "No hidden fees or middle-men. Direct student-to-student prices optimized for a university budget.",
    },
  ];

  return (
    <section className="py-20 bg-chalk-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-center font-bold mb-16"
          style={{ fontSize: "var(--text-h1)", color: "var(--color-text-primary)", fontFamily: "var(--font-manrope)" }}
        >
          Why Omi?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "var(--color-surface-light)",
                  borderRadius: "var(--radius-card)",
                }}
              >
                {reason.icon}
              </div>

              <p
                className="font-bold tracking-widest mb-3"
                style={{ fontSize: "var(--text-caption)", color: "var(--color-text-primary)" }}
              >
                {reason.title}
              </p>

              <p
                className="leading-relaxed max-w-xs"
                style={{ fontSize: "var(--text-body)", color: "var(--color-text-secondary)" }}
              >
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}