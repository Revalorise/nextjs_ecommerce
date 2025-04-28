"use server";

import {PrismaClient} from "../generated/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export async function getLatestProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        orderBy: {createdAt: "desc"},
        take: LATEST_PRODUCTS_LIMIT,
    });

    return convertToPlainObject(data);
}