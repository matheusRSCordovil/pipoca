export const convertLineGraphic = (
  response: {
    data: { periodo: { registros: any }[] };
  },
  categoriaId: number
) => {
  let sintomasObj: any = {
    id: categoriaId,
    color: "#F84A24",
    data: [],
  };

  const filterSintomas = () => {
    return response.data.periodo.map((item: { registros: any }) => {
      if (item.registros) {
        return item.registros.filter(
          (x: { jornadaCategoriaId: number }) =>
            x.jornadaCategoriaId === categoriaId
        )[0];
      } else {
        return {};
      }
    });
  };

  sintomasObj.data = filterSintomas().map((item: any, index: number) => {
    return {
      x: ("0" + (index + 1)).slice(-2),
      y: item.jornadaCategoriaOpcaoId ? item.jornadaCategoriaOpcaoId : null,
      textX: item.observacao,
    };
  });

  sintomasObj.data.unshift({ x: "", y: null });
  sintomasObj.data.push({ x: "", y: null });

  return sintomasObj;
};
