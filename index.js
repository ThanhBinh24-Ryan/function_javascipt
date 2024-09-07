// function diemtb(){
//     let dtb = 
// }

function hocSinh(){
const Toan = document.getElementById("toan").value * 1;
const ly = document.getElementById("ly").value * 1;
const hoa = document.getElementById("hoa").value * 1;
const  diemChuan = document.getElementById("id_DC").value * 1;
const  khuVuc = document.getElementById("uuTienKV").value;
const  doiTuong = document.getElementById("uuTienDT").value * 1;
let KQ;
let kq_KV = 0;
let kq_DT = 0;
let Tong = 0;
let shows;
let Total = 0;
Total = Toan + ly + hoa;
if(khuVuc == "A"){
    kq_KV = 2;
}else if (khuVuc == "B"){
    kq_KV = 1;
}else if(khuVuc == "C"){
    kq_KV = 0.5;
}else if(khuVuc == "X"){
    kq_KV = 0;
}else{
    alert("Nhap KHU VUC SAi")
    return;
}
// --------------------
if(doiTuong == 1){
    kq_DT = 2.5;
}else if (doiTuong == 2){
    kq_DT = 1.5;
}else if(doiTuong == 3){
    kq_DT = 1;
}else if(doiTuong == 0){
    kq_DT = 0;
}else{
    alert("Nhap DOI TUONG SAi")
    return;
}
// -------------------
 Tong = Total + kq_DT + kq_KV;
if(Tong < diemChuan){
    KQ = "RỚT";
}else{
    KQ = "ĐẬU";
}
shows = "Tổng điểm là :"+ Tong +". Kết quả =" + KQ;
let show_KQ = document.getElementById("showDiem");
show_KQ.innerHTML = shows;
show_KQ.style.backgroundColor = "pink";



}
function TienDien(){
    const Name = document.getElementById("hoTen").value;
    const number = document.getElementById("Dien").value * 1;
    let price1 =0;
    let price2 =0;
    let price3 =0;
    let price4 =0;
    let result = 0;
    let showThongTin;
    if(number <= 50){
       result = number *500;

    }else if(number > 50 && number <= 100){
        price1 = 50 * 500;
        result = price1 + ((number -50) * 650);
    }else if ( number > 100 && number <= 200){
        price1 = 50 * 500;
        price2 = 50 * 650;
        price3 = (number - 100) * 850;
        result = price1 + price2 + price3;
    }else if (number > 200 && number <= 350){
        price1 = 50 * 500;
        price2 = 50 * 650;
        price3 = 100 * 850;
        price4 = (number - 200) * 1100;
        result = price1 + price2 + price3 + price4;
    }else if (number > 350){
        price1 = 50 * 500;
        price2 = 50 * 650;
        price3 = 100 * 850;
        price4 = 150 * 1100;
        result = price1 + price2 + price3 + price4 + ((number - 350)* 1300);
    }
    showThongTin = "Tên:" + Name + ". Số tiền Điện phải trả là:"+ result;
    let showTienDien = document.getElementById("showTienDien");
    showTienDien.innerHTML = showThongTin;
    showTienDien.style.backgroundColor = "pink";
}
function thueCaNhan(){
    const Name = document.getElementById("HoTen").value;
    const thuNhap = document.getElementById("thuNhap").value *1 ;
    const soNguoi = document.getElementById("soNguoi").value *1;
    let Thue = 0;
    let chiuThue = 0;
    let hienThi;
    Thue = thuNhap - 4 - (soNguoi * 1.6);
    if(Thue <= 60){
        chiuThue = Thue * 0.05;
    } else if (Thue > 60 && Thue <= 120){
        chiuThue = Thue * 0.1;
    }else if ( Thue > 120 && Thue <= 210){
        chiuThue = Thue * 1.5;
    }else if (Thue > 210 && Thue <= 384){
        chiuThue = Thue * 2;
    }else if ( Thue > 384 && Thue <= 624){
        chiuThue = Thue * 2.5;
    }else if(Thue > 624 && Thue <= 960){
        chiuThue = Thue * 3
    }else if( Thue > 960){
        chiuThue = Thue * 3.5;
    }
    hienThi = "Họ và Tên:"+ Name +". Số tiền thuế phải trả theo quy định là: "+ chiuThue + "Triệu";
    let showTienThue = document.getElementById("showThuNhap");
    showTienThue.innerHTML = hienThi;
    showTienThue.style.backgroundColor = "pink";
}
let loaiKhachHang = '';

function chonNhaDan() {
    loaiKhachHang = 'nhaDan';
    document.getElementById("ketNoiField").style.display = "none"; 
}

function chonDoanhNghiep() {
    loaiKhachHang = 'doanhNghiep';
    document.getElementById("ketNoiField").style.display = "block";
}

function tinhHoaDon() {
    const maKh = document.getElementById("maKh").value;
    const soKenh = document.getElementById("soKenh").value * 1; 
    const soKetNoi = document.getElementById("soKetNoi").value * 1 || 0; 
    let hoaDon = 0;

    if (loaiKhachHang === 'nhaDan') {
  
        const phiXuLy = 4.5;
        const phiDichVu = 20.5;
        const phiKenhCaoCap = soKenh * 7.5;
        hoaDon = phiXuLy + phiDichVu + phiKenhCaoCap;

    } else if (loaiKhachHang === 'doanhNghiep') {
        
        const phiXuLy = 15;
        let phiDichVu = 75;
        if (soKetNoi > 10) {
            phiDichVu += (soKetNoi - 10) * 5; 
        }
        const phiKenhCaoCap = soKenh * 50;
        hoaDon = phiXuLy + phiDichVu + phiKenhCaoCap;
    } else {
        alert("Vui lòng chọn loại khách hàng!");
        return;
    }


    document.getElementById("ketQua").innerHTML = `Mã khách hàng: ${maKh}<br> Tổng số tiền cần thanh toán: ${hoaDon} $`;
}
