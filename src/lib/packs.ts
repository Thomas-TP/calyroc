export const PACK_IDS = ["essentiel", "pro", "sur-mesure"] as const;

export type PackId = (typeof PACK_IDS)[number];

export function isPackId(value: string): value is PackId {
  return (PACK_IDS as readonly string[]).includes(value);
}

export const PACK_BASE_PRICE_CHF: Record<PackId, number | null> = {
  essentiel: 590,
  pro: 1490,
  "sur-mesure": null,
};

export const DEPOSIT_PERCENT_OPTIONS = [30, 40, 50] as const;
