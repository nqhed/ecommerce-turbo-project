import { NextPage } from "next";
import Card from "ui/site-storefront/Card";
import { ModuleConn } from "ui/types/ModuleConn";

interface HomePage {
  moduleConns: ModuleConn[];
}

const Web: NextPage<HomePage> = (props) => {
  return (
    <div className="container mx-auto py-10">
      <h1>Homepage</h1>
      <div>
        {props.moduleConns.map((item, itemIdx) => (
          <Card key={itemIdx} moduleConn={item} />
        ))}
      </div>
    </div>
  );
};

export default Web;

export async function getStaticProps() {
  const pageCode = "home";
  const pageNodeConnRes = await fetch(
    "http://localhost:8000/api/page-node-connectors?ModulePageId=1"
  );
  const pageNodeConn: { data: ModuleConn[] } = await pageNodeConnRes.json();
  let moduleConns: ModuleConn[] = [];
  if (pageNodeConn.data) {
    moduleConns = pageNodeConn.data.filter(item => item.isActive);
  }
  return {
    props: {
      moduleConns: moduleConns,
    }, // will be passed to the page component as props
    revalidate: 20,
  };
}
