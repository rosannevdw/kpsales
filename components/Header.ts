import { html } from "@mastrojs/mastro";
import { pillars } from "../models/pillars.ts";

export const Header = () =>
  html`
    <header>
      <div>
        <h2>Title</h2>
        <p>Maybe intro text</p>
      </div>
      <ul class="navigation">
        <li>360° Approach
          <ul class="subnav">
            ${pillars.map(pillar =>
              html`
              <li class=${pathname.startsWith(pillar.url) ? "active" : ""}>
                <a href=${pillar.url}>${pillar.title}</a>
              </li>`)}
          </ul>
        </li>
        <li>Kusnacht Practice
          <ul class="subnav">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
          </ul>
        </li>
      </ul>
    </header>
  `;
