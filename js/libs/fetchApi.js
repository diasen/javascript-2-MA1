export async function fetchApi(url) {
  try {
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    return data;
  } catch (error) {}
}
