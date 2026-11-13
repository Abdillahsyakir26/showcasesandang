import Link from "next/link";
import { getProducts, getReviews } from "@/lib/db";
import { SITE, rupiah } from "@/lib/site";
import Stars from "@/components/Stars";

export default function Home() {
  const products = getProducts();
  const reviews = getReviews();
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  return (
    <main>
      <section className="hero wrap">
        <h1>{SITE.tagline}</h1>
        <p>{SITE.intro}</p>
        {reviews.length > 0 && (
          <Link href="/ulasan" className="rating-pill">
            <Stars value={Math.round(avg)} />
            <span>{avg.toFixed(1).replace(".", ",")} dari {reviews.length} ulasan pembeli</span>
          </Link>
        )}
      </section>

      <section className="wrap stairs" aria-label="Daftar produk">
        {products.map((p) => (
          <article className="card" key={p.id}>
            <div className="photo">
              {p.image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image_url} alt={p.name} loading="lazy" />
              ) : (
                <span aria-hidden="true">{p.name.charAt(0)}</span>
              )}
              {p.tag && <em className="tag">{p.tag}</em>}
            </div>
            <div className="info">
              <h2>{p.name}</h2>
              {p.description && <p>{p.description}</p>}
              <div className="row">
                <strong>{rupiah(p.price)}</strong>
                <a className="buy" href={p.shopee_url} target="_blank" rel="noopener noreferrer">Beli di Shopee</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
