import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import logo from "../../../assets/splitter.svg";
import Header from "./Header";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Header",
    component: Header,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const logoImg = {
    src: logo,
    alt: "logo",
};


export const HeaderLogo: Story = {
    render: () => <Image src={logoImg.src} alt={logoImg.alt} />,
};
