import { html, htmlToResponse } from "@mastrojs/mastro";
import { Startpage } from "../components/Startpage.ts";

export const GET = () =>
  htmlToResponse(
    Startpage({
      children: html`
      
      <div class="startscreen">
        <a href="/360" class="logo">
          <img
          src="media/TKP_Linen.svg"
          alt="Kusnacht Practice Logo" />
        </a>
        <a href="/practice/film" class="movielink">
           📹
        </a>
      </div>

      `,
    }),
  );
