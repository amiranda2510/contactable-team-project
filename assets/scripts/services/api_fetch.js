async function fetchApi(...args) {
  try {
    let response = await fetch(...args);

    if (response.status === 204) return await response.text();

    let data = await response.json();
    if (!response.ok) throw new Error(data.errors);

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { fetchApi };
