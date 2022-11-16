const handleCategoriaId = (id: number) => {
  if ([32, 28, 24].includes(id)) {
    return "g";
  }
  if ([23, 27, 31].includes(id)) {
    return "r";
  }
  if ([30, 26, 22].includes(id)) {
    return "y";
  }
  if ([21, 25, 29].includes(id)) {
    return "b";
  }
};

export const convertDataProdutos = (response: {
  data: { periodo: { registros: any }[] };
}) => {
  let sintomasObj: any[] = [];

  const getProdutos = () => {
    return response.data.periodo
      .map((item: { registros: any }) => {
        if (item.registros) {
          return item.registros
            .filter((x: { jornadaCategoriaId: number; produto: string }) =>
              [7, 8, 9].includes(x.jornadaCategoriaId)
            )
            .map((x: { produto: string }) => x.produto);
        } else {
          return null;
        }
      })
      .flat();
  };

  let produtos = getProdutos();

  let produtosUnicos = produtos
    .filter(function (item, pos) {
      return produtos.indexOf(item) === pos;
    })
    .filter((n) => n);

  const filterProduto = (nomeProduto: string) => {
    return response.data.periodo.map((item: { registros: any }) => {
      if (item.registros) {
        return item.registros.filter(
          (x: { produto: string }) => x.produto === nomeProduto
        )[0];
      } else {
        return {};
      }
    });
  };

  for (let i = 0; i < produtosUnicos.length; i++) {
    let sintomas = filterProduto(produtosUnicos[i]);
    let sintomasObjTemp = {
      id: produtosUnicos[i],
      color: "#F84A24",
      data: sintomas.map(
        (
          item: { produto: string; jornadaCategoriaOpcaoId: number },
          index: number
        ) => {
          if (item.produto === produtosUnicos[i]) {
            return {
              x: ("0" + (index + 1)).slice(-2),
              y: i + 1,
              textX: handleCategoriaId(item.jornadaCategoriaOpcaoId),
            };
          } else {
            return {
              x: ("0" + (index + 1)).slice(-2),
              y: i + 1,
            };
          }
        }
      ),
    };
    sintomasObj.push(sintomasObjTemp);
  }

  sintomasObj.forEach((item: any) => {
    item.data.unshift({ x: "", y: null });
    item.data.push({ x: "", y: null });
  });

  return sintomasObj;
};
