import { html } from "@mastrojs/mastro";
import { pillars } from "../models/pillars.ts";
import { clinic } from "../models/clinic.ts";

interface Props {
  pathname: string;
  title: string;
}

export const Sidebar = ({ pathname, title }: Props) => {
  const pillarLinks = pillars.map(pillar => ({
    title: pillar.title,
    url: `/360/${pillar.slug}`,
  }));
  const clinicLinks = clinic.map(clinicPage => ({
    title: clinicPage.title,
    url: `/clinic/${clinicPage.slug}`,
  }));
  const showPillarsSubnav = pathname === "/360/" || pathname.startsWith("/360/");
  const showClinicSubnav = pathname === "/clinic/" || pathname.startsWith("/clinic/");

  return html`
    <div class="sidebar">
      <ul class="navigation">
        <li>
          <a href="/zurich">Zurich Switzerland</a>
        </li>
        <li>
          <a href="/360/" class=${showPillarsSubnav ? "active" : ""}>360° Approach</a>
          ${showPillarsSubnav
            ? html`
              <ul class="subnav">
                ${pillarLinks.map(pillar => html`
                  <li class=${pathname.startsWith(pillar.url) ? "active" : ""}>
                    <a href=${pillar.url} class=${pathname === pillar.url ? "active" : ""}>${pillar.title}</a>
                  </li>
                `)}
              </ul>
            `
            : ""}
        </li>
        <li>
          <a href="/clinic/" class=${showClinicSubnav ? "active" : ""}>Kusnacht Practice</a>
          ${showClinicSubnav
            ? html`
              <ul class="subnav">
                ${clinicLinks.map(clinicPage => html`
                  <li class=${pathname.startsWith(clinicPage.url) ? "active" : ""}>
                    <a href=${clinicPage.url} class=${pathname === clinicPage.url ? "active" : ""}>${clinicPage.title}</a>
                  </li>
                `)}
              </ul>
            `
            : ""}
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
      </ul>
    </div>
    `
    }
