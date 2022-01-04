import { Button } from "@mui/material";
import Flex from "@react-css/flex";
import "./HomeComponent.css";

export default function HomeComponent() {
  const stories_boards = [
    {
      img: "https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/07/full/1612720523-1442.jpg&width=1200",
      title:
        "Compensatory ion transport buffers daily protein rhythms to regulate osmotic balance and cellular physiology",
      author: "Pete Newham",
      date: "15 October 2021",
      category: "Nature",
      type: "R&D/Discovery",
    },
    {
      img: "https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/07/full/1612720523-1442.jpg&width=1200",
      title:
        "Clinical impact of subclonal EGFR T790M mutations in advanced-stage EGFR-mutant non-small-cell lung cancers",
      author: "Tereza Vaclová, Elza De Bruin",
      date: "19 March 2021",
      category: "Nature Communications",
      type: "R&D/Oncology",
    },
    {
      img: "https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/07/full/1612720523-1442.jpg&width=1200",
      title:
        "Effects of Bariatric Surgery in Early- and Adult-Onset Obesity in the Prospective Controlled Swedish Obese Subjects Study",
      author: "Bjorn Carlsson ",
      date: "01 January 2020",
      category: "ADA Diabetes Care",
    },
  ];

  const card_rows = [
    {
      title: "Medicinal Products",
      img: "https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/07/full/1612720523-1442.jpg&width=1200",
      description:
        "Delta Pharmaceuticals manufactures quality medicinal products with strict protocols and standards that abides to ISO international standards.",
    },
    {
      title: "Equipments",
      img: "https://media.istockphoto.com/photos/smart-bearded-man-holding-a-professional-scanner-picture-id1156457420?k=20&m=1156457420&s=612x612&w=0&h=UC_2fTKUhwxzUQewPtJZBKrm-yCqpYRluAt_qUnxMDQ=",
      description:
        "Our medical equipments promises quality results and up to standard with ISO specifications to ensure optimal performance and ease of use.",
    },
    {
      title: "Logistics",
      img: "https://cdn.pfizer.com/pfizercom/2021-12/shipper1.jpg?3FtgmS94M8qgCFt8JiywXIiJG7_YpfKS",
      description:
        "Our logistics partnership with QuadMotion Logistics Ltd. ensures medical goods are delivered within expected time and no compromise in quality of package.",
    },
  ];
  return (
    <div className="w-75 mx-auto mb-5">
      <Flex column alignItemsCenter gap={20}>
        <Flex row gap={20}>
          {card_rows.map((x) => {
            return (
              <div className="card shadow content-card-row" key={x.title}>
                <img
                  alt="alt"
                  draggable="false"
                  className="card-img-top w-50 mx-auto mt-3"
                  src={x.img}
                  style={{ minWidth: "19rem", maxHeight: "10rem" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{x.title}</h4>
                  <p className="card-text">{x.description}</p>
                </div>
                <div className="mt-auto ms-auto p-1">
                  <Button>See More</Button>
                </div>
              </div>
            );
          })}
        </Flex>
        <h2>Stories</h2>
        {stories_boards.map((x) => {
          return (
            <div className="card shadow content-card-column">
              <Flex row>
                <img
                  src={x.img}
                  className="p-2"
                  style={{ width: "20rem" }}
                  alt="alt"
                />
                <Flex column className="pt-2">
                  <h4>{x.title}</h4>
                  <Flex row gap={5}>
                    <strong>Authored By: </strong>
                    <p className="card-text">{x.author}</p>
                  </Flex>
                </Flex>
                <div
                  className="card-body ms-auto mt-auto"
                  style={{ bottom: 0, right: 0, position: "absolute" }}
                >
                  <Button>See More</Button>
                </div>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </div>
  );
}
