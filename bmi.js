let weight = prompt("ส่วนสูง");
let height = prompt("น้ำหนัก");

while(weight < 1){
    weight = prompt("กรอกส่วนสูงใหม่");
}

while(height < 1){
    height = prompt("กรอกน้ำหนักใหม่");
}

let bmi1 = weight / (height * height);
let bmi2 = bmi1.toFixed(1)
let para = document.getElementById("para");
let res;

if(bmi2 < 18.5){
    res = "ผอมเกินไป";
}else if(bmi2 >= 18.5 && bmi2 <= 25.0){
    res = "น้ำหนักปกติ";
}else if(bmi2 >= 25.0 && bmi2 <= 30.0){
    res = "เริ่มอ้วน";
}else if(bmi2 > 30.0 && bmi2 <= 35.0){
    res = "อ้วน";
}else if(bmi2 > 35.0){
    res = "อ้วนมาก";
}

para.innerHTML = "bmi: "+bmi2+" "+res;