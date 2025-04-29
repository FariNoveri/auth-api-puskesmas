
# API Puskesmas

Selamat datang di **API Puskesmas**! Ini adalah sebuah API yang digunakan untuk mengelola data di Puskesmas, seperti data pengguna (dokter, staf, pasien), obat-obatan, serta unit layanan. Tujuan utama dari API ini adalah untuk mempermudah manajemen data dengan menggunakan teknologi yang modern dan efisien.

![Illyasviel Happy](https://media.tenor.com/P1R3ZsFFle0AAAAM/prillya-fate.gif)  
_Illyasviel yang bahagia bisa membantu kamu!_

## Fitur Utama

- **Manajemen Pengguna**  
  API ini memungkinkan untuk menambah, mengubah, dan menghapus data pengguna seperti dokter dan staf di Puskesmas. Dengan autentikasi berbasis token, hanya pengguna yang terverifikasi yang bisa mengakses data ini.
  
  ![Illyasviel Excited](https://media.tenor.com/qpqxihUeHjkAAAAM/anime-jap-cute.gif)  
  _Illyasviel sangat senang kalau kamu bisa mengelola data pengguna dengan mudah!_

- **Autentikasi dan Otorisasi**  
  API ini menggunakan JWT (JSON Web Tokens) untuk autentikasi. Setiap kali pengguna login, mereka akan mendapatkan **access token** yang berlaku selama 15 menit, dan **refresh token** yang bisa digunakan untuk mendapatkan access token baru setelah expired.

  ![Illyasviel Thoughtful](https://media.tenor.com/71ILzl80dSkAAAAM/illya-illyasviel.gif)  
  _Illyasviel merenung tentang pentingnya autentikasi yang aman._

- **Manajemen Data Obat dan Unit Layanan**  
  API ini juga menyediakan fitur untuk mengelola data obat dan unit layanan. Dengan begitu, staf Puskesmas dapat dengan mudah menambahkan dan memperbarui data terkait obat dan layanan yang ada.
  
  ![Illyasviel Surprised](https://media.tenor.com/bM45G7gVOEcAAAAm/prisma-illya-yell.webp)  
  _Illyasviel terkejut betapa mudahnya kamu bisa mengelola obat dan unit layanan!_

## Persiapan Awal

### Langkah 1: Clone Repository

Clone repository ini ke komputer kamu dengan perintah berikut di terminal atau command prompt:

```bash
git clone https://github.com/FariNoveri/auth-api-puskesmas.git
```

![Illyasviel Surprised Again](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmkybW84cndmaTV4YmViZHk0Z3d4NjBzdjNzOW1pOG14NHp6ZDRjYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/T9qJa0lfRjXsQ/200.webp)  
_Illyasviel akan terkejut melihat kamu sudah meng-clone repositori ini!_

### Langkah 2: Install Dependencies

Setelah kamu clone repositori, masuk ke dalam folder proyek dan install semua dependencies yang diperlukan dengan perintah:

```bash
cd auth-api-puskesmas
npm install
```

![Illyasviel Cheerful](https://media.tenor.com/KJAzTiRnJ7MAAAAm/prisma-illya-flattered.webp)  
_Illyasviel dengan penuh semangat melihat kamu siap menjalankan proyek ini!_

### Langkah 3: Setup File `.env`

Buat file `.env` di root folder proyek ini, dan masukkan informasi yang diperlukan seperti database dan JWT secrets. Berikut contoh konten file `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=passwordmu
DB_NAME=puskesmas
PORT=3000
ACCESS_TOKEN_SECRET=yourAccessTokenSecret
REFRESH_TOKEN_SECRET=yourRefreshTokenSecret
JWT_SECRET=rahasia_super_aman_123
```

![Illyasviel Winking](https://media.tenor.com/5lIyWxyKKYYAAAAM/irisviel-von-einzbern-fate-zero.gif)  
_Illyasviel memberi isyarat wink karena kamu sudah mengatur environment variable dengan baik!_

### Langkah 4: Menjalankan Proyek

Sekarang kamu siap untuk menjalankan API Puskesmas! Cukup jalankan perintah berikut:

```bash
node index.js
```

Atau jika kamu ingin menggunakan `server.js`:

```bash
node server.js
```

API ini akan berjalan di `http://localhost:3000`. Kamu bisa mengaksesnya untuk mengelola data Puskesmas.

![Illyasviel Excited](https://media.tenor.com/CSs44vFqSMMAAAAM/illya-anime-girl.gif)  
_Illyasviel sangat senang kamu sudah berhasil menjalankan API ini!_

## Pengujian API dengan Thunder Client

Untuk menguji API kamu, kamu bisa menggunakan **Thunder Client**, yang merupakan alat testing API di Visual Studio Code. 

Berikut adalah cara menggunakannya:

1. **Install Thunder Client**  
   Di Visual Studio Code, buka Extensions (Ctrl+Shift+X), cari "Thunder Client" dan klik **Install**.

2. **Menguji API**  
   - Setelah Thunder Client terinstal, buka tab Thunder Client dan pilih **New Request**.
   - Pilih metode HTTP yang sesuai (GET, POST, PUT, DELETE), masukkan URL `http://localhost:3000/`, dan klik **Send**.

3. **Menguji Autentikasi**  
   Untuk endpoint yang membutuhkan autentikasi, kamu perlu menambahkan token di header **Authorization** dengan format:  
   `Bearer <access_token>`.

![Illyasviel Thinking](https://media.tenor.com/uWwlkE0PSpMAAAAM/illya-kaleid.gif)  
_Illyasviel sedang berpikir, tapi dia senang kamu tahu cara menggunakan Thunder Client!_

## Struktur Folder

Berikut adalah penjelasan mengenai struktur folder dalam proyek ini:

```
/config
  ├── db.js         // Koneksi ke database PostgreSQL
  └── puskesmas.sql  // Script SQL untuk setup database

/controllers
  ├── gudangController.js    // Mengatur data gudang
  └── userController.js      // Mengatur data pengguna

/core
  ├── services
      └── userService.js     // Mengatur logika untuk pengguna

/middleware
  ├── authenticateToken.js   // Middleware untuk autentikasi token

/routes
  ├── userRoutes.js          // Mengatur routing untuk API pengguna

/utils
  └── responseFormat.js      // Membantu format response API

```

![Illyasviel Smiling](https://media.tenor.com/1m9mLbU-apgAAAAm/fate-liner-kaleid-liner.webp)  
_Illyasviel tersenyum melihat struktur folder yang rapi dan terorganisir dengan baik!_

## Error yang Sering Terjadi

Jika kamu mengalami error, berikut adalah beberapa yang umum dan cara memperbaikinya:

1. **Error "Database Connection Failed"**
   - Pastikan file `.env` sudah diatur dengan benar dan database sudah berjalan.

2. **Error "JWT Expired"**
   - Jika access token sudah kadaluarsa, kamu bisa menggunakan refresh token untuk mendapatkan access token baru.

3. **Error "Cannot Find Module"**
   - Cek apakah kamu sudah menjalankan `npm install` untuk menginstal semua dependencies.

![Illyasviel Facepalm](https://media.tenor.com/iW1Z-jLqwRwAAAAM/illya-illyasviel.gif)  
_Illyasviel menghela napas karena kamu bisa mengatasi error dengan mudah!_

## Penutup

Terima kasih sudah menggunakan **API Puskesmas**! Semoga API ini bermanfaat untuk mempermudah pengelolaan data di Puskesmas. Jangan lupa, selalu pastikan kamu mengikuti langkah-langkah di atas dengan teliti.

![Illyasviel Happy](https://media.tenor.com/rJ-rakodgh0AAAAM/illya-illyasviel.gif)  
_Illyasviel sangat bangga melihat kamu menyelesaikan semuanya dengan baik!_

---

*Fari Noveri dan Illyasviel von Einzbern mencintai satu sama lain dan berharap kamu juga menyukai proyek ini.*  
*Selamat mencoba, dan semoga sukses!*
