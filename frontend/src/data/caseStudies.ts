import operationalCase from "../assets/casestudies/operationalcase.jpg";
import automotiveCase from "../assets/casestudies/automotive.jpg";
import foodCase from "../assets/casestudies/food.jpg";

export type CaseStudy = {
  slug: string;
  image: string;
  category: string;
  client: string;
  title: string;
  description: string;
  date: string;
  intro: string[];
  quote: string;
  quoteName: string;
  quoteRole: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "operational-excellence",
    image: operationalCase,
    category: "Operational Excellence",
    client: "Meridian Industrial Group",
    title: "The Turnaround: Taking a Loss-Making Division to Profitability in One Quarter",
    description:
      "Practical operational improvements designed to strengthen processes, improve accountability, and create sustainable business performance.",
    date: "Mar 30, 2026",
    intro: [
      "The Client - Meridian Industrial Group is a mid-market conglomerate operating across five business units in the manufacturing and distribution sector. Following the acquisition of a regional distribution company, they inherited a logistics division that had been underperforming for three consecutive years.",
      "The Situation - The acquired division had been loss-making at the operating level for 36 months. Annual operating losses were running at $2.2M, with no clear owner for the result and limited visibility into which customer relationships were actually profitable.",
      "The Challenge - The division had real assets, a loyal customer base, established supplier relationships, and a team with deep operational knowledge. But it had been run without financial discipline, with no clear P&L ownership and no visibility into customer-level profitability.",
      "What We Did - We started with a full financial forensics exercise, rebuilding the P&L from the ground up by customer, by route, and by service line. Within 10 days, we identified the loss concentration and separated three underpriced customer contracts from two operational cost centres with no performance accountability.",
      "We renegotiated two of the three contracts, retained both customers while moving to profitable pricing structures, and redesigned operations around clear P&L ownership. The team remained in place, with every change made transparently and with a clear rationale.",
      "The Results - The division reached operating break-even in week 11 and delivered a $400K operating profit the following quarter. Team retention remained 100%, and the new reporting model gave leadership the visibility to make faster, better decisions.",
    ],
    quote:
      "Everyone told us to cut the division loose. We are glad we did not. The forensic clarity we got in the first two weeks changed everything - we finally understood what we had actually bought, and what it could become.",
    quoteName: "James Whitfield",
    quoteRole: "Group CEO, Meridian Industrial Group",
  },
  {
    slug: "precision-automotive",
    image: automotiveCase,
    category: "Automotive Industry",
    client: "Precision Automotive",
    title: "Putting People and Performance in Gear",
    description:
      "A focused people and operations approach helped Precision Automotive build clearer systems, stronger accountability, and room to grow.",
    date: "Feb 12, 2026",
    intro: [
      "The Client - Precision Automotive is a fast-growing vehicle service and parts business with a reputation for technical excellence. Growth had been strong, but the systems and management habits behind that growth had not kept pace.",
      "The Situation - Work was being scheduled through informal conversations, customer updates were inconsistent, and senior technicians were carrying too much responsibility without the tools or authority to lead effectively.",
      "The Challenge - The business did not need more activity. It needed a shared operating rhythm that would protect quality while giving the team the clarity to handle a larger customer base.",
      "What We Did - We mapped the customer journey, clarified roles across the workshop, introduced daily planning huddles, and built a simple dashboard around the measures that mattered most: turnaround time, rework, customer communication, and margin.",
      "We paired every process change with practical coaching for team leads. That made the new system feel owned by the people using it, rather than imposed on them from above.",
      "The Results - Within one quarter, turnaround time improved by 31%, rework fell by 24%, and the leadership team had a repeatable model for opening its next service location.",
    ],
    quote:
      "We did not need a complicated transformation. We needed everyone to see the same picture and know what good looked like. That changed the pace of the whole business.",
    quoteName: "Lerato Mokoena",
    quoteRole: "Managing Director, Precision Automotive",
  },
  {
    slug: "food-4-education",
    image: foodCase,
    category: "Food & Social Impact",
    client: "Food 4 Education",
    title: "Making Nutritious Meals More Accessible",
    description:
      "Strengthening the model behind affordable school meals so more children can access nourishing food at a lower price.",
    date: "Jan 20, 2026",
    intro: [
      "The Client - Food 4 Education works with schools and communities to make nutritious meals accessible to children who need them most. Its impact was growing quickly, but each new programme added operational complexity.",
      "The Situation - Procurement, kitchen planning, and delivery were being managed differently from one location to the next. The result was avoidable waste, uneven reporting, and pressure on the people closest to the work.",
      "The Challenge - The organisation needed to scale responsibly without losing the local knowledge and human connection that made the programme effective.",
      "What We Did - We designed a common operating model for procurement, production, and delivery, then adapted it with local teams. We also introduced a weekly impact dashboard connecting meals served, cost per meal, attendance, and supplier performance.",
      "The new model made trade-offs visible early. Teams could solve problems together, suppliers had clearer expectations, and leadership could direct resources to the schools where they would have the greatest effect.",
      "The Results - Food 4 Education reduced average meal costs by 18%, cut waste by 22%, and expanded the programme to 14 additional schools without adding another management layer.",
    ],
    quote:
      "The work helped us turn a good idea into a stronger system. We can now spend more of every donated rand where it matters most: feeding children well.",
    quoteName: "Amina Hassan",
    quoteRole: "Executive Director, Food 4 Education",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);