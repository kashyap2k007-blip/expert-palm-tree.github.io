import React from 'react';

const specializations = [
  'All', 'MD General Medicine', 'MS General Surgery', 'MD Pediatrics', 'MD Radiology', 'MS Orthopedics', 'MD Dermatology', 'MD Anesthesia', 'MD Psychiatry', 'MD Pathology', 'Diploma', // ...
];
const categories = ['All', 'GM', 'OBC', 'SC', 'ST', 'EWS'];
const collegeTypes = ['All', 'Government', 'Private', 'Deemed'];

export default function Filters({ filters, setFilters }) {
  return (
    <div className="row g-2 mb-2">
      <div className="col-md-3">
        <select className="form-select" value={filters.specialization || 'All'}
          onChange={e => setFilters(f => ({ ...f, specialization: e.target.value }))}>
          {specializations.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="col-md-2">
        <select className="form-select" value={filters.category || 'All'}
          onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="col-md-2">
        <select className="form-select" value={filters.collegeType || 'All'}
          onChange={e => setFilters(f => ({ ...f, collegeType: e.target.value }))}>
          {collegeTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <span className="me-2">Fees:</span>
        <input type="number" className="form-control form-control-sm w-25 me-1" placeholder="Min" min={0}
          value={filters.feeMin || ''}
          onChange={e => setFilters(f => ({ ...f, feeMin: e.target.value }))} />
        <input type="number" className="form-control form-control-sm w-25 me-1" placeholder="Max" min={0}
          value={filters.feeMax || ''}
          onChange={e => setFilters(f => ({ ...f, feeMax: e.target.value }))} />
        <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => setFilters({})}>Clear Filters</button>
      </div>
    </div>
  );
}