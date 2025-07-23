import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "data");

function loadPosts() {
  const files = readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  return files.map(async (file) => {
    const fullPath = path.join(postsDirectory, file);
    const fileContents = readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: data.id || file.replace(/\.md$/, ""),
      title: data.title || "",
      date: data.date || null,
      slug: data.slug || file.replace(/\.md$/, ""),
      content: marked(content),
      uri: data.uri || `/posts/${file.replace(/\.md$/, "")}`,
      tags: {
        edges: (data.tags || []).map((tag: string, index: number) => ({
          node: {
            id: `tag-${index}`,
            name: tag,
          },
        })),
      },
      featuredImage: data.featuredImage
        ? {
            node: {
              sourceUrl: data.featuredImage,
            },
          }
        : null,
    };
  });
}

const typeDefs = /* GraphQL */ `
  type Tag {
    id: ID!
    name: String!
  }

  type TagEdge {
    node: Tag!
  }

  type TagConnection {
    edges: [TagEdge!]!
  }

  type FeaturedImageNode {
    sourceUrl: String!
  }

  type FeaturedImage {
    node: FeaturedImageNode!
  }

  type Post {
    id: ID!
    title: String!
    date: String
    slug: String
    content: String
    uri: String
    tags: TagConnection
    featuredImage: FeaturedImage
  }

  type PostEdge {
    node: Post!
  }

  type PostConnection {
    nodes: [Post!]!
  }

  type Query {
    posts(where: PostWhereInput): PostConnection!
    post(id: ID!): Post
  }

  input PostWhereInput {
    categoryName: String
    categoryNotIn: ID
  }
`;

const resolvers = {
  Query: {
    posts: async () => ({
      nodes: loadPosts(),
    }),
    post: async (_: any, { id }: { id: string }) => {
      const posts = loadPosts();

      const resolvePosts = await Promise.all(posts);

      const filterPostOne = resolvePosts?.filter((post) => {
        return post?.id === id;
      })[0];

      return filterPostOne || null;
    },
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});
