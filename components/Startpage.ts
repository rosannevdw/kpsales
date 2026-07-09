import { ghPagesBasePath, html, type Html } from "@mastrojs/mastro";
import { Header } from "./Header.ts";

export const basePath = ghPagesBasePath();

interface Props {
  children: Html;
}

export const Startpage = (props: Props) =>
  html`
    <!doctype html>
    <html lang="en">
      <head>
        <title>${props.title}</title>
        <link rel="stylesheet" href=${basePath + "/styles.css"}>
        <meta name="viewport" content="width=device-width">
      </head>
      <body>


        <main>
          ${props.children}
        </main>


      </body>
    </html>
  `;
