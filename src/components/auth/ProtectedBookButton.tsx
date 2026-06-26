"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useUser } from "@/hooks/useUser";

interface ProtectedBookButtonProps {
  venueId: string | number;
}

export default function ProtectedBookButton({
  venueId,
}: ProtectedBookButtonProps) {
  const router = useRouter();

  const { user, role, loading } = useUser();

  function handleBook() {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    if (role === "owner") {
      alert(
        "Venue owners cannot make bookings. Please login with a customer account to book venues."
      );
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