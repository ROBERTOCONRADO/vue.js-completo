export default {
  name: 'DolarHoje',
  data() {
    return {
      valorDolar: 0,
    };
  },
  template: `<p>Valor dolar/real: {{valorDolar}}</p>`,
  methods: {
    puxarDolar() {
      fetch('https://api.origamid.dev/exchange/usd')
        .then((r) => r.json())
        .then((r) => {
          this.valorDolar = r.rates.BRL.toFixed(2);
        });
    },
  },
  created() {
    this.puxarDolar();
  },
};
