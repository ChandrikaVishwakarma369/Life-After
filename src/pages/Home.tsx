import { Link } from "react-router-dom";
import { Brain, Heart, Users, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Life After
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-2">
            An AI Human Clone
          </p>
          <p className="text-base sm:text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Extending conversations beyond life. Preserve memories. Continue connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <Link
              to="/read-more"
              className="px-8 py-3 rounded-xl bg-card/20 backdrop-blur text-primary-foreground font-semibold border border-primary-foreground/30 hover:bg-card/30 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Life After */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Why Life After?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Humanity faces a profound challenge: the loss of invaluable knowledge and memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Lost Legacies",
                desc: "Knowledge, experiences, and memories fade with time. We preserve them forever.",
              },
              {
                icon: Heart,
                title: "Disrupted Connections",
                desc: "Families and friends seek enduring ways to stay connected with loved ones.",
              },
              {
                icon: Shield,
                title: "Limited AI",
                desc: "Existing AI lacks personal identity and nuanced preservation of human essence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <item.icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Multiple Modes", desc: "Friends, Family, Professional — 4 distinct interaction styles." },
              { icon: Brain, title: "Personalized Responses", desc: "Authentic interactions based on individual datasets." },
              { icon: Heart, title: "Memory Continuity", desc: "A life's legacy preserved, accessible, and enduring." },
            ].map((f) => (
              <div key={f.title} className="text-center p-8">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-accent-foreground" size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Future is Now
          </h2>
          <p className="text-muted-foreground mb-8">
            Empowering humanity to transcend mortality through intelligent AI. Join us in preserving the irreplaceable.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
