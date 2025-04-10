export async function validarTelefone(numero) {
    const apiKey = import.meta.env.VITE_PHONE_API_KEY;
  
    const response = await fetch(`https://veriphone.p.rapidapi.com/verify?phone=${numero}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "veriphone.p.rapidapi.com"
      }
    });
  
    const data = await response.json();
    return data.phone_valid;
}
  