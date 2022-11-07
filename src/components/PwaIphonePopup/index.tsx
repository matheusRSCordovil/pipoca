// @ts-ignore
import PwaInstallPopupIOS from "react-pwa-install-ios";
import AppIcon from "./assets/icon/Icone_app.png";

const MyComponent = () => {
  return (
    <PwaInstallPopupIOS
      force={true}
      delay={3}
      lang="pt"
      appIcon={AppIcon}
    ></PwaInstallPopupIOS>
  );
};

export default MyComponent;
