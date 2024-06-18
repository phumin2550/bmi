bmi = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    let para = document.getElementById("para");

    if(weight < 1 || height < 1){
        para.innerHTML = "กรุณากรอกข้อมูลให้ถูกต้อง";
    }else{
        const bmi1 = weight / (height * height);
        const bmi2 = bmi1.toFixed(1);
        
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
    }
}