import Flex from "@react-css/flex";
import Icon from "@mdi/react";
import { mdiCollage, mdiDiscord, mdiGithub } from "@mdi/js";

import "./Footer.css";

export default function Footer() {
  const date = new Date().getFullYear().toString();
  const footer_menu = [
    {
      title: "Discord",
      icon: mdiDiscord,
      url: "/",
    },
    {
      title: "GitHub",
      icon: mdiGithub,
      url: "https://github.com/JakeSiewJK64",
    },
    {
      title: "Swinburne University of Technology",
      icon: mdiCollage,
      url: "/",
    },
  ];
  return (
    <div className="w-100 mx-auto banner-footer">
      <Flex
        column
        alignContentCenter
        className="w-75 ms-auto me-auto p-3 text-center text-white"
      >
        <table className="me-auto ms-auto">
          <tbody>
            <tr>
              <th>Socials</th>
              <th>Links</th>
              <th>Location</th>
            </tr>
            <tr>
              {footer_menu.map((x) => {
                return (
                  <td key={x.title}>
                    <a href={x.url} className="text-decoration-none text-white">
                      <Flex row gap={4}>
                        <Icon path={x.icon} size={1} />
                        <span>{x.title}</span>
                      </Flex>
                    </a>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
        <div className="m-3">
          <strong>
            This site is maintained and developed by JakeSiewJK64.
          </strong>
        </div>
        <span>© JakeSiewJK64 {date}</span>
      </Flex>
    </div>
  );
}
