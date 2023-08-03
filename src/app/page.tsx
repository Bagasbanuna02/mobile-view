import { LayoutHome } from "./home/layout";
import PageHome from "./home/page";
import { Test } from "./test-component";

export default function Page() {
  return (
    <>
      <LayoutHome>
        <PageHome />
      </LayoutHome>
    </>
  );
}
