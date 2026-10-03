# Library Loan API

REST API untuk mengelola data peminjaman buku pada sistem perpustakaan.

## Tujuan

Project ini dibuat untuk memenuhi Responsi Modul 1 dengan menerapkan Node.js, Express.js, dan Supabase untuk membangun REST API dengan fitur CRUD serta query filter berdasarkan status peminjaman.

## Teknologi

- Node.js
- Express.js
- Supabase
- PostgreSQL
- Vercel
- Postman

## Database Schema

Tabel yang digunakan adalah `loans` dengan struktur:

| Field | Tipe Data | Keterangan |
|---|---|---|
| id | UUID | ID peminjaman |
| member_name | TEXT | Nama anggota |
| book_title | TEXT | Judul buku |
| loan_date | DATE | Tanggal peminjaman |
| due_date | DATE | Batas pengembalian |
| return_date | DATE | Tanggal pengembalian |
| status | TEXT | Status peminjaman |

## API Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/loans` | Menampilkan semua data peminjaman |
| GET | `/loans/:id` | Menampilkan data berdasarkan ID |
| POST | `/loans` | Menambahkan data peminjaman |
| PUT | `/loans/:id` | Memperbarui data peminjaman |
| DELETE | `/loans/:id` | Menghapus data peminjaman |
| GET | `/loans?status=Dikembalikan` | Filter berdasarkan status |

## Contoh Request

### GET Semua Data

```text
GET /loans
```

### POST Tambah Data

```json
{
  "member_name": "Dinda Azra",
  "book_title": "Pemrograman Web",
  "loan_date": "2026-10-04",
  "due_date": "2026-10-11",
  "return_date": null,
  "status": "Dipinjam"
}
```

### PUT Update Data

```json
{
  "status": "Dikembalikan",
  "return_date": "2026-10-10"
}
```

### DELETE Data

```text
DELETE /loans/{id}
```

### Filter Berdasarkan Status

```text
GET /loans?status=Dikembalikan
```

## Instalasi dan Menjalankan

```bash
npm install
npm run dev
```

Server berjalan pada:

```text
http://localhost:3000
```

## Deployment

API telah dideploy menggunakan Vercel.

URL:

```text
https://library-loan-api-nu.vercel.app
```

## Repository

Source code tersedia di GitHub:

https://github.com/dindaazra/library-loan-api