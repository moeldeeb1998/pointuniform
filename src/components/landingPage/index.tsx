import React from "react";
import Banner from "./Banner";
import Section from "./Section";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <Section
        title="رؤية الشركة"
        description="تتطلع شركة بوينت الى المساهمة فى الأعمال المستقبلية التى تتماشى مع رؤية الدولة
        Egypt Vision 2030
        عن طريق تقديم جميع الخدمات المتطورة والإستغلال الأمثل للموارد المحلية ومشاركة الشركات العالمية للوصول الى أفكار غير تقليدية للوصول بشركتنا الى العالمية لتكون الداعم الفنى الأول لجميع المشروعات القومية."
      />
      <Section
        title="الجودة"
        description="بخصوص الجودة اننا نعمل جاهدين على تشغيل اجود المنسوجات لتقديمها لعملائنا وذلك حسب اختيار العملاو من مواصفات."
      />
    </>
  );
};

export default LandingPage;
