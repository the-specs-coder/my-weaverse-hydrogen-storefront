// app/sections/hero-banner/index.tsx
import { createSchema } from "@weaverse/hydrogen";
import type { HydrogenComponentProps } from "@weaverse/hydrogen";

interface HeroBannerProps extends HydrogenComponentProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

function HeroBanner1(props: HeroBannerProps) {
  const { 
    heading, 
    description, 
    buttonText, 
    buttonLink, 
    backgroundImage,
    children,
    ...rest 
  } = props;

  return (
    <section 
      {...rest}
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-red/40" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h1>
        <p className="text-lg md:text-xl mb-8">{description}</p>
        {buttonText && buttonLink && (
          <a 
            href={buttonLink}
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </a>
        )}
        {children}
      </div>
    </section>
  );
}

export default HeroBanner1;

export const schema = createSchema({
  type: "hero-banner",
  title: "Hero Banner",
  settings: [
    {
      group: "Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "Welcome",
          placeholder: "Enter heading text",
        },
        {
          type: "textarea",
          name: "description",
          label: "Description", 
          defaultValue: "Discover amazing products and exceptional service.",
          placeholder: "Enter description text",
        },
        {
          type: "text",
          name: "buttonText",
          label: "Button Text",
          defaultValue: "Shop Now",
        },
        {
          type: "url",
          name: "buttonLink",
          label: "Button Link",
          defaultValue: "/collections/all",
        },
      ],
    },
    {
      group: "Design",
      inputs: [
        {
          type: "image",
          name: "backgroundImage",
          label: "Background Image",
        },
      ],
    },
  ],
  childTypes: ["subheading", "paragraph"],
  presets: {
    heading: "Welcome to Our Store",
    description: "Discover amazing products and exceptional service.",
    buttonText: "Shop Now",
    buttonLink: "/collections/all",
    children: [
      {
        type: "subheading",
        content: "Limited Time Offer",
      },
    ],
  },
});