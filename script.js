//Materi callback function dan method" milik array

//Video 1 (For Each method)
//For each method adalah:Memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array
//conoh pada array
// const angka = [1,2,3,4,5,6,7,8,9]

// angka.forEach(function(pepe){
//     if(pepe % 2 === 0){
//         console.log(pepe)
//     }
// })

// //contoh objek dalam array//Jika Anda ingin memiliki beberapa objek dalam satu variabel, Anda bisa menggunakan tanda kurung siku[]
// untuk membuat array objek.
//Berikut adalah contoh penulisan yang benar:
// const animes = [{
//     title: 'Demon Slayer',
//     Rating: 80,
// },
// {
//     title:'Naruto Shipuden',
//     Rating: 85,
// },
// {
//     title:'Hunter X Hunter',
//     Rating: 85,
// }
// ]

// animes.forEach(function(anime){
//     console.log(`${anime.title} ${anime.Rating} / 100`)
// })

// //jika tanpa menggunakan for each kita akan mencetaknya satu persatu
// //berikut contohnya
// console.log(animes[0].title); // Cetak judul anime pertama
// console.log(animes[0].Rating); // Cetak rating anime pertama


//method peta
//nilai baliknya adalah array baru yang sudah dimodifikasi melalui callback function dari suatu array
//contoh pengguaan method map ini

// const  angka = [1,2,3,4,5,6,7,8,9]
// const angkaDoubles= angka.map(function(num){
//     return num *2;
// })
// console.log(angkaDoubles)

//Function Arrow
//setiap function boleh memake parameter ataupun tidak memake parameter
// const perpangkatan =(x) => {
//     return x * x;
// }

// console.log(perpangkatan(5))

//Kembali secara implisit dari fungsi panah
//Catatan utk penggunaan dari implisit fungsi panah
//1.tidak boleh lebih dari satu baris.
//2.program yang dijalankan tidak boleh pake ;
//3. harus pake () jangan {}

// const perpangkatan =(x) =>  x * x//bisa gini juga kalo isinya operasi aritmatika sederhana
// console.log(perpangkatan(9))

//contoh yang lain
// const random = () => (
//     Math.random(Math.random()*1000)
// )

//memahami Senttimeout dan Sentinterval
// callback function yang bukan berasal dari Array.fungsinya untuk memberi waktu jeda dan melakukan perulangan
// //setiap waktu yang ditenntutakn

// console.log('Halo....');
// setTimeout(() => {
//     console.log('OTW BRO')
// }, 5000);//proses akan dilakukan setelah 5 detik
// console.log('masih disana ga?')

// setInterval(() => {
//     console.log(2*2)  

// },3000);//proses akan dilakukan setiap 3 detik

//cara memberhentikan suatu interval,lakukan seperti ini
// const interval = setInterval(() => {
//          console.log(2*2)  
//      },3000);
//      clearInterval(interval)


//Memilih data tertentu di dalam array metode filter
//filter
//function yang mengembalikan nilai array lagi yg sudah dimanipulasi sesuai
//dengan kriteria yang ditetapkan
//jadi sebenarnya map sma filter sama,tapi ini bisa jadi
//kombinasi yg sempurna pertama gunakan filterjika sudah di filter kita pakai map

// const  angka = [1,2,3,4,5,6,7,8,9]
// const angkaDoubles= angka.filter((num)=>{
//     return num <5;
// })
// console.log(angkaDoubles)

//every
//akan mengembalikan nilai boolean.true pada saat selurh nilai  yg ada pada suatu
//array memiliki kriteria yang sama(benar semua kaya operasi and ).false jika sebaliknya   

// const exampScore = [80,85,70,90,93,77];
// const isGraduate = exampScore.every((score) => score >= 75);

// console.log(isGraduate)

//kalo some sama kaya every:tapi salah satunya sesuai maka dia true kaya or gtu pokoknya
// const exampScore = [80,85,70,90,93,77];
// const cetakSome = exampScore.some((salahSatu) => salahSatu <=70)

// console.log(cetakSome)

//mendapatkan satu nilai sesuai kondisi dari sebuah array dengan reduce
//reduce:Melakukan proses sebanyak element milik suatu array.nilai baliknya adalah single value
//reduce ini bukan hanya bisa digunakan di array murni saja,tapi object array juga bisa
//bisa pake validasi seeprti if dll gtu

// const exampScore = [80,85,70,90,93,77];

// const jumlah=exampScore.reduce((total,score)     => {
//     return total + score;
// })

// console.log(jumlah)

//Object dalam arrow function mengarah pada object global window   

const person = {
    firstName: 'Bagus',
    lastName: 'Sadewo',  
    fullname: () => {
        console.log(this)
        return `${this.firstName} ${this.lastName}`;
    },
    panggilNanti: function() {
        setTimeout(() => {
            console.log(this)
            console.log(`${this.firstName} ${this.lastName}`);
        }, 3000);
    },
    regularName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(person.fullname())
console.log(person.regularName())

console.log(person.panggilNanti())