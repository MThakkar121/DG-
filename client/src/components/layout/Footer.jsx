import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
    const footerLinks = {
        product: [
            { name: 'Features', href: '/features' },
            { name: 'Voice Agent Builder', href: '/voice-agent-builder' },
            { name: 'Integrations', href: '/zapier' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Case Studies', href: '/case-studies' },
        ],
        resources: [
            { name: 'Documentation', href: '/resources' },
            { name: 'Blog', href: '/blogs' },
            { name: 'FAQ', href: '/faq' },
            { name: 'API Reference', href: 'https://apidocs.dialgood.com', external: true },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Careers', href: '/about#careers' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/dialgood' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/dialgood' },
        { name: 'GitHub', icon: Github, href: 'https://github.com/dialgood' },
    ];

    return (
        <footer className="border-t border-border bg-background" role="contentinfo">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Zap className="w-4 h-4 text-primary-foreground" fill="currentColor" />
                            </div>
                            <span className="font-serif text-xl font-bold">Dialgood</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                            Build voice agents that aren't stuck with one model. One agent, infinite skills.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent hover:border-primary transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-border pt-8 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Stay updated</h3>
                            <p className="text-sm text-muted-foreground">
                                Get the latest news and updates from Dialgood.
                            </p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                aria-label="Email address"
                            />
                            <Button size="default">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Dialgood Technologies. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <span className="text-primary">♥</span> for the future of voice AI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
