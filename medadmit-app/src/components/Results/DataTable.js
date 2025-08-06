import React from 'react';

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
  return (
    <div className="table-responsive med-table-noselect">
      <table className="table table-hover table-sm">
        <thead>
          <tr>
            <th>Year</th>
            <th>Round</th>
            <th>College</th>
            <th>Course</th>
            <th>Category</th>
            <th>Rank</th>
            <th>Fees</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? data.slice(0, 100).map((row, i) => (
            <tr key={i}>
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