import moment, { Moment } from 'moment';

const YMD = 'YYYY:MM:DD';
const YMD_HMS = 'YYYY:MM:DD hh:mm:ss';

export function toTimeStamp(date: Moment): number {
  if (!date) return;
  return date.valueOf();
}

export function formatTimeStamp(time: number, format: string = YMD_HMS): string {
  return moment(time).format(format);
}
