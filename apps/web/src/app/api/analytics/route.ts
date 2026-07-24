const PROJECT_ID = process.env.POSTHOG_PROJECT_ID!;
const API_KEY = process.env.POSTHOG_API_KEY!;

export async function GET() {
    const res = await fetch(
        `https://us.posthog.com/api/projects/${PROJECT_ID}/query`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: {
                    kind: "TrendsQuery",
                    series: [
                        {
                            kind: "EventsNode",
                            event: "$pageview",
                            math: "dau",
                        },
                        {
                            kind: "EventsNode",
                            event: "$pageview",
                            math: "total",
                        },
                    ],
                    dateRange: {
                        date_from: "2026-04-15",
                    },
                    interval: "day",
                },
            }),
        }
    );

    const data = await res.json();

    const visitors = data.results?.find(
        (r: any) => r.action.math === "dau"
    );

    const pageviews = data.results?.find(
        (r: any) => r.action.math === "total"
    );

    return Response.json({
        visitors: visitors?.count ?? 0,
        pageviews: pageviews?.count ?? 0,
    })
};