export function isSameMonth(date: Date, comparison: Date, locale?: string) {
  function yearJalali(yearDate: any) {
    return parseInt(
      new Intl.DateTimeFormat('en-US-u-ca-persian', { year: 'numeric' }).format(yearDate),
      10
    );
  }

  function monthJalali(monthDate: any) {
    return parseInt(
      new Intl.DateTimeFormat('en-US-u-ca-persian', { month: 'numeric' }).format(monthDate),
      10
    );
  }

  return locale && locale === 'fa'
    ? yearJalali(date) === yearJalali(comparison) && monthJalali(date) === monthJalali(comparison)
    : date.getFullYear() === comparison.getFullYear() && date.getMonth() === comparison.getMonth();
}
