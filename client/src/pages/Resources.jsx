import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, FileText, PlayCircle, Youtube } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const Resources = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Learning Hub"
                title="Resources & Documentation"
                description="Guides, API references, and tutorials to help you build better voice agents."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <ResourceCard
                            icon={BookOpen}
                            title="Documentation"
                            desc="Comprehensive guides for the core platform and SDKs."
                            action="Read Docs"
                            href="https://docs.dialgood.com"
                        />
                        <ResourceCard
                            icon={Code}
                            title="API Reference"
                            desc="Technical details for our REST and WebSocket APIs."
                            action="View API"
                            href="https://apidocs.dialgood.com"
                        />
                        <ResourceCard
                            icon={PlayCircle}
                            title="Video Tutorials"
                            desc="Step-by-step walkthroughs of building your first agent."
                            action="Watch Now"
                        />
                        <ResourceCard
                            icon={FileText}
                            title="Whitepapers"
                            desc="Deep dives into voice AI architecture and LLM orchestration."
                            action="Download"
                        />
                        <ResourceCard
                            icon={Youtube}
                            title="Webinars"
                            desc="Recordings of our past developer sessions and community calls."
                            action="Browse Library"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ResourceCard = ({ icon: Icon, title, desc, action, href }) => (
    <Card className="hover:border-primary/50 transition-colors group">
        <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 text-foreground/80 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
            <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-primary" asChild>
                <a href={href || '#'}>{action} &rarr;</a>
            </Button>
        </CardContent>
    </Card>
);

export default Resources;
