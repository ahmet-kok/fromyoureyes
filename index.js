
console.log("lets start");
let fye = false;
let btn = document.getElementById("fromyoureyesapp")
let nodeList = document.querySelectorAll(".desc");
let aproductList = document.querySelectorAll(".product-list-item");
let aproducts = Array.from(aproductList);
let elements = Array.from(nodeList);

aproducts.forEach((aproduct) => {
    console.log(aproduct);
});

elements.forEach((element) => {
    element.style.setProperty('--fye', 'none');
  });
function fromyoureyes() {
    console.log(fye);
    if(fye == false) {
        fye = true;
        btn.style.backgroundColor= "rgb(224	177	62)";
        elements.forEach((element) => {
            element.style.setProperty('--fye', 'block');
          });
    }
    else {
        fye = false;
        btn.style.backgroundColor= "antiquewhite";
        elements.forEach((element) => {
            element.style.setProperty('--fye', 'none');
          });

    }
}