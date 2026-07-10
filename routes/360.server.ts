import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "A 360° Approach",
      children: html`
        <ul class="col4">
          <li class="image-tile">
            <a href="360-mentalhealth">
              <img src="media/precisionmedicine.jpg" alt="">
              <h3>Mental Health</h3>
            </a>
          </li>
          <li class="image-tile">
            <a href="360-internalmedicine">
              <img src="media/precisionmedicine.jpg" alt="">
              <h3>Internal Medicine</h3>
            </a>
          </li>
          <li class="image-tile">
            <a href="360-bior">
              <img src="media/precisionmedicine.jpg" alt="">
              <h3>BIO-R® Method</h3>
            </a>
          </li>
          <li class="image-tile">
            <a href="360-hospitality">
              <img src="media/precisionmedicine.jpg" alt="">
              <h3>Hospitality</h3>
            </a>
          </li>
        </ul>

      `,
    }),
  );
