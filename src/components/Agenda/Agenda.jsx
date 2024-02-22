import { useEffect, useState } from "react";

import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { months, generateDate } from "../../utils/calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAgenda,
  removeAgenda,
  updateHourAgenda,
} from "../../store/Mentor/MentorAppSlice";

import { PiClockAfternoon } from "react-icons/pi";
import Swal from "sweetalert2";
import { deleteAgenda, updateAgenda } from "../../service/agenda";
import AgendaList from "./AgendaList";
import CalendarMatriz from "../Calendar/CalendarMatriz";

// Agregar los plugins necesarios
dayjs.extend(utc);
dayjs.extend(timezone);

const Agenda = () => {
  const dispatch = useDispatch();

  const days = ["D", "L", "M", "X", "J", "V", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [agendas, setAgendas] = useState([]);
  // const [bookings, setBookings] = useState([]);

  const agendaStore = useSelector(selectAgenda);

  useEffect(() => {
    if (agendaStore.length > 0) {
      // console.log(agendaStore);
      setAgendas(agendaStore);
      defaultDates();
    }
  }, [agendaStore, agendas]);

  const defaultDates = () => {
    const date = [...agendaStore].sort((a, b) => b.fecha - a.fecha);
    if (dayjs(date[0].fecha) > currentDate) {
      setSelectDate(dayjs(date[0].fecha));
    } else {
      setSelectDate(currentDate);
    }

    setToday(dayjs(agendaStore[0].fecha));
  };

  const hangleUpdateAgenda = async (agenda) => {
    const newAgenda = { ...agenda };
    const { value: time } = await Swal.fire({
      title: "Ingrese nueva hora",
      input: "time",
      showCancelButton: true,
      didOpen: () => {
        const today = dayjs(agenda.fecha).toISOString();
        Swal.getInput().min = today.split("T")[1];
      },
    });
    if (time) {
      const [hours, minutes] = time.split(":").map(Number);
      const newDate = dayjs(newAgenda.fecha)
        .tz(dayjs.tz.guess()) // Establecer la zona horaria local
        .set("hour", hours)
        .set("minute", minutes)
        .format("YYYY-MM-DDTHH:mm:ss");
      newAgenda.fecha = newDate;
      const result = await updateAgenda(newAgenda);
      if (result.status === 200) {
        const newAgendas = dispatch(updateHourAgenda(newAgenda));
        setAgendas(newAgendas);
        return Swal.fire({
          title: "Actualizado!",
          text: `Nueva hora ${time}`,
          icon: "success",
        });
      }
      return Swal.fire({
        title: "Error",
        text: response,
        icon: "error",
      });
    }
  };

  const handledeleteAgenda = (agenda) => {
    Swal.fire({
      title: `¿Seguro que deseas eliminar la hora ${agenda.fecha} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borre eso!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteAgenda(agenda.id);
        if (response.status == 200) {
          const newAgendas = dispatch(removeAgenda(agenda));
          setAgendas(newAgendas);
          return Swal.fire({
            title: "Borrado!",
            text: "Esa hora está fuera :)",
            icon: "success",
          });
        }
        return Swal.fire({
          title: "Error",
          text: response,
          icon: "error",
        });
      }
    });
  };

  return (
    agendas.length > 0 && (
      <div className="flex gap-5 bg-white sm:divide-x justify-around mx-auto md:w-[80%] lg:w-[70%] sm:w-full p-2 items-center sm:flex-row flex-col">
        <CalendarMatriz
          currentDate={currentDate}
          days={days}
          today={today}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          setToday={setToday}
        />
        <div className="w-full p-2">
          <div className="flex gap-5 mx-auto items-center flex-col">
            <p className="text-violet-800 font-semibold text-lg px-4">
              Agregar hora
            </p>
            <button type="button">
              <PiClockAfternoon className="w-20 h-20 text-green-800 hover:animate-pulse" />
            </button>
          </div>
          <div className="p-3 h-[19rem] overflow-y-auto">
            <h5 className="text-gray-600 font-bold text-2xl text-center p-1">
              Disponibilidad
            </h5>
            <AgendaList
              agendas={agendas}
              selectDate={selectDate}
              hangleUpdateAgenda={hangleUpdateAgenda}
              handledeleteAgenda={handledeleteAgenda}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Agenda;
