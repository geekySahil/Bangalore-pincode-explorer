function ResultCard({ result }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">{result.area}</h2>
          <p className="mt-1 text-sm text-slate-600">
            {result.district}, {result.state}
          </p>
        </div>
        <span className="w-fit rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">
          {result.pincode}
        </span>
      </div>
    </article>
  );
}

export default ResultCard;
