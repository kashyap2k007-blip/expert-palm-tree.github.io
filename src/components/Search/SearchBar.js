import React from 'react';
export default function SearchBar({ filters, setFilters }) {
  return (
    <div className="input-group mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search college, course, category..."
        value={filters.q || ''}
        onChange={e => setFilters(f => ({ ...f, q: e.target.value }))}
        aria-label="Search"
      />
      {filters.q && (
        <button className="btn btn-outline-secondary" onClick={() => setFilters(f => ({ ...f, q: '' }))}>Clear</button>
      )}
    </div>
  );
}