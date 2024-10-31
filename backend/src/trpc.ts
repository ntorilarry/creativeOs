import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { adCategories, adTemplates } from "./data";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

const adTemplateSchema = z.object({
  id: z.number(),
  images: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      image: z.string(),
      users: z.number(),
      saves: z.number(),
      tags: z.array(z.string()),
      link: z.string(),
      createdOn: z.date(),
      updatedOn: z.date(),
      category: z.string(),
    })
  ),
  createdOn: z.date().optional(),
  updatedOn: z.date().optional(),
  createdBy: z.string(),
});

const categorySchema = z.object({
  id: z.number(),
  categoryName: z.string(),
  createdOn: z.date(),
  updatedOn: z.date(),
});

export const appRouter = router({
  getTemplates: publicProcedure.query(() => {
    adTemplates.forEach((template) => {
      adTemplateSchema.parse(template);
    });
    return adTemplates;
  }),

  getCategories: publicProcedure.query(() => {
    adCategories.forEach((category) => {
      categorySchema.parse(category);
    });
    return adCategories;
  }),
});

export type AppRouter = typeof appRouter;
