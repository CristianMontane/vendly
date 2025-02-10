export const mockApi = {
  sendVerificationCode: (phone: string) => {
    //console.log(`Código enviado a: ${phone}`);
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  },

  verifyCode: (code: string) => {
    //console.log(`Código recibido: ${code}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code === "1234") {
          resolve(true); // Se debe llamar resolve para indicar éxito
        } else {
          alert("Código incorrecto");
          reject(new Error("Código incorrecto")); // Se debe llamar reject para indicar error
        }
      }, 1000);
    });
  },
};
