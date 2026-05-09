function Suggestions({ suggestions, onSelect }) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          onClick={() => onSelect(suggestion)}
          className="block w-full px-4 py-3 text-left text-sm text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-800"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}

export default Suggestions;
