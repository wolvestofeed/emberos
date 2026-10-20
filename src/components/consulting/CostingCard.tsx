export interface CostingExample {
  /** "Plate costing", "Batch costing"… */
  title: string;
  /** "Illustrative example" until Rob supplies real figures. */
  label: string;
  /** The dish or batch the figures describe. */
  item: string;
  rows: { label: string; amount: number }[];
  menuPrice: number;
}

const usd = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * The ledger card (style sheet §6.3): a real <table> with a caption, so screen readers read it as one.
 * Plate cost and food cost are computed from the rows, so the arithmetic on the page is always right.
 */
export function CostingCard({ example }: { example: CostingExample }) {
  const { title, label, item, rows, menuPrice } = example;
  const plateCost = rows.reduce((sum, r) => sum + r.amount, 0);
  const foodCost = (plateCost / menuPrice) * 100;

  return (
    <div className="rounded-tile border border-cream-line bg-white p-7 pb-6 shadow-card-light">
      <table className="figures w-full text-[15px] text-ink">
        <caption className="text-left">
          <span className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink pb-3">
            <span className="font-serif text-[22px] font-semibold leading-tight">{title}</span>
            <span className="font-label text-[10px] uppercase tracking-[0.24em] text-ink-soft">{label}</span>
          </span>
          <span className="block pb-1.5 pt-2.5 text-sm text-ink-soft">{item}</span>
        </caption>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-cream-deep last:border-ink">
              <th scope="row" className="py-[9px] text-left font-normal">
                {r.label}
              </th>
              <td className="py-[9px] text-right">{usd(r.amount)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" className="pb-1 pt-3 text-left font-bold">
              Plate cost
            </th>
            <td className="pb-1 pt-3 text-right font-bold">{usd(plateCost)}</td>
          </tr>
          <tr className="text-ink-soft">
            <th scope="row" className="py-1 text-left font-normal">
              Menu price
            </th>
            <td className="py-1 text-right">{usd(menuPrice)}</td>
          </tr>
          <tr className="border-t border-cream-deep">
            <th scope="row" className="pt-5 text-left align-baseline font-semibold">
              Food cost
            </th>
            <td className="pt-5 text-right align-baseline font-serif text-[40px] font-medium leading-none text-tomato">{foodCost.toFixed(1)}%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
