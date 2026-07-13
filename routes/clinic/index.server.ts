import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../../components/Layout.ts";
import { clinic } from "../../models/clinic.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "About Kusnacht Practice",
      children: html`
        <div class="maingrid">
          <div>
          </div>
          <ul class="col4">
            ${clinic.map(c => html`
              <li class="image-tile">
              <a href=${c.slug}>
                <img src="/media/precisionmedicine.jpg" alt="">
                <h3>${c.title}</h3>
              </a>
            </li>
              `)}
          </ul>
        </div>
      `,
    }),
  );
