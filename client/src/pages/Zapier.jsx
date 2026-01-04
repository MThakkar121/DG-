import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Database, Mail, Calendar, MessageSquare, Slack } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const Zapier = () => {
    const [selectedApp, setSelectedApp] = useState(null);

    const integrations = [
        { id: 'salesforce', name: 'Salesforce', icon: Database, color: 'text-blue-500', action: 'Update Lead Status' },
        { id: 'slack', name: 'Slack', icon: Slack, color: 'text-purple-500', action: 'Send Team Alert' },
        { id: 'gmail', name: 'Gmail', icon: Mail, color: 'text-red-500', action: 'Send Follow-up Email' },
        { id: 'gcal', name: 'Google Calendar', icon: Calendar, color: 'text-blue-400', action: 'Book Appointment' },
        { id: 'hubspot', name: 'HubSpot', icon: Database, color: 'text-orange-500', action: 'Create Deal' },
        { id: 'intercom', name: 'Intercom', icon: MessageSquare, color: 'text-indigo-500', action: 'Log Conversation' },
    ];

    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Integrations"
                title={<span>Connect with <span className="text-[#FF4F00]">Zapier</span></span>}
                description="Automate your entire workflow. Trigger actions in 5,000+ apps directly from your voice conversations."
            />

            {/* Interactive Demo */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <Card className="max-w-4xl mx-auto glass-card border-none bg-gradient-to-b from-card/80 to-card/40">
                        <CardHeader className="text-center pb-12">
                            <CardTitle className="text-2xl font-normal">What would you like to automate?</CardTitle>
                            <CardDescription>Select an app to see how Dialgood connects.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                                {integrations.map((app) => (
                                    <button
                                        key={app.id}
                                        onClick={() => setSelectedApp(app)}
                                        className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center gap-3 hover:scale-105 ${selectedApp?.id === app.id ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border bg-card hover:border-primary/50'}`}
                                    >
                                        <app.icon className={`w-8 h-8 ${app.color}`} />
                                        <span className="font-medium">{app.name}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Integration Logic Visualization */}
                            <motion.div
                                key={selectedApp ? selectedApp.id : 'empty'}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-muted/50 rounded-2xl p-6 md:p-8"
                            >
                                {!selectedApp ? (
                                    <div className="text-center text-muted-foreground py-8">
                                        Select an app above to preview the workflow.
                                    </div>
                                ) : (
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                                                <Zap className="w-6 h-6" fill="currentColor" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs font-mono text-primary uppercase text-muted-foreground">Trigger</div>
                                                <div className="font-semibold">Call Completed</div>
                                            </div>
                                        </div>

                                        <div className="h-8 w-0.5 md:h-0.5 md:w-full bg-border relative flex items-center justify-center">
                                            <div className="absolute bg-background px-2 text-xs text-muted-foreground">THEN</div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center ${selectedApp.color}`}>
                                                <selectedApp.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs font-mono text-muted-foreground uppercase">Action</div>
                                                <div className="font-semibold">{selectedApp.action}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Templates Grid */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-serif">Popular Automations</h2>
                        <Button variant="outline">View All Templates</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Qualify & CRM', desc: 'If lead is qualified, create contact in Salesforce and tag as "Hot Lead".' },
                            { title: 'Appointment Booking', desc: 'When user confirms time, create event in Google Calendar and send invite.' },
                            { title: 'Support Ticket', desc: 'If resolution fails, creates a detailed ticket in Jira with call transcript summary.' }
                        ].map((item, i) => (
                            <Card key={i} className="hover:border-primary/50 transition-colors cursor-pointer group">
                                <CardHeader>
                                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Use Template <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-serif text-center mb-16">How to connect</h2>
                    <div className="space-y-12">
                        {[
                            { step: 1, title: 'Get your API Key', desc: 'Generate a secure API key from your Dialgood dashboard settings.' },
                            { step: 2, title: 'Search for Dialgood on Zapier', desc: 'Our latest version includes triggers for Call Started, Call Ended, and Function Invoked.' },
                            { step: 3, title: 'Map your Data', desc: 'All conversation variables (intent, duration, sentiment) are available as data fields in Zapier.' }
                        ].map((item) => (
                            <div key={item.step} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center font-serif font-bold text-xl">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-lg">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Zapier;
