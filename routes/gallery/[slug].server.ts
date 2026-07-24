import { getParams, html, htmlToResponse } from "@mastrojs/mastro";
import { FullscreenLayout } from "../../components/FullscreenLayout.ts";
import { galleryPages } from "../../models/gallery.ts";

export const getStaticPaths = () => galleryPages.map(p => `/gallery/${p.slug}`);

export const GET = (req: Request) => {
  const { slug } = getParams(req);
  const page = galleryPages.find(p => p.slug === slug);
  if (!page) return new Response("Not found", { status: 404 });
  return htmlToResponse(
    FullscreenLayout({
      title: page.title,
      backHref: "/gallery/",
      children: html`
        <ul class="slider-full">
          ${page.slides.map(slide => html`
          <li class="slide" style="--image-count: ${slide.images.filter(i => !i.large).length}">
            ${slide.images.map(image => html`
            <img src=${image.src} alt="" class=${image.large ? "largeimg" : ""}>
            `)}
          </li>
            `)}
        </ul>
      `,
    }),
  );
}
