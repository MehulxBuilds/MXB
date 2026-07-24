// lib/api/analytics.ts

export interface Analytics {
  visitors: number;
  pageviews: number;
}

export async function analytics(): Promise<Analytics> {
  const res = await fetch("/api/analytics", {
    next: {
      revalidate: 60, // cache for 1 minute
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch analytics");
  }

  const data = await res.json();

  return {
    pageviews: data.pageviews ?? 0,
    visitors: data.visitors ?? 0
  };
}