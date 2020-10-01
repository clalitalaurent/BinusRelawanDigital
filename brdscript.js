function validation(){
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var email = document.getElementById("email").value;
    var nomorhp = document.getElementById("nomorhp").value;
    var socmed = document.getElementById("socmed").value;
    if (nama != "" && alamat != "" && email != "" && nomorhp != "" && socmed != "") {
        return true;
    } else {
        alert("Semua data wajib diisi!")
    }
}