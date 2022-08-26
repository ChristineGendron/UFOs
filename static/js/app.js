// import data from data.js

const tableData = data;

// reference the html table using d3

var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  let date = d3.select("#datetime").property("value");
  // select() selects the first element that matches the selector string (the string in html)
  let filteredData = tableData; //setting default as whole table
  if (date) {
    filteredData = filteredData.filter((row) => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick); // # is another html tag id

// build table when page loads

buildTable(tableData);
