import { z } from "zod";
import {formatNumberWithDecimal} from "@/lib/utils";

const currency = z.string()
        .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
            { message: "Price must be a valid number with two decimal places" })

export const insertProductSchema = z.object({
    name: z.string().min(3, { message: "Name is required" }),
    slug: z.string().min(3, { message: "Slug is required" }),
    category: z.string().min(3, { message: "Category is required" }),
    brand: z.string().min(3, { message: "Brand is required" }),
    description: z.string().min(3, { message: "Description is required" }),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, { message: "At least one image is required" }),
    numReviews: z.number(),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
});