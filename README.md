# Dream League Tournament 🏆

**Professional turnir boshqaruv tizimi** - eFutbol, DLS (Dream League Soccer) va real turnir tashkilotchilari uchun mo'ljallangan zamonaviy va kuchli platforma.

---

## 📋 Loyiha haqida

Dream League Tournament - bu raqobatbardosh turnirlarni yaratish, boshqarish va kuzatib borish uchun mo'ljallangan to'liq funksional veb-ilova. Real vaqt rejimida braket vizualizatsiyasi, avtomatik o'yinlar generatsiyasi va statistikani saqlash imkoniyatlari bilan bu tizim turnir tashkilotchilari uchun ideal yechim hisoblanadi.

### 🎯 Maqsad

- **eFutbol o'yinchilari** uchun professional turnir tashkil etish
- **DLS (Dream League Soccer)** jamoalari uchun musobaqalar boshqaruvi
- **Real turnir tashkilotchilari** uchun avtomatlashtirilgan tizim
- **Statistika va tarix**ni saqlab borish
- **Real vaqt rejimida** yangilanishlar

---

## ✨ Asosiy xususiyatlar

### 🔐 Foydalanuvchi tizimi
- Ro'yxatdan o'tish va tizimga kirish
- JWT token asosida autentifikatsiya
- Xavfsiz parol saqlash (bcrypt)
- Online foydalanuvchilarni kuzatish

### 🏟️ Turnir boshqaruvi
- Turnir yaratish (nomi, vaqti, joyi)
- Turnir holatini boshqarish (pending, started, finished)
- Turnirni o'chirish imkoniyati
- Turnir yaratuvchisi identifikatsiyasi

### 👥 Ishtirokchilar tizimi
- Turnirga qo'shilish
- Ishtirokchilar ro'yxati
- Takroriy qo'shilishni oldini olish

### 🎮 O'yinlar va Braket
- **Avtomatik braket generatsiyasi** (single elimination)
- Random o'yinchilarni taqsimlash
- Round-based tizim
- O'yin natijalarini kiritish
- G'olibni avtomatik keyingi roundga o'tkazish
- Braket vizualizatsiyasi

### 📊 Statistika
- Barcha foydalanuvchilar soni
- Faol turnirlar soni
- Barcha o'yinlar soni
- Real vaqt rejimida yangilanish

### ⚡ Real vaqt rejimi (Socket.io)
- Online foydalanuvchilar kuzatuv
- Yangi turnir yaratilganda bildirishnoma
- Ishtirokchi qo'shilganda yangilanish
- O'yin natijalari real vaqtda yangilanadi
- Turnir holati o'zgarganda bildirishnoma

---

## 🛠️ Texnik talablar

### Backend
- Node.js (v18+)
- MongoDB (v6+)
- npm/yarn

### Frontend
- Node.js (v18+)
- npm/yarn

---

## 📦 O'rnatish va ishga tushirish

### 1. Repositoryni klonlash

```
cd dream-legaue-tournament
```

### 2. Backend sozlash

```bash
cd backend
npm install
```

**Environment variables yaratish:**

`.env` faylini yarating va quyidagilarni qo'shing:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dream-league-tournament
JWT_SECRET_KEY=sizning_secret_keyingiz
NODE_ENV=development
```

**Backendni ishga tushirish:**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Backend `http://localhost:5000` da ishlaydi.

### 3. Frontend sozlash

```bash
cd frontend
npm install
```

**Frontendni ishga tushirish:**

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

Frontend `http://localhost:3000` da ishlaydi.

---

## 🚀 Foydalanish qo'llanmasi

### 1. Ro'yxatdan o'tish
- `/auth/register` - Yangi account yaratish
- Email va parol kiritish talab qilinadi

### 2. Tizimga kirish
- `/auth/login` - Tizimga kirish
- Token cookie orqali saqlanadi

### 3. Turnir yaratish
- "Yangi turnir" tugmasini bosing
- Turnir nomi, vaqti va joyini kiriting
- Turnir yaratiladi va "pending" holatida bo'ladi

### 4. Ishtirokchilarni qo'shish
- Turnir sahifasiga o'ting
- Ishtirokchilar turnirga qo'shiladi
- Kamida 2 ta ishtirokchi kerak

### 5. O'yinlarni generatsiya qilish
- Barcha ishtirokchilar qo'shilgandan so'ng
- "Generate Matches" tugmasini bosing
- Tizim avtomatik braket yaratadi
- Turnir "started" holatiga o'tadi

### 6. O'yin natijalarini kiritish
- Har bir o'yin uchun g'olibni tanlang
- G'olib avtomatik keyingi roundga o'tadi
- Final g'olib turnir g'olibi bo'ladi

---


## 🎨 Texnologiyalar

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Axios** - HTTP client
- **Socket.io-client** - Real-time client
- **Zustand** - State management
- **Lucide React** - Icons

---

## 📈 Statistika va Kuzatuv

Tizim quyidagi statistikalarni avtomatik saqlaydi:
- **Jami foydalanuvchilar** - Platformada ro'yxatdan o'tganlar
- **Faol turnirlar** - Hozirda davom etayotgan musobaqalar
- **Barcha o'yinlar** - O'tkazilgan jami o'yinlar soni
- **Online foydalanuvchilar** - Hozir tizimdagi foydalanuvchilar

---

## 🌐 Deployment

### Backend Deployment (Vercel/Render/Railway)
1. MongoDB URI ni environment variable qo'shing
2. JWT_SECRET_KEY ni o'rnating
3. PORT ni sozlang (default: 5000)

### Frontend Deployment (Vercel)
1. Backend URL ni environment variable qo'shing
2. Build command: `npm run build`
3. Output directory: `.next`

---

## 🎯 Nega Dream League Tournament?

### ✅ eFutbol uchun
- Professional turnir boshqaruvi
- Real vaqt rejimida yangilanishlar
- Oson va qulay interfeys

### ✅ DLS (Dream League Soccer) uchun
- Jamoalar musobaqalari uchun ideal
- Braket vizualizatsiyasi
- Statistika tarixi

### ✅ Real turnir tashkilotchilari uchun
- Avtomatlashtirilgan tizim
- Vaqtni tejash
- Professional ko'rinish

### ✅ Statistika saqlash
- Barcha ma'lumotlar saqlanadi
- Tarixni ko'rish imkoniyati
- Tahlil uchun ma'lumotlar

---

## 🤝 Qo'llab-quvvatlash

Agar savollaringiz bo'lsa yordam berishdan mamnunman:
- GitHub Issues orqali xabar yuboring
- Email: jamshidkhamroyev@gmail.com

---

## 📄 Litsenziya

Bu loyiha ISC litsenziyasi ostida tarqatiladi.

---

## 🙏 Acknowledgments

- Next.js team
- Socket.io community
- shadcn/ui components
- Tailwind CSS team

---

**Dream League Tournament** - Turnirlaringizni professional boshqaring! 🏆
