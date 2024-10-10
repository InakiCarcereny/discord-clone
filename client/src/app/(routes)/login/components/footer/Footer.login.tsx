import Link from "next/link";

export function Footer() {
  return (
    <>
      <p className="text-xs text-zinc-400 mt-3">
        By signing up you agree to Discords{" "}
        <span className="text-cyan-600 font-semibold">Terms of Service</span>{" "}
        and <span className="text-cyan-600 font-semibold">Privacy Policy</span>
      </p>

      <Link className="text-cyan-600 font-semibold text-sm mt-8" href="/login">
        Do you have already an account?
      </Link>
    </>
  );
}
