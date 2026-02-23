import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  tags: string[];
  image?: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // 1. Get file names
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 2. Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    // 3. Read file content
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 4. Parse metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      updated: data.updated || undefined,
      description: data.description,
      tags: data.tags || [],
      image: data.image || undefined,
      content,
    };
  });

  // 5. Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      updated: data.updated || undefined,
      description: data.description,
      tags: data.tags || [],
      image: data.image || undefined,
      content,
    };
  } catch (error) {
    console.error(`[Blog] Failed to load post: ${slug}`, error);
    return null;
  }
}
