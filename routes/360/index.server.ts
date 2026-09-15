import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../../components/Layout.ts";
import { pillars } from "../../models/pillars.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "A 360° Approach",
      children: html`
        <div class="maingrid">
          <div>
          </div>
          <div class="tilewrap">
            <div class="centeritems">
              <div class="whitecircle">
                <h3>Our 360° approach</h3>
              </div>
            </div>
            <ul class="col2 col360">
              ${pillars.map(p => html`
                <li class="image-tile">
                  <a href=${p.slug}>
                    <img src=${p.image} alt="">
                    <h3>${p.title}</h3>
                  </a>
                </li>
                `)}
            </ul>
          </div>
        </div>
      `,
    }),
  );
