function Rec(w, h) {
  this.height = h;
  this.width = w;
}
Rec.prototype.area = function () {
  return this.height * this.width;
};
Rec.prototype.perimeter = function () {
  return 2 * this.height + 2 * this.width;
};
Rec.prototype.displayInfo = function () {
  return {
    height: this.height,
    width: this.width,
    area: this.area,
    perimeter: this.perimeter,
  };
};
var rec1 = new Rec(5, 3);
var rec2 = new Rec(4, 2);

console.log(rec1);
console.log(rec2);
console.log("Area of rec1:", rec1.area());
console.log("Area of rec2:", rec2.area());
console.log("perimeter of rec1:", rec1.perimeter());
console.log("perimeter of rec2:", rec2.perimeter());
console.log(rec1.displayInfo());

const ul =document.createElement('ul');
const li1 =document.createElement('li');
const li2 =document.createElement('li')
const li3 =document.createElement('li')
const li4 =document.createElement('li')

   document.body.appendChild(ul);
   ul.appendChild(li1);
   ul.appendChild(li2);
   ul.appendChild(li3);
   ul.appendChild(li4);

   li1.innerText = `Rectangle1 height: ${rec1.displayInfo().height}`
   li2.innerText = `Rectangle1 width: ${rec1.displayInfo().width}`
   li3.innerText = `Rectangle1 area: ${rec1.displayInfo().area()}`
   li4.innerText = `Rectangle1 perimeter:${rec1.displayInfo().perimeter()}`

   const ul2 =document.createElement('ul');
   const li12 =document.createElement('li');
   const li22 =document.createElement('li')
   const li32 =document.createElement('li')
   const li42 =document.createElement('li')
   
      document.body.appendChild(ul2);
      ul2.appendChild(li12);
      ul2.appendChild(li22);
      ul2.appendChild(li32);
      ul2.appendChild(li42);
   
      li12.innerText = `Rectangle1 height: ${rec2.displayInfo().height}`
      li22.innerText = `Rectangle1 width: ${rec2.displayInfo().width}`
      li32.innerText = `Rectangle1 area: ${rec2.displayInfo().area()}`
      li42.innerText = `Rectangle1 perimeter:${rec2.displayInfo().perimeter()}`
   
   


