
import clientJourney from "../data/clinic/client-journey.json" with { type: "json" };
import aboutUs from "../data/clinic/about-the-practice.json" with { type: "json" };
import investment from "../data/clinic/investment-inclusions.json" with { type: "json" };
import medicalTeam from "../data/clinic/medical-team.json" with { type: "json" };

export const clinic = [clientJourney, aboutUs, investment, medicalTeam]
  .sort(c => c.order).map(c =>
  ({...c, slug: c.title.replaceAll(" ", "-").toLowerCase().replace(/[^a-z0-9]/g, "")}));