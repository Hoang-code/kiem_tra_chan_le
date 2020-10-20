function kiemtrachanle(){
    let a = Number(document.getElementById("dienso").value)
    let b = a % 2
        if (b == 0){
            document.write( a + " " + "là số chẵn")
            //document.getElementById("hienketqua").innerText = a + " " + "là số chẵn"
       }else{
            document.write(a + " " + "là số lẻ")
            //document.getElementById("hienketqua"),innerText = a + " " + "là số lẻ"
        }

}