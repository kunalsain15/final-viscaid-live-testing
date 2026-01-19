

"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function Unsubscribe() {
  const router = useRouter();
  const params = useParams();

  const email = decodeURIComponent(params.email);

  const handleResubscribe = async () => {
    if (!email) {
      toast.error("Email not found");
      return;
    }

    try {
      await axios.post("https://api.viscadia.com/api/v1/subscribe", { email });

      toast.success("You are subscribed again");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      toast.error("Failed to resubscribe");
    }
  };

  return (
    <div className="h-[100dvh] pt-20 w-full grid place-items-center bg-gradient-to-br from-[#ffeaea] via-white to-[#f3f0ff] px-4">
      <Toaster position="top-center" />

      <div className="relative w-full max-w-[460px] bg-white shadow-[0_10px_50px_rgba(0,0,0,0.1)] px-10 pt-16 pb-10 text-center">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-[#c6352c]">
          <img src="/right.png" alt="Success" width={28} height={28} />
        </div>

        <h1 className="text-2xl font-normal mb-3">You’re Unsubscribed</h1>

        <p className="font-normal text-black text-[18px] mb-1">{email}</p>

        <p className="text-[#484848] font-light text-[18px] mb-5">
          We’ve removed you from our mailing list.
        </p>

        <div className="border-t pt-5 mb-7">
          <p className="text-gray-500 text-[18px] font-light">
            Changed your mind?
            <span
              onClick={handleResubscribe}
              className="ml-1 text-[#BD2F2C] font-medium cursor-pointer hover:underline"
            >
              Resubscribe
            </span>
          </p>
        </div>

        <Link href="/">
          <button className="bg-[#c6352c] cursor-pointer font-light px-6 py-2.5 text-base text-white">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
