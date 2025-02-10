export const mockApi = {
  sendVerificationCode: (phone: string) => {
    console.log(`Código enviado a: ${phone}`);
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  },

  verifyCode: (code: string) => {
    console.log(`Código recibido: ${code}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code === "1234") alert("Código correcto");
        else alert("Código incorrecto");
      }, 1000);
    });
  },
};
