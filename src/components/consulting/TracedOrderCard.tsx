export interface TracedRow {
  /** The department the line belongs to: purchasing, production, operations, sales and admin, accounting. */
  department: string;
  /** What the line is: ingredients, prep and cook hours, packaging and delivery… */
  item: string;
  cost: number;
  /** Hours the line takes, where it takes any. */
  hours?: number;
}

export interface SustainabilityRow {
  metric: string;
  /** The figure with its unit, as text: "38.4 kg CO₂e". */
  value: string;
}

export interface TracedOrderExample {
  title: string;
  /** "Illustrative example" until Rob supplies real figures. */
  label: string;
  /** The order or batch being traced, set bold under the title. */
  item: string;
  rows: TracedRow[];
  price: number;
  /** The order's sustainability report: one metric per row, under the money and hours. */
  sustainability?: { title: string; rows: SustainabilityRow[] };
}

const usd = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const hrs = (n: number) => `${n.toFixed(2)} h`;

/**
 * One order traced through every department (brief §6): a real <table> in the ledger look, a row per
 * department with its cost and hours, true cost, true margin and total hours computed at the bottom,
 * and under them the order's sustainability report.
 */
export function TracedOrderCard({ example }: { example: TracedOrderExample }) {
  const { title, label, item, rows, price, sustainability } = example;
  const trueCost = rows.reduce((sum, r) => sum + r.cost, 0);
  const totalHours = rows.reduce((sum, r) => sum + (r.hours ?? 0), 0);
  const margin = price - trueCost;
  const marginPct = (margin / price) * 100;

  return (
    <div className="rounded-tile border border-cream-line bg-white p-7 pb-6 shadow-card-light">
      <table className="figures w-full text-[15px] text-ink">
        <caption className="border-b-2 border-ink pb-3 text-left">
          <span className="flex flex-wrap items-baseline justify-between gap-3">
            <span className="font-serif text-[22px] font-semibold leading-tight">{title}</span>
            <span className="font-label text-[10px] uppercase tracking-[0.24em] text-ink-soft">{label}</span>
          </span>
          <span className="block pt-1.5 text-[15px] font-bold text-ink">{item}</span>
        </caption>
        <thead>
          <tr className="font-label text-[10px] uppercase tracking-[0.24em] text-ink-soft">
            <th scope="col" className="pb-1.5 pt-2.5 text-left font-medium">
              Department
            </th>
            <th scope="col" className="pb-1.5 pt-2.5 text-right font-medium">
              Cost
            </th>
            <th scope="col" className="pb-1.5 pt-2.5 text-right font-medium">
              Hours
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={`${r.department}-${r.item}`} className="border-t border-cream-deep last:border-b last:border-b-ink">
              <th scope="row" className="py-[9px] pr-3 text-left font-normal">
                <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-copper-ink">{r.department}</span>
                <span className="block">{r.item}</span>
              </th>
              <td className="py-[9px] text-right align-bottom">{usd(r.cost)}</td>
              <td className="py-[9px] pl-3 text-right align-bottom text-ink-soft">{r.hours !== undefined ? hrs(r.hours) : '—'}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" className="pb-1 pt-3 text-left font-bold">
              True cost
            </th>
            <td className="pb-1 pt-3 text-right font-bold">{usd(trueCost)}</td>
            <td className="pb-1 pt-3 text-right font-bold text-ink">{hrs(totalHours)}</td>
          </tr>
          <tr className="text-ink-soft">
            <th scope="row" className="py-1 text-left font-normal">
              Price
            </th>
            <td className="py-1 text-right">{usd(price)}</td>
            <td />
          </tr>
          <tr className="border-t border-cream-deep">
            <th scope="row" className="pt-5 text-left align-baseline font-semibold">
              True margin
            </th>
            <td className="pt-5 text-right align-baseline font-serif text-[40px] font-medium leading-none text-tomato" colSpan={2}>
              {marginPct.toFixed(1)}%
              <span className="ml-3 align-baseline font-sans text-[15px] font-semibold text-ink">{usd(margin)}</span>
            </td>
          </tr>
        </tfoot>
      </table>

      {sustainability ? (
        <table className="figures mt-7 w-full text-[15px] text-ink">
          <caption className="border-b-2 border-ink pb-3 text-left font-serif text-[22px] font-semibold leading-tight">{sustainability.title}</caption>
          <tbody>
            {sustainability.rows.map((r) => (
              <tr key={r.metric} className="border-b border-cream-deep last:border-b-0">
                <th scope="row" className="py-[9px] pr-3 text-left font-normal">
                  {r.metric}
                </th>
                <td className="py-[9px] text-right">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
