const axios = require("axios");
// const jest = require("jest");

const instance = axios.create({
  baseURL: "https://api.restful-api.dev",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

describe("First API tests at restful-api", () => {
  // Test #1
  it("Get a list of all objects", async () => {
    try {
      const response = await instance.get("/objects");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    } catch (error) {
      console.error("Error getting all objects:", error);
      throw new Error("Error getting all objects.");
    }
  });

  // Test#2
  it("Get a list of articular objects", async () => {
    try {
      const response = await instance.get("/objects?id=3&id=5&id=10");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    } catch (error) {
      console.error("Particlar objects error: ", error);
      throw new Error("Error getting particular objects.");
    }
  });

  // Test #3
  it("Get a single object", async () => {
    try {
      const response = await instance.get("/objects/7");
      expect(response.status).toBe(200);
      expect(typeof response.data === "object").toBe(true);
    } catch (error) {
      console.error("Particlar single object error: ", error);
      throw new Error("Error getting single object.");
    }
  });

  // Test #4
  it("Add own object", async () => {
    const myData = {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    };

    try {
      const response = await instance.post("/objects", myData);

      expect(response.status).toBe(200);

      expect(response.data).toHaveProperty("id");
      expect(response.data).toHaveProperty("name", "Apple MacBook Pro 16");
      expect(response.data).toHaveProperty("data");
      expect(response.data.data).toHaveProperty("year", 2019);
      expect(response.data.data).toHaveProperty("price", 1849.99);
      expect(response.data.data).toHaveProperty("CPU model", "Intel Core i9");
      expect(response.data.data).toHaveProperty("Hard disk size", "1 TB");
      expect(response.data).toHaveProperty("createdAt");

      expect(typeof response.data).toBe("object");
    } catch (error) {
      console.error("Error on POST: ", error);
      throw new Error("Error on POST.");
    }
  });
  // Test #5
  it("Get non-existent id", async () => {
    try {
      const response = await instance.get("/objects/77778900");
      throw new Error("Unexpected error");
    } catch (error) {
      if (error.response) {
        expect(error.response.status).toBe(404);
      } else {
        console.error("Unexpected error:", error);
        throw new Error("Unexpected error.");
      }
    }
  });
});
