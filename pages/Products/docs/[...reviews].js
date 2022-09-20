import React from "react";
import { useRouter } from "next/router";
function Reviews() {
  const router = useRouter();
  const params = router.query;
  console.log(params);
  return <div>under docs</div>;
}

export default Reviews;
