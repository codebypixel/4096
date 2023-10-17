"use client";

import Img from "@img/banner.png";
import Image from "next/image";

import Link from "next/link";

import ButtonDelete from "@/components/UI/TableRemove";
import ButtonEdit from "@/components/UI/TableEdit";

function EquipamentoCard({
  EquipamentoTipo,
  EquipamentoID,
  EquipamentoMarca,
  EquipamentoStatus,
}) {
  let EquipamentoStatusWrite = "";

  if (EquipamentoStatus === 0) {
    EquipamentoStatusWrite = "Disponível";
  } else if (EquipamentoStatus === 1) {
    EquipamentoStatusWrite = "Alugado";
  }

  return (
    <div className="card bg-white rounded-lg shadow-md w-[320px] h-[360px] text-black">
      <Image src={Img} alt={EquipamentoTipo} className="rounded-lg" />
      <p className="pt-4 pl-2">
        <b>Id: </b>
        {EquipamentoID}
      </p>
      <p className="pl-2">
        <b>Tipo: </b>
        {EquipamentoTipo}
      </p>
      <p className="pl-2">
        <b>Marca: </b>
        {EquipamentoMarca}
      </p>
      <p className="pl-2">
        <b>Status: </b>
        {EquipamentoStatusWrite}
      </p>
      <div className="flex flex-row justify-end items-end mt-7 mr-8 w-[320px]">
        <div className="mr-2">
        <Link
              href={{
                pathname: `/dashboard/equipamentos/edit`,
                query: { id: EquipamentoID },
              }}
            >
          <ButtonEdit />{" "}
        </Link>
        </div>
        <div className="mr-2">
          <ButtonDelete id={EquipamentoID} table={"equipamentos"} />{" "}
        </div> <div className="mr-2">
          <ButtonDelete id={EquipamentoID} table={"equipamentos"} />{" "}
        </div>
      </div>
    </div>
  );
}

export default EquipamentoCard;
