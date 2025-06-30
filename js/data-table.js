import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function populateDataTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  const querySnapshot = await getDocs(collection(db, "locations"));
  querySnapshot.forEach((doc) => {
    const location = doc.data();
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${location.name}</td>
      <td>${location.inventory}%</td>
      <td>${location.demand.toLocaleString()}</td>
      <td>${location.leadTime}</td>
      <td><span class="${location.status.toLowerCase()}">${location.status}</span></td>
    `;
    tableBody.appendChild(row);
  });
}

export { populateDataTable };