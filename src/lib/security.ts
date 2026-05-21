/**
 * Security Utilities
 * 
 * Centralized security functions for input sanitization, 
 * output encoding, and validation across the portfolio.
 */

/**
 * Safely serialize JSON for embedding inside <script> tags.
 * 
 * JSON.stringify alone does NOT prevent script injection because
 * the sequence "</script>" inside a JSON string will prematurely
 * close the surrounding script tag in HTML parsing.
 * 
 * This function escapes the characters that could break out of
 * a <script> context: <, >, &, U+2028, U+2029.
 * 
 * @see https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

/**
 * Validates that a Google Analytics Measurement ID matches the
 * expected format (G-XXXXXXXXXX or UA-XXXXXXXX-X).
 * 
 * Prevents injection through environment variable pollution.
 */
export function isValidGaId(id: string | undefined): id is string {
  if (!id) return false;
  return /^(G-[A-Z0-9]{6,12}|UA-\d{6,10}-\d{1,3})$/i.test(id);
}

/**
 * Validates a blog post slug to prevent path traversal attacks.
 * 
 * Only allows alphanumeric characters, hyphens, and underscores.
 * Rejects any slug containing dots, slashes, or null bytes.
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-zA-Z0-9][\w-]{0,200}$/.test(slug) && !slug.includes('..');
}
