import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Heart, Shield, Zap, Linkedin, Twitter, Github } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <PageHeader
                badge="Our Mission"
                title="Humanizing the digital world"
                description="We are building the orchestration layer for the next generation of voice AI. We believe agents should be helpful, empathetic, and infinitely capable."
            />

            {/* Core Philosophy Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-card border border-border relative">
                                {/* Abstract visual representation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 bg-primary/10 rounded-full animate-pulse-slow blur-xl" />
                                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
                                    <div className="text-4xl font-serif font-bold mb-1">10M+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Conversations orchestrated</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 leading-tight">
                                The end of <span className="text-primary">robotic</span> interactions.
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    For decades, IVR systems and basic chatbots have frustrated users with rigid logic loops and "I didn't catch that" responses. We knew there had to be a better way.
                                </p>
                                <p>
                                    Dialgood was born from a simple thesis: <strong>True intelligence requires orchestration.</strong> No single LLM can do everything perfectly.
                                </p>
                                <p>
                                    By dynamically routing conversations between specialized models—one for empathy, one for logic, one for creativity—we create agents that feel genuinely human.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-muted/30 border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Badge variant="outline" className="mb-4">Our Values</Badge>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium">Built on principle</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValueCard
                            icon={Heart}
                            title="Empathy First"
                            desc="We optimize latency not just for speed, but to make conversations feel natural and respectful of the user's emotion."
                        />
                        <ValueCard
                            icon={Globe}
                            title="Model Agnostic"
                            desc="We refuse to lock you into a single provider. The best AI stack is the one flexible enough to change tomorrow."
                        />
                        <ValueCard
                            icon={Shield}
                            title="Privacy by Design"
                            desc="Your data is yours. We implement enterprise-grade encryption and never train on customer conversations without consent."
                        />
                        <ValueCard
                            icon={Zap}
                            title="Builder Centric"
                            desc="We build tools for developers, not just business users. API-first, CLI-ready, and fully hackable."
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4">Meet the builders</h2>
                            <p className="text-muted-foreground text-lg">
                                We're a diverse team of engineers, researchers, and designers from companies like Google DeepMind, Twilio, and Stripe.
                            </p>
                        </div>
                        <Button variant="outline" size="lg">View Open Roles</Button>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <TeamMember
                            name="Sarah Chen"
                            role="CEO & Co-Founder"
                            bio="Ex-DeepMind researcher. Led the multimodal team that built Gemini Vision. Obsessed with AGI."
                            image="/team-1.jpg"
                            socials={{ twitter: "#", linkedin: "#" }}
                        />
                        <TeamMember
                            name="David Miller"
                            role="CTO & Co-Founder"
                            bio="Previously Principal Engineer at Twilio. Architected low-latency voice infrastructure used by millions."
                            image="/team-2.jpg"
                            socials={{ twitter: "#", github: "#" }}
                        />
                        <TeamMember
                            name="Elena Rodriguez"
                            role="Head of Product"
                            bio="10+ years in conversational design. Author of 'The Human-AI Interface'. Advocates for ethical AI."
                            image="/team-3.jpg"
                            socials={{ linkedin: "#" }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Investors / Trust */}
            <section className="py-24 border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">Backed by the best</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
                        {/* Placeholder logos */}
                        <div className="text-2xl font-bold font-serif">Sequoia</div>
                        <div className="text-2xl font-bold font-serif">Y Combinator</div>
                        <div className="text-2xl font-bold font-serif">a16z</div>
                        <div className="text-2xl font-bold font-serif">Index Ventures</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ValueCard = ({ icon: Icon, title, desc }) => (
    <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors duration-300">
        <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </CardContent>
    </Card>
);

const TeamMember = ({ name, role, bio, image, socials }) => (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="group">
        <div className="aspect-[4/5] rounded-xl bg-muted mb-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Placeholder Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                <span className="text-9xl font-serif text-muted-foreground/20 font-bold">{name.charAt(0)}</span>
            </div>

            {/* Social Overlay */}
            <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                {socials?.twitter && (
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                        <Twitter className="w-4 h-4" />
                    </Button>
                )}
                {socials?.linkedin && (
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                        <Linkedin className="w-4 h-4" />
                    </Button>
                )}
                {socials?.github && (
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                        <Github className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-1">{name}</h3>
        <div className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">{role}</div>
        <p className="text-muted-foreground leading-relaxed text-sm">
            {bio}
        </p>
    </motion.div>
);

export default About;
