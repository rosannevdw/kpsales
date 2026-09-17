import { html, type Html } from "@mastrojs/mastro";
import { Head } from "./Head.ts";

interface Props {
  title: string;
  children: Html;
  backHref: string;
}

// Chrome-less layout: no Sidebar, edge-to-edge main. Used for the hidden
// fullscreen slider subpages under /zurich/ and /gallery/.
export const FullscreenLayout = (props: Props) => {
  return html`
    <!doctype html>
    <html lang="en">
      ${Head({ title: props.title })}
      <body class="page-full">

        <a href=${props.backHref} class="exit-link" aria-label="Back to overview">&times;</a>

        <main>
          ${props.children}
        </main>

      </body>
    </html>
  `;
}
