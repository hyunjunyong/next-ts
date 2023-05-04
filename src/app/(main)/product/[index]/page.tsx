interface DetailProps {
  params: {
    index: number;
  };
}

export default function detail({ params }: DetailProps) {
  return <div>{params.index}번 상품 디테일 페이지</div>;
}
