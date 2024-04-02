export const formatDate = (datestring: string) => {
  const date = new Date(datestring);

  // Obtener el día de la semana en formato abreviado (ej. JUE)
  const diaSemana = date
    .toLocaleDateString("es-ES", { weekday: "short" })
    .toUpperCase();

  // Obtener el día del mes (ej. 04)
  const dia = ("0" + date.getDate()).slice(-2);

  // Obtener el nombre abreviado del mes en español (ej. ABR)
  const mes = date
    .toLocaleDateString("es-ES", { month: "short" })
    .toUpperCase();

  // Obtener el año (ej. 2024)
  const año = date.getFullYear();

  return `${diaSemana} ${dia} ${mes} ${año}`;
};

export const formatHour = (timeString: string) => {
  const time = new Date(timeString);

  const hora = time.getHours();
  const minutos = ('0' + time.getMinutes()).slice(-2);

  return `${hora}:${minutos}`;
}
