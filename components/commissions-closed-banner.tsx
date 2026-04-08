import { commissionsCopy } from "@/lib/commissions-copy";

/** Displays a visible banner when commissions are closed. */
export function CommissionsClosedBanner() {
  if (commissionsCopy.commissionsOpen) return null;
  return (
    <div
      role="status"
      className="border-b border-amber-200/60 bg-amber-50/80 px-4 py-3 text-center"
    >
      <p className="font-sans text-sm font-medium text-amber-800 sm:text-base">
        {commissionsCopy.closedNotice}
      </p>
    </div>
  );
}
