import React from "react";
import logo from "../assets/img-producto.png";
import Header from "../helper/Header";
import FormLogin from "./login/FormLogin";

const Home = () => {
  return (
    <section className="container mx-auto ">
      <div className="divFondo md:h-[140%] h-[170%]"></div>
      <Header />

      <div className="main mt-[8%] ml-[3%] w-auto md:w-[30%] mb-0 ">
        <p className="font-bold p-2 ">
          ✦⭑ El mejor contenido para tu smartphone.
        </p>
      </div>
      <section className="container h-[90vh] grid grid-cols-1 md:grid-cols-8 -mt-[2%] md:m-5">
        <section className="md:col-span-5 flex items-center justify-center ">
          <div className="">
            <h1 className="md:text-6xl text-5xl text-white m-5 md:-mt-[15%] mt-[10%] ">
              Encuentra tu mejor estilo
              <br /> para tu smartphone.
            </h1>
            <p className="text-gray-400 md:text-s text-ms m-auto p-3">
              Somos una tienda en línea que ofrece una amplia variedad de
              dispositivos móviles de última generación, así como una gran
              selección de accesorios para personalizar y proteger tu
              dispositivo. <br />
              En nuestra tienda, ofrecemos una amplia selección de dispositivos
              móviles de última generación, desde teléfonos inteligentes hasta
              tabletas y wearables. Además, contamos con una gran variedad de
              accesorios, como fundas, protectores de pantalla, cargadores,
              auriculares y mucho más, para que puedas personalizar y proteger
              tu dispositivo. <br />
              Somos una empresa comprometida con la calidad y contamos con un
              equipo de expertos en tecnología que están disponibles para
              ayudarte en cada paso del proceso de compra, brindando
              asesoramiento y ofreciendo precios competitivos. La tienda se
              enfoca principalmente en brindar una experiencia excepcional al
              cliente, lo que les permite encontrar todo lo que necesitan para
              mejorar y personalizar su experiencia móvil.
            </p>
          </div>
        </section>
        <section className="md:col-span-3">
          <img className="pt-5 " src={logo} alt="" />
        </section>
        <div className="md:-mt-[55%] -mt-[2%] md:ml-[160%] ml-0 xl:w-[150%]">
          <a
            target="_blank"
            href="https://github.com/jaimezzapata/final-metodologias"
          >
            <button className="BtnImg p-5  w-full    ">Contáctanos</button>
          </a>
        </div>
        {/* ///FORMULARIO  */}
      </section>
      <div className="container-formSesion">
        <div className="formDetras  md:ml-[28.4%]  md:mt-[13%]  "></div>
        <div className="formHome md:-mt-[31%] mt-[150%]">
          {" "}
          <FormLogin />{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
