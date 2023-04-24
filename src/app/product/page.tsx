import Image from "next/image";

export default async function product() {
  const res = await fetch("http://localhost:3000/api/productList", {
    method: "GET",
  });
  const productList = await res.json();
  const getProducts = productList.getProducts;
  console.log(productList);
  interface categoryType {
    id: number;
    name: String;
    createdAt: Date;
    updatedAt: Date;
  }
  interface imageType {
    id: String;
    imageUrl: String;
    isMain: Boolean;
  }
  interface product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: categoryType;
    productImages: imageType;
  }
  return (
    <div>
      {getProducts.map((item: product) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category.name}</p>
          <Image src={item.productImages.imageUrl}></Image>
        </div>
      ))}
    </div>
    // productList.map((item)=>{

    // })
  );
}
