/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import dayjs from "dayjs";
import { FcLeave } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";

const CalendarAppointment = ({ bookings, selectDate, handleConfirm }) => {
  return (
    <div className="flex-col justify-center p-1 overflow-y-auto overflow-x-hidden h-[17rem] ">
      <h1 className="font-bold text-2xl text-center pb-2">Bookings</h1>
      {[...bookings]
        .sort((a, b) => a.fecha - b.fecha)
        .filter(
          (booking) =>
            dayjs(booking.fecha).toDate().toDateString() ===
            selectDate.toDate().toDateString()
        ).length > 0 ? (
        [...bookings]
          .sort((a, b) => a.fecha - b.fecha)
          .filter(
            (booking) =>
              dayjs(booking.fecha).toDate().toDateString() ===
              selectDate.toDate().toDateString()
          )
          .map((booking) => (
            <div className="flex  border-zinc-500 border-2" key={booking.id}>
              <div className="flex w-full flex-col mb-2  p-2">
                <p className="text-black">Booking programado</p>
                <p>
                  Nombres: <strong> {booking.aspirante.nombres}</strong>
                </p>
                <p>
                  Correo: <strong> {booking.aspirante.correo}</strong>
                </p>
                <p className="text-black">
                  Hora: {dayjs(booking.fecha).toDate().toLocaleTimeString()}
                </p>
              </div>
              <div className="flex mx-auto justify-center place-content-center items-center justify-items-center">
                <FaCheck
                  onClick={(e) => handleConfirm(e, booking)}
                  className="w-14 h-14 hover:cursor-pointer text-green-600 rounded-full hover:bg-green-100 p-1"
                />
              </div>
            </div>
          ))
      ) : (
        <div className="container flex flex-col m-3">
          <span className="text-gray-400">No hay bookings para ti </span>
          <FcLeave className="w-20 h-20" />
        </div>
      )}
    </div>
  );
};

export default CalendarAppointment;
