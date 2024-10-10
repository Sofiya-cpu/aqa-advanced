const axios = require("axios");

async function fetchData(url, customHeaders, customParams) {
  const response = await axios.get(url, {
    headers: customHeaders,
    params: customParams,
  });
  return response.data;
}

jest.mock("axios");

describe("fetchData", () => {
  it("should fetch data with custom headers and params", async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const customHeaders = {
      Authorization: "Bearer my-token",
      "Content-Type": "application/json",
    };
    const customParams = {
      userId: 1,
    };

    const mockData = [{ id: 1, title: "Test Post" }];
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchData(url, customHeaders, customParams);

    expect(result).toBeDefined();
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: customHeaders,
      params: customParams,
    });
  });

  it("should handle errors from axios", async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const customHeaders = {
      Authorization: "Bearer my-token",
      "Content-Type": "application/json",
    };
    const customParams = {
      userId: 1,
    };

    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchData(url, customHeaders, customParams)).rejects.toThrow(
      errorMessage
    );
    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: customHeaders,
      params: customParams,
    });
  });
});
