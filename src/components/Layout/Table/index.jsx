"use client";

import Link from "next/link";

import TableEdit from "@/components/UI/TableEdit";
import TableRemove from "@/components/UI/TableRemove";

// import DataDiff from "@/utils/DataDiff"

const Table = ({ title, parameters, tableName, data }) => {
  return (
    <div className="w-full">
      <div
        className="bg-white font-medium overflow-x-scroll text-black"
        style={{ width: "calc(78.125vw - 100px)", height: "calc(72vh - 40px)" }}
      >
        <div
          className="flex text-left justify-start align-center"
          style={{ width: "240px" }}
        >
          {title.map((title, index) => (
            <ul key={index} style={{ minWidth: "240px", maxWidth: "300px" }}>
              <li
                className="h-full box-content flex items-center font-bold border-b border-gray-300"
                style={{ minHeight: "52px" }}
              >
                {title}
              </li>
            </ul>
          ))}
        </div>
        {data?.map((dataItem) => (
          <div
            className="flex text-left justify-start align-center"
            style={{ width: "240px" }}
            key={dataItem.id}
          >
            {parameters.map((param, index) => (
              <ul
                className="grid"
                key={index}
                style={{ minWidth: "240px", minHeight: "50px" }}
              >
                <li
                  className="box-content flex items-center  border-b border-gray-300 p-2"
                  style={{ minHeight: "50px" }}
                >
                  {dataItem[param]}
                </li>
              </ul>

              ///

              // aqui o datadiff
              

              // {tableName === "estoque" && (
                
              // )}

              //
            ))}
            <Link
              href={{
                pathname: `/dashboard/${tableName}/edit`,
                query: { id: dataItem.id },
              }}
            >
              <TableEdit></TableEdit>
            </Link>
            <div className="ml-2">
              <TableRemove id={dataItem.id} table={tableName}></TableRemove>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
