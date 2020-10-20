function kiemtrachanle(){
    let a = Number(document.getElementById("dienso").value)
    let b = a % 2
        if (b == 0){
            window.alert( a + " " + "là số chẵn" )
            //document.write( a + " " + "là số chẵn")
            //document.getElementById("hienketqua").innerText = a + " " + "là số chẵn"
       }else{
            window.alert( a + " " + "là số lẻ" )
        //document.write(a + " " + "là số lẻ")
            //document.getElementById("hienketqua"),innerText = a + " " + "là số lẻ"
        }

}