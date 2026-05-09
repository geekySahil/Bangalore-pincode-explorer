function SearchBar({ value, onChange, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit} className="relative">
      <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
        Search by area or pincode
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Try Indiranagar or 560001"
          className="min-h-12 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        />
        <button
          type="submit"
          disabled={disabled}
          className="min-h-12 rounded-lg bg-emerald-700 px-6 font-semibold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
