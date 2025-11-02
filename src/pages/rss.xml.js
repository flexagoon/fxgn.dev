import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "fxgn",
    description: "fxgn's blog",
    site: context.site,
    trailingSlash: false,
    stylesheet: "/rss.xsl",
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}`,
    })),
  });
}
