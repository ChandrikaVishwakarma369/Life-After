import { Link } from "react-router-dom";
import { Brain, Shield, Heart, Users, Code, Database, Lock, Eye, Cpu, MessageCircle, Scale, UserX } from "lucide-react";

const ReadMore = () => {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Discover Life After</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A revolutionary project building a bridge between life and what lies beyond. Creating profound emotional and professional value.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Data Collection", desc: "Gather personal data — chats, emails, voice recordings, and professional records with full consent.", icon: Database },
              { step: "02", title: "AI Training", desc: "Train a personalized AI model that captures the unique personality, communication style, and knowledge.", icon: Brain },
              { step: "03", title: "AI Twin Creation", desc: "Generate an AI Twin that can engage in authentic conversations reflecting the original person.", icon: Users },
              { step: "04", title: "Ongoing Interaction", desc: "Friends, family, and colleagues can interact with the AI Twin for support, memories, and guidance.", icon: Heart },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-6 bg-background rounded-2xl p-6 border border-border">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "Ethical Framework",
                desc: "Ensuring privacy, consent, and responsible usage at every step of the process.",
              },
              {
                icon: Lock,
                title: "Data Security",
                desc: "Robust security measures against misuse and breaches to protect personal data.",
              },
              {
                icon: MessageCircle,
                title: "Emotional Impact",
                desc: "Managing grief and psychological effects on users interacting with an AI of a deceased loved one.",
              },
              {
                icon: Cpu,
                title: "AI Accuracy",
                desc: "Ensuring the AI Twin truly reflects the person's personality without generating misleading or false responses.",
              },
              {
                icon: Scale,
                title: "Legal & Consent Issues",
                desc: "Handling legal rights of the deceased's digital identity and obtaining proper consent before and after death.",
              },
              {
                icon: UserX,
                title: "Misuse Prevention",
                desc: "Preventing impersonation, fraud, or manipulation using someone's AI Twin without authorization.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <c.icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technology Stack</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Technology</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Frontend", "React.js + Tailwind CSS"],
                  ["Backend", "Python + FastAPI"],
                  ["Data Storage", "ChromaDB"],
                  ["AI Core", "Gemini API"],
                  ["Voice Cloning", "ElevenLabs API"],
                  ["Deployment", "Vercel / Render / Firebase"],
                ].map(([cat, tech]) => (
                  <tr key={cat} className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">{cat}</td>
                    <td className="py-3 px-4 text-foreground font-medium">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Preserve Your Legacy?</h2>
        <p className="text-muted-foreground mb-8">Join us in building a future where memories never fade.</p>
        <Link to="/signup" className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default ReadMore;