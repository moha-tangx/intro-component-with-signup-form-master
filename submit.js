export default async function (user) {
  const { firstName, lastName, email, password } = user;
  const bodyContent = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
  });

  return await fetch("http://localhost:1739/intro_compo_sign_up/sign-up", {
    method: "POST",
    body: bodyContent,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
}
