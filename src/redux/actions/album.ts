import { DefaultThunkAction } from "../../types/redux";
import { clearSelection } from "./selection";

const URL = process.env.REACT_APP_API_URL;

export const addSelectedToAlbum = (albumId: number): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  const { selection } = getState();
  const files = Object.values(selection);

  try {
    await fetch(`${URL}/album/${albumId}/files`, {
      method: "PUT",
      body: JSON.stringify({ files })
    });

    dispatch(clearSelection());
  } catch (error) {
    console.log(error);
  }
};
