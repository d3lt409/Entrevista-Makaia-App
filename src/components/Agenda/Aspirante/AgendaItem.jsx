import dayjs from "dayjs";
import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const AgendaItem = ({ agenda, onDelete, onUpdate }) => {
  return (
    <div
      className="flex hover:bg-slate-300 border-zinc-500 border-2"
      key={agenda.id}
    >
      <div className="flex w-full flex-col mx-auto place-content-center mb-2 p-2">
        <p className="text-black text-xl text-center">
          Hora: {dayjs(agenda.fecha).toDate().toLocaleTimeString()}
        </p>
      </div>
      <div className="px-3 flex mx-auto justify-center place-content-center gap-3 items-center justify-items-center">
        <MdDeleteForever
          onClick={() => onDelete(agenda)}
          className="w-14 h-14 hover:animate-bounce hover:cursor-pointer"
        />
        <GrUpdate
          onClick={() => onUpdate(agenda)}
          className="w-10 h-10 hover:animate-spin hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AgendaItem;
