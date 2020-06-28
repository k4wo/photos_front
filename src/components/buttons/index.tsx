import ButtonIcon from "./Icon/ButtonIcon";

import PrimaryButton from "./variants/Primary";
import PrimaryLoaderButton from "./variants/PrimaryLoader";
import PrimaryOutlineButton from "./variants/PrimaryOutline";
import TransparentButton from "./variants/Transparent";
import TransparentIconButton from "./variants/TransparentIcon";
import SelectListButton from "./variants/SelectList";

import "./components/button.css";
import "./variants/variants.css";

const Buttons = {
  Icon: ButtonIcon,

  Primary: PrimaryButton,
  PrimaryLoader: PrimaryLoaderButton,
  PrimaryOutline: PrimaryOutlineButton,
  Transparent: TransparentButton,
  TransparentIcon: TransparentIconButton,
  SelectList: SelectListButton
};

export {
  ButtonIcon,
  PrimaryButton,
  PrimaryLoaderButton,
  PrimaryOutlineButton,
  TransparentButton,
  TransparentIconButton,
  SelectListButton
};

export default Buttons;
