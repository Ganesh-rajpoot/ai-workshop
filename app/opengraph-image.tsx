import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "ACIT Computer Center — AI Training Workshop for students";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage();
}
