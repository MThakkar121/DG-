import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PageHeader = ({ title, description, badge, align = 'center', className }) => {
    return (
        <div className={cn("relative py-20 md:py-28 overflow-hidden", className)}>
            <div className="absolute inset-0 -z-10 bg-muted/20" />
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={cn("max-w-4xl", align === 'center' ? "mx-auto text-center" : "")}>
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary"
                        >
                            {badge}
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            {description}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
