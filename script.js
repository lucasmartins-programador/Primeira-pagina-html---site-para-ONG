document.addEventListener("DOMContentLoaded", function () {
    const tipoSelect = document.getElementById("tipo");
    const dadosDoacao = document.getElementById("dadosDoacao");
    const form = document.getElementById("form-cadastro");

    // Mostra os campos de cartão apenas se for doador
    tipoSelect.addEventListener("change", function () {
        if (this.value === "doador") {
            dadosDoacao.style.display = "block";
            // torna os campos obrigatórios
            document.getElementById("valorDoacao").required = true;
            document.getElementById("numCartao").required = true;
            document.getElementById("validade").required = true;
            document.getElementById("cvv").required = true;
        } else {
            dadosDoacao.style.display = "none";
            // remove obrigatoriedade se for voluntário
            document.getElementById("valorDoacao").required = false;
            document.getElementById("numCartao").required = false;
            document.getElementById("validade").required = false;
            document.getElementById("cvv").required = false;
        }
    });

    // ======= Máscaras dinâmicas =======
    const telInput = document.getElementById("telefone");
    const cpfInput = document.getElementById("cpf");
    const cepInput = document.getElementById("cep");

    telInput.addEventListener("input", () => {
        let val = telInput.value.replace(/\D/g, "");
        if (val.length > 11) val = val.slice(0, 11);
        if (val.length > 6) {
            telInput.value = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
        } else if (val.length > 2) {
            telInput.value = `(${val.slice(0, 2)}) ${val.slice(2)}`;
        } else {
            telInput.value = val;
        }
    });

    cpfInput.addEventListener("input", () => {
        let val = cpfInput.value.replace(/\D/g, "");
        if (val.length > 11) val = val.slice(0, 11);
        if (val.length > 9) {
            cpfInput.value = `${val.slice(0, 3)}.${val.slice(3, 6)}.${val.slice(6, 9)}-${val.slice(9)}`;
        } else if (val.length > 6) {
            cpfInput.value = `${val.slice(0, 3)}.${val.slice(3, 6)}.${val.slice(6)}`;
        } else if (val.length > 3) {
            cpfInput.value = `${val.slice(0, 3)}.${val.slice(3)}`;
        } else {
            cpfInput.value = val;
        }
    });

    cepInput.addEventListener("input", () => {
        let val = cepInput.value.replace(/\D/g, "");
        if (val.length > 8) val = val.slice(0, 8);
        if (val.length > 5) {
            cepInput.value = `${val.slice(0, 5)}-${val.slice(5)}`;
        } else {
            cepInput.value = val;
        }
    });

    // ======= Pop-up ao enviar o formulário =======
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // evita envio real

        const tipo = tipoSelect.value;

        if (tipo === "voluntario") {
            alert("🎉 Você acabou de se juntar à ONG! Seja bem-vindo(a)!");
        } else if (tipo === "doador") {
            const valor = parseFloat(document.getElementById("valorDoacao").value || 0);
            if (valor > 0) {
                alert(`💚 Obrigado pela sua contribuição! Você doou R$${valor.toFixed(2)}.`);
            } else {
                alert("Por favor, informe um valor de doação válido.");
                return;
            }
        }

        form.reset();
        dadosDoacao.style.display = "none";
    });
});
