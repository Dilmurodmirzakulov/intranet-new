import PageMeta from "../../components/common/PageMeta";
import IntranetDashboard from "../../components/intranet/IntranetDashboard";

export default function Home() {
  return (
    <>
      <PageMeta
        title="WINET Intranet Dashboard"
        description="WIUT intranet home dashboard overview"
      />
      <IntranetDashboard />
    </>
  );
}
