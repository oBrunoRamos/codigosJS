function validarEmail(email) {
    // Expressão regular para validar e-mails (simplificada)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  console.log(validarEmail('teste@rede.ulbra.com.br'));
