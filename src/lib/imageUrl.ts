export type ImageSize =
  | "square_hd"
  | "square"
  | "portrait_4_3"
  | "portrait_16_9"
  | "landscape_4_3"
  | "landscape_16_9";

const IMAGE_ENDPOINT =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image";

export function buildImageUrl(prompt: string, size: ImageSize = "landscape_16_9"): string {
  const encoded = encodeURIComponent(prompt.trim());
  return `${IMAGE_ENDPOINT}?prompt=${encoded}&image_size=${size}`;
}
