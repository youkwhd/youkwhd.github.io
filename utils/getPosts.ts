import fs from "fs";
import { join } from "path";
import { Post } from "../types";
import matter, { GrayMatterFile } from "gray-matter";
import replaceString from "./replaceString";

const postsDir: string = join(process.cwd(), "_posts");
const postFiles: string[] = fs.readdirSync(postsDir);
const postSlugs: string[] = postFiles.map((file: string) => file.replace(/\.md$/, ""));

const getPostBySlug = (slug: string): Post => {
    const postPath: string = join(postsDir, `${slug}.md`);
    const postContent: string = fs.readFileSync(postPath, "utf8");
    const { data, content }: GrayMatterFile<string> = matter(postContent);

    // e.g. ["software-development"]: "software development"
    const tags: { [key: string]: string } = {}; 
    data.tags.forEach((tag: string) => {
        const parsedTag: string = parsePostTag(tag);
        tags[parsedTag] = tag;
    });

    return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        content,
        tags
    };
};

const getAllPosts = (): Post[] => {
    const posts = postSlugs 
        .map((slug: string): Post => getPostBySlug(slug))
        .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1));

    return posts;
};

const parsePostTag = (tag: string): string => {
    // TODO: make it one line, learn how to regex.
    tag = replaceString(tag, " ", "-");
    tag = replaceString(tag, "/", "-");
    tag = replaceString(tag, ".", "-");

    return tag;
};

export {
    getPostBySlug,
    getAllPosts
};
