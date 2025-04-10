export function calcularSaque(saldo) {
    if (saldo <= 500) {
      return saldo * 0.5;
    } else if (saldo <= 1000) {
      return saldo * 0.4 + 50;
    } else if (saldo <= 5000) {
      return saldo * 0.3 + 150;
    } else if (saldo <= 10000) {
      return saldo * 0.2 + 650;
    } else if (saldo <= 15000) {
      return saldo * 0.15 + 1150;
    } else if (saldo <= 20000) {
      return saldo * 0.1 + 1900;
    } else {
      return saldo * 0.05 + 2900;
    }
  }
  