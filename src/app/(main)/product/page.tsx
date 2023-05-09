import Image from "next/image";
import Link from "next/link";
import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import { getProduct } from "@/app/util/query";

export const metadata = {
  title: "Next.js",
};

export default async function product() {
  const client = getClient();
  const { data } = await client.query({ query: getProduct });

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
      {data.getProducts.map((item: product) => (
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
  );
}
