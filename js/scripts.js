document.getElementById('lastModified') = document.lastModified;
document.getElementById('date') = new Date().getFullYear;

const url = "https://www.fruityvice.com/api/fruit/all"
// apiFetch function to get JSON information
async function apiFetch() {
  try {
    const response = await fetch(url, {
        mode: 'no-cors', 
        credentials: 'same-origin', 
        headers: {
            'origin': 'https://localhost:8888'},});
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data); // had to uncomment
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
