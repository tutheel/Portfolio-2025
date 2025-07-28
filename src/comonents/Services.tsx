"use client";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
  ],
});

function Services() {
  return (
    <>
      <section className="w-full h-[120svh] bg-radial-[at_50%_0%] from-[#FFFFFF] from-45%  via-[#3D0089] via-85% to-[#1B003B] to-95% text-black">
        <h1
          className={`${inter.className} leading-none font-bold text-transparent bg-linear-to-b from-[#FFFFFF] from-30% via-[#7300FF] via-100% to-[#2F0069] to-450% bg-clip-text text-[34svh] tracking-tighter text-center pt-30`}
        >
          Services
        </h1>
        <div className="flex justify-between items-center px-50">
          <div
            className="w-120 h-150 rounded-3xl flex flex-col items-center-safe p-15"
            style={{
              background:
                "radial-gradient(circle at 30% 10%, #ffffff 50%, #ece6ff 60%, #6f31ff 85%, #3f008f 100%)",
              boxShadow: "0 40px 80px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h1 className={`${inter.className} font-semibold text-4xl pt-8 text-transparent bg-linear-to-b from-[#7300FF] from-60% to-[#15003B] to-100% bg-clip-text`}>UIUX Designer</h1>
            <h1 className={`${inter.className} font-semibold text-[#49029F] pt-8`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus assumenda totam ad nihil nobis quasi! Vel neque aliquam quam. Incidunt non laboriosam animi, sint quaerat iure neque impedit facere.</h1>
          </div>
          <div
            className="w-120 h-150 rounded-3xl flex flex-col items-center-safe p-15"
            style={{
              background:
                "radial-gradient(circle at 30% 10%, #ffffff 50%, #ece6ff 60%, #6f31ff 85%, #3f008f 100%)",
              boxShadow: "0 40px 80px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h1 className={`${inter.className} font-semibold text-4xl pt-8 text-transparent bg-linear-to-b from-[#7300FF] from-60% to-[#15003B] to-100% bg-clip-text`}>Web Development</h1>
            <h1 className={`${inter.className} font-semibold text-[#49029F] pt-8`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste molestiae laborum alias voluptatum. Soluta fuga labore amet veritatis nemo dicta, velit molestias, deleniti accusamus, nesciunt doloribus omnis iusto repudiandae!</h1>
          </div>
          <div
            className="w-120 h-150 rounded-3xl flex flex-col items-center-safe p-15"
            style={{
              background:
                "radial-gradient(circle at 30% 10%, #ffffff 50%, #ece6ff 60%, #6f31ff 85%, #3f008f 100%)",
              boxShadow: "0 40px 80px rgba(0, 0, 0, 0.7)",
            }}
            >
            <h1 className={`${inter.className} font-semibold text-4xl pt-8 text-transparent bg-linear-to-b from-[#7300FF] from-60% to-[#15003B] to-100% bg-clip-text`}>Cloud Solution</h1>
            <h1 className={`${inter.className} font-semibold text-[#49029F] pt-8`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam nostrum impedit possimus rerum nisi necessitatibus. Aliquam cupiditate sapiente veniam minima iste debitis, ullam nam voluptates, maxime maiores facere! Veniam?</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
