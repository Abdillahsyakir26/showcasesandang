import { getReviews } from "@/lib/db";
import { SITE } from "@/lib/site";
import Stars from "@/components/Stars";

export const metadata = { title: "Ulasan Pembeli" };

const tanggal = (d) =>
  d ? new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "";

export default function Ulasan() {
  const reviews = getReviews();
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  return (
    <main className="wrap page">
      <h1>Kata mereka yang sudah pakai.</h1>

      <div className="summary">
        <div className="big">{avg.toFixed(1).replace(".", ",")}</div>
        <div>
          <Stars value={Math.round(avg)} />
          <p>dari {reviews.length} ulasan</p>
        </div>
      </div>

      <div className="reviews">
        {reviews.map((r) => (
          <figure className="review" key={r.id}>
            <Stars value={r.rating} />
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <strong>{r.name}</strong>
              <span>{r.product}{r.date ? `, ${tanggal(r.date)}` : ""}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="cta-line">
        Mau lihat ulasan lengkap?{" "}
        <a href={SITE.shopeeStore} target="_blank" rel="noopener noreferrer">Buka halaman toko di Shopee</a>
      </p>
    </main>
  );
}
