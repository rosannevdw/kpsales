
import mentalHealth from "../data/pillars/mental-health.json" with { type: "json" };
import internalMedicine from "../data/pillars/internal-medicine.json" with { type: "json" };
import bioR from "../data/pillars/bioRmethod.json" with { type: "json" };
import hospitality from "../data/pillars/hospitality.json" with { type: "json" };

export const pillars = [mentalHealth, internalMedicine, bioR, hospitality]
  .sort(p => p.order).map(p =>
  ({...p, slug: p.title.replaceAll(" ", "-").toLowerCase().replace(/[^a-z0-9]/g, "")}));