import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/layout/PageHeader';

const About = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="About Us"
                title="Building the future of voice"
                description="We're a team of engineers, researchers, and designers obsessed with making AI sound human."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose dark:prose-invert prose-lg mx-auto mb-20">
                        <p>
                            Voice interfaces have been stuck in the past for too long. Robot-like TTS, rigid decision trees, and frustrating "I didn't catch that" loops have plagued the industry.
                        </p>
                        <p>
                            Dialgood was born from a simple idea: <strong>What if an agent wasn't just a script reader, but a dynamic thinker?</strong>
                        </p>
                        <p>
                            By decoupling the voice layer from the intelligence layer, and orchestrating multiple specialized models (instead of relying on one giant, slow one), we've cracked the code on natural, fluid, and truly helpful voice AI.
                        </p>
                    </div>

                    <h2 className="text-3xl font-serif font-medium text-center mb-12">Leadership Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TeamMember
                            name="Sarah Chen"
                            role="CEO & Co-Founder"
                            image="/team-1.jpg"
                            bio="Ex-DeepMind researcher. Led the multimodal team that built Gemini Vision."
                        />
                        <TeamMember
                            name="David Miller"
                            role="CTO"
                            image="/team-2.jpg"
                            bio="Previously Principal Engineer at Twilio. Architected low-latency voice infrastructure."
                        />
                        <TeamMember
                            name="Elena Rodriguez"
                            role="Head of Product"
                            image="/team-3.jpg"
                            bio="10+ years in conversational design. Author of 'The Human-AI Interface'."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const TeamMember = ({ name, role, bio, image }) => (
    <div className="text-center group">
        <div className="w-48 h-48 rounded-full bg-muted mx-auto mb-6 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
            {/* Placeholder */}
            <div className="w-full h-full bg-primary/5 flex items-center justify-center text-4xl font-serif text-primary/20">
                {name.charAt(0)}
            </div>
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <div className="text-primary text-sm font-medium mb-3">{role}</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
            {bio}
        </p>
    </div>
);

export default About;
