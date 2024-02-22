import React from "react";

import dayjs from "dayjs";
import { FcLeave } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setEntrevista } from "../../store/Entrevista/EntrevistaAppSlice";
import { FaCalendarCheck } from "react-icons/fa";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CalendarInterview = ({ interviews, selectDate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateInterview = (e, interview) => {
    e.preventDefault();
    Swal.fire({
      title: `¿Seguro que deseas iniciar la entrevista ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, iniciar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        localStorage.setItem("entrevista_id", interview.id);
        dispatch(setEntrevista(interview));
        navigate("/form");
      }
    });
  };
  return (
    <div className="flex-col justify-center p-1 overflow-y-auto overflow-x-hidden w-full  h-[17rem] my-2 ">
      <h1 className="font-bold text-2xl text-center pb-2">
        Entrevistas programadas
      </h1>
      {[...interviews]
        .sort((a, b) => a.fecha - b.fecha)
        .filter(
          (interview) =>
            dayjs(interview.fecha).toDate().toDateString() ===
            selectDate.toDate().toDateString()
        ).length > 0 ? (
        [...interviews]
          .sort((a, b) => a.fecha - b.fecha)
          .filter(
            (interview) =>
              dayjs(interview.fecha).toDate().toDateString() ===
              selectDate.toDate().toDateString()
          )
          .map((interview) => (
            <div className="flex  border-zinc-500 border-2" key={interview.id}>
              <div className="flex w-full flex-col mb-2  p-2">
                <p className="text-black">Entrevista programada</p>
                <p>
                  Nombres: <strong> {interview.aspirante.nombres}</strong>
                </p>
                <p>
                  Correo: <strong> {interview.aspirante.correo}</strong>
                </p>
                <p className="text-black">
                  Hora: {dayjs(interview.fecha).toDate().toLocaleTimeString()}
                </p>
              </div>
              <div className="flex mx-auto justify-center place-content-center items-center justify-items-center">
                <FaCalendarCheck
                  onClick={(e) => handleUpdateInterview(e, interview)}
                  className="w-14 h-14 hover:cursor-pointer text-blue-600 p-1 "
                />
              </div>
            </div>
          ))
      ) : (
        <div className="container flex flex-col m-3">
          <span className="text-gray-400">No hay entrevistas asignadas </span>
          <FcLeave className="w-20 h-20" />
        </div>
      )}
    </div>
  );
};

export default CalendarInterview;
