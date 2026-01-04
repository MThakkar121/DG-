import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const Contact = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                badge="Contact Us"
                title="Let's talk."
                description="Have a question about our enterprise plans? Need a custom integration? We're here to help."
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-2xl font-serif font-medium mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First name</label>
                                        <Input placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last name</label>
                                        <Input placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <Input type="email" placeholder="jane@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Message</label>
                                    <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" />
                                </div>
                                <Button size="lg" className="w-full">Send Message</Button>
                            </form>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-2xl font-serif font-medium mb-6">Or get in touch directly</h2>

                            <div className="space-y-6">
                                <ContactItem icon={Mail} title="Email" value="hello@dialgood.com" link="mailto:hello@dialgood.com" />
                                <ContactItem icon={Phone} title="Phone" value="+1 (555) 123-4567" link="tel:+15551234567" />
                                <ContactItem icon={MapPin} title="Office" value="123 AI Boulevard, San Francisco, CA 94107" />
                            </div>

                            <Card className="bg-muted/30 border-none mt-8">
                                <CardContent className="p-6">
                                    <h4 className="font-semibold mb-2">Enterprise Support</h4>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Existing enterprise customers have access to a dedicated Slack channel and 24/7 phone support.
                                    </p>
                                    <Button variant="outline" size="sm">Log in to Support Portal</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactItem = ({ icon: Icon, title, value, link }) => (
    <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <div className="font-medium mb-1">{title}</div>
            {link ? (
                <a href={link} className="text-muted-foreground hover:text-foreground transition-colors">{value}</a>
            ) : (
                <div className="text-muted-foreground">{value}</div>
            )}
        </div>
    </div>
);

export default Contact;
