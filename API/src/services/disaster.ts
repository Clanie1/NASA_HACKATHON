import axios from "axios";

const getDisasterApiData = async () => {
  const headers = {
    "x-api-key":
      "490f6d96e849ddb748007d998a9cd9fc9f0f5e9eea7fef1cb61b59947e13f2b8",
  };

  const response = await axios.get(
    "http://api.ambeedata.com/disasters/latest/by-lat-lng?lat=-15.76166996&lng=-72.48771045489497&limit=1&page=1",
    {
      headers,
    }
  );
  return response.data;
};

export { getDisasterApiData };
