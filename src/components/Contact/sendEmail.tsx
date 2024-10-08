import { FormData } from "../ui/Form";

export const sendEmail = (data: FormData) => {
  // TODO: send email

  const apiEndpoint = "/api/mail";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
