import { useEffect } from "react";

function App() {
  useEffect(function () {
    // console.log(import.meta.env);
    (async function () {
      const url = `https://somewebsite.com?apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(url);
      console.log(response);
    })();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
