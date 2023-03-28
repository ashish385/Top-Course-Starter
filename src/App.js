import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";
import {apiUrl,filterData} from "./data"

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
      try {
        let response = await fetch(apiUrl);
        let output = await response.json();

        setCourses(output.data);
      } catch (error) {
        toast.error("Network Error");
    }
    
    setLoading(false)
    }

  useEffect(() => {
    fetchData();
  },[])
  
  

  return (
    <div className="min-h-screen bg-bgDark2 rounded-md bg-opacity-90  flex flex-col mx-auto" >
      <div>
        <Navbar />
      </div>
      <div >

      <div >
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1300px] mx-auto  min-h-[50vh]">
        {loading ? (
        <Spinner />
        ) : (
        <Cards courses={courses} category={category} />
        )}
      </div>
      </div> 
    </div>
  )
};

export default App;
