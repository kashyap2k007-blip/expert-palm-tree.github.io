import React, { useState, useEffect } from 'react';
import DataTable from '../Results/DataTable';
import admissionData2023 from '../../data/admissionData2023.json';

export default function ExploreTab() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState(admissionData2023);

  useEffect(() => {
    let filtered = admissionData2023.filter(rec => {
      // TODO: apply filter logic
      return true;
    });
    setResults(filtered);
  }, [filters]);

  return (
    <div>
      {/* <SearchBar filters={filters} setFilters={setFilters} /> */}
      {/* <Filters filters={filters} setFilters={setFilters} /> */}
      <div className="small mt-2 mb-2">
        {results.length} matching records
      </div>
      <DataTable data={results} />
    </div>
  );
}