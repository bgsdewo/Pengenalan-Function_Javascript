// let x = 10;
// console.log(x)

//Pengenalan function
// function student() {
//    const requirement = 'Berpendidikan SD,SMP,SMA'
//     return requirement;
// }    
// console.log(student())


//function dengan parameter dan argumen
// function student(name) {
//     const studentName = `nama siswa ini adalah ${name}`
//     return studentName
// }
// console.log(student('Bagus'))

//function dengan multiple param dan argumen
// function student(name,addres) {
//     const studentName = `nama siswa ini adalah ${name} dan dia ber alamat di ${addres}`
//     return studentName
// }
// console.log(student('Bagus','Jakarta'))


//lingkup variabel scope
// let progamming = 'SAASS'//ini bisa dipake jika progamming tidak ada dalam function
// function css() {
//     // let progamming = 'CSS'
//     console.log(progamming)
// }
// css()

//bloked scop
// let tinggi =8
// if(tinggi >5) {
//     let lebar = 10;
//     console.log(lebar)//ini bisa
// }
// console.log(lebar)//ini gabisa 
//begitu juga dengan lingkup perulangan
//block scope hanya dimiliki oleh const dan let saja,tidak dengan var

//contoh penggunaan yang tidak baik dari VAR
// let tinggi =8
// if(tinggi >5) {
//     var lebar = 10;
//     // console.log(lebar)//ini bisa
// }
// console.log(lebar)//ini bisa
// //dan lebih parahnya bisa dimanipulasi

// for(let index =0;index<10;index++) {
//     var lebar = index;
//     console.log(lebar)
// }



//lexical scope
// function lamarKerja() {
//     const jabatan = 'Progammer'
//     function gilaKerja() {
//         const jamKerja= 10;
//         //function baru
//         function orangDalam() {
//             let kenalan = `Orang dalam bisa memasukan ${jabatan} dan dia bekerja selama ${jamKerja} jam`
//             console.log(kenalan)
//         }
//         orangDalam()
//     }
//     gilaKerja()
// }//penutup dari function lamarKerja

// lamarKerja()


//Function ekspresi
// const perpangkatan = function(nilai) {
//     return nilai * nilai;
// }
// console.log(perpangkatan(10))

//Function Sebagai Argument Function Lain
//  function duaKali(func) {
//     func()
//     func()
//  }

//  function lemparDadu() {
//     const hasil = Math.floor(Math.random()*6) +1
//     console.log(hasil)
//  }
//  duaKali(lemparDadu)

//Function Bernilai Balik Function
// function hasilnyaAdalahFunction() {
//     const rand = Math.random()
//     if (rand > 0.1) {
//         return function() {
//             console.log(`Selamat,angka yang kamu dapatkan lebih besar! ${rand}`)
//         };
//     }else {
//         return function() {
//             console.log(`Selamat,angka yang kamu dapatkan lebih kecil! ${rand}`)
//         }
//     }
// }

// const result = hasilnyaAdalahFunction()
// result()

//Definisi sebuah method
//ketika menambahkan function pada suatu object property
// const aritmatika = {
//     perkalian: function(x,y) {
//         return x*y
//     },
//     pembagi:function(x,y) {
//         return x/y
//     }
// }

// console.log(aritmatika.pembagi(12,4))

//Keyword this:
// const saya = {
//     nama: 'Bagus',
//     Belakang: 'Sadewo',
//     namaLengkap: function() {
//         const hasil = `Nama lengkap saya adalah ${this.nama +=(' ') + this.Belakang}`
//         return hasil
//     }
// }

// console.log(saya.namaLengkap())


//Pengunnan try dan catch
// try{
//     saya.kenalan()//belom tedefinisi tapi masi bisa meng run proses selanjutnya
// } catch {
//     console.log('Error!!')
// }
//penggunaan try dan catch itu buat kalo misalnya ada program yang error dia tidak akan merusaknya
//contohnya

// saya.kenalan();//ini belom terdefinisi tapi bisa merusak kode selanjutnya
// console.log('Setelah proses')
// function teriak(a) {
//     try {
//        console.log(a.toUppercase())

//     }catch(error) {
//         console.log(error);
//         console.log('Yang kamu masukan bukan string')
//     }
// }

// teriak('Babu')