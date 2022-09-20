//This contain th product list
import React from "react";
import Link from "next/link";
function productList() {
  return (
    <div>
      list of products
      <Link href="/Products/1">
        <a>view first product</a>
      </Link>
    </div>
  );
}

export default productList;
