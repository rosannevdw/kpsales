import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (req: Request) =>
  htmlToResponse(
    Layout({
      req,
      title: "Mental Health",
      children: html`
      <ul class="slider">
        <li class="slide" style="--image-count: 2">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
        </li>
        <li class="slide" style="--image-count: 1">
          <img src="media/precisionmedicine.jpg" alt="" class="largeimg">
          <img src="media/precisionmedicine.jpg" alt="">
        </li>
        <li class="slide" style="--image-count: 1">
          <img src="media/precisionmedicine.jpg" alt="">
        </li>
        <li class="slide" style="--image-count: 4">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
        </li>
        <li class="slide" style="--image-count: 3">
          <img src="media/precisionmedicine.jpg" alt="" class="largeimg">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
        </li>
        <li class="slide" style="--image-count: 2">
          <img src="media/precisionmedicine.jpg" alt="" class="largeimg">
          <img src="media/precisionmedicine.jpg" alt="">
          <img src="media/precisionmedicine.jpg" alt="">
        </li>
      </ul>
      `,
    }),
  );
