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
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          Built by{" "}
          <a className="text-gray-900 dark:text-white" href="https://twitter.com/huntarosan">
            Hunter Chang
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
