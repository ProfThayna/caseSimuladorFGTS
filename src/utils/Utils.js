import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfigFile from '@tailwindConfig'

export const tailwindConfig = () => {
  return resolveConfig(tailwindConfigFile)
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const formatThousands = (value) => Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

 export const formatNumber = (value) => Intl.NumberFormat('en-US', {
   style: 'decimal',
   maximumSignificantDigits: 3,
   notation: 'compact',
}).format(value);

// Função para converter "HH:MM:SS" para segundos
export const convertDurationToSeconds = (duration) => {
  if (!duration) return 0; // Se for nulo ou indefinido, retorna 0
  const [hours, minutes, seconds] = duration.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds; // Converte para segundos
};

// Função para formatar segundos para "HH:MM"
export const formatSecondsToHoursMinutes = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};
