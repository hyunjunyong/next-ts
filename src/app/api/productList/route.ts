import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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
  productImages: imageType;
}

const client = getClient();
const getProduct = gql`
  query {
    getProducts {
      id
      name
      price
      description
      category {
        id
        name
        createdAt
        updatedAt
      }
      productImages {
        imageUrl
        isMain
        id
      }
    }
  }
`;

export async function GET() {
  try {
    const { data } = await client.query<product>({
      query: getProduct,
    });
    return await NextResponse.json(JSON.stringify(data));
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      const { message } = error;
      return await NextResponse.json(message);
    }
  }
}
