import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

const Privacy = () => {
    return (
        <div className="min-h-screen pt-16">
            <PageHeader
                title="Privacy Policy"
                description="Last Updated: October 24, 2025"
                align="left"
            />
            <div className="container mx-auto px-4 pb-24">
                <div className="prose dark:prose-invert max-w-4xl mx-auto">
                    <h3>1. Information We Collect</h3>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or request customer support. This may include your name, email address, and payment information.
                    </p>

                    <h3>2. Voice Data Handling</h3>
                    <p>
                        To provide our Service, we process audio data. <strong>We do not use your customer voice data to train our foundational models</strong> without your explicit written consent. Data is encrypted in transit and at rest.
                    </p>

                    <h3>3. How We Use Information</h3>
                    <p>
                        We use the information we collect to operate, maintain, and improve our services, helping you manage your voice agents and billing.
                    </p>

                    <h3>4. Data Retention</h3>
                    <p>
                        We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
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

export default Privacy;
