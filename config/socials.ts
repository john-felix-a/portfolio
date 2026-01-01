import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "john-felix-a",
    icon: Icons.gitHub,
    link: "https://github.com/john-felix-a",
  },
  {
    name: "LinkedIn",
    username: "John Felix A",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/john-felix-jf",
  },
  {
    name: "Twitter",
    username: "John Felix",
    icon: Icons.twitter,
    link: "https://x.com/johnfelix1098",
  },
  {
    name: "Gmail",
    username: "John",
    icon: Icons.gmail,
    link: "mailto:johnfelixjf@outlook.com",
  },
  {
    name: "Instagram",
    username: "john_jf_",
    icon: Icons.instagram,
    link: "https://www.instagram.com/john_jf_/",
  },
];
