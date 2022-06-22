console.log("Hi!!!!")

const Input= document.getElementById("input");
const Result= document.getElementById("result");
const inputType= document.getElementById("inputType");
const resultType= document.getElementById("resultType");
let resultTypeValue,inputTypeValue;

inputTypeValue = inputType.value
resultTypeValue = resultType.value

Input.addEventListener('keyup', myFunction);
inputType.addEventListener('change', myFunction);
resultType.addEventListener('change', myFunction);

function myFunction(){
    inputTypeValue = inputType.value
resultTypeValue = resultType.value
    
if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
    Result.value = Number(Input.value) * 0.001;
}
else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
    Result.value = Number(Input.value)*100;
}
else if(inputTypeValue === "meter" && resultTypeValue === "milimeter"){
    Result.value = Number(Input.value) * 1000
}
else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
    Result.value = Input.value;
}
else if(inputTypeValue === "meter" && resultTypeValue === "inches"){
    Result.value = Number(Input.value) * 39.3700787
}
else if(inputTypeValue === "inches" && resultTypeValue === "meter"){
    Result.value = Number(Input.value) / 39.3700787
}
else if(inputTypeValue === "inches" && resultTypeValue === "kilometer"){
    Result.value = Number(Input.value) /  39370.0787
}
else if(inputTypeValue ==="inches" && resultTypeValue === "centimeter"){
    Result.value = Number(Input.value) * 2.54
}
else if(inputTypeValue ==="inches" && resultTypeValue==="milimeter"){
    Result.value= Number(Input.value) * 25.4
}
else if(inputTypeValue === "kilometer" && resultTypeValue === "inches"){
    Result.value = Number(Input.value) *  39370.0787
}
else if(inputTypeValue ==="centimeter" && resultTypeValue === "inches"){
    Result.value = Number(Input.value) / 2.54
}
else if(inputTypeValue ==="milimeter" && resultTypeValue==="inches"){
    Result.value= Number(Input.value) / 25.4
}
else if(inputTypeValue === "inches" && resultTypeValue === "inches"){
    Result.value= Number(Input.value)
}
else if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
    Result.value = Number(Input.value) * 1000;
}
else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
    Result.value = Number(Input.value) / 100;
}
else if(inputTypeValue === "milimeter" && resultTypeValue === "meter"){
    Result.value = Number(Input.value) / 1000
}
else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
    Result.value = Input.value;
}
else if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
    Result.value = Number(Input.value) / 100000;
}
else if(inputTypeValue === "centimeter" && resultTypeValue === "milimeter"){
    Result.value = Number(Input.value) * 10;
}
else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
    Result.value = Number(Input.value) / 100;
}
else if(inputTypeValue === "meter" && resultTypeValue === "foot"){
    Result.value = Number(Input.value) * 3.2808399
}
else if(inputTypeValue === "foot" && resultTypeValue === "meter"){
    Result.value = Number(Input.value) / 3.2808399
}
else if(inputTypeValue === "foot" && resultTypeValue ==="centimeter"){
    Result.value= Number(Input.value) * 30.48
}
else if(inputTypeValue === "foot" && resultTypeValue === "milimeter"){
    Result.value = Number(Input.value) * 304.8
}
else if(inputTypeValue === "foot" && resultTypeValue === "kilometer"){
    Result.value = Number(Input.value) / 3280.8399
}
else if(inputTypeValue === "foot" && resultTypeValue === "inches"){
    Result.value = Number(Input.value) * 12
}
else if(inputTypeValue === "foot" && resultTypeValue === "foot"){
    Result.value = Number(Input.value)
}
else if(inputTypeValue === "liter" && resultTypeValue === "mililiter"){
    Result.value = Number(Input.value) * 1000
}
else if(inputTypeValue === "liter" && resultTypeValue === "centiliter"){
    Result.value = Number(Input.value) * 100
}
else if(inputTypeValue === "liter" && resultTypeValue === "usounce"){
    Result.value = Number(Input.value) * 33.8140227
}
else if(inputTypeValue === "liter" && resultTypeValue === "ukounce"){
    Result.value = Number(Input.value) * 35.1950642
}
else if(inputTypeValue === "liter" && resultTypeValue === "liter"){
    Result.value = Number(Input.value)
}
else if(inputTypeValue === "ukounce" && resultTypeValue === "liter"){
    Result.value = Number(Input.value) / 35.1950642
}
else if(inputTypeValue === "usounce" && resultTypeValue === "liter"){
    Result.value = Number(Input.value) / 33.8140227
}
else if(inputTypeValue === "centiliter" && resultTypeValue === "liter"){
    Result.value = Number(Input.value) / 100
}
else if(inputTypeValue === "mililiter" && resultTypeValue === "liter"){
    Result.value = Number(Input.value) / 1000
}
else if(inputTypeValue === "usounce" && resultTypeValue === "usounce"){
    Result.value = Number(Input.value) 
}
else if(inputTypeValue === "usounce" && resultTypeValue === "mililiter"){
    Result.value = Number(Input.value) * 29.5735295
}
else if(inputTypeValue === "usounce" && resultTypeValue === "centiliter"){
    Result.value = Number(Input.value) * 2.95735295
}
else if(inputTypeValue === "ukounce" && resultTypeValue === "ukounce"){
    Result.value = Number(Input.value)
}
else if(inputTypeValue === "ukounce" && resultTypeValue === "centiliter"){
    Result.value = Number(Input.value) * 2.84
}
else if(inputTypeValue === "usounce" && resultTypeValue === "ukounce"){
    Result.value = Number(Input.value) * 1.04084227
}
else if(inputTypeValue === "ukounce" && resultTypeValue === "usounce"){
    Result.value = Number(Input.value) * 0.96075994
}
else if(inputTypeValue === "centiliter" && resultTypeValue === "centiliter"){
    Result.value = Number(Input.value) 
}
else if(inputTypeValue === "mililiter" && resultTypeValue === "mililiter"){
    Result.value = Number(Input.value)
}
else if(inputTypeValue === "gram" && resultTypeValue === "gram"){
    Result.value = Number(Input.value)
}
else if(inputTypeValue === "gram" && resultTypeValue === "kilogram"){
    Result.value = Number(Input.value) / 1000
}
else if(inputTypeValue === "gram" && resultTypeValue === "pound"){
    Result.value = Number(Input.value) / 453.59237
}
else if(inputTypeValue === "pound" && resultTypeValue === "gram"){
    Result.value = Number(Input.value) * 453.59237
}
else if(inputTypeValue === "kilogram" && resultTypeValue === "gram"){
    Result.value = Number(Input.value) * 1000
}
else if(inputTypeValue === "kilogram" && resultTypeValue === "pound"){
    Result.value = Number(Input.value) * 2.20462262
}
else if(inputTypeValue === "pound" && resultTypeValue === "kilogram"){
    Result.value = Number(Input.value) / 2.20462262
}
else if(inputTypeValue === "kilogram" && resultTypeValue === "kilogram"){
    Result.value = Number(Input.value)
}
else if(inputTypeValue === "pound" && resultTypeValue === "pound"){
    Result.value = Number(Input.value)
}
}
