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
      <body>


        <main>
          ${props.children}
        </main>

        <script>
          document.querySelectorAll("[data-transition-link]").forEach((link) => {
            link.addEventListener("click", (event) => {
              if (
                event.defaultPrevented ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                link.target === "_blank"
              ) {
                return;
              }

              const href = link.getAttribute("href");

              if (!href) {
                return;
              }

              event.preventDefault();
              document.body.classList.add("is-leaving");

              window.setTimeout(() => {
                window.location.href = href;
              }, 600);
            });
          });
        </script>

      </body>
    </html>
  `;
}
