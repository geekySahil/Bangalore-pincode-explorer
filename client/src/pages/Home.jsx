import { useEffect, useMemo, useState } from 'react';
import API from '../services/api';
import Loader from '../components/Loader';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Suggestions from '../components/Suggestions';

function Home() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('Start with an area name or a six-digit pincode.');
  const [loading, setLoading] = useState(false);

  const isNumericSearch = useMemo(() => /^\d+$/.test(query.trim()), [query]);

  useEffect(() => {
    const searchText = query.trim();

    if (searchText.length < 2 || isNumericSearch) {
      setSuggestions([]);
      return;
    }

    const timeoutId = window.setTimeout(async () => {
      try {
        const response = await API.get('/suggest', {
          params: { q: searchText }
        });
        setSuggestions(response.data);
      } catch (error) {
        setSuggestions([]);
      }
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [query, isNumericSearch]);

  const runSearch = async (searchValue = query) => {
    const searchText = searchValue.trim();

    if (!searchText) {
      setResults([]);
      setMessage('Enter an area name or pincode to search.');
      return;
    }

    setLoading(true);
    setSuggestions([]);
    setMessage('');

    try {
      const endpoint = /^\d+$/.test(searchText)
        ? `/pincode/${searchText}`
        : `/area/${encodeURIComponent(searchText)}`;
      const response = await API.get(endpoint);
      const nextResults = Array.isArray(response.data) ? response.data : [response.data];

      setResults(nextResults);
      setMessage(nextResults.length === 0 ? 'No results found' : '');
    } catch (error) {
      setResults([]);
      setMessage(error.response?.data?.message || 'No results found');
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    setQuery(suggestion);
    runSearch(suggestion);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-emerald-700">Bangalore local search</p>
          <h2 className="mt-2 text-2xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Find areas and pincodes quickly
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Search the prototype JSON dataset by typing a Bangalore area name or a pincode.
          </p>
        </div>

        <div className="relative mt-7">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={(event) => {
              event.preventDefault();
              runSearch();
            }}
            disabled={loading}
          />
          <Suggestions suggestions={suggestions} onSelect={handleSuggestionSelect} />
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-950">Results</h2>
          {results.length > 0 && (
            <span className="text-sm text-slate-500">
              {results.length} match{results.length === 1 ? '' : 'es'}
            </span>
          )}
        </div>

        {loading ? (
          <Loader />
        ) : results.length > 0 ? (
          <div className="grid gap-4">
            {results.map((result) => (
              <ResultCard key={`${result.area}-${result.pincode}`} result={result} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-slate-600">
            {message}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
