"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Home from "@img/icons/icon_home.svg";
import Cliente from "@img/icons/icon_user.svg";
import Equipamentos from "@img/icons/icon_equipamentos.svg";
import Estoque from "@img/icons/icon_estoque.svg";
import Documentos from "@img/icons/icon_doc.svg";
import Configuracoes from "@img/icons/icon_config.svg";

const Sidebar = () => {

  return (
    <div
      className="w-[220px] h-screen bg-[#10111C] flex justify-start drop-shadow-md text-white"
    >
      <div className="flex flex-col justify-center ml-4 font-sans font-semibold text-lg">
        <Link href="/dashboard">
          <div className="flex flex-row align-center">
            <Image src={Home} alt="Home" width={32} height={32} priority />
            <p className="ml-2">Home</p>
          </div>
        </Link>
        <Link href="/dashboard/clientes">
          <div className="flex flex-row align-center mt-2">
            <Image src={Cliente} alt="Home" width={32} height={32} priority />
            <p className="ml-2">Clientes</p>
          </div>
        </Link>
        <Link href="/dashboard/equipamentos">
          <div className="flex flex-row align-center mt-2">
            <Image src={Equipamentos} alt="Home" width={32} height={32} priority />
            <p className="ml-2">Equipamentos</p>
          </div>
        </Link>
        <Link href="/dashboard/estoque">
          <div className="flex flex-row align-center mt-2">
            <Image src={Estoque} alt="Home" width={32} height={32} priority />
            <p className="ml-2">Estoque</p>
          </div>
        </Link>
        <Link href="/dashboard/documentos">
          <div className="flex flex-row align-center mt-2">
            <Image src={Documentos} alt="Home" width={32} height={32} priority />
            <p className="ml-2">Documentos</p>
          </div>
        </Link>
        <Link href="/dashboard/configuracoes">
          <div className="flex flex-row align-center mt-2">
            <Image src={Configuracoes} alt="Home" width={32} height={32} priority />
            <p className="ml-2">Configurações</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
