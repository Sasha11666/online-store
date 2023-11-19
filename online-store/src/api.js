export async function getAds() {
  const response = await fetch("http://127.0.0.1:8090/ads");

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getAd(id) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}`);

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function registerUser(
  email,
  password,
  name,
  surname,
  city,
  phone
) {
  const response = await fetch("http://127.0.0.1:8090/auth/register", {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${name}`,
      surname: `${surname}`,
      city: `${city}`,
      phone: `${phone}`,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.status === 422) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function loginUser(email, password) {
  const response = await fetch("http://127.0.0.1:8090/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status === 422) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getUser() {
  const response = await fetch("http://127.0.0.1:8090/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}
