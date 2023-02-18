import "../../../styles/pages/page-misc.scss";

const Maintenance = () => {
  return (
    <div className="misc-wrapper">
      <a className="brand-logo" href="/">
        <img width={300} src="/assets/images/logo.png" alt="POINT" />
      </a>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1"> 🛠 تحت الصيانة</h2>
          <img
            width={100}
            src="/assets/images/pages/under-maintenance.png"
            alt="صفحة تحت الصيانة"
          />
          <p className="mb-3">
            نأسف للإزعاج ولكننا نجري بعض الصيانة في الوقت الحالي
          </p>
          <div>
            <a
              className="btn btn-success"
              href="mailto: mahmoud.gad@pointuniform.com"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Maintenance;
