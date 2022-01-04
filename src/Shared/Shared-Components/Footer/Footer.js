import Flex from "@react-css/flex";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="w-100 mx-auto banner-footer">
      <Flex column alignContentCenter className="w-50 ms-auto me-auto">
        <table className="me-auto ms-auto">
          <tr>
            <th>Socials</th>
            <th>Links</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>Discord</td>
            <td>Github</td>
            <td>SWINBURNE UNIVERSITY OF TECHNOLOGY</td>
          </tr>
        </table>
      </Flex>
    </div>
  );
}
