import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const Blogs = () => {
    const posts = [
        {
            title: "The Death of the Single-Prompt Bot",
            excerpt: "Why orchestration is the future of conversational AI, and how specialized agents outperform generalists.",
            category: "Thought Leadership",
            date: "Oct 12, 2025",
            readTime: "5 min read",
            image: "/blog-1.jpg"
        },
        {
            title: "Reducing Voice Latency to <300ms",
            excerpt: "A technical deep dive into our edge infrastructure and optimization techniques for real-time synthesis.",
            category: "Engineering",
            date: "Sep 28, 2025",
            readTime: "8 min read",
            image: "/blog-2.jpg"
        },
        {
            title: "Customer Success Story: Acme Corp",
            excerpt: "How a logistics giant automated 10,000 calls per day with 95% resolution rate using Dialgood.",
            category: "Case Study",
            date: "Sep 15, 2025",
            readTime: "4 min read",
            image: "/blog-3.jpg"
        },
        {
            title: "New Feature: Custom Function Calling",
            excerpt: "You can now execute arbitrary Python code mid-conversation. Here's how to set it up.",
            category: "Product Update",
            date: "Aug 30, 2025",
            readTime: "3 min read",
            image: "/blog-4.jpg"
        }
    ];

    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Blog"
                title="Insights & Updates"
                description="News, engineering deep dives, and tutorials from the Dialgood team."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <Card key={i} className="group cursor-pointer hover:border-primary/50 transition-all overflow-hidden flex flex-col">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-serif text-4xl">
                                        Aa
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="secondary">{post.category}</Badge>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="text-xs text-muted-foreground border-t pt-4 mt-auto">
                                    {post.readTime}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
