import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "Welcome to your website!",
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
