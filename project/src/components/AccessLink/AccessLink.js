import NextLink from "next/link";

export function AccessLink({ href, children }) {
  return (
    <>
      <NextLink href={href} passHref>
        {children}
      </NextLink>
    </>
  );
}
