import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  var options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  return <time dateTime={dateString}>{new Date(dateString).toLocaleDateString('pt-BR', options)}</time>
}
