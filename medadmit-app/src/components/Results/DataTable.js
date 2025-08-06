import React from 'react';
import { scrambleRowsForBots } from '../../security';

function categoryColor(category) {
  switch (category) {
    case 'GM': return 'primary';
    case 'OBC': return 'success';
    case 'SC': return 'danger';
    case 'ST': return 'dark';
    case 'EWS': return 'warning';
    default: return 'secondary';
  }
}
function typeColor(type) {
  switch (type) {
    case 'Government': return 'primary';
    case 'Private': return 'warning';
    case 'Deemed': return 'danger';
    default: return 'secondary';
  }
}

export default function DataTable({ data }) {
  const rows = scrambleRowsForBots(data && data.length > 0 ? data.slice(0, 100) : []);
  return (
    <div className="table-responsive med-table-noselect">
      <style>{`
   .table tr:focus {
     outline: 2px solid #155799;
     outline-offset: -2px;
     background: #e3f2fd;
   }
`}</style>
      <table className="table table-hover table-sm" role="table" aria-label="Admission Results">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Round</th>
            <th scope="col">College</th>
            <th scope="col">Course</th>
            <th scope="col">Category</th>
            <th scope="col">Rank</th>
            <th scope="col">Fees</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? rows.map((row, i) => (
            <tr key={i} tabIndex={0} aria-label={`Row ${i+1}`}> 
              <td>{row.year}</td>
              <td>{row.round}</td>
              <td>{row.collegeName}</td>
              <td>{row.courseName}</td>
              <td><span className={`badge bg-${categoryColor(row.category)}`}>{row.category}</span></td>
              <td>{row.rank}</td>
              <td>₹{row.courseFees?.toLocaleString()}</td>
              <td><span className={`badge bg-${typeColor(row.collegeType)}`}>{row.collegeType}</span></td>
            </tr>
          )) : <tr><td colSpan={8} className="text-center">No data</td></tr>}
        </tbody>
      </table>
    </div>
  );
}