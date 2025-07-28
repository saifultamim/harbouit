import { getPageTitle } from "@/components/Metadata";
import Login from "@/features/web/Login";
export const generateMetadata = () => ({
  title: getPageTitle("login"),
});
export default function LoginPagre() {
  return (
    <>
      <Login />
    </>
  );
}
