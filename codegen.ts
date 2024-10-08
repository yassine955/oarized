// codegen.ts
// change the schema's uri with our graphql server end point
module.exports = {
  overwrite: true,
  schema: process.env.GraphQLURI,
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
