import QRCode from "qrcode.react";

export default function QRPopup({
  textDirections,
}: {
  textDirections: string[];
}) {
  const value = textDirections.join("\n");
  return <QRCode value={value} />;
}
