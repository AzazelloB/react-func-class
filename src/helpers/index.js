export async function call(url) {
  const response = await fetch(url, {
    method: "GET"
  });

  return response.json();
}
