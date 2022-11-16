import API from "../services";

export const filterProductList = (
  response: {
    data: any;
  },
  categoriaId: number
) => {
  let sintomasObj: any = [];

  const filterSintomas = () => {
    return response.data.registro.filter((item: any) => {
      return item.jornadaCategoriaId === categoriaId;
    });
  };

  sintomasObj = filterSintomas();

  return sintomasObj;
};

export const handleProdutoPost = (
  id: number,
  produto: string,
  opcao?: number
) => {
  let data = {
    registro: [
      {
        jornadaCategoriaOpcaoId: opcao,
        jornadaCategoriaId: id,
        produto: produto,
        observacao: "",
      },
    ],
  };

  API.post("Jornada/Cadastro", data);
};
