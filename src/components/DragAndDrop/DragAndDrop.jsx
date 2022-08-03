import { Button, Stack } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostMedia } from '../../redux/slices/PostSlice';

const DragAndDrop = () => {
  const dispatch = useDispatch();
  const { postMedia } = useSelector((state) => state.postReducer);

  const [drag, setDrag] = React.useState(false);
  const [imageToggler, setImageToggler] = React.useState(false);
  const [isMediaAdd, setMediaAdd] = React.useState(false);

  function dragStartHendler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHendler(e) {
    e.preventDefault();
    setDrag(false);
  }

  async function onDropHandler(e) {
    try {
      e.preventDefault();
      let files = [...e.dataTransfer.files];
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      const { data } = await axios.post(`http://localhost:5000/upload`, formData);
      dispatch(setPostMedia(data));
      setDrag(false);
      setImageToggler(false);
      setMediaAdd(true);
    } catch (error) {
      console.log(`Ошибка при загрузке файлов: ${error}`);
    }
  }

  const displayCalendar = () => {
    setImageToggler(!imageToggler);
  };

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
      <Button
        onClick={displayCalendar}
        sx={
          imageToggler
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100px',
                marginBottom: '10px',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '300px',
                marginBottom: '10px',
              }
        }>
        {imageToggler ? 'Скрыть' : 'Добавить фотографии к отчёту'}
      </Button>
      <Stack>
        {drag ? (
          <div
            onDragStart={(e) => dragStartHendler(e)}
            onDragLeave={(e) => dragLeaveHendler(e)}
            onDragOver={(e) => dragStartHendler(e)}
            onDrop={(e) => onDropHandler(e)}
            style={
              imageToggler
                ? {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                    width: '50vw',
                    height: '50vh',
                    border: '1px dashed #002A5B',
                    backgroundColor: 'rgba(0,0,0, .1)',
                    color: '#002A5B',
                    marginBottom: '10px',
                  }
                : { display: 'none' }
            }>
            Отпустите кнопку мыши, чтобы прикрепить фото или видео
          </div>
        ) : (
          <div
            onDragStart={(e) => dragStartHendler(e)}
            onDragLeave={(e) => dragLeaveHendler(e)}
            onDragOver={(e) => dragStartHendler(e)}
            style={
              imageToggler
                ? {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                    width: '50vw',
                    height: '50vh',
                    border: '1px dashed #002A5B',
                    color: '#002A5B',
                    marginBottom: '10px',
                  }
                : { display: 'none' }
            }>
            Перетащите сюда фотографии или видео, чтобы прикрепить их к отчёту
          </div>
        )}
      </Stack>
      {isMediaAdd ? (
        <Stack direction="column">
          {postMedia.map((obj, index) => (
            <div key={index}>
              <img
                style={{ width: '50%', height: '50%', marginBottom: '10px' }}
                src={`http://localhost:5000${obj}`}
                alt={obj}
              />
            </div>
          ))}
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default DragAndDrop;
