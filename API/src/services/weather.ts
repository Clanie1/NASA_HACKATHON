import axios from "axios";

const getWheaterApiData = async (lat: number, lng: number) => {
  const username = "cetys_barocio_daniel";
  const password = process.env.METEOMATICS_API_PASSWORD || "";

  const headers = {
    Authorization:
      "Basic " + Buffer.from(username + ":" + password).toString("base64"),
  };

  try {
    const tokenResponse = await axios.get(
      "https://login.meteomatics.com/api/v1/token",
      { headers }
    );
    const token = tokenResponse.data.access_token;

    const weatherResponse = await axios.get(
      `https://api.meteomatics.com/2024-10-05T00:00:00Z--2024-10-06T00:00:00Z/relative_humidity_2m:p,t_2m:C,precip_1h:mm,sunrise:sql,sunset:sql,effective_cloud_cover:octas/${lat},${lng}/json?access_token=` +
        token
    );

    return weatherResponse.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export { getWheaterApiData };
