/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  aspiracionProyectoDeVidaOptions,
  backgroundITOptions,
  disponibilidadDeTiempoOptions,
  eneagramaOptions,
  experienciaLaboralOptions,
  formParams,
  idiomasOptions,
  interesOptions,
  manejoDeSistemasOptions,
  nivelCompetenciaOptions,
  redDeApoyoOptions,
  tieneElPerfilOptions,
} from "./parametersJson";
import { useForm } from "../../hooks/useForm";
import FormInput from "./FormInput";
import { textoSeparadoPorEspacios } from "../../utils";
import FormSelect from "./FormSelect";
import { createForm } from "../../service/formulario";
import { selectEntrevista } from "../../store/Entrevista/EntrevistaAppSlice";

const Form = () => {
  const [entrevista, setEntrevista] = useState({
    id: null,
    fecha: null,
    asistida: false,
    booking_id: 0,
    aspirante: {},
    mentor: {},
  });
  const {
    puntajeTestGorilla,
    eneagrama,
    cohorte,
    cooperante,
    backgroundIT,
    idiomas,
    profesionEducacion,
    estudioActual,
    trabajoActual,
    disponibilidadDeTiempo,
    intereses,
    experienciaLaboral,
    aspiracionProyectoDeVida,
    redDeApoyo,
    trabajoEnEquipo,
    comunicacionAsertiva,
    respetoPorLaDiversidad,
    manejoDeEmociones,
    autogestion,
    manejoDeTiempo,
    estiloDeAprendizaje,
    orientacionAlLogro,
    capacidadDeCompromiso,
    manejoDeSistemas,
    equipoYConectividadOptima,
    riesgoDeDesercion,
    anotacionPsicosocial,
    alertaPsicosocial,
    tieneElPerfil,
    comentario,
    onInputChange,
  } = useForm(formParams);

  const entrevistaSelector = useSelector(selectEntrevista);

  useEffect(() => {
    if (entrevistaSelector.id) {
      setEntrevista(entrevistaSelector);
    }
  }, [entrevistaSelector]);

  const handleSubmit = async () => {
    const newForm = await createForm();
  };

  return (
    <div className="relative w-full flex flex-col justify-center overflow-hidden">
      <div className="w-full p-6 mx-auto bg-white dark:bg-zinc-700 rounded-3xl shadow-md max-w-2xl ">
        <h1 className="text-3xl font-semibold text-center dark:text-gray-100 underline">
          Entrevista
        </h1>
        <h3 className="text-xl font-semibold text-center dark:text-gray-100">
          {entrevista.aspirante.nombres}
        </h3>
        <form className="mt-6" onSubmit={handleSubmit}>
          <FormInput
            name={"puntajeTestGorilla"}
            value={puntajeTestGorilla}
            onInputChange={onInputChange}
            type={"number"}
            label={textoSeparadoPorEspacios("puntajeTestGorilla")}
          />
          <FormSelect
            name={"eneagrama"}
            value={eneagrama}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("eneagrama")}
            options={eneagramaOptions}
          />
          <FormInput
            name={"cohorte"}
            value={cohorte}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("cohorte")}
          />
          <FormInput
            name={"cooperante"}
            value={cooperante}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("cooperante")}
          />
          <FormSelect
            name={"backgroundIT"}
            value={backgroundIT}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("backgroundIT")}
            options={backgroundITOptions}
          />
          <FormSelect
            name={"idiomas"}
            value={idiomas}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("idiomas")}
            options={idiomasOptions}
          />
          <FormInput
            name={"profesionEducacion"}
            value={profesionEducacion}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("profesionEducacion")}
          />
          <FormInput
            name={"estudioActual"}
            value={estudioActual}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("estudioActual")}
          />
          <FormInput
            name={"trabajoActual"}
            value={trabajoActual}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("trabajoActual")}
          />
          <FormSelect
            name={"disponibilidadDeTiempo"}
            value={disponibilidadDeTiempo}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("disponibilidadDeTiempo")}
            options={disponibilidadDeTiempoOptions}
          />
          <FormSelect
            name={"intereses"}
            value={intereses}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("intereses")}
            options={interesOptions}
            isMultiple={true}
          />
          <FormSelect
            name={"experienciaLaboral"}
            value={experienciaLaboral}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("experienciaLaboral")}
            options={experienciaLaboralOptions}
          />
          <FormSelect
            name={"aspiracionProyectoDeVida"}
            value={aspiracionProyectoDeVida}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("aspiracionProyectoDeVida")}
            options={aspiracionProyectoDeVidaOptions}
          />
          <FormSelect
            name={"redDeApoyo"}
            value={redDeApoyo}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("redDeApoyo")}
            options={redDeApoyoOptions}
          />
          <FormSelect
            name={"trabajoEnEquipo"}
            value={trabajoEnEquipo}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("trabajoEnEquipo")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"comunicacionAsertiva"}
            value={comunicacionAsertiva}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("comunicacionAsertiva")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"respetoPorLaDiversidad"}
            value={respetoPorLaDiversidad}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("respetoPorLaDiversidad")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"manejoDeEmociones"}
            value={manejoDeEmociones}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("manejoDeEmociones")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"autogestion"}
            value={autogestion}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("autogestion")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"manejoDeTiempo"}
            value={manejoDeTiempo}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("manejoDeTiempo")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"estiloDeAprendizaje"}
            value={estiloDeAprendizaje}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("estiloDeAprendizaje")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"orientacionAlLogro"}
            value={orientacionAlLogro}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("orientacionAlLogro")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"capacidadDeCompromiso"}
            value={capacidadDeCompromiso}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("capacidadDeCompromiso")}
            options={nivelCompetenciaOptions}
          />
          <FormSelect
            name={"manejoDeSistemas"}
            value={manejoDeSistemas}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("manejoDeSistemas")}
            options={manejoDeSistemasOptions}
          />
          <div className="flex mx-auto items-center place-content-center justify-center me-4">
            <label
              htmlFor="green-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {textoSeparadoPorEspacios("equipoYConectividadOptima")}
            </label>
            <input
              type="checkbox"
              value={equipoYConectividadOptima}
              className="w-4 h-4 m-3"
            />
          </div>
          <FormInput
            name={"riesgoDeDesercion"}
            value={riesgoDeDesercion}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("riesgoDeDesercion")}
          />
          <FormInput
            name={"anotacionPsicosocial"}
            value={anotacionPsicosocial}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("anotacionPsicosocial")}
          />
          <FormInput
            name={"alertaPsicosocial"}
            value={alertaPsicosocial}
            onInputChange={onInputChange}
            type={"text"}
            label={textoSeparadoPorEspacios("alertaPsicosocial")}
          />
          <FormSelect
            name={"tieneElPerfil"}
            value={tieneElPerfil}
            onInputChange={onInputChange}
            label={textoSeparadoPorEspacios("tieneElPerfil")}
            options={tieneElPerfilOptions}
          />
          <div className="flex-col flex ">
            <span className=" text-sm font-medium text-gray-900 dark:text-gray-100">
              {textoSeparadoPorEspacios("comentario")}
            </span>
            <textarea value={comentario} rows={4} className="m-1" />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
