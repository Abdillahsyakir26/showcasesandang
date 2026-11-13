import { SITE } from "@/lib/site";

export const metadata = { title: "Tentang & Cara Order" };

// ✏️ Ganti cerita toko dan FAQ sesuai tokomu
const steps = [
  ["Pilih produk", "Lihat koleksi di halaman Produk, lalu tekan Beli di Shopee."],
  ["Checkout di Shopee", "Kamu dibawa ke halaman produk di Shopee. Pilih ukuran dan warna di sana."],
  ["Bayar dan tunggu", "Pesanan dikirim lewat Shopee. Kamu bisa lacak paketnya dari aplikasi."],
];
const faq = [
  ["Ukurannya bagaimana?", "Tabel ukuran ada di deskripsi tiap produk di Shopee."],
  ["Bisa tukar ukuran?", "Bisa, ikuti ketentuan pengembalian Shopee. Hubungi kami lewat chat toko."],
  ["Berapa lama pengiriman?", "Tergantung kurir dan kotamu. Estimasi tampil saat checkout."],
];

export default function Tentang() {
  return (
    <main className="wrap page narrow">
      <h1>Pakaian yang enak dipakai, bukan cuma enak dilihat.</h1>
      <p className="lead">
        {SITE.name} dibuat untuk kamu yang mau pakaian harian yang awet, adem, dan tidak ribet dirawat.
        Semua produk sandang andalan dibuat dengan sepenuh hati, memastikan customer puas dengan produk kami.
      </p>

      <h2>Cara order</h2>
      <ol className="steps">
        {steps.map(([t, d]) => (
          <li key={t}><strong>{t}</strong><span>{d}</span></li>
        ))}
      </ol>

      <h2>Pertanyaan yang sering muncul</h2>
      {faq.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}

      <p className="cta-line">
        <a className="buy" href={SITE.shopeeStore} target="_blank" rel="noopener noreferrer">Kunjungi toko di Shopee</a>
        {SITE.whatsapp && (
          <>{" "}<a className="ghost" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat WhatsApp</a></>
        )}
      </p>
    </main>
  );
}
