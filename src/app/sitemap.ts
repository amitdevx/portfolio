import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { projectsData } from '@/data/portfolio-data';

const siteUrl = 'https://amitdevx.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  const posts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectsData
    .filter((project) => project.docLink && project.docLink.startsWith('/'))
    .map((project) => ({
      url: `${siteUrl}${project.docLink}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }));

  return [
    { url: siteUrl, lastModified, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${siteUrl}/cv`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blogs`, lastModified, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${siteUrl}/amit-divekar`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/projects`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/notes`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    ...projectEntries,
    ...blogEntries,
  ];
}