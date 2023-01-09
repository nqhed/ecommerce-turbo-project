import { FC, createContext, ReactNode, useContext } from "react";

export const DEFAULT_ICON_SIZE = 16;

export interface IconProps {
  size?: number;
  color?: string;
  // className:
  // width?: number;
  // height?: number;
}

export interface IconProviderProps extends IconProps {
  children?: ReactNode;
}

export const IconContext = createContext<IconProps>({
  size: DEFAULT_ICON_SIZE,
  // height: DEFAULT_ICON_SIZE,
  // width: DEFAULT_ICON_SIZE
});

export const IconProvider: FC<IconProviderProps> = ({ children, ...props }) => {
  return <>
    <IconContext.Provider value={{ ...props }}>
      {children}
    </IconContext.Provider>
  </>;
}

export function useIconContext(newProps: IconProps) {
  const contextData = useContext<IconProps>(IconContext);
  const iconData: IconProps = {
    size: newProps.size || contextData.size,
    // height: newProps.height || contextData.height,
    // width: newProps.width || contextData.width
  };
  return iconData;
}

const Icon: FC<IconProps> = () => {
  return <></>;
}

export default Icon;