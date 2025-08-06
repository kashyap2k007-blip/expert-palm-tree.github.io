import React, { useState, useEffect } from 'react';
import SearchBar from '../Search/SearchBar';
import Filters from '../Search/Filters';
import DataTable from '../Results/DataTable';
import admissionData2023 from '../../data/admissionData2023.json';

export default function ExploreTab() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState(admissionData2023);

  useEffect(() => {
    let filtered = admissionData2023.filter(rec => {
      // Text search
      if (filters.q) {
        const q = filters.q.toLowerCase();
        if (!(
          rec.collegeName.toLowerCase().includes(q) ||
          rec.courseName.toLowerCase().includes(q) ||
          rec.category.toLowerCase().includes(q)
        )) return false;
      }
      // Specialization
      if (filters.specialization && filters.specialization !== 'All') {
        if (rec.courseName !== filters.specialization) return false;
      }
      // Category
      if (filters.category && filters.category !== 'All') {
        if (rec.category !== filters.category) return false;
      }
      // College type
      if (filters.collegeType && filters.collegeType !== 'All') {
        if (rec.collegeType !== filters.collegeType) return false;
      }
      // Fee range
      if (filters.feeMin && rec.courseFees < Number(filters.feeMin)) return false;
      if (filters.feeMax && rec.courseFees > Number(filters.feeMax)) return false;
      return true;
    });
    setResults(filtered);
  }, [filters]);

  return (
    <div>
      <SearchBar filters={filters} setFilters={setFilters} />
      <Filters filters={filters} setFilters={setFilters} />
      <div className="small mt-2 mb-2">
        {results.length} matching records
      </div>
      <DataTable data={results} />
    </div>
  );
}