import types from "../types";
import { setPhotos, setAlbumContent, setPending, clearPending } from "../actions";
import { SelectionAction, SelectionReducer, DefaultThunkAction } from "../../types/redux";
import { PENDINGS } from "../../constants/enums";

const URL = process.env.REACT_APP_API_URL;

export const setSelection = (selectedFiles: SelectionReducer): SelectionAction => ({
  type: types.SET_SELECTION,
  payload: selectedFiles
});

export const toggleSelection = (fileId: number): DefaultThunkAction => (
  dispatch,
  getState
): void => {
  const state = getState();
  const isSelected = !!state.selection[fileId];

  let newSelection;
  if (isSelected) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [fileId]: removed, ...toSave } = state.selection;
    newSelection = toSave;
  } else {
    newSelection = { ...state.selection, [fileId]: fileId };
  }

  dispatch(setSelection(newSelection));
};

export const clearSelection = (): SelectionAction => setSelection({});

export const deleteFiles = (): DefaultThunkAction => async (dispatch, getState): Promise<void> => {
  const { photos, selection, albumContent } = getState();
  const toRemove = Object.values(selection);

  setPending(PENDINGS.deleteFiles);
  try {
    await fetch(`${URL}/files/delete`, {
      method: "DELETE",
      body: JSON.stringify({ id: toRemove })
    });
    dispatch(setPhotos(photos.filter(file => !toRemove.includes(file.id))));

    if (albumContent.length) {
      dispatch(setAlbumContent(albumContent.filter(file => !toRemove.includes(file.id))));
    }

    dispatch(clearSelection());
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearPending());
  }
};
