import { html, htmlToResponse } from "@mastrojs/mastro";
import { Startpage } from "../components/Startpage.ts";

export const GET = () =>
  htmlToResponse(
    Startpage({
      title: "Kusnacht Practice Presentation",
      children: html`
      
      <div class="startscreen">
        <a href="/360/" class="logo" data-transition-link>
          <img
          src="media/TKP_Linen.svg"
          alt="Kusnacht Practice Logo" />
        </a>
        <a href="/clinic/infocus" class="movielink">
           &rarr; KP film
        </a>
      </div>

      `,
    }),
  );
