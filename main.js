// // /* class rectangel{
// //     constructor(width,height)
// //     {
// //         this.width=width
// //         this.height=height
// //     }

// //     show()
// //     {
// // console.log("width :"+this.width+" height :"+this.height+"")
// //     }
// // }
// // var obj=new rectangel(20,30)
// // obj.show()

// // class colorrectangel extends rectangel{
// //     constructor(width,height,color)
// //     {
// //         super(width,height)
// //         this.color=color
// //     }

// //     render()
// //     {
        
// //     }
// // } */

// // function sum(...args) {
// //   return args
// //     .filter(function (e) {
// //       return typeof e === "number";
// //     })
// //     .reduce(function (prrv, caurr) {
// //       return prrv + caurr;
// //     });
// // }

// // console.log(sum(1,"a",null,20))

// const user={
//   name:"zoheir",
//   famil:"safari",
//   age:10,
//   paginitage:function(){
//     console.log(this.age)
//   }
// }

// console.log(user)

// for(const key in user)
// {
//   console.log(key +":"+user[key])
// }

// // create object daynmic

// function createCourse(title,student)
// {
//   return {
//     title:title,
//     student:student,
//     studentshow:function(){
//       this.student.forEach(function(student){
// console.log(student)
//       });
//     }
//   }
// }

// const course=console.log(createCourse("zoheir",["ali","mo"]))
window.onload=new function(){
  const pargraoh=document.createElement('p')
  pargraoh.innerText="test"
  document.body.appendChild(pargraoh)
  pargraoh.setAttribute("style","")
  
}
function handel(){
  const gety=document.getElementById('hrt')
  gety.setAttribute('href','httpp://zoheirsfotware.com')
  gety.setAttribute('class','text-center text-danger')
  console.log(gety.getAttribute('href'))
}
function start()
{
  
  window.setTimeout(stop,3000)
}
function stop()
{
  
  location.href="https://www.w3schools.com/js/js_window_location.asp"
}
