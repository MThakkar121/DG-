import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Note: Shadcn Badge needs to be created or simulated
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Shadcn Tabs
import { Brain, Cpu, Globe, Key, Lock, Network, Share2, Terminal, Volume2, Zap } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const Features = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Platform Capabilities"
                title="Everything you need to build"
                description="A complete toolkit for building, deploying, and scaling next-generation voice agents."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="orchestration" className="w-full max-w-5xl mx-auto">
                        <div className="flex justify-center mb-12">
                            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 bg-muted/50 p-1">
                                <TabsTrigger value="orchestration">Orchestration</TabsTrigger>
                                <TabsTrigger value="voice-engine">Voice Engine</TabsTrigger>
                                <TabsTrigger value="developer">Developer</TabsTrigger>
                                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="orchestration" className="space-y-8 animate-fade-in-up">
                            <FeatureHighlight
                                icon={Brain}
                                title="Multi-LLM Routing"
                                desc="Don't settle for one model. Route complex reasoning to GPT-4, creative writing to Claude 3, and quick casual chit-chat to Haiku or Llama 3 70B."
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <FeatureCard title="Skill Handoffs" desc="Agents can pass the conversation 'token' to another specialized agent without losing context." icon={Share2} />
                                <FeatureCard title="Shared Memory" desc="Long-term memory persists across sessions and skills. The agent remembers the user's name from 3 calls ago." icon={DatabaseIcon} />
                            </div>
                        </TabsContent>

                        <TabsContent value="voice-engine" className="space-y-8 animate-fade-in-up">
                            <FeatureHighlight
                                icon={Volume2}
                                title="Ultra-Low Latency"
                                desc="Our edge network ensures audio generation starts in under 300ms. It feels like a real human conversation, not a walkie-talkie exchange."
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <FeatureCard title="Emotional Intelligence" desc="Detects user sentiment in real-time and adjusts tone of voice accordingly." icon={Zap} />
                                <FeatureCard title="Interruptibility" desc="Users can barge in naturally. The agent stops speaking instantly when it detects human speech." icon={Network} />
                            </div>
                        </TabsContent>

                        <TabsContent value="developer" className="space-y-8 animate-fade-in-up">
                            <FeatureHighlight
                                icon={Terminal}
                                title="Native Tool Calling"
                                desc="Give your agent tools. It can browse the web, query your database, or hit any REST API simply by defining a function schema."
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <FeatureCard title="Local Testing" desc="Use our CLI to test agents locally before deploying to the edge." icon={Cpu} />
                                <FeatureCard title="Version Control" desc="Rollback to any previous deployment instantly. A/B test prompt variations safely." icon={GitIcon} />
                            </div>
                        </TabsContent>

                        <TabsContent value="infrastructure" className="space-y-8 animate-fade-in-up">
                            <FeatureHighlight
                                icon={Globe}
                                title="Global Edge Network"
                                desc="Servers in 35+ regions worldwide. We process voice data as close to the user as possible to minimize latency."
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <FeatureCard title="Enterprise Security" desc="SOC2 Type II compliant. End-to-end encryption for all voice and text data." icon={Lock} />
                                <FeatureCard title="SSO & RBAC" desc="Manage team access with granular permissions and single sign-on." icon={Key} />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

const FeatureHighlight = ({ icon: Icon, title, desc }) => (
    <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>
        <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">{title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{desc}</p>
        </div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-card/50 border border-border/50 p-6 rounded-xl hover:bg-card hover:border-primary/30 transition-all duration-300">
        <Icon className="w-8 h-8 text-muted-foreground mb-4" />
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{desc}</p>
    </div>
);

// Fallback icons
const DatabaseIcon = () => <Database width={24} height={24} />
import { Database } from 'lucide-react';
const GitIcon = () => <Network width={24} height={24} />

export default Features;
