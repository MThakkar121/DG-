import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Workflow, GitBranch, Mic, Play, MessageSquare, Code, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const VoiceAgentBuilder = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Voice Agent Builder"
                title={<span>Visual Design for <span className="text-primary italic">Voice</span></span>}
                description="A powerful drag-and-drop editor to orchestrate complex conversations. Define states, manage skills, and test in real-time."
            />

            {/* Editor Preview Section */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl border border-border bg-card/50 shadow-2xl overflow-hidden aspect-video relative group"
                    >
                        {/* Mock Editor Interface */}
                        <div className="absolute inset-0 bg-background/95 backdrop-blur flex flex-col">
                            {/* Toolbar */}
                            <div className="h-14 border-b border-border flex items-center px-4 justify-between bg-card/50">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="h-6 w-px bg-border" />
                                    <span className="text-sm font-medium">Untitled Agent_v2</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" variant="ghost"><Play className="w-4 h-4 mr-2" /> Test</Button>
                                    <Button size="sm">Publish</Button>
                                </div>
                            </div>

                            {/* Canvas Area container */}
                            <div className="flex-1 flex overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-64 border-r border-border bg-card/30 p-4 hidden md:block">
                                    <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase">Nodes</div>
                                    <div className="space-y-2">
                                        {['Start Node', 'LLM Process', 'Skill Switch', 'Condition', 'End Call'].map(item => (
                                            <div key={item} className="p-3 rounded-md border border-border bg-card hover:border-primary cursor-move text-sm font-medium flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Canvas */}
                                <div className="flex-1 relative bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                                    {/* Simplified Nodes Simulation */}
                                    <div className="absolute top-[20%] left-[20%] w-48 p-4 rounded-lg border border-primary bg-card shadow-lg shadow-primary/10">
                                        <div className="text-xs text-primary mb-1">Entry Point</div>
                                        <div className="font-semibold">Incoming Call</div>
                                    </div>

                                    <svg className="absolute inset-0 pointer-events-none stroke-border fill-none" strokeWidth="2">
                                        <path d="M 380 180 C 450 180, 450 280, 520 280" />
                                    </svg>

                                    <div className="absolute top-[35%] left-[45%] w-56 p-4 rounded-lg border border-border bg-card shadow-lg">
                                        <div className="text-xs text-muted-foreground mb-1">Orchestrator</div>
                                        <div className="font-semibold">Determine Intent</div>
                                        <div className="mt-2 flex gap-2">
                                            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px]">Sales</span>
                                            <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-[10px]">Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overlay CTA */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="xl" className="font-semibold">Launch Interactive Demo</Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureBlock
                            icon={Bot}
                            title="Drag & Drop Logic"
                            desc="Build complex conversation flows visually. No coding required for basic logic, yet fully extensible."
                        />
                        <FeatureBlock
                            icon={GitBranch}
                            title="Branching Naratives"
                            desc="Create non-linear conversations that adapt to user sentiment, intent, and historical data."
                        />
                        <FeatureBlock
                            icon={Mic}
                            title="Voice Tuning"
                            desc="Adjust latency, interruption sensitivity, and voice personality traits on a per-node basis."
                        />
                        <FeatureBlock
                            icon={Code}
                            title="Custom Functions"
                            desc="Drop in raw JavaScript or Python code blocks for advanced data processing mid-conversation."
                        />
                        <FeatureBlock
                            icon={Workflow}
                            title="Skill Routing"
                            desc="Seamlessly handoff between specialized agents (e.g., from 'Receptionist' to 'Tech Support') without dropping context."
                        />
                        <FeatureBlock
                            icon={MessageSquare}
                            title="Real-time Debugging"
                            desc="Step through conversations as they happen. Inspect state, variables, and LLM reasoning trace."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">Start building for free</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Our builder is designed for prototyping and production. Get your first agent live in minutes.
                    </p>
                    <Button size="lg" className="h-12 px-8">Try the Builder <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
            </section>
        </div>
    );
};

const FeatureBlock = ({ icon: Icon, title, desc }) => (
    <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </CardContent>
    </Card>
);

export default VoiceAgentBuilder;
