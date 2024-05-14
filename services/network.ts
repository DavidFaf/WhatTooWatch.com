const fetchData = async (url: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGM1NGVmMzIwZjU0OGNiYWUzZTRmMTRhMDNiNjQ4YiIsInN1YiI6IjY2M2VmZTRiZThlMjYwODUxYWI1ZDYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eyfu6OCrxhi3tUfrBEhrQSF7eeIGziZWzDOQHt0zQ30",
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

export default fetchData;
