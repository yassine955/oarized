// codegen.ts
// change the schema's uri with our graphql server end point

module.exports = {
  overwrite: true,
  schema: "https://darkgoldenrod-walrus-345771.hostingersite.com/graphql",
  documents: ["graphql/**/*.graphql"],
  generates: {
    "generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
