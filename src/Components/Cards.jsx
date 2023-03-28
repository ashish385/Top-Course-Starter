import React, { useState } from 'react'
import Card from "./Card"

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  console.log("printing data", courses);
  
  const getCourses = () => {
    if (category === "All") {
      
      let allCourses = [];
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
            
              allCourses.push(courseData)
            
          })
        })
        console.log(allCourses);
        return allCourses;
    } else {
      return courses[category];
    }
  }
  return (
    <div className=" flex flex-wrap justify-center gap-4 mx-auto">
      {getCourses().map((couseData) => {
        return (
          <Card
            key={couseData.id}
            courseData={couseData}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}

export default Cards