"use client";

import { useState } from "react";

type Action = "approve" | "delete" | null;

export function ReviewModerationButtons({ reviewId }: { reviewId: string }) {
  const [pending, setPending] = useState<Action>(null);

  if (pending) {
    return (
      <div className="flex items-center gap-3">
        <span className="font-sans text-xs text-muted">
          {pending === "approve" ? "Approve this review?" : "Delete this review?"}
        </span>
        <form action={`/admin/reviews/${reviewId}/${pending}`} method="POST">
          <button
            type="submit"
            className={`font-sans text-xs font-medium underline underline-offset-2 ${
              pending === "approve"
                ? "text-sage hover:text-sage-deep"
                : "text-red-500 hover:text-red-700"
            }`}
          >
            Confirm
          </button>
        </form>
        <button
          type="button"
          onClick={() => setPending(null)}
          className="font-sans text-xs text-muted hover:text-ink underline underline-offset-2"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => setPending("approve")}
        className="font-sans text-xs font-medium text-sage hover:text-sage-deep underline underline-offset-2"
      >
        Approve
      </button>
      <button
        type="button"
        onClick={() => setPending("delete")}
        className="font-sans text-xs font-medium text-red-500 hover:text-red-700 underline underline-offset-2"
      >
        Delete
      </button>
    </div>
  );
}
