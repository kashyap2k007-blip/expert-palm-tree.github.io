import React from 'react';
export default function SeatMatrixTable({ matrix }) {
  return (
    <table className="table table-bordered mt-2 small">
      <thead>
        <tr>
          <th>Course</th>
          <th>GM</th><th>OBC</th><th>SC</th><th>ST</th><th>EWS</th><th>Mgmt</th><th>NRI</th>
        </tr>
      </thead>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            <td>{row.course}</td>
            <td>{row.GM}</td>
            <td>{row.OBC}</td>
            <td>{row.SC}</td>
            <td>{row.ST}</td>
            <td>{row.EWS}</td>
            <td>{row.Mgmt}</td>
            <td>{row.NRI}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}