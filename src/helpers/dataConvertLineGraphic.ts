const handleCategoriaId = (id: number) => {
  // banho
  if ([1, 2, 3, 4].includes(id)) {
    return 2;
  }
  // rotina
  if ([5, 6, 7, 8].includes(id)) {
    return 1;
  }
  // pele
  if ([9, 10, 11, 12].includes(id)) {
    return 5;
  }
  // dormir - sono
  if ([13, 14, 15, 16].includes(id)) {
    return 3;
  }
  // humor - sentindo
  if ([17, 18, 19, 20].includes(id)) {
    return 4;
  }
};

export const convertLineGraphic = (
  response: {
    data: { periodo: { registros: any }[] };
  },
  categoriaId: number,
  isIconGraphic: boolean
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

  if (!isIconGraphic) {
    sintomasObj.data = filterSintomas().map((item: any, index: number) => {
      return {
        x: ("0" + (index + 1)).slice(-2),
        y: item.jornadaCategoriaOpcaoId ? item.jornadaCategoriaOpcaoId : null,
        textX: item.observacao,
      };
    });
  } else {
    sintomasObj.data = filterSintomas().map((item: any, index: number) => {
      return {
        x: ("0" + (index + 1)).slice(-2),
        y: item.jornadaCategoriaOpcaoId
          ? handleCategoriaId(item.jornadaCategoriaOpcaoId)
          : null,
        textX: item.jornadaCategoriaOpcaoId + "",
      };
    });
  }

  sintomasObj.data.unshift({ x: "", y: null });
  sintomasObj.data.push({ x: "", y: null });

  return sintomasObj;
};

export const convertIconGraphic = (response: {
  data: { periodo: { registros: any }[] };
}) => {
  let joinedList: any = {
    id: 1,
    color: "#F84A24",
    data: [],
  };

  joinedList.data = joinedList.data.concat(
    convertLineGraphic(response, 3, true).data
  );
  joinedList.data = joinedList.data.concat(
    convertLineGraphic(response, 1, true).data
  );
  joinedList.data = joinedList.data.concat(
    convertLineGraphic(response, 2, true).data
  );
  joinedList.data = joinedList.data.concat(
    convertLineGraphic(response, 5, true).data
  );
  joinedList.data = joinedList.data.concat(
    convertLineGraphic(response, 6, true).data
  );

  return joinedList;
};
