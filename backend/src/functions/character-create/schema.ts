export default {
  type: "object",
  properties: {
    name: { type: "string" },
    status: { type: "string" },
    species: { type: "string" },
    type: { type: "string" },
    gender: { type: "string" },
    origin: {
      type: "object",
      properties: {
        name: { type: "string" },
        url: { type: "string" },
      },
      required: ["name", "url"],
    },
    location: {
      type: "object",
      properties: {
        name: { type: "string" },
        url: { type: "string" },
      },
      required: ["name", "url"],
    },
    image: { type: "string" },
    episode: { type: "array" },
    url: { type: "string" },
  },
  required: ["name"],
} as const;
