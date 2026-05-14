import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    site: context.site ?? SITE_CONFIG.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
    })),
    customData: `<language>ro-RO</language>`,
  });
}
