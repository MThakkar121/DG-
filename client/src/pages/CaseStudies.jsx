import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const CaseStudies = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Customer Stories"
                title="Success at Scale"
                description="See how leading brands are transforming their customer experience with Dialgood voice agents."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <FeaturedCaseStudy
                            company="Acme Logistics"
                            title="Automating 85% of 'Where is my order?' calls"
                            stats={[
                                { label: 'Reduction in Agent Cost', value: '45%' },
                                { label: 'CSAT Score Increase', value: '+12pts' }
                            ]}
                            image="/case-study-1.jpg" // Placeholder
                        />
                        <FeaturedCaseStudy
                            company="HealthFirst"
                            title="Patient appointment scheduling with zero wait times"
                            stats={[
                                { label: 'Appointments Booked', value: '12k+' },
                                { label: 'No-Show Rate', value: '-20%' }
                            ]}
                            image="/case-study-2.jpg" // Placeholder
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { company: 'TechFlow', title: 'Scaling Tier 1 Support', icon: TrendingUp },
                            { company: 'UrbanRent', title: '24/7 Leasing Agent', icon: Clock },
                            { company: 'StudyMate', title: 'AI Tutors for Everyone', icon: Users }
                        ].map((study, i) => (
                            <Card key={i} className="group hover:border-primary/50 transition-all cursor-pointer">
                                <CardHeader>
                                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">{study.company}</div>
                                    <CardTitle className="group-hover:text-primary transition-colors">{study.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">
                                        Leveraged multi-skill orchestration to handle complex queries without human intervention.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-primary text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        Read Story <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeaturedCaseStudy = ({ company, title, stats, image }) => (
    <div className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col hover:border-primary/50 transition-colors group cursor-pointer">
        <div className="h-48 bg-muted/50 relative overflow-hidden">
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">{company}</span>
            </div>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-serif font-medium mb-6 group-hover:text-primary transition-colors">{title}</h3>
            <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border pt-6">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default CaseStudies;
