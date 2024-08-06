async function fetchCategoryList() {
  const url = "http://localhost:8000/recipes/category-lis";
  // "https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/recipes/category-list"; // Zamień na rzeczywisty URL end-pointu
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjFkOTgxZTEwNjA3YjQ3MGFmYjBiMiIsImVtYWlsIjoibGlzQGdtYWlsLmNvbSIsImlhdCI6MTcyMjkzMjA3MywiZXhwIjoxNzIzMDQwMDczfQ.kfWEvuw7eJabtVd0kn7ZvjzQvAPh0UGPcJqi8Y9yVTE";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if (!response.ok) {
    //   throw new Error("Network response was not ok " + response.statusText);
    // }
    const data = await response.json();
    console.log(data); // Przetwarzanie danych
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

async function sendData() {
  const url =
    "https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/auth/register/"; // Zamień na rzeczywisty URL end-pointu

  const bodyData = {
    name: "Ted",
    email: "lis@gmail.com",
    password: "123456",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    console.log(data); // Przetwarzanie odpowiedzi z serwera
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

console.log(fetchCategoryList());
