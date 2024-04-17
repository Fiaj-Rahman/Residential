import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";



const Services = () => {

    const data = [
        {
          label: "Renting and Selling Services",
          value: "html",
          desc: `At CozyCasa Properties, we provide comprehensive rental and selling services for residential properties. Whether you're looking to rent or sell your home, our experienced team is here to assist you every step of the way. With our tailored approach, we aim to make the process seamless and stress-free for our clients. From marketing your property to conducting viewings and negotiating offers, we handle all aspects of the rental and selling process with professionalism and expertise. Contact us today to learn more about how we can help you rent or sell your residential property.`,
        },
        {
          label: "Property Management",
          value: "react",
          desc: `At CozyCasa Properties, we offer expert property management services tailored to meet the needs of residential property owners. Our comprehensive management services cover everything from tenant screening and rent collection to property maintenance and emergency repairs. With our dedicated team handling the day-to-day operations of your property, you can enjoy peace of mind knowing that your investment is in good hands. Whether you own single-family homes, apartments, or vacation rentals, we're committed to maximizing your property's value and ensuring a positive experience for both you and your tenants. Contact us today to learn more about our property management services.`,
        },
        {
          label: "Property Listing",
          value: "vue",
          desc: `At CozyCasa Properties, we specialize in property listing services for residential real estate. Our expert team helps property owners showcase their homes, apartments, and vacation rentals to potential buyers and renters. With our comprehensive listing approach, we ensure that your property receives maximum exposure through various online platforms, professional photography, and detailed descriptions. Whether you're looking to sell or rent out your property, our listing services are designed to attract the right audience and facilitate smooth transactions. Contact us today to learn more about how we can help you list your property effectively.`,
        },
        
      ];


    return (
        <div className="max-w-7xl m-auto mt-10 rounded-xl p-5">

            <div>
                <h1 className="text-center text-4xl font-bold">OUR SERVICES
                    <p className="text-center text-xl mt-5 mb-5 ">WHAT WE DO FOR YOU</p>
                </h1>
            </div>

            <div className="mb-10 text-center">
                <p>At CozyCasa Properties, we specialize in residential real estate, offering a diverse range of properties tailored to meet the unique needs of our clients. From single-family homes to townhouses, apartments, student housing, senior living communities, and vacation rentals, we provide a comprehensive selection of options. Our dedicated team is committed to delivering exceptional service and guiding you through every step of your real estate journey. Contact us today to explore our portfolio and find your ideal home.</p>
            </div>


<div className=" bg-orange-200 rounded-xl" >
            <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="font-bold">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
        </div>
        </div>
    );
};

export default Services;