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
  /** The figure with its unit, as text: "144 kg CO₂e". */
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
  /** The order's sustainability report: one metric per row, beside the money and hours. */
  sustainability?: { title: string; rows: SustainabilityRow[] };
}

const usd = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const hrs = (n: number) => `${n.toFixed(2)} h`;

const SUBTITLE = 'font-label text-[10px] uppercase tracking-[0.24em] text-ink-soft';

/**
 * One order traced through every department: one card, one title, and under it two ledgers side by
 * side (stacked under about 640 px): the costing on the left, with true cost, true margin and total
 * hours computed from the rows, and the order's sustainability report on the right.
 */
export function TracedOrderCard({ example }: { example: TracedOrderExample }) {
  const { title, label, item, rows, price, sustainability } = example;
  const trueCost = rows.reduce((sum, r) => sum + r.cost, 0);
  const totalHours = rows.reduce((sum, r) => sum + (r.hours ?? 0), 0);
  const margin = price - trueCost;
  const marginPct = (margin / price) * 100;

  return (
    <div className="rounded-tile border border-cream-line bg-white p-7 pb-6 shadow-card-light">
      <div className="border-b-2 border-ink pb-3">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-serif text-[22px] font-semibold leading-tight text-ink">{title}</h3>
          <span className={SUBTITLE}>{label}</span>
        </div>
        <p className="pt-1.5 text-[15px] font-bold text-ink">{item}</p>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-6">
        <table className="figures w-full min-w-0 flex-[1_1_300px] self-start text-[15px] text-ink">
          <caption className="sr-only">
            {item}: cost and hours by department
          </caption>
          <thead>
            <tr className={SUBTITLE}>
              <th scope="col" className="w-full pb-1.5 pt-3 text-left font-medium">
                Department
              </th>
              <th scope="col" className="pb-1.5 pt-3 text-right font-medium">
                Cost
              </th>
              <th scope="col" className="pb-1.5 pt-3 text-right font-medium">
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.department}-${r.item}`} className="border-t border-cream-deep last:border-b last:border-b-ink">
                <th scope="row" className="py-2 pr-3 text-left font-normal">
                  <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-copper-ink">{r.department}</span>
                  <span className="block">{r.item}</span>
                </th>
                <td className="whitespace-nowrap py-2 text-right align-bottom">{usd(r.cost)}</td>
                <td className="whitespace-nowrap py-2 pl-3 text-right align-bottom text-ink-soft">{r.hours !== undefined ? hrs(r.hours) : '—'}</td>
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
              <th scope="row" colSpan={3} className="pt-4 text-left font-semibold">
                <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span>True margin</span>
                  <span className="font-serif text-[36px] font-medium leading-none text-tomato">
                    {marginPct.toFixed(1)}%
                    <span className="ml-3 align-baseline font-sans text-[15px] font-semibold text-ink">{usd(margin)}</span>
                  </span>
                </span>
              </th>
            </tr>
          </tfoot>
        </table>

        {sustainability ? (
          <table className="figures w-full min-w-0 flex-[1_1_200px] self-start text-[15px] text-ink">
            <caption className="pb-1.5 pt-3 text-left font-serif text-[17px] font-semibold leading-tight text-ink">{sustainability.title}</caption>
            <tbody>
              {sustainability.rows.map((r) => (
                <tr key={r.metric} className="border-t border-cream-deep last:border-b last:border-b-ink">
                  <th scope="row" className="w-full py-2 pr-3 text-left font-normal">
                    {r.metric}
                  </th>
                  <td className="whitespace-nowrap py-2 text-right">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
