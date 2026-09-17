import { ghPagesBasePath, html, type Html } from "@mastrojs/mastro";

export const basePath = ghPagesBasePath();

interface Props {
  title: string;
}

export const Head = (props: Props): Html => html`
  <head>
    <title>${props.title}</title>
    <link rel="stylesheet" href=${basePath + "/styles.css"}>
    <meta name="viewport" content="width=device-width">
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
  </head>
`;
