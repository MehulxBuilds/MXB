"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const Home = () => {
  const searchParams = useSearchParams().get("success");
  const router = useRouter();

  useEffect(() => {
    if(!searchParams) return;
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("LoggedIn Successfully");
    })();
    router.replace('/');
  }, [searchParams, router]);


  return (
    <div>Home</div>
  )
}

export default Home;