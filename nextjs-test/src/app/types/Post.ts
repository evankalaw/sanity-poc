export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: {
    // optional since image field has no validation rule
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  body: any[]; // or more specific type for your portable text
};
