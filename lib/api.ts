export async function fetchCompanies(params: any) {
  const response = await fetch("http://103.129.115.165:5002/api/companies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response.json();
}

export async function fetchFilters() {
  const response = await fetch("http://103.129.115.165:5002/api/filters");
  return response.json();
}
