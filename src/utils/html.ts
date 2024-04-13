import DOMPurify from 'dompurify'

export const sanitizeHtml = (
  html: string,
  config: DOMPurify.Config = {},
): string => {
  return DOMPurify.sanitize(html, config) as string
}
