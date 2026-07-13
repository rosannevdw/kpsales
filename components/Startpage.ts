import { ghPagesBasePath, html, type Html } from "@mastrojs/mastro";

export const basePath = ghPagesBasePath();

interface Props {
  title: string;
  children: Html;
}

export const Startpage = (props: Props) => {
  return html`
    <!doctype html>
    <html lang="en">
      <head>
        <title>${props.title}</title>
        <link rel="stylesheet" href=${basePath + "/styles.css"}>
        <meta name="viewport" content="width=device-width">
      </head>
      <body class="page-index">


        <main>
          ${props.children}
        </main>

      </body>
    </html>
  `;
}
