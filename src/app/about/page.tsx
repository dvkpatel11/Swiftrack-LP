import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
streamline       <Breadcrumb
        pageName="About Us"
        description="Learn more about TransLogix, your partner in optimizing fleet management. Our platform offers real-time asset tracking, seamless QuickBooks integration, and comprehensive analytics to help you make informed decisions and your operations."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
