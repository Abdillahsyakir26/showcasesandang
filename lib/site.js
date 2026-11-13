// ✏️ Teks & link toko diedit di sini
export const SITE = {
  name: "Sandang Andalan",
  logo: "/images/sandang.png",
  tagline: "Sandang untuk kamu yang mencari kualitas.",
  intro: "Selengkapnya bisa langsung cek dan checkout di Shopee.",
  shopeeStore: "https://shopee.co.id/sandangandalan",
  whatsapp: "089666625759", // contoh: "6281234567890" (kosongkan kalau tidak dipakai)
};

export const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
