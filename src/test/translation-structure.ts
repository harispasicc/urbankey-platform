export function collectTranslationPaths(
  value: unknown,
  prefix = "",
): string[] {
  if (typeof value === "string") {
    return prefix ? [prefix] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      collectTranslationPaths(item, `${prefix}[${index}]`),
    );
  }

  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, nested]) => {
      const next = prefix ? `${prefix}.${key}` : key;
      return collectTranslationPaths(nested, next);
    });
  }

  return [];
}
