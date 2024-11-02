import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import "../styles/pages/misc.module.scss";

const Maintenance = () => {
  <Head>
    <title>Test</title>
  </Head>;
  return (
    <div className="misc-wrapper">
      <Link className="brand-logo" href="/">
        <Image width={300} src="/assets/logo.png" alt="POINT" />
      </Link>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1"> 🛠 تحت الصيانة</h2>
          <Image
            width={100}
            src="/assets/under-maintenance.png"
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
