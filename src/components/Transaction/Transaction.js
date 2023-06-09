// import DataTable from "react-data-table-component"
// import {useState, useEffect} from 'react'

export const Transaction = ({transactions
})=> {
  return (
<>
<table>
<thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{
  transactions.map( transaction => (
<tr>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
    </tr>
  )
  )
}
</tbody>
</table>
  </>
  )}


