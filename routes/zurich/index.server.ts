import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../../components/Layout.ts";
import { zurichPages } from "../../models/zurich.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "Zurich, Switzerland",
      children: html`
        <div class="maingrid">
          <div>
          </div>
          <ul class="col1">
            ${zurichPages.map(p => html`
              <li class="image-tile">
              <a href=${`/zurich/${p.slug}`}>
                <img src=${p.image} alt="">
                <h3>${p.title}</h3>
              </a>
            </li>
              `)}
          </ul>
        </div>
      `,
    }),
  );
