import React, { ReactNode } from "react";

import NavItem from "./NavItem/NavItem";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  // const getCustomItems = (): JSX.Element[] => {
  //   const items = [
  //     {
  //       contentID: 1,
  //       image:
  //         "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //       label: "Pizza Lovers",
  //     },
  //     {
  //       contentID: 2,
  //       image:
  //         "https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //       label: "The Game Players",
  //     },
  //     {
  //       contentID: 3,
  //       image:
  //         "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //       label: "Panda Peeps",
  //     },
  //   ];

  //   return items.map((item) => (
  //     <NavbarItem key={item.contentID} image={item.image} label={item.label} />
  //   ));
  // };

  // return (
  //   <div
  //     className="
  //     flex
  //     p-3
  //     space-y-2
  //     bg-gray-900
  //     scrollbar-hide
  //   "
  //   >
  //     <NavbarItem label={"User"} active>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         fill="currentColor"
  //         className="w-7 h-5"
  //       >
  //         <path
  //           fillRule="evenodd"
  //           d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     </NavbarItem>
  //     <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />
  {
    /* <NavbarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label="Summariser"
          />
          <NavbarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            }
            label="Notes"
          />
          {getCustomItems()}
          <NavbarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path
                  fillRule="evenodd"
                  d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label="Plugin Store"
          />
          <NavbarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label="Settings"
          /> */
  }
  // </div>
  return (
    <div
      className="
    overflow-y-scroll 
    p-2 
    space-y-2 
    bg-gray-900 
    scrollbar-hide"
    >
      <NavItem href="/home">
        <svg
          aria-hidden="false"
          aria-label="Discord"
          viewBox="0 0 28 20"
          className="w-5 h-3"
        >
          <path
            fill="currentColor"
            d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
          />
        </svg>
      </NavItem>

      <hr className="mx-2 rounded border-t-2 border-t-white/[.3]" />

      <NavItem href="/conversations">
        <svg
          aria-hidden="false"
          aria-label="Discord"
          viewBox="0 0 28 20"
          className="w-5 h-3"
        >
          <path
            fill="currentColor"
            d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
          />
        </svg>
      </NavItem>
      {/* {data.map((server) => (
      <NavItem
        href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
        active={+router.query.sid! === +server.id}
        key={server.id}
      >
        <Image
          src={`/servers/${server.img}`}
          alt={server.label}
          width={48}
          height={48}
          placeholder="blur"
          blurDataURL={`/servers/${server.img}`}
        />
      </NavItem> */}
      {/* ))} */}
    </div>
  );
};

export default Navbar;
