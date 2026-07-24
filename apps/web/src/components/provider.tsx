"use client";

import React from 'react';
import { Analytics } from "@vercel/analytics/next";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
    });
}

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <PostHogProvider client={posthog}>
            {/* I will be using posthog instead of umami */}
            {children}
            <Analytics />
        </PostHogProvider>
    )
};

export default Provider;