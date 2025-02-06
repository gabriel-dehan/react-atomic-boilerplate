import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return <div>{t("pages.home.title", "Home")}</div>;
};

export default Home;
