import { Button } from "@mui/material";
import Flex from "@react-css/flex";
import "./HomeComponent.css";
import Badge from "react-bootstrap/Badge";

export default function HomeComponent() {
  const stories_boards = [
    {
      img: "https://media.springernature.com/lw785/springer-static/image/prt%3A978-3-540-29678-2%2F9/MediaObjects/978-3-540-29678-2_9_Part_Fig2-2593_HTML.jpg",
      url: "https://www.nature.com/articles/s41467-021-25942-4",
      title:
        "Compensatory ion transport buffers daily protein rhythms to regulate osmotic balance and cellular physiology",
      author: "Pete Newham",
      date: "15 October 2021",
      category: "Nature",
      type: "R&D/Discovery",
    },
    {
      img: "https://cancerdiscovery.aacrjournals.org/content/candisc/5/7/694/F1.large.jpg",
      url: "https://www.nature.com/articles/s41467-021-22057-8",
      title:
        "Clinical impact of subclonal EGFR T790M mutations in advanced-stage EGFR-mutant non-small-cell lung cancers",
      author: "Tereza Vaclová, Elza De Bruin",
      date: "19 March 2021",
      category: "Nature Communications",
      type: "R&D/Oncology",
    },
    {
      img: "https://s3.amazonaws.com/prod.tctmd.com/public/2018-01/1.18.18%20Bariatric%20Surgery%20Cardiometabolic%20Benefits%20Down%2C%20but%20Not%20Out%2C%20at%205%20Years%20HEADER%20GRAY%20BRIGHT_2.jpg",
      url: "https://diabetesjournals.org/care/article/43/4/860/35719/Effects-of-Bariatric-Surgery-in-Early-and-Adult",
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
        <h2>Publications</h2>
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
                  <Flex row gap={5}>
                    <strong>Date: </strong>
                    <p className="card-text">{x.date}</p>
                  </Flex>
                  <Flex row gap={5}>
                    <strong>Published: </strong>
                    <Badge
                      pill
                      bg={
                        x.category === "Nature"
                          ? "success"
                          : x.category === "Nature Communications"
                          ? "warning"
                          : "info"
                      }
                    >
                      {x.category}
                    </Badge>
                  </Flex>
                </Flex>
                <div
                  className="card-body ms-auto mt-auto"
                  style={{ bottom: 0, right: 0, position: "absolute" }}
                >
                  <a href={x.url}>
                    <Button>See More</Button>
                  </a>
                </div>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </div>
  );
}
