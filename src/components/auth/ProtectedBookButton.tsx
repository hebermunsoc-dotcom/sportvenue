"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { getCurrentUser } from "@/lib/auth";

interface ProtectedBookButtonProps {
  venueId: string | number;
}

export default function ProtectedBookButton({
  venueId,
}: ProtectedBookButtonProps) {
  const router = useRouter();

  async function handleBook() {
    const user = await getCurrentUser();

    if (!user) {
      router.push("/login");
      return;
    }

    router.push(`/book/${venueId}`);
  }

  return (
    <Button
      className="w-full"
      onClick={handleBook}
    >
      Book Now
    </Button>
  );
}