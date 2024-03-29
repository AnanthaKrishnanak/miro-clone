import { mutation } from "./_generated/server";
import { v } from "convex/values";

const boardImage = "/board.jpg";

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const userIdentity = await ctx.auth.getUserIdentity();

    if (!userIdentity) {
      throw new Error("Unauthorized");
    }

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: userIdentity.subject,
      authorName: userIdentity.name!,
      imageUrl: boardImage,
    });

    return board;
  },
});
