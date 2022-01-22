export function getCookieValue(cookieName: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName + "="))
    ?.split("=")[1];
}
