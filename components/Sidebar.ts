import { html } from "@mastrojs/mastro";
import { pillars } from "../models/pillars.ts";
import { about } from "../models/about.ts";

interface Props {
  pathname: string;
  title: string;
}

export const Sidebar = ({ pathname, title }: Props) => {
  const showPillarsSubnav = pathname.startsWith("/360-");
  const showAboutSubnav = pathname.startsWith("/practice-");

  return html`
    <div class="sidebar">
      <div>
        <h3>${title}</h3>
        <h2>Title</h2>
        <p>Maybe intro text</p>
      </div>
      <ul class="navigation">
        <li>
          <a href="/360/">360° Approach</a>
          ${showPillarsSubnav
            ? html`
              <ul class="subnav">
                ${pillars.map(pillar => html`
                  <li class=${pathname.startsWith(pillar.url) ? "active" : ""}>
                    <a href=${pillar.url} class=${pathname === pillar.url ? "active" : ""}>${pillar.title}</a>
                  </li>
                `)}
              </ul>
            `
            : ""}
        </li>
        <li>
          <a href="/practice">Kusnacht Practice</a>
          ${showAboutSubnav
            ? html`
              <ul class="subnav">
                ${about.map(clinic => html`
                  <li class=${pathname.startsWith(clinic.url) ? "active" : ""}>
                    <a href=${clinic.url} class=${pathname === clinic.url ? "active" : ""}>${clinic.title}</a>
                  </li>
                `)}
              </ul>
            `
            : ""}
        </li>
      </ul>
    </div>
  `;
}