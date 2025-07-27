# 🧾 Invoice Management API – Backend

Ini adalah backend dari **Aplikasi Manajemen Invoice** berbasis web yang dibangun menggunakan **Node.js**, **Express**, dan **MongoDB**. API ini menangani fitur **autentikasi pengguna** dan **pengelolaan data invoice**, dengan keamanan menggunakan **JWT (JSON Web Token)**.

---

## ⚙️ Teknologi & Tools yang Digunakan

| Teknologi      | Keterangan                               |
| -------------- | ---------------------------------------- |
| **Node.js**    | JavaScript runtime server-side           |
| **Express.js** | Framework minimalis untuk backend        |
| **MongoDB**    | Database NoSQL                           |
| **Mongoose**   | ODM (Object Data Modeling) untuk MongoDB |
| **JWT**        | JSON Web Token untuk otentikasi          |
| **dotenv**     | Manajemen variabel lingkungan            |
| **Cors**       | Middleware keamanan lintas origin        |
| **Nodemon**    | Tool live-reload selama development      |

---

## 📦 Fitur Utama

- 🔐 **User Authentication** (Register & Login menggunakan JWT)
- 📄 **CRUD Invoice**: Tambah & tampilkan invoice user
- ✅ **Proteksi Route**: Middleware yang mencegah akses tanpa login
- 🗃️ **MongoDB Integration** dengan validasi schema menggunakan Mongoose
- 🔧 **Struktur Modular**: MVC (Model–View–Controller)

---

## 📁 Struktur Folder
