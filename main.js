function kiemtrachanle(){
    let a = Number(document.getElementById("dienso").value)
    let b = a % 2
        if (b == 0){
            document.getElementById("hienketqua").innerText = a + " " + "là số chẵn"
       }else{
            document.getElementById("hienketqua"),innerText = a + "là số lẻ"
        }

}