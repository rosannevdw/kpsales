import { html } from "@mastrojs/mastro";
import { pillars } from "../models/pillars.ts";

export const Header = ({ pathname }: { pathname: string }) => {
  const hideSubnav = pathname === "/360" || pathname === "/practice";
  return html`
    <header class=${hideSubnav ? "hide-subnav" : ""}>
      <div>
        <h2>Title</h2>
        <p>Maybe intro text</p>
      </div>
      <ul class="navigation">
        <li>
          <a href="/360">360° Approach</a>
          <ul class="subnav">
            ${pillars.map(pillar =>
              html`
              <li class=${pathname.startsWith(pillar.url) ? "active" : ""}>
                <a href=${pillar.url} class=${pathname === pillar.url ? "active" : ""}>${pillar.title}</a>
              </li>`)}
          </ul>
        </li>
        <li>
          <a href="/practice">Kusnacht Practice</a>
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
}