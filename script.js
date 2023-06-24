//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'The Rolling Stones', 'Nirvana', 'Pink Floyd', 'Queen'];

// Function to compare band names while sorting
function compareBandNames(a, b) {
  // Remove articles from band names for comparison
  const articleRegex = /^(a|an|the)\s+/i;
  const bandNameA = a.replace(articleRegex, '');
  const bandNameB = b.replace(articleRegex, '');

  // Compare the modified band names
  if (bandNameA < bandNameB) {
    return -1;
  }
  if (bandNameA > bandNameB) {
    return 1;
  }
  return 0;
}

// Sort the band names in lexicographic order excluding articles
bandNames.sort(compareBandNames);

// Get the 'band' ul element
const bandList = document.getElementById('band');

// Clear any existing content inside the 'band' ul
bandList.innerHTML = '';

// Add each band name as an 'li' element to the 'band' ul
bandNames.forEach((name) => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});

