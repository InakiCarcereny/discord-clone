import { Form } from "./components/form/Form.register";
import { Header } from "./components/header/Header.register";
import { Discord } from "@/app/icons/Discord";
import { Footer } from "./components/footer/Footer.register";

export default function Register() {
  return (
    <div className="h-screen w-screen from-blue-600 to-indigo-700 bg-gradient-to-b flex flex-col items-center justify-center">
      <div className="flex flex-col bg-zinc-800 w-[500px] h-[700px] rounded-[4px] px-6 py-6">
        <Header />

        <Form />

        <Footer />
      </div>

      <div className="absolute top-8 left-8 flex items-center gap-2 text-white font-semibold">
        <Discord />
        Discord
      </div>
    </div>
  );
}
