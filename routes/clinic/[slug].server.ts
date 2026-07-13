import { getParams, html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../../components/Layout.ts";
import { clinic } from "../../models/clinic.ts";

export const GET = (req: Request) => {
  const { slug } = getParams(req);
  const clinicPage = clinic.find(c => c.slug === slug);
  if (!clinicPage) return new Response("Not found", { status: 404 });
  return htmlToResponse(
    Layout({
      req,
      title: clinicPage.title,
      children: html`
        <ul class="slider">
          ${clinicPage.slides.map(slide => html`  
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
