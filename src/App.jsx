import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";



function App() {
  const [data, setData] = useState(null);
  const [loading,  setLoading] = useState(false);
  const NASA_KEY = 'L06M9vGQQC085FLFb4TCViIl1FmDOeS836bciByu';
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchApiData(){
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched Data from cache');

        return;
      }
      localStorage.clear();
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Fetched Data from API');
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchApiData();
  },[]);


  return (
    <>
      {data ? (<Main data={data}/>) :(
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (<SideBar showModal={showModal} data={data} handleToggleModal={handleToggleModal}/>)} 
      {data&& (<Footer showModal={showModal} data={data} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App
