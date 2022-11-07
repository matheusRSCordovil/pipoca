// @ts-ignore
import PwaInstallPopupIOS from "react-pwa-install-ios";
import AppIcon from "../../assets/icon/Icone_app.png";

const MyComponent = () => {
  return (
    <PwaInstallPopupIOS delay={3} lang="pt" appIcon={AppIcon}>
      <div
        style={{
          padding: "15px 30px",
          backgroundColor: "#ffffff",
          color: "#7d7d7d",
          textAlign: "center",
          borderRadius: "22px",
        }}
      >
        Para instalar o aplicativo Pipoca Atópica na tela inicial,
        <br /> abra-o no Safari. Clique no menu compartilhar e selecione
        'Adicionar à tela inicial'
      </div>
    </PwaInstallPopupIOS>
  );
};

export default MyComponent;
