"use client";

import { useAnalytics } from "@/store/analytics";
import { Button, Hint } from "@repo/ui";
import { useEffect } from "react";

const AnalyticsView = () => {
    const { analytics, getAnalytics } = useAnalytics();

    useEffect(() => {
        getAnalytics();
    });

    return (
        <Button className='font-medium tracking-tight bg-white px-1 h-4 flex items-center justify-center gap-2 rounded-full hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800 transition-all absolute bottom-0 sm:bottom-1 right-0 sm:right-1.5'>
            <Hint side="right" label={`${analytics.pageviews}+ All Time Visitor's`}>

                <span className="relative flex items-center justify-center size-3">
                    <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex size-1.75 rounded-full bg-green-500" />
                </span>
            </Hint>
        </Button>
    )
};

export default AnalyticsView;