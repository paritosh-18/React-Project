import React from "react";
import ReactDOM from "react-dom/client";
// const h1Tag = document.createElement("h1");
// const h2Tag = document.createElement("h2");
// h1Tag.innerText = "Hello from JS";
// h2Tag.innerText = "Heading 2";
// const root = document.getElementById("root");
// // root.appendChild(h1Tag);
// // root.appendChild(h2Tag);
// root.append(h1Tag, h2Tag);

//Implementing same code with React.createElement*********
// const h1 = React.createElement("h1", {}, "Hello Everyone!");
// const h2 = React.createElement("h2", {}, "Greetings from h2");
// const div = React.createElement("div", {}, [h1, h2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// Implementing same code using JSX*********

// const title = "Learning React";
// const head1 = <h1 key="heading1">Helloo Everyone</h1>;

// const Header2 = () => (
//   <div id="Header2" key="head2">
//     <h1 key="first">This is from functional component</h1>
//     <h2 key="second">this is h2 from func component</h2>
//   </div>
// );

// const H2 = () => (
//   <div>
//     <h1>{title}</h1>
//     {head1}
//     <Header2 />
//     <h2>Greetings from h2</h2>
//   </div>
// );

// const Root = ReactDOM.createRoot(document.getElementById("root"));

// Root.render(<H2 />);
//never use tag name as identifier as render will fail, for eg const h1 = (*some JSX) this will result in render failure

const Restraunts = [
  {
    info: {
      id: "253990",
      name: "McDonald's",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Supertech Shopprix Mall",
      areaName: "Vaishali",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "253990",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-05 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-supertech-shopprix-mall-vaishali-noida-253990",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38926",
      name: "Domino's Pizza",
      cloudinaryImageId: "l36tvjpx6ftslpbnn6yy",
      locality: "Mahagun Metro Mall",
      areaName: "Vaishali",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "38926",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-05 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-mahagun-metro-mall-vaishali-noida-38926",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90172",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Sector 4",
      areaName: "Vaishali",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "90172",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-06 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-sector-4-vaishali-noida-90172",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53767",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Supertech Shopprix Mall",
      areaName: "Vaishali",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "53767",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "721",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-05 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-supertech-shopprix-mall-vaishali-noida-53767",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "85681",
      name: "Rollsking",
      cloudinaryImageId: "wjjdxhwgtzjuzmuxm1ye",
      locality: "Makanpur",
      areaName: "Makanpur",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Fast Food", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "85681",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4697",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-05 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rollsking-makanpur-noida-85681",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355345",
      name: "Grameen Kulfi",
      cloudinaryImageId: "ghxzk3nxotwhwtitt1eo",
      locality: "556th Scheme",
      areaName: "Dilshad Gardens",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "355345",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7900,
      },
      parentId: "12175",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "39 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-06 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-556th-scheme-dilshad-gardens-noida-355345",
      type: "WEBLINK",
    },
  },
];
const imageSrc =
  "https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72";

const HeaderContainer = () => {
  return (
    <div className="Header">
      <a href="/">
        <img id="image" src={imageSrc} alt="logo" />
      </a>
      <ul id="list">
        <li key="home">
          <a href="/">Home</a>
        </li>
        <li key="AboutUs">About Us</li>
        <li key="Cart">Cart</li>
      </ul>
    </div>
  );
};

const urlCloud =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// {
//   cloudinaryImageId,
//   areaName,
//   cuisines,
//   avgRating,
// }

//Props is an object of all the properties that we pass while calling out functional component
const RestrauntCard = ({
  cloudinaryImageId,
  name,
  areaName,
  cuisines,
  avgRating,
}) => {
  // const { cloudinaryImageId, name, areaName, cuisines, avgRating } =
  //   restraunt;
  return (
    <div className="Card">
      <img
        className="CardImage"
        alt="restrauntLogo"
        src={urlCloud + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const BodyContainer = () => {
  return (
    <div className="RestrauntList">
      {Restraunts.map((restraunt) => {
        return <RestrauntCard {...restraunt.info} />;
      })}
      {/* <RestrauntCard props={{Restraunts[0]}} /> */}
    </div>
  );
};

const FooterContainer = () => {
  return (
    <div className="Footer">
      <h3>Contact Us</h3>
      <h3>Copyright</h3>
    </div>
  );
};

const PageContainer = () => (
  <>
    <HeaderContainer />
    <BodyContainer />
    <FooterContainer />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageContainer />);
