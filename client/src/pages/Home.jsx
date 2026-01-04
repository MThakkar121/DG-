import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Zap, ArrowRight, Cpu, Layers, Activity, ShieldCheck, Settings, Globe,
    Database, ChevronDown, Play, CheckCircle2, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Trust Bar */}
            <TrustSection />

            {/* Features Grid */}
            <FeaturesSection />

            {/* How It Works */}
            <HowItWorksSection />

            {/* Orchestration Showcase */}
            <OrchestrationSection />

            {/* Stats Section */}
            <StatsSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/hero-nature.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-90"
                />
            </div>
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background/90" />

            <div className="absolute inset-0 -z-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md mb-8 text-white shadow-lg"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Next-Gen Voice Platform</span>
                </motion.div>

                {/* Main Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 text-balance drop-shadow-2xl">
                    Voice Agents that <br />
                    <span className="italic text-primary drop-shadow-md">Grow</span> with Your Business
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light drop-shadow-lg leading-relaxed">
                    The World's First Agent that isn't Stuck with One Model. Orchestrate multi-skill agents that think, collaborate, and act.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button asChild size="xl" className="group shadow-xl shadow-primary/20">
                        <Link to="/contact">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="xl" className="group bg-black/20 border-white/20 text-white hover:bg-black/40 backdrop-blur-sm">
                        <Link to="/resources">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </Link>
                    </Button>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-white/70" />
                </motion.div>
            </motion.div>
        </section>
    );
};

const TrustSection = () => {
    const brands = ['Acme Corp', 'Globex', 'Soylent', 'Initech', 'Hooli', 'Massive Dynamic'];

    return (
        <section className="py-16 border-y border-border bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
                    Trusted by visionary teams
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                    {brands.map((brand) => (
                        <span key={brand} className="text-xl md:text-2xl font-serif font-bold">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: Cpu,
            title: 'Multi-skill Orchestration',
            description: 'Build agents with specialized skills that collaborate seamlessly to solve complex tasks.',
        },
        {
            icon: Layers,
            title: 'Model Agnostic',
            description: 'Deploy agents using any LLM. Switch models in real-time without rewriting your entire stack.',
        },
        {
            icon: Activity,
            title: 'Granular Call Control',
            description: 'Take full control over call flows, handovers, and interruptions with native tools.',
        },
        {
            icon: ShieldCheck,
            title: 'Version Control',
            description: 'Native versioning for your agents and skills. Roll back or split test with ease.',
        },
        {
            icon: Settings,
            title: 'Skill Memory',
            description: 'Persistent context across skills ensuring your agent never loses the thread of conversation.',
        },
        {
            icon: Globe,
            title: 'Global Infrastructure',
            description: 'Ultra-low latency edge network designed specifically for real-time voice synthesis.',
        },
    ];

    return (
        <section className="py-24 md:py-32" id="features">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                        Built for scale, designed for control.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Dialgood provides the native tools required for production-ready voice systems.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ feature, index }) => {
    const Icon = feature.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {feature.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const HowItWorksSection = () => {
    const steps = [
        {
            number: '01',
            title: 'Define Skills',
            description: 'Create specialized skills for different tasks - customer support, sales, technical queries.',
        },
        {
            number: '02',
            title: 'Connect Models',
            description: 'Choose the best LLM for each skill. GPT-4 for reasoning, Claude for writing, custom models for domain expertise.',
        },
        {
            number: '03',
            title: 'Deploy Agent',
            description: 'Launch your multi-skill agent with one click. Monitor, version, and iterate in real-time.',
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                        How it works
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From concept to production in three simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border" />
                            )}
                            <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OrchestrationSection = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 inline-block">
                            Advanced Engine
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                            One agent, <br />
                            <span className="italic text-primary">infinite</span> skills.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Gone are the days of single-LLM bottlenecks. Dialgood's orchestrator allows you to chain specialized models, webhooks, and local tools into a single, unified brain.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Bidirectional skill handovers',
                                'Real-time persona flexibility',
                                'Context preservation across models',
                                'Native tool calls and webhooks',
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Card className="glass-card p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Visualization */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/30 rounded-full animate-ping" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/40 rounded-full" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/50 rounded-full animate-pulse" />
                            </div>

                            <div className="relative text-center z-10">
                                <Database className="w-16 h-16 text-primary mx-auto mb-6" />
                                <div className="font-mono text-sm text-primary mb-2">ORCHESTRATOR_ACTIVE</div>
                                <div className="text-muted-foreground text-xs">Processing 4 concurrent skill threads...</div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const StatsSection = () => {
    const stats = [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '<100ms', label: 'Response Time' },
        { value: '50+', label: 'LLM Models Supported' },
        { value: '24/7', label: 'Expert Support' },
    ];

    return (
        <section className="py-16 border-y border-border bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="glass-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

                    <div className="relative p-12 md:p-16 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                            Ready to evolve?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Join the elite teams building the next generation of voice experiences. Get started with our early access program today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="xl">
                                <Link to="/contact">Deploy My First Agent</Link>
                            </Button>
                            <Button asChild variant="outline" size="xl">
                                <Link to="/about">
                                    Talk to Sales
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Home;
