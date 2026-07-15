import { getParams, html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../../components/Layout.ts";
import { pillars } from "../../models/pillars.ts";

export const getStaticPaths = () => pillars.map(p => `/360/${p.slug}`);

export const GET = (req: Request) => {
  const { slug } = getParams(req);
  const pillar = pillars.find(p => p.slug === slug);
  if (!pillar) return new Response("Not found", { status: 404 });
  return htmlToResponse(
    Layout({
      req,
      title: pillar.title,
      children: html`
        <ul class="slider">
          ${pillar.slides.map(slide => html`  
          <li class="slidetext">
            <h2>${slide.title}</h2>
            <p>${slide.body}</p>
          </li>
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