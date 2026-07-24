
import gallery from "../data/gallery/gallery.json" with { type: "json" };

export const galleryPages = [gallery].map(p =>
  ({...p, slug: p.title.replaceAll(" ", "-").toLowerCase().replace(/[^a-z0-9]/g, "")}));
