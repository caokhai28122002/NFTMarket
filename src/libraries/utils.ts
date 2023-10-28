export const cutString = (str?: string, start: number=5, end: number=5): string => {
  if (!str) return '';
  if (str.length <= (start + end)) return str;
  return str.substring(0, start) + '...' + str.substring(str.length - end);
}