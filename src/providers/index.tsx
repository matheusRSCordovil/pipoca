import { HomeProvider } from "./HomeProvider";

interface Props {
  children: React.ReactNode;
}

const GlobalContext: React.FC<Props> = ({ children }) => {
  return <HomeProvider>{children}</HomeProvider>;
};

export default GlobalContext;
