import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Next.js",
};
export default async function product() {
  const res = await fetch("http://localhost:3000/api/productList", {
    method: "GET",
    next: { revalidate: 60 },
  });
  const productList = await res.json();
  const getProducts = productList.getProducts;

  interface categoryType {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }
  interface imageType {
    id: string;
    imageUrl: string;
    isMain: Boolean;
  }
  interface product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: categoryType;
    productImages: imageType[];
  }
  return (
    <div>
      {getProducts.map((item: product) => (
        <Link href={`product/${item.id}`} key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category.name}</p>
          <Image
            src={item.productImages[0].imageUrl}
            alt={item.productImages[0].id}
            width={100}
            height={100}
          ></Image>
        </Link>
      ))}
    </div>
    // productList.map((item)=>{

    // })
  );
}
