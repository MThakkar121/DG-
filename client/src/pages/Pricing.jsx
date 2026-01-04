import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$0',
            period: 'for dev testing',
            desc: 'Perfect for prototyping and hobby projects.',
            features: ['1 Agent', '1,000 mins/month', 'Standard Voices', 'Community Support'],
            cta: 'Start Building',
            popular: false
        },
        {
            name: 'Pro',
            price: '$99',
            period: '/month',
            desc: 'For scaling startups and production apps.',
            features: ['Unlimited Agents', '10,000 mins/month', 'Ultra-low Latency', 'Priority Support', 'Custom Functions'],
            cta: 'Go Pro',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            desc: 'For large volume and custom requirements.',
            features: ['Unlimited Minutes', 'Private Cloud Deployment', 'SLA Guarantees', 'Dedicated Account Manager', 'Custom LLM Fine-tuning'],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Pricing"
                title="Simple, usage-based pricing"
                description="Start for free, scale as you grow. No hidden fees or per-agent costs."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, i) => (
                            <Card key={i} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif mb-2">{plan.name}</CardTitle>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground">{plan.period}</span>
                                    </div>
                                    <CardDescription>{plan.desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} size="lg">
                                        {plan.cta}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto text-sm text-muted-foreground">
                        <p>All plans include access to our standard voice library. Usage is billed per minute of conversation time, rounded up to the nearest second. <a href="#" className="underline hover:text-primary">Read full terms</a>.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
