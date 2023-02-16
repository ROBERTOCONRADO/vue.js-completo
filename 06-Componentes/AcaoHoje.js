import DolarHoje from './DolarHoje.js';

export default {
  name: 'AcaoHoje',
  components: {
    DolarHoje,
  },
  data() {
    return {
      valorMercado: 0,
    };
  },
  template: `
    <div>
      <p>Valor da Apple: {{valorMercado}}</p>
      <dolar-hoje></dolar-hoje>
    </div>
  `,
  methods: {
    puxarAcao() {
      fetch('https://api.origamid.dev/stock/aapl/quote')
        .then((r) => r.json())
        .then((r) => {
          console.log(r);
          this.valorMercado = r.marketCap;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
};
