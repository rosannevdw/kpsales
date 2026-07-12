import { ghPagesBasePath, html, type Html } from "@mastrojs/mastro";
import { Sidebar } from "./Sidebar.ts";

export const basePath = ghPagesBasePath();

interface Props {
  title: string;
  children: Html;
  req: Request;
  bodyClass?: string;
}

export const Layout = (props: Props) => {
  const { title } = props;
  const { pathname } = new URL(props.req.url);
  return html`
    <!doctype html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href=${basePath + "/styles.css"}>
        <meta name="viewport" content="width=device-width">
      </head>
      <body class=${props.bodyClass ?? ""}>
        ${Sidebar({ title, pathname })}

        <main>
          ${props.children}
        </main>


      </body>
    </html>
  `;
}
