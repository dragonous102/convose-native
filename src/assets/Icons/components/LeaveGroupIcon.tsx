import React from "react"
import BaseIcon, { SvgProps } from "./BaseIcon"

const xml = `<svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1878 17.8729H11.2283C10.7423 17.8729 10.3495 17.4853 10.3495 16.9956C10.3495 16.5162 10.7423 16.1183 11.2283 16.1183H22.1774L18.6104 12.0889C18.2899 11.7319 18.3209 11.181 18.6828 10.8648C19.0447 10.5486 19.5926 10.5792 19.9132 10.9362L24.7622 16.4142C25.062 16.7508 25.0517 17.2507 24.7519 17.5771L19.9132 23.0448C19.5926 23.4019 19.0447 23.4427 18.6828 23.1162C18.3209 22.8 18.2899 22.2492 18.6104 21.8921L22.1774 17.8627L22.1878 17.8729ZM11.89 32.287C12.3656 32.3992 12.6551 32.8684 12.5414 33.3377C12.4276 33.8069 11.952 34.0925 11.4764 33.9803C10.4115 33.7253 9.34657 33.5213 8.37469 33.3275C2.92597 32.2666 0 31.6953 0 24.0445V9.46728C0 2.21435 3.11208 1.63289 8.25062 0.684198C9.25352 0.50058 10.3391 0.296559 11.4764 0.0313329C11.952 -0.0808783 12.4276 0.20475 12.5414 0.673997C12.6551 1.14324 12.3656 1.61249 11.89 1.7247C10.6907 2.01033 9.59471 2.21435 8.58147 2.39797C4.33209 3.18345 1.76799 3.65269 1.76799 9.46728V24.0445C1.76799 30.257 4.18734 30.7364 8.71588 31.6137C9.66708 31.7973 10.701 32.0013 11.89 32.287Z" fill="#FF6060"/>
</svg>`

const LeaveGroupIcon = (props: SvgProps) => (
  <BaseIcon width={props.width} height={props.height} xml={xml} />
)

export default LeaveGroupIcon
