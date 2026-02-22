"use server";

import { client } from "@repo/db";

export const test = async() => {
    const res = await client.test.create({
        data: {
            name: "hello",
        }
    });

    return res;
}