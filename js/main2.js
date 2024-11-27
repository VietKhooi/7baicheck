// Bai 1: checkAge
function checkAge(){
    if(age >= 18)
        console.log("Nguoi lon");
    else console.log("Vi thanh thien");
}
checkAge(age=4);

// B2: checkEven0dd

function checkEven0dd(){
    if(so % 2 == 0){
        console.log("Chan");
    }else{
        console.log("Le");
    }
}
checkEven0dd(so=7);

//B3: compareNumber
function compareNumber(){
    if(sothunhat > sothuhai){
        console.log("So thu nhat lon hon")
    }else if(sothunhat < sothuhai){
        console.log("So thu hai lon hon")
    }else{
        console.log("Hai so bang nhau")
    }
}
compareNumber(sothunhat = 10, sothuhai = 10);

//B4: checkInterger
function checkInterger(so){
    let gan=1; //gan=1 la so nguyen
        gan = 0;
    if(Math.ceil(so) != Math.floor(so)){        //ceil: lam tron len -------- floor: lam tron xuong
        console.log("Khong phai so nguyen")
    }else{
        console.log("La so nguyen")
    }
}
checkInterger(so = 10);


//B5: convertNumberToMonth
function convertNumberToMonth(){
    let max=12;
    let thang =[
        "thang 1","thang 2","thang 3","thang 4","thang 5","thang 6","thang 7","thang 8","thang 9","thang 10","thang 11","thang 12"
    ];
    if(so < 1 || so > max){
        console.log("Khong dung...!")
    }else{
        console.log(thang[so - 1])
    }
}
convertNumberToMonth(so = 5);

//B6: calculateShipping
function calculateShipping(n){
    if(n < 0){
        console.log("SAI!!!")
    }
    let phicodinh= 7000;
    let phimoikmtieptheo=2000;

    if(n <= 5){
        console.log("Phi 5km dau = ", phicodinh)
    }else{
        let khoangcachvuot5km= n -5;
        console.log("Phi khi vuot qua 5km =", phicodinh + (khoangcachvuot5km * phimoikmtieptheo))
    }
}
calculateShipping(n = 7);

//B7: gradeExam
function gradeExam(diem){
    if(diem < 0 || diem > 100){
        console.log("Diem khong hop le!!!")
    }
    if(diem >= 90){
        console.log("Xuat sac")
    }else if(diem >= 80){
        console.log("Gioi")
    }else if(diem >= 70){
        console.log("Kha")
    }else if(diem >= 60){
        console.log("Trung binh")
    }else{
        console.log("Yeu")
    }
}
gradeExam(diem = 100);