/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import Header from "../component/Header";
import "./../index.css";
import logoImage from "../assets/apala-logo.svg";
import Banner from "../assets/Banner.jpg";
import prev from "../assets/Button-Prev.svg";
import next from "../assets/Button-Next.svg";
import testimoniImage from "../assets/testimoni.jpg";
import Facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/Youtube.svg";
import mail from "../assets/mail.svg";
import chat from "../assets/chat_bubble.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [count, setCount] = useState(0);
  const [slide, setSlide] = useState(0);
  const myStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const pathaways = ["Piano", "Gitar", "Biola", "Drum", "Seruling"];
  const classSteps = [
    {
      lesson: "Pembelajaran 1",
      titleClass: "Mengenal Bagian Piano",
      level: "Dasar",
    },
    {
      lesson: "Pembelajaran 1",
      titleClass: "Mengenal Bagian Piano",
      level: "Dasar",
    },
    {
      lesson: "Pembelajaran 1",
      titleClass: "Mengenal Bagian Piano",
      level: "Dasar",
    },
  ];
  const reasons = [
    {
      titleReason: "Metode Interaktif",
      reason:
        "Kami menggunakan teknologi modern seperti latihan real-time dan feedback otomatis untuk pengalaman belajar yang lebih efektif.",
    },
    {
      titleReason: "Metode Interaktif",
      reason:
        "Kami menggunakan teknologi modern seperti latihan real-time dan feedback otomatis untuk pengalaman belajar yang lebih efektif.",
    },
    {
      titleReason: "Metode Interaktif",
      reason:
        "Kami menggunakan teknologi modern seperti latihan real-time dan feedback otomatis untuk pengalaman belajar yang lebih efektif.",
    },
    {
      titleReason: "Metode Interaktif",
      reason:
        "Kami menggunakan teknologi modern seperti latihan real-time dan feedback otomatis untuk pengalaman belajar yang lebih efektif.",
    },
  ];
  const testimoni = [
    {
      graduate: "Kelas Drum",
      reason:
        "Kami menggunakan teknologi modern seperti latihan real-time dan feedback otomatis untuk pengalaman belajar yang lebih efektif.",
      name: "Daniel",
      position: "Pemimpin - SMK Satu Nusa",
    },
    {
      graduate: "Kelas Piano",
      reason:
        "Platform ini sangat membantu saya memahami teknik dasar piano dengan mudah. Materinya lengkap, dan video tutorialnya sangat jelas. Saya sekarang lebih percaya diri dalam bermain piano!",
      name: "Dororo",
      position: "Siswa - SMK Wikrama Bogor",
    },
  ];
  return (
    <>
      <div className="container">
        <nav className="flex justify-between bg-black text-center gap-2 min-w-full content-around font-bold  px-10 py-10 text-white">
          <div className="logo w-1/12 self-center">
            <img src={logoImage} alt="logo-apala" />
          </div>
          <ul className="quick-link flex justify-around self-center w-9/12  px-10 ">
            <li>
              <a href="#Beranda">Beranda</a>
            </li>
            <li>
              <a href="#Kelas">Kelas</a>
            </li>
            <li>
              <a href="#Berlangganan">Berlangganan</a>
            </li>
            <li>
              <a href="#Testimoni">Testimoni</a>
            </li>
            <li>
              <a href="#Kontak">Kontak</a>
            </li>
          </ul>
          <ul className="Auth-link w-2/12 grid grid-cols-2 gap-5 self-center">
            <a
              href=""
              className="outline-3 outline-blue-400 py-2 hover:bg-blue-400 text-white transition-all duration-200 content-center rounded-xl"
            >
              Register
            </a>
            <Link
              to="/dashboard"
              className="outline-3 outline-blue-400 py-1 hover:bg-blue-400 text-white transition-all duration-200 content-center rounded-xl"
            >
              Login
            </Link>
          </ul>
        </nav>
        <header
          className="container px-6 font-inter max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0 text-white bg-black"
          id="Beranda"
        >
          <div className="lg:p-12 lg:flex-1 self-center">
            <h3 className="text-4xl font-bold  sm:text-3xl md:text-3xl">
              Belajar Musik Online dengan Cara yang Mudah & Menyenangkan!{" "}
            </h3>
            <img
              src={Banner}
              alt="Banner-Apala"
              className="mt-4 rounded-xl shadow-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            />
            <p className="lg:mt-10 sm:mt-4 sm:text-xl ">
              Kelas Musik Interaktif & Fleksibel untuk semua tingkat, dengan
              metode terstruktur, latihan praktis, dan bimbingan instruktur
              profesional..
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base hover:bg-blue-700 transition-all duration-300"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 ">
            <img
              src={Banner}
              alt="Banner-Apala"
              className="object-cover rounded-l-full"
            />
          </div>
        </header>
        {/* Section 1 - Learning Path */}
        <section className="Learning-path min-h-full py-10" id="Kelas">
          <div className="title-section text-black text-center ">
            <h1 className="font-bold text-3xl">Learning Path</h1>
            <p className="font-semibold mt-10 ">
              Learning path akan membantu Anda dalam belajar di Academy dengan
              kurikulum yang dibangun bersama pelaku industri ternama.
            </p>
          </div>
          <div className="carousel px-10 py-10 flex">
            <img
              src={prev}
              alt="tombol-sebelumnya"
              className="outline-black rounded-full outline-2 self-center cursor-pointer "
              onClick={(e) => e.target.velue}
            />
            {pathaways.map((path, i) => (
              <div
                key={i}
                className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-5"
              >
                <a href="#">
                  <img className="rounded-t-lg" src={Banner} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                      {path}
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            <img
              src={next}
              alt="tombol-selanjutnya"
              className="outline-black rounded-full outline-2 self-center cursor-pointer"
            />
          </div>
        </section>
        {/* Section 2 - Kelas */}
        <section className="Kelas h-full bg-blue-600 px-10 py-15">
          <div className="flex pb-10 justify-between w-1/9">
            <img
              src={prev}
              alt="tombol-sebelumnya"
              className="outline-black rounded-full outline-2 self-center cursor-pointer"
            />
            <img
              src={next}
              alt="tombol-selanjutnya"
              className="outline-black rounded-full outline-2 self-center cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 gap-3" id="Berlangganan">
            <div className="grid grid-cols-3">
              {classSteps.map((item, i) => (
                <div
                  key={i}
                  className="card max-w-sm bg-blue-50 border border-gray-200 rounded-lg shadow-lg shadow-blue-800 mx-5 text-gray-900 "
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={Banner}
                      alt="LessonImage"
                    />
                  </a>
                  <div className="p-5">
                    <p className=" font-semibold text-sm">{item.lesson}</p>
                    <h5 className="mb-2  font-bold tracking-tight ">
                      {item.titleClass}
                    </h5>
                    <p className="font-semibold text-sm">
                      Level : {item.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="title text-white grid ">
              <h1 className="font-bold text-3xl">Musisi Piano</h1>
              <p className="font-semibold ">
                <span>Music</span> 6 Kelas
              </p>
              <hr className="bg-blue-700" />
              <p className="font-semibold ">
                Kelas piano ini dirancang dengan learning path yang terstruktur
                untuk membantu Anda berkembang secara bertahap, dari pemula
                hingga mahir. Dengan metode pembelajaran yang sistematis dan
                interaktif, Anda akan membangun keterampilan bermain piano
                secara solid.
              </p>
            </div>
          </div>
        </section>
        {/* Section 3 - Perbedaan */}
        <section className="Alasan min-h-full px-10 py-20">
          <div className="title text-gray-900 text-center pb-20">
            <h3 className="font-bold text-3xl">Kenapa Apala Berbeda ?</h3>
            <p className="font-semibold mt-10 px-52">
              Apala menghadirkan pengalaman belajar musik yang interaktif,
              fleksibel, dan terjangkau. Dengan teknologi modern, siswa dapat
              belajar kapan saja, di mana saja, tanpa batasan. Nikmati kualitas
              premium dengan harga yang lebih hemat!
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="card max-w-sm bg-blue-600 border border-gray-200 rounded-4xl shadow-lg shadow-blue-800 mx-5 text-white "
              >
                <a href="#">
                  <img
                    className="rounded-t-4xl"
                    src={Banner}
                    alt="LessonImage"
                  />
                </a>
                <div className="p-5 text-center py-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight uppercase">
                    {item.titleReason}
                  </h5>
                  <p className="font-semibold text-sm">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section 4 - Promosi */}
        <section className="Promosi min-h-full py-10 px-10 bg-blue-600">
          <div className="title text-white text-center pb-10">
            <h3 className="font-bold text-3xl">
              Belajar Musik Jadi Lebih Mudah & Fleksibel!
            </h3>
          </div>
          <div className="banner min-w-full h-96" style={myStyle}>
            <div className="top-text bg-blue-600 text-white font-bold rounded-br-full absolute px-10 py-5 outline-3 outline-blue-700 uppercase text-base ">
              <h4>Promo 50%</h4>
            </div>
            {/* <div className="flex justify-between absolute place-self-center h-96 px-10">
            <img
              src={prev}
              alt="tombol-sebelumnya"
              className="outline-black rounded-full outline-2 self-center cursor-pointer"
            />
            <img
              src={next}
              alt="tombol-selanjutnya"
              className="outline-black rounded-full outline-2 self-center cursor-pointer"
            />
            </div> */}
          </div>
          <div className="grid grid-cols-4 gap-3 py-10">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700"
              >
                <div className="p-5 text-gray-900">
                  <img src={logoImage} alt="logo-card" />
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    {item.titleReason}
                  </h5>
                  <p className="">{item.reason}</p>
                  <a
                    href="#"
                    className="inline-flex mt-5 items-center px-3 w-full py-2 text-sm font-medium justify-between text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <p>Dapatkan Diskon</p>
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section 5 - Testimoni */}
        <section className="Testimoni min-h-full p-10" id="Testimoni">
          <div className="title flex justify-between">
            <h1 className="text-3xl font-bold">Apa Kata Mereka ?</h1>
            <div className="flex justify-between w-1/9">
              <img
                src={prev}
                alt="tombol-sebelumnya"
                className="outline-black rounded-full outline-2 self-center cursor-pointer w-1/3"
                onClick={(e) => setSlide(slide - 1)}
              />
              <img
                src={next}
                alt="tombol-selanjutnya"
                className="outline-black rounded-full outline-2 self-center cursor-pointer w-1/3"
                onClick={(e) => slide == testimoni.length ? setSlide(slide + 1) : setSlide(slide + 1)}
              />
            </div>
          </div>
          <div className="card relative flex flex-col md:flex-row w-full my-6 bg-blue-500 shadow-sm border border-slate-200 rounded-lg">
            <div className="p-6">
              <div className="mb-4 rounded-full bg-blue-800 py-1 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-1/4 font-semibold">
                {testimoni[slide].graduate}
              </div>
              <h4 className="mb-2 text-white text-2xl font-semibold">
                {testimoni[slide].reason}
              </h4>
              <p className="font-semibold text-white pt-24">
                {" "}
                {testimoni[slide].name}
              </p>
              <p className="font-semibold text-white">
                {testimoni[slide].position}
                
              </p>
            </div>
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
              <img
                src={testimoniImage}
                alt="card-image"
                className="h-full w-full rounded-md md:rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        {/* Section 6 - Contact */}
        <section
          className="contact h-[450px] bg-blue-600 grid grid-cols-3 gap-5 p-10 text-white"
          id="Kontak"
        >
          <div className="Detail grid grid-rows-3 gap-2">
            <div className="flex items-center justify-between">
              <img src={logoImage} alt="ImageLogo" />
              <h1 className="uppercase font-bold text-2xl pr-10">
                apala company
              </h1>
            </div>
            <p className="font-semibold">Jl. Musik Harmoni No. 21, Jakarta</p>
            <div className="grid grid-cols-4 gap-4">
              <img src={Facebook} alt="FacebookLogo" />
              <img src={instagram} alt="InstagramLogo" />
              <img src={youtube} alt="YoutubeLogo" />
              <img src={twitter} alt="TwitterLogo" />
            </div>
          </div>
          <div className="Quick Links p-10">
            <h1 className="font-bold text-2xl pb-10">Quick Links</h1>
            <ul className="font-semibold grid grid-rows-4 gap-5">
              <li>Tentang Kami</li>
              <li>Learning Path</li>
              <li>Kontak Kami</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="contact p-10">
            <h1 className="font-bold text-2xl">Contact</h1>
            <ul className="grid grid-rows-2 gap-5 pt-10 font-semibold pr-20">
              <li className="flex justify-between items-center ">
                <img src={mail} alt="imageLogo" />
                <p className="">Support@apala.com</p>
              </li>
              <li className="flex justify-between items-center">
                <img src={chat} alt="imageLogo" />
                <p>+62 812-3456-7890</p>
              </li>
            </ul>
          </div>
        </section>
        {/* Footer */}
        <hr className="" />
        <footer className="bg-blue-600 flex justify-between p-10 text-white">
          <h1 className="font-bold text-xl w-1/2">
            © 2025 Apala Group. Semua Hak Dilindungi.
          </h1>
          <div className="grid grid-cols-2 gap-1 font-semibold">
            <a href="/terms">Terms</a>
            <a href="/terms">Privacy</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
