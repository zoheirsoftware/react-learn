/* class rectangel{
    constructor(width,height)
    {
        this.width=width
        this.height=height
    }

    show()
    {
console.log("width :"+this.width+" height :"+this.height+"")
    }
}
var obj=new rectangel(20,30)
obj.show()

class colorrectangel extends rectangel{
    constructor(width,height,color)
    {
        super(width,height)
        this.color=color
    }

    render()
    {
        
    }
} */

function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prrv, caurr) {
      return prrv + caurr;
    });
}

console.log(sum(1,"a",null,20))