const axios = require("axios");

async function getData(url, customHeaders, customParams) {
  const response = await axios.get(url, {
    headers: customHeaders,
    params: customParams,
  });
  return response.data;
}

describe("getData", () => {
  it("The case should get data with custom headers and params", async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const customHeaders = {
      Authorization: "Bearer my-token",
      "Content-Type": "application/json",
    };
    const customParams = {
      userId: 1,
    };

    const result = await getData(url, customHeaders, customParams);
  });
});
