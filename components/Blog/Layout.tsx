import { MetaProps } from "../../types/postLayout";
import Head from "./Head";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = "https://localhost:3000";

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      {children}
    </>
  );
};

export default Layout;
