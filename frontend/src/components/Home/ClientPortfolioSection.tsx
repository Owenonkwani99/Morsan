import aspireLendingLogo from "../../assets/clientlogos/aspirelendinglogo.png";
import boltMarketLogo from "../../assets/clientlogos/boltmarketlogo.png";
import buySimuLogo from "../../assets/clientlogos/buysimulogo.png";
import food4EducationLogo from "../../assets/clientlogos/food4educationlogo.png";
import hypaLogo from "../../assets/clientlogos/hypalogo.png";
import kijaniHoldingsLogo from "../../assets/clientlogos/kijaniholdingslogog.png";
import purpinkLogo from "../../assets/clientlogos/purpinklogo.png";
import trailMyCarLogo from "../../assets/clientlogos/trailmycarlogo.png";
import wapiPayLogo from "../../assets/clientlogos/wapipaylogo.png";

const clients = [
  {
    name: "Aspire Lending",
    logo: aspireLendingLogo,
    large: true,
  },
  {
    name: "Bolt Market",
    logo: boltMarketLogo,
  },
  {
    name: "Buy Simu Technologies",
    logo: buySimuLogo,
    large: true,
  },
  {
    name: "Food 4 Education",
    logo: food4EducationLogo,
  },
  {
    name: "Hypa",
    logo: hypaLogo,
  },
  {
    name: "Kijani Holdings",
    logo: kijaniHoldingsLogo,
  },
  {
    name: "Purpink Gifts Limited",
    logo: purpinkLogo,
    large: true,
  },
  {
    name: "Trail My Car",
    logo: trailMyCarLogo,
  },
  {
    name: "Wapi Pay",
    logo: wapiPayLogo,
  },
];

const ClientPortfolioSection = () => {
  return (
    <section className="overflow-hidden bg-white py-14 md:py-5" data-navbar-theme="light">

      {/* Moving logos */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-client-marquee">

          {/* First set */}
          <div className="flex shrink-0 items-center">
            {clients.map((client) => (
              <div
                key={`first-${client.name}`}
                className="flex h-24 min-w-[210px] items-center justify-center px-8"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`w-auto object-contain brightness-0 opacity-80 transition-all duration-300 hover:brightness-100 hover:opacity-100 ${
                    client.large
                      ? "max-h-16 max-w-[190px]"
                      : "max-h-12 max-w-[150px]"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex shrink-0 items-center">
            {clients.map((client) => (
              <div
                key={`second-${client.name}`}
                className="flex h-24 min-w-[210px] items-center justify-center px-8"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`w-auto object-contain brightness-0 opacity-80 transition-all duration-300 hover:brightness-100 hover:opacity-100 ${
                    client.large
                      ? "max-h-16 max-w-[190px]"
                      : "max-h-12 max-w-[150px]"
                  }`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientPortfolioSection;