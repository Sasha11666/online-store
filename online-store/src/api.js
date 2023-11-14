export async function getAds() {
  const response = await fetch("http://127.0.0.1:8090/ads");

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
