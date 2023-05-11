"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export type NavLinkProps = {
  href: string;
  active?: boolean;
  children?: React.ReactElement | string;
};

function NavItem({ href, active, children }: NavLinkProps) {
  let pathName = usePathname();
  active ||= pathName === href;

  return (
    <Link href={href} className="group block relative">
      <div className="flex absolute -left-2 items-center h-full">
        <div
          className={`${
            active
              ? "h-8"
              : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          } w-0.5 transition-all duration-200 origin-left bg-white rounded-r-sm`}
        ></div>
      </div>

      <div className="group-active:translate-y-px">
        <div
          className={clsx(
            `
          flex items-center justify-center 
          w-8 h-8 transition-all duration-200 
          overflow-hidden`,
            active
              ? "rounded-xl bg-[#5965F2] text-white"
              : `text-gray-100 group-hover:rounded-xl group-hover:bg-[#5965F2] group-hover:text-white bg-gray-700 rounded-3xl`
          )}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}

export default NavItem;

// interface INavbarItemProps {
//   color?: string;
//   icon?: ReactNode;
//   image?: string;
//   label: string;
// }

// const NavbarItem: React.FC<INavbarItemProps> = ({
//   color,
//   icon,
//   image,
//   label,
// }: INavbarItemProps) => {
//   // const handleOnClick = (): void => {
//   //   console.log("clicked");
//   // };

//   const getContent = (): JSX.Element | ReactNode | undefined => {
//     if (icon) {
//       const getStyles = (): React.CSSProperties => {
//         const styles: React.CSSProperties = {};

//         if (color) {
//           styles.color = `rgb(${color})`;
//         }

//         return styles;
//       };

//       return icon;
//     } else if (image) {
//       const styles: React.CSSProperties = {
//         backgroundImage: `url(${image})`,
//       };

//       return (
//         <div
//           className="
//           text-gray-300
//           transition-colors
//           duration-300"
//           style={styles}
//         />
//       );
//     }
//   };

//   // const getClasses = (): string => {
//   //   return classNames("navbar-item", props.type.toLowerCase(), {
//   //     active: props.contentID === state.activeContentID,
//   //   });
//   // };

//   return (
//     // <Tooltip label={label} direction="right">
//     <Link href={`/${label.toLowerCase()}`}>
//       <button
//         type="button"
//         className="
//         bg-gray-900
//         rounded-full
//         flex
//         items-center
//         justify-center
//         mx-4
//         h-8
//         w-8
//         transition-all
//         duration-300
//           "
//         // onClick={handleOnClick}
//       >
//         <div
//           className="
//           bg-green-500
//           rounded-md
//           h-8
//           w-8
//           transition-all
//           duration-300
//           opacity-0
//           hover:bg-blue-500
//           hover:rounded-lg
//           hover:h-10
//           hover:w-10
//           active:bg-blue-500
//           active:rounded-full
//           active:h-10
//           active:w-10"
//         >
//           {getContent()}
//         </div>
//       </button>
//     </Link>
//     // </Tooltip>
//   );
// };

// export default NavbarItem;
