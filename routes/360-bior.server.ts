import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "BIO-R® Method",
      children: html`
      <ul class="slider">
        <li class="slide">
          content 1
        </li>
        <li class="slide">
          content 2
        </li>
        <li class="slide">
          content 3
        </li>
      </ul>
      `,
    }),
  );
