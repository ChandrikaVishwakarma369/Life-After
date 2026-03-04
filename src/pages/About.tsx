import { Brain, Heart, Users, Shield, Code, Database } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Life After</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An AI-driven project dedicated to preserving human essence. Our mission: enabling meaningful conversations to continue even after someone is gone.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Vision: The AI Twin</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Digital Footprint", desc: "Trained on chats, emails, voice, and professional records." },
              { icon: Brain, title: "Enduring Legacy", desc: "A personalized AI twin, uniquely crafted from a person's data." },
              { icon: Heart, title: "Living Memory", desc: "Enabling conversations and presence beyond life." },
            ].map((v) => (
              <div key={v.title} className="bg-background rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <v.icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering Connection */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Empowering Connection</h2>
          <p className="text-center text-muted-foreground mb-12">The AI Twin provides tailored interactions for diverse needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "For Friends", desc: "Shared stories, continued dialogue, reliving memories." },
              { icon: Heart, title: "For Family", desc: "Emotional support, comfort in grief, a familiar voice." },
              { icon: Shield, title: "For Professionals", desc: "Guidance, work-related insights, preserving expertise." },
            ].map((c) => (
              <div key={c.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <c.icon className="text-accent-foreground" size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technology Foundation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Code, label: "React.js + Tailwind CSS", sub: "Frontend" },
              { icon: Database, label: "Node.js + Express.js", sub: "Backend" },
              { icon: Database, label: "MongoDB", sub: "Data Storage" },
              { icon: Brain, label: "OpenAI API / Hugging Face", sub: "AI Core" },
              { icon: Shield, label: "Vercel / Render", sub: "Deployment" },
              { icon: Shield, label: "Ethical AI", sub: "Privacy & Consent" },
            ].map((t) => (
              <div key={t.label} className="bg-background rounded-xl p-5 border border-border text-center">
                <t.icon className="mx-auto text-primary mb-2" size={28} />
                <p className="text-sm font-semibold text-foreground">{t.label}</p>
                <p className="text-xs text-muted-foreground">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {["Chandrika Vishwakarma", "Dolly Vishwakarma", "Preeti Thakur", "Ishika Trivedi"].map((name) => (
              <div key={name} className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground">{name[0]}</span>
                </div>
                <p className="font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">Team Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
