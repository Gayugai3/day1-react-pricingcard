import "./App.css";
import Cards from "./Cards";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  var priceCards = [
    {
      plan: "Free",
      price: "0",
      features: [
        {
          title: "Single User",
        },
        {
          title: "5GB Storage",
        },
        {
          title: "Unlimited Public Projects",
        },
        {
          title: "Community Access",
        },
        {
          title: "Unlimited Private Projects",
          uncheck: true,
        },
        {
          title: "Dedicated Phone Support",
          uncheck: true,
        },
        {
          title: "Free Subdomain",
          uncheck: true,
        },
        {
          title: "Monthly Status Reports",
          uncheck: true,
        },
      ],
    },
    {
      plan: "PLUS",
      price: "9",
      features: [
        {
          title: "5 Users",
          strong: true,
        },
        {
          title: "50GB Storage",
        },
        {
          title: "Unlimited Public Projects",
        },
        {
          title: "Community Access",
        },
        {
          title: "Unlimited Private Projects",
        },
        {
          title: "Dedicated Phone Support",
        },
        {
          title: "Free Subdomain",
        },
        {
          title: "Monthly Status Reports",
          uncheck: true,
        },
      ],
    },
    {
      plan: "PRO",
      price: "49",
      features: [
        {
          title: "Unlimited Users",
          strong: true,
        },
        {
          title: "150GB Storagee",
        },
        {
          title: "Unlimited Public Projects",
        },
        {
          title: "Community Access",
        },
        {
          title: "Unlimited Private Projects",
        },
        {
          title: "Dedicated Phone Support",
        },
        {
          title: "Unlimited Free Subdomain",
        },
        {
          title: "Monthly Status Reports",
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {priceCards.map((card) => {
            return <Cards card={card}></Cards>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
