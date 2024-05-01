//Default value parameter
//langsung contoh saja
// function sapaDunia (A ='Hello',B='World') {
//     return `${A} ${B}`
// }
// console.log(sapaDunia('Bagus'))

//Mengubah array atau objek menjadi deret fungsi argumen nilai
//spread operator pada function
//spread:mengibah suatu array atau object atau bahkan string menjadi deret parameter
//untuk function
//contoh
// const angka = [1,2,3,4,5]
// console.log(Math.max(angka))//ini bakal NaN
// console.log(Math.max(...angka))//ini benar


//Menggabungkan nilai array dengan array lagi
//operator spread itu (...)
//manfaat spread operator itu adalah kita tidak merusak data originalnya
// const angka = [1,2,3,4,5,6]
// const daftarNama = ['Bagus','Sadewo']
// const campuranData = [...angka,...daftarNama]
// console.log(campuranData)

//Mengabungkan objek properti dengan objek lainnya
// const user = {
//     nama: 'Bagus',
//     npm:10122268
// }

// const kelas = {
//     roomClass: '2KA15',
//     teacher: 'Sasuke'
// }
// const dataCampur = {...user,...kelas}
// console.log(dataCampur)

//rest param
//males ketik paramater yg panjang?pake aja spread operator
// const sumAll = (...nums) => {
//     return nums.reduce((total,el) => total + el) ;
// };
// console.log(sumAll(1, 2, 3, 4, 5,6));

// const nama = ['Kimazuki','Namikaze','Kazekage'];
// const anonymPlayer = ['Chiro','Refik','Lionel']
// const pemenang = (gold,silver,broze,...sisa) => {
//     console.log(`Medali emas dimenangkan oleh ${gold}`);
//     console.log(`Medali silver dimenangkan oleh ${silver}`);
//     console.log(`Medali bronze dimenangkan oleh ${broze}`);
//     console.log(`Peserta yang mengikuti lomba:${sisa}`);
// }

// console.log(pemenang(...nama,...anonymPlayer))

//Bongkar element array ke masing-masing variabel dengan mudah
//Destructing:unboxing versi array dan object.
    // const nama = ['Kimazuki','Namikaze','Kazekage','Chiro','Refik','Lionel'];
    // const pemenang = [gold,silver,broze]=nama
    // console.log(gold)

    //Destructing ke objek sekarang
//     const kelas = {
//     roomClass: '2KA15',
//     teacher: 'Sasuke'
// }

// const {roomClass:namaKelas,teacher,phone ='09898'} = kelas;
// console.log(phone)
// biasanya kalo mau cetak objek kita seperti ini:
// console.log(kelas.roomClass)

//Objek bongkar properti bisa dilakukan dalan fungsi
//unboxing bisa dipake buat parameter dakam function

    //Destructing ke objek sekarang
    const kelas = {
    roomClass: '2KA15',
    teacher: 'Sasuke'
}

const data = ({roomClass,teacher}) => {
    return `${roomClass} ${teacher}`
}

console.log(data(kelas))