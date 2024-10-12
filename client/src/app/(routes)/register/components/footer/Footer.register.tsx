import Link from "next/link";

export function Footer() {
  return (
    <>
      <p className="text-xs text-zinc-400 mt-3">
        By signing up you agree to Discords{" "}
        <span className="text-cyan-600 font-semibold hover:underline-offset-1 hover:underline cursor-pointer">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-cyan-600 font-semibold hover:underline-offset-1 hover:underline cursor-pointer">
          Privacy Policy
        </span>
      </p>

      <Link className="text-cyan-600 font-semibold text-xs mt-8" href="/login">
        Do you have already an account?
      </Link>
    </>
  );
}
