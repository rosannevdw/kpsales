import { html, type Html } from "@mastrojs/mastro";
import { Sidebar } from "./Sidebar.ts";
import { Head } from "./Head.ts";

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
      ${Head({ title })}
      <body class=${props.bodyClass ?? ""}>
        ${Sidebar({ title, pathname })}

        <main>
          ${props.children}
        </main>


      </body>
    </html>
  `;
}
