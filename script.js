 const form = document.getElementById('meuFormulario');
    const status = document.getElementById('status');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const dados = {
        nome: form.nome.value,
        email: form.email.value
      };

      try {
        const resposta = await fetch("https://script.google.com/macros/s/AKfycbybKWRek_JhdPNjvoA-OYDlquYHI0tvrX-V37V_-eExSjkRKp2jhDTzZK4Q1lN-bvmV/exec", {
          method: "POST",
          body: JSON.stringify(dados),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const resultado = await resposta.json();

        if (resultado.status === 'sucesso') {
          status.textContent = "Dados enviados com sucesso!";
          form.reset();
        } else {
          status.textContent = "Erro ao enviar: " + resultado.mensagem;
        }
      } catch (erro) {
        status.textContent = "Erro ao conectar ao servidor.";
        console.error(erro);
      }
    });   
