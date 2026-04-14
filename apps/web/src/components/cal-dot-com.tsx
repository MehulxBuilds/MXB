import { getCalApi } from "@calcom/embed-react";
import { Button } from "@repo/ui";
import { useEffect } from "react";
export default function CalDotCom({ className, children = "Click here" }: { className?: string, children?: string | React.ReactNode }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "introduction" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Button className={className} data-cal-namespace="introduction"
        data-cal-link="mehulxbuilds/introduction"

        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >{children}</Button>;
};