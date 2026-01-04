import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHeader from '@/components/layout/PageHeader';

const FAQ = () => {
    const faqs = [
        {
            question: "How does the 'multi-skill' orchestration work?",
            answer: "Unlike traditional bots that use a single prompt, Dialgood allows you to create specialized 'skills' (e.g., Sales, Support, Tech). Our orchestrator intelligently routes the conversation to the best skill in real-time based on user intent, maintaining context across the entire session."
        },
        {
            question: "Can I use my own fine-tuned models?",
            answer: "Yes! We support custom endpoints. If you have a fine-tuned Llama 3 or Mistral model hosted on HuggingFace or your own infrastructure, you can plug it directly into a skill."
        },
        {
            question: "What happens if the user interrupts the agent?",
            answer: "Our engine features ultra-low latency 'barge-in' detection. The moment the user starts speaking, the agent stops audio generation instantly and begins listening, creating a natural, human-like flow."
        },
        {
            question: "Do you offer on-premise deployment?",
            answer: "Yes, for Enterprise plans. We can deploy our voice edge network and orchestration engine within your VPC for maximum security and compliance (HIPAA/GDPR)."
        },
        {
            question: "How much does it cost?",
            answer: "We offer a generous free tier for developers. Production plans start at $99/mo depending on usage volume. See our Pricing page for more details."
        }
    ];

    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="FAQ"
                title="Frequently Asked Questions"
                description="Everything you need to know about the platform and billing."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
