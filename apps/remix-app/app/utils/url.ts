export function sanitizeUrl(str: string) {
  return encodeURIComponent(str.replace(/\s+/g, '-')).toLowerCase()
}
