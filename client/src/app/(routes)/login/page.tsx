import Link from "next/link";
import { Discord } from "@/app/icons/Discord";
import { Header } from "./components/header/Header.login";
import { Form } from "./components/form/Form.login";
import { Footer } from "./components/footer/Footer.login";

export default function Login() {
  return (
    <div className="h-screen w-screen from-blue-600 to-indigo-700 bg-gradient-to-b flex flex-col items-center justify-center">
      <div className="flex flex-col bg-zinc-800 w-[450px] md:w-[750px] h-[425px] rounded-[4px] px-6 py-6">
        <Header />

        <Form />

        <Footer />
      </div>

      <div className="absolute top-8 left-8 flex items-center gap-2 text-white font-semibold">
        <Discord />
        <span>Discord</span>
      </div>
    </div>
  );
}
