export const getIconSrc = (icon: string, color?: string) => {
  let baseUrl = `https://cdn.simpleicons.org/${icon}`;

  if (color) {
    baseUrl = `${baseUrl}/${color}`;
  }

  return baseUrl;
};
