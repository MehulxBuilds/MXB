import { create } from 'zustand';

import { Analytics, analytics } from "@/lib/analytics";

interface AnalyticsStoreType {
    analytics: Analytics;
    getAnalytics: () => Promise<Analytics>;
};

export const useAnalytics = create<AnalyticsStoreType>((set) => ({
    analytics: {
        pageviews: 0,
        visitors: 0
    },
    getAnalytics: async () => {
        const res = await analytics();
        set({ analytics: res });
        return res;
    },
}));