import { FC, useMemo, HTMLAttributes } from "react";

export type HTMLElementTypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "div"
  | "span";

export type TypographyModifier =
  // Heading
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6"
  | "heading-7"
  | "heading-8"
  | "heading-9"
  // Subtitle
  | "subtitle-1"
  | "subtitle-2"
  | "subtitle-3"
  | "subtitle-4"
  | "subtitle-5"
  // Body
  | "body-1"
  | "body-2"
  | "body-3"
  // Button Text
  | "button-text-1"
  | "button-text-2"
  | "button-text-3"
  | "button-text-4"
  | "button-text-5"
  | "button-text-6"
  // Label
  | "label-1"
  | "label-2"
  | "label-3"
  | "label-4"
  | "label-5"
  // Placeholder
  | "placeholder-1"
  | "placeholder-2"
  // Highlight
  | "highlight-1"
  | "highlight-2"
  | "highlight-3"
  | "highlight-4"
  | "highlight-5"
  | "highlight-6";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  htmlElementTag: HTMLElementTypographyTag;
  isReplaceAllDefaultClassName?: boolean;
  modifier?: TypographyModifier;
}

const Typography: FC<TypographyProps> = ({
  htmlElementTag,
  children,
  isReplaceAllDefaultClassName,
  className,
  modifier,
  ...props
}) => {
  const ElementTag = useMemo<HTMLElementTypographyTag>(
    () => htmlElementTag || "div",
    [htmlElementTag]
  );
  const customClassName = className ? ` ${className}` : "";

  return (
    <>
      <ElementTag className={`text-${modifier}${customClassName}`} {...props}>
        {children}
      </ElementTag>
    </>
  );
};

export default Typography;
