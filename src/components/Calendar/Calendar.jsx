import { useEffect, useState } from "react";

import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { selectAgenda } from "../../store/Mentor/MentorAppSlice";
import CalendarAppointment from "./CalendarAppointment";
import CalendarMatriz from "./CalendarMatriz";
import {
  addEntrevistas,
  selectEntrevistas,
} from "../../store/Entrevista/EntrevistaAppSlice";
import {
  removeBookings,
  selectBooking,
  selectBookingS,
} from "../../store/Booking/BookingAppSlice";
import CalendarInterview from "./CalendarInterview";
import Swal from "sweetalert2";
import { createEntrevistaService } from "../../service/entrevista";

const Calendar = () => {
  const days = ["D", "L", "M", "X", "J", "V", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [agendas, setAgendas] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [entrevista, setEntrevista] = useState([]);

  const agendaStore = useSelector(selectAgenda);
  const bookingStore = useSelector(selectBookingS);
  const entrevistaStore = useSelector(selectEntrevistas);

  const dispatch = useDispatch();

  useEffect(() => {
    if (agendaStore.length > 0) {
      // console.log(agendaStore);
      setAgendas(agendaStore);
      defaultDates();
    }
    if (bookingStore.length > 0) {
      setBookings(bookingStore);
    }
    if (entrevistaStore.length > 0) {
      setEntrevista(entrevistaStore);
    }
  }, [agendaStore, agendas, bookingStore]);

  const defaultDates = () => {
    const date = [...agendaStore].sort((a, b) => b.fecha - a.fecha);
    if (dayjs(date[0].fecha) > currentDate) {
      setSelectDate(dayjs(date[0].fecha));
    } else {
      setSelectDate(currentDate);
    }

    setToday(dayjs(agendaStore[0].fecha));
  };

  const setColorDates = (date = null) => {
    if (date) {
      return bookings.find(
        (booking) =>
          dayjs(booking.fecha).toDate().toDateString() ==
          date.toDate().toDateString()
      ) ||
        entrevista.find(
          (booking) =>
            dayjs(booking.fecha).toDate().toDateString() ==
            date.toDate().toDateString()
        )
        ? "bg-green-200 text-black"
        : "";
    }
    return "";
  };

  const handleConfirmBooking = (e, booking) => {
    e.preventDefault();
    Swal.fire({
      title: `¿Seguro que confirmar este booking ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, confirmar entrevista!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const entrevista = { asistida: false, booking_id: booking.id };
        const response = await createEntrevistaService(entrevista);
        if (response.status == 200) {
          const entrevistasResponse = dispatch(addEntrevistas(response.data));
          const bookingResponse = dispatch(removeBookings(booking));
          setEntrevista(entrevistasResponse);
          setBookings(!bookingResponse ? [] : bookingResponse);
          return Swal.fire({
            title: "Entrevista creada!",
            icon: "success",
          });
        }
        return Swal.fire({
          title: "Error",
          text: response.data.message,
          icon: "error",
        });
      }
    });
  };

  return (
    agendas.length > 0 && (
      <div className="flex gap-5 bg-white sm:divide-x justify-around mx-auto md:w-[80%] lg:w-[75%] sm:w-full p-2 items-center sm:flex-row flex-col">
        <CalendarMatriz
          currentDate={currentDate}
          days={days}
          today={today}
          selectDate={selectDate}
          setToday={setToday}
          setSelectDate={setSelectDate}
          setColorDays={setColorDates}
        />
        <div className="h-[40rem] w-full sm:px-5 ">
          <h1 className=" font-semibold text-xl p-1">
            Agenda para <strong>{selectDate.toDate().toDateString()}</strong>
          </h1>
          <br />
          <div className="flex-col gap-3 mx-auto h-[35rem]">
            <CalendarAppointment
              bookings={bookings}
              selectDate={selectDate}
              handleConfirm={handleConfirmBooking}
            />
            <hr className="bg-black " />
            <CalendarInterview
              interviews={entrevista}
              selectDate={selectDate}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Calendar;
