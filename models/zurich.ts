
import zurich from "../data/zurich/zurich.json" with { type: "json" };

export const zurichPages = [zurich].map(p =>
  ({...p, slug: p.title.replaceAll(" ", "-").toLowerCase().replace(/[^a-z0-9]/g, "")}));
