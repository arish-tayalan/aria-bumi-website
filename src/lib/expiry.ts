// Certificate dates are stored as DD/MM/YYYY (as printed on the certificates).
export const parseDmy = (value: string): Date => {
  const [d, m, y] = value.split('/').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};

/** Prints a build-log warning when a certificate is expired or expires within `days` days.
 *  The site is static, so this only helps if the site is rebuilt; renew before the date. */
export function warnIfExpiring(label: string, validUntil: string, days = 60) {
  const msLeft = parseDmy(validUntil).getTime() - Date.now();
  const daysLeft = Math.ceil(msLeft / 86_400_000);
  if (daysLeft < 0) {
    console.warn(`[certificates] ${label} EXPIRED on ${validUntil}. Update src/data/company.ts and the certificate image.`);
  } else if (daysLeft <= days) {
    console.warn(`[certificates] ${label} expires in ${daysLeft} days (${validUntil}). Renew and update src/data/company.ts.`);
  }
}
