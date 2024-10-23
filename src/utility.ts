export const getIconSrc = (icon: string, color?: string) => {
  if (isImage(icon)) {
    return icon;
  }

  let baseUrl = `https://cdn.simpleicons.org/${icon}`;

  if (color) {
    baseUrl = `${baseUrl}/${color}`;
  }

  return baseUrl;
};

function isImage(fileUrl: string) {
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  const fileExtension = fileUrl.toLowerCase().split('.').pop();
  return fileExtension && allowedExtensions.includes(fileExtension);
}
