"use server";

import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { PrismaClient } from "@/lib/generated/prisma";
import { Product } from "@/types";


/**
 * Fetches the latest products from the database.
 * @returns {Promise<Product[]>} - A promise that resolves to an array of product objects.
 */
export async function getLatestProducts(): Promise<Product[]> {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        take: LATEST_PRODUCTS_LIMIT,
    });

    return convertToPlainObject(
        data.map(product => ({
            ...product,
            price: product.price.toString(),
            rating: product.rating.toString(),
        }))
    );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const prisma = new PrismaClient();
    const data = await prisma.product.findUnique({
        where: { slug },
    });

    if (!data) return null;

    return convertToPlainObject({
        ...data,
        price: data.price.toString(),
        rating: data.rating.toString(),
    });
}