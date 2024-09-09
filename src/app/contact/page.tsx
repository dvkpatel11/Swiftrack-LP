import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We’re here to help you optimize your transport operations! Whether you have questions about our services, need support, or want to learn more about how TransLogix can benefit your business, we’d love to hear from you."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
