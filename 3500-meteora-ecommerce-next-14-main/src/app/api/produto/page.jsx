import styles from "./page.module.css";
import Produto from "/app/components/Produto";

async function getPrtoduto(slug) {
    const res = await fetch(`http://localhost:3000/api/produto/${slug}`)

    const produto = await res.json();

    return produto;
}

export default async function ProdutoPage({ params }) {
  const { produto } = await getPrtoduto(params.slug)
  
    return (
      <main className={styles.main}>
         <Produto produto={produto} />
      </main>
    );
}

export async function generateStaticParams(slug) {
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`)
  const produtos = await res.json();
  const result = produtos.map((produto) => ({
    slug: produto.id.toString(),
  }));
  return result;
}