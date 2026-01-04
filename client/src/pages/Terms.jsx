import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

const Terms = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                title="Terms of Service"
                description="Last Updated: October 24, 2025"
                align="left"
            />
            <div className="container mx-auto px-4 pb-24">
                <div className="prose dark:prose-invert max-w-4xl mx-auto">
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By accessing and using Dialgood ("Service"), you agree to accept and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                    </p>

                    <h3>2. Description of Service</h3>
                    <p>
                        Dialgood provides a platform for building, deploying, and managing voice AI agents. We reserve the right to modify, suspend, or discontinue the Service at any time.
                    </p>

                    <h3>3. User Responsibilities</h3>
                    <p>
                        You are responsible for all activity that occurs under your account. You agree not to use the Service for any illegal or unauthorized purpose, including but not limited to robocalling compliance and recording consent laws in your jurisdiction.
                    </p>

                    <h3>4. Intellectual Property</h3>
                    <p>
                        All rights, title, and interest in and to the Service are and will remain the exclusive property of Dialgood Technologies.
                    </p>

                    {/* Simplified for demo purposes */}
                    <p className="text-muted-foreground italic">
                        [...Full legal text would follow here...]
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
