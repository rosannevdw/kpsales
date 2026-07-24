import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../../components/Layout.ts";
import { galleryPages } from "../../models/gallery.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "Gallery",
      children: html`
        <div class="maingrid">
          <div>
          </div>
          <ul class="col1">
            ${galleryPages.map(p => html`
              <li class="image-tile">
              <a href=${`/gallery/${p.slug}`}>
                <img src=${p.image} alt="">
              </a>
            </li>
              `)}
          </ul>
        </div>
      `,
    }),
  );
