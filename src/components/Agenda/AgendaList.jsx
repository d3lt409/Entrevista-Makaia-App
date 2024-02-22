import dayjs from "dayjs";
import React from "react";
import { BsHourglassBottom } from "react-icons/bs";
import AgendaItem from "./AgendaItem";

const AgendaList = ({
  agendas,
  selectDate,
  hangleUpdateAgenda,
  handledeleteAgenda,
}) => {
  return (
    <div className="flex flex-col justify-center  mx-auto ">
      {[...agendas]
        .sort((a, b) => a.fecha - b.fecha)
        .filter(
          (agenda) =>
            dayjs(agenda.fecha).toDate().toDateString() ===
            selectDate.toDate().toDateString()
        ).length > 0 ? (
        [...agendas]
          .sort((a, b) => a.fecha - b.fecha)
          .filter(
            (agenda) =>
              dayjs(agenda.fecha).toDate().toDateString() ===
              selectDate.toDate().toDateString()
          )
          .map((agenda) => (
            <AgendaItem
              key={agenda.id}
              agenda={agenda}
              onDelete={handledeleteAgenda}
              onUpdate={hangleUpdateAgenda}
            />
          ))
      ) : (
        <div className="flex flex-col mx-auto items-center">
          <BsHourglassBottom className="w-20 h-20" />
        </div>
      )}
    </div>
  );
};

export default AgendaList;
