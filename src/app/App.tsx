import { AppRoutes } from "./routes";
import { GlobalStyle } from "./shared/global/style";

export const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
};
