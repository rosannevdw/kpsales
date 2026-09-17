import { html, type Html } from "@mastrojs/mastro";
import { Head } from "./Head.ts";

interface Props {
  title: string;
  children: Html;
}

export const Startpage = (props: Props) => {
  return html`
    <!doctype html>
    <html lang="en">
      ${Head({ title: props.title })}
      <body class="page-index">


        <main>
          ${props.children}
        </main>

      </body>
    </html>
  `;
}
