export interface DesignType {
    id: string;
    key: string;
    url: string;
    title: string;
    description: string | null;
    provider: "UPLOADTHINGS" | "CFR2" | "AWSS3";
    createdAt: Date;
    updatedAt: Date;
}

export interface DesignResType {
    success: boolean;
    message: string;
    design: DesignType[] | [],
};

export const design = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DESIGN_API}`);
    if (!res.ok) {
        return {
            success: false,
            message: "Failed to Fetch",
            design: [],
        }
    }

    const data = await res.json();
    const response = data as DesignResType;

    return response
};