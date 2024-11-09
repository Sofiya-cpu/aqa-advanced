const axios = require("axios");

async function fetchInvalidUrl() {
  const response = await axios.get("https://invalid-url.com");
  return response.data;
}

test("Fetch the error", async () => {
  await expect(fetchInvalidUrl()).rejects.toThrow();
});
