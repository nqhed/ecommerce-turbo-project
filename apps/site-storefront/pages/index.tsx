import { NextPage } from "next";
import Card from "ui/site-storefront/Card";
import { ModuleConn } from "ui/types/ModuleConn";
import Tabs from "ui/site-storefront/Tabs";

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
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-12 gap-4">
          {/* <div>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div>4. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div>5. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className="md:col-span-3">6. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className="md:col-span-3 lg:col-span-2">7. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}
          <div className="bg-red-500">1</div>
          <div className="bg-red-500">2</div>
          <div className="bg-red-500">3</div>
          <div className="bg-red-500">4</div>
          <div className="bg-red-500">5</div>
          <div className="bg-red-500">6</div>
          <div className="bg-red-500">7</div>
          <div className="bg-red-500">8</div>
          <div className="bg-red-500">9</div>
          <div className="bg-red-500">10</div>
          <div className="bg-red-500">11</div>
          <div className="bg-red-500">12</div>
      </div>
      <Tabs />
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
