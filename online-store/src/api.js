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

  if (response.status === 401) {
    throw new Error("Неверный пароль");
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

export async function getUserAds() {
  const response = await fetch("http://127.0.0.1:8090/ads/me", {
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

export async function createUserAd(title, description, price) {
  const response = await fetch(`http://127.0.0.1:8090/adstext`, {
    method: "POST",
    body: JSON.stringify({
      title: `${title}`,
      description: `${description}`,
      price: `${price}`,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
      "content-type": "application/json",
    },
  });
  if (response.status === 422) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function addUserImages(formData, id) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}/image`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  });
  if (response.status === 422) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function addUserProfilePic(formData) {
  const response = await fetch(`http://127.0.0.1:8090/user/avatar`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  });
  if (response.status === 422) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function updateToken(access_token, refresh_token) {
  const response = await fetch("http://127.0.0.1:8090/auth/login", {
    method: "PUT",
    body: JSON.stringify({
      access_token: `${access_token}`,
      refresh_token: `${refresh_token}`,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });

  if (response.status === 401) {
    throw new Error("Токен устарел");
  } else if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function updateUser(name, surname, city, phone) {
  const response = await fetch(`http://127.0.0.1:8090/user`, {
    method: "PATCH",
    body: JSON.stringify({
      name: `${name}`,
      surname: `${surname}`,
      city: `${city}`,
      phone: `${phone}`,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
      "content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function deleteAd(id) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}`, {
    method: "DELETE",
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

export async function updateAd(id, title, description, price) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: `${title}`,
      description: `${description}`,
      price: `${price}`,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function updatePassword(oldPass, newPass) {
  const response = await fetch(`http://127.0.0.1:8090/user/password`, {
    method: "PUT",
    body: JSON.stringify({
      password_1: `${oldPass}`,
      password_2: `${newPass}`,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
      "content-type": "application/json",
    },
  });

  if (response.status === 400) {
    throw new Error("Неверный пароль");
  }
  const data = await response.json();
  return data;
}

export async function getComments(id) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}/comments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function submitComment(id, comment) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}/comments`, {
    method: "POST",
    body: JSON.stringify({
      text: `${comment}`,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
