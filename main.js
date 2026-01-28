///  them  logic
let btnthem = document.querySelector(".toggle-them button");
let main = document.querySelector("main");
let mainbtn  =  document.querySelectorAll('main button')
let body = document.querySelector('body')
/// main calc
let out = document.querySelector(".outbut");
let del = document.querySelector(".del");
let reset = document.querySelector(".reset");
let equal = document.querySelector(".equal");
let btns = document.querySelectorAll("main button");

let indexthem = 1;

if(window.localStorage.getItem('them')){
    indexthem  = window.localStorage.getItem('them')
    console.log(indexthem)
    themms()
}

btnthem.addEventListener("click", function () {
    indexthem++;
themms()

});

function  themms(){
    
    if(indexthem > 3){
        indexthem = 1
    }

    if (indexthem == 1){
        btnthem.style.transform = 'translateX(0px)' 
        main.classList.remove('them3')
        main.classList.remove('them2')
        mainbtn.forEach((e)=>{
            e.classList.remove('them3')
            e.classList.remove('them2')
        })
        out.classList.remove('them2')
        out.classList.remove('them3')
        body.classList.remove('them2')
        body.classList.remove('them3')

        
    }else if(indexthem  == 2){
        btnthem.style.transform = 'translateX(16px)' 
        main.classList.add('them2')
        mainbtn.forEach((e)=>{
            e.classList.add('them2')
        })
        out.classList.add('them2')
        body.classList.add('them2')

    }else if(indexthem  == 3 ){
        btnthem.style.transform = 'translateX(30px)' 
        main.classList.remove('them2')
        main.classList.add('them3')
        mainbtn.forEach((e)=>{
            e.classList.remove('themm2')
            e.classList.add('them3')
        })
        out.classList.remove('them2')
        out.classList.add('them3')
        body.classList.remove('them2')
        body.classList.add('them3')
    }

    window.localStorage.setItem('them',indexthem)

    console.log(indexthem)
}

btns.forEach((e) => {
  e.addEventListener("click", function () {
    if (
      e.textContent !== "del" &&
      e.textContent !== "RESET" &&
      e.textContent !== "="
    ) {
      addToscreen(e);
    } else if (e.textContent == "del") {
      delfromScreen(e);
    } else if (e.textContent == "RESET") {
      clearScreen();
    } else {
      equalToScreen(e);
    }
  });
});
function addToscreen(el) {
  out.textContent = out.textContent + el.textContent;
}
function delfromScreen(e) {
  out.textContent = out.textContent.slice(0, out.textContent.length - 1);
}
function clearScreen() {
  out.textContent = "";
}

function equalToScreen() {
  try {
    const equation = out.textContent;
    const formattedEquation = equation.replace(/x/g, "*");
    const result = new Function(`return ${formattedEquation}`)();

    if (isNaN(result) || result == Infinity) {
      out.textContent = "Error";
      setTimeout(() => {
        out.textContent = "";
      }, 1000);
    } else {
      out.textContent = "";
      out.textContent = result.toLocaleString();
    }
  } catch (error) {
    out.textContent = "Error ";
    setTimeout(() => {
      out.textContent = "";
    }, 1000);
  }
}
