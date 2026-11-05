// Tooltip e linha de mira do gráfico da Lia.
const grafico = document.getElementById('grafico-lia');

if (grafico) {
  const plot = grafico.querySelector('.plot');
  const mira = grafico.querySelector('.mira');
  const dica = grafico.querySelector('.dica');

  grafico.querySelectorAll('.alvos rect').forEach((alvo) => {
    alvo.addEventListener('pointerenter', () => {
      const x = alvo.dataset.x;
      mira.setAttribute('x1', x);
      mira.setAttribute('x2', x);

      dica.textContent = '';
      const mes = document.createElement('span');
      mes.textContent = alvo.dataset.mes;
      const valor = document.createElement('b');
      valor.textContent = alvo.dataset.valor;
      dica.append(mes, valor);
      dica.style.left = `${(Number(x) / 480) * 100}%`;
      dica.classList.toggle('a-esquerda', Number(x) > 340);
      dica.hidden = false;
      plot.classList.add('ativo');
    });
  });

  plot.addEventListener('pointerleave', () => {
    dica.hidden = true;
    plot.classList.remove('ativo');
  });
}
