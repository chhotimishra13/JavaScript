
const course = {
    coursename: "js series",
    price: 999,
    courseInstructor: "Hitesh sir",
}
// course.courseInstructor
const {courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

//object destructure
// const navbar = ({company}) => {

// }
// navbar(company = "Sunny");


//api
// {
//     "login" : "sunny",
//     "id" : 6888999776665,
//     "price" : "free",
//     "coursename" : "js series",
// }