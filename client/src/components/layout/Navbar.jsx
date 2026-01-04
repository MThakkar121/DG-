import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/features' },
        { name: 'Voice Agent Builder', href: '/voice-agent-builder' },
        { name: 'Integrations', href: '/zapier' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Resources', href: '/resources' },
        { name: 'About', href: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'glass-card shadow-lg' : 'bg-transparent'
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 group"
                        aria-label="Dialgood Home"
                    >
                        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
                        </div>
                        <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">
                            Dialgood
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary relative',
                                    isActive(link.href)
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                )}
                            >
                                {link.name}
                                {isActive(link.href) && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            className="hidden sm:flex"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </Button>

                        {/* CTA Button */}
                        <Button asChild size="lg" className="hidden md:inline-flex">
                            <Link to="/contact">Get Started</Link>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        'text-base font-medium transition-colors hover:text-primary px-2 py-2',
                                        isActive(link.href)
                                            ? 'text-foreground bg-accent rounded-md'
                                            : 'text-muted-foreground'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2"
                                >
                                    {theme === 'dark' ? (
                                        <>
                                            <Sun className="w-4 h-4" /> Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="w-4 h-4" /> Dark Mode
                                        </>
                                    )}
                                </Button>
                            </div>
                            <Button asChild size="lg" className="w-full">
                                <Link to="/contact">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
