// src/lib/utils.ts
type ClassValue = string | Record<string, boolean> | undefined | null;

export function cn(...classes: ClassValue[]) {
  return classes
    .flatMap(c => {
      if (typeof c === "string") return [c];
      if (typeof c === "object" && c !== null) {
        return Object.entries(c)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
