import { login } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-3xl font-medium tracking-wide text-ink">
          Sign in
        </h1>
        <p className="mt-2 font-sans text-sm text-muted">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-sage hover:text-sage-deep underline underline-offset-2">
            Sign up
          </a>
        </p>

        {searchParams.error && (
          <p className="mt-4 rounded-sm border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-700">
            {searchParams.error}
          </p>
        )}

        <form action={login} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="block font-sans text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-sm border border-ink/15 bg-white px-3.5 py-2.5 font-sans text-sm text-ink placeholder:text-muted/50 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-sans text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1.5 w-full rounded-sm border border-ink/15 bg-white px-3.5 py-2.5 font-sans text-sm text-ink placeholder:text-muted/50 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
            />
          </div>

          <button type="submit" className="button-primary w-full">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
