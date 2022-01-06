import Flex from "@react-css/flex";

export default function About() {
  return (
    <div>
      <div className="card m-3">
        <div className="card-body">
          <h2 className="card-title">About</h2>
          <Flex row>
            <img
              className="w-50"
              src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2018/05/1l-image-WuXi-Biologics-Drug-Substance-Manufacturing-Facility-800x600.jpg"
            />
            <div className="mx-3 w-50">
              <h4>About Us</h4>
              <span>
                Delta pharmaceuticals Corp. is a government funded biological
                research institude pioneering revolutionary and scientific
                medical developments to enchance human evolution. From vaccines
                to medical equipments, Delta pharmaceuticals aim to drive
                innovation and ground breaking discoveries. Delta
                pharmaceuticals Corp. is located in Fukushima, Japan with over
                10000 staffs employed.
              </span>
              <span>With the rise of the</span>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
}
