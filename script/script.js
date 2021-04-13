const tr = document.getElementById('table');
const apiUrl = "https://api.covid19india.org/data.json";

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.statewise.forEach((elem, index) => {
      tr.innerHTML += `
      <th scope="row">${index + 1}</th>
      <td>${data.statewise}</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>10</td>
      `
    });
  })
